import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { SignInForm } from "../components/SignInForm";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";

export const Login = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100" style={{ maxWidth: "800px" }}>
          <Col md={6}>
            <Card className="shadow-lg p-4 rounded" style={{ border: "none" }}>
              <Card.Body>
                <h2 className="text-center mb-4">Welcome Back</h2>
                <SignInForm />
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center text-center"
          >
            <div className="fs-3 fw-semibold">
              <div className="text-success">
                <BsGraphUpArrow className="me-2" /> Take managing your finances
                to a whole new level.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
