import React from 'react'
import { useNavigate } from 'react-router-dom'
import Green from '../../assets/green.png'
import Success from '../../assets/success.png'
import Star from '../../assets/star.png'
import Eclipse from '../../assets/eclipse.png'

function ResetPasswordSuccess() {
  const navigate = useNavigate()

  return (
    <div className="w-screen min-h-screen bg-[#eef3f9] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 flex flex-col items-center text-center max-w-sm w-full">

        <div className="relative flex items-center justify-center w-36 h-36 mb-4">
          <span className="absolute top-2 left-6 text-emerald-500 text-lg">★</span>
          <span className="absolute top-6 right-4 text-emerald-500 text-xl">★</span>
          <span className="absolute bottom-4 left-4 text-emerald-500 text-xl">★</span>
          <span className="absolute top-4 left-16 w-2 h-2 rounded-full bg-emerald-500 block"></span>
          <span className="absolute bottom-6 right-6 w-3 h-5 rounded-full bg-emerald-500 block"></span>
          <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center relative z-10">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-[#0f2537] text-base font-bold mb-2">Password Reset Successful!</h2>
        <p className="text-slate-400 text-xs leading-relaxed mb-6">Your Password has been reset successfully.</p>

        <button
          onClick={() => navigate('/login')}
          className="w-full h-[44px] bg-[#183c6b] text-white font-medium rounded-lg hover:bg-[#133055] transition-colors text-sm"
        >
          Back to Login
        </button>
      </div>
    </div>
  )
}

export default ResetPasswordSuccess