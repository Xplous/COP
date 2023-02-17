import './Portfolio.css'
import arrow_left from '../../assets/svg/arrow__left.svg'
import arrow_right from '../../assets/svg/arrow__right.svg'
const Portfolio = () => {

  return (
    <div className="portfolio">
     <h1 className="portfolio-text">Наши работы:</h1>
     
     <div className="case">
        <img src={arrow_left} className="arrow_left" alt="arrow_left" onClick={() => (console.log())}/>
        <div className="cards">
            <div id='card'>
                {/* <img src={} /> */}
                <div className='blockimg'><div className='image'></div></div>
                <h1>Работа 1</h1>
                </div>
                <div id='card'>
                {/* <img /> */}
                <div className='blockimg'><div className='image'></div></div>
                <h1>Работа 2</h1>
                </div>
                <div id='card'>
                {/* <img /> */}
                <div className='blockimg'><div className='image'></div></div>
                <h1>Работа 3</h1>
                </div>
        </div>
        <img src={arrow_right} className="arrow_right" alt="arrow_right" onClick={() => (console.log())} />
     </div>
    </div>
  )
}

export default Portfolio
