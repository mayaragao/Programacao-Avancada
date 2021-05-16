import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import icone1 from "./images/icone1.svg";
import icone2 from "./images/icone2.svg";
import icone3 from "./images/icone3.svg";

const Icones = () => {
  return (
    <>
      <Container className="box-icones">
        <Row>
          <Col sm={4} md={4} lg={4} xl={4}>
            <div className="box-img-text">
              <img className="mt-2" alt="icone1" src={icone1} />
              <h4 className="mt-2">Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet consectetur . Voluptate delectus, libero sunt veniam aliquid impedit recusandae amet consectetur .!</p>
            </div>
          </Col>
          <Col sm={4} md={4} lg={4} xl={4}>
            <div className="box-img-text">
              <img className="mt-2" alt="icone2" src={icone2} />
              <h4 className="mt-2">Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet consectetur . Voluptate delectus, libero sunt veniam aliquid impedit recusandae amet consectetur .!</p>
            </div>
          </Col>
          <Col sm={4} md={4} lg={4} xl={4}>
            <div className="box-img-text">
              <img className="mt-2" alt="icone3" src={icone3} />
              <h4 className="mt-2">Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet consectetur . Voluptate delectus, libero sunt veniam aliquid impedit recusandae amet consectetur .!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Icones;
