import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../../Images/car.jpg";
import "../../Stylesheet/Profile.css";
import Card from "react-bootstrap/Card";


function  Cancel_Card (props){
const { booking_id,returndate,rentalDate,car,user } = props.item;
if(localStorage.getItem("loguser")==user.user_no)
{
return(
<div className="Cancel_Card">
<>
        {["Light"].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            className="mb-2"
          >
            <Card.Header>Cancellation Detalils</Card.Header>
            <Card.Body>
              <Container className="booking_details">
                <Row>
                  <Col lg="3" md="3" sm="2">
                    <img
                      src={img}
                      className="w-100 h-100 p-0.5  rounded-5"
                    ></img>
                  </Col>
                  <Col lg-8>
                    <Card.Text>
                      <div className="details_info">
                        <h5>Booking ID : {booking_id}</h5>
                        
                          <h5>From Date : {rentalDate}</h5>
                       
                          <h5>Return Date : {returndate}</h5>
                         
                          <h5>Car ID : {car.id}</h5>
                          
                          <h5>User Mobile NO : {user.user_no}</h5>
                        
                      </div>{" "}
                    </Card.Text>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        ))}
      </>
</div>
);}
}
export default Cancel_Card;