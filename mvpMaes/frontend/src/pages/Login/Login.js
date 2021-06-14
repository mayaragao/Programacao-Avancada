import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import api from "../../api";
import history from "../../history";
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
  const [usernameLog, setusernameLog] = useState("");
  const [passwordLog, setpasswordLog] = useState(``);
  const submit = async () => {
    try {
      api.post("auth/login", {
        username: usernameLog,
        password: passwordLog,
      });
      history.push("experiencias");
    } catch (err) {
      console.log(err);
      console.log("Problema ao registrar requisição.");
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <LeftContainer>
            <Title>LOGIN</Title>
            <Form onSubmit={submit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  type="name"
                  placeholder="E-mail"
                  value={usernameLog}
                  onChange={(e) => setusernameLog(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  value={passwordLog}
                  onChange={(e) => setpasswordLog(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">Entrar</Button>
            </Form>
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
