import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import Header from "./Header";

import imagemTopo from "./images/iconeTopo.svg";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Topo = () => {
  return (
    <Container className="box-topo">
      <Header />
      <div className="items-topo">
        <div className="topo-text">
          <h1>Mom's Help</h1>

          <br />
          <p>Olá mãe, aqui voce pode se conectar a outras famílias, trocar experiencias, descobrir novas dicas e conversar!</p>
        </div>
        <img className="imgtopo" alt="img_topo" src={imagemTopo} />
      </div>
    </Container>
  );
};

export default Topo;
