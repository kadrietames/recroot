import React from 'react'
import Checklist from '../assets/checklist.png' 
import CtaAsset from '../assets/cta.png'
import arrow from '../assets/arrow-up.png'

const CareerCTA = () => {
  return (
   
    <section className="bg-[#102a43] py-10 md:py-12 px-6 md:px-10 rounded-2xl max-w-6xl mx-4 sm:mx-auto my-12 overflow-hidden relative">
      
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
        
    
        <div>
          <h3 className="text-white text-lg md:text-xl font-bold mb-2">
            Ready to take the next step into your career?
          </h3>
          <p className="text-slate-300 text-xs md:text-sm">
            Join thousands of candidates building their future with Recroot.
          </p>
        </div>

  
        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
          

          <button className="bg-white text-[#102a43] font-semibold w-full md:w-auto justify-center px-6 py-3 rounded-lg text-sm hover:bg-slate-100 transition duration-300 cursor-pointer flex items-center gap-2 shadow-sm whitespace-nowrap">
            Explore For Free
            <img src={arrow} alt="Arrow diagonal" className="w-4 h-4 object-contain" />
          </button>
          
          <img 
            src={CtaAsset} 
            alt="Decorative pattern" 
            className="hidden sm:block w-16 h-auto object-contain opacity-90 shrink-0"
          />
        </div>

      </div>
    </section>
  )
}

export default CareerCTA