import React , {useState} from "react";
import {  Row, Col, Form } from "react-bootstrap";
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

const RegisterPage = () => {
const [state, setState] = useState({
  username:"",  
  password: "",
  });
  
  const submit = () => {
    try{    
      api.post("auth/register", state);
      history.push('login');
    }catch{
      console.log("Problema ao registrar requisição.")
    }
  }
  
  return (
    <Container>
      <Row>
        <Col>
          <LeftContainer>
            <Title>CADASTRO</Title>
            <Form onSubmit={submit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="E-mail" placeholder="E-mail" value={state.username} onChange={(e) => setState({username: e.target.value})} />
              </Form.Group>              
              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Senha" value={state.password} onChange={(e) => setState({password: e.target.value})} />
              </Form.Group>             
              <Button>Cadastrar</Button>         
            </Form>            
            <LinkContainer to="/login">
              <InlineButton>
                Já possui cadastro? Entre aqui.
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

export default RegisterPage;
