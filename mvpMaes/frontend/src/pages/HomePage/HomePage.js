import React from "react";
import { Container, Button } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import Listagem from "../../components/Listagem";
import Cards from "../../components/Card_experience";
import './HomePage.css'

const HomePage = () =>  {
  return (
    <Container className="container">
      <LinkContainer to="/login">
      <Button variant="outline-dark">Entrar</Button>
      </LinkContainer>
      <Listagem />
      <Cards />
      <Cards />
    </Container>
  );
}

export default HomePage;
