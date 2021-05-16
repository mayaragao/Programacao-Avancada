import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Listagem from "./components/Listagem";
import Cards from "./components/Card_experience";
import Icones from "./components/Icones";
import Footer from "./components/Footer";
import Topo from "./components/Topo";
// import Experience from "./components/Experience";
// import Experiences from "./components/Experiences  ";
function App() {
  return (
    <Container className="container">
      <Row>
        <Topo />
      </Row>
      <Row>
        <Icones />
      </Row>
      <Row>
        <Listagem />
      </Row>

      <Row>
        <Cards />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
