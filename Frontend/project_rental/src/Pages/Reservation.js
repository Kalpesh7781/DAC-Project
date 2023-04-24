import Booking_Row from "../Component/Subcimponent/Booking_Row";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "../Stylesheet/Details.css";
function Reservation() {
  const [bookings, setbookings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allbookings").then(
      (res) => {
        setbookings(res.data);
        console.log(res.data);
      },
      (err) => {}
    );
  }, []);
  return (
    <div className="Reservation">
       <h3>Reservations</h3>
      <hr />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>From Date</th>
            <th>Return Date</th>
            <th>Car ID</th>
            <th>User Mobile No</th>
            <th>ammt</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((item) => (
            <Booking_Row item={item} key={item.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Reservation;
