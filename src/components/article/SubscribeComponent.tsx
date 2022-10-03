import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ChevronRight, Telegram } from "react-bootstrap-icons";

import subscribeImage from "../../assets/images/newsletter-sub-new-image.png";

const styles = {
  subscribeLabel: {
    backgroundColor: "var(--c-primary)",
    color: "var(--c-text-inverse)",
    fontSize: "var(--fs-subscription)",
    fontFamily: "var(--ff-subscription)",
    lineHeight: "var(--lh-subscription)",
  },
  subscribeText: {
    fontSize: "var(--fs-link)",
    fontFamily: "var(--ff-link)",
    lineHeight: "var(--lh-link)",
  },
  subscribeImage: {
    top: -30,
  },
  subscribeInput: {
    fontSize: "var(--fs-text-sm)",
    fontFamily: "var(--ff-text-sm)",
    lineHeight: "var(--lh-text-sm)",
    color: "var(--c-accent-light)",
    borderColor: "var(--c-muted-accent-high)",
  },
  subscribeButton: {
    fontSize: "var(--fs-button-s)",
    fontFamily: "var(--ff-button-s)",
    fontWeight: 500,
    textTransform: "uppercase" as "uppercase",
    color: "var(--c-text-inverse)",
    backgroundColor: "var(--c-primary)",
    borderColor: "var(--c-primary-accent-high)",
  },
  subscribeDisclaimer: {
    fontSize: "var(--fs-sub-description-s)",
    fontFamily: "var(--ff-sub-description-s)",
    lineHeight: "var(--lh-sub-description-s)",
    color: "var(--c-text)",
  },
  telegramWrapper: {
    backgroundColor: "var(--c-muted)",
  },
  telegramIcon: {
    backgroundColor: "#fff",
    width: 80,
    height: 80,
  },
  telegramCtaStyle1: {
    fontSize: "var(--fs-subscription)",
    fontWeight: 400,
    fontFamily: "var(--ff-subscription)",
    lineHeight: "var(--lh-subscription)",
  },
  telegramCtaStyle2: {
    fontSize: "var(--fs-sub-description)",
    fontWeight: 200,
    fontFamily: "var(--ff-sub-description)",
    lineHeight: "var(--lh-sub-description)",
  },
  redText:{
    color: 'var(--c-primary)'
  }
};

const SubscribeComponent = () => {
  return (
    <Row>
      <Col sm={7} xl={6}>
        <div className="d-flex flex-column border border-1">
          <div className="py-3 ps-4" style={styles.subscribeLabel}>
            Stay in the know. Anytime. <br />
            Anywhere.
          </div>

          <Row
            className="px-4 pt-4 pb-md-0 pb-md-4 pb-lg-0 pb-xxl-4 d-flex flex-row"
            style={styles.subscribeText}
          >
            <Col xs={7} xl={6} className="pe-1">
              Subscribe to get daily news updates, insights and must reads
              delivered straight to your inbox.
            </Col>
            <Col xs={5} xl={6} className="position-relative">
              <Image
                src={subscribeImage}
                fluid
                className="position-absolute w-100 px-3"
                style={styles.subscribeImage}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <InputGroup className="p-3 pb-3 pt-xl-3">
                <Form.Control
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  aria-describedby="subscribe-input-field"
                  style={styles.subscribeInput}
                  className="border border-top-0 border-end-0 border-start-0 rounded-0"
                />
                <Button
                  variant="outline-secondary"
                  id="subscribe-input-field"
                  className="rounded-0 border-0 px-3 py-2"
                  style={styles.subscribeButton}
                >
                  SUBSCRIBE <ChevronRight />
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <div className="mt-1 px-3 pb-3" style={styles.subscribeDisclaimer}>
            By clicking subscribe, I agree for my personal data to be used to
            send me TODAY newsletters, promotional offers and for research and
            analysis.
          </div>
        </div>
      </Col>

      <Col sm={5} xl={6}>
        <a
          href="https://t.me/todayonlinesg"
          className="p-5 p-lg-0 d-flex flex-column justify-content-center align-items-center h-100"
          style={styles.telegramWrapper}
        >
          <div
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={styles.telegramIcon}
          >
            <Telegram size={80} color="#0088CC" />
          </div>
          <div className="my-3" style={styles.telegramCtaStyle1}>
            Follow <span style={styles.redText}>today</span>
            <br />
            on Telegram!
          </div>
          <div style={styles.telegramCtaStyle2}>
            Join our channel at
            <br />
            <span style={styles.redText}>t.me/todayonlinesg</span>
          </div>
        </a>
      </Col>
    </Row>
  );
};

export default SubscribeComponent;
