import React, { Component, useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col, Card, Form, CardColumns } from "react-bootstrap";
import { Header, Button, ButtonContainer } from "./styles";
import "./Experiences.css";

import ExperienceService from "../../services/experienceService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentDots } from "@fortawesome/free-regular-svg-icons";

class ExperiencesPage extends Component {
  constructor(props) {
    super(props);

    this.ComentExperience = this.ComentExperience.bind(this);
    this.CancelComentExperience = this.CancelComentExperience.bind(this);
    this.SearchExperiences = this.SearchExperiences.bind(this);
    this.likeExperience = this.likeExperience.bind(this);
    this.SaveComment = this.SaveComment.bind(this);

    this.state = {
      list_experiences: [],
    };
  }

  async componentDidMount() {
    await this.SearchExperiences();
  }

  async likeExperience(_id) {
    const data_like_experience = {
      _id: _id,
    };

    try {
      const response_experiences = await ExperienceService.likeExperience(data_like_experience);
      console.log("like", response_experiences);
    } catch (err_like_experience) {
      console.log(err_like_experience);
    }

    await this.SearchExperiences();
  }

  async SearchExperiences() {
    var list_experiences = [];
    var data_experience = null;
    try {
      const response_experiences = await ExperienceService.getExperiences();
      console.log("conseguiu!", response_experiences);
      for (const [idx, obj] of response_experiences.data.entries()) {
        data_experience = {
          _id: obj._id,
          username: obj.username,
          name_usuario_child: "criança",
          description: obj.description,
          numLikes: obj.numLikes,
          comments: obj.comments,
        };
        list_experiences.push(data_experience);
      }
    } catch (err_experiences) {
      console.log(err_experiences);
    }

    /*

    const data = [
      {
        name_usuario: "Ana Canto",
        name_usuario_child: "Laura",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        comments: [
          { name_usuario: "Leonardo", description: "Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna." },
          { name_usuario: "Luana", description: "Sed ultrices risus Mauris vel gravida magna." },
        ], //Uma lista com os comentários
        likes: 12, //quantidade de likes
      },
      {
        name_usuario: "Ana Canto",
        name_usuario_child: "Laura",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        comments: [
          { name_usuario: "", description: "" },
          { name_usuario: "", description: "" },
        ], //Uma lista com os comentários
        likes: 12, //quantidade de likes
      },
    ];

    for (const [idx, obj] of data.entries()) {
      data_experience = {
        _id: idx,
        username: obj.name_usuario,
        name_usuario_child: obj.name_usuario_child,
        description: obj.description,
        numLikes: obj.likes,
        comments: obj.comments,
      };

      list_experiences.push(data_experience);
    }
   */

    this.setState({ list_experiences: list_experiences });

    console.log("list", list_experiences);
  }

  async SaveComment(key, _id) {
    var formId = "formTextComent" + key.toString();

    var description = document.getElementById(formId).value;

    console.log(description);

    var data_comment_experience = {
      _id: _id,
      username: "Anonimo",
      description: description,
    };

    try {
      const response_comment_experiences = await ExperienceService.commentExperience(data_comment_experience);
      console.log("comment", response_comment_experiences);
    } catch (err_comment_experience) {
      console.log(err_comment_experience);
    }

    var form = "formComent" + key.toString();

    document.getElementById(formId).value = "";
    document.getElementById(form).classList.add("d-none");

    await this.SearchExperiences();
  }

  ComentExperience(key) {
    var formId = "formComent" + key.toString();
    document.getElementById(formId).classList.remove("d-none");
  }

  CancelComentExperience(key) {
    var formId = "formComent" + key.toString();
    document.getElementById(formId).classList.add("d-none");
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <ButtonContainer>
            <LinkContainer to="/cadastrarExperiencia">
              <Button>Adicionar Experiência</Button>
            </LinkContainer>
          </ButtonContainer>
          <Row>
            <CardColumns>
              {
                //<Col xs>
              }
              {this.state.list_experiences.map((experience, i) => (
                <Card key={i} classname="card" style={{ width: "28vw" }}>
                  <Card.Body>
                    <Card.Title>{experience.username}</Card.Title>
                    {/*
                    <Card.Subtitle className="mb-2 text-muted">Mãe da {experience.name_usuario_child}</Card.Subtitle>
                     */}
                    <Card.Text className="text-muted">{experience.description}</Card.Text>
                    <Card.Link className="like" onClick={() => this.likeExperience(experience._id)}>
                      {experience.numLikes}&nbsp;&nbsp;
                      <FontAwesomeIcon icon={faHeart} size="lg" />
                      {/* 
                      <Card.Link className="like" href="#">  <i class="far fa-heart"></i> Curtir*/}
                    </Card.Link>
                    <Card.Link className="like" onClick={() => this.ComentExperience(i)}>
                      <FontAwesomeIcon icon={faCommentDots} size="lg" />
                      {/* <i class="far fa-comment-dots"></i> Comentar */}
                    </Card.Link>

                    <div style={{ marginTop: "10px" }}>
                      <Form>
                        <Form.Group id={"formComent" + i} controlId={"formGroupComentExperience" + i} className=" d-none">
                          <Form.Control id={"formTextComent" + i} as="textarea" rows={3} />
                          <div style={{ marginLeft: "60%" }}>
                            <Card.Link className="like" onClick={() => this.CancelComentExperience(i)}>
                              Cancelar
                            </Card.Link>
                            <Card.Link className="like" onClick={() => this.SaveComment(i, experience._id)}>
                              Salvar
                            </Card.Link>
                          </div>
                        </Form.Group>
                      </Form>
                    </div>

                    {Object.keys(experience.comments).length !== 0 ? (
                      <div className="ExperienceComents" style={{ marginLeft: "1vw", marginTop: "1vh" }}>
                        {experience.comments.map((comment, c) => (
                          <>
                            <Card.Subtitle className="mt-1 text-muted">{comment.username}</Card.Subtitle>
                            <Card.Text className="text-muted">{comment.description}</Card.Text>
                          </>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </Card.Body>
                </Card>
              ))}
              {
                //</Col>
              }
            </CardColumns>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ExperiencesPage;
