import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Car_row from "../Component/Subcimponent/Car_row";
import "../Stylesheet/Details.css";
function Details() {
  const [cars, setcars] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/cars").then(
      (res) => {
        setcars(res.data);
        console.log(res.data);
      },
      (err) => {}
    );
  }, []);

  return (
    <div className=" Details">
      <h3>Cars Registered</h3>
      <hr />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Car id</th>
            <th>Car no</th>
            <th>Car Name</th>
            <th>Location</th>
            <th>Car Status</th>
          </tr>{" "}
        </thead>
        <tbody>
          {cars.map((item) => (
            <Car_row item={item} key={item.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Details;
