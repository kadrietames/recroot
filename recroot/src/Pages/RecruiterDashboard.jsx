import { useState, useEffect } from "react";
import { getJobs, createJob, getMyApplications } from "../api/recroot";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "⊞" },
  { id: "jobs", label: "Jobs", icon: "💼" },
  { id: "candidates", label: "Candidates", icon: "👥" },
  { id: "interviews", label: "Interviews", icon: "🗓" },
  { id: "reports", label: "Reports", icon: "📋" },
];

const SHORTLISTED = [
  { name: "Ada Okafor", role: "Product Manager", score: 92 },
  { name: "Chidi Eze", role: "Data Analyst", score: 88 },
  { name: "Bayo Olayinka", role: "Backend developer", score: 90 },
  { name: "Bassey Edet", role: "Graphic Designer", score: 86 },
  { name: "Cindy Lou", role: "Graphic Designer", score: 80 },
];

const avatarColors = [
  { bg: "#dbeafe", text: "#1d4ed8" },
  { bg: "#dcfce7", text: "#15803d" },
  { bg: "#fef3c7", text: "#b45309" },
  { bg: "#fce7f3", text: "#be185d" },
  { bg: "#ede9fe", text: "#7c3aed" },
];

function Avatar({ name, size = 36, index = 0 }) {
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2);
  const { bg, text } = avatarColors[index % avatarColors.length];
  return (
    <div 
      className="rounded-full flex items-center justify-center font-semibold shrink-0 select-none"
      style={{ width: size, height: size, background: bg, color: text, fontSize: size * 0.35 }}
    >
      {initials}
    </div>
  );
}

function getScoreColorClass(score) {
  if (score >= 85) return "text-green-500";
  if (score >= 70) return "text-amber-500";
  return "text-red-500";
}

function SettingsListItem({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full p-4 mb-3 bg-white border border-[#e8edf2] rounded-[10px] cursor-pointer text-sm font-medium text-[#1a2332] transition-shadow duration-150 hover:shadow-[0_2px_6px_rgba(0,0,0,0.04)]"
    >
      <span>{label}</span>
      <span className="text-[#9aa5b4] text-xl leading-none">›</span>
    </button>
  );
}

function SettingsView({ onNavigate }) {
  const options = ["Account Settings", "Privacy", "Notification Preferences", "Change Password", "Language", "Help & Support", "About Us"];
  return (
    <div className="flex-1 flex flex-col items-center py-10 px-5">
      <div className="w-full max-w-[420px] flex flex-col">
        <div className="flex justify-center mb-8">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
            <circle cx="70" cy="70" r="50" fill="#f0f5fa"/>
            <circle cx="70" cy="70" r="36" fill="#e0effd"/>
          </svg>
        </div>
        <div className="flex flex-col">
          {options.map(opt => (
            <SettingsListItem key={opt} label={opt} onClick={() => { if (opt === "Help & Support") onNavigate("help"); }} />
          ))}
        </div>
        <button onClick={() => alert("Logging out...")} className="mt-6 w-full p-4 bg-red-50 hover:bg-red-100 border-none rounded-[10px] cursor-pointer flex justify-center items-center gap-2 text-red-500 text-base font-semibold transition-colors duration-150">
          <span className="text-lg">↪</span> Log Out
        </button>
      </div>
    </div>
  );
}

function HelpSupportView({ onNavigate }) {
  const options = ["FAQs", "Contact Support", "Report an issue", "Privacy policy", "Terms & Conditions"];
  return (
    <div className="flex-1 flex flex-col items-center py-10 px-5">
      <div className="w-full max-w-[420px] flex flex-col">
        <button onClick={() => onNavigate("settings")} className="bg-none border-none cursor-pointer text-2xl text-[#1a2332] self-start pb-5">←</button>
        <div className="flex justify-center mb-4">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="45" fill="#f0f5fa"/>
            <circle cx="60" cy="60" r="28" fill="#e0effd"/>
          </svg>
        </div>
        <h2 className="text-center text-2xl font-bold text-[#1a3a5c] mb-6">How can we help you?</h2>
        <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input type="text" placeholder="Search for help" className="w-full py-3.5 pl-11 pr-4 bg-white border border-[#e8edf2] rounded-xl text-sm text-[#1a2332] outline-none box-border focus:border-blue-400 transition-colors"/>
        </div>
        <div className="flex flex-col flex-1 mb-10">
          {options.map(opt => (<SettingsListItem key={opt} label={opt} onClick={() => {}} />))}
        </div>
        <button className="w-full p-4 bg-[#1a3a5c] hover:bg-[#11273f] text-white border-none rounded-[10px] cursor-pointer text-base font-semibold text-center transition-colors duration-150">Contact Support</button>
      </div>
    </div>
  );
}

function EmptyDashboard({ onPostJob }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-10 px-5">
      <div className="bg-white rounded-2xl p-[60px_40px] flex flex-col items-center max-w-[520px] w-full shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#e8edf2]">
        <p className="font-bold text-lg text-[#1a2332] mb-2 text-center">You haven't posted any jobs yet</p>
        <p className="text-sm text-[#6b7a90] mb-7 text-center leading-relaxed">
          Post your first role and let <span className="text-[#1a3a5c] font-bold">RECROOT</span> find your best candidates.
        </p>
        <button onClick={onPostJob} className="bg-[#1a3a5c] hover:bg-[#11273f] text-white border-none rounded-lg p-[12px_28px] text-sm font-semibold cursor-pointer tracking-wide transition-colors duration-150">
          Post your first Job
        </button>
      </div>
    </div>
  );
}

function PopulatedDashboard({ jobs, applications }) {
  return (
    <div className="px-8 pb-8 flex flex-col gap-6">
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: "💼", label: "Active Jobs", value: jobs.length || 0, sub: "2 closing this week", subColor: "text-amber-500", bg: "bg-blue-50" },
          { icon: "👥", label: "Total Applicants", value: applications.length || 0, sub: "+18 Since Yesterday", subColor: "text-green-500", bg: "bg-green-50" },
          { icon: "⭐", label: "Shortlisted", value: 12, sub: "Across 3 roles", subColor: "text-indigo-500", bg: "bg-purple-50" },
          { icon: "📅", label: "Interviews", value: 4, sub: "Next: Tomorrow 10am", subColor: "text-pink-500", bg: "bg-pink-50" },
        ].map(({ icon, label, value, sub, subColor, bg }) => (
          <div key={label} className="bg-white border border-[#e8edf2] rounded-xl p-[18px_20px] flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <div className={`${bg} rounded-lg p-[6px_8px] text-lg`}>{icon}</div>
              <span className="text-2xl font-bold text-[#1a2332]">{value}</span>
            </div>
            <p className="m-0 text-sm text-[#6b7a90] font-medium">{label}</p>
            <p className={`m-0 text-xs font-medium ${subColor}`}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Main content + sidebar */}
      <div className="grid grid-cols-[1fr_280px] gap-5">
        <div className="flex flex-col gap-5">
          {/* Active Job Listings */}
          <div className="bg-white border border-[#e8edf2] rounded-xl p-5 px-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="m-0 text-base font-bold text-[#1a2332]">Active Job Listings</h3>
              <a href="#" className="text-sm font-semibold no-underline">See all Jobs →</a>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {["ROLE", "APPLICANTS", "STATUS"].map(h => (
                    <th key={h} className="text-left text-[11px] text-[#9aa5b4] font-semibold tracking-wider pb-2.5 border-b border-[#f0f4f8]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jobs.length > 0 ? jobs.map((job, i) => (
                  <tr key={i}>
                    <td className="py-3 text-sm text-[#3a4a5c]">{job.title || job.role || 'N/A'}</td>
                    <td className="py-3 text-sm text-[#3a4a5c]">{job.applicants || 0}</td>
                    <td className="py-3"><span className="text-green-500 text-sm font-semibold">Active</span></td>
                  </tr>
                )) : (
                  <tr><td colSpan={3} className="py-3 text-xs text-slate-400 text-center">No jobs posted yet</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Recent Applications */}
          <div className="bg-white border border-[#e8edf2] rounded-xl p-5 px-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="m-0 text-base font-bold text-[#1a2332]">Recent Applications</h3>
              <a href="#" className="text-sm font-semibold no-underline">View all Applicants →</a>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {["CANDIDATE", "ROLE", "SCORE"].map(h => (
                    <th key={h} className="text-left text-[11px] text-[#9aa5b4] font-semibold tracking-wider pb-2.5 border-b border-[#f0f4f8]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {applications.length > 0 ? applications.map((app, i) => (
                  <tr key={i}>
                    <td className="py-3 text-sm text-[#3a4a5c]">{app.candidateName || app.name || 'N/A'}</td>
                    <td className="py-3 text-sm text-[#3a4a5c]">{app.jobTitle || app.role || 'N/A'}</td>
                    <td className="py-3"><span className={`${getScoreColorClass(app.score || 0)} text-sm font-bold`}>{app.score || 'N/A'}%</span></td>
                  </tr>
                )) : (
                  <tr><td colSpan={3} className="py-3 text-xs text-slate-400 text-center">No applications yet</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shortlisted sidebar */}
        <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="m-0 text-xs font-extrabold text-[#1a2332] tracking-wider uppercase">Shortlisted</h3>
            <a href="#" className="text-sm font-semibold no-underline">View all →</a>
          </div>
          <div className="flex flex-col gap-4">
            {SHORTLISTED.map(({ name, role, score }, i) => (
              <div key={name} className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <Avatar name={name} size={32} index={i} />
                  <div>
                    <p className="m-0 text-sm font-semibold text-[#1a2332]">{name}</p>
                    <p className="m-0 text-xs text-[#6b7a90]">{role} · <span className={`${getScoreColorClass(score)} font-semibold`}>{score}%</span></p>
                  </div>
                </div>
                <button className="w-full p-2 text-xs font-semibold bg-white text-[#1a3a5c] border border-[#c5d1e0] rounded-lg cursor-pointer transition-colors duration-150 hover:bg-slate-50">
                  Schedule Interview
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecrootDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [jobs, setJobs] = useState([])
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const firstName = user?.fullName?.split(' ')[0] || 'Angela'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobsData, appsData] = await Promise.all([
          getJobs(),
          getMyApplications()
        ])
        setJobs(jobsData || [])
        setApplications(appsData || [])
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handlePostJob = async () => {
    try {
      const newJob = await createJob('New Job Position', 'Job description here')
      setJobs([...jobs, newJob])
    } catch (err) {
      console.error('Error posting job:', err)
    }
  }

  const hasJobs = jobs.length > 0

  return (
    <div className="flex h-screen font-sans bg-[#eef2f7] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[148px] bg-white border-r border-dashed border-[#c5d1e0] flex flex-col pb-5 shrink-0">
        <div className="p-[22px_16px_28px] flex items-center gap-2">
          <div className="w-7 h-5 bg-[#1a3a5c] rounded-t-md rounded-b-[10px] flex items-center justify-center">
            <span className="text-[10px] font-extrabold text-white">~~</span>
          </div>
          <span className="font-bold text-base text-[#1a2332] tracking-tight">Recroot</span>
        </div>

        <nav className="flex-1 flex flex-col gap-0.5 px-2">
          {NAV_ITEMS.map(({ id, label, icon }) => (
            <button key={id} onClick={() => setActiveNav(id)}
              className={`flex items-center gap-2.5 p-[10px_12px] rounded-lg border-none cursor-pointer text-sm text-left w-full transition-all duration-150 ${
                activeNav === id ? "bg-[#1a3a5c] text-white font-semibold" : "bg-transparent text-[#6b7a90] font-normal hover:bg-slate-50"
              }`}
            >
              <span className="text-base leading-none">{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        <div className="px-2 flex flex-col gap-0.5">
          {[{ id: "settings", label: "Settings", icon: "⚙️" }, { id: "logout", label: "Log out", icon: "↪" }].map(({ id, label, icon }) => (
            <button key={id} onClick={() => id === "settings" ? setActiveNav("settings") : alert("Logged out!")}
              className={`flex items-center gap-2.5 p-[10px_12px] rounded-lg border-none cursor-pointer text-sm text-left w-full transition-all duration-150 ${
                activeNav === "settings" && id === "settings" ? "bg-slate-100 text-[#1a2332] font-semibold" : "bg-transparent text-[#6b7a90] font-normal hover:bg-slate-50"
              }`}
            >
              <span className="leading-none">{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white border-b border-[#e8edf2] px-8 h-14 flex items-center justify-between shrink-0">
          <div />
          <div className="flex items-center gap-4">
            <span className="text-lg cursor-pointer text-[#6b7a90]">?</span>
            <div className="relative">
              <span className="text-lg cursor-pointer">🔔</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-3.5 h-3.5 text-[9px] flex items-center justify-center font-bold">1</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700 border-2 border-blue-300">
                {firstName[0]}{firstName[1] || ''}
              </div>
              <div>
                <p className="m-0 text-sm font-semibold text-[#1a2332]">{user?.fullName || 'Angela Basset'}</p>
                <p className="m-0 text-[11px] text-[#6b7a90]">Recruiter</p>
              </div>
              <span className="text-[#6b7a90] text-xs">▾</span>
            </div>
          </div>
        </header>

        {activeNav === "settings" ? (
          <SettingsView onNavigate={setActiveNav} />
        ) : activeNav === "help" ? (
          <HelpSupportView onNavigate={setActiveNav} />
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="p-[28px_32px_20px] flex justify-between items-start">
              <div>
                <h1 className="m-0 mb-1 text-2xl font-bold text-[#1a2332]">
                  {hasJobs ? `${greeting}, ${firstName}` : `Welcome, ${firstName}`} 👋
                </h1>
                <p className="m-0 text-sm text-[#6b7a90]">
                  {hasJobs ? "Here's what's happening with your hiring today" : "Ready to assist you with your hiring"}
                </p>
              </div>
              {hasJobs && (
                <button onClick={handlePostJob} className="bg-[#1a3a5c] hover:bg-[#11273f] text-white border-none rounded-lg p-[11px_20px] text-sm font-semibold cursor-pointer flex items-center gap-1.5 transition-colors duration-150">
                  + Post a Job
                </button>
              )}
            </div>

            {loading ? (
              <p className="text-slate-400 text-xs px-8">Loading dashboard...</p>
            ) : hasJobs ? (
              <PopulatedDashboard jobs={jobs} applications={applications} />
            ) : (
              <EmptyDashboard onPostJob={handlePostJob} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}