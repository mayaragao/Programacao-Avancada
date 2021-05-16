import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import LoginImage from "../../assets/images/login_image.svg";
import {
  RightContainer,
  LeftContainer,
  Title,
  Button,
  InlineButton,
} from "../styles";
import { LinkContainer } from "react-router-bootstrap";

const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <LeftContainer>
            <Title>LOGIN</Title>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
            </Form>
            <LinkContainer to="/experiencias">
              <Button>Entrar</Button>
            </LinkContainer>
            <LinkContainer to="/cadastro">
              <InlineButton>
                Ainda não possui cadastro? Cadastre-se
              </InlineButton>
            </LinkContainer>
          </LeftContainer>
        </Col>
        <RightContainer>
          <img src={LoginImage} alt="Imagem de Login" id="image" />
        </RightContainer>
      </Row>
    </Container>
  );
};

export default LoginPage;
