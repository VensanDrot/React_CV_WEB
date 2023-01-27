import React from "react";
import "./Footer.css";
import { FiInstagram } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Vensan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#port">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/vens_12.06/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://www.upwork.com/freelancers/~013d38b18a0d01544c" target="_blank">
          <SiUpwork />
        </a>
        <a href="https://github.com/VensanDrot" target="_blank">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/vensan-drot-206374236/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Vensan. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
