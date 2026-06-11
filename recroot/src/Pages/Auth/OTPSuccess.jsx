import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import confetti from '../../assets/confetti.png'

function OTPSuccess() {
  const navigate = useNavigate()
  const { state } = useLocation()

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h2 className="text-[32px] font-bold text-slate-900 tracking-tight mb-2">Verify OTP</h2>
        <p className="text-slate-400 text-sm">We sent a verification code to your email</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 flex items-center justify-center mb-5">
          <img src={confetti} alt="" className="absolute inset-0 w-full h-full object-contain" />
          <div className="relative z-10 w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h3 className="text-[#0f2537] text-base font-bold mb-1">Email Verified</h3>
        <p className="text-slate-400 text-xs mb-6">Your email has been successfully verified</p>

        <button
          onClick={() => navigate('/tell-about-yourself', { state })}
          className="w-full h-[48px] bg-[#183c6b] text-white font-medium rounded-lg hover:bg-[#133055] transition-colors text-sm shadow-sm"
        >
          Proceed
        </button>
      </div>
    </AuthLayout>
  )
}

export default OTPSuccess