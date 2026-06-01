import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import notification from '../assets/notifications.png'
import myresume from '../assets/myresume.png'
import questionmark from '../assets/questionmark.png'
import dashboard from '../assets/dashboard.png'
import settings from '../assets/settings.png'
import matchscore from '../assets/matchscore.png'
import report from '../assets/report.png'
import logout from '../assets/logout.png'
import interview from '../assets/interviewprep.png'
import alex from '../assets/alex-joshua.png'
import briefcase from '../assets/briefcase.png'
import lock from '../assets/lock.png'

function Upload() {
  const [fileName, setFileName] = useState('')

  return (

    <div className="flex h-screen w-screen bg-[#edf2f7] font-sans antialiased overflow-hidden">

                        {/* sidebar */}
         
   <aside 
      className="w-72 h-screen sticky top-0 bg-white border-r border-slate-200/60 flex flex-col px-4 pt-4 pb-6 shrink-0 z-50 overflow-y-auto select-none"
      style={{
        scrollbarWidth: 'none',          
        msOverflowStyle: 'none',         
      }}
    >
      <style>{`
        aside::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        {/* the code above with the style tag is to hide the scrollbar in the webpage of both sidebar and main */}
     
      <div className="mt-2 mb-14 px-4">
        <img src={Logo} alt="Recroot Logo" className="h-7 w-auto object-contain" />
      </div>

   
      <nav className="flex flex-col space-y-6">
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-slate-600 text-sm font-medium transition duration-150">
          <img src={dashboard} alt="Dashboard" className="w-5 h-5 object-contain opacity-50" />
          Dashboard
        </a>

   <Link
          to="/upload"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#1d3d6f] text-white text-sm font-medium shadow-sm transition duration-150"
        >
          <img src={myresume} alt="My Resume" className="w-5 h-5 object-contain brightness-0 invert" />
          My Resume
  </Link>

        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-slate-600 text-sm font-medium transition duration-150">
          <img src={briefcase} alt="Jobs Description" className="w-5 h-5 object-contain opacity-50" />
          Jobs Description
        </a>

        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-slate-600 text-sm font-medium transition duration-150">
          <img src={matchscore} alt="Match Score" className="w-5 h-5 object-contain opacity-50" />
          Match Score
        </a>

        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-slate-600 text-sm font-medium transition duration-150">
          <img src={interview} alt="Interview Prep" className="w-5 h-5 object-contain opacity-50" />
          Interview Prep
        </a>

        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-slate-600 text-sm font-medium transition duration-150">
          <img src={report} alt="Reports" className="w-5 h-5 object-contain opacity-50" />
          Reports
        </a>
      </nav>

     
      <div className="border-t border-slate-200 pt-6 mt-12 mb-4">
        <div className="flex flex-col space-y-5">
          <a href="#" className="flex items-center gap-3 px-4 py-1 rounded-lg text-slate-400 hover:text-slate-600 text-sm font-medium transition duration-150">
            <img src={settings} alt="Settings" className="w-5 h-5 object-contain opacity-50" />
            Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-1 rounded-lg text-slate-400 hover:text-slate-600 text-sm font-medium transition duration-150">
            <img src={logout} alt="Logout" className="w-5 h-5 object-contain opacity-50" />
            Log out
          </a>
        </div>
      </div>

    </aside>

             {/* end of sidebar, further down is the rest of the main content */}
        <div className="flex-1 flex flex-col min-w-0 h-full">
        <header className="h-16 bg-white border-b border-slate-200/60 px-8 flex items-center justify-between shrink-0">
          <div className="relative w-64">
            <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400 text-xs">🔍</span>
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-[#f8fafc] border border-slate-200/80 rounded-full py-1.5 pl-10 pr-4 text-xs font-normal text-slate-500 placeholder-slate-300 focus:outline-none"
              disabled
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-1 hover:bg-slate-50 rounded-full transition">
              <img src={questionmark} alt="Help Support" className="w-4 h-4 object-contain opacity-70" />
            </button>
            <button className="p-1 hover:bg-slate-50 rounded-full transition relative">
              <img src={notification} alt="Notifications" className="w-4 h-4 object-contain opacity-70" />
              <span className="absolute top-1 right-1 bg-red-500 w-1.5 h-1.5 rounded-full ring-1 ring-white"></span>
            </button>
            
            <div className="w-px h-5 bg-slate-200 mx-1"></div>

            <div className="flex items-center gap-2">
              <img src={alex} alt="Alex Joshua" className="w-7 h-7 rounded-full object-cover" />
              <div className="text-left hidden sm:block">
                <h4 className="text-slate-700 font-bold text-[11px] leading-tight">Alex Joshua</h4>
                <p className="text-slate-400 text-[10px] leading-tight">Candidate</p>
              </div>
              <span className="text-slate-400 text-[9px] ml-1">▼</span>
            </div>
          </div>
        </header>

        
        <main className="flex-1 overflow-y-auto pl-12 pr-16 pt-6 pb-10 flex flex-col bg-[#f3f6f9]">
          
          <div className="w-full text-left mb-6">
            <div className="mb-2">
              <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold">
                <span>←</span> Back to Dashboard
              </a>
            </div>
            <div>
              <h1 className="text-[#0f2537] text-2xl font-bold tracking-tight mb-1">Upload your Resume</h1>
              <p className="text-slate-500 text-xs font-medium">Drag and drop your resume here</p>
            </div>
          </div>

       
          <div className="w-full flex flex-col items-center justify-center">
          
            <div className="w-full max-w-[530px] bg-white rounded-xl border border-slate-200/60 py-14 px-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <h2 className="text-[#0f2537] font-bold text-sm mb-4">Upload Your Resume</h2>
              
              <p className="text-slate-500 text-xs mb-1.5">
                Drag & drop your resume here, or <a href="#" className="text-[#1d3d6f] font-semibold underline underline-offset-2 hover:text-blue-900">browse</a>
              </p>
              <p className="text-slate-400 text-[10px] mb-6">PDF, DOC(Max 5MB)</p>
              
              <label className="bg-[#1d3d6f] text-white px-10 py-2 rounded-md text-xs font-semibold hover:opacity-95 transition duration-200 cursor-pointer shadow-sm">
                {fileName ? fileName : 'Choose File'}
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files[0]?.name)}
                />
              </label>

              {fileName && (
                <button className="bg-emerald-600 text-white px-10 py-2 rounded-md text-xs font-semibold hover:bg-emerald-700 transition duration-200 cursor-pointer mt-4 shadow-sm">
                  Analyze Resume 
                </button>
              )}
            </div>

        
            <div className="flex flex-col items-center gap-6 w-full max-w-[530px]">
              <a href="#" className="w-full max-w-xs bg-[#e9f7f2] border border-[#cbeee0] rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-[#def5eb] transition duration-150">
                <img src={myresume} alt="Report File" className="w-4 h-4 object-contain opacity-60 brightness-50" />
                <p className="text-emerald-800 font-semibold text-xs">View sample report</p>
              </a>

              <div className="flex items-center gap-2 text-slate-400/80">
                <img src={lock} alt="Secure Lock" className="w-3.5 h-3.5 object-contain" />
                <p className="text-[10px] font-semibold tracking-wide uppercase">Your data is secure and confidential</p>
              </div>
            </div>

          </div>
        </main>
      </div>

    </div>
  )
}

export default Upload