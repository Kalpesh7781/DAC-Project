import { useEffect, useState } from "react";
import axios from "axios";
import "../Stylesheet/Signup.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import User_row from "../Component/Subcimponent/User_Row";
const BookingForm=({slug})=>{
   const[booking,setbooking]=useState([]);
   
   const handle=(event)=>{

   
    booking.car={"id":slug,"car_status":"Booked"};
    booking.user={"user_no":localStorage.getItem("loguser")};
    console.log(booking);
    alert("Booking Sucessfull");
    postt(booking);
    
 event.prevenyDefault();

   }
    
  const postt=(booking)=>{
    axios.post('http://localhost:8080/newbooking',booking).then((res)=>{ },(err)=>{})
   }
    return(

        <div className="Booking Form">
        <div className="login_container">
        <Row>
          <Col lg="1" md="1" sm="1"></Col>
          <Col>
            <div className="Box login_in ">
              <Form onSubmit={handle} action="../profile">
                 
              <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Car_id</b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                     value={slug}
                    id="id"
                
                     
                    required
                   disabled
                  />
                </Form.Group>
                 
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>User Mobile No</b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Number (10 digits)"
                    id="user_no"
                    value={localStorage.getItem("loguser")}
                     
                    required
                   disabled
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Date Of Booking</b>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="rentalDate"
                    required
                    mobile
                    onChange={(e) => {
                      setbooking({ ...booking, rentalDate: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b>Date Of Return</b>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="returndate"
                    required
                    mobile
                    onChange={(e) => {
                      setbooking({ ...booking, returndate: e.target.value });
                    }}
                  />
                </Form.Group>
                 

                  <Form.Group >
                    <Form.Label>Ammount</Form.Label>
                    <Form.Control
                      id="ammt"
                      type="number"
                      required
                       
                      onChange={(e) => {
                        setbooking({ ...booking, ammt: e.target.value });
                      }}
                    />
                  </Form.Group>
              <br/><br/>
                <Button variant="primary" type="submit ">
                  <b>Book Now </b>
                </Button>
              </Form>
           </div>
          </Col>
          <Col lg="1" md="1" sm="1"></Col>
        </Row>
      </div>

        </div>
    );
}
export default BookingForm;