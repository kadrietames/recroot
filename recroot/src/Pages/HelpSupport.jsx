import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import HelpSupportIcon from '../assets/helpsupport.png'

function HelpSupport() {
  const helpOptions = [
    "FAQs",
    "Contact Support",
    "Report an issue",
    "Privacy policy",
    "Terms & Conditions"
  ];

  return (
    <DashboardLayout activePage="settings">
     
      <div className="w-full text-left mb-4">
        <a href="#" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 text-xs font-semibold">
          <span>←</span> Back to Dashboard
        </a>
      </div>

     
      <div className="w-full flex flex-col items-center justify-center py-2">
        <h1 className="text-2xl font-bold text-[#0f2537] mb-6 tracking-tight">Help & Support</h1>

      
        <div className="w-full max-w-[440px] bg-transparent rounded-2xl  border-slate-100 p-6  flex flex-col items-center text-center gap-5">
          
        
          <div className="w-24 h-24 flex items-center justify-center my-2">
            <img 
              src={HelpSupportIcon} 
              alt="Help and Support Illustration" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-[#0f2537] text-base font-bold tracking-tight">
              How can we help you?
            </h2>
            
          
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-300 text-xs">
                🔍
              </span>
              <input 
                type="text" 
                placeholder="Search for help" 
                className="w-full bg-white border border-slate-200 rounded-full py-2 pl-10 pr-4 text-xs font-normal text-slate-500 placeholder-slate-300 focus:outline-none focus:border-[#1d3d6f] transition"
              />
            </div>
          </div>

        
          <div className="w-full flex flex-col gap-2.5 mt-2 text-left">
            {helpOptions.map((option, index) => (
              <button 
                key={index}
                className="w-full flex items-center justify-between bg-white border border-slate-100 hover:border-slate-200/80 py-3 px-4 rounded-xl text-[11px] font-bold text-slate-700 shadow-none hover:bg-slate-50/30 transition duration-150 group"
              >
                <span>{option}</span>
                <span className="text-slate-400 group-hover:text-slate-600 font-normal transition text-[10px]">
                  &gt;
                </span>
              </button>
            ))}
          </div>

         
          <button className="w-full mt-2 py-3 bg-[#1d3d6f] hover:bg-opacity-95 text-white font-bold text-xs rounded-xl shadow-sm transition duration-150 text-center">
            Contact Support
          </button>

        </div>
      </div>
    </DashboardLayout>
  )
}

export default HelpSupport