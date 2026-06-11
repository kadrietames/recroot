import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import { updateProfile } from '../../api/recroot'

function Profession() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const [form, setForm] = useState({
    orgType: 'Corporate',
    roleType: 'Engineering',
    employmentType: 'Fulltime',
    skills: 'React'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await updateProfile({
        orgType: form.orgType,
        roleType: form.roleType,
        employmentType: form.employmentType,
        skills: form.skills
      })
      navigate('/candidate-dashboard')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const selectClass = "w-full h-[44px] px-4 bg-white rounded-lg border border-slate-200 outline-none text-sm text-slate-700 appearance-none cursor-pointer focus:border-[#183c6b]"

  return (
    <AuthLayout>
      <div className="flex items-center justify-between w-full mb-6">
        <button type="button" onClick={() => navigate(-1)} className="text-slate-600 hover:text-slate-900 transition-colors text-lg font-bold">←</button>
        <span className="text-slate-400 text-xs font-medium">Step <strong className="text-slate-800 font-semibold">4</strong> of 4</span>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-[28px] font-bold text-slate-900 tracking-tight mb-1">Your Professional Story</h2>
        <p className="text-slate-400 text-xs">Help us align your feed with your field coordinates</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-500 text-xs font-medium px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        {[
          {
            label: 'Organization type', name: 'orgType',
            options: ['Corporate / Tech Company', 'Non-Profit', 'Government Agency', 'Educational Institution', 'Other'],
            values: ['Corporate', 'Non-Profit', 'Government', 'Educational Institution', 'Other']
          },
          {
            label: 'Role type', name: 'roleType',
            options: ['Software Engineering / Frontend', 'UI/UX Design', 'Product Management', 'Digital Marketing'],
            values: ['Engineering', 'Design', 'Product', 'Marketing']
          },
          {
            label: 'Employment type', name: 'employmentType',
            options: ['Fulltime', 'Contract', 'Part Time', 'Freelance', 'Internship'],
            values: ['Fulltime', 'Contract', 'Part Time', 'Freelance', 'Internship']
          },
          {
            label: 'Primary Skill Specialization', name: 'skills',
            options: ['React Applications & Tailwind CSS', 'Digital Marketing & SEO', 'Social Media Architecture'],
            values: ['React', 'Digital Marketing', 'Social Media']
          },
        ].map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label className="text-slate-500 text-xs font-medium">{field.label}</label>
            <div className="relative">
              <select name={field.name} value={form[field.name]} onChange={handleChange} className={selectClass}>
                {field.options.map((opt, i) => (
                  <option key={i} value={field.values[i]}>{opt}</option>
                ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs">▼</span>
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className={`w-full h-[48px] text-white font-medium rounded-lg transition-colors mt-6 text-sm ${
            loading ? 'bg-[#183c6b]/60 cursor-not-allowed' : 'bg-[#183c6b] hover:bg-[#133055]'
          }`}
        >
          {loading ? 'Completing registration...' : 'Complete Registration'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default Profession