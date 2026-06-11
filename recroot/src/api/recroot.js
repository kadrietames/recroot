const BASE_URL = 'https://recroot-backend.onrender.com'

const getToken = () => localStorage.getItem('token')

const authHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${getToken()}`
})

// ===== AUTH =====
export const signUp = async (fullName, email, password, role) => {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, email, password, role })
  })
  return res.json()
}

export const login = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  const data = await res.json()
  if (data.token) localStorage.setItem('token', data.token)
  return data
}

export const verifyOTP = async (email, code) => {
  const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp: code })
  })
  return res.json()
}

export const resendOTP = async (email) => {
  const res = await fetch(`${BASE_URL}/auth/resend-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  return res.json()
}

export const forgotPassword = async (email) => {
  const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  return res.json()
}

export const resetPassword = async (token, newPassword) => {
  const res = await fetch(`${BASE_URL}/auth/reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, newPassword })
  })
  return res.json()
}

export const updateProfile = async (profileData) => {
  const res = await fetch(`${BASE_URL}/auth/update-profile`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(profileData)
  })
  return res.json()
}

// ===== RESUMES =====
export const uploadResume = async (file) => {
  const formData = new FormData()
  formData.append('resume', file)
  const res = await fetch(`${BASE_URL}/resumes/upload`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${getToken()}` },
    body: formData
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || `Error ${res.status}`)
  return data
}

export const getMyResumes = async () => {
  const res = await fetch(`${BASE_URL}/resumes/my-resumes`, {
    headers: authHeaders()
  })
  return res.json()
}

export const deleteResume = async (id) => {
  const res = await fetch(`${BASE_URL}/resumes/${id}`, {
    method: 'DELETE',
    headers: authHeaders()
  })
  return res.json()
}

// ===== JOBS =====
export const createJob = async (title, description) => {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ title, description })
  })
  return res.json()
}

export const getJobs = async () => {
  const res = await fetch(`${BASE_URL}/jobs`, {
    headers: authHeaders()
  })
  return res.json()
}

export const deleteJob = async (id) => {
  const res = await fetch(`${BASE_URL}/jobs/${id}`, {
    method: 'DELETE',
    headers: authHeaders()
  })
  return res.json()
}

// ===== SCORING =====
export const scoreResume = async (resumeId, jobDescription) => {
  const res = await fetch(`${BASE_URL}/scoring/score`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ resumeId, jobDescription })
  })
  return res.json()
}

// ===== INTERVIEWS =====
export const generateInterview = async (resumeId, jobDescription, jobRole) => {
  const res = await fetch(`${BASE_URL}/interviews/generate`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ resumeId, jobDescription, jobRole })
  })
  return res.json()
}

export const getInterviews = async () => {
  const res = await fetch(`${BASE_URL}/interviews`, {
    headers: authHeaders()
  })
  return res.json()
}

// ===== APPLICATIONS =====
export const applyForJob = async (jobId, resumeId) => {
  const res = await fetch(`${BASE_URL}/applications/apply`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ jobId, resumeId })
  })
  return res.json()
}

export const getMyApplications = async () => {
  const res = await fetch(`${BASE_URL}/applications/my-applications`, {
    headers: authHeaders()
  })
  return res.json()
}