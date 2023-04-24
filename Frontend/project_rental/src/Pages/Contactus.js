import React from "react";
import Commonsection from "../Component/Subcimponent/Commonsection";
import "../Stylesheet/Contactus.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";

function Contactus() {
  function handler(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || message == "" || email == "") {
      event.preventdefault();
    } else {
      alert("message send");
    }
  }

  return (
    <div className=" Contactus">
      <Commonsection title="Contact Us" />
      <Container>
        <Row>
          <Col lg="7" md="7">
            <h6 className="fw-bold mb-4">Get In Touch</h6>

            <Form onSubmit={handler} action="">
              <div className="contact__form">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label> </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    id="name"
                    required="true"
                  />
                </Form.Group>
              </div>
              <div className="contact__form">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label> </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    id="email"
                    required
                  />
                </Form.Group>
              </div>
              <div className="contact__form">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label> </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                    id="message"
                    required
                    maxLength={150}
                  />
                </Form.Group>
              </div>

              <button className=" contact__btn" type="submit">
                Send Message
              </button>
            </Form>
          </Col>

          <Col lg="5" md="5">
            <div className="contact__info">
              <h6 className="fw-bold">Contact Information</h6>
              <p className="section__description mb-0">
                C-DAC ,Erstwhile NCST, 68, Electronic City Phase I,
                <br /> Bengaluru, Karnataka 560100
              </p>
              <br />
              <div className=" align-items-center gap-2">
                <h6 className="fs-6 mb-0">Phone:+91 9922887781</h6>
              </div>

              <div className="  align-items-center gap-2">
                <h6 className="mb-0 fs-6">Email:customerservice@tripzy.com</h6>
              </div>

              <h6 className="fw-bold mt-4">Follow Us on Twitter </h6>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                @Tripzy
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contactus;
