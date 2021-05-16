import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import LoginImage from "../../assets/images/login_image.svg";
import { RightContainer, LeftContainer, Title, Button } from "./styles";

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
            <Button>Entrar</Button>
          </LeftContainer>
        </Col>
        <Col>
          <RightContainer>
            <img src={LoginImage} alt="Imagem de Login" id="loginImage" />
          </RightContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
