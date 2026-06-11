import React, { useState, useEffect } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import candidates from '../assets/for-candidates.png'
import recruiters from '../assets/for-recruiters.png'
import { getMyApplications, getInterviews } from '../api/recroot'

function ReportOverview() {
  const [applications, setApplications] = useState([])
  const [interviews, setInterviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appsData, interviewsData] = await Promise.all([
          getMyApplications(),
          getInterviews()
        ])
        setApplications(Array.isArray(appsData) ? appsData : appsData?.applications || appsData?.data || [])
        setInterviews(Array.isArray(interviewsData) ? interviewsData : interviewsData?.interviews || interviewsData?.data || [])
      } catch (err) {
        setError('Could not load report data.')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const latestApp = applications[0]
  const matchScore = latestApp?.score || 95
  const matchedSkills = latestApp?.matchedSkills || 15
  const missingSkills = latestApp?.missingSkills || 4

  const matchBreakdown = [
    { label: 'Experience', value: latestApp?.breakdown?.experience || 95 },
    { label: 'Certification', value: latestApp?.breakdown?.certification || 80 },
    { label: 'Education', value: latestApp?.breakdown?.education || 90 },
    { label: 'Responsibilities', value: latestApp?.breakdown?.responsibilities || 98 },
    { label: 'Communication', value: latestApp?.breakdown?.communication || 80 },
    { label: 'Overall', value: latestApp?.breakdown?.overall || 85 },
  ]

  return (
    <DashboardLayout activePage="reports">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-1 pb-6 text-left">

     
        <div className="w-full mb-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <div className="mb-2">
              <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
                <span className="text-sm">←</span> Back to Dashboard
              </a>
            </div>
            <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Export Report</h1>
            <p className="text-slate-400 text-xs font-medium">Download or share report</p>
          </div>
          <div className="flex items-center gap-2 sm:mt-6">
            <button className="border border-slate-300 text-slate-600 text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-slate-50 transition">
              Share
            </button>
            <button className="bg-[#163C6B] text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition">
              Download
            </button>
          </div>
        </div>

      
        <div className="flex items-center justify-start gap-1.5 sm:gap-2 mb-6 bg-transparent py-1 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-semibold text-xs">1</span>
            <h3 className="text-emerald-500 font-bold text-xs hidden sm:block">View Report</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-medium text-xs">2</span>
            <h3 className="text-emerald-500 font-bold text-xs hidden sm:block">AI Analysis</h3>
          </div>
          <span className="h-[1.5px] w-24 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#163C6B] text-white font-medium text-xs">3</span>
            <h3 className="text-[#163C6B] font-bold text-xs hidden sm:block">Export</h3>
          </div>
        </div>

        {loading ? (
          <p className="text-slate-400 text-xs">Loading report data...</p>
        ) : error ? (
          <p className="text-red-500 text-xs">{error}</p>
        ) : (
          <>
           
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 max-w-2xl">
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-slate-500 text-[10px] font-medium">Matched Skills</p>
                  <img src={candidates} alt="" className="w-4 h-4 object-contain" />
                </div>
                <p className="text-[#0f2537] text-xl font-bold mb-1">{matchedSkills}</p>
                <p className="text-slate-400 text-[10px] leading-normal">Great match with required skills</p>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-slate-500 text-[10px] font-medium">Missing Skills</p>
                  <span className="text-red-400 text-sm">⚠️</span>
                </div>
                <p className="text-[#0f2537] text-xl font-bold mb-1">{missingSkills}</p>
                <p className="text-slate-400 text-[10px] leading-normal">Needs Improvement</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-slate-500 text-[10px] font-medium">Matched Skills</p>
                  <img src={recruiters} alt="" className="w-4 h-4 object-contain" />
                </div>
                <p className="text-[#0f2537] text-xl font-bold mb-1">2+ Years</p>
                <p className="text-slate-400 text-[10px] leading-normal">Relevant experience found</p>
              </div>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center">
                <h3 className="text-[#0f2537] text-xs font-bold mb-4">Your Match Score</h3>
                <div className="relative w-28 h-28 flex items-center justify-center mb-3">
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
                    <span className="text-[#0f2537] text-xl font-bold">{matchScore}%</span>
                    <span className="text-emerald-500 text-[9px] font-semibold">Great Match</span>
                  </div>
                </div>
                <p className="text-slate-400 text-[10px]">You are a top match for this role</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-[#0f2537] text-xs font-bold mb-4">Match Breakdown</h3>
                <div className="flex flex-col gap-2.5">
                  {matchBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <p className="text-slate-500 text-[10px] w-24 shrink-0">{item.label}</p>
                      <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                        <div
                          className="bg-emerald-500 h-1.5 rounded-full"
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                      <p className="text-[#0f2537] text-[10px] font-semibold w-8 text-right">{item.value}%</p>
                    </div>
                  ))}
                </div>
                {interviews.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-slate-400 text-[10px]">
                      {interviews.length} interview session{interviews.length > 1 ? 's' : ''} generated
                    </p>
                  </div>
                )}
              </div>

            </div>
          </>
        )}

      </div>
    </DashboardLayout>
  )
}

export default ReportOverview