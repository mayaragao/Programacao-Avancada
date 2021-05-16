import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header style={{ background: "#90ab9b" }}>
      <nav className="row-header">
        <LinkContainer to="/login">
          <Button className="btn-entrar" variant="outline-dark">
            Entrar
          </Button>
        </LinkContainer>
      </nav>
    </header>
  );
};

export default Header;
