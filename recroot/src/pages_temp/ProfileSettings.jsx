import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import alex from '../assets/alex-joshua.png';

function ProfileSettings() {
  const menuItems = [
    "Personal Information",
    "Work Experience",
    "Education",
    "Skills",
    "Resume"
  ];

  return (
    <DashboardLayout activePage="settings">
      
      <div className="w-full text-left mb-4">
        <a href="#" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 text-xs font-semibold">
          <span>←</span> Back to Dashboard
        </a>
      </div>

     
      <div className="w-full flex flex-col items-center justify-center py-4">
        <h1 className="text-2xl font-bold text-[#0f2537] mb-8 tracking-tight">Profile</h1>

     
        <div className="w-full max-w-[460px] bg-transparent rounded-2xl  border-slate-100 p-6  flex flex-col gap-5 text-left">
          
          
          <div className="flex items-center gap-3.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
            <img src={alex} alt="Alex Joshua" className="w-11 h-11 rounded-full object-cover" />
            <div>
              <h3 className="text-[#0f2537] font-bold text-sm leading-tight">Alex Joshua</h3>
              <p className="text-slate-400 text-[11px] font-medium mt-0.5">Candidate</p>
            </div>
          </div>

         
          <div className="flex flex-col gap-2 px-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Profile Strength</span>
              <span className="text-slate-500 font-medium">96%</span>
            </div>
           
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>

          
          <div className="flex flex-col gap-2.5 mt-2">
            {menuItems.map((item, index) => (
              <button 
                key={index}
                className="w-full flex items-center justify-between bg-white border border-slate-100 hover:border-slate-200 py-3 px-4 rounded-xl text-xs font-bold text-slate-700 shadow-none hover:bg-slate-50/30 transition duration-150 group"
              >
                <span>{item}</span>
                <span className="text-slate-400 group-hover:text-slate-600 font-normal transition text-[11px]">
                  &gt;
                </span>
              </button>
            ))}
          </div>

  
          <button className="w-full mt-3 py-3 bg-[#1d3d6f] hover:bg-opacity-95 text-white font-bold text-xs rounded-xl shadow-sm transition duration-150 text-center">
            Edit Profile
          </button>

        </div>
      </div>
    </DashboardLayout>
  )
}

export default ProfileSettings