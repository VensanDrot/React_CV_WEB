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
              <i className="fa-solid fa-award about__icon"></i>
              <h5>Experience</h5>
              <small>3+ YearsWorking</small>
            </article>

            <article className="about__card">
              <i className="fa-solid fa-users about__icon"></i>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <i className="fa-solid fa-briefcase about__icon"></i>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Hello there! I am Vensan Drot, a seasoned full-stack web developer with over 3 years of hands-on experience.
            I enjoy solving complex problems and delivering high-quality products. I was parsing through 3rd (3/4) year
            of my Bachelor's degree in Computer science at INHA University in Tashkent when I moved to the United
            States. I am passionate about learning new technologies and developing my skills in web development. I aim
            to work on innovative and impactful projects that can make a difference in the world.
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
