import React from 'react'

function Stats() {
  return (
    <section className="bg-pagebg py-9 px-5">
      <div className="max-w-5xl mx-auto bg-pagebg rounded-2xl flex items-center gap-30">
        
        
        <div className="flex-1">
          <h2 className="text-dark text-3xl font-bold mb-4">Impact That Speaks <br /> For Itself</h2>
          <p className="text-body text-sm leading-relaxed">
            Recroot is transferring the future of work <br />
            across the globe by connecting talent <br />
            with opportunities through intelligence.
          </p>
        </div>
          
          
          <div className="w-px bg-border h-24"></div>
        
        <div className="flex gap-12 pt-24">
          
          <div className="text-center">
            <span className="text-2xl mb-2 block"></span>
            <h3 className="text-dark text-3xl font-bold">10k+</h3>
            <p className="text-body text-sm mt-1">Active Job Seekers</p>
          </div>

          <div className="text-center">
            <span className="text-2xl mb-2 block"></span>
            <h3 className="text-dark text-3xl font-bold">25k+</h3>
            <p className="text-body text-sm mt-1">Job Posted</p>
          </div>

          <div className="text-center">
            <span className="text-2xl mb-2 block"></span>
            <h3 className="text-dark text-3xl font-bold">98%</h3>
            <p className="text-body text-sm mt-1">Success Rate</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats