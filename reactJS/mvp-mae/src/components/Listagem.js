import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import imagemMae from "./images/mae_c_fio.png";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Listagem = () => {
  return (
    <>
      <Container className="listagem mb-4">
        <Row>
          <Col sm={4} md={4} lg={4} xl={4}>
            <img className="imgmae mt-5" alt="img_mae" src={imagemMae} />
          </Col>
          <Col sm={8} md={8} lg={8} xl={8}>
            {/* <Tab.Container> */}
            <div className="maetext">
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate delectus, beatae eos quisquam earum libero sunt veniam
                aliquid impedit recusandae!
              </p>
              <ul className="fa-ul">
                <li>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <br />
                <li>Lorem ipsum dolor sit amet.</li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <br />
              </ul>
              <button
                className="btn-green ml-5"
                onClick={() => console.log("Goes to the other page")}
              >
                Conhecer
              </button>
            </div>
            {/* </Tab.Container> */}
          </Col>
        </Row>
      </Container>
    </>
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
