import React from 'react'
import Chidi from '../assets/chidi.png'
import Adeleke from '../assets/adeleke.png'
import Checklist from '../assets/checklist.png'

const Testimonials = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-10">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-stretch">

        
      
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
          
          <h2 className="text-primary text-3xl md:text-4xl font-bold leading-tight mb-4">
            Loved By Thousands <br className="hidden lg:inline" /> Across The Globe
          </h2>
          <p className="text-body font-medium text-sm md:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Here is what our users have to say about their Recroot experience
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-6 flex-1 w-full">

          
          <div className="bg-white border border-border rounded-xl p-6 md:p-8 flex-1 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6 justify-center sm:justify-start">
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
              </div>
              
              <p className="text-body text-sm leading-relaxed mb-6 text-center sm:text-left">
                "Recroot helped us cut our hiring time by 60%. The AI screening is accurate and saves us so much time"
              </p>
            </div>
            
            <div className="flex items-center gap-3 justify-center sm:justify-start border-t border-slate-50 pt-4 sm:border-0 sm:pt-0">
              <img 
                src={Chidi} 
                alt="Chidi O." 
                className="w-12 h-12 rounded-full object-cover" 
              />
              <div className="text-left">
                <h4 className="text-dark font-semibold text-sm">Chidi O.</h4>
                <p className="text-body text-xs">HR Manager, Paystack</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white border border-border rounded-xl p-6 md:p-8 flex-1 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6 justify-center sm:justify-start">
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <img src={Checklist} alt="Rating Check" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
              </div>
              
              <p className="text-body text-sm leading-relaxed mb-6 text-center sm:text-left">
                "Recroot helped us connect the right candidates to the right opportunities with advanced AI insights"
              </p>
            </div>
            
            <div className="flex items-center gap-3 justify-center sm:justify-start border-t border-slate-50 pt-4 sm:border-0 sm:pt-0">
              <img 
                src={Adeleke} 
                alt="Adeleke Ola" 
                className="w-12 h-12 rounded-full object-cover" 
              />
              <div className="text-left">
                <h4 className="text-dark font-semibold text-sm">Adeleke Ola</h4>
                <p className="text-body text-xs">UI/UX, Google</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials