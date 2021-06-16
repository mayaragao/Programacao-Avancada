import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import ExperienceImage from "../../assets/images/experience_register_image.svg";
import {
  Container,
  RightContainer,
  LeftContainer,
  Title,
  Button,
} from "../styles";
import { LinkContainer } from "react-router-bootstrap";

import ExperienceService from "../../services/experienceService";

class ExperienceRegisterPage extends Component {
  constructor(props) {
    super(props);

    this.addExperience = this.addExperience.bind(this);
  }

  async addExperience() {
    var formId = "formExperienceDescription";
    var description = document.getElementById(formId).value;

    console.log(description);

    if (description === null || typeof description === "undefined") {
      return;
    }

    var data_add_experience = {
      username: localStorage.getItem("username"),
      description: description,
    };

    try {
      const response_add_experience = await ExperienceService.addExperience(
        data_add_experience
      );
      console.log("added", response_add_experience);
    } catch (err_comment_experience) {
      console.log(err_comment_experience);
    }

    //this.props.history.push("http://localhost:3000/" + "/experiencias");
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <LeftContainer>
              <Title>MINHA EXPERIÊNCIA</Title>
              <Form>
                <Form.Group controlId="formGroupExperience">
                  <Form.Control
                    id="formExperienceDescription"
                    as="textarea"
                    rows={10}
                  />
                </Form.Group>
              </Form>
              <LinkContainer
                onClick={() => this.addExperience()}
                to="/experiencias"
              >
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
  }
}

export default ExperienceRegisterPage;
