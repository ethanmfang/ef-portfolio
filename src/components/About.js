import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div className="LeftSection">
        <h1 className="Header">Ethan Fang</h1>
        <p className="Title">Front-End Developer</p>
        <div className="Line"></div>
        <div className="Container">
          <div className="GradientContainer">
            <a className="Links" href="https://github.com/ethanmfang">
              GitHub
            </a>
            <a className="Links" href="https://codepen.io/ethanmfang">
              CodePen
            </a>
            <a className="Links" href="https://www.linkedin.com/in/ethanmfang/">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="Email">ethanmfang@gmail.com</div>
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
