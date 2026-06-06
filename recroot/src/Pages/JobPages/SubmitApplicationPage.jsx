import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import Application from '../../assets/applicationsubmitted.png'

function SubmitApplicationPage() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const job = state?.job
  const form = state?.form

  return (
    <DashboardLayout activePage="jobs">
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        
        <div className="bg-white rounded-2xl p-6 mb-6 w-56 h-56 flex items-center justify-center shadow-sm">
          <img src={Application} alt="Application Submitted" className="w-full h-full object-contain" />
        </div>

        <h2 className="text-[#0f2537] text-base font-bold mb-2">Application Submitted</h2>
        <p className="text-slate-400 text-xs leading-relaxed mb-1">
          Your application for <span className="font-semibold text-[#0f2537]">{form?.jobTitle || 'Senior Product Designer'}</span> <br /> has been submitted successfully.
        </p>
        <p className="text-slate-400 text-xs mb-6">We'll notify you about the updates.</p>

        <button
          onClick={() => navigate('/')}
          className="bg-[#163C6B] text-white text-xs font-semibold px-16 py-2.5 rounded-lg hover:opacity-90 transition"
        >
          Back to Dashboard
        </button>

      </div>
    </DashboardLayout>
  )
}

export default SubmitApplicationPage