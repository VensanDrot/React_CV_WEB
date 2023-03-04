import React from "react";
import "./Port.css";
import IMG1 from "../../img/quf.png";
import IMG2 from "../../img/bk.webp";
import IMG3 from "../../img/web.png";
import IMG4 from "../../img/react.png";
import IMG5 from "../../img/weather.jpg";
import IMG6 from "../../img/quote.png";
import IMG7 from "../../img/mobile.png";
import IMG8 from "../../img/portfolio5.png";
import IMG9 from "../../img/exe.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function check(demo, text, classcon) {
  if (demo !== undefined) {
    return (
      <a href={demo} target="_blank" className={classcon}>
        {text}
      </a>
    );
  }
}

const data = [
  {
    id: 1,
    image: IMG1,
    title: "PHP Quiz Your Friends Web App",
    github: "https://github.com/VensanDrot/Quiz_Your_Friend_Web",
  },
  {
    id: 2,
    image: IMG2,
    title: "C++ Banking System Project",
    github: "https://github.com/VensanDrot/Bank-Accounting",
  },
  {
    id: 3,
    image: IMG3,
    title: "PHP CV Website And Portfolio ",
    github: "https://github.com/VensanDrot/WebSite",
  },
  {
    id: 4,
    image: IMG4,
    title: "React CV Website And Portfolio ",
    github: "https://github.com/VensanDrot/React_CV_WEB",
    demo: "#",
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather React app ",
    github: "https://github.com/VensanDrot/Weather-React-App",
    demo: "https://gleeful-croissant-292f2a.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Quote Heaven Vue ",
    github: "https://github.com/VensanDrot/Vue_Test_Task",
    demo: "https://fantastic-sprinkles-87e2e5.netlify.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "React Native App",
    github: "https://github.com/VensanDrot/Test_Mobile_App",
  },
  {
    id: 8,
    image: IMG8,
    title: "Employee, Client Base",
    github: "https://github.com/VensanDrot/Admin_Panel_Test",
  },
  {
    id: 9,
    image: IMG4,
    title: "ScandiWeb",
    github: "https://github.com/VensanDrot/React_PHP",
    demo: "http://react-php-wheat.vercel.app/",
  },
  {
    id: 10,
    image: IMG9,
    title: "Glitched.EXE",
    github: "https://github.com/VensanDrot/Glitched.exe",
    demo: "https://www.glitchedexe.com/",
  },
];

const Port = () => {
  return (
    <section id="port">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container btn_primary">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item_img">
                <img className="image_source" src={image} alt={title} />
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
