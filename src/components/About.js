import React from "react";
import Email from "./Email";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div className="LeftSection">
        <h1 className="Header">Ethan Fang</h1>
        <p className="Title">
          Front-End Development &nbsp; | &nbsp; Test Automation
        </p>
        <br />
        <div className="aboutLine"></div>
        <Email />
        <div className="Container">
          <div className="GradientContainer">
            <a className="Links" href="https://github.com/ethanmfang">
              GitHub
            </a>
            <a className="Links" href="https://www.linkedin.com/in/ethanmfang/">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="RightSection">
        <p className="Summary">
          I'm just a guy trying to program some stuff with my fingers! I'm just
          a guy trying to program some stuff with my fingers! I'm just a guy
          trying to program some stuff with my fingers! I'm just a guy trying to
          program some stuff with my fingers!
        </p>
      </div>
    </div>
  );
};

export default About;
