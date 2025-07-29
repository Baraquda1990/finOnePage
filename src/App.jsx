import { useState,useEffect } from 'react'
import Header from './Components/Header.jsx'
import Slider from './Components/Slider.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Practice from './Components/Practice.jsx'
import Jumbotron from './Components/Jumbotron.jsx'
import Partfolio from './Components/Partfolio.jsx'
import Footer from './Components/Footer.jsx'
import ModalSendEmail from './Components/ModalSendEmail.jsx'
function App() {
  const [show, setShow] = useState(false)
  useEffect(() => { if (typeof window.fbq === 'function') { window.fbq('track', 'PageView') } else { console.warn('Meta Pixel fbq не найден') } }, [])
  return (
    <>
        <Header setShowModal={setShow}/>

        <Slider/>

        <About setShowModal={setShow}/>
        
        <Services/>

        <Practice/>

        <Jumbotron/>

        <Partfolio/>

        <Footer setShowModal={setShow}/>

        <ModalSendEmail show={show} setShow={setShow}/>
    </>
  )
}

export default App
