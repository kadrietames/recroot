import React from 'react'

function Stats() {
  return (
    <section className="bg-[#edf2f7] py-12 px-4 md:px-10">
      
      <div className="max-w-6xl mx-auto bg-white border border-slate-100 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 shadow-sm">
        
        
        <div className="flex-1 text-center lg:text-left">
        
          <h2 className="text-dark text-2xl md:text-3xl font-bold mb-4">
            Impact That Speaks <br className="hidden lg:inline" /> For Itself
          </h2>
          <p className="text-body text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
            Recroot is transferring the future of work across the globe by connecting talent with opportunities through intelligence.
          </p>
        </div>
          
        
        <div className="hidden lg:block w-px bg-slate-200 h-20 shrink-0"></div>
        
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full lg:w-auto justify-around lg:justify-end items-center">
          
          <div className="text-center shrink-0">
            <span className="text-2xl mb-2 block">📄</span> {/* Re-added matching page icon from screenshot */}
            <h3 className="text-[#1d3d6f] text-3xl md:text-4xl font-extrabold tracking-tight">10k+</h3>
            <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">Active Job Seekers</p>
          </div>

          <div className="text-center shrink-0">
            <span className="text-2xl mb-2 block">📄</span>
            <h3 className="text-[#1d3d6f] text-3xl md:text-4xl font-extrabold tracking-tight">25k+</h3>
            <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">Job Posted</p>
          </div>

          <div className="text-center shrink-0">
            <span className="text-2xl mb-2 block">📄</span>
            <h3 className="text-[#1d3d6f] text-3xl md:text-4xl font-extrabold tracking-tight">98%</h3>
            <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">Success Rate</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Stats