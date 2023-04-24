import React from "react";
import Container from "react-bootstrap/Container";

import "../../Stylesheet/Commonsection.css";
const Commonsection = ({ title }) => {
  return (
    <div className=" Commonsection">
      <section className="common__section mb-5">
        <Container className="text-center">
          <h1 className="text-light">{title}</h1>
        </Container>
      </section>
    </div>
  );
};

export default Commonsection;
