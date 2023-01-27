import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
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
      <a href="https://www.upwork.com/freelancers/~013d38b18a0d01544c" target="_blank">
        <SiUpwork />
      </a>
      <a href="https://www.linkedin.com/in/vensan-drot-206374236/" target="_blank">
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default HeaderSocials;
