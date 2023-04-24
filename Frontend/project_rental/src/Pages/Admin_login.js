import React from "react";
import "../Stylesheet/Admin_Login.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import img from "../Images/car.jpg";
import Navbar1 from "../Component/Subcimponent/Navbar1";
import Navbar2 from "../Component/Subcimponent/Navbar2";
import Commonsection from "../Component/Subcimponent/Commonsection";

function Admin_login() {
  function loginhandler(event) {
    let aemail = document.getElementById("aemail").value;
    let apassword = document.getElementById("apassword").value;

    let validate = false;
    if (aemail == "admin@123" && apassword == "11111111") {
      validate = true;
    } else if (aemail !== "admin@123") {
      alert("incorrect email");
      event.preventDefault();
    } else if (apassword !== "11111111") {
      alert("incorrect password");
      event.preventDefault();
    } else {
      validate = false;
      event.preventDefault();
    }
    return validate;
  }

  return (
    <div className="  Admin_login">
      <Navbar1 />
      <Navbar2 />
      <Commonsection title="Admin Login" />
      <div className="login_container">
        <Row>
          <Col lg="1" md="1" sm="1"></Col>
          <Col lg="5" md="5" sm="2">
            <div className="log_img"></div>
            <img src={img} className="w-100 rounded-2 h-100 "></img>
          </Col>
          <Col lg="1" md="1" sm="1"></Col>
          <Col lg="4" md="4" sm="3">
            <div className="Box login_in ">
              <Form onSubmit={loginhandler} action="/log/" id="aform">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <b>Email address</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="aemail"
                    required
                    maxLength={45}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <b>Password</b>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="apassword"
                    required
                    minLength={8}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" id="asubmit">
                  <b>Login</b>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Admin_login;
