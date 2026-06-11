import React from 'react';

function AboutRole({ onGenerate, loading, initialData }) {
  return (
    <div className="bg-[#f8fafc] rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
      <h2 className="text-base font-bold text-slate-800 text-center mb-6 tracking-wide">
        About the Role
      </h2>

      <div className="space-y-3">
        {[
          { icon: '👤', label: 'Job Title', value: initialData?.title || 'Senior Product Designer' },
          { icon: '📋', label: 'Experience', value: initialData?.experience || '2+ years' },
          { icon: '🔖', label: 'Skills', value: initialData?.skills || 'Prototyping, system design' },
        ].map((item) => (
          <div key={item.label} className="bg-white border border-slate-200/70 p-3 sm:p-4 rounded-xl flex justify-between items-center gap-2">
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="text-slate-400 text-sm">{item.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-slate-500">{item.label}</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 text-right truncate max-w-[150px] sm:max-w-none">{item.value}</span>
          </div>
        ))}

        <div className="bg-white border border-slate-200/70 p-3 sm:p-4 rounded-xl flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-slate-400 text-sm">💼</span>
            <span className="text-xs sm:text-sm font-medium text-slate-500">Job Description</span>
          </div>
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ring-1 shrink-0 ${
            initialData?.status === 'Uploaded'
              ? 'bg-emerald-50 text-emerald-600 ring-emerald-600/10'
              : 'bg-slate-50 text-slate-400 ring-slate-200'
          }`}>
            {initialData?.status || 'Checking...'}
            {initialData?.status === 'Uploaded' && <span className="text-[10px] ml-0.5">✔</span>}
          </div>
        </div>
      </div>

      <button
        onClick={onGenerate}
        disabled={loading}
        className={`w-full py-3 sm:py-3.5 rounded-xl mt-6 font-medium text-sm tracking-wide transition-colors shadow-sm cursor-pointer ${
          loading
            ? 'bg-[#1d3d6f]/60 cursor-not-allowed text-white'
            : 'bg-[#1d3d6f] text-white hover:bg-[#152c52]'
        }`}
      >
        {loading ? 'Generating...' : 'Generate Questions'}
      </button>
    </div>
  );
}

export default AboutRole;