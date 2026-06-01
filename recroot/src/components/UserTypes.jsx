import React from 'react'
import Checklist from '../assets/checklist.png'
import candidates from '../assets/for-candidates.png'
import recruiters from '../assets/for-recruiters.png'
import arrow from '../assets/arrow-up.png'

function UserTypes() {
  return (
    <section className="bg-white py-20 px-10">
      <div className="flex gap-8 max-w-6xl mx-auto">

        
        <div className="bg-secondary rounded-2xl p-10 flex-1 relative overflow-hidden">
          
          <img 
            src={candidates} 
            alt="Decorative stars" 
            className="absolute right-6 top-10 w-24 h-auto pointer-events-none" 
          />
          
          <h2 className="text-accent text-2xl font-bold mb-2">For Candidates</h2>
          <p className="text-body text-sm mb-6 max-w-xs">Find jobs that match your skills and career goals</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain" />
              AI-powered job matches
            </li>
            <li className="flex items-center gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain" />
              Interview preparation tools
            </li>
            <li className="flex items-center gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain" />
              CV reviews and optimization
            </li>
            <li className="flex items-center gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain" />
              Track application in real-time
            </li>
          </ul>
          
          <button className="bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition duration-300 cursor-pointer flex items-center gap-2">
            Join as Candidate 
            <img src={arrow} alt="Arrow diagonal" className="w-4 h-4 object-contain" />
          </button>
        </div>

        
        <div className="bg-blue-50 rounded-2xl p-10 flex-1 relative overflow-hidden">
          
          <img 
            src={recruiters} 
            alt="Decorative stars" 
            className="absolute right-6 top-10 w-24 h-auto pointer-events-none" 
          />
          
          <h2 className="text-primary text-2xl font-bold mb-2">For Recruiters</h2>
          <p className="text-body text-sm mb-6 max-w-[320px]">Find interviews that match your skills and career goals</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain" />
              Automated resume analysis and ranking
            </li>
            <li className="flex items-center gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain" />
              Skill gap and qualification insights
            </li>
            <li className="flex items-center gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain" />
              Shortlist top talent instantly
            </li>
            <li className="flex items-center gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain" />
              Real-time recruitment analytics and reports
            </li>
          </ul>
          
          <button className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition duration-300 cursor-pointer flex items-center gap-2">
            Join as Recruiter 
            <img src={arrow} alt="Arrow diagonal" className="w-4 h-4 object-contain" />
          </button>
        </div>

      </div>
    </section>
  )
}

export default UserTypes