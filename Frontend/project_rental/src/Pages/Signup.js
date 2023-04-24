import React, { useEffect, useState } from "react";
import "../Stylesheet/Signup.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";

import Navbar1 from "../Component/Subcimponent/Navbar1";
import Navbar2 from "../Component/Subcimponent/Navbar2";
import Commonsection from "../Component/Subcimponent/Commonsection";

import axios from "axios";
function Signup() {
  useEffect(() => {
    document.title = "Sign up || Tripzy Car";
  }, []);

  function handler(event) {
    let validate = false;
    alert("sucessfull");
    

    if (user.user_password == user.pswd2) {
      validate = true;
      postto(user);
    } else {
      alert("password not matched");
      event.preventdefault();
      validate = false;
    }
    return validate;
  }

  //user data
  const [user, setUser] = useState({});
  //create function
  const postto = (user1) => {
    axios.post(`http://localhost:8080/adduser`, user1).then(
      (res) => {
        
      },
      (err) => {}
    );
  };

  return (
    <div className="  signup">
      <Navbar1 />
      <Navbar2 />
      <Commonsection title="Sign up" />
      <div className="login_container">
        <Row>
          <Col lg="1" md="1" sm="1"></Col>
          <Col>
            <div className="Box login_in ">
              <Form onSubmit={handler} action="">
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Full Name</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    id="user_nm"
                    required
                    minLength={10}
                    onChange={(e) => {
                      setUser({ ...user, user_nm: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Email address</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="user_email"
                    required
                    maxLength={45}
                    onChange={(e) => {
                      setUser({ ...user, user_email: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Mobile No</b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Number (10 digits)"
                    id="user_no"
                    required
                    minLength={10}
                    max={9999999999}
                    onChange={(e) => {
                      setUser({ ...user, user_no: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Date Of Birth</b>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="user_dob"
                    required
                    mobile
                    onChange={(e) => {
                      setUser({ ...user, user_dob: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Gender</b>
                  </Form.Label>
                  <Form.Control
                    type="select"
                    id="user_gender"
                    required
                    onChange={(e) => {
                      setUser({ ...user, user_gender: e.target.value });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    id="user_address"
                    required
                    maxLength={150}
                    onChange={(e) => {
                      setUser({ ...user, user_address: e.target.value });
                    }}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>{" "}
                    <Form.Control
                      id="user_city"
                      required
                      maxLength={45}
                      onChange={(e) => {
                        setUser({ ...user, user_city: e.target.value });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>{" "}
                    <Form.Control
                      id="user_state"
                      required
                      maxLength={45}
                      onChange={(e) => {
                        setUser({ ...user, user_state: e.target.value });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      id="user_zip"
                      type="number"
                      required
                      minLength={6}
                      max={999999}
                      onChange={(e) => {
                        setUser({ ...user, user_zip: e.target.value });
                      }}
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Adhar No</b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Number (12 digits)"
                    id="user_adhar"
                    required
                    minLength={12}
                    max={999999999999}
                    onChange={(e) => {
                      setUser({ ...user, user_adhar: e.target.value });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <b> Set Password</b>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="user_password"
                    required
                    minLength={8}
                    onChange={(e) => {
                      setUser({ ...user, user_password: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b> Confirm Password</b>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="pswd2"
                    required
                    minLength={8}
                    onChange={(e) => {
                      setUser({ ...user, pswd2: e.target.value });
                    }}
                  />
                </Form.Group>

                <Button variant="primary" type="submit ">
                  <b>Signup </b>
                </Button>
              </Form>
            </div>{" "}
            <hr />
            <div className="login_si">
              {" "}
              Already have an Account :
              <strong>
                {" "}
                <a href="/">Login</a>
              </strong>
            </div>
          </Col>
          <Col lg="1" md="1" sm="1"></Col>
        </Row>
      </div>
    </div>
  );
}

export default Signup;
