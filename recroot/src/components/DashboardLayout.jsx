import React, { useState } from 'react';
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

const navLinks = [
  { to: '/candidate-dashboard', page: 'dashboard', icon: dashboard, label: 'Dashboard' },
  { to: '/upload', page: 'upload', icon: myresume, label: 'My Resume' },
  { to: '/jobs', page: 'jobs', icon: briefcase, label: 'Jobs Description' },
  { to: '/match-score', page: 'match-score', icon: matchscore, label: 'Match Score' },
  { to: '/interview-prep', page: 'interview-prep', icon: interview, label: 'Interview Prep' },
  { to: '/reports', page: 'reports', icon: report, label: 'Reports' },
]

const bottomLinks = [
  { to: '/settings', page: 'settings', icon: settings, label: 'Settings' },
  { to: '/logout', page: 'logout', icon: logout, label: 'Log out' },
]

function DashboardLayout({ children, activePage }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-[#edf2f7] font-sans antialiased overflow-hidden">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 h-screen bg-white border-r border-slate-200/60 flex flex-col px-4 pt-4 pb-6 shrink-0 z-50 overflow-y-auto select-none transition-transform duration-300
          w-72
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`aside::-webkit-scrollbar { display: none; }`}</style>

        <div className="mt-2 mb-14 px-4 flex items-center justify-between">
          <img src={Logo} alt="Recroot Logo" className="h-7 w-auto object-contain" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-slate-600 p-1"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              to={link.to}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition duration-150 ${
                activePage === link.page
                  ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                  : 'rounded-lg text-slate-400 hover:text-slate-600'
              }`}
            >
              <img
                src={link.icon}
                alt={link.label}
                className={`w-5 h-5 object-contain ${
                  activePage === link.page ? 'brightness-0 invert' : 'opacity-50'
                }`}
              />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-slate-200 pt-6 mt-12 mb-4">
          <div className="flex flex-col space-y-5">
            {bottomLinks.map((link) => (
              <Link
                key={link.page}
                to={link.to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition duration-150 ${
                  activePage === link.page
                    ? 'rounded-xl bg-[#1d3d6f] text-white shadow-sm'
                    : 'rounded-lg text-slate-400 hover:text-slate-600'
                }`}
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className={`w-5 h-5 object-contain ${
                    activePage === link.page ? 'brightness-0 invert' : 'opacity-50'
                  }`}
                />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 h-full">

        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200/60 px-4 sm:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-1.5 rounded-lg hover:bg-slate-50 transition text-slate-500"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="relative w-40 sm:w-64">
              <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400 text-xs">🔍</span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-[#f8fafc] border border-slate-200/80 rounded-full py-1.5 pl-10 pr-4 text-xs font-normal text-slate-500 placeholder-slate-300 focus:outline-none"
                disabled
              />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="p-1 hover:bg-slate-50 rounded-full transition">
              <img src={questionmark} alt="Help Support" className="w-4 h-4 object-contain opacity-70" />
            </button>
            <button className="p-1 hover:bg-slate-50 rounded-full transition relative">
              <img src={notification} alt="Notifications" className="w-4 h-4 object-contain opacity-70" />
              <span className="absolute top-1 right-1 bg-red-500 w-1.5 h-1.5 rounded-full ring-1 ring-white"></span>
            </button>

            <div className="w-px h-5 bg-slate-200 mx-1 hidden sm:block"></div>

            <div className="flex items-center gap-2">
            <img src={alex} alt="User" className="w-7 h-7 rounded-full object-cover" />
            <div className="text-left hidden sm:block">
              <h4 className="text-slate-700 font-bold text-[11px] leading-tight">
                {localStorage.getItem('userName') || 'Alex Joshua'}
              </h4>
              <p className="text-slate-400 text-[10px] leading-tight">Candidate</p>
            </div>
            <span className="text-slate-400 text-[9px] ml-1 hidden sm:block">▼</span>
          </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto min-w-0">
          {children}
        </main>
      </div>

    </div>
  );
}

export default DashboardLayout;