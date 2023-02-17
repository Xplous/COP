import './Footer.css'
import vkontakte from "../../assets/svg/vk.svg"
const Footer = () => {
  return (
    <div className="footer">
     <h1>© 2023 ООО «СОП “Студенческое общество программистов” - Все права защищены.</h1>
     <img src={vkontakte} alt='vk'/>
    </div>
  )
}

export default Footer
