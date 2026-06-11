import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import confetti from '../../assets/confetti.png'

function LoginSuccess() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const name = state?.name || 'Alex'

  useEffect(() => {
    const timer = setTimeout(() => navigate('/candidate-dashboard'), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-screen min-h-screen bg-[#eef3f9] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 flex flex-col items-center text-center max-w-sm w-full">

        <div className="relative w-36 h-36 flex items-center justify-center mb-4">
          <img src={confetti} alt="" className="absolute inset-0 w-full h-full object-contain" />
          <div className="relative z-10 w-16 h-16 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-white">
            <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-[#0f2537] text-base font-bold mb-1">Welcome, {name}! 👋</h2>
        <p className="text-slate-400 text-xs mb-1">Login Successful</p>
        <p className="text-slate-400 text-xs">Redirecting to your dashboard</p>

      </div>
    </div>
  )
}

export default LoginSuccess