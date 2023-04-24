import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Stylesheet/Add_car.css";
import { useState } from "react";
import axios from "axios";

function Removecar() {
  const [carr, setcarr] = useState({});
  function handle(e) {
    alert("Car removed");

    setr(carr);
  }

  const setr = (data) => {
    axios.delete(`http://localhost:8080/cars/${data.id}`).then(
      (res) => {
        console.log(res.data);
      },
      (err) => {}
    );
  };
  return (
    <div className=" Removecar">
      <h3>Remove car</h3>
      <hr />
      <br />
      <Form onSubmit={handle} action=" " id="aform">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Enter Vehicle ID</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter id"
            id="id"
            required
            onChange={(e) => {
              setcarr({ ...carr, id: e.target.value });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" id="asubmit">
          <b>Remove car</b>
        </Button>
      </Form>
    </div>
  );
}

export default Removecar;
