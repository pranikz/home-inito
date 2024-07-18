import { useState } from 'react'
import './App.css'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Herosection from './components/HeroSection/index'
import DoctorTestimonial from './components/Testimonial/DoctorTestimonial/index'
import FAQ from './components/FAQ/index'
import TestimonialSlider from './components/Testimonial/TestimonialSlider/index'
import Stepcomponent from './components/StepComponent/index'

function App() {

  return (
    
    <div className='flex flex-col  overflow-hidden font-montserrat'>
      <Header />
      <main class="flex-1  ">
       
        <Herosection />
        <DoctorTestimonial />
        <Stepcomponent/>
        <TestimonialSlider />
        <FAQ />


      </main>
      <Footer />



    </div>
  )
}

export default App
