import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import Green from '../../assets/green.png'
import { resetPassword } from '../../api/recroot'

function ResetPassword() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const [form, setForm] = useState({ password: '', confirmPassword: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const hasMinLength = form.password.length >= 8
  const hasUppercase = /[A-Z]/.test(form.password)
  const hasNumberOrSpecial = /[0-9@!,#$%^&*]/.test(form.password)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!hasMinLength || !hasUppercase || !hasNumberOrSpecial) {
      setError('Password does not meet all requirements.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    try {
      const token = state?.token || ''
      const data = await resetPassword(token, form.password)
      if (data.error) {
        setError(data.message || 'Reset failed. Please try again.')
      } else {
        navigate('/reset-password-success')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const CheckItem = ({ passed, label }) => (
    <div className="flex items-center gap-2">
      {passed
        ? <img src={Green} alt="check" className="w-4 h-4 object-contain" />
        : <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
      }
      <p className={`text-xs ${passed ? 'text-emerald-600' : 'text-slate-400'}`}>{label}</p>
    </div>
  )

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h2 className="text-[32px] font-bold text-slate-900 tracking-tight mb-2">Reset Password</h2>
        <p className="text-slate-400 text-sm">Create a new password for your account</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-500 text-xs font-medium px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-slate-500 text-xs font-medium">New Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full h-[44px] pl-4 pr-12 bg-white rounded-lg border border-slate-200 outline-none text-sm placeholder:text-slate-300 focus:border-[#183c6b]"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 text-xs transition">
              {showPassword ? '👁' : '👁‍🗨'}
            </button>
          </div>
          <div className="flex flex-col gap-1.5 mt-1">
            <CheckItem passed={hasMinLength} label="At least 8 characters" />
            <CheckItem passed={hasUppercase} label="One Uppercase Letter (A-Z)" />
            <CheckItem passed={hasNumberOrSpecial} label="One number or special character (@,!,#)" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-slate-500 text-xs font-medium">Confirm New Password</label>
          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full h-[44px] pl-4 pr-12 bg-white rounded-lg border border-slate-200 outline-none text-sm placeholder:text-slate-300 focus:border-[#183c6b]"
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 text-xs transition">
              {showConfirm ? '👁' : '👁‍🗨'}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full h-[48px] text-white font-medium rounded-lg transition-colors mt-2 text-sm ${
            loading ? 'bg-[#183c6b]/60 cursor-not-allowed' : 'bg-[#183c6b] hover:bg-[#133055]'
          }`}
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default ResetPassword