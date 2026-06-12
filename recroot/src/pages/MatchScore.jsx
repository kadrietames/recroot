import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import Green from '../assets/green.png'
import { scoreResume, getMyResumes } from '../api/recroot'

function MatchScore() {
  const { state } = useLocation()
  const job = state?.job

  const [score, setScore] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

useEffect(() => {
  const fetchScore = async () => {
    try {
      const resumeId = localStorage.getItem('resumeId')

      if (!resumeId) {
        setError('No resume found inside your profile workspace.')
        setLoading(false)
        return
      }

      const jobDescription = job?.description || job?.title || 'Senior Product Designer at TechCrush'
      const result = await scoreResume(resumeId, jobDescription)
      setScore(result)
    } catch (err) {
      setError('Could not balance match metrics. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  fetchScore()
}, [job])

  const matchScore = score?.matchScore || 95
  

  const radius = 15.9
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (matchScore / 100) * circumference

  const matchBreakdown = score?.breakdown
    ? [
        { label: 'Experience', value: score.breakdown.experience || 95 },
        { label: 'Certification', value: score.breakdown.certification || 80 },
        { label: 'Education', value: score.breakdown.education || 100 },
        { label: 'Responsibilities', value: score.breakdown.responsibilities || 96 },
        { label: 'Communication', value: score.breakdown.communication || 80 },
        { label: 'Culture fit', value: score.breakdown.cultureFit || 90 },
      ]
    : [
        { label: 'Experience', value: 95 },
        { label: 'Certification', value: 80 },
        { label: 'Education', value: 100 },
        { label: 'Responsibilities', value: 96 },
        { label: 'Communication', value: 80 },
        { label: 'Culture fit', value: 90 },
      ]

  const keyStrengths = score?.keyStrengths?.length > 0
    ? score.keyStrengths
    : [
        '2 years of experience',
        'Good communication skills',
        'Problem solving skills',
        'Good leadership skill',
        'Strong work ethic',
        'Technical know how',
      ]

  const jobRequirements = score?.requirements?.length > 0
    ? score.requirements
    : [
        'User Research',
        'Soft Skills',
        'Communication',
        'Ideation',
        'Facilitation',
        'Prototyping',
      ]

  const mustHaveSkills = score?.mustHaveSkills || 6
  const totalSkills = score?.totalSkills || 10

  const handleSaveJob = () => {
    
    console.log('Saving job reference target context:', job?.id)
  }

  return (
    <DashboardLayout activePage="match-score">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-1 pb-6 text-left">
        
        <div className="w-full mb-5">
          <div className="mb-3">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 text-center">
            <p className="text-slate-400 text-xs animate-pulse">Analyzing resume alignments and calculating match score...</p>
          </div>
        ) : error ? (
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 text-center">
            <p className="text-red-500 text-xs font-medium">{error}</p>
            <Link to="/dashboard" className="mt-3 inline-block text-xs text-[#163C6B] font-semibold underline">Return to Dashboard</Link>
          </div>
        ) : (
          <>
           
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm px-5 py-4 mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-[#0f2537] text-sm font-bold">
                  {job?.title || 'Senior Product Designer'}
                </h2>
                <p className="text-slate-400 text-[10px] mt-0.5">
                  {job?.company || 'TechCrush'} • {job?.location || 'Lagos, Nigeria'}
                </p>
              </div>
              <button 
                onClick={handleSaveJob}
                className="bg-[#163C6B] text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition flex items-center gap-1 shrink-0 shadow-sm cursor-pointer"
              >
                + Save Job
              </button>
            </div>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            
              <div className="flex flex-col gap-3">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col items-center text-center">
                  <h3 className="text-[#0f2537] text-xs font-bold mb-4">Your Match Score</h3>
                  <div className="relative w-24 h-24 flex items-center justify-center mb-3">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="3" />
                      <circle
                        cx="18"
                        cy="18"
                        r={radius}
                        fill="none"
                        stroke="#27A869"
                        strokeWidth="3"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-500 ease-out"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-[#0f2537] text-lg font-bold">{matchScore}%</span>
                      <span className="text-emerald-500 text-[9px] font-semibold">Great Match</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-[10px]">You are a top match for this role</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h3 className="text-[#0f2537] text-xs font-bold mb-3">Key Strengths</h3>
                  <div className="flex flex-col gap-2">
                    {keyStrengths.map((strength, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <img src={Green} alt="check" className="w-3.5 h-3.5 object-contain" />
                        <p className="text-slate-600 text-[10px]">{strength}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h3 className="text-[#0f2537] text-xs font-bold mb-4">Match Breakdown</h3>
                  <div className="flex flex-col gap-2.5">
                    {matchBreakdown.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <p className="text-slate-500 text-[10px] w-24 shrink-0">{item.label}</p>
                        <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                          <div
                            className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${item.value}%` }}
                          ></div>
                        </div>
                        <p className="text-[#0f2537] text-[10px] font-semibold w-6 text-right">{item.value}%</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col items-center justify-center text-center min-h-[80px]">
                  <span className="text-emerald-500 text-xl mb-1">🎯</span>
                  <p className="text-emerald-500 text-[10px] font-semibold">
                    You have {mustHaveSkills} out of {totalSkills} must have skills
                  </p>
                </div>
              </div>

             
              <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h3 className="text-[#0f2537] text-xs font-bold mb-1">Job Requirements</h3>
                  <p className="text-slate-400 text-[10px] mb-3">Must Have</p>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                    {jobRequirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <img src={Green} alt="check" className="w-3.5 h-3.5 object-contain" />
                        <p className="text-slate-600 text-[10px]">{req}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#0f2537] text-xs font-bold mb-2">About the Role</h3>
                    <p className="text-slate-400 text-[10px] leading-relaxed mb-3 line-clamp-4">
                      {job?.description || 'We are looking for a senior product designer to join our design team and lead the end-to-end design of our platform.'}
                    </p>
                  </div>
                  <Link to={`/jobs/details/${job?.id || 'default'}`} className="text-[#163C6B] text-[10px] font-semibold inline-flex items-center gap-1 hover:underline">
                    View Full Job Description →
                  </Link>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}

export default MatchScore