import { useState } from "react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "⊞" },
  { id: "jobs", label: "Jobs", icon: "💼" },
  { id: "candidates", label: "Candidates", icon: "👥" },
  { id: "interviews", label: "Interviews", icon: "🗓" },
  { id: "reports", label: "Reports", icon: "📋" },
];

const JOB_LISTINGS = [
  { role: "Product Manager", applicants: 34, status: "Active", statusColor: "text-green-500" },
  { role: "Frontend Developer", applicants: 28, status: "Active", statusColor: "text-green-500" },
  { role: "Data Analyst", applicants: 19, status: "Active", statusColor: "text-green-500" },
  { role: "UX Designer", applicants: 24, status: "Closing", statusColor: "text-amber-500" },
  { role: "Marketing Lead", applicants: 19, status: "Paused", statusColor: "text-red-500" },
];

const RECENT_APPS = [
  { name: "Ada Okafor", role: "Product manager", score: 92 },
  { name: "Tunde Bakare", role: "Frontend Dev", score: 85 },
  { name: "Ngozi Eze", role: "Data Analyst", score: 64 },
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
      style={{
        width: size,
        height: size,
        background: bg,
        color: text,
        fontSize: size * 0.35,
      }}
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

// ── Reusable Settings List Item ──────────────────────────────────────────────
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

// ── Settings View ────────────────────────────────────────────────────────────
function SettingsView({ onNavigate }) {
  const options = ["Account Settings", "Privacy", "Notification Preferences", "Change Password", "Language", "Help & Support", "About Us"];
  
  return (
    <div className="flex-1 flex flex-col items-center py-10 px-5">
      <div className="w-full max-w-[420px] flex flex-col">
        
        {/* Settings Illustration */}
        <div className="flex justify-center mb-8">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="50" fill="#f0f5fa"/>
            <circle cx="70" cy="70" r="36" fill="#e0effd"/>
            <path d="M85.7 78.4L94.6 74.3V65.7L85.7 61.6C84.8 58.1 83.3 54.8 81.1 52L85.2 43.1L79.1 37L70.2 41.1C67.4 38.9 64.1 37.4 60.6 36.5L56.5 27.6H47.9L43.8 36.5C40.3 37.4 37 38.9 34.2 41.1L25.3 37L19.2 43.1L23.3 52C21.1 54.8 19.6 58.1 18.7 61.6L9.8 65.7V74.3L18.7 78.4C19.6 81.9 21.1 85.2 23.3 88L19.2 96.9L25.3 103L34.2 98.9C37 101.1 40.3 102.6 43.8 103.5L47.9 112.4H56.5L60.6 103.5C64.1 102.6 67.4 101.1 70.2 98.9L79.1 103L85.2 96.9L81.1 88C83.3 85.2 84.8 81.9 85.7 78.4Z" fill="#3b82f6"/>
            <rect x="62" y="60" width="46" height="34" rx="6" fill="#ffffff" stroke="#e0effd" strokeWidth="2"/>
            <line x1="68" y1="71" x2="102" y2="71" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="78" cy="71" r="3" fill="#3b82f6"/>
            <line x1="68" y1="83" x2="102" y2="83" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="92" cy="83" r="3" fill="#3b82f6"/>
            <path d="M30 30 L34 26 L38 30 L34 34 Z" fill="#3b82f6" opacity="0.5"/>
            <path d="M105 45 L108 42 L111 45 L108 48 Z" fill="#3b82f6" opacity="0.5"/>
            <path d="M100 100 L103 97 L106 100 L103 103 Z" fill="#3b82f6" opacity="0.5"/>
          </svg>
        </div>

        {/* Options */}
        <div className="flex flex-col">
          {options.map(opt => (
            <SettingsListItem 
              key={opt} 
              label={opt} 
              onClick={() => {
                if (opt === "Help & Support") onNavigate("help");
              }} 
            />
          ))}
        </div>

        {/* Log Out Button */}
        <button 
          onClick={() => alert("Logging out...")}
          className="mt-6 w-full p-4 bg-red-50 hover:bg-red-100 border-none rounded-[10px] cursor-pointer flex justify-center items-center gap-2 text-red-500 text-base font-semibold transition-colors duration-150"
        >
          <span className="text-lg">↪</span> Log Out
        </button>
      </div>
    </div>
  );
}

// ── Help & Support View ──────────────────────────────────────────────────────
function HelpSupportView({ onNavigate }) {
  const options = ["FAQs", "Contact Support", "Report an issue", "Privacy policy", "Terms & Conditions"];
  
  return (
    <div className="flex-1 flex flex-col items-center py-10 px-5">
      <div className="w-full max-w-[420px] flex flex-col">
        
        {/* Back Button */}
        <button 
          onClick={() => onNavigate("settings")}
          className="bg-none border-none cursor-pointer text-2xl text-[#1a2332] self-start pb-5"
        >
          ←
        </button>

        {/* Headset Illustration */}
        <div className="flex justify-center mb-4">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="45" fill="#f0f5fa"/>
            <circle cx="60" cy="60" r="28" fill="#e0effd"/>
            <path d="M42 65 C42 45, 78 45, 78 65" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <rect x="38" y="60" width="8" height="16" rx="4" fill="#3b82f6"/>
            <rect x="74" y="60" width="8" height="16" rx="4" fill="#3b82f6"/>
            <path d="M78 72 C78 80, 68 85, 62 82" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <circle cx="60" cy="81" r="3" fill="#3b82f6"/>
            <text x="60" y="66" fontSize="16" fill="#3b82f6" fontWeight="bold" textAnchor="middle">?</text>
            <path d="M25 45 L28 42 L31 45 L28 48 Z" fill="#3b82f6" opacity="0.5"/>
            <path d="M95 55 L98 52 L101 55 L98 58 Z" fill="#3b82f6" opacity="0.5"/>
          </svg>
        </div>

        <h2 className="text-center text-2xl font-bold text-[#1a3a5c] mb-6">
          How can we help you?
        </h2>

        {/* Search */}
        <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input 
            type="text" 
            placeholder="Search for help" 
            className="w-full py-3.5 pl-11 pr-4 bg-white border border-[#e8edf2] rounded-xl text-sm text-[#1a2332] outline-none box-border focus:border-blue-400 transition-colors"
          />
        </div>

        {/* Options */}
        <div className="flex flex-col flex-1 mb-10">
          {options.map(opt => (
            <SettingsListItem key={opt} label={opt} onClick={() => {}} />
          ))}
        </div>

        {/* Main CTA */}
        <button className="w-full p-4 bg-[#1a3a5c] hover:bg-[#11273f] text-white border-none rounded-[10px] cursor-pointer text-base font-semibold text-center transition-colors duration-150">
          Contact Support
        </button>
      </div>
    </div>
  );
}

// ── Empty state ──────────────────────────────────────────────────────────────
function EmptyDashboard({ onPostJob }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-10 px-5">
      <div className="bg-white rounded-2xl p-[60px_40px] flex flex-col items-center max-w-[520px] w-full shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#e8edf2]">
        
        {/* Illustration */}
        <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
          <rect x="110" y="100" width="60" height="45" rx="3" fill="#f5e6d0" stroke="#d4a96a" strokeWidth="1.5"/>
          <path d="M110 110 L140 118 L170 110" stroke="#d4a96a" strokeWidth="1.5" fill="none"/>
          <path d="M140 118 L140 145" stroke="#d4a96a" strokeWidth="1.5"/>
          <line x1="172" y1="108" x2="182" y2="100" stroke="#d4a96a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="175" y1="115" x2="186" y2="115" stroke="#d4a96a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="172" y1="122" x2="182" y2="130" stroke="#d4a96a" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="55" y="95" width="48" height="5" rx="2" fill="#9dc896"/>
          <line x1="58" y1="100" x2="55" y2="140" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="100" y1="100" x2="103" y2="140" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="55" y1="130" x2="103" y2="130" stroke="#888" strokeWidth="2"/>
          <ellipse cx="82" cy="67" rx="16" ry="20" fill="#a0816b"/>
          <circle cx="82" cy="45" r="14" fill="#c49a7a"/>
          <circle cx="102" cy="22" r="12" fill="#e8edf5" stroke="#c5cedb" strokeWidth="1"/>
          <circle cx="95" cy="33" r="5" fill="#e8edf5" stroke="#c5cedb" strokeWidth="1"/>
          <circle cx="90" cy="39" r="3" fill="#e8edf5" stroke="#c5cedb" strokeWidth="1"/>
          <text x="102" y="27" textAnchor="middle" fontSize="14" fill="#8899b0" fontWeight="bold">?</text>
          <path d="M82 75 Q65 85 70 100" stroke="#c49a7a" strokeWidth="7" strokeLinecap="round" fill="none"/>
          <circle cx="70" cy="60" r="8" fill="#c49a7a"/>
        </svg>

        <p className="font-bold text-dfdf text-lg text-[#1a2332] mb-2 text-center">
          You haven't posted any jobs yet
        </p>
        <p className="text-sm text-[#6b7a90] mb-7 text-center fill-current leading-relaxed">
          Post your first role and let <span className="text-[#1a3a5c] font-bold">RECROOT</span> find your best candidates.
        </p>
        <button onClick={onPostJob} className="bg-[#1a3a5c] hover:bg-[#11273f] text-white border-none rounded-8 p-[12px_28px] text-sm font-semibold cursor-pointer tracking-wide transition-colors duration-150">
          Post your first Job
        </button>
      </div>
    </div>
  );
}

// ── Populated dashboard ──────────────────────────────────────────────────────
function PopulatedDashboard() {
  return (
    <div className="px-8 pb-8 flex flex-col gap-6">
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: "💼", label: "Active Jobs", value: 5, sub: "2 closing this week", subColor: "text-amber-500", bg: "bg-blue-50" },
          { icon: "👥", label: "Total Applicants", value: 124, sub: "+18 Since Yesterday", subColor: "text-green-500", bg: "bg-green-50" },
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
        {/* Left column */}
        <div className="flex flex-col gap-5">
          {/* Active Job Listings */}
          <div className="bg-white border border-[#e8edf2] rounded-xl p-5 px-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="m-0 text-base font-bold text-[#1a2332]">Active Job Listings</h3>
              <a href="#" className="text-sm color-[#1a3a5c] font-semibold no-underline flex items-center gap-1 hover:underline">
                See all Jobs →
              </a>
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
                {JOB_LISTINGS.map(({ role, applicants, status, statusColor }) => (
                  <tr key={role}>
                    <td className="py-3 text-sm text-[#3a4a5c]">{role}</td>
                    <td className="py-3 text-sm text-[#3a4a5c]">{applicants}</td>
                    <td className="py-3">
                      <span className={`${statusColor} text-sm font-semibold`}>{status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Applications */}
          <div className="bg-white border border-[#e8edf2] rounded-xl p-5 px-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="m-0 text-base font-bold text-[#1a2332]">Recent Applications</h3>
              <a href="#" className="text-sm text-[#1a3a5c] font-semibold no-underline hover:underline">
                View all Applicants →
              </a>
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
                {RECENT_APPS.map(({ name, role, score }) => (
                  <tr key={name}>
                    <td className="py-3 text-sm text-[#3a4a5c]">{name}</td>
                    <td className="py-3 text-sm text-[#3a4a5c]">{role}</td>
                    <td className="py-3">
                      <span className={`${getScoreColorClass(score)} text-sm font-bold`}>{score}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shortlisted sidebar */}
        <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="m-0 text-xs font-extrabold text-[#1a2332] tracking-wider uppercase">Shortlisted</h3>
            <a href="#" className="text-sm text-[#1a3a5c] font-semibold no-underline hover:underline">View all →</a>
          </div>
          <div className="flex flex-col gap-4">
            {SHORTLISTED.map(({ name, role, score }, i) => (
              <div key={name} className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <Avatar name={name} size={32} index={i} />
                  <div>
                    <p className="m-0 text-sm font-semibold text-[#1a2332]">{name}</p>
                    <p className="m-0 text-xs text-[#6b7a90]">
                      {role} · <span className={`${getScoreColorClass(score)} font-semibold`}>{score}%</span>
                    </p>
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

// ── Root App ─────────────────────────────────────────────────────────────────
export default function RecrootDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [hasJobs, setHasJobs] = useState(false);

  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="flex h-screen font-sans bg-[#eef2f7] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[148px] bg-white border-r border-dashed border-[#c5d1e0] flex flex-col pb-5 shrink-0">
        {/* Logo */}
        <div className="p-[22px_16px_28px] flex items-center gap-2">
          <div className="w-7 h-5 bg-[#1a3a5c] rounded-t-md rounded-b-[10px] flex items-center justify-center">
            <span className="color-white text-[10px] font-extrabold text-white">~~</span>
          </div>
          <span className="font-bold text-base text-[#1a2332] tracking-tight">Recroot</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col gap-0.5 px-2">
          {NAV_ITEMS.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveNav(id)}
              className={`flex items-center gap-2.5 p-[10px_12px] rounded-lg border-none cursor-pointer text-sm text-left w-full transition-all duration-150 ${
                activeNav === id 
                  ? "bg-[#1a3a5c] text-white font-semibold" 
                  : "bg-transparent text-[#6b7a90] font-normal hover:bg-slate-50"
              }`}
            >
              <span className="text-base leading-none">{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        {/* Bottom nav */}
        <div className="px-2 flex flex-col gap-0.5">
          {[{ id: "settings", label: "Settings", icon: "⚙️" }, { id: "logout", label: "Log out", icon: "↪" }].map(({ id, label, icon }) => (
            <button 
              key={id} 
              onClick={() => id === "settings" ? setActiveNav("settings") : alert("Logged out!")}
              className={`flex items-center gap-2.5 p-[10px_12px] rounded-lg border-none cursor-pointer text-sm text-left w-full transition-all duration-150 ${
                activeNav === "settings" && id === "settings"
                  ? "bg-slate-100 text-[#1a2332] font-semibold"
                  : "bg-transparent text-[#6b7a90] font-normal hover:bg-slate-50"
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
        {/* Topbar */}
        <header className="bg-white border-b border-[#e8edf2] px-8 h-14 flex items-center justify-between shrink-0">
          <div />
          <div className="flex items-center gap-4">
            <span className="text-lg cursor-pointer text-[#6b7a90]">?</span>
            <div className="relative">
              <span className="text-lg cursor-pointer">🔔</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-3.5 h-3.5 text-[9px] flex items-center justify-center font-bold">
                1
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700 border-2 border-blue-300">
                AB
              </div>
              <div>
                <p className="m-0 text-sm font-semibold text-[#1a2332]">Angela Basset</p>
                <p className="m-0 text-[11px] text-[#6b7a90]">Recruiter</p>
              </div>
              <span className="text-[#6b7a90] text-xs">▾</span>
            </div>
          </div>
        </header>

        {/* Content routing based on activeNav */}
        {activeNav === "settings" ? (
          <SettingsView onNavigate={setActiveNav} />
        ) : activeNav === "help" ? (
          <HelpSupportView onNavigate={setActiveNav} />
        ) : (
          <div className="flex-1 flex flex-col">
            {/* Page header */}
            <div className="p-[28px_32px_20px] flex justify-between items-start">
              <div>
                <h1 className="m-0 mb-1 text-2xl font-bold text-[#1a2332]">
                  {hasJobs ? `${greeting}, Angela` : "Welcome, Angela"} 👋
                </h1>
                <p className="m-0 text-sm text-[#6b7a90]">
                  {hasJobs ? "Here's what's happening with your hiring today" : "Ready to assist you with your hiring"}
                </p>
              </div>
              {hasJobs && (
                <button className="bg-[#1a3a5c] hover:bg-[#11273f] text-white border-none rounded-lg p-[11px_20px] text-sm font-semibold cursor-pointer flex items-center gap-1.5 transition-colors duration-150">
                  + Post a Job
                </button>
              )}
            </div>

            {/* Body */}
            {hasJobs ? (
              <PopulatedDashboard />
            ) : (
              <EmptyDashboard onPostJob={() => setHasJobs(true)} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}