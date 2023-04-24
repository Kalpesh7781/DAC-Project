import React from "react";
import Col from "react-bootstrap/esm/Col";

import { Link } from "react-router-dom";
import "../../Stylesheet/CarItem.css";
const CarItem = (props) => {
  const {
    id,
    car_nm,
    car_rate,
    car_brnd,
    car_capacity,
    car_varient,
    car_address,
    car_city,
    car_img,
  } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={car_img} alt={car_nm} className="w-100 " />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">
            {car_brnd} {car_nm}
          </h4>
          <h6 className="rent__price text-center mt-">
            {car_rate} <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {car_varient}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {car_address}, {car_city}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {car_capacity} seater
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`./${id}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`./${id}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
