import React from "react";
import "./Nav.css";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [status, setStatus] = useState("close");
  const [statusdiv, setStatusdiv] = useState("out");

  function stche() {
    setStatus(status === "open" ? "close" : "open");
    setStatusdiv(statusdiv === "in" ? "out" : "in");
  }

  return (
    <nav>
      <a href="#" className="vensan" onClick={() => setActiveNav("#")}>
        Vensan
      </a>
      <ul className="div">
        <li>
          <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            Experience
          </a>
        </li>
        <li>
          <a href="#port" onClick={() => setActiveNav("#port")} className={activeNav === "#port" ? "active" : ""}>
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="BurgerMenu__container" role="button" onClick={() => stche()}>
        <i className={status}></i>
        <i className={status}></i>
        <i className={status}></i>
      </div>

      <ul className={` div-mobile ${statusdiv}`}>
        <li>
          <a
            href="#"
            onClick={() => {
              setActiveNav("#");
              stche();
            }}
            className={activeNav === "#" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              setActiveNav("#about");
              stche();
            }}
            className={activeNav === "#about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={() => {
              setActiveNav("#experience");
              stche();
            }}
            className={activeNav === "#experience" ? "active" : ""}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#port"
            onClick={() => {
              setActiveNav("#port");
              stche();
            }}
            className={activeNav === "#port" ? "active" : ""}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => {
              setActiveNav("#contact");
              stche();
            }}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
