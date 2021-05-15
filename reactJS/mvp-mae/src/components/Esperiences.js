import React from "react";
import Experience from "./Experience";

// Here comes the array of objects.
const Experiences = ({ experiences }) => {
  return (
    <div className="experiences">
      {experiences.map((experience) => {
        return <Experience key={experience.cd_exp} {...experience} />;
      })}
    </div>
  );
};

export default Experiences;
