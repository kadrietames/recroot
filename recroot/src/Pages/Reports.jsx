import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import report from '../assets/report.png'
import matchReport from '../assets/matchreport.png'
import interview from '../assets/interviewprep.png'
import { getMyResumes } from '../api/recroot'

const reportTypes = [
  { id: 'match', icon: matchReport, label: 'Match Report', description: 'Detailed Match score and skills analysis' },
  { id: 'interview', icon: interview, label: 'Interview Prep Report', description: 'Questions and preparation guide' },
  { id: 'skill', icon: report, label: 'Skill Report', description: 'Detailed Match score and skills analysis' },
]

function Reports() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const [resume, setResume] = useState(null)

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const resumes = await getMyResumes()
        if (resumes && resumes.length > 0) setResume(resumes[0])
      } catch (err) {}
    }
    fetchResume()
  }, [])

  return (
    <DashboardLayout activePage="reports">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-1 pb-6 text-left">

        <div className="w-full mb-5">
          <div className="mb-2">
            <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </a>
          </div>
          <div>
            <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Create New Report</h1>
            <p className="text-slate-400 text-xs font-medium">Choose the type of report you want to generate</p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-1.5 sm:gap-2 mb-6 bg-transparent py-1 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#163C6B] text-white font-semibold text-xs">1</span>
            <h3 className="text-[#163C6B] font-bold text-xs hidden sm:block">View Report</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">2</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">AI Analysis</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-slate-200 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">3</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">Export</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 max-w-2xl">
          {reportTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelected(type.id)}
              className={`flex flex-row sm:flex-col items-center sm:justify-between p-4 sm:p-5 rounded-xl border cursor-pointer transition-all shadow-sm gap-3 sm:gap-0 ${
                selected === type.id
                  ? 'border-[#163C6B] bg-white sm:-translate-y-1'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-0 flex-1">
                <img src={type.icon} alt={type.label} className="w-6 h-6 object-contain sm:mb-3" />
                <div className="sm:text-center">
                  <h3 className="text-[#0f2537] text-xs font-bold mb-0.5 sm:mb-1">{type.label}</h3>
                  <p className="text-slate-400 text-[10px] leading-normal">{type.description}</p>
                </div>
              </div>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center sm:mt-3 shrink-0 ${
                selected === type.id ? 'border-[#163C6B]' : 'border-slate-300'
              }`}>
                {selected === type.id && (
                  <div className="w-2 h-2 rounded-full bg-[#163C6B]"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="max-w-2xl">
            <h3 className="text-[#0f2537] text-sm font-bold mb-3">Select Source</h3>

            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3 mb-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-1.5 rounded">
                  <img src={matchReport} alt="" className="w-3.5 h-3.5 object-contain" />
                </div>
                <div>
                  <p className="text-[#0f2537] text-xs font-semibold">
                    {resume?.filename || resume?.name || 'No resume uploaded'}
                  </p>
                  <p className="text-slate-400 text-[10px]">
                    {resume?.jobTitle || resume?.title || 'Your resume'}
                  </p>
                </div>
              </div>
              <button className="text-[#163C6B] text-xs font-semibold hover:opacity-70 transition">Change</button>
            </div>

            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3 mb-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-1.5 rounded">
                  <img src={report} alt="" className="w-3.5 h-3.5 object-contain" />
                </div>
                <div>
                  <p className="text-[#0f2537] text-xs font-semibold">Job Description</p>
                  <p className="text-slate-400 text-[10px]">No job selected</p>
                </div>
              </div>
              <button className="text-[#163C6B] text-xs font-semibold hover:opacity-70 transition">Change</button>
            </div>

            <button
              onClick={() => navigate('/reports/generate')}
              className="w-full bg-[#163C6B] text-white py-2.5 rounded-lg text-xs font-semibold hover:opacity-90 transition"
            >
              Generate Report
            </button>
          </div>
        )}

      </div>
    </DashboardLayout>
  )
}

export default Reports