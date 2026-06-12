import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import { forgotPassword } from '../../api/recroot'

function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email) {
      setError('Please enter your email address.')
      return
    }
    setLoading(true)
    try {
      const data = await forgotPassword(email)
      if (data.error) {
        setError(data.message || 'Could not send reset link. Please try again.')
      } else {
        setSent(true)
        setTimeout(() => navigate('/resend-link', { state: { email } }), 1500)
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
        <h2 className="text-[32px] font-bold text-slate-900 tracking-tight mb-2">Forgot Password</h2>
        <p className="text-slate-400 text-sm">No worries, we'll help you reset it</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-500 text-xs font-medium px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {sent && (
        <div className="bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-medium px-4 py-3 rounded-lg mb-4">
          Reset link sent! Redirecting...
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-slate-500 text-xs font-medium">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter e-mail address"
            className="w-full h-[44px] px-4 bg-white rounded-lg border border-slate-200 outline-none text-sm placeholder:text-slate-300 focus:border-[#183c6b]"
          />
          <p className="text-slate-400 text-xs mt-1">We'll send a reset link to this email</p>
        </div>

        <button
          type="submit"
          disabled={loading || sent}
          className={`w-full h-[46px] text-white font-medium rounded-lg transition-colors mt-2 text-sm ${
            loading || sent ? 'bg-[#183c6b]/60 cursor-not-allowed' : 'bg-[#183c6b] hover:bg-[#133055]'
          }`}
        >
          {loading ? 'Sending...' : sent ? 'Link Sent ✓' : 'Reset Link Sent'}
        </button>
      </form>

      <Link to="/login" className="flex items-center justify-center gap-2 text-slate-600 font-medium hover:text-slate-900 text-sm mt-6 group transition-colors">
        <span className="transform group-hover:-translate-x-0.5 transition-transform">←</span>
        Back to Login
      </Link>
    </AuthLayout>
  )
}

export default ForgotPassword