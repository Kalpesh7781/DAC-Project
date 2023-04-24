import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../../Images/car.jpg";
import "../../Stylesheet/Profile.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from "react";

function  Booking_Card (props){
  
  const { booking_id,returndate,rentalDate,car,user,ammt } = props.item;
  const setr = () => {
    axios.delete(`http://localhost:8080/deletebooking`,{data:{"booking_id":booking_id,"car":car,"user":user}}).then(
      (res) => {
        console.log(res.data.json);
      },
      (err) => {}
    );
    
  };
const handle=(e)=>{
   
   
 setr();
 alert("Booking Cancelled")
 window.location.reload(true);

}

if(localStorage.getItem("loguser")==user.user_no)
{
return(
<div className="Booking_Card">
<>
        {["Light"].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            className="mb-2"
          >
            <Card.Header>Booking Detalils</Card.Header>
            <Card.Body>
              <Container className="booking_details">
                <Row>
                  <Col lg="3" md="3" sm="2">
                    <img
                      src={img}
                      className="w-100 h-100 p-0.5  rounded-4"
                    ></img>
                  </Col>
                  <Col lg-8>
                    <Card.Text>
                      <div className="details_info">
                        <h5>Booking ID : {booking_id}</h5>
                        
                          <h5>From Date : {rentalDate}</h5>
                       
                          <h5>Return Date : {returndate}</h5>
                         
                          <h5>Car  : {car.car_brnd} {car.car_nm}</h5>
                          
                          <h5>User Mobile NO : {user.user_no}</h5>
                          <h5>Ammount : {ammt}</h5>

                          <Button variant="danger" onClick={handle} >Cancel Booking</Button>{' '}
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
export default Booking_Card;