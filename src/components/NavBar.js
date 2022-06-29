import React, { useRef } from "react";
import "./NavBar.css";

const NavBar = () => {
  const aboutRef = useRef();

  function aboutScroll() {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <ul className="navContainer">
      <li ref={aboutRef} onClick={aboutScroll} className="item">
        About
      </li>
      <li className="item">Skills</li>
      <li className="item">Resume</li>
      <li className="item">Projects</li>
    </ul>
  );
};

export default NavBar;
