import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import HeaderComponent from "../Common/HeaderComponent";

const LoginComponent = (prop) => {
  return (
    <>
      <HeaderComponent />
      <div className="login-container">
        <Card>
          <Card.Header>SIGN IN</Card.Header>
          <Card.Body>
            {/* <Form> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="left-align-text">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="left-align-text">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* </Form> */}
            <Link to="/dashboard">
              <Button variant="primary">SIGN IN</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default LoginComponent;
