import React from "react"
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col, Card} from "react-bootstrap";
import {
  Header, Button, ButtonContainer
} from "./styles";
import './Experiences.css'


const ExperiencesPage = () => {

  const data = [
    {
    "name_usuario":  "Ana Canto",
    "name_usuario_child": "Laura", 
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "comments": [{"name_usuario": "", "description": ""}, {"name_usuario": "", "description": ""}, ],  //Uma lista com os comentários
    "likes": 12 //quantidade de likes    
   },
   {
    "name_usuario":  "Ana Canto",
    "name_usuario_child": "Laura", 
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "comments": [{"name_usuario": "", "description": ""}, {"name_usuario": "", "description": ""}, ],  //Uma lista com os comentários
    "likes": 12 //quantidade de likes    
   },
   {
    "name_usuario":  "Ana Canto",
    "name_usuario_child": "Laura", 
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "comments": [{"name_usuario": "", "description": ""}, {"name_usuario": "", "description": ""}, ],  //Uma lista com os comentários
    "likes": 12 //quantidade de likes    
   },
   {
    "name_usuario":  "Ana Canto",
    "name_usuario_child": "Laura", 
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "comments": [{"name_usuario": "", "description": ""}, {"name_usuario": "", "description": ""}, ],  //Uma lista com os comentários
    "likes": 12 //quantidade de likes    
   }
  ]

  return (<div>
  <Header/>
    <Container >
      <ButtonContainer>       
      <LinkContainer to="/cadastrarExperiencia">
        <Button>Adicionar Experiência</Button>
        </LinkContainer>
      </ButtonContainer>
    <Row>
      {data.map((experience => ( 
      <Col xs>
      <Card classname="card" style={{ width: '28vw' }}>
        <Card.Body>
         <Card.Title>{experience.name_usuario}</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">Mãe da {experience.name_usuario_child}</Card.Subtitle>
          <Card.Text>
            {experience.description}
          </Card.Text>
          <Card.Link className="like" href="#">Curtir</Card.Link>
          <Card.Link className="like" href="#">Comentar</Card.Link>
        </Card.Body>
      </Card>
      </Col> ) ))}    
    </Row>
  </Container>
  </div>
  );
};

export default ExperiencesPage;
