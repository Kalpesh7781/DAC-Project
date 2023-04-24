import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Stylesheet/Add_car.css";
import axios from "axios";
 

function Add_car() {
  const [car1, setcar1] = useState({});

  function handle(event) {
     
    setc(car1);
  }
  const setc = (data) => {
    axios.post(`http://localhost:8080/addcar`, data).then(
      (res) => {
        alert("car added");
      },
      (err) => {}
    );
  };
  return (
    <div className="Add_car">
      <strong>
        {" "}
        <h4>Enter Car Datails</h4>
      </strong>
      <hr />
      <Form onSubmit={handle} action="./">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Car Name</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            id="car_nm"
            required
            minLength={5}
            onChange={(e) => {
              setcar1({ ...car1, car_nm: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Car Brand</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Toyota / suzuki / mahindra"
            id="car_brnd"
            required
            minLength={3}
            onChange={(e) => {
              setcar1({ ...car1, car_brnd: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Car_no </b>(in capitals AA-00-AA-0000)
          </Form.Label>
          <Form.Control
            type="text"
            pattern="^[A-Z]{2}-[0-9]{2}-[A-Z]{2}-[0-9]{4}$"
            placeholder="MH-14-dj-9999"
            id="car_no"
            required
            minLength={6}
            onChange={(e) => {
              setcar1({ ...car1, car_no: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Car model Year</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="2023"
            id="car_model"
            required
            minLength={4}
            onChange={(e) => {
              setcar1({ ...car1, car_model: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Milage</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="in kmpl"
            id="car_milage"
            required
            min={0}
            max={50}
            onChange={(e) => {
              setcar1({ ...car1, car_milage: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Rate per Day</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="in rs"
            id="car_rate"
            required
            min={0}
            onChange={(e) => {
              setcar1({ ...car1, car_rate: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Car variant</b>
          </Form.Label>
          <Form.Select
            aria-label="automatic"
            id="car_varient"
            required
            onChange={(e) => {
              setcar1({ ...car1, car_varient: e.target.value });
            }}
          >
            <option value="Petrol"> Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Gas">Gas</option>
            <option value="Electric">Electric</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Seating Capacity</b>
          </Form.Label>
          <Form.Select
            aria-label="automatic"
            id="car_capacity"
            required
            onChange={(e) => {
              setcar1({ ...car1, car_capacity: e.target.value });
            }}
          >
            <option value="4 Seater"> 4 Seater </option>
            <option value="6 Seater">6 Seater</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>AC available</b>
          </Form.Label>
          <Form.Select
            aria-label="car_ac"
            id="car_ac"
            required
            onChange={(e) => {
              setcar1({ ...car1, car_ac: e.target.value });
            }}
          >
            <option value="AC"> Yes</option>
            <option value="Non AC">No</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            id="car_address"
            required
            maxLength={150}
            onChange={(e) => {
              setcar1({ ...car1, car_address: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Car City</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Pune / Mumbai / Banglore"
            id="car_city"
            required
            minLength={2}
            onChange={(e) => {
              setcar1({ ...car1, car_city: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Car Image url</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="http://"
            id="car_img"
            required
            minLength={3}
            onChange={(e) => {
              setcar1({ ...car1, car_img: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          <b>ADD CAR</b>
        </Button>
      </Form>
    </div>
  );
}

export default Add_car;
