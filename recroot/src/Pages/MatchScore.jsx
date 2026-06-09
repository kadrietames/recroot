import React, { useState, useEffect } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Green from '../assets/green.png'
import { getMyApplications, scoreResume, getMyResumes } from '../api/recroot'

const matchBreakdown = [
  { label: 'Experience', value: 95 },
  { label: 'Certification', value: 80 },
  { label: 'Education', value: 100 },
  { label: 'Responsibilities', value: 96 },
  { label: 'Communication', value: 80 },
  { label: 'Culture fit', value: 90 },
]

const keyStrengths = [
  '2 years of experience',
  'Good communication skills',
  'Problem solving skills',
  'Good leadership skill',
  'Strong work ethic',
  'Technical know how',
]

const jobRequirements = [
  'User Research',
  'Soft Skills',
  'Communication',
  'Ideation',
  'Facilitation',
  'Prototyping',
]

function MatchScore() {
  const [score, setScore] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const resumes = await getMyResumes()
        const resumeId = resumes[0]?.id || resumes[0]?._id

        if (!resumeId) {
          setError('No resume found.')
          setLoading(false)
          return
        }

        const result = await scoreResume(resumeId, 'Senior Product Designer at TechCrush')
        setScore(result)
      } catch (err) {
        setError('Could not load match score.')
      } finally {
        setLoading(false)
      }
    }
    fetchScore()
  }, [])

  const matchScore = score?.matchScore || 95

  return (
    <DashboardLayout activePage="match-score">
      <div className="max-w-5xl mx-auto px-2 pt-1 pb-6 text-left">

        
        <div className="w-full mb-5">
          <div className="mb-3">
            <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </a>
          </div>
        </div>

  
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm px-5 py-4 mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-[#0f2537] text-sm font-bold">Senior Product Designer</h2>
            <p className="text-slate-400 text-[10px] mt-0.5">TechCrush • Lagos, Nigeria</p>
          </div>
          <button className="bg-[#163C6B] text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition flex items-center gap-1">
            + Save Job
          </button>
        </div>

        {loading ? (
          <p className="text-slate-400 text-xs">Loading match score...</p>
        ) : error ? (
          <p className="text-red-500 text-xs">{error}</p>
        ) : (
          <div className="grid grid-cols-3 gap-3">

          
            <div className="flex flex-col gap-3">

       
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col items-center text-center">
                <h3 className="text-[#0f2537] text-xs font-bold mb-4">Your Match Score</h3>
                <div className="relative w-24 h-24 flex items-center justify-center mb-3">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15.9"
                      fill="none"
                      stroke="#27A869"
                      strokeWidth="3"
                      strokeDasharray={`${matchScore} 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-[#0f2537] text-lg font-bold">{matchScore}%</span>
                    <span className="text-emerald-500 text-[9px] font-semibold">Great Match</span>
                  </div>
                </div>
                <p className="text-slate-400 text-[10px]">You are a top match for this role</p>
              </div>

             
              <div className="bg-transparent border border-slate-200 rounded-xl p-5 shadow-sm">
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

           
              <div className="bg-transparent border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-[#0f2537] text-xs font-bold mb-4">Match Breakdown</h3>
                <div className="flex flex-col gap-2.5">
                  {matchBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <p className="text-slate-500 text-[10px] w-24 shrink-0">{item.label}</p>
                      <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                        <div
                          className="bg-emerald-500 h-1.5 rounded-full"
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                      <p className="text-[#0f2537] text-[10px] font-semibold w-6 text-right">{item.value}%</p>
                    </div>
                  ))}
                </div>
              </div>

            
              <div className="bg-transparent border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col items-center justify-center text-center">
                <span className="text-emerald-500 text-2xl mb-2">🎯</span>
                <p className="text-emerald-500 text-[10px] font-semibold">You have 6 out of 10 must have skills</p>
              </div>

            </div>

          
            <div className="flex flex-col gap-3">

             
              <div className="bg-transparent border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-[#0f2537] text-xs font-bold mb-1">Job Requirements</h3>
                <p className="text-slate-400 text-[10px] mb-3">Must Have</p>
                <div className="flex flex-col gap-2">
                  {jobRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <img src={Green} alt="check" className="w-3.5 h-3.5 object-contain" />
                      <p className="text-slate-600 text-[10px]">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

             
              <div className="bg-transparent border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-[#0f2537] text-xs font-bold mb-2">About the Role</h3>
                <p className="text-slate-400 text-[10px] leading-relaxed mb-2">
                  We are looking for a senior product designer to join our design team and lead the end-to-end design of our platform.
                </p>
                <a href="#" className="text-[#163C6B] text-[10px] font-semibold">
                  View Full Job Description →
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </DashboardLayout>
  )
}

export default MatchScore