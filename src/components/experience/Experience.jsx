import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill Do I Have</h5>
      <h2>My Experience</h2>
      <div class="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>ReactJS</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>VUE.JS</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>Angular.JS</h4>
                <small class="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>React Native</h4>
                <small class="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>BootStrap</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>TailWind</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>Styled Components</h4>
                <small class="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>TypeScript</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>Next.js</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>Node.JS</h4>
                <small class="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>Express.JS</h4>
                <small class="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>PostgreSQL</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>MongoDB</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>PHP</h4>
                <small class="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>C#</h4>
                <small class="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill class="experience__details-icons" />
              <div>
                <h4>Python</h4>
                <small class="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
