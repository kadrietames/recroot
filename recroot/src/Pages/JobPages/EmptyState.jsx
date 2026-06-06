import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'

function EmptyState() {
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const isGoodLength = text.length >= 100

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
            <h1 className="text-[#0f2537] text-2xl font-bold tracking-tight mb-0.5">Upload Job Description</h1>
            <p className="text-slate-400 text-xs font-medium">Drag and drop your resume here</p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-2 mb-6 bg-transparent py-1">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-semibold text-xs">1</span>
            <h3 className="text-emerald-500 font-bold text-xs">Job input</h3>
          </div>
          <span className="h-[1.5px] w-24 bg-emerald-500 shrink-0"></span>
          
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#163C6B] text-white font-medium text-xs">2</span>
            <h3 className="text-[#163C6B] font-bold text-xs">Job Description</h3>
          </div>
          <span className="h-[1.5px] w-24 bg-slate-200 shrink-0"></span>

          <div className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">3</span>
            <h3 className="text-slate-400 font-medium text-xs">Job Details</h3>
          </div>
          <span className="h-[1.5px] w-24 bg-slate-200 shrink-0"></span>

          <div className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">4</span>
            <h3 className="text-slate-400 font-medium text-xs">Overview</h3>
          </div>
        </div>


          <div className="max-w-[570px] mx-auto">
        <div className="bg-[#f8fafc]/50 border border-slate-100 rounded-xl p-8 shadow-sm">
          <textarea
            value={text}
            onChange={(e) => {
              if (e.target.value.length <= 3000) setText(e.target.value)
            }}
            placeholder="Paste your job description here..."
            rows={14}
            className="w-full bg-[#f0f4f8] border border-slate-200 rounded-xl p-4 text-xs text-slate-600 resize-none focus:outline-none focus:border-slate-300 placeholder-slate-300"
          />
          <div className="flex justify-between items-center mt-1 mb-3">
            <p className="text-slate-400 text-[10px]">{text.length}/3000</p>
            {isGoodLength && (
              <p className="text-emerald-500 text-[10px] font-semibold flex items-center gap-1">
                ✅ Looks good!
              </p>
            )}
          </div>
          
        </div>
      <button
        onClick={() => navigate('/jobs/extracted')}
        className="w-full py-2.5 rounded-lg text-xs font-semibold transition-all bg-[#163C6B] text-white cursor-pointer hover:opacity-90"
      >
        Analyze Job Description
      </button>
      </div>
      </div>
    </DashboardLayout>
  )
}

export default EmptyState