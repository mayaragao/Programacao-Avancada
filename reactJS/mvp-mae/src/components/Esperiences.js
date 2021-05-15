import React from "react";
import Experience from "./Experience";
const Experiences = ({ experiences }) => {
  return (
    <div className="experiences">
      {experiences.map((experience) => {
        return <Experience key={experience.id} {...experience} />;
      })}
    </div>
  );
};

export default Experiences;
