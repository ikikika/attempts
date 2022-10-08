import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import ShapesJson from "../asset/shapes.json";

ShapesJson.sort(function (a, b) {
  return a.id - b.id;
});

const Admin = () => {
  const [Shapes, setShapes] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("Shapes")) {
      setShapes(JSON.parse(localStorage.getItem("Shapes")));
    } else {
      setShapes(ShapesJson);
    }
  }, []);

  return (
    <Container fluid style={{ padding: "0" }}>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar active="shapes" />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <Container>
            <Row>
              <h1>Shapes</h1>
              <Link to="/admin/shape/add">
                <Button variant="primary">Add Shape</Button>
              </Link>
            </Row>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Text</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Shapes.sort().map((shape) => {
                      return (
                        <tr key={shape.id}>
                          <td>{shape.id}</td>
                          <td>{shape.text}</td>
                          <td>
                            {/* <Button variant="warning">Edit</Button> */}
                            <Button
                              variant="danger"
                              onClick={() => {
                                let newShapes = Shapes.filter((s) => {
                                  return s.id != shape.id;
                                });
                                setShapes(newShapes);

                                localStorage.setItem(
                                  "Shapes",
                                  JSON.stringify(newShapes)
                                );
                              }}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
