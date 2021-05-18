import React from "react";
//import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div id="divHeader" style={{ background: "#90ab9b" }}>
      <LinkContainer to="/login">
        <button className="btn-entrar">Entrar</button>
      </LinkContainer>
    </div>
  );
};

export default Header;
