import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [icons] = useState(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/font-awesome.min.css"
  );

  return (
    <div className="skills">
      <h1 className="header">Skills</h1>
      <ul className="skillsContainer">
        <li className="text">
          <link rel="stylesheet" type="text/css" href={icons} class></link>React
        </li>
        <li className="text">HTML</li>
        <li className="text">CSS</li>
        <li className="text">Javascript</li>
      </ul>
    </div>
  );
};

export default Skills;
