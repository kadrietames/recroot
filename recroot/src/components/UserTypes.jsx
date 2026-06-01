import React from 'react'
import Checklist from '../assets/checklist.png'
import candidates from '../assets/for-candidates.png'
import recruiters from '../assets/for-recruiters.png'
import arrow from '../assets/arrow-up.png'

function UserTypes() {
  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-10">
     
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

        
        <div className="bg-secondary rounded-2xl p-6 md:p-10 flex-1 relative overflow-hidden">
          
          
          <img 
            src={candidates} 
            alt="Decorative stars" 
            className="absolute right-4 top-4 md:right-6 md:top-10 w-16 md:w-24 h-auto pointer-events-none opacity-80 md:opacity-100" 
          />
          
          <h2 className="text-accent text-2xl font-bold mb-2">For Candidates</h2>
          <p className="text-body text-sm mb-6 max-w-xs pr-12 md:pr-0">Find jobs that match your skills and career goals</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
              <span>AI-powered job matches</span>
            </li>
            <li className="flex items-start gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
              <span>Interview preparation tools</span>
            </li>
            <li className="flex items-start gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
              <span>CV reviews and optimization</span>
            </li>
            <li className="flex items-start gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
              <span>Track application in real-time</span>
            </li>
          </ul>
          
          <button className="bg-accent text-white w-full sm:w-auto justify-center px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition duration-300 cursor-pointer flex items-center gap-2">
            Join as Candidate 
            <img src={arrow} alt="Arrow diagonal" className="w-4 h-4 object-contain" />
          </button>
        </div>

        
        <div className="bg-blue-50 rounded-2xl p-6 md:p-10 flex-1 relative overflow-hidden">
          
          
          <img 
            src={recruiters} 
            alt="Decorative stars" 
            className="absolute right-4 top-4 md:right-6 md:top-10 w-16 md:w-24 h-auto pointer-events-none opacity-80 md:opacity-100" 
          />
          
          <h2 className="text-primary text-2xl font-bold mb-2">For Recruiters</h2>
          <p className="text-body text-sm mb-6 max-w-[320px] pr-12 md:pr-0">Find interviews that match your skills and career goals</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
              <span>Automated resume analysis and ranking</span>
            </li>
            <li className="flex items-start gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
              <span>Skill gap and qualification insights</span>
            </li>
            <li className="flex items-start gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
              <span>Shortlist top talent instantly</span>
            </li>
            <li className="flex items-start gap-2 text-dark text-sm">
              <img src={Checklist} alt="Checkmark" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
              <span>Real-time recruitment analytics and reports</span>
            </li>
          </ul>
          
          <button className="bg-primary text-white w-full sm:w-auto justify-center px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition duration-300 cursor-pointer flex items-center gap-2">
            Join as Recruiter 
            <img src={arrow} alt="Arrow diagonal" className="w-4 h-4 object-contain" />
          </button>
        </div>

      </div>
    </section>
  )
}

export default UserTypes