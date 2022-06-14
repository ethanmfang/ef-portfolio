import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <ul className="skillsContainer">
        <li className="bubble">
          <i class="fa-brands fa-react" />
          <div className="text">React</div>
        </li>
        <li className="bubble">
          <i class="fa-solid fa-code" />
          <div className="text">HTML</div>
        </li>
        <li className="bubble">
          <i class="fa-brands fa-css3-alt" />
          <div className="text">CSS</div>
        </li>
        <li className="bubble">
          <i class="fa-brands fa-js" />
          <div className="">Javascript</div>
        </li>
      </ul>
      <div>
        <h1 className="header">Skills</h1>
        <div className="skillsLine"></div>
      </div>
    </div>
  );
};

export default Skills;
