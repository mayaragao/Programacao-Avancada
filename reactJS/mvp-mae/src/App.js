import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Listagem from "./components/Listagem";
import Cards from "./components/Card_experience";
// import Experience from "./components/Experience";
// import Experiences from "./components/Experiences  ";
function App() {
  return (
    <Container className="container">
      <Listagem />
      <Cards />
      <Cards />
    </Container>
  );
}

export default App;
