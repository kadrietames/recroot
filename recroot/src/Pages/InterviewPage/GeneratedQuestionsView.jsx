import React, { useState } from 'react';

function GeneratedQuestionsView() {
  const [questions, setQuestions] = useState([
    "Why are you interested in this role",
    "Why are you interested in this role",
    "Why are you interested in this role",
    "Why are you interested in this role",
    "Why are you interested in this role",
  ]);

  const handleAddQuestion = () => {
    if (questions.length < 20) {
      setQuestions([...questions, "Why are you interested in this role"]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 animate-fade-in">
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
          
          {/* Internal Component Header */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900">AI Generated Interview Questions</h2>
            <p className="text-xs text-slate-400 mt-0.5">Optional - up to 5 questions shown to candidates</p>
            <p className="text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded-lg p-3 mt-3 leading-relaxed">
              These questions appear to candidates when they apply. Keep them focused and role-specific.
            </p>
          </div>

          {/* Interactive Question */}
          <div className="space-y-3.5">
            {questions.map((question, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all shadow-xs group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-bold text-xs text-[#1d3d6f] bg-[#edf2f7] w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-700 truncate pr-4">
                    {question}
                  </p>
                </div>
                
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-xs text-slate-400 hover:text-[#1d3d6f] px-2 py-1 transition">Edit</button>
                  <button className="text-xs text-red-400 hover:text-red-600 px-2 py-1 transition">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              {questions.length}/20 Questions
            </span>
            
            <button 
              onClick={handleAddQuestion}
              className="text-xs font-bold text-[#1d3d6f] hover:text-[#152c52] flex items-center gap-1.5 transition border border-dashed border-slate-300 hover:border-[#1d3d6f] px-4 py-2 rounded-xl bg-slate-50/50 cursor-pointer"
            >
              + Add a Question (1/5)
            </button>
          </div>

        </div>
      </div>

      {/* Maintain spacing parity with layout guidelines */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
          <h3 className="text-sm font-bold text-slate-800 mb-2">Publish Settings</h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">Once you are satisfied with your dynamic evaluation structure, click publish to go live.</p>
          <button className="w-full bg-[#1d3d6f] text-white py-2.5 rounded-xl font-medium text-xs tracking-wide hover:bg-[#152c52] transition">
            Save & Publish Stack
          </button>
        </div>
      </div>

    </div>
  );
}

export default GeneratedQuestionsView;