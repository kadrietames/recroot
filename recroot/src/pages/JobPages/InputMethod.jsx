import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import briefcase from '../../assets/briefcase.png'

function InputMethod() {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  return (
    <DashboardLayout activePage="jobs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-1 pb-6 text-left">

        <div className="w-full mb-5">
          <div className="mb-2">
            <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </a>
          </div>
          <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Choose Input Method</h1>
          <p className="text-slate-400 text-xs font-medium">Paste or Upload your job description</p>
        </div>

        <div className="flex items-center justify-start gap-1.5 sm:gap-2 mb-6 py-1 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#163C6B] text-white font-semibold text-xs">1</span>
            <h3 className="text-[#163C6B] font-bold text-xs hidden sm:block">Job Input</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-emerald-500 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">2</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">Job Description</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-slate-200 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">3</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">AI Analysis</h3>
          </div>
          <span className="h-[1.5px] w-10 sm:w-24 bg-slate-200 shrink-0"></span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 font-medium text-xs">4</span>
            <h3 className="text-slate-400 font-medium text-xs hidden sm:block">Overview</h3>
          </div>
        </div>

        <div className="max-w-[570px] mx-auto bg-[#f8fafc]/50 border border-slate-200 rounded-xl p-5 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-[#0f2537] text-base font-bold">Select Input method</h2>
            <p className="text-slate-400 text-[11px] mt-0.5">How would you like to add job description</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
            {[
              { id: 'paste', label: 'Paste Job Description', desc: 'Copy and paste the job description' },
              { id: 'upload', label: 'Upload Job Description', desc: 'Upload in PDF or Doc format' },
            ].map((option) => (
              <div
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={`flex sm:flex-col flex-row items-center sm:justify-between justify-start p-5 sm:p-6 rounded-xl border cursor-pointer transition-all shadow-sm gap-4 sm:gap-0 ${
                  selected === option.id
                    ? 'border-[#163C6B] bg-white sm:-translate-y-1'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex sm:flex-col flex-row items-center sm:mt-6 gap-3 sm:gap-0 flex-1">
                  <div className="mb-0 sm:mb-5 bg-slate-50 p-2.5 rounded-lg shrink-0">
                    <img src={briefcase} alt="Briefcase Icon" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="sm:text-center">
                    <h3 className="text-[#0f2537] text-xs font-bold mb-1 sm:mb-1.5">{option.label}</h3>
                    <p className="text-slate-400 text-[10px] sm:text-center leading-normal">{option.desc}</p>
                  </div>
                </div>
                <div className="sm:mb-2 shrink-0">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selected === option.id ? 'border-[#163C6B]' : 'border-slate-300'
                  }`}>
                    {selected === option.id && <div className="w-2 h-2 rounded-full bg-[#163C6B]"></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#eefbf7] rounded-lg p-3.5 border border-emerald-100 flex items-start gap-2.5 shadow-sm">
            <span className="text-emerald-500 text-sm shrink-0 mt-0.5">💡</span>
            <p className="text-slate-600 text-[10px] leading-relaxed font-medium">
              Tip: Make sure the job description includes role responsibilities and required skills for best results
            </p>
          </div>

          <button
            onClick={() => {
              if (selected === 'paste') navigate('/jobs/empty-state')
              if (selected === 'upload') navigate('/jobs/submit-upload')
            }}
            disabled={!selected}
            className={`w-full mt-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              selected
                ? 'bg-[#163C6B] text-white cursor-pointer hover:opacity-90'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default InputMethod