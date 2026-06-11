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
    const list = Array.isArray(resumes) ? resumes : resumes.resumes || []
    const resumeId = list[0]?.id || list[0]?._id
    if (!resumeId) {
      setError('No resume found. Please upload your resume first.')
      setLoading(false)
      return
    }
    const data = await applyForJob(job?.id || job?._id, resumeId)
    navigate('/jobs/submit', { state: { job, score, applicationId: data.id || data._id } })
  } catch (err) {
    setError(err.message || 'Application failed. Please try again.')
  } finally {
    setLoading(false)
  }
}
  return (
    <DashboardLayout activePage="jobs">
      <div className="max-w-5xl mx-auto px-4 sm:px-2 pt-1 pb-6 text-left">

        <div className="w-full mb-5">
          <div className="mb-2">
            <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </a>
          </div>
          <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Job Match</h1>
          <p className="text-slate-400 text-xs font-medium">Job match overview</p>
        </div>

        <div className="flex items-center justify-start gap-1.5 sm:gap-2 mb-6 py-1 overflow-x-auto">
          {[
            { num: 1, label: 'Job input', color: 'emerald' },
            { num: 2, label: 'Job Description', color: 'emerald' },
            { num: 3, label: 'Job Details', color: 'emerald' },
            { num: 4, label: 'Overview', color: 'navy' },
          ].map((step, i) => (
            <React.Fragment key={step.num}>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className={`w-7 h-7 flex items-center justify-center rounded-full text-white font-semibold text-xs ${
                  step.color === 'emerald' ? 'bg-emerald-500' : 'bg-[#163C6B]'
                }`}>{step.num}</span>
                <h3 className={`font-bold text-xs hidden sm:block ${
                  step.color === 'emerald' ? 'text-emerald-500' : 'text-[#163C6B]'
                }`}>{step.label}</h3>
              </div>
              {i < 3 && <span className="h-[1.5px] w-10 sm:w-20 bg-emerald-500 shrink-0"></span>}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm px-4 sm:px-5 py-4 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-[#0f2537] text-sm font-bold">{form?.jobTitle || job?.title || 'Senior Product Designer'}</h2>
            <p className="text-slate-400 text-[10px] mt-0.5">
              {job?.company || 'TechCrush'} · {job?.location || 'Lagos, Nigeria'}
            </p>
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

        {error && <p className="text-red-500 text-xs mb-3">{error}</p>}

        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[#0f2537] text-sm font-bold">Job Overview</h3>
          <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full">
            {score?.matchScore ? `${score.matchScore}% match` : '95% match'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-[#0f2537] text-xs font-bold mb-2">Job Overview 🎯</h3>
            <p className="text-slate-500 text-[10px] leading-relaxed">
              {job?.description || 'We are looking for a senior product designer to join our growing team and to lead end-to-end design of our core platform.'}
            </p>
          </div>

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-[#0f2537] text-xs font-bold mb-2">📋 Requirements</h3>
            <ul className="text-slate-500 text-[10px] leading-relaxed space-y-1">
              {score?.requirements?.length > 0
                ? score.requirements.map((req, i) => <li key={i}>• {req}</li>)
                : [
                    '2-5 years of experience in product design.',
                    'Good Understanding of design principles',
                    'Strong problem-solving',
                    'Good communication skills',
                    'Fluent in English speaking',
                    'Ability to work independently',
                  ].map((req, i) => <li key={i}>• {req}</li>)
              }
            </ul>
          </div>

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-[#0f2537] text-xs font-bold mb-2">Key Responsibilities 🎯</h3>
            <ul className="text-slate-500 text-[10px] leading-relaxed space-y-1">
              {score?.keyResponsibilities?.length > 0
                ? score.keyResponsibilities.map((r, i) => <li key={i}>• {r}</li>)
                : [
                    'Budgeting for product designs with clients.',
                    'Setting schedules for project completion with clients',
                    'Preparing design specifications through sketches',
                    'Confirming product design specifications with clients.',
                  ].map((r, i) => <li key={i}>• {r}</li>)
              }
            </ul>
          </div>

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-[#0f2537] text-xs font-bold mb-3">🎯 What We Offer</h3>
            <div className="grid grid-cols-2 gap-2">
              {(job?.benefits?.length > 0 ? job.benefits : [
                { title: 'Competitive Salary', sub: 'Best in Industry' },
                { title: 'Great Culture', sub: 'Collaborative Team' },
                { title: 'Health Insurance', sub: 'Medical & wellness' },
                { title: 'Career Growth', sub: 'Learning' },
              ]).map((item) => (
                <div key={item.title}>
                  <p className="text-[#0f2537] text-[10px] font-bold">{item.title}</p>
                  <p className="text-slate-400 text-[9px]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default JobMatchPage