import React, { useState } from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import Stepper from "../../components/Stepper";
import PracticeCard from "../../components/PracticeCard";
import AboutRole from "../../components/AboutRole";
import ProgressCard from "../../components/ProgressCard";
import RecentSessions from "../../components/RecentSessions";
import RecommendedCard from "../../components/RecommendedCard";

const RECOMMENDED_MODULES = [
  { title: 'Laravel Basics', difficulty: 'Hard', color: 'text-red-600' },
  { title: 'Prototyping Basics', difficulty: 'Medium', color: 'text-yellow-600' },
  { title: 'Design Basics', difficulty: 'Easy', color: 'text-green-600' },
  { title: 'Prototyping', difficulty: 'Medium', color: 'text-yellow-600' },
  { title: 'System Design', difficulty: 'Easy', color: 'text-green-600' },
];

const PRACTICE_TYPES = [
  { id: 'AI Interview', desc: 'Simulate a real interview with AI' },
  { id: 'Technical', desc: 'Design, coding & technical Q&A' },
  { id: 'Behavioural', desc: 'Practice soft skill questions' },
];

const TABS = ['Practice', 'Progress', 'My Sessions'];

function InterviewPrep() {
  const [activeTab, setActiveTab] = useState('practice');
  const [selectedPractice, setSelectedPractice] = useState('AI Interview');
  
  // 1 = Show Setup, 2 = Show the AI Generated Questions list
  const [currentStep, setCurrentStep] = useState(1); 

  // Initial mockup question states matching your text spec
  const [questions, setQuestions] = useState([
    "Why are you interested in this role",
    "Why are you interested in this role",
    "Why are you interested in this role",
    "Why are you interested in this role",
    "Why are you interested in this role",
  ]);

  const getTabKey = (tab) => tab.toLowerCase().replace(' ', '');

  const handleAddQuestion = () => {
    if (questions.length < 20) {
      setQuestions([...questions, "Why are you interested in this role"]);
    }
  };

  return (
    <DashboardLayout activePage="interview-prep">
      <main className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
        
        {/* Navigation / Back Button Header */}
        <button 
          onClick={() => setCurrentStep(1)}
          className="mb-4 text-sm text-gray-500 hover:text-black transition-colors flex items-center gap-1 cursor-pointer"
        >
          ← Back to Dashboard
        </button>
        
       
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          {currentStep === 1 ? 'AI Interview Prep' : 'AI Generated Questions'}
        </h1>
        <p className="text-gray-500 mt-1">Practice and ace your interviews</p>
        
        {/* Stepper tracking step 1 or step 2 */}
        <div className="mt-6">
          <Stepper currentStep={currentStep} />
        </div>

        {currentStep === 2 && activeTab === 'practice' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 animate-fade-in">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                
                
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-slate-900">AI Generated Interview Questions</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Optional - up to 5 questions shown to candidates</p>
                  <p className="text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded-lg p-3 mt-3 leading-relaxed">
                    These questions appear to candidates when they apply. Keep them focused and role-specific.
                  </p>
                </div>

            
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

                {/* Footer Utility Management Bar */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {questions.length}/20
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

            {/* Right Sidebar Publishing Block */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-bold text-slate-800 mb-2">Publish Settings</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">Once you are satisfied with your dynamic evaluation structure, click publish to go live.</p>
                <button 
                  onClick={() => setCurrentStep(1)}
                  className="w-full bg-[#1d3d6f] text-white py-2.5 rounded-xl font-medium text-xs tracking-wide hover:bg-[#152c52] transition cursor-pointer"
                >
                  Save & Publish Stack
                </button>
              </div>
            </div>

          </div>
        )}

       
        {currentStep === 1 && activeTab === 'practice' && (
          <>
            <div className="border-b mt-8">
              <div className="flex gap-8 font-semibold text-sm md:text-base">
                {TABS.map((tab) => {
                  const key = getTabKey(tab);
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(key)}
                      className={`pb-3 border-b-2 transition-colors ${
                        activeTab === key ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-4">Choose Practice Type</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {PRACTICE_TYPES.map((type) => (
                      <PracticeCard
                        key={type.id}
                        title={type.id}
                        description={type.desc}
                        isSelected={selectedPractice === type.id}
                        onClick={() => setSelectedPractice(type.id)}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm">
                  <AboutRole onGenerate={() => setCurrentStep(2)} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended for You</h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {RECOMMENDED_MODULES.map((mod) => (
                      <div key={mod.title} className="min-h-[140px] flex"> 
                        <RecommendedCard 
                          title={mod.title} 
                          difficulty={mod.difficulty} 
                          color={mod.color} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <ProgressCard />
                <RecentSessions />
              </div>
            </div>
          </>
        )}
        
      </main>
    </DashboardLayout>
  );
}

export default InterviewPrep;