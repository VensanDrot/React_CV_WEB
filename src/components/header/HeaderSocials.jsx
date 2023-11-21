import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/vens_12.06/" target="_blank">
        <AiOutlineInstagram />
      </a>
      <a href="https://github.com/VensanDrot" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="https://www.linkedin.com/in/vensandrot/" target="_blank">
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default HeaderSocials;
