import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
function CarInfo(props)

{const { car_img,car_ac,car_address,car_city,car_capacity,car_milage,car_brnd,car_rate,car_varient,car_nm,car_model } = props.item;
return(
    <div className="car">
          <Container>
            <Row>
                <Col>
                <img src={car_img} alt="photo" className="w-100"></img>
                </Col>
                <Col>
                
              <div className="carinfo">
                <h3>{car_brnd} {car_nm}</h3>
                <h5>Rent : {car_rate} Rs/Day</h5>
                <h6>Fuel Type: {car_varient}</h6>
                <h6>Seating Capacity : {car_capacity}</h6>
                <h6>Car Milage : {car_milage}</h6>
                <h6>AC/NON AC : {car_ac}</h6>
                <h6>Car Model: {car_model}</h6>
                <h6>Car City : {car_city}</h6>
                <h6>Car Pickup Location : {car_address}</h6>

              </div>
                </Col>

            </Row>
          </Container>
    </div>
);
}
export default CarInfo;