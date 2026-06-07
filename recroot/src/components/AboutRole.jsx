import React from 'react';

function AboutRole({ onGenerate }) {
  return (
    <div className="bg-[#f8fafc] rounded-2xl border border-slate-200/80 p-6 shadow-xs">

      <h2 className="text-base font-bold text-slate-800 text-center mb-6 tracking-wide">
        About the Role
      </h2>

      <div className="space-y-3">

        {/* Job Title */}
        <div className="bg-white border border-slate-200/70 p-4 rounded-xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm">👤</span>
            <span className="text-sm font-medium text-slate-500">Job Title</span>
          </div>
          <span className="text-sm font-semibold text-slate-700">Senior Product Designer</span>
        </div>

        {/* Experience */}
        <div className="bg-white border border-slate-200/70 p-4 rounded-xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm">📋</span>
            <span className="text-sm font-medium text-slate-500">Experience</span>
          </div>
          <span className="text-sm font-semibold text-slate-700">2+ years</span>
        </div>

        {/* Skills */}
        <div className="bg-white border border-slate-200/70 p-4 rounded-xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm">🔖</span>
            <span className="text-sm font-medium text-slate-500">Skills</span>
          </div>
          <span className="text-sm font-semibold text-slate-700">Prototyping, system design</span>
        </div>

        {/* Job Description */}
        <div className="bg-white border border-slate-200/70 p-4 rounded-xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm">💼</span>
            <span className="text-sm font-medium text-slate-500">Job Description</span>
          </div>
          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-emerald-600/10">
            Uploaded 
            <span className="text-[10px] ml-0.5">✔</span>
          </div>
        </div>

      </div>

      <button 
        onClick={onGenerate}
        className="w-full bg-[#1d3d6f] text-white py-3.5 rounded-xl mt-6 font-medium text-sm tracking-wide hover:bg-[#152c52] transition-colors shadow-sm cursor-pointer"
      >
        Generate Questions
      </button>

    </div>
  );
}

export default AboutRole;