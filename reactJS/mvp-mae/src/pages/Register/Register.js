import React from "react";
import {  Row, Col, Form } from "react-bootstrap";
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
  return (
    <Container>
      <Row>
        <Col>
          <LeftContainer>
            <Title>CADASTRO</Title>
            <Form>
              <Form.Group controlId="formGroupName">
                <Form.Control type="name" placeholder="Nome" />
              </Form.Group>
              <Form.Group controlId="formGroupSurname">
                <Form.Control type="surname" placeholder="Sobrenome" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>
              <Form.Group controlId="formGroupCity">
                <Form.Control type="city" placeholder="Cidade" />
              </Form.Group>
              <Form.Group controlId="formGroupSun">
                <Form.Control type="sun" placeholder="Nome do seu filho(a)" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
              <Row>
                <Col>
                <Form.Control placeholder="Senha" />
                </Col>
                <Col>
                <Form.Control placeholder="Repetir Senha" />
                </Col>
              </Row>
              </Form.Group>
            </Form>
            <LinkContainer to="/experiencias">
              <Button>Cadastrar</Button>
            </LinkContainer>
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
