const puppeteer = require("puppeteer");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// router.route("/stock/:ticker").get(async (req, res) => {
// router.route("/stock").get(async (req, res) => {
//   let ticker = req.ticker;
const stock = async () => {
  let ticker = "%5EDJI";

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  let url = `https://finance.yahoo.com/quote/${ticker}?p=${ticker}&.tsrc=fin-srch`;

  await page.goto(url);
  await page.waitFor("#quote-market-notice", { timeout: 1000 });
  let price = await page.evaluate(
    () =>
      document.querySelector(
        "#quote-header-info > div.Pos\\(r\\) > div > div > span"
      ).textContent
  );
  await browser.close();

  console.log({ ticker, price });

  const csvWriter = createCsvWriter({
    path: "./data/dji.csv",
    header: [
      { id: "date", title: "date" },
      { id: "open", title: "open" },
      { id: "high", title: "high" },
      { id: "low", title: "low" },
      { id: "close", title: "close" },
      { id: "adj_close", title: "adj_close" },
      { id: "volume", title: "volume" },
    ],
    append: true,
  });
  await csvWriter
    .writeRecords({
      date: "ddd",
      open: "ddd",
      high: "ddd",
      low: "ddd",
      close: "ddd",
      adj_close: "ddd",
      volume: "ddd",
    })
    .then(() => console.log("csv updated"));
  //   res.send({ ticker, price });
};

// });

// router.param("ticker", (req, res, next, ticker) => {
//   req.ticker = ticker.toUpperCase();
//   next();
// });

module.exports = stock;
