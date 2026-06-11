import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { createJob } from '../../api/recroot'

function EmptyState() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const isGoodLength = text.length >= 100

  const handleAnalyze = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await createJob('Job Description', text)
      if (data.error) {
        setError('Something went wrong. Please try again.')
      } else {
        navigate('/jobs/extracted', { state: { job: data } })
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardLayout activePage="jobs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-1 pb-6 text-left">

        <div className="w-full mb-5">
          <div className="mb-2">
            <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </a>
          </div>
          <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Upload Job Description</h1>
          <p className="text-slate-400 text-xs font-medium">Drag and drop your resume here</p>
        </div>

        <div className="flex items-center justify-start gap-1.5 sm:gap-2 mb-6 py-1 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-semibold text-xs">1</span>
            <h3 className="text-emerald-500 font-bold text-xs hidden sm:block">Job input</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#163C6B] text-white font-medium text-xs">2</span>
            <h3 className="text-[#163C6B] font-bold text-xs hidden sm:block">Job Description</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-slate-200 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">3</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">Job Details</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-slate-200 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">4</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">Overview</h3>
          </div>
        </div>

        <div className="max-w-[570px] mx-auto">
          <div className="bg-[#f8fafc]/50 border border-slate-100 rounded-xl p-5 sm:p-8 shadow-sm">
            <textarea
              value={text}
              onChange={(e) => { if (e.target.value.length <= 3000) setText(e.target.value) }}
              placeholder="Paste your job description here..."
              rows={14}
              className="w-full bg-[#f0f4f8] border border-slate-200 rounded-xl p-4 text-xs text-slate-600 resize-none focus:outline-none focus:border-slate-300 placeholder-slate-300"
            />
            <div className="flex justify-between items-center mt-1 mb-3">
              <p className="text-slate-400 text-[10px]">{text.length}/3000</p>
              {isGoodLength && (
                <p className="text-emerald-500 text-[10px] font-semibold flex items-center gap-1">✅ Looks good!</p>
              )}
            </div>
            {error && <p className="text-red-500 text-[10px] mt-1">{error}</p>}
          </div>

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className={`w-full mt-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-white ${
              loading ? 'bg-[#163C6B]/60 cursor-not-allowed' : 'bg-[#163C6B] cursor-pointer hover:opacity-90'
            }`}
          >
            {loading ? 'Analyzing...' : 'Analyze Job Description'}
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default EmptyState