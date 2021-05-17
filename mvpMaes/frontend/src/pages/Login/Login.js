import React, {useContext} from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Context} from '../../context/AuthContext'
import LoginImage from "../../assets/images/login_image.svg";
import {
  Container,
  RightContainer,
  LeftContainer,
  Title,
  Button,
  InlineButton,
} from "../styles";
import { LinkContainer } from "react-router-bootstrap";

const LoginPage = () => {
  const { authenticated, handleLogin } = useContext(Context);
  console.log(authenticated);

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
           
              <Button onClick={handleLogin}>Entrar</Button>
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
