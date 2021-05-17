import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import imagemMae from "./images/mae_listagem.svg";
import { LinkContainer } from "react-router-bootstrap";

const Listagem = () => {
  return (
    <>
      <div className="listagem">
        <Row>
          <Col sm={4} md={4} lg={4} xl={4}>
            <img className="imgmae mt-5" alt="img_mae" src={imagemMae} />
          </Col>
          <Col sm={8} md={8} lg={8} xl={8}>
            {/* <Tab.Container> */}
            <div className="maetext">
              <h3>Mãe, nós te acolhemos</h3>
              <p>Aqui voce pode encontrar muitas experiencias e dicas sobre o maternar. Encontre familias e iteraja com novas pessoas e modos de pensar!</p>
              <ul>
                <li>Adicione Experiencias</li>
                <li>Curta e compartilhe</li>
              </ul>
              <LinkContainer to="/cadastro">
                <button className="btn-green">Conhecer</button>
              </LinkContainer>
            </div>
            {/* </Tab.Container> */}
          </Col>
        </Row>
      </div>
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
