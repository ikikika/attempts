import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Modal,
} from "react-bootstrap";
import Chart from "../components/Chart";
import { getData } from "../data/chartData";
import { useAuth } from "../libs/contextLib";
import paymentTypesImg from "../assets/payment.png";
import { BsArrowRepeat } from "react-icons/bs";
import "../components/LoaderButton.css";

export default function Dashboard() {
  const { authTokens } = useAuth();

  const [data, setData] = useState(null);

  const [isDisabled, setIsDisabled] = useState(false);
  const [txnQty, setTxnqty] = useState("");
  const [balance, setBalance] = useState(0);
  const [newBalance, setNewBalance] = useState(0);
  const [txnMessage, setTxnMessage] = useState("");
  const [txnHistory, setTxnHistory] = useState([]);
  const [modalInformation, setModalInformation] = useState({
    show: false,
    type: "",
  });

  const unitPrice = 3.12;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = parseInt(txnQty) * unitPrice;
    setTotalPrice(price.toFixed(2));
  }, [txnQty]);

  useEffect(() => {
    getData().then((data) => {
      setData({ data });
    });
    queryBalance();
    fetchTxnHistory();
  }, []);

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTxnHistory();
      setTime(Date.now());
    }, 15000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
    setNewBalance(parseInt(balance) + parseInt(txnQty));
    await setModalInformation({ show: true, type: "Make Payment" });
  };

  const makePayment = async () => {
    await setIsDisabled(true);
    await setModalInformation({ show: true, type: "Processing" });
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
    await setModalInformation({ show: false, type: "" });
    await setIsDisabled(false);
  };

  const handleShort = async () => {
    setTxnMessage("");
    if (txnQty < 1) {
      setTxnMessage("Quantity must be more than 1");
      return;
    } else if (balance < txnQty) {
      setTxnMessage("You cannot sell more than what you own");
      return;
    }
    setNewBalance(parseInt(balance) - parseInt(txnQty));
    await setModalInformation({ show: true, type: "Receive Payment" });
  };

  const receivePayment = async () => {
    await setIsDisabled(true);
    await setModalInformation({ show: true, type: "Processing" });
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
    await setModalInformation({ show: false, type: "" });
    await setIsDisabled(false);
  };

  const changeTxnQty = (event) => {
    setTxnqty(event.target.value.replace(/\D/, ""));
  };

  const getAmount = (arr) => {
    if (arr.length) {
      const array = arr.filter((t) => t.account === "0.0.318106");

      return array[0].amount;
    }
  };

  return (
    <>
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
            <h3
              style={{
                border: "1px solid #495057",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "50px",
              }}
            >
              You own: {balance}
            </h3>
            <h3>Unit Price: {unitPrice}</h3>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  size="lg"
                  type="number"
                  step="1"
                  placeholder="Transaction Qty"
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
                  <td colSpan={5} style={{ textAlign: "center" }}>
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </Container>{" "}
      <Modal
        show={modalInformation.show}
        onHide={() => setModalInformation({ ...modalInformation, show: false })}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalInformation.type}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <h4>Amount: ${totalPrice}</h4>
              </Col>
            </Row>
            {
              {
                "Make Payment": (
                  <>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <img
                          src={paymentTypesImg}
                          style={{ maxWidth: "200px" }}
                        />
                      </Col>
                    </Row>

                    <Form>
                      <Form.Group controlId="formGridAddress1">
                        <Form.Label>Credit Card</Form.Label>
                        <Form.Control value="4444 - 4444 - 4444 - 4444" />
                      </Form.Group>

                      <Form.Group controlId="formGridAddress2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value="John Smith" />
                      </Form.Group>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control value="03/25" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Security Code</Form.Label>
                          <Form.Control type="password" value="123" />
                        </Form.Group>
                      </Form.Row>
                    </Form>
                  </>
                ),
                "Receive Payment": (
                  <>
                    <h5 style={{ textAlign: "center", margin: "90px 0px" }}>
                      You will receive ${totalPrice} in your registered bank
                      account within 3-5 working days.
                    </h5>
                  </>
                ),
                Processing: (
                  <div
                    className={`LoaderButton`}
                    style={{ fontSize: "200px", textAlign: "center" }}
                  >
                    <BsArrowRepeat className="spinning" />
                  </div>
                ),
              }[modalInformation.type]
            }
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="mr-auto"
            onClick={() =>
              setModalInformation({ ...modalInformation, show: false })
            }
          >
            Close
          </Button>

          <h5>New total: {newBalance}</h5>
          {modalInformation.type === "Make Payment" ? (
            <Button variant="primary" onClick={makePayment}>
              Confirm
            </Button>
          ) : modalInformation.type === "Receive Payment" ? (
            <Button variant="primary" onClick={receivePayment}>
              Confirm
            </Button>
          ) : (
            <></>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
