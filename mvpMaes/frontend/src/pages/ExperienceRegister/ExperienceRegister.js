import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import ExperienceImage from "../../assets/images/experience_register_image.svg";
import {
  Container,
  RightContainer,
  LeftContainer,
  Title,
  Button,
  InlineButton,
} from "../styles";
import { LinkContainer } from "react-router-bootstrap";

const ExperienceRegisterPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <LeftContainer>
            <Title>MINHA EXPERIÊNCIA</Title>
            <Form>
              <Form.Group controlId="formGroupExperience">
              <Form.Control as="textarea" rows={10} />
              </Form.Group>
             
            </Form>
            <LinkContainer to="/experiencias">
              <Button>Salvar</Button>
            </LinkContainer>          
          </LeftContainer>
        </Col>
        <RightContainer>
          <img src={ExperienceImage} alt="Imagem de Login" id="image" />
        </RightContainer>
      </Row>
    </Container>
  );
};

export default ExperienceRegisterPage;
