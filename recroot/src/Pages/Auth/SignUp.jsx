import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import { signUp } from '../../api/recroot'

function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [agreed, setAgreed] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!agreed) {
      setError('Please agree to the Terms of use and Privacy policy.')
      return
    }
    setLoading(true)
    try {
      const data = await signUp(form.name, form.email, form.password, 'candidate')
      if (data.error || data.message === 'error') {
        setError(data.message || 'Sign up failed. Please try again.')
      } else {
        navigate('/otp', { state: { email: form.email, name: form.name } })
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <h2 className="text-[32px] font-bold text-slate-900 tracking-tight text-center mb-8">
        Create an Account
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-500 text-xs font-medium px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-slate-500 text-xs font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your first and last name"
            className="w-full h-[44px] px-4 bg-white rounded-lg border border-slate-200 outline-none text-sm placeholder:text-slate-300 focus:border-[#183c6b]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-slate-500 text-xs font-medium">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@yourcompany.com"
            className="w-full h-[44px] px-4 bg-white rounded-lg border border-slate-200 outline-none text-sm placeholder:text-slate-300 focus:border-[#183c6b]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="pass" className="text-slate-500 text-xs font-medium">Create Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="pass"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              className="w-full h-[44px] pl-4 pr-10 bg-white rounded-lg border border-slate-200 outline-none text-sm placeholder:text-slate-300 focus:border-[#183c6b]"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 text-xs">
              {showPassword ? '👁' : '👁‍🗨'}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="confirmPass" className="text-slate-500 text-xs font-medium">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              id="confirmPass"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full h-[44px] pl-4 pr-10 bg-white rounded-lg border border-slate-200 outline-none text-sm placeholder:text-slate-300 focus:border-[#183c6b]"
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 text-xs">
              {showConfirm ? '👁' : '👁‍🗨'}
            </button>
          </div>
        </div>

        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 text-[#183c6b] border-slate-300 rounded focus:ring-[#183c6b]"
          />
          <label htmlFor="terms" className="text-slate-500 text-xs leading-normal select-none">
            I agree to the{' '}
            <a href="/terms" className="text-blue-500 hover:underline font-medium">Terms of use</a>
            {' '}and{' '}
            <a href="/privacy" className="text-blue-500 hover:underline font-medium">Privacy</a>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full h-[46px] text-white font-medium rounded-lg transition-colors mt-4 text-sm ${
            loading ? 'bg-[#183c6b]/60 cursor-not-allowed' : 'bg-[#183c6b] hover:bg-[#133055]'
          }`}
        >
          {loading ? 'Creating account...' : 'Continue'}
        </button>
      </form>

      <p className="text-slate-500 text-xs text-center mt-6">
        Already have an account?{' '}
        <Link to="/login" className="text-[#183c6b] font-bold hover:underline">Log In</Link>
      </p>
    </AuthLayout>
  )
}

export default SignUp