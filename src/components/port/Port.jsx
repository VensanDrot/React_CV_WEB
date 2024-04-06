import React from "react";
import "./Port.css";
import { data } from "../data";

function check(demo, text, classcon) {
  if (demo !== undefined) {
    return (
      <a href={demo} target="_blank" className={classcon} rel="noreferrer">
        {text}
      </a>
    );
  }
}

const Port = () => {
  return (
    <section id="port">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container btn_primary">
        {data.reverse().map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item_img">
                <img className="image_source" height={300} width={300} src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                {check(github, "GitHub", "btn")}
                {check(demo, "Live Demo", "btn btn-primary")}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Port;
