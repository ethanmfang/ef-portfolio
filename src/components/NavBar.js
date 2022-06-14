import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul className="container">
      <li className="item">About</li>
      <li className="item">Skills</li>
      <li className="item">Resume</li>
      <li className="item">Portfolio</li>
    </ul>
  );
};

export default NavBar;
