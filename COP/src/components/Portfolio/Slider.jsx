import React from "react";
import Slider from "react-slick";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <Slider {...settings}>
            
          <div className='card' style={{ width: 330 }}>
            <div className='blockimg'><img className='image' /></div>
            <h1>Работа 1</h1>
          </div>
          <div className='card' style={{ width: 330 }}>
            <div className='blockimg'><img className='image' /></div>
            <h1>Работа 2</h1>
          </div>
          <div className='card' style={{ width: 330 }}>
            <div className='blockimg'><img className='image' /></div>
            <h1>Работа 3</h1>
          </div>
          <div className='card' style={{ width: 330 }}>
            <div className='blockimg'><img className='image' /></div>
            <h1>Работа 4</h1>
          </div>
          <div className='card' style={{ width: 330 }}>
            <div className='blockimg'><img className='image' /></div>
            <h1>Работа 5</h1>
          </div>
    </Slider>
  );
}