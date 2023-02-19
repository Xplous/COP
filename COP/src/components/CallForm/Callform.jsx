import './Callform.css'

const Callform = () => {

  return (
    <div className="callform">
     <h1>Есть вопросы?</h1>
     <p onClick={() => (console.log('click!'))}>заказать звонок</p>
    </div>
  )
}

export default Callform
