import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import imagemTopo from "./images/iconeTopo.svg";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Topo = () => {
  return (
    <>
      <Container className="listagem topo mb-4">
        {/* <Row>
          <Button variant="warning">Entrar</Button>
        </Row> */}
        <Row>
          <Col sm={4} md={4} lg={4} xl={4}>
            <div className="topo-text">
              <h1>Mom's Help</h1>
              <br />
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate delectus, beatae eos quisquam earum libero sunt veniam
                aliquid impedit recusandae!
              </p>
            </div>
          </Col>
          <Col sm={8} md={8} lg={8} xl={8}>
            <img className="imgtopo mt-5" alt="img_topo" src={imagemTopo} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Topo;
