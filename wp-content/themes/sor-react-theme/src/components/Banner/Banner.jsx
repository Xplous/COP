import './Banner.css'
import picture from '../../assets/png/picture1.png'
const Banner = () => {

  return (
    <div className="banner">
     <img className='picture' src={picture} />
     <span className='bannertext'>Мы - студенты, и мы хотим творить!</span>
    </div>
  )
}

export default Banner
