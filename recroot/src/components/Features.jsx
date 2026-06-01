import React from 'react'
import Hero1 from '../assets/hero1.png'
import Hero2 from '../assets/hero2.png'
import Hero3 from '../assets/hero3.png'

const Features = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-10" id="features">
      
      
      <div className="text-center mb-12">
        <h2 className="text-dark text-2xl md:text-3xl font-bold tracking-tight">Why Choose Recroot?</h2>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        
        <div className="bg-white border border-slate-100 rounded-xl p-6 flex gap-4 hover:-translate-y-1 transition duration-300 shadow-sm items-start">
          
          <div className="p-3 bg-blue-50/50 rounded-lg shrink-0">
            <img src={Hero1} alt="CV Screening" className="w-6 h-6 object-contain" />
          </div>
          <div>
            <h3 className="text-dark font-bold text-sm md:text-base mb-1">Smart CV Screening</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-3">
              AI scans and ranks candidates based on skills and experience.
            </p>
            <a href="#" className="text-primary text-xs md:text-sm font-semibold hover:opacity-80 transition flex items-center gap-1">
              Learn more <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-xl p-6 flex gap-4 hover:-translate-y-1 transition duration-300 shadow-sm items-start">
          <div className="p-3 bg-emerald-50/50 rounded-lg shrink-0">
            <img src={Hero2} alt="Interview Prep" className="w-6 h-6 object-contain" />
          </div>
          <div>
            <h3 className="text-dark font-bold text-sm md:text-base mb-1">AI Interview Prep</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-3">
              Help candidate prepare better with personalized AI feedback.
            </p>
            <a href="#" className="text-primary text-xs md:text-sm font-semibold hover:opacity-80 transition flex items-center gap-1">
              Learn more <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>

        
        <div className="bg-white border border-slate-100 rounded-xl p-6 flex gap-4 hover:-translate-y-1 transition duration-300 shadow-sm items-start">
          <div className="p-3 bg-purple-50/50 rounded-lg shrink-0">
            <img src={Hero3} alt="Fast Matching" className="w-6 h-6 object-contain" />
          </div>
          <div>
            <h3 className="text-dark font-bold text-sm md:text-base mb-1">Fast Matching</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-3">
              Find the right talent or job with intelligent matching.
            </p>
            <a href="#" className="text-primary text-xs md:text-sm font-semibold hover:opacity-80 transition flex items-center gap-1">
              Learn more <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>

        
        <div className="bg-white border border-slate-100 rounded-xl p-6 flex gap-4 hover:-translate-y-1 transition duration-300 shadow-sm items-start">
          <div className="p-3 bg-orange-50/50 rounded-lg shrink-0">
            
            <img src={Hero1} alt="Talent Pool" className="w-6 h-6 object-contain" />
          </div>
          <div>
            <h3 className="text-dark font-bold text-sm md:text-base mb-1">Verified Talent Pool</h3>
            
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-3">
              Access a thoroughly vetted pool of qualified global candidates.
            </p>
            <a href="#" className="text-primary text-xs md:text-sm font-semibold hover:opacity-80 transition flex items-center gap-1">
              Learn more <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features