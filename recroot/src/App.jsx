import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Upload from './pages/Upload'
import Jobs from './pages/Jobs'
import InputMethod from './pages/JobPages/InputMethod'
import EmptyState from './pages/JobPages/EmptyState'
import ExtractedJobDetails from './pages/JobPages/ExtractedJobDetails'
import ConfirmEditDetails from './pages/JobPages/ConfirmEditDetails'
import JobMatchPage from './pages/JobPages/JobMatchPage'
import SubmitApplicationPage from './pages/JobPages/SubmitApplicationPage'
import ApplicationSuccess from './pages/JobPages/ApplicationSuccess'
import Submit from './pages/JobPages/Submit'
import Settings from './pages/Settings'
import ProfileSettings from './pages/ProfileSettings'
import HelpSupport from './pages/HelpSupport'
import LogOut from './pages/LogOut'
import Reports from './pages/Reports'
import GenerateReport from './pages/GenerateReport'
import ReportOverview from './pages/ReportOverview'
import MatchScore from './pages/MatchScore'
import InterviewPrep from './pages/InterviewPage/InterviewPrep'
import RecruiterDashboard from './pages/RecruiterDashboard'
import CandidateDashboard from './pages/CandidateDashboard'
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
import LoginSuccess from './pages/Auth/LoginSuccess'
import OtpVerification from './pages/Auth/OTP'
import OTPSuccess from './pages/Auth/OTPSuccess'
import TellAboutYourself from './pages/Auth/TellAboutYourself'
import Profession from './pages/Auth/Profession'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ResendLink from './pages/Auth/ResendLink'
import ResetPassword from './pages/Auth/ResetPassword'
import ResetPasswordSuccess from './pages/Auth/ResetPasswordSuccess'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/otp-success" element={<OTPSuccess />} />
        <Route path="/tell-about-yourself" element={<TellAboutYourself />} />
        <Route path="/profession" element={<Profession />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resend-link" element={<ResendLink />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-success" element={<ResetPasswordSuccess />} />

        {/* Main App */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/input-method" element={<InputMethod />} />
        <Route path="/jobs/empty-state" element={<EmptyState />} />
        <Route path="/jobs/extracted" element={<ExtractedJobDetails />} />
        <Route path="/jobs/confirm" element={<ConfirmEditDetails />} />
        <Route path="/jobs/match" element={<JobMatchPage />} />
        <Route path="/jobs/submit" element={<SubmitApplicationPage />} />
        <Route path="/jobs/success" element={<ApplicationSuccess />} />
        <Route path="/jobs/submit-upload" element={<Submit />} />
        <Route path="/match-score" element={<MatchScore />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/generate" element={<GenerateReport />} />
        <Route path="/reports/overview" element={<ReportOverview />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/profile" element={<ProfileSettings />} />
        <Route path="/settings/help" element={<HelpSupport />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;