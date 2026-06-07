import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()

  return (
    <section 
      className="py-16 md:py-24 px-6 md:px-10 text-center"
      style={{background: 'radial-gradient(ellipse at top, #E6FAF6 0%, #ffffff 60%)'}}
    >
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-dark text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="text-primary">AI-Powered</span> Recruitment, <br />
          Reimagined With <span className="text-primary">Intelligence.</span>
        </h1>

        <p className="text-body text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Empowering Africa's Job Market - Automated Screening For Recruiters
          and Intelligent Preparation For Candidates.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary text-white w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition duration-300 cursor-pointer">
            Explore For Free 
          </button>
          <button 
            onClick={() => navigate('/upload')}
            className="border border-primary text-primary w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
            Upload Resume 
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero