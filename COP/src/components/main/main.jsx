import './main.css'
import programmer from '../../assets/png/programmer.png'
import desc_left from '../../assets/png/desc__left.png'
import smile from '../../assets/png/Smile.png'
const Main = () => {
    const section_text = 'Хорошая идея! В нашей молодой и дружной компании разработчиков ты сможешь получить большой опыт в разработке сайтов. С нами ты сможешь обмениваться знаниями, получать различные задачи, свободно общаться с другими разработчиками и заводить новых друзей.'
    const section_text_2 = 'Мы только ЗА! Возьмёмся даже за самый сложный проект. В наших интересах научиться чему-то новому, набить руки и собрать портфолио для устройства на работу в будущем. Нет лучше обучения, чем обучение на практике!'
    return (
    <div className="main">
     <h1 className="main-tag">Что ты хочешь?</h1>
     <div className='main-content'>
        <div className="main-def">
            <div className='section'>
                <p className='button-p'>Присоединиться к нам?</p>
                <p className='section-text'>{section_text}</p>
            </div>
            <img src={programmer} className="programmer" alt="programmer"/>
        </div>
        <div className="main-web">
            <img src={desc_left} className="desc_left" alt='computer'/>
            <div className='section-web'>
                <p className='button-p2'>Заказать сайт?</p>
                <p className='section-text2'>{section_text_2}</p>
            </div>
        </div>
     </div>
     <h1 className='tag-why'>Почему мы?</h1>
     <div className='adventage-inner'>
        <h1 className='because'>Потому что бесплатно</h1>
        <img className="smile" src={smile} alt="smile"/>
     </div>
    </div>
  )
}

export default Main
