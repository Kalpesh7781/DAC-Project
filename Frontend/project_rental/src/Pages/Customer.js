import User_row from "../Component/Subcimponent/User_Row";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "../Stylesheet/Details.css";
function Customer() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allusers").then(
      (res) => {
        setusers(res.data);
        console.log(res.data);
      },
      (err) => {}
    );
  }, []);

  return (
    <div
      className="  
      Customer"
    >
      <h3>Registered Customers</h3>
      <hr />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Mobile No</th>
            <th>User Gender</th>
            <th>User City</th>
            <th>User Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <User_row item={item} key={item.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Customer;
