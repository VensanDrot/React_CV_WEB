import React from 'react'
import './Port.css'
import IMG1 from '../../img/quf.png'
import IMG2 from '../../img/bk.webp'
import IMG3 from '../../img/web.png'
import IMG4 from '../../img/react.png'
import IMG5 from '../../img/weather.jpg'


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

function check(demo) {
    console.log(demo);
    if (demo !== undefined) {
    return <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
    }
}


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'PHP Quiz Your Friends Web App',
        github: 'https://github.com/VensanDrot',
        demo:'http://vensandrot.me/quizwebapp/index.php' 
    },
    {
        id: 2,
        image: IMG2,
        title: 'C++ Banking System Project',
        github: 'https://github.com/VensanDrot/Bank-Accounting',
        
    },
    {
        id: 3,
        image: IMG3,
        title: "PHP CV Website And Portfolio ",
        github: 'https://github.com/VensanDrot/WebSite',
        demo:'http://vensandrot.me/' 
    },
    {
        id: 4,
        image: IMG4,
        title: "React CV Website And Portfolio ",
        github: 'https://github.com/VensanDrot/React_CV_WEB',
        demo:'#' 
    },
    {
        id: 5,
        image: IMG5,
        title: "Weather React app ",
        github: 'https://github.com/VensanDrot/Weather-React-App',
        demo:'https://gleeful-croissant-292f2a.netlify.app/' 
    }
]


const Port = () => {
  return (
    <section id='port'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">


       {/*<Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
           {
            data.map(({id,image,title,github,demo})=>{
                return(
                    <SwiperSlide>
                    <article className='portfolio_item' key={id}>
                    <div className="portfolio_item_img">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio_item_cta'>
                    <a href={github} target='_blank' className='btn'>Github</a>
                    <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                </SwiperSlide>
                )
            })
        } 
      
    
      </Swiper>
    */}

        {
            data.map(({id,image,title,github,demo})=>{
                return(
                    
                    <article className='portfolio_item' key={id}>
                    <div className="portfolio_item_img">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio_item_cta'>
                    <a href={github} target='_blank' className='btn'>Github</a>
                    {check(demo)}               
                    </div>
                </article>
               
                )
            })
        } 



    
      </div>

    </section>
  )
}

export default Port