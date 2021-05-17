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
              <img className="mt-2" alt="icone1" src={icone2} />
              <h4 className="mt-2">Atualize seu perfil</h4>
              <p>Mantenha suas informaçoes atualizadas para encontrar familias com os mesmos gostos que o seu.</p>
            </div>
          </Col>
          <Col sm={4} md={4} lg={4} xl={4}>
            <div className="box-img-text">
              <img className="mt-2" alt="icone2" src={icone3} />
              <h4 className="mt-2">Adicione uma experiencia</h4>
              <p>Escreva uma dica ou descreva uma experiencia para novas pessoas te encontrar!</p>
            </div>
          </Col>
          <Col sm={4} md={4} lg={4} xl={4}>
            <div className="box-img-text">
              <img className="mt-2" alt="icone3" src={icone1} />
              <h4 className="mt-2">Curta ou comente</h4>
              <p>Se encontrar uma experiencia interessante, deixe sua opnião, cada ponto de vista é importante!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Icones;
