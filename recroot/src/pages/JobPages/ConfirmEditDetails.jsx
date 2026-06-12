import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'

function ConfirmEditDetails() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const job = state?.job
  const score = state?.score

  const [form, setForm] = useState({
    jobTitle: job?.title || 'Senior Product Designer',
    experience: score?.experience || '2+ years',
    jobType: score?.jobType || 'Remote',
    skills: score?.skills || 'Prototyping, soft skills',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Core set of standard select list system option strings
  const standardJobTypes = ['Remote', 'Onsite', 'Hybrid', 'Full-Time', 'Part-Time', 'Contract', 'Freelance', 'Internship']
  
  // Safe validation check: if backend sends an unlisted variant, inject it cleanly so data isn't discarded
  const containsType = standardJobTypes.some(type => type.toLowerCase() === form.jobType.toLowerCase())
  const jobTypeOptions = containsType ? standardJobTypes : [form.jobType, ...standardJobTypes]

  return (
    <DashboardLayout activePage="jobs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-1 pb-6 text-left">

        <div className="w-full mb-5">
          <div className="mb-2">
            {/* Replaced native hash reference anchor link with React Router Link component wrapper */}
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </Link>
          </div>
          <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Confirm and Edit Details</h1>
          <p className="text-slate-400 text-xs font-medium">Review and edit the extracted information if needed</p>
        </div>

        {/* Wizard progress tracker map component layout mapping */}
        <div className="flex items-center justify-start gap-1.5 sm:gap-2 mb-6 py-1 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-semibold text-xs">1</span>
            <h3 className="text-emerald-500 font-bold text-xs hidden sm:block">Job input</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-20 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-medium text-xs">2</span>
            <h3 className="text-emerald-500 font-bold text-xs hidden sm:block">Job Description</h3>
          </div>
          {/* Fixed line color here: steps 1 and 2 are complete, leading into step 3 */}
          <span className="h-[1.5px] w-10 sm:w-20 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#163C6B] text-white font-medium text-xs">3</span>
            <h3 className="text-[#163C6B] font-bold text-xs hidden sm:block">Job Details</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-20 bg-slate-200 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">4</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">Overview</h3>
          </div>
        </div>

        <div className="max-w-[570px] mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5 sm:p-6">
            {[
              { label: 'Job Title', name: 'jobTitle' },
              { label: 'Experience', name: 'experience' },
              { label: 'Skills', name: 'skills' },
            ].map((field) => (
              <div key={field.name} className="mb-4">
                <label className="text-[#0f2537] text-xs font-semibold mb-1.5 block">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-slate-400 shadow-sm"
                />
              </div>
            ))}
            <div className="mb-2">
              <label className="text-[#0f2537] text-xs font-semibold mb-1.5 block">Job Type</label>
              <select
                name="jobType"
                value={form.jobType}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-slate-400 shadow-sm cursor-pointer"
              >
                {jobTypeOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={() => navigate('/jobs/match', { state: { job, score, form } })}
            className="w-full mt-4 bg-[#163C6B] text-white py-2.5 rounded-lg text-xs font-semibold hover:opacity-90 transition shadow-sm cursor-pointer"
          >
            Confirm & Continue
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ConfirmEditDetails