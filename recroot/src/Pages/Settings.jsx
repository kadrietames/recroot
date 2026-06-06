import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import settings2 from '../assets/settings2.png'

function Settings() {
  const settingsOptions = [
    { label: "Account Settings", path: "/settings/profile" }, 
    { label: "Privacy", path: "#" },
    { label: "Notification Preferences", path: "#" },
    { label: "Change Password", path: "#" },
    { label: "Language", path: "#" },
    { label: "Help & Support", path: "/settings/help" },     
    { label: "About Us", path: "#" }
  ];

  return (
    <DashboardLayout activePage="settings">
     
      <div className="w-full text-left mb-4">
        <a href="#" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 text-xs font-semibold">
          <span>←</span> Back to Dashboard
        </a>
      </div>

      
      <div className="w-full flex flex-col items-center justify-center py-2">
        <h1 className="text-2xl font-bold text-[#0f2537] mb-6 tracking-tight">Settings</h1>

       
        <div className="w-full max-w-[440px] bg-transparent rounded-2xl  border-slate-100 p-6  flex flex-col items-center text-center gap-5">
          
       
          <div className="w-24 h-24 flex items-center justify-center my-2">
            <img 
              src={settings2} 
              alt="Settings Configuration Illustration" 
              className="w-full h-full object-contain"
            />
          </div>

        
          <div className="w-full flex flex-col gap-2.5 text-left">
            {settingsOptions.map((option, index) => (
              <Link 
                key={index}
                to={option.path}
                className="w-full flex items-center justify-between bg-white border border-slate-100 hover:border-slate-200 py-3 px-4 rounded-xl text-[11px] font-bold text-slate-700 shadow-none hover:bg-slate-50/30 transition duration-150 group"
              >
                <span>{option.label}</span>
                <span className="text-slate-400 group-hover:text-slate-600 font-normal transition text-[10px]">
                  &gt;
                </span>
              </Link>
            ))}
          </div>

        
          <Link 
            to="/logout"
            className="w-full mt-2 py-3 bg-red-50 hover:bg-red-100/80 text-red-500 font-bold text-xs rounded-xl transition duration-150 text-center block"
          >
            Log Out
          </Link>

        </div>
      </div>
    </DashboardLayout>
  )
}

export default Settings