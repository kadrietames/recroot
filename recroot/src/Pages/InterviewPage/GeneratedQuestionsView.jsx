import React, { useState } from 'react';

function GeneratedQuestionsView() {
  const [questions, setQuestions] = useState([
    "Why are you interested in this role",
    "Why are you interested in this role",
    "Why are you interested in this role",
    "Why are you interested in this role",
    "Why are you interested in this role",
  ]);

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index] = value;
    setQuestions(updated);
  };

  const handleRemoveQuestion = (index) => {
    const updated = questions.filter((_, idx) => idx !== index);
    setQuestions(updated);
  };

  const handleAddQuestion = () => {
    if (questions.length < 20) {
      setQuestions([...questions, "Why are you interested in this role"]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 animate-fade-in font-sans">
      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-2xs">
        
        {/* Internal Component Header Row Tokens */}
        <div className="mb-5">
          <h2 className="text-base font-bold text-slate-800">AI Generated Interview Questions</h2>
          <p className="text-[11px] text-slate-400 mt-0.5">Optional - up to 5 questions shown to candidates</p>
          
          <p className="text-[11px] text-slate-400 font-medium bg-slate-50/50 border border-slate-100 rounded-lg p-3 mt-4 leading-relaxed">
            These questions appear to candidates when they apply. Keep them focused and role - specific.
          </p>
        </div>

        {/* Interactive Bounding Form Grid Field Matrix */}
        <div className="space-y-3">
          {questions.map((question, index) => (
            <div key={index} className="flex items-center gap-3">
              
              {/* Numeric Indicator Index */}
              <span className="w-6 h-9 rounded-md bg-white border border-slate-200 flex items-center justify-center font-bold text-[11px] text-slate-400 shrink-0">
                {index + 1}
              </span>
              
              {/* Text Input Row */}
              <div className="flex-1 relative flex items-center">
                <input 
                  type="text"
                  value={question}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  className="w-full h-9 bg-white border border-slate-200 rounded-lg pl-3 pr-9 text-xs text-slate-400 font-medium focus:outline-hidden focus:border-slate-300 transition"
                />
                
                {/* Right Aligned Standard Clear Close Circle Action Button */}
                <button 
                  onClick={() => handleRemoveQuestion(index)}
                  className="absolute right-2.5 w-4 h-4 rounded-full border border-slate-300 hover:border-slate-400 flex items-center justify-center text-[10px] text-slate-400 hover:text-slate-600 font-medium transition cursor-pointer"
                  title="Remove Question"
                >
                  ✕
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Footnotes Count Vector */}
        <div className="text-right mt-1.5">
          <span className="text-[10px] font-bold text-slate-300">
            {questions.length}/20
          </span>
        </div>

        {/* Block Design Button Action Layout Target */}
        <div className="mt-4 pt-4 border-t border-slate-100/80">
          <button 
            onClick={handleAddQuestion}
            className="w-full h-9 text-[11px] font-bold text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer hover:bg-slate-50/50"
          >
            + Add a Question <span className="text-[10px] font-medium text-slate-300">(1/5)</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default GeneratedQuestionsView;