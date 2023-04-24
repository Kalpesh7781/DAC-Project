import "../Stylesheet/Login.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import React, { useEffect, useState } from "react";
import img from "../Images/car.jpg";
import Navbar1 from "../Component/Subcimponent/Navbar1";
import Navbar2 from "../Component/Subcimponent/Navbar2";
import Commonsection from "../Component/Subcimponent/Commonsection";

import axios from "axios";
function Login() {
  const [user, setUser] = useState({});
  const [data1, setdata1] = useState("");

  const Handle = (event) => {
    let validate = false;
    getre();
    

    if (user.user_password == data1) {
      validate = true;localStorage.setItem('loguser',user.user_no);
    } else {
      event.preventDefault();
      alert("incorrect credential");
      return false;
    }
     

    return validate;
  };
  const getre = () => {
    axios.get(`http://localhost:8080/getuser/${user.user_no}`).then(
      (Response) => setdata1(Response.data),
      (Error) => {}
    );
  };

  return (
    <div className=" Login">
      <Navbar1 />
      <Navbar2 />
      <Commonsection title="Login" />
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
              <Form onSubmit={Handle} action="/Tripzy.com/user/" id="form">
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Phone Number</b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter phoneno"
                    id="user_no"
                    required
                    maxLength={10}
                    minLength={10}
                    onChange={(e) => {
                      setUser({ ...user, user_no: e.target.value });
                    }}
                  />
                  <p id="err" title="wrong phoneno">
                    {" "}
                  </p>
                  <Form.Text className="text-muted">
                    We'll never share your phoneno with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    <b>Password</b>
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
                  <p id="err" title="wrong password">
                    {" "}
                  </p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" id="submit">
                  <b>Login </b>
                </Button>
              </Form>
            </div>{" "}
            <hr />
            <div className="signup_ln">
              {" "}
              Dont have an Account :
              <strong>
                {" "}
                <a href="/signup">Sign up</a>
              </strong>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
