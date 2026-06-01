import React from 'react'
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border px-10 py-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl"></span>
         <img src={Logo} alt="Logo" className='h-5 w-auto' />
      </div>
      <p className="text-body font-bold text-sm">AI-powered</p>
    </footer>
  )
}

export default Footer