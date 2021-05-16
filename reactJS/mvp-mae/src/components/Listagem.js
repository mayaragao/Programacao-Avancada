import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const Listagem = () => {
  return (
    <Container className="listagem">
      <Row>
        <Col sm={4} md={4} lg={4} xl={4}>
          <img className="imgmae" alt="img_mae" />
        </Col>
        <Col sm={8} md={8} lg={8} xl={8}>
          {/* <Tab.Container> */}
          <div className="maetext">
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              delectus, beatae eos quisquam earum libero sunt veniam aliquid
              impedit recusandae!
            </p>
            <ul className="fa-ul">
              <li>
                <i className="fa fa-circle" aria-hidden="true"></i>
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            </ul>
          </div>
          {/* </Tab.Container> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Listagem;

{
  /* <span className="listagemtext">
  <h3>Lorem, ipsum dolor.</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    delectus, beatae eos quisquam earum libero sunt veniam aliquid
    impedit recusandae!
  </p>
</span> */
}
