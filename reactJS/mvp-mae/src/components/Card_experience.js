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
import { render } from "react-dom";

const Cards = (props) => {
  return (
    <Container className="card-container mb-4 mt-4">
      <CardDeck>
        <Card id="card1" className="cardzin mt-4">
          <Card.Body>
            <Card.Title>Mayara</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              mae do zezin
            </Card.Subtitle>
            <Card.Text>
              Conheci um pai solteirao maravilhoso, nome dele e Pedro ( ͡° ͜ʖ ͡°).
              Muito obrigado Mom's help por achar minha alma gemea S2
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardzin mt-4" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>

      <CardDeck>
        <Card id="card1" className="cardzin mt-4">
          <Card.Body>
            <Card.Title>Mayara</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              mae do zezin
            </Card.Subtitle>
            <Card.Text>
              Conheci um pai solteirao maravilhoso, nome dele e Pedro ( ͡° ͜ʖ ͡°).
              Muito obrigado Mom's help por achar minha alma gemea S2
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardzin mt-4" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Cards;
