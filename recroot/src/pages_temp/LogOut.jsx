import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import Logout from '../assets/logout2.png'

function LogOut() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <DashboardLayout activePage="logout">
      <div className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-8">
        
        <div className="relative w-full max-w-[500px] bg-white rounded-2xl border border-slate-100 p-6 sm:p-10 flex flex-col items-center justify-center shadow-sm text-center">
          
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-600 text-lg transition duration-150 font-normal">
            ✕
          </button>

          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fcdbd9] flex items-center justify-center mb-5 sm:mb-6">
            <img 
              src={Logout} 
              alt="Logout Illustration" 
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain" 
            />
          </div>

          <h2 className="text-[#0f2537] text-lg sm:text-xl font-bold mb-2 tracking-tight">
            Log out of Recroot?
          </h2>
          <p className="text-slate-400 text-xs font-medium max-w-[280px] mb-6 sm:mb-8 leading-normal">
            You will be safely logged out from your account
          </p>

          <div className="flex items-center gap-3 sm:gap-4 w-full max-w-[280px]">
            
            <button 
              onClick={() => navigate(-1)}
              className="flex-1 py-2.5 px-4 border border-slate-200 text-slate-600 font-semibold text-xs rounded-lg hover:bg-slate-50 transition duration-150">
              Cancel
            </button>

            <button 
              onClick={handleLogout}
              className="flex-1 py-2.5 px-4 bg-[#e53e3e] text-white font-semibold text-xs rounded-lg hover:bg-[#c53030] shadow-sm transition duration-150">
              Yes, Logout
            </button>
          </div>

        </div>

      </div>
    </DashboardLayout>
  )
}

export default LogOut