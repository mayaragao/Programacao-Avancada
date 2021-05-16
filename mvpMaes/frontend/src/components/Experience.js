import React from "react";
import { Card } from "react-bootstrap";

const Experience = (props) => {
  // ATENCAO, DEPENDENDO DO JJSON, MUDAR OS SEGUINTES NOMES NA DESTRUICAo do objeto
  const {
    cd_exp,
    name_usuario,
    name_usuario_child,
    description,
    comments,
    likes,
  } = props;
  return <li className="experiencia mt-5"></li>;
};

export default Experience;
