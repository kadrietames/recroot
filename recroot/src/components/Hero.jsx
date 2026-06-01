import React from 'react'

function Hero() {
  return (
    <section 
  className="py-24 px-10 text-center"
  style={{background: 'radial-gradient(ellipse at top, #E6FAF6 0%, #ffffff 60%)'}}>
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-dark text-5xl font-bold leading-tight mb-6">
          <span className="text-primary">AI-Powered</span> Recruitment, <br />
          Reimagined With <span className="text-primary">Intelligence.</span>
        </h1>

        <p className="text-body text-lg leading-relaxed mb-10">
          Empowering Africa's Job Market - Automated Screening For Recruiters
          and Intelligent Preparation For Candidates.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition duration-300 cursor-pointer">
            Explore For Free 
          </button>
          <button className="border border-primary text-primary px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
            Upload Resume  
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero