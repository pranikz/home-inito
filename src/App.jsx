import { useState } from 'react'
import './App.css'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Herosection from './components/HeroSection/index'

function App() {

  return (
    <div className='flex flex-col h-screen overflow-hidden font-montserrat'>
      <Header />
      <main class="flex-1 overflow-y-scroll">
        <Herosection />
      </main>

      {/* <Footer /> */}

    </div>
  )
}

export default App
