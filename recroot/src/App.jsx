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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/profile" element={<ProfileSettings />} />
        <Route path="/settings/help" element={<HelpSupport />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/generate" element={<GenerateReport />} />
        <Route path="/reports/overview" element={<ReportOverview />} />
        <Route path="/match-score" element={<MatchScore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;