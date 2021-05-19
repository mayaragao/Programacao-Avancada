import React, { Component, useEffect, useState } from "react";
import {
  Row,
  Col,
  Alert,
  Button,
  OverlayTrigger,
  Tooltip,
  Table,
  Tab,
  Card,
  CardDeck,
  Container,
} from "react-bootstrap";

import ExperienceService from "../services/experienceService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive, faHeart } from "@fortawesome/free-solid-svg-icons";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.SearchExperiences = this.SearchExperiences.bind(this);

    this.state = {
      card_experiences1: [],
      card_experiences2: [],
    };
  }

  async componentDidMount() {
    await this.SearchExperiences();
  }

  async SearchExperiences() {
    // var list_experiences1 = [];
    // var list_experiences2 = [];
    var data_experience = null;
    var listToBeSorted = [];

    try {
      const response_experiences = await ExperienceService.getExperiences();
      console.log("conseguiu!", response_experiences);

      for (const obj of response_experiences.data.splice(0, 20)) {
        data_experience = {
          _id: obj._id,
          username: obj.username,
          name_usuario_child: "criança",
          description: obj.description,
          numLikes: obj.numLikes,
          comments: obj.comments,
        };
        listToBeSorted.push(data_experience);

        //   if (idx < 3) {
        //     list_experiences1.push(data_experience);
        //   } else if (idx < 6) {
        //     list_experiences2.push(data_experience);
        //   } else {
        //     break;
        //   }
      }
      console.log(data_experience);
      let sortedExperiences = listToBeSorted.sort(
        ({ numLikes: data1 }, { numLikes: data2 }) => {
          if (data1 < data2) return 1;
          if (data1 > data2) return -1;
          return 0;
        }
      );
      var list_experiences1 = sortedExperiences.splice(0, 3);
      var list_experiences2 = sortedExperiences.splice(0, 3);
    } catch (err_experiences) {
      console.log(err_experiences);
    }

    this.setState({
      card_experiences1: list_experiences1,
      card_experiences2: list_experiences2,
    });
  }

  render() {
    return (
      <div className="card-container">
        <CardDeck>
          {this.state.card_experiences1.map((experience, i) => (
            <Card className="cardzin mt-4">
              <Card.Body>
                <Card.Title>
                  {experience.username}{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <small>
                    {experience.numLikes}&nbsp;
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#f8b73b" }}
                      size="sm"
                    />
                  </small>{" "}
                </Card.Title>
                <Card.Text>{experience.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>

        <CardDeck>
          {this.state.card_experiences2.map((experience, i) => (
            <Card className="cardzin mt-4">
              <Card.Body>
                <Card.Title>
                  {experience.username}{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <small>
                    {experience.numLikes}&nbsp;
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="sm"
                      style={{ color: "#f8b73b" }}
                    />
                  </small>{" "}
                </Card.Title>
                <Card.Text>{experience.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>

        {/*
        <CardDeck>
          <Card className="cardzin mt-4">
            <Card.Body>
              <Card.Title>Mayara</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">mae do Zezin</Card.Subtitle>
              <Card.Text>Conheci um pai solteirao maravilhoso. Muito obrigado Mom's help por achar minha alma gemea ♥</Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardzin mt-4" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Ana</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">mae do Pessoa</Card.Subtitle>
              <Card.Text>Dei a luz ao Pessoa mas depois que ele conheceu o Raul atraves do app, tudo que ele faz é falar sobre backend. O app cumpre o que promete!</Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardzin mt-4" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Pedro</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">pai da Kira</Card.Subtitle>
              <Card.Text>Sinceramente comecei a usar esse app apenas para encontrar mães solteiras. Atualmente, nao apenas encontrei uma parceira, como uma otima madrasta para a minha filha.</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck>
          <Card className="cardzin mt-4">
            <Card.Body>
              <Card.Title>Miceli</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">pai do Micelio</Card.Subtitle>
              <Card.Text>Micelio era viciado em Docker, Flask, Microsserviços, NextJS e em puxar serviços no Fiverr. Graças ao aplicativo, fomos capazes de interagir com outra familia e Micelio finalmente conseguiu desenvolver sua vida social.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardzin mt-4" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Pessoa</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">mae do Backend</Card.Subtitle>
              <Card.Text>A aplicação superou minhas expectativas. Entretanto, há muitos anúncios de fraldas a 40 reais, assim não dá.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardzin mt-4" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Maria</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">mae do Alvaro</Card.Subtitle>
              <Card.Text>Comecei a usar a aplicacao para fazer um relatorio seguindo os moldes da sociedade brasileira de computacao, esta dificil.</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
         */}
      </div>
    );
  }
}

export default Cards;
