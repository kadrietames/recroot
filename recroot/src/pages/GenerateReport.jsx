import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import Green from '../assets/green.png'
import confetti from '../assets/confetti.png'
import circle from '../assets/circlesuccess.png'

function GenerateReport() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) {
          clearInterval(interval)
          setTimeout(() => navigate('/reports/overview'), 1000)
          return 85
        }
        return prev + 1
      })
    }, 30)
    return () => clearInterval(interval)
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
            <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Generate Report</h1>
            <p className="text-slate-400 text-xs font-medium">Choose the type of report you want to generate</p>
          </div>
        </div>


        <div className="flex items-center justify-start gap-1.5 sm:gap-2 mb-6 bg-transparent py-1 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white font-semibold text-xs">1</span>
            <h3 className="text-emerald-500 font-bold text-xs hidden sm:block">View Report</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#163C6B] text-white font-medium text-xs">2</span>
            <h3 className="text-[#163C6B] font-bold text-xs hidden sm:block">AI Analysis</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-slate-200 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">3</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">Export</h3>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-transparent border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col items-center text-center">

          <div className="relative w-28 h-28 flex items-center justify-center mb-6">
            <img src={confetti} alt="" className="absolute inset-0 w-full h-full object-contain" />
            <img src={circle} alt="" className="w-14 h-14 object-contain relative z-10" />
          </div>

          <h2 className="text-[#0f2537] text-sm font-bold mb-2">Generating your report...</h2>
          <p className="text-slate-400 text-[10px] leading-relaxed mb-5">
            Our AI is analyzing your resume and job description to create a comprehensive report
          </p>

          <div className="w-full mb-1">
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div
                className="bg-[#163C6B] h-2 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <p className="text-[#163C6B] text-[10px] font-bold self-end mb-5">{progress}%</p>

          <div className="w-full bg-[#eefbf7] border border-emerald-100 rounded-xl p-4 text-left">
            <p className="text-slate-600 text-xs font-semibold mb-2">This may include:</p>
            <div className="flex items-center gap-2 mb-1.5">
              <img src={Green} alt="check" className="w-4 h-4 object-contain" />
              <p className="text-slate-600 text-xs">Match Score</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={Green} alt="check" className="w-4 h-4 object-contain" />
              <p className="text-slate-600 text-xs">Skills analysis and gap</p>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  )
}

export default GenerateReport