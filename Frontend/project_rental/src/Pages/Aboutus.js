import React from "react";

import "../Stylesheet/Aboutus.css";
import Commonsection from "../Component/Subcimponent/Commonsection";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Drive from "../Images/drive.jpg";
import Aboutsection from "../Component/Subcimponent/Aboutsection";
function Aboutus() {
  return (
    <div className=" Aboutus">
      <Commonsection title="About Us" />
      <Aboutsection />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={Drive} alt="" className="w-100 rounded-2" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  <b> Tripzy = Trips + Easy </b>
                </h2>

                <p className="section__description">
                  Tripzy Self Drive Cars gives you a choize of using our amazing
                  cars with your choize of privacy and freedom, so that you can
                  start enjoying your road journey as you wish without waiting
                  to reach your destination.
                </p>

                <p className="section__description">
                  To top it up and be true in our endeavor, Tripzy Self Drive
                  Car Rentals in India is available without any kilometer
                  capping, thus offering unlimited kilometers on all bookings
                  made by you.
                </p>

                <hr />
                <h3>For Help</h3>
                <p>+91 9922887781</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Aboutus;
