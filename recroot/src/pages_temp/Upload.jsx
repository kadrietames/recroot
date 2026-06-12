import React, { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import myresume from '../assets/myresume.png'
import lock from '../assets/lock.png'
import { uploadResume } from '../api/recroot'

function Upload() {
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  
  
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFileName(selectedFile.name)
      setFile(selectedFile)
      setError('')
    }
  }

  const triggerFileBrowser = (e) => {
    e.preventDefault()
    fileInputRef.current.click()
  }

  const handleUpload = async (e) => {
  if (e) e.preventDefault()
  if (!file) return

  console.log('Token Status:', !!localStorage.getItem('token'))
  setLoading(true)
  setError('')
  
  try {
   const data = await uploadResume(file)
    console.log('upload data:', data)
    console.log('resumeId saving:', data.data?._id || data._id)
    localStorage.setItem('resumeId', data.data?._id || data._id)
    navigate('/jobs/input-method')
  } catch (err) {
    console.error('File submission failed:', err)
    setError(err.message || 'Upload failed. Please check your connection and try again.')
  } finally {
    setLoading(false)
  }
}

  return (
    <DashboardLayout activePage="upload">
      <div className="w-full text-left mb-6 px-4 sm:px-0">
        <div className="mb-2">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-xs font-semibold">
            <span>←</span> Back to Dashboard
          </Link>
        </div>
        <div>
          <h1 className="text-[#0f2537] text-xl sm:text-2xl font-bold tracking-tight mb-1">Upload your Resume</h1>
          <p className="text-slate-500 text-xs font-medium">Drag and drop your resume here</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-start max-w-xl mt-6 mx-auto px-4 sm:px-0">
        <div className="w-full bg-white rounded-xl border border-slate-200/70 p-4 sm:p-6 shadow-sm flex flex-col items-center justify-center">
          
          <div className="w-full mx-auto bg-white rounded-xl border border-dashed border-slate-300 py-8 sm:py-9 px-5 sm:px-8 flex flex-col items-center justify-center mb-6 sm:mb-8">
            <div className="mb-4 bg-slate-50 p-3 rounded-full">
              <img src={myresume} alt="Upload Icon" className="w-6 h-6 object-contain opacity-70" />
            </div>

            <h2 className="text-[#0f2537] font-bold text-sm mb-3">Upload Your Resume</h2>

       
            <p className="text-slate-500 text-xs mb-1.5 text-center">
              Drag & drop your resume here, or{' '}
              <button 
                type="button" 
                onClick={triggerFileBrowser} 
                className="text-[#1d3d6f] font-semibold underline underline-offset-2 hover:text-blue-900 bg-transparent border-none p-0 cursor-pointer inline"
              >
                browse
              </button>
            </p>
            <p className="text-slate-400 text-[10px] mb-6">PDF, DOC (Max 5MB)</p>

            <label className="bg-[#1d3d6f] text-white px-8 sm:px-10 py-2 rounded-md text-xs font-semibold hover:opacity-95 transition duration-200 cursor-pointer shadow-sm text-center max-w-[200px] truncate">
              {fileName ? fileName : 'Choose File'}
              <input
                type="file"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {error && (
              <p className="text-red-500 text-[10px] mt-3 text-center max-w-xs font-medium bg-red-50 p-2 rounded border border-red-100">
                {error}
              </p>
            )}

            {fileName && (
              <button
                type="button"
                onClick={handleUpload}
                disabled={loading}
                className={`px-8 sm:px-10 py-2 rounded-md text-xs font-semibold transition duration-200 cursor-pointer mt-4 shadow-sm text-white ${
                  loading
                    ? 'bg-emerald-400 cursor-not-allowed animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                {loading ? 'Uploading...' : 'Analyze Resume'}
              </button>
            )}
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-xl">
            <button 
              type="button"
              className="w-full max-w-xs bg-[#e9f7f2] border border-[#cbeee0] rounded-xl py-2.5 flex items-center justify-center gap-2 hover:bg-[#def5eb] transition duration-150 cursor-pointer"
            >
              <img src={myresume} alt="Report File" className="w-4 h-4 object-contain opacity-60 brightness-50" />
              <p className="text-emerald-800 font-semibold text-xs">View sample report</p>
            </button>

            <div className="flex items-center gap-2 text-slate-400/80 mt-2">
              <img src={lock} alt="Secure Lock" className="w-3.5 h-3.5 object-contain" />
              <p className="text-[10px] font-semibold tracking-wide uppercase text-center">Your data is secure and confidential</p>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  )
}

export default Upload