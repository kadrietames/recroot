import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { applyForJob, getMyResumes } from '../../api/recroot'

function JobMatchPage() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const job = state?.job
  const score = state?.score
  const form = state?.form

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleApply = async () => {
    setLoading(true)
    setError('')

    try {
      const resumes = await getMyResumes()
      const resumeId = resumes[0]?.id || resumes[0]?._id

      if (!resumeId) {
        setError('No resume found. Please upload your resume first.')
        setLoading(false)
        return
      }

      const data = await applyForJob(job?.id || job?._id, resumeId)

      if (data.error) {
        setError('Application failed. Please try again.')
      } else {
        navigate('/jobs/submit', { state: { job, score, applicationId: data.id || data._id } })
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardLayout activePage="jobs">
      <div className="max-w-5xl mx-auto px-2 pt-1 pb-6 text-left">

        <div className="w-full mb-5">
          <div className="mb-2">
            <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </a>
          </div>
          <div>
            <h1 className="text-[#0f2537] text-2xl font-bold tracking-tight mb-0.5">Job Match</h1>
            <p className="text-slate-400 text-xs font-medium">Job match overview</p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-2 mb-6 bg-transparent py-1">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-semibold text-xs">1</span>
            <h3 className="text-emerald-500 font-bold text-xs">Job input</h3>
          </div>
          <span className="h-[1.5px] w-20 bg-emerald-500 shrink-0"></span>

          <div className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-medium text-xs">2</span>
            <h3 className="text-emerald-500 font-bold text-xs">Job Description</h3>
          </div>
          <span className="h-[1.5px] w-20 bg-emerald-500 shrink-0"></span>

          <div className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-medium text-xs">3</span>
            <h3 className="text-emerald-500 font-bold text-xs">Job Details</h3>
          </div>
          <span className="h-[1.5px] w-20 bg-emerald-500 shrink-0"></span>

          <div className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#163C6B] text-white font-medium text-xs">4</span>
            <h3 className="text-[#163C6B] font-bold text-xs">Overview</h3>
          </div>
        </div>

        {/* Job Header Card */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm px-5 py-4 mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-[#0f2537] text-sm font-bold">{form?.jobTitle || 'Senior Product Designer'}</h2>
            <p className="text-slate-400 text-[10px] mt-0.5">TechCrush · Lagos, Nigeria</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="border border-slate-300 text-slate-600 text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-slate-50 transition">
              Save
            </button>
            <button
              onClick={handleApply}
              disabled={loading}
              className={`text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition ${
                loading ? 'bg-[#163C6B]/60 cursor-not-allowed' : 'bg-[#163C6B] hover:opacity-90'
              }`}
            >
              {loading ? 'Applying...' : 'Apply Now'}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-xs mb-3">{error}</p>
        )}

        {/* Match % */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[#0f2537] text-sm font-bold">Job Overview</h3>
          <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full">
            {score?.matchScore ? `${score.matchScore}% match` : '95% match'}
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 gap-3 max-w-3xl">

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-[#0f2537] text-xs font-bold mb-2">Job Overview 🎯</h3>
            <p className="text-slate-500 text-[10px] leading-relaxed">
              {job?.description || 'We are looking for a senior product designer to join our growing team and to lead end-to-end design of our core platform.'}
            </p>
          </div>

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-[#0f2537] text-xs font-bold mb-2">📋 Requirements</h3>
            <ul className="text-slate-500 text-[10px] leading-relaxed space-y-1">
              <li>• 2-5 years of experience in product design.</li>
              <li>• Good Understanding of design principles</li>
              <li>• Strong problem-solving</li>
              <li>• Good communication skills</li>
              <li>• Fluent in English speaking</li>
              <li>• Ability to work independently</li>
            </ul>
          </div>

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-[#0f2537] text-xs font-bold mb-2">Key Responsibilities 🎯</h3>
            <ul className="text-slate-500 text-[10px] leading-relaxed space-y-1">
              <li>• Budgeting for product designs with clients.</li>
              <li>• Setting schedules for project completion with clients</li>
              <li>• Preparing design specifications through sketches</li>
              <li>• Confirming product design specifications with clients.</li>
            </ul>
          </div>

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-[#0f2537] text-xs font-bold mb-3">🎯 What We Offer</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[#0f2537] text-[10px] font-bold">Competitive Salary</p>
                <p className="text-slate-400 text-[9px]">Best in Industry</p>
              </div>
              <div>
                <p className="text-[#0f2537] text-[10px] font-bold">Great Culture</p>
                <p className="text-slate-400 text-[9px]">Collaborative Team</p>
              </div>
              <div>
                <p className="text-[#0f2537] text-[10px] font-bold">Health Insurance</p>
                <p className="text-slate-400 text-[9px]">Medical & wellness</p>
              </div>
              <div>
                <p className="text-[#0f2537] text-[10px] font-bold">Career Growth</p>
                <p className="text-slate-400 text-[9px]">Learning</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  )
}

export default JobMatchPage