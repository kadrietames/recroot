import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'

function Submit() {
  const navigate = useNavigate()
  const [coverLetter, setCoverLetter] = useState('')

  return (
    <DashboardLayout activePage="jobs">
      <div className="max-w-5xl mx-auto px-6 pt-1 pb-6 text-left">
        
      
        <div className="w-full mb-5">
          <div className="mb-2">
            <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </a>
          </div>
          <div>
            <h1 className="text-[#0f2537] text-2xl font-bold tracking-tight mb-0.5">
              Application for <br /> Senior Product Designer
            </h1>
            <p className="text-slate-400 text-xs font-medium">TechCrush - Remote</p>
          </div>
        </div>

        <div className="max-w-[570px] mx-auto">

        
          <h3 className="text-[#0f2537] text-sm font-bold mb-2">Resume</h3>
          <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3 mb-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 text-red-500 text-[9px] font-bold px-1.5 py-0.5 rounded">PDF</div>
              <p className="text-[#0f2537] text-xs font-semibold">Alex_Joshua_Resume.pdf</p>
            </div>
            <button className="text-[#163C6B] text-xs font-semibold hover:opacity-70 transition">
              Change
            </button>
          </div>

          <h3 className="text-[#0f2537] text-sm font-bold mb-2">Cover Letter</h3>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Add a cover letter (optional)"
            rows={10}
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-600 resize-none focus:outline-none focus:border-slate-300 placeholder-slate-300 mb-4"
          />

       
          <button
            onClick={() => navigate('/jobs/success')}
            className="w-full bg-[#163C6B] text-white py-2.5 rounded-lg text-xs font-semibold hover:opacity-90 transition"
          >
            Submit Application
          </button>

        </div>

      </div>
    </DashboardLayout>
  )
}

export default Submit