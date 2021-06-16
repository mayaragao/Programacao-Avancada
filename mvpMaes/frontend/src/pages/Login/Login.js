import React, { useState, useContext } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Context } from "../../context/AuthContext"
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
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [usernameLog, setusernameLog] = useState("");
  const [passwordLog, setpasswordLog] = useState("");
  const {authenticated, handleLogin} = useContext(Context);

  const history = useHistory();

  console.log(authenticated);

   const handleSubmit = event => {  
    event.preventDefault();      
       handleLogin(usernameLog, passwordLog);     
     };   

  return (
    <Container>
      <Row>
        <Col>
          <LeftContainer>
            <Title>LOGIN</Title>
            <Form onSubmit={handleSubmit}>
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
