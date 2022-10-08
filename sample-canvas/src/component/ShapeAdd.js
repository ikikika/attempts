import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Shapes from "../asset/shapes.json";

Shapes.sort(function (a, b) {
  return a.id - b.id;
});

const ShapeAdd = () => {
  const navigate = useNavigate();
  const [shape, setShape] = useState({
    fill: "",
    points: "",
    width: "",
    height: "",
    top: "",
    left: "",
    hoverColor: "",
    text: "",
    link: "",
  });

  const onChangeHandler = (e) => {
    let fieldName = e.target.name;
    let fleldVal = e.target.value;
    setShape({ ...shape, [fieldName]: fleldVal });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const maxId = Math.max.apply(
      Math,
      Shapes.map(function (o) {
        return o.id;
      })
    );
    let newShape = shape;
    newShape.id = maxId + 1;
    Shapes.push(shape);
    localStorage.setItem("Shapes", JSON.stringify(Shapes));
    navigate("/");
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar active="shapes" />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <Container>
            <Row>
              <h1>Add Shape</h1>
            </Row>
            <Row>
              <Col>
                <Form onSubmit={onSubmitHandler}>
                  <Form.Group className="mb-3">
                    <Form.Label>Fill Colour</Form.Label>
                    <Form.Control
                      name="fill"
                      type="text"
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Points</Form.Label>
                    <Form.Control
                      type="text"
                      name="points"
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Width</Form.Label>
                    <Form.Control
                      type="text"
                      name="width"
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Height</Form.Label>
                    <Form.Control
                      type="text"
                      name="height"
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Top</Form.Label>
                    <Form.Control
                      type="text"
                      name="top"
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Left</Form.Label>
                    <Form.Control
                      type="text"
                      name="left"
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Hover Colour</Form.Label>
                    <Form.Control
                      type="text"
                      name="hoverColor"
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                      type="text"
                      name="text"
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Link</Form.Label>
                    <Form.Control
                      type="text"
                      name="link"
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ShapeAdd;
