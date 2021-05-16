import React from "react";
import { Container } from "react-bootstrap";
import Listagem from "../../components/Listagem";
import Cards from "../../components/Card_experience";
import Topo from "../../components/Topo";
import Footer from "../../components/Footer";
import Icones from "../../components/Icones";

import "./HomePage.css";

const HomePage = () => {
  return (
    <Container className="container">
      <Topo />
      <Icones />
      <Listagem />
      <Cards />
      <Footer />
    </Container>
  );
};

export default HomePage;
