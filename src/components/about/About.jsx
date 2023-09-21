import React from "react";
import "./About.css";
import ME from "../../img/download.png";

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
              <small>6+ YearsWorking</small>
            </article>

            <article className="about__card">
              <i class="fa-solid fa-users about__icon"></i>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <i class="fa-solid fa-briefcase about__icon"></i>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Hello there! I am Vensan Drot, a full stack web developer with over 3 years of experience in the industry.
            During my career, I have worked on a variety of commercial projects. I am passionate about writing clean,
            efficient code and constantly improving my skills to stay up-to-date with the latest technologies.
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
