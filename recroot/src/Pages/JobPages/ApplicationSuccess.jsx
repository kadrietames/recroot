import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import Green from '../../assets/green.png'
import Success from '../../assets/success.png'
import Star from '../../assets/star.png'
import Eclipse from '../../assets/eclipse.png'

function ApplicationSubmittedSuccess() {
  const navigate = useNavigate()

  return (
    <DashboardLayout activePage="jobs">
      <div className="flex items-center justify-center h-full">
        
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center max-w-sm w-full">
          
        
          <div className="relative flex items-center justify-center mb-6 w-32 h-32">
          
            <img src={Star} alt="" className="absolute top-2 right-2 w-4 h-4 object-contain" />
            <img src={Star} alt="" className="absolute bottom-2 left-2 w-3 h-3 object-contain" />
            <img src={Eclipse} alt="" className="absolute top-2 left-4 w-2 h-2 object-contain" />
            <img src={Eclipse} alt="" className="absolute bottom-4 right-4 w-2 h-2 object-contain" />

          
            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center">
               <img src={Success} alt="Success" className="w-12 h-12 object-contain" />  
         </div>
          </div>

         
          <div className="flex flex-col gap-2 mb-6 w-full">
            <div className="flex items-center gap-2 justify-center">
              <img src={Green} alt="check" className="w-4 h-4 object-contain" />
              <p className="text-slate-600 text-xs font-medium">Job description parsed successfully</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <img src={Green} alt="check" className="w-4 h-4 object-contain" />
              <p className="text-slate-600 text-xs font-medium">Key skills and requirements identified</p>
            </div>
          </div>

        
          <button
             onClick={() => {}}
            className="bg-[#163C6B] text-white text-xs font-semibold px-8 py-2.5 rounded-lg hover:opacity-90 transition"
          >
            Start AI Analysis
          </button>

        </div>

      </div>
    </DashboardLayout>
  )
}

export default ApplicationSubmittedSuccess