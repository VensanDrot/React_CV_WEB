import React from 'react'
import './Port.css'
import IMG1 from '../../img/portfolio1.jpg'
import IMG2 from '../../img/portfolio2.jpg'


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
        title: 'Quiz Your Friends Web App',
        github: 'github.com',
        demo:'http://vensandrot.me/quizwebapp/index.php' 
    },
    {
        id: 1,
        image: IMG2,
        title: 'C++ Banking System Project',
        github: 'github.com',
        
    },
    {
        id: 1,
        image: IMG1,
        title: 'Quiz Your Friends Web App',
        github: 'github.com',
        demo:'vensandrot.me' 
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