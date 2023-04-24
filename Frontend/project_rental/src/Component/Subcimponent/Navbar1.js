import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../Stylesheet/Navbar1.css";
function Navbar1() {
  return (
    <div className="Navbar1">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <div className="no">Need Help? </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {" "}
              <div className="no">
                <i className="bi bi-telephone"></i>&nbsp;&nbsp;
                <Link to="tel:+91-992-288-7781">call us: +91 9922887781 </Link>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
