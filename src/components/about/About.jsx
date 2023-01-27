import React from "react";
import "./About.css";
import ME from "../../img/1.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">
            <article className="about__card">
              <i class="fa-solid fa-award about__icon"></i>
              <h5>Experience</h5>
              <small>3+ YearsWorking</small>
            </article>

            <article className="about__card">
              <i class="fa-solid fa-users about__icon"></i>
              <h5>Clients</h5>
              <small>14+ Worldwide</small>
            </article>

            <article className="about__card">
              <i class="fa-solid fa-briefcase about__icon"></i>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur cumque doloremque eos voluptates, iure
            fuga laborum minima ut, impedit accusamus facilis repellat, ipsam iste dolorem. Ut voluptate dolore aliquid
            numquam.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
