import React, { useState, Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import api from "../../api";
import history from "../../history";
import LoginImage from "../../assets/images/login_image.svg";
import UserService from "../../services/userService";
import { Container, RightContainer, LeftContainer, Title, Button, InlineButton } from "../styles";
import { LinkContainer } from "react-router-bootstrap";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.autenticarUsuario = this.autenticarUsuario.bind(this);
  }

  async autenticarUsuario(event) {
    var usernameLog = null;
    var passwordLog = null;

    const form = event.currentTarget;

    usernameLog = document.getElementsByName("usernameLog")[0].value;
    passwordLog = document.getElementsByName("passwordLog")[0].value;
    //const [usernameLog, setusernameLog] = useState("");
    //const [passwordLog, setpasswordLog] = useState(``);

    var data_login = {
      username: usernameLog,
      password: passwordLog,
    };

    try {
      const response_login = await UserService.postLogin(data_login);

      console.log("postLogin", response_login);
      try {
        const response_token = await UserService.getUser();

        history.push("experiencias");

        console.log("getToken", response_token);
      } catch (err_get_token) {
        console.log(err_get_token);
      }
    } catch (err_login) {
      console.log(err_login);
      console.log("Problema ao registrar requisição.");
    }

    //const formdata = new FormData(form);

    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <LeftContainer>
              <Title>LOGIN</Title>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Control type="name" name="usernameLog" placeholder="E-mail" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Control type="password" name="passwordLog" placeholder="Senha" />
                </Form.Group>
                <Button type="button" onClick={(event) => this.autenticarUsuario(event)}>
                  {" "}
                  Entrar
                </Button>
              </Form>
              <LinkContainer to="/cadastro">
                <InlineButton>Ainda não possui cadastro? Cadastre-se</InlineButton>
              </LinkContainer>
            </LeftContainer>
          </Col>
          <RightContainer>
            <img src={LoginImage} alt="Imagem de Login" id="image" />
          </RightContainer>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
