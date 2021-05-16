import React from "react";
import { Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Listagem from "../../components/Listagem";
import Cards from "../../components/Card_experience";
import Topo from "../../components/Topo";
import Header from "../../components/Header";
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
