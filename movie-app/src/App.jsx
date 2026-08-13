import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from '../components/Header'
import About from '../components/About'
import Movie from '../components/Movie'
import Footer from '../components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <About/>
        <Movie/>
        <Footer/>
      </div>
    </>
  )
}

export default App
