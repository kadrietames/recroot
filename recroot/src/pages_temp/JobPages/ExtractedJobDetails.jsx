import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import jobTitle from '../../assets/jobtitle.png'
import jobType from '../../assets/jobtype.png'
import location from '../../assets/location.png'
import skills from '../../assets/skills.png'
import responsibilities from '../../assets/responsibilities.png'
import education from '../../assets/education.png'
import experience from '../../assets/experience.png'
import { extractJob } from '../../api/recroot'


function ExtractedJobDetails() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const job = state?.job

  const [score, setScore] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const result = await extractJob(job?.description)
        setScore(result)
      } catch (err) {
        console.error('Extraction failed:', err)
        setError('Could not extract job details. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    if (job) {
      fetchScore()
    } else {
      setLoading(false)
    }
  }, [job])

  const details = [
    { icon: jobTitle, label: 'Job Title', value: score?.jobTitle || job?.title },
    { icon: experience, label: 'Experience', value: score?.experience },
    { icon: jobType, label: 'Job Type', value: score?.jobType },
    { icon: education, label: 'Education', value: score?.education },
    { icon: skills, label: 'Skills', value: Array.isArray(score?.keySkills) ? score.keySkills.join(', ') : score?.skills },
    { icon: location, label: 'Location', value: score?.location || 'Not Specified' },
    { icon: responsibilities, label: 'Key Responsibilities', value: score?.responsibilities },
  ]

  return (
    <DashboardLayout activePage="jobs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-1 pb-6 text-left">

        <div className="w-full mb-5">
          <div className="mb-2">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </Link>
          </div>
          <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Job Details Extracted</h1>
          <p className="text-slate-400 text-xs font-medium">We have extracted key information from the job description</p>
        </div>

        <div className="flex items-center justify-start gap-1.5 sm:gap-2 mb-6 py-1 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-semibold text-xs">1</span>
            <h3 className="text-emerald-500 font-bold text-xs hidden sm:block">Job input</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-medium text-xs">2</span>
            <h3 className="text-emerald-500 font-bold text-xs hidden sm:block">Job Description</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#163C6B] text-white font-medium text-xs">3</span>
            <h3 className="text-[#163C6B] font-bold text-xs hidden sm:block">Job Details</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-slate-200 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">4</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">Overview</h3>
          </div>
        </div>

        <div className="max-w-[570px] mx-auto">
          <div className="bg-[#f8fafc]/50 border border-slate-200 rounded-xl p-5 sm:p-8 shadow-sm">
            {loading ? (
              <p className="text-slate-400 text-xs text-center py-6 animate-pulse">Analyzing your resume against requirements...</p>
            ) : error ? (
              <p className="text-red-500 text-xs text-center py-6 font-medium">{error}</p>
            ) : (
              details.map((item, index) => (
                <div key={index} className="flex items-center justify-between px-3 sm:px-4 py-3 border border-slate-100 rounded-lg bg-[#f0f4f8] mb-2 gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <img src={item.icon} alt={item.label} className="w-4 h-4 object-contain opacity-70 shrink-0" />
                    <p className="text-slate-500 text-xs font-medium shrink-0">{item.label}</p>
                  </div>
                  <p className="text-[#0f2537] text-xs font-semibold text-right truncate max-w-[150px] sm:max-w-none">{item.value}</p>
                </div>
              ))
            )}
          </div>

          <button
            onClick={() => navigate('/jobs/confirm', { state: { job, score } })}
            disabled={loading || !!error}
            className={`w-full mt-4 text-white py-2.5 rounded-lg text-xs font-semibold transition ${
              loading || !!error 
                ? 'bg-[#163C6B]/60 cursor-not-allowed' 
                : 'bg-[#163C6B] hover:opacity-90 cursor-pointer'
            }`}
          >
            Confirm & Continue
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ExtractedJobDetails