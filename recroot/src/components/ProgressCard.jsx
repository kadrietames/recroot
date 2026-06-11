import React from 'react';

function ProgressCard({ logs = [] }) {
  const overallScore = logs.length > 0
    ? Math.round(logs.reduce((acc, cur) => acc + cur.score, 0) / logs.length)
    : 0

  const breakdownItems = logs.length > 0
    ? Object.entries(
        logs.reduce((acc, log) => {
          const key = log.type || 'AI Interview'
          if (!acc[key]) acc[key] = { total: 0, count: 0 }
          acc[key].total += log.score
          acc[key].count += 1
          return acc
        }, {})
      ).map(([type, data]) => ({
        label: type,
        score: Math.round(data.total / data.count)
      }))
    : []

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      <h2 className="text-sm font-bold text-slate-800 mb-4">Your Progress</h2>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3" />
            <circle
              cx="18" cy="18" r="15.9"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeDasharray={`${overallScore} 100`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-lg font-black text-slate-700">{overallScore}%</span>
            <span className="text-[9px] text-slate-400 font-medium">Overall</span>
          </div>
        </div>

        {breakdownItems.length > 0 && (
          <div className="flex flex-col gap-1.5 w-full">
            {breakdownItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 truncate max-w-[100px]">{item.label}</span>
                <span className="text-[10px] font-bold text-slate-700">{item.score}/10</span>
              </div>
            ))}
          </div>
        )}

        {breakdownItems.length === 0 && (
          <p className="text-[10px] text-slate-400 text-center sm:text-left">
            Complete a session to see your breakdown
          </p>
        )}
      </div>
    </div>
  );
}

export default ProgressCard;