import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import { updateProfile } from '../../api/recroot'

const nigeriaStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe',
  'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
  'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT Abuja'
]

function TellAboutYourself() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const [form, setForm] = useState({
    name: state?.name || '',
    phone: '',
    email: state?.email || '',
    country: '',
    city: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.phone || !form.country || !form.city) {
      setError('Please fill in all fields.')
      return
    }
    setLoading(true)
    try {
      await updateProfile({ fullName: form.name, phone: form.phone, country: form.country, city: form.city })
      navigate('/profession', { state: { ...state, ...form } })
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="flex items-center justify-between w-full mb-6">
        <button type="button" onClick={() => navigate(-1)} className="text-slate-600 hover:text-slate-900 transition-colors text-lg font-bold">←</button>
        <span className="text-slate-400 text-xs font-medium">Step <strong className="text-slate-800 font-semibold">3</strong> of 4</span>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-[28px] font-bold text-slate-900 tracking-tight mb-1">Tell Us About Yourself</h2>
        <p className="text-slate-400 text-xs">Let's set up your profile to personalize your experiences</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-500 text-xs font-medium px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        {[
          { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Enter your full name' },
          { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'e.g. +234 800 000 0000' },
          { label: 'Your Email', name: 'email', type: 'email', placeholder: 'you@yourcompany.com' },
          { label: 'Country', name: 'country', type: 'text', placeholder: 'e.g. Nigeria' },
        ].map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label className="text-slate-500 text-xs font-medium">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full h-[42px] px-4 bg-white rounded-lg border border-slate-200 outline-none text-sm text-slate-800 focus:border-[#183c6b]"
            />
          </div>
        ))}

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-500 text-xs font-medium">State / City</label>
          <div className="relative">
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full h-[42px] px-4 bg-white rounded-lg border border-slate-200 outline-none text-sm text-slate-800 appearance-none cursor-pointer focus:border-[#183c6b]"
            >
              <option value="">Select your state</option>
              {nigeriaStates.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 text-xs">▼</div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full h-[46px] text-white font-medium rounded-lg transition-colors mt-6 text-sm ${
            loading ? 'bg-[#183c6b]/60 cursor-not-allowed' : 'bg-[#183c6b] hover:bg-[#133055]'
          }`}
        >
          {loading ? 'Saving...' : 'Next'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default TellAboutYourself