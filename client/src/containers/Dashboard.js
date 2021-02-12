import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import Chart from "../components/Chart";
import { getData } from "../data/chartData";
import { useAuth } from "../libs/contextLib";

export default function Dashboard() {
  const { authTokens } = useAuth();

  const [data, setData] = useState(null);

  const [isDisabled, setIsDisabled] = useState(false);
  const [txnQty, setTxnqty] = useState("");
  const [balance, setBalance] = useState(0);
  const [txnMessage, setTxnMessage] = useState("");
  const [txnHistory, setTxnHistory] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setData({ data });
    });
    queryBalance();
    fetchTxnHistory();
  }, []);

  setInterval(fetchTxnHistory(), 10000);

  function queryBalance() {
    axios
      .get(process.env.REACT_APP_URL + "/balance", {
        headers: { Authorization: "Bearer " + authTokens },
      })
      .then((res) => {
        if (res.status === 200) {
          setBalance(res.data);
        } else {
          setBalance("Error");
        }
      })
      .catch((e) => {
        setBalance("Error");
      });
  }

  function fetchTxnHistory() {
    const url =
      "https://api.testnet.kabuto.sh/v1/account/0.0.318106/transaction";
    axios.get(url).then((res) => setTxnHistory(res.data.transactions));
  }

  const handleLong = async () => {
    setTxnMessage("");

    if (txnQty < 1) {
      setTxnMessage("Quantity must be more than 1");
      return;
    }
    await setIsDisabled(true);
    await axios
      .post(
        process.env.REACT_APP_URL + "/transaction",
        { action: "long", quantity: txnQty },
        {
          headers: { Authorization: "Bearer " + authTokens },
        }
      )
      .then((res) => {
        if (res.data.status._code === 22) {
          queryBalance();
          fetchTxnHistory();
          setTxnqty("");
        }
      });
    await setIsDisabled(false);
  };

  const handleShort = async () => {
    setTxnMessage("");
    if (balance < txnQty) {
      setTxnMessage("You cannot sell more than what you own");
      return;
    }
    await setIsDisabled(true);
    await axios
      .post(
        process.env.REACT_APP_URL + "/transaction",
        { action: "short", quantity: txnQty },
        {
          headers: { Authorization: "Bearer " + authTokens },
        }
      )
      .then((res) => {
        if (res.data.status._code === 22) {
          queryBalance();
          fetchTxnHistory();
          setTxnqty("");
        }
      });
    await setIsDisabled(false);
  };

  const changeTxnQty = (event) => {
    setTxnqty(event.target.value);
  };

  const getAmount = (arr) => {
    if (arr.length) {
      const array = arr.filter((t) => t.account === "0.0.318106");

      return array[0].amount;
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Dow Jone Industrial Average </h2>
        </Col>
      </Row>
      <Row>
        <Col md={9}>
          {data === null ? <div>Loading...</div> : <Chart data={data.data} />}
        </Col>
        <Col md={3}>
          <h3>You own: {balance}</h3>
          <h3>Unit Price: 3.12</h3>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                size="lg"
                type="number"
                placeholder="Transaction Quantity"
                value={txnQty}
                onChange={changeTxnQty}
                min={0}
                readOnly={isDisabled}
              />
            </Form.Group>
            <p style={{ color: "blue" }}>{txnMessage}</p>
            <Button
              variant="success"
              size="lg"
              block
              disabled={isDisabled}
              onClick={handleLong}
            >
              Buy
            </Button>
            <Button
              variant="danger"
              size="lg"
              block
              disabled={isDisabled}
              onClick={handleShort}
            >
              Sell
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Consensus Timestamp</th>
              <th>Result</th>
              <th>Token Id</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {txnHistory.length ? (
              txnHistory.map((txn) => (
                <React.Fragment key={txn.transaction_id}>
                  <tr>
                    <td>
                      <a
                        href={
                          "https://explorer.kabuto.sh/testnet/transaction/" +
                          txn.hash
                        }
                        target="_blank"
                      >
                        {txn.id}
                      </a>
                    </td>
                    <td>{txn.consensusAt}</td>
                    <td>{txn.status}</td>
                    <td>0.0.321939</td>
                    <td>
                      {/* {
                        txn.token_transfers.filter(
                          (t) => t.account === "0.0.318106"
                        ).amount
                      } */}
                      {getAmount(txn.tokenTransfers)}
                    </td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colspan={5} style={{ textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
