import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import api from "../../api"
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Header, Button, ButtonContainer } from "./styles";
import "./Experiences.css";

const ExperiencesPage = () => {
  const [experiences, setExperiences] = useState({});
 
  useEffect(() => {
    api.get("/experiencias/")
    .then((response) => setExperiences(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
   });

  }, []);

  console.log(experiences);

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
            {data.map((experience, i) => (
              <Col xs>
                <Card key={i} className="card" style={{ width: "28vw" }}>
                  <Card.Body>
                    <Card.Title>{experience.name_usuario}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Mãe da {experience.name_usuario_child}</Card.Subtitle>
                    <Card.Text className="text-muted">{experience.description}</Card.Text>
                    <Card.Link className="like" href="#">
                      Curtir
                    </Card.Link>
                    <Card.Link className="like" onClick={() => this.ComentExperience(i)}>
                      Comentar
                    </Card.Link>

                    <Form>
                      <Form.Group id={"formComent" + i} controlId={"formGroupComentExperience" + i} className=" d-none">
                        <Form.Control as="textarea" rows={3} />
                        <div style={{ marginLeft: "15vw" }}>
                          <Card.Link className="like" onClick={() => this.CancelComentExperience(i)}>
                            Cancelar
                          </Card.Link>
                          <Card.Link className="like" href="#">
                            Salvar
                          </Card.Link>
                        </div>
                      </Form.Group>
                    </Form>

                    {Object.keys(experience.comments).length !== 0 ? (
                      <div className="ExperienceComents" style={{ marginLeft: "1vw", marginTop: "1vh" }}>
                        {experience.comments.map((comment, c) => (
                          <>
                            <Card.Subtitle className="mt-1 text-muted">{comment.name_usuario}</Card.Subtitle>
                            <Card.Text className="text-muted">{comment.description}</Card.Text>
                          </>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }


export default ExperiencesPage;
