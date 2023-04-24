import "../../Stylesheet/Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className=" Footer">
      <Container>
        <Row>
          <Col lg="5" md="5" sm="12">
            <div className="footer__link-title">
              <h1>
                <span>
                  TRIPZY <br /> Car Rental
                </span>
              </h1>
            </div>
            <p className="footer__logo-content">
              <strong>Tripzy</strong> is India’s largest marketplace for cars on
              rent. From short road trips to quick in-city drives for groceries,
              supply pick-up, food runs, we have the cheapest car rental options
              for all your needs! A hatchback for daily commute, a sedan for
              short trips, SUV for hills or a luxury car for a surprise.
            </p>
          </Col>

          <Col lg="3" md="3" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <div id="links">
                {" "}
                <Link to="./Home">Home</Link>
                <br /> <br />
                <Link to="./Cars">Book Car</Link>
                <br /> <br />
                <Link to="./Contactus">Contact us</Link>
                <br /> <br />
                <Link to="./Aboutus">Aboutus</Link>
              </div>
            </div>
          </Col>

          <Col lg="4" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Head Office</h5>
              <p>C-DAC, Erstwhile NCST, 68,</p>
              <p> Electronic City Phase I, Bengaluru</p>

              <p> Karnataka 560100</p>

              <p> +91 9922887781</p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright 2023, Developed by
                CDAC Banglore. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
