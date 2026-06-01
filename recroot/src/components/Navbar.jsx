import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { Link } from 'react-router-dom'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-border relative">
      
      
      <img src={Logo} alt="Logo" className="h-7 w-auto" />
      
      <ul className="hidden md:flex gap-8 list-none">
        <li><Link to="/" className="text-primary font-medium text-base">Home</Link></li>
        <li><a href="#features" className="text-body text-base hover:text-primary">Features</a></li>
        <li><a href="#how-it-works" className="text-body text-base hover:text-primary">How it works</a></li>
        <li><a href="#about" className="text-body text-base hover:text-primary">About</a></li>
      </ul>


      <div className="hidden md:flex items-center gap-4">
        <a href="#login" className="text-body text-base hover:text-primary">Login</a>
        <button className="bg-primary text-white text-sm px-5 py-2 rounded-lg hover:opacity-90 transition duration-300 cursor-pointer">
          Get started
        </button>
      </div>

    
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-2xl text-body cursor-pointer"
      >
        {isOpen ? '✕' : '☰'}
      </button>


      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border flex flex-col p-6 gap-4 md:hidden shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)}>How it works</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <hr className="border-slate-100" />
          <a href="#login" onClick={() => setIsOpen(false)}>Login</a>
          <button className="bg-primary text-white py-2 rounded-lg w-full">Get started</button>
        </div>
      )}

    </nav>
  )
}

export default Navbar