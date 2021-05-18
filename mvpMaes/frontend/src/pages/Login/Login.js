import React, {useState} from "react";
import { Row, Col, Form } from "react-bootstrap";
import api from "../../api"
import history from '../../history';
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
  const [state, setState] = useState({
    username:"",  
    password: "",
    });

    const submit = () => {
      try{    
        api.post("auth/login", state);
        const token = api.get("auth/user");
        console.log(token);
        history.push('experiencias');
      }catch{
        console.log("Problema ao registrar requisição.")
      }
    }      

  return (
    <Container>
      <Row>
        <Col>
          <LeftContainer>
            <Title>LOGIN</Title>
            <Form onSubmit={submit} >
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="name" placeholder="E-mail" value={state.username} onChange={(e) => setState({username: e.target.value})}/>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Senha" value={state.password} onChange={(e) => setState({password: e.target.value})}/>
              </Form.Group>     
              <Button >Entrar</Button>              
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
