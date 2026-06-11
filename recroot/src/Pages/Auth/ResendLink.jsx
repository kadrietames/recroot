import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

function ResendLink() {
  const { state } = useLocation()
  const email = state?.email || 'example@gmail.com'
  const navigate = useNavigate()

  return (
    <div className="w-screen min-h-screen bg-[#eef3f9] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 flex flex-col items-center text-center max-w-sm w-full">

        <div className="mb-6">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#EEF3F9"/>
            <rect x="16" y="26" width="48" height="34" rx="4" fill="#c7d9f5"/>
            <rect x="16" y="26" width="48" height="34" rx="4" stroke="#183c6b" strokeWidth="2"/>
            <path d="M16 30l24 18 24-18" stroke="#183c6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="56" cy="26" r="8" fill="#183c6b"/>
            <text x="56" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">@</text>
          </svg>
        </div>

        <h2 className="text-[#0f2537] text-base font-bold mb-2">Check your email</h2>
        <p className="text-slate-400 text-xs leading-relaxed mb-1">We have sent a password reset link to</p>
        <p className="text-[#183c6b] text-xs font-bold mb-2">{email}</p>
        <p className="text-slate-400 text-xs leading-relaxed mb-6">Please check your inbox and follow the instructions</p>

        <button
          onClick={() => navigate('/reset-password', { state: { email } })}
          className="w-full h-[44px] bg-[#183c6b] text-white font-medium rounded-lg hover:bg-[#133055] transition-colors text-sm mb-4"
        >
          Open Email App
        </button>

        <Link to="/login" className="flex items-center justify-center gap-2 text-slate-600 font-medium hover:text-slate-900 text-sm group transition-colors">
          <span className="transform group-hover:-translate-x-0.5 transition-transform">←</span>
          Back to Login
        </Link>
      </div>
    </div>
  )
}

export default ResendLink