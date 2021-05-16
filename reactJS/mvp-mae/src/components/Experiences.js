import React from "react";
import Experience from "./Experience";
const experiences = [
  {
    cd_exp: 4,
    name_usuario: "Mayara",
    name_usuario_child: "Zezin",
    description:
      "Conheci um pai solteirao maravilhoso. Muito obrigado Mom's help por achar minha alma gemea. Nome dele eh pedro *-*",
    comments: "",
    likes: 15,
  },
  {
    cd_exp: 5,
    name_usuario: "Ana",
    name_usuario_child: "Pessoa",
    description:
      "Dei a luz ao Pessoa e depois disso tudo que ele faz eh falar sobre backend, odiei esse app",
    comments: "verdade!",
    likes: 1,
  },
  {
    cd_exp: 5,
    name_usuario: "Ana",
    name_usuario_child: "Pessoa",
    description:
      "Dei a luz ao Pessoa e depois disso tudo que ele faz eh falar sobre backend, odiei esse app",
    comments: "verdade!",
    likes: 1,
  },
  {
    cd_exp: 5,
    name_usuario: "Ana",
    name_usuario_child: "Pessoa",
    description:
      "Dei a luz ao Pessoa e depois disso tudo que ele faz eh falar sobre backend, odiei esse app",
    comments: "verdade!",
    likes: 1,
  },
  {
    cd_exp: 5,
    name_usuario: "Ana",
    name_usuario_child: "Pessoa",
    description:
      "Dei a luz ao Pessoa e depois disso tudo que ele faz eh falar sobre backend, odiei esse app",
    comments: "verdade!",
    likes: 1,
  },
  {
    cd_exp: 5,
    name_usuario: "Ana",
    name_usuario_child: "Pessoa",
    description:
      "Dei a luz ao Pessoa e depois disso tudo que ele faz eh falar sobre backend, odiei esse app",
    comments: "verdade!",
    likes: 1,
  },
];

// Here comes the array of objects.
const Experiences = ({ experiences }) => {
  return (
    <div className="experiences">
      <ul>
        {experiences.map((experience) => {
          return <Experience key={experience.cd_exp} {...experience} />;
        })}
      </ul>
    </div>
  );
};

export default Experiences;
