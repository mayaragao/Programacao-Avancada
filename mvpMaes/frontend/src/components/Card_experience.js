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

const Cards = (props) => {
  return (
    <Container className="card-container">
      <CardDeck>
        <Card className="cardzin mt-4">
          <Card.Body>
            <Card.Title>Mayara</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              mae do Zezin
            </Card.Subtitle>
            <Card.Text>
              Conheci um pai solteirao maravilhoso. Muito obrigado Mom's help
              por achar minha alma gemea ♥
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardzin mt-4" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Ana</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              mae do Pessoa
            </Card.Subtitle>
            <Card.Text>
              Dei a luz ao Pessoa mas depois que ele conheceu o Raul atraves do
              app, tudo que ele faz é falar sobre backend. O app cumpre o que
              promete!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardzin mt-4" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Pedro</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              pai da Kira
            </Card.Subtitle>
            <Card.Text>
              Sinceramente comecei a usar esse app apenas para encontrar mães
              solteiras. Atualmente, nao apenas encontrei uma parceira, como uma
              otima madrasta para a minha filha.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>

      <CardDeck>
        <Card className="cardzin mt-4">
          <Card.Body>
            <Card.Title>Miceli</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              pai do Micelio
            </Card.Subtitle>
            <Card.Text>
              Micelio era viciado em Docker, Flask, Microsserviços, NextJS e em
              puxar serviços no Fiverr. Graças ao aplicativo, fomos capazes de
              interagir com outra familia e Micelio finalmente conseguiu
              desenvolver sua vida social.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardzin mt-4" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Pessoa</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              mae do Backend
            </Card.Subtitle>
            <Card.Text>
              A aplicacao superiou minhas expectativas. Entretanto, ha muitos
              anuncios de fraldas a 40 reais, assim nao da.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardzin mt-4" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Maria</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              mae do Alvaro
            </Card.Subtitle>
            <Card.Text>
              Comecei a usar a aplicacao para fazer um relatorio seguindo os
              moldes da sociedade brasileira de computacao, esta dificil.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Cards;
