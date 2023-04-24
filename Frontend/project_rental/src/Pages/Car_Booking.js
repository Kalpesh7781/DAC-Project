import axios from "axios";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router-dom";
import CarInfo from "../Component/Subcimponent/CarInfo";
import BookingForm from "./BookingForm";
function Car_Booking()
{
    const { slug } = useParams();
    const [cars, setcars] = useState([]);
    
  useEffect(() => {
    axios.get("http://localhost:8080/caravail").then(
      (res) => {
        setcars(res.data);
         
      },
      (err) => {}
    );
  }, []);
  useEffect(()=>{})
const singleCarItem=cars.find((item)=>(item.id == slug));
 
 
 
 
 
 
return(
<div className="Car_Booking">
<section>
        <BookingForm slug={slug}/>
      </section>
</div>

    );
}
export default Car_Booking;