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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardInfo = [
  {
    title:    "Mayara",
    subtitle: "mae do Zezin",
    text:     "Conheci um pai solteirao maravilhoso. Muito obrigado Mom's help por achar minha alma gemea ♥",
  },
  {
    title:    "Ana",
    subtitle: "mae do Pessoa",
    text:     "Dei a luz ao Pessoa mas depois que ele conheceu o Raul atraves do app, tudo que ele faz é falar sobre backend. O app cumpre o que promete!",
  },
  {
    title:    "Pedro",
    subtitle: "pai da Kira",
    text:     "Sinceramente comecei a usar esse app apenas para encontrar mães solteiras. Atualmente, nao apenas encontrei uma parceira, como uma otima madrasta para a minha filha.",
  },
  {
    title:    "Miceli",
    subtitle: "pai do Micelio",
    text:     "Micelio era viciado em Docker, Flask, Microsserviços, NextJS e em puxar serviços no Fiverr. Graças ao aplicativo, fomos capazes de interagir com outra familia e Micelio finalmente conseguiu desenvolver sua vida social.",
  },
  {
    title:    "pessoa",
    subtitle: "mae do Backend",
    text:     "A aplicacao superiou minhas expectativas. Entretanto, ha muitos anuncios de fraldas a 40 reais, assim nao da.",
  },
  {
    title:    "Maria",
    subtitle: "mae do Alvaro",
    text:     "Comecei a usar a aplicacao para fazer um relatorio seguindo os moldes da sociedade brasileira de computacao, esta dificil.",
  }
];

const SingleCard = (card, index) => {
  return (
    <Card key={index} className="cardzin mt-4">
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {card.subtitle}
      </Card.Subtitle>
      <Card.Text>
        {card.text}
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

const Cards = () => {
  return (
    <Container className="card-container mb-4 mt-4">
      <CardDeck>
        {cardInfo.map(SingleCard)};
      </CardDeck>
    </Container>
  );
};

<div className="cardzin mt-4">{cardInfo.map(Cards)}</div>;


export default Cards;
