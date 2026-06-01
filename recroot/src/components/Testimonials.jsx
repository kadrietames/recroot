import React from 'react'
import Chidi from '../assets/chidi.png'
import Adeleke from '../assets/adeleke.png'
import Checklist from '../assets/checklist.png'

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-6xl mx-auto flex gap-16 items-center">

        
        <div className="flex-1">
          <h2 className="text-primary text-4xl font-bold leading-tight mb-4">
            Loved By Thousands <br />Across The Globe
          </h2>
          <p className="text-body font-bold text-sm leading-relaxed">
            Here is what our users have to say <br /> about their Recroot experience
          </p>
        </div>

        
        <div className="flex gap-6 flex-1">

          
          <div className="bg-white border border-border rounded-xl p-8 flex-1 shadow-sm">
            
            <div className="flex gap-1 mb-6">
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
            </div>
            
            <p className="text-body text-sm leading-relaxed mb-6">
              "Recroot helped us cut our hiring time by 60%. The AI screening is accurate and saves us so much time"
            </p>
            
            <div className="flex items-center gap-3">
              <img 
                src={Chidi} 
                alt="Chidi O." 
                className="w-12 h-12 rounded-full object-cover" 
              />
              <div>
                <h4 className="text-dark font-semibold text-sm">Chidi O.</h4>
                <p className="text-body text-xs">HR Manager, Paystack</p>
              </div>
            </div>
          </div>

          
          <div className="bg-white border border-border rounded-xl p-8 flex-1 shadow-sm">
            
            <div className="flex gap-1 mb-6">
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
              <img src={Checklist} alt="Rating Check" className="w-5 h-5 object-contain" />
            </div>
            
            <p className="text-body text-sm leading-relaxed mb-6">
              "Recroot helped us connect the right candidates to the right opportunities with advanced AI insights"
            </p>
            
            <div className="flex items-center gap-3">
              <img 
                src={Adeleke} 
                alt="Adeleke Ola" 
                className="w-12 h-12 rounded-full object-cover" 
              />
              <div>
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