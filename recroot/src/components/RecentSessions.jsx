import React from 'react';

function RecentSessions({ logs = [], onViewAllClick }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-slate-800">Recent Sessions</h2>
        {logs.length > 0 && (
          <button
            onClick={onViewAllClick}
            className="text-[10px] font-semibold text-[#163C6B] hover:opacity-70 transition"
          >
            View All
          </button>
        )}
      </div>

      {logs.length === 0 ? (
        <div className="flex items-center justify-center h-24">
          <p className="text-[11px] text-slate-400 text-center">No sessions yet. Complete your first interview to see results here.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {logs.slice(0, 4).map((log) => (
            <div key={log.id} className="flex items-center justify-between p-2 bg-slate-50 border border-slate-100 rounded-lg">
              <div>
                <h4 className="text-[11px] font-bold text-slate-700 truncate max-w-[140px]">{log.type}</h4>
                <p className="text-[9px] text-slate-400">{log.date}</p>
              </div>
              <span className={`text-[11px] font-bold font-mono ${
                log.status === 'good' ? 'text-emerald-500' : log.status === 'warning' ? 'text-amber-500' : 'text-rose-500'
              }`}>
                {log.score}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentSessions;