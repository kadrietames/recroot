import React from 'react'
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    
    <footer className="bg-white border-t border-border px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-left">
        
       
        <div className="flex items-center gap-2 mb-3">

          <img src={Logo} alt="Recroot Logo" className="h-5 w-auto object-contain" />
        </div>
        
      
        <p className="text-body font-bold text-sm tracking-wide">
          AI-powered
        </p>
        
      </div>
    </footer>
  )
}

export default Footer