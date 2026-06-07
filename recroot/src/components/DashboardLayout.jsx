import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import notification from '../assets/notifications.png';
import myresume from '../assets/myresume.png';
import questionmark from '../assets/questionmark.png';
import dashboard from '../assets/dashboard.png';
import settings from '../assets/settings.png';
import matchscore from '../assets/matchscore.png';
import report from '../assets/report.png';
import logout from '../assets/logout.png';
import interview from '../assets/interviewprep.png';
import alex from '../assets/alex-joshua.png';
import briefcase from '../assets/briefcase.png';

function DashboardLayout({ children, activePage }) {
  return (
    <div className="flex h-screen w-screen bg-[#edf2f7] font-sans antialiased overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside 
        className="w-72 h-screen sticky top-0 bg-white border-r border-slate-200/60 flex flex-col px-4 pt-4 pb-6 shrink-0 z-50 overflow-y-auto select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`aside::-webkit-scrollbar { display: none; }`}</style>
         
        <div className="mt-2 mb-14 px-4">
          <img src={Logo} alt="Recroot Logo" className="h-7 w-auto object-contain" />
        </div>

        <nav className="flex flex-col space-y-6">
        
          {/* Dashboard Link */}
          <a 
            href="#" 
            className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition duration-150 ${
              activePage === 'dashboard'
                ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                : 'rounded-lg text-slate-400 hover:text-slate-600'
            }`}
          >
            <img 
              src={dashboard} 
              alt="Dashboard" 
              className={`w-5 h-5 object-contain ${activePage === 'dashboard' ? 'brightness-0 invert' : 'opacity-50'}`} 
            />
            Dashboard
          </a>

          {/* My Resume Link */}
          <Link
            to="/upload"
            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition duration-150 ${
              activePage === 'upload'
                ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                : 'rounded-lg text-slate-400 hover:text-slate-600'
            }`}
          >
            <img 
              src={myresume} 
              alt="My Resume" 
              className={`w-5 h-5 object-contain transition-all duration-150 ${
                activePage === 'upload' 
                  ? 'brightness-0 invert opacity-100' 
                  : 'brightness-50 opacity-50' 
              }`} 
            />
            <span className="block">My Resume</span>
          </Link>

          {/* Jobs Link */}
          <Link
            to="/jobs"
            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition duration-150 ${
              activePage === 'jobs'
                ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                : 'rounded-lg text-slate-400 hover:text-slate-600'
            }`}
          >
            <img 
              src={briefcase} 
              alt="Jobs Description" 
              className={`w-5 h-5 object-contain ${activePage === 'jobs' ? 'brightness-0 invert' : 'opacity-50'}`} 
            />
            Jobs Description
          </Link>

         
          <Link
            to="/match-score"
            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition duration-150 ${
              activePage === 'match-score'
                ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                : 'rounded-lg text-slate-400 hover:text-slate-600'
            }`}
          >
            <img 
              src={matchscore} 
              alt="Match Score" 
              className={`w-5 h-5 object-contain ${activePage === 'jobs' ? 'brightness-0 invert' : 'opacity-50'}`} 
            />
             Match Score
          </Link>


          <a 
            href="#" 
            className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition duration-150 ${
              activePage === 'interview-prep'
                ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                : 'rounded-lg text-slate-400 hover:text-slate-600'
            }`}
          >
            <img 
              src={interview} 
              alt="Interview Prep" 
              className={`w-5 h-5 object-contain ${activePage === 'interview-prep' ? 'brightness-0 invert' : 'opacity-50'}`} 
            />
            Interview Prep
          </Link>

          {/* Reports Link */}
          <Link
            to="/reports"
            className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition duration-150 ${
              activePage === 'reports'
                ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                : 'rounded-lg text-slate-400 hover:text-slate-600'
            }`}
          >
            <img 
              src={report} 
              alt="Reports" 
              className={`w-5 h-5 object-contain ${activePage === 'reports' ? 'brightness-0 invert' : 'opacity-50'}`} 
            />
            Reports
          </Link>
          
        </nav>

        {/* Bottom Sidebar Settings */}
        <div className="border-t border-slate-200 pt-6 mt-12 mb-4">
          <div className="flex flex-col space-y-5">
            
            {/* Settings */}
            <Link
              to="/settings"
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition duration-150 ${
                activePage === 'settings'
                  ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                  : 'rounded-lg text-slate-400 hover:text-slate-600'
              }`}
            >
              <img 
                src={settings} 
                alt="Settings" 
                className={`w-5 h-5 object-contain ${activePage === 'settings' ? 'brightness-0 invert' : 'opacity-50'}`} 
              />
              Settings
            </Link>

            {/* Logout */}
            <Link
              to="/logout"
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition duration-150 ${
                activePage === 'logout'
                  ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                  : 'rounded-lg text-slate-400 hover:text-slate-600'
              }`}
            >
              <img 
                src={logout} 
                alt="Logout" 
                className={`w-5 h-5 object-contain ${activePage === 'logout' ? 'brightness-0 invert' : 'opacity-50'}`} 
              />
              Log out
            </Link>
            
          </div>
        </div>
      </aside>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Workspace Top Header Header */}
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

        {/* Dynamic Inner Component Content injection site */}
        <main className="p-8 flex-1 overflow-y-auto min-w-0">
          {children}
        </main>
      </div>

    </div>
  );
}

export default DashboardLayout;