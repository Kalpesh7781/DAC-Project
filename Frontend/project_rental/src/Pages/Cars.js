import React, { useEffect } from "react";
import Commonsection from "../Component/Subcimponent/Commonsection";
import "../Stylesheet/Cars.css";
import axios from "axios";
import { useState } from "react";
import CarItem from "../Component/Subcimponent/CarItem";
import Row from "react-bootstrap/esm/Row";
function Cars() {
  const [cars, setcars] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/caravail").then(
      (res) => {
        setcars(res.data);
        console.log(res.data);
      },
      (err) => {}
    );
  }, []);
  return (
    <div className=" Cars">
      <Commonsection title="Cars" />

      <Row>
        {cars.map((item) => (
          <CarItem item={item} key={item.id} />
        ))}
      </Row>
    </div>
  );
}

export default Cars;
