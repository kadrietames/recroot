import React from 'react'
import Hero1 from '../assets/hero1.png'
import { Link } from 'react-router-dom'

function HowItWorks() {
  return (
    <section className="bg-white py-20 px-10" id="how-it-works">
      
      <div className="text-center mb-16">
        <h2 className="text-dark text-3xl font-bold leading-tight">
          Simple Steps To Analyze, <br />
          Improve And Get Hired Faster.
        </h2>
      </div>

      <div className="flex gap-6 max-w-6xl mx-auto items-stretch">

        
        <div className="bg-white border border-border rounded-xl p-6 pt-10 flex-1 text-center hover:-translate-y-2 hover:border-primary transition duration-300 cursor-pointer relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1d3557] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">1</span>
          <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src={Hero1} alt="Create Account" className="w-5 h-5 object-contain" />
          </div>
          <h3 className="text-dark font-bold text-base mb-2">Create Account</h3>
          <p className="text-body text-xs leading-relaxed max-w-xs mx-auto">Sign up and create your account in seconds.</p>
        </div>

        
        <Link to="/upload" className="flex-1 block relative">
          <div className="bg-white border border-border rounded-xl p-6 pt-10 h-full text-center hover:-translate-y-2 hover:border-primary transition duration-300 cursor-pointer">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1d3557] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">2</span>
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src={Hero1} alt="Upload Resume" className="w-5 h-5 object-contain" />
            </div>
            <h3 className="text-dark font-bold text-base mb-2">Upload Resume</h3>
            <p className="text-body text-xs leading-relaxed max-w-xs mx-auto">Upload your document in seconds.</p>
          </div>
        </Link>

        
        <div className="bg-white border border-border rounded-xl p-6 pt-10 flex-1 text-center hover:-translate-y-2 hover:border-primary transition duration-300 cursor-pointer relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1d3557] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">3</span>
          <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src={Hero1} alt="Paste Jobs" className="w-5 h-5 object-contain" />
          </div>
          <h3 className="text-dark font-bold text-base mb-2">Paste Job Description</h3>
          <p className="text-body text-xs leading-relaxed max-w-xs mx-auto">Copy and paste your job description</p>
        </div>

        
        <div className="bg-white border border-border rounded-xl p-6 pt-10 flex-1 text-center hover:-translate-y-2 hover:border-primary transition duration-300 cursor-pointer relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1d3557] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">4</span>
          <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src={Hero1} alt="AI Analyses" className="w-5 h-5 object-contain" />
          </div>
          <h3 className="text-dark font-bold text-base mb-2">AI Analyses</h3>
          <p className="text-body text-xs leading-relaxed max-w-xs mx-auto">Sign up and create your account in seconds.</p>
        </div>

        
        <div className="bg-white border border-border rounded-xl p-6 pt-10 flex-1 text-center hover:-translate-y-2 hover:border-primary transition duration-300 cursor-pointer relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1d3557] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">5</span>
          <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src={Hero1} alt="Interview Prep" className="w-5 h-5 object-contain" />
          </div>
          <h3 className="text-dark font-bold text-base mb-2">Interview Prep</h3>
          <p className="text-body text-xs leading-relaxed max-w-xs mx-auto">Top questions,key topics and preparation guide.</p>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks