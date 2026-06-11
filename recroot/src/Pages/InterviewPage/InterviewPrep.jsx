import React, { useState, useEffect } from 'react'; 
import Stepper from '../../components/Stepper';
import DashboardLayout from '../../components/DashboardLayout'; 
import AboutRole from '../../components/AboutRole';
import ProgressCard from '../../components/ProgressCard';
import RecentSessions from '../../components/RecentSessions';
import RecommendedCard from '../../components/RecommendedCard';
import { getMyResumes, generateInterview, getInterviews } from '../../api/recroot';

function InterviewPrep() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPractice, setSelectedPractice] = useState('AI Interview');
  const [generationLoading, setGenerationLoading] = useState(false);
  const [showHistoryDrawer, setShowHistoryDrawer] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeResumeId, setActiveResumeId] = useState(null);
  const [hasUploadedResume, setHasUploadedResume] = useState(true);
  
  const [roleDetails, setRoleDetails] = useState({
    title: '',
    experience: '',
    skills: '',
    status: 'Checking Profile...'
  });

  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [historicalLogs, setHistoricalLogs] = useState([]);

  useEffect(() => {
    async function fetchDashboardMetadata() {
      try {
        const resumeData = await getMyResumes();
        if (resumeData && resumeData.length > 0) {
          const currentResume = resumeData[0];
          setActiveResumeId(currentResume.id || currentResume._id);
          setHasUploadedResume(true);
          setRoleDetails({
            title: currentResume.inferredRole || 'Senior Product Designer',
            experience: currentResume.experienceLength || '2+ years',
            skills: currentResume.skills?.join(', ') || 'Prototyping, system design',
            status: 'Uploaded'
          });
        } else {
          setHasUploadedResume(false);
          setRoleDetails(prev => ({ ...prev, status: 'No Resume Active' }));
        }

        const interviewData = await getInterviews();
        if (Array.isArray(interviewData)) {
          const formattedLogs = interviewData.map((log, index) => ({
            id: log.id || log._id || index,
            type: log.jobRole || 'AI Interview',
            date: log.createdAt ? new Date(log.createdAt).toLocaleDateString('en-US', {
              month: 'short', day: 'numeric', year: 'numeric'
            }) : 'Recent Run',
            score: log.score || 0,
            status: log.score >= 80 ? 'good' : log.score >= 60 ? 'warning' : 'bad'
          }));
          setHistoricalLogs(formattedLogs);
        }
      } catch (err) {
        console.error('Error communicating with API services:', err);
        setErrorMessage('Failed to pull operational credentials from server logs.');
      }
    }
    fetchDashboardMetadata();
  }, []);

  // Derived stats from real data
  const totalQuestions = historicalLogs.length > 0
    ? historicalLogs.length * (generatedQuestions.length || 4)
    : 20
  const goodAnswers = historicalLogs.length > 0
    ? historicalLogs.filter(l => l.status === 'good').length * 4
    : 17
  const needsImprovement = historicalLogs.length > 0
    ? historicalLogs.filter(l => l.status === 'bad').length * 2
    : 3
  const overallScore = historicalLogs.length > 0
    ? Math.round(historicalLogs.reduce((acc, cur) => acc + cur.score, 0) / historicalLogs.length)
    : 85

  const weeklyProgress = historicalLogs.length > 0
    ? historicalLogs.slice(-4).map((log, i, arr) => ({
        label: i === arr.length - 1 ? 'This Week' : `Week ${i + 1}`,
        value: log.score,
        height: Math.round((log.score / 100) * 160),
        isLatest: i === arr.length - 1
      }))
    : [
        { label: 'Week 1', value: 25, height: 40, isLatest: false },
        { label: 'Week 2', value: 40, height: 56, isLatest: false },
        { label: 'Week 3', value: 54, height: 80, isLatest: false },
        { label: 'This Week', value: 75, height: 112, isLatest: true },
      ]

  const handleInitializeGeneration = async (targetRoleTitle, jobDescriptionText) => {
    if (!hasUploadedResume) {
      setErrorMessage('Please upload a resume on the profile screen before initializing calculations.');
      return;
    }
    setGenerationLoading(true);
    setErrorMessage('');
    try {
      const response = await generateInterview(
        activeResumeId,
        jobDescriptionText || `${roleDetails.skills}. Role target context: ${targetRoleTitle || roleDetails.title}`,
        targetRoleTitle || roleDetails.title
      );
      if (response && response.questions) {
        setGeneratedQuestions(response.questions.map((q, idx) => ({
          id: Date.now() + idx,
          prompt: typeof q === 'string' ? q : q.prompt
        })));
      } else {
        setGeneratedQuestions([
          { id: 1, prompt: `Why are you interested in a ${targetRoleTitle || roleDetails.title} position?` },
          { id: 2, prompt: `Describe your hands-on proficiency executing work tasks utilizing: ${roleDetails.skills}.` },
          { id: 3, prompt: 'Can you detail an execution friction conflict handled with cross-functional team profiles?' }
        ]);
      }
      setActiveStep(2);
    } catch (err) {
      console.error('Generation request failure:', err);
      setErrorMessage('Server timed out processing data attributes. Please try again.');
    } finally {
      setGenerationLoading(false);
    }
  };

  const completePracticeSession = () => setActiveStep(3);

  return (
    <DashboardLayout activePage="interview-prep">
      <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8 font-sans space-y-6 relative">
        
        {/* Header */}
        <div className="flex flex-col gap-0.5">
          <button
            onClick={() => setActiveStep(1)}
            className="text-[11px] font-bold text-slate-400 hover:text-slate-700 self-start flex items-center gap-1 transition"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 mt-1">
            {activeStep === 1 && 'AI Interview Prep'}
            {activeStep === 2 && 'AI Generated Questions'}
            {activeStep === 3 && 'Track Your Progress'}
          </h1>

          {!hasUploadedResume && (
            <div className="mt-2 p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs font-semibold text-rose-600">
              ⚠️ No active parsed profile metrics discovered. Please upload a profile resume document to initialize AI evaluations.
            </div>
          )}
          {errorMessage && (
            <div className="mt-2 p-3 bg-amber-50 border border-amber-100 rounded-xl text-xs font-semibold text-amber-700">
              ❌ {errorMessage}
            </div>
          )}

          <p className="text-[11px] text-slate-400 font-medium mt-1">
            {activeStep === 1 && 'Practice and ace your interviews'}
            {activeStep === 2 && 'Review, modify, or add tailored assessment parameters before launching your interview.'}
            {activeStep === 3 && 'Monitor your performance'}
          </p>
        </div>

        {/* Stepper */}
        <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-2xs">
          <Stepper currentStep={activeStep} />
        </div>

        {/* STEP 1 */}
        {activeStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-xl border border-slate-200/70 p-5 shadow-2xs">
                <h3 className="text-[11px] font-bold text-slate-800 mb-3 uppercase tracking-wider">
                  Choose practice Type
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'AI Interview', emoji: '🤖', label: 'AI Interview', desc: 'Simulate a real interview with AI', color: 'text-blue-600' },
                    { id: 'Technical Assessment', emoji: '📅', label: 'Technical', desc: 'Design, coding & technical Q&A', color: 'text-rose-500' },
                    { id: 'Behavioral Matrix', emoji: '📋', label: 'Behavioural', desc: 'Practice soft skills questions', color: 'text-amber-500' },
                  ].map((practice) => (
                    <div
                      key={practice.id}
                      onClick={() => setSelectedPractice(practice.id)}
                      className={`cursor-pointer rounded-xl p-4 border text-center relative flex flex-col items-center justify-between min-h-[140px] transition-all duration-300 select-none
                        ${selectedPractice === practice.id
                          ? 'border-blue-600 bg-blue-50/10 -translate-y-0.5 shadow-xs'
                          : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300'
                        }`}
                    >
                      <div className={`text-xl ${practice.color} mt-1`}>{practice.emoji}</div>
                      <div className="my-2">
                        <h4 className="text-xs font-bold text-slate-800">{practice.label}</h4>
                        <p className="text-[10px] text-slate-400 leading-tight max-w-[110px] mx-auto mt-1">{practice.desc}</p>
                      </div>
                      <div className="mb-1">
                        {selectedPractice === practice.id ? (
                          <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[9px] text-white font-bold">✓</div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-300 bg-white" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <AboutRole
                onGenerate={(title, desc) => handleInitializeGeneration(title, desc)}
                loading={generationLoading}
                initialData={roleDetails}
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <ProgressCard logs={historicalLogs} />
              <RecentSessions onViewAllClick={() => setShowHistoryDrawer(true)} />
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {activeStep === 2 && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 max-w-3xl mx-auto shadow-2xs space-y-5">
            <div>
              <h2 className="text-sm font-bold text-slate-800">AI Generated Interview Questions</h2>
              <p className="text-[11px] text-slate-400 mt-0.5">Review up to 5 customized prompts designed for your specific target role profile.</p>
            </div>

            <div className="space-y-3">
              {generatedQuestions.map((q, idx) => (
                <div key={q.id} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-lg p-3">
                  <span className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-400 shrink-0">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={q.prompt}
                    onChange={(e) => {
                      const updated = [...generatedQuestions];
                      updated[idx].prompt = e.target.value;
                      setGeneratedQuestions(updated);
                    }}
                    className="w-full bg-transparent text-xs font-semibold text-slate-700 focus:outline-none"
                  />
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={() => setGeneratedQuestions([...generatedQuestions, { id: Date.now(), prompt: 'Custom Interview Question prompt...' }])}
                disabled={generatedQuestions.length >= 5}
                className="px-3 py-1.5 text-[10px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition disabled:opacity-40"
              >
                + Add a Question ({generatedQuestions.length}/5)
              </button>
              <button
                onClick={completePracticeSession}
                className="px-5 py-2 bg-blue-600 text-white font-bold text-[11px] rounded-lg hover:bg-blue-700 transition"
              >
                Launch Mock Run
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {activeStep === 3 && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-100/70 border border-slate-200 rounded-xl p-4 text-center">
                <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Questions Practiced</p>
                <h3 className="text-xl font-black text-slate-700 mt-1">{totalQuestions}</h3>
              </div>
              <div className="bg-[#e8f7f2] border border-[#d1f0e4] rounded-xl p-4 text-center">
                <p className="text-[9px] uppercase font-bold tracking-wider text-[#10b981]">Good Answers</p>
                <h3 className="text-xl font-black text-[#047857] mt-1">{goodAnswers}</h3>
              </div>
              <div className="bg-[#fdf2f2] border border-[#fde2e2] rounded-xl p-4 text-center">
                <p className="text-[9px] uppercase font-bold tracking-wider text-[#ef4444]">Needs Improvement</p>
                <h3 className="text-xl font-black text-[#b91c1c] mt-1">{needsImprovement}</h3>
              </div>
              <div className="bg-[#e8f7f2] border border-[#d1f0e4] rounded-xl p-4 text-center">
                <p className="text-[9px] uppercase font-bold tracking-wider text-[#10b981]">Overall Score</p>
                <h3 className="text-xl font-black text-[#047857] mt-1">{overallScore}%</h3>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
              <h3 className="text-xs font-bold text-slate-800">Progress Over Time</h3>
              <div className="h-40 border-b border-l border-slate-200 relative mt-6 flex items-end justify-between px-6 sm:px-14">
                <div className="absolute left-2 top-0 text-[8px] font-mono text-slate-300">100%</div>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[8px] font-mono text-slate-300">50%</div>
                <div className="absolute left-2 bottom-1 text-[8px] font-mono text-slate-300">0%</div>
                {weeklyProgress.map((week, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 w-12 relative">
                    <span className={`text-[9px] font-bold absolute -top-4 ${week.isLatest ? 'text-emerald-600' : 'text-slate-500'}`}>
                      {week.value}%
                    </span>
                    <div
                      className={`w-2.5 rounded-t-xs ${week.isLatest ? 'bg-emerald-400' : 'bg-slate-100'}`}
                      style={{ height: `${week.height}px` }}
                    />
                    <span className={`text-[9px] mt-1 ${week.isLatest ? 'font-bold text-slate-700' : 'font-medium text-slate-400'}`}>
                      {week.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setActiveStep(1)}
                className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-lg hover:bg-slate-800 transition"
              >
                Return to Setup Dashboard
              </button>
            </div>
          </div>
        )}

        {/* Recommended */}
        <div className="pt-6 border-t border-slate-200">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
            Recommended for You
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <RecommendedCard title="Laravel Basics" difficulty="Hard" color="text-rose-600" />
            <RecommendedCard title="Prototyping Basics" difficulty="Medium" color="text-amber-600" />
            <RecommendedCard title="Design Basics" difficulty="Easy" color="text-emerald-600" />
            <RecommendedCard title="Prototyping" difficulty="Medium" color="text-amber-600" />
            <RecommendedCard title="System Design" difficulty="Easy" color="text-emerald-600" />
          </div>
        </div>

      </div>

      {/* History Drawer */}
      {showHistoryDrawer && (
        <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs flex justify-end z-50">
          <div className="w-full max-w-xs bg-white h-full shadow-xl p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="text-xs font-bold text-slate-800">Recent Sessions Logs</h3>
                <button
                  onClick={() => setShowHistoryDrawer(false)}
                  className="text-slate-400 hover:text-slate-600 text-xs p-1"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-2 overflow-y-auto max-h-[82vh] pr-1">
                {historicalLogs.length === 0 ? (
                  <p className="text-[11px] text-slate-400 text-center py-8">No previous simulations completed yet.</p>
                ) : (
                  historicalLogs.map((log) => (
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
                  ))
                )}
              </div>
            </div>
            <button
              onClick={() => setShowHistoryDrawer(false)}
              className="w-full py-2 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-lg hover:bg-slate-200 transition"
            >
              Close History
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default InterviewPrep;