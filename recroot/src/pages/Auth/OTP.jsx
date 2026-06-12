import React, { useRef, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import { verifyOTP, resendOTP } from '../../api/recroot'

function OTP() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const email = state?.email || ''

  const inputsRef = useRef([])
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [timer, setTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (timer === 0) { setCanResend(true); return }
    const countdown = setTimeout(() => setTimer(timer - 1), 1000)
    return () => clearTimeout(countdown)
  }, [timer])

  const handleInputChange = (e, index) => {
    const val = e.target.value.replace(/[^0-9]/g, '')
    const newOtp = [...otp]
    newOtp[index] = val
    setOtp(newOtp)
    if (val && index < 5) inputsRef.current[index + 1].focus()
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus()
    }
  }

  const handleResend = async () => {
    setTimer(30)
    setCanResend(false)
    setError('')
    try {
      await resendOTP(email)
    } catch (err) {
      setError('Could not resend OTP. Please try again.')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const code = otp.join('')
    if (code.length < 6) {
      setError('Please enter the complete 6-digit code.')
      return
    }
    setLoading(true)
    try {
      const data = await verifyOTP(email, code)
      if (data.error) {
        setError(data.message || 'Invalid OTP. Please try again.')
      } else {
        navigate('/otp-success', { state })
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h2 className="text-[32px] font-bold text-slate-900 tracking-tight mb-2">Verify OTP</h2>
        <p className="text-slate-400 text-sm">
          We sent a verification code to{' '}
          <span className="font-semibold text-slate-600">{email || 'your email'}</span>
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-500 text-xs font-medium px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between items-center gap-2 bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={otp[i]}
              ref={(el) => (inputsRef.current[i] = el)}
              onChange={(e) => handleInputChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-9 h-11 sm:w-10 sm:h-12 text-center text-xl font-semibold border-b-2 border-slate-300 focus:border-[#183c6b] outline-none bg-transparent transition-colors"
              autoFocus={i === 0}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-slate-500 text-xs">
            Didn't receive a code?{' '}
            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend}
              className={`font-semibold bg-transparent border-none cursor-pointer ${
                canResend ? 'text-[#183c6b] hover:underline' : 'text-slate-300 cursor-not-allowed'
              }`}
            >
              Resend
            </button>
          </p>
          {!canResend && <span className="text-slate-400 text-xs">{timer}s</span>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full h-[48px] text-white font-medium rounded-lg transition-colors text-sm shadow-sm ${
            loading ? 'bg-[#183c6b]/60 cursor-not-allowed' : 'bg-[#183c6b] hover:bg-[#133055]'
          }`}
        >
          {loading ? 'Verifying...' : 'Confirm'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default OTP