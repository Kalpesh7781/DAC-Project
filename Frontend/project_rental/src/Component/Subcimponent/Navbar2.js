import "../../Stylesheet/Navbar2.css";
import carlogo from "../../Images/carlogo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <div className="Navbar2">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <Link to="./">
              <div className="bname">
                <img alt="" src={carlogo} className="responsive" /> TRIPZY{" "}
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <h5 className="desc">
                <i className="bi bi-car-front"></i> &nbsp;&nbsp;
                <b>The Best Car Rental</b>
              </h5>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar2;
