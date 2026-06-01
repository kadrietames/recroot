import React from 'react'
import Hero1 from '../assets/hero1.png'
import Hero2 from '../assets/hero2.png'
import Hero3 from '../assets/hero3.png'
// import Hero3 from '../assets/hero3.png'

const Features = () => {
  return (
    <section className="bg-white py-20 px-10" id="features">
      
      <div className="text-center mb-12">
        <h2 className="text-dark text-3xl font-bold">Why Choose Recroot?</h2>
      </div>

      <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        <div className="bg-white border border-border rounded-xl p-6 hover:-translate-y-2 transition duration-300">
          <img src={Hero1} alt="CV Screening" className="w-8 h-8" />
          <h3 className="text-dark font-semibold text-base mb-2">Smart CV Screening</h3>
          <p className="text-body text-sm leading-relaxed mb-4">AI scans and ranks candidates based on skills and experience.</p>
          <a href="#" className="text-primary text-sm font-medium hover:text-primary">Learn more →</a>
        </div>

        <div className="bg-white border border-border rounded-xl p-6 hover:-translate-y-2 transition duration-300">
          <img src={Hero2} alt="Interview Prep" className="w-8 h-8" />
          <h3 className="text-dark font-semibold text-base mb-2">AI Interview Prep</h3>
          <p className="text-body text-sm leading-relaxed mb-4">Help candidate prepare better with personalized AI feedback.</p>
          <a href="#" className="text-primary text-sm font-medium hover:text-primary">Learn more →</a>
        </div>

        <div className="bg-white border border-border rounded-xl p-6 hover:-translate-y-2 transition duration-300">
          <img src={Hero3} alt="Fast Matching" className="w-8 h-8" />
          <h3 className="text-dark font-semibold text-base mb-2">Fast Matching</h3>
          <p className="text-body text-sm leading-relaxed mb-4">Find the right talent or job with intelligent matching.</p>
          <a href="#" className="text-primary text-sm font-medium hover:text-primary">Learn more →</a>
        </div>

        <div className="bg-white border border-border rounded-xl p-6 hover:-translate-y-2 transition duration-300">
          <img src={Hero3} alt="Talent Pool" className="w-8 h-8" />
          <h3 className="text-dark font-semibold text-base mb-2">Verified Talent Pool</h3>
          <p className="text-body text-sm leading-relaxed mb-4">AI scans and ranks candidates based on skills and experience.</p>
          <a href="#" className="text-primary text-sm font-medium hover:text-">Learn more →</a>
        </div>

      </div>
    </section>
  )
}

export default Features