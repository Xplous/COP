import './App.css'
import Banner from './components/Banner/Banner'
import Callform from './components/CallForm/Callform'
import Footer from './components/Footeer/Footer'
import Header from './components/Header/Header'
import Main from './components/main/main'
import Portfolio from './components/Portfolio/Portfolio'
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Main/>
      <Callform/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App
