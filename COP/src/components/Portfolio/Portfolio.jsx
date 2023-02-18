import { useState, useEffect, Component} from 'react'
import './Portfolio.css'
import arrow_left from '../../assets/svg/arrow__left.svg'
import arrow_right from '../../assets/svg/arrow__right.svg'
import Carousel from './Slider'
import SimpleSlider from './Slider'
const Portfolio = () => {
  let left = '<'
  let right = '>'
  return (
    <div className="portfolio">
     <h1 className="portfolio-text">Наши работы:</h1>
     
     <div className="case">
        <SimpleSlider/>
     </div>
    </div>
  )
}

export default Portfolio
