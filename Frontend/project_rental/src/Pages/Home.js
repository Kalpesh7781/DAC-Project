import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Stylesheet/Home.css";
import car3 from "../Images/car3.png";
import car2 from "../Images/car2.jpg";
import Cars from "../Pages/Cars";
import Aboutsection from "../Component/Subcimponent/Aboutsection";
function Home() {
  return (
    <div className=" Home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  "
            src={car3}
            alt="First slide"
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={car2}
            alt="Second slide"
            height={550}
          />
        </Carousel.Item>
      </Carousel>
      <Aboutsection /> <Cars />
    </div>
  );
}

export default Home;
