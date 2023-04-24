import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Commonsection from "../Component/Subcimponent/Commonsection";
import img from "../Images/car.jpg";
import "../Stylesheet/Profile.css";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Booking_Card from "../Component/Subcimponent/Booking_Card";
import axios from "axios";
import Cancel_Card from "../Component/Subcimponent/Cancel_Card";
function Profile() {
   
  const [bookings,setbookings]=useState([]);
  const [cancel,setcancel]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allbookings").then(
      (res) => {
        setbookings(res.data);
         console.log(res.data);
      },
      (err) => {}
    );
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8080/cancel").then(
      (res) => {
        setcancel(res.data);
         console.log(res.data);
      },
      (err) => {}
    );
  }, []);
  //alert(localStorage.getItem("loguser"));
  
  return (
    <div className=" Profile">
      <Commonsection title="Profile" />
      
      {bookings.map((item)=>(<Booking_Card item={item} key={item.bookig_id}/>))}
      
      {cancel.map((item)=>(<Cancel_Card item={item} key={item.bookig_id}/>))}
    </div>
  );
}

export default Profile;
