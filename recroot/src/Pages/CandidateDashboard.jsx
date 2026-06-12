import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import briefcase from '../assets/briefcase.png'
import { getMyApplications, getMyResumes } from '../api/recroot'

function CandidateDashboard() {
  const navigate = useNavigate()
  const [applications, setApplications] = useState([])
  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appsData, resumeData] = await Promise.all([
          getMyApplications(),
          getMyResumes()
        ])
        setApplications(Array.isArray(appsData) ? appsData : [])
        const resumeList = Array.isArray(resumeData) ? resumeData : resumeData?.resumes || []
        setResume(resumeList[0] || null)
      } catch (err) {
        console.error('Failed to fetch dashboard data', err)
        setApplications([])
        setResume(null)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const userName = localStorage.getItem('userName')?.split(' ')?.[0] || resume?.name?.split(' ')?.[0] || 'Alex'
  const profileStrength = resume ? 85 : 0
  const applicationsSent = applications.length || 12
  const jobMatches = Array.isArray(applications)
    ? applications.filter(a => a.score >= 80).length || 18
    : 18
  const appGrowth = '20% this week'
  const matchGrowth = '35% this week'

  const jobMatchList = Array.isArray(applications) && applications.length > 0
    ? applications.slice(0, 3).map(app => ({
        id: app.id || app._id,
        title: app.jobTitle || 'Product Designer',
        company: app.company || 'Company',
        type: app.jobType || 'Remote',
        salary: app.salary || '$300 - $500',
        match: app.score ? `${app.score}% Match` : '92% Match',
      }))
    : [
        { id: 1, title: 'Product Designer', company: 'Designhub', type: 'Remote', salary: '$300 - $500', match: '92% Match' },
        { id: 2, title: 'Product Designer', company: 'TechCrush', type: 'Remote', salary: '$300 - $500', match: '92% Match' },
        { id: 3, title: 'Product Designer', company: 'Google', type: 'Remote', salary: '$300 - $500', match: '92% Match' },
      ]

  const recentActivities = Array.isArray(applications) && applications.length > 0
    ? applications.slice(0, 5).map((app, i) => ({
        id: i,
        text: `Application to ${app.jobTitle || 'product design'} under review......`
      }))
    : [
        { id: 1, text: 'Application to product design under review......' },
        { id: 2, text: 'Accra company scheduled a meeting......' },
        { id: 3, text: 'Application to frontend under review......' },
        { id: 4, text: 'Accra company scheduled a meeting......' },
        { id: 5, text: 'Application to frontend under review......' },
      ]

  return (
    <DashboardLayout activePage="dashboard">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-1 pb-6">

        {/* Welcome */}
        <h1 className="text-lg sm:text-xl font-bold text-[#0f2537] mb-5">
          Welcome back, {userName}!
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <p className="text-[#0f2537] text-xs font-semibold mb-3">Profile Strength</p>
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg shrink-0">
                <img src={briefcase} alt="" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <p className="text-[#0f2537] text-xl font-bold">{profileStrength}%</p>
                <p className="text-emerald-500 text-[10px] font-semibold">Strong</p>
              </div>
            </div>
          </div>

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <p className="text-[#0f2537] text-xs font-semibold mb-3">Application Sent</p>
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg shrink-0">
                <img src={briefcase} alt="" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <p className="text-[#0f2537] text-xl font-bold">{applicationsSent}</p>
                <p className="text-emerald-500 text-[10px] font-semibold">↑ {appGrowth}</p>
              </div>
            </div>
          </div>

          <div className="bg-transparent border border-slate-200 rounded-xl p-4 shadow-sm">
            <p className="text-[#0f2537] text-xs font-semibold mb-3">Job Match</p>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                <img src={briefcase} alt="" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <p className="text-[#0f2537] text-xl font-bold">{jobMatches}</p>
                <p className="text-emerald-500 text-[10px] font-semibold">↑ {matchGrowth}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Jobs Match + Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Jobs Match */}
          <div className="lg:col-span-2 bg-transparent border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-[#0f2537]">Jobs Match</h2>
              <button
                onClick={() => navigate('/jobs')}
                className="text-[#163C6B] text-xs font-semibold hover:opacity-70 transition flex items-center gap-1"
              >
                View all jobs →
              </button>
            </div>

            <div className="flex flex-col divide-y divide-slate-100">
              {jobMatchList.map((job) => (
                <div key={job.id} className="flex items-center justify-between py-3 gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="bg-blue-50 p-2 rounded-lg shrink-0">
                      <img src={briefcase} alt="" className="w-4 h-4 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#0f2537] text-xs font-bold truncate">{job.title}</p>
                      <p className="text-slate-400 text-[10px]">{job.company}</p>
                      <p className="text-slate-400 text-[10px]">{job.type} · {job.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-semibold px-2 py-1 rounded-full hidden sm:block">
                      {job.match}
                    </span>
                    <button
                      onClick={() => navigate('/jobs/input-method')}
                      className="bg-[#163C6B] text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg hover:opacity-90 transition"
                    >
                      Apply Now
                    </button>
                    <button className="text-slate-300 hover:text-slate-500 transition hidden sm:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-transparent border border-slate-200 rounded-xl p-5 shadow-sm">
            <h2 className="text-sm font-bold text-[#0f2537] mb-4">Recent activities</h2>
            <div className="flex flex-col gap-3">
              {recentActivities.map((activity) => (
                <p key={activity.id} className="text-slate-500 text-[10px] leading-relaxed border-b border-slate-50 pb-2 last:border-0">
                  {activity.text}
                </p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  )
}

export default CandidateDashboard