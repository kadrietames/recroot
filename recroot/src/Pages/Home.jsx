import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import UserTypes from '../components/UserTypes'
// import InterviewPreparation from '../components/InterviewPreparation'

function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <UserTypes />
      {/* <InterviewPreparation /> */}
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home