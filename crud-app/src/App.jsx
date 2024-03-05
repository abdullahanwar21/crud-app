import React from "react";
import DarkExample from "./Table";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Row>
        <Col className="offset-md-3 col-md-6 offset-md-3 my-5 col-sm-12 ">
          <h2 className="my-3 text-center fs-1">
            Crud <span className="text-primary">app</span>
          </h2>
          <DarkExample />
          
        </Col>
      </Row>
    </Container>
  );
};

export default App;
