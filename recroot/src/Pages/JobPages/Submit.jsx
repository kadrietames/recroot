import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { getMyResumes, applyForJob, createJob, uploadResume } from '../../api/recroot'

function Submit() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const job = state?.job

  const [coverLetter, setCoverLetter] = useState('')
  const [resume, setResume] = useState(null)
  const [newFile, setNewFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const resumes = await getMyResumes()
        const list = Array.isArray(resumes) ? resumes : resumes.resumes || []
        if (list.length > 0) setResume(list[0])
      } catch (err) {
        setError('Could not fetch resume. Please upload your resume first.')
      }
    }
    fetchResume()
  }, [])

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setNewFile(file)
    setLoading(true)
    setError('')
    try {
      const uploaded = await uploadResume(file)
      if (uploaded) setResume(uploaded)
    } catch (err) {
      setError('Could not upload resume. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async () => {
  setLoading(true)
  setError('')
  try {
    const resumeId = resume?.id || resume?._id
    if (!resumeId) {
      setError('No resume found. Please upload your resume first.')
      setLoading(false)
      return
    }
    const jobId = job?.id || job?._id
    if (!jobId) {
      setError('Job not found. Please go back and try again.')
      setLoading(false)
      return
    }
    await applyForJob(jobId, resumeId)
    navigate('/jobs/success')
  } catch (err) {
    setError(err.message || 'Application failed. Please try again.')
  } finally {
    setLoading(false)
  }
}

  return (
    <DashboardLayout activePage="jobs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-1 pb-6 text-left">

        <div className="w-full mb-5">
          <div className="mb-2">
            <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold transition-colors">
              <span className="text-sm">←</span> Back to Dashboard
            </a>
          </div>
          <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-0.5">
            Application for {job?.title || 'Senior Product Designer'}
          </h1>
          <p className="text-slate-400 text-xs font-medium">
            {job?.company || 'TechCrush'} - {job?.jobType || job?.type || 'Remote'}
          </p>
        </div>

        <div className="max-w-[570px] mx-auto">
          <h3 className="text-[#0f2537] text-sm font-bold mb-2">Resume</h3>
          <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3 mb-5 shadow-sm gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="bg-red-100 text-red-500 text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0">PDF</div>
              <p className="text-[#0f2537] text-xs font-semibold truncate">
                {newFile ? newFile.name : resume?.filename || resume?.name || 'No resume uploaded'}
              </p>
            </div>
            <label className="text-[#163C6B] text-xs font-semibold hover:opacity-70 transition cursor-pointer shrink-0">
              {loading ? 'Uploading...' : 'Change'}
              <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <h3 className="text-[#0f2537] text-sm font-bold mb-2">Cover Letter</h3>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Add a cover letter (optional)"
            rows={10}
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-600 resize-none focus:outline-none focus:border-slate-300 placeholder-slate-300 mb-4"
          />

          {error && <p className="text-red-500 text-[10px] mb-3">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-2.5 rounded-lg text-xs font-semibold transition text-white ${
              loading ? 'bg-[#163C6B]/60 cursor-not-allowed' : 'bg-[#163C6B] hover:opacity-90'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Submit