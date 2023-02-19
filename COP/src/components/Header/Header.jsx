import './Header.css'
import Logo from '../../assets/svg/logo.svg'
const Header = () => {

  return (
    <div className="header">
     <div className='headup'>
      <img className='logo' src={Logo} weight="122px" height="60px"/>
      <div className='headertext_d'>
        <h1 className='headertext'>Студенческое Общество Разработчиков</h1>
      </div>
     </div>
     <div className='headdown'>
      <div className='navbar'>
        <div className='nav1'><h1>услуги</h1></div>
        <div className='nav2'><h1>о нас</h1></div>
        <div className='nav3'><h1>наши работы</h1></div>
        <div className='nav4'><h1>контакты</h1></div>
        <div className='nav5'><h1>профиль</h1></div>
      </div>
     </div>
    </div>
  )
}

export default Header
