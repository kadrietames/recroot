import React from 'react';

function RecommendedCard({ title, difficulty, color }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 shadow-xs">
      <h3 className="font-semibold text-xs text-slate-800 mb-0.5">{title}</h3>
      <p className="text-slate-400 text-[10px] mb-1">10 questions</p>
      <span className={`text-[10px] font-semibold ${color}`}>{difficulty}</span>
    </div>
  );
}

export default RecommendedCard;