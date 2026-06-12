import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function About() {
  return (
    <div>
      <Navbar />
       <section className="bg-slate-900 py-24 px-8">
  <div className="max-w-3xl mx-auto">

    
    <div className="text-center mb-16">
      <h1 className="text-white text-5xl font-bold mb-6">About RECROOT</h1>
      <p className="text-slate-400 text-xl leading-relaxed">
        RECROOT is an AI-powered platform that helps job seekers match their
        resume to any job description and prepares them for interviews — built
        for Africa and beyond.
      </p>
    </div>

    
    <div className="flex gap-8 mb-16">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex-1">
        <h2 className="text-sky-300 text-2xl font-bold mb-4">Vision</h2>
        <p className="text-slate-400 leading-relaxed">
          To become Africa's leading AI powered career readiness platform,
          enabling job seekers to unlock opportunities through intelligent resume
          analysis, personalized interview preparation, and skill gap insights.
        </p>
      </div>
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex-1">
        <h2 className="text-sky-300 text-2xl font-bold mb-4">Mission</h2>
        <p className="text-slate-400 leading-relaxed">
          To simplify and improve the job application journey by providing
          accessible AI tools that help candidates evaluate job fit, strengthen
          resumes, and prepare confidently for interviews.
        </p>
      </div>
    </div>

  </div>
</section>
      <Footer />
    </div>
  )
}

export default About