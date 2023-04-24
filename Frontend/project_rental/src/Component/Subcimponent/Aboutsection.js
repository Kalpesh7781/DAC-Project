import "../../Stylesheet/Aboutsection.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import aboutimg from "../../Images/about.png";
function Aboutsection() {
  return (
    <div className="Aboutsection">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">
                Welcome to <strong>TRIPZY</strong> car rent service
              </h2>
              <p className="section__description">
                <strong>Tripzy</strong> Car Rental is a self drive brand owned
                by CDAC Banglore, India's largest self drive car rental company
                currently managing more than 63 cars in our fleet in
                Banglore,Pune,Mumbai. With Tripzy , we endeavor to provide
                Indian users the Best in Class service and technology at Indian
                prices.
              </p>
              <hr />

              <div className="about__section-item">
                <p>Easy Booking</p>

                <p>Budget Friendly</p>
              </div>

              <div className="about__section-item ">
                <p>24*7 support</p>

                <p>Unlimited kilometers</p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutimg} alt="photo" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutsection;
