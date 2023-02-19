import './Portfolio.css'
import React from "react";
import Slider from "react-slick";
import { Data } from "./Data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Portfolio = () => {
  let left = '<'
  let right = '>'
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="portfolio">
     <h1 className="portfolio-text">Наши работы:</h1>
     <div className="case">
      <Slider {...settings}>
        {Data.map((el) => (
          <div key={el.id} className='card'>
          <div className='blockimg'><img src={el.url} width={el.width} height={el.height} className='image' /></div>
          <h1>{el.jobs}</h1></div>
        ))}
      </Slider>
     </div>
    </div>
  )
}

export default Portfolio
