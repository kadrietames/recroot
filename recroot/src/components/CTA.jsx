import React from 'react'
import Checklist from '../assets/checklist.png' // Imported but not used in this specific footer layout view
import CtaAsset from '../assets/cta.png'
import arrow from '../assets/arrow-up.png'

const CareerCTA = () => {
  return (
    <section className="bg-[#102a43] py-12 px-10 rounded-2xl max-w-6xl mx-auto my-12 overflow-hidden relative">
      <div className="flex items-center justify-between relative z-10">
        
        
        <div>
          <h3 className="text-white text-xl font-bold mb-2">
            Ready to take the next step into your career?
          </h3>
          <p className="text-slate-300 text-sm">
            Join thousand of candidates building their future with Recroot.
          </p>
        </div>

        
        <div className="flex items-center gap-6">
          <button className="bg-white text-[#102a43] font-semibold px-6 py-3 rounded-lg text-sm hover:bg-slate-100 transition duration-300 cursor-pointer flex items-center gap-2 shadow-sm">
            Explore For Free
            <img src={arrow} alt="Arrow diagonal" className="w-4 h-4 object-contain" />
          </button>
          
          
          <img 
            src={CtaAsset} 
            alt="Decorative pattern" 
            className="w-16 h-auto object-contain opacity-90"
          />
        </div>

      </div>
    </section>
  )
}

export default CareerCTA