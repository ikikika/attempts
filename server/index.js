require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const accessTokenSecret = process.env.AUTH_SECRET;

const {
  Client,
  AccountId,
  PrivateKey,
  TokenCreateTransaction,
  TokenAssociateTransaction,
  TransferTransaction,
  AccountBalanceQuery,
} = require("@hashgraph/sdk");

const getChartData = require("./getChartData");

let users = require("./users.json");
let chartValues = require("./chartvalues.json");
let transactions = require("./transactions.json");

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("data"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// setInterval(getChartData, 5000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/getChartData", getChartData);

app.post("/login", (req, res) => {
  // Read username and password from request body
  const { username, password } = req.body;

  // Filter user from the users array by username and password
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    // Generate an access token
    const accessToken = jwt.sign(
      { username: user.username },
      accessTokenSecret
    );

    res.status(200).json({
      accessToken,
    });
  } else {
    res.status(400).send({ error: "Username or password incorrect" });
  }
});

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.get("/dashboard", authenticateJWT, (req, res) => {
  res.json(chartValues);
});

app.post("/transaction", authenticateJWT, async (req, res, next) => {
  // const txn = req.body;
  // transactions.push(txn);
  // res.send("Transaction added successfully");
  // res.send(req);
  // const fromUser = users.find((u) => {
  //   return u.username === req.user.username;
  // });
  // const toUser = users.find((u) => {
  //   return u.username === req.body.toUser;
  // });
  // console.log(toUser);
  let operatorId = "";
  let operatorKey = "";
  let accountId2 = "";
  let privateKey2 = "";
  if (req.body.action === "long") {
    operatorId = AccountId.fromString(process.env.ACCOUNT_ID);
    operatorKey = PrivateKey.fromString(process.env.PRIVATE_KEY);

    accountId2 = AccountId.fromString(process.env.ACCOUNT_ID_2);
    privateKey2 = PrivateKey.fromString(process.env.PRIVATE_KEY_2);
  } else if (req.body.action === "short") {
    operatorId = AccountId.fromString(process.env.ACCOUNT_ID_2);
    operatorKey = PrivateKey.fromString(process.env.PRIVATE_KEY_2);

    accountId2 = AccountId.fromString(process.env.ACCOUNT_ID);
    privateKey2 = PrivateKey.fromString(process.env.PRIVATE_KEY);
  } else {
    res.send("Invalid transaction");
    return;
  }
  const qty = Math.abs(parseInt(req.body.quantity));
  let client = Client.forTestnet();
  const newTokenId = "0.0.321939";
  client.setOperator(operatorId, operatorKey);

  const transferTx = await new TransferTransaction()
    .addTokenTransfer(newTokenId, operatorId, -qty)
    .addTokenTransfer(newTokenId, accountId2, qty)
    .execute(client);

  const transferReceipt = await transferTx.getReceipt(client);

  res.send(transferReceipt);
  // const accountBalance = await new AccountBalanceQuery()
  //   .setAccountId(AccountId.fromString(process.env.ACCOUNT_ID_2))
  //   .execute(client);

  // const balance = JSON.parse(accountBalance.tokens.toString())[newTokenId];

  // res.send(balance);
});

app.get("/balance", authenticateJWT, async (req, res) => {
  const accountId2 = AccountId.fromString(process.env.ACCOUNT_ID_2);
  const privateKey2 = PrivateKey.fromString(process.env.PRIVATE_KEY_2);
  let client = Client.forTestnet();
  const newTokenId = "0.0.321939";
  client.setOperator(accountId2, privateKey2);

  const accountBalance = await new AccountBalanceQuery()
    .setAccountId(accountId2)
    .execute(client);

  const balance = JSON.parse(accountBalance.tokens.toString())[newTokenId];

  res.send(balance);
});

app.get("/transaction", authenticateJWT, (req, res) => {
  res.json(transactions);
});
