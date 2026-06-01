import React from 'react'
import Logo from "../assets/Logo.png";
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 flex items-center justify-between px-12 py-5 border-b border-border">
      
      <img src={Logo} alt="Logo" className="h-7 w-auto" />
      

      
      <ul className="flex gap-8 list-none">
        <li><Link to="/" className="text-primary font-medium text-base">Home</Link></li>
        <li><a href="#features" className="text-body text-base hover:text-primary">Features</a></li>
        <li><a href="#how-it-works" className="text-body text-base hover:text-primary">How it works</a></li>
        <li><a href="#about" className="text-body text-base hover:text-primary">About</a></li>
      </ul>

      
      <div className="flex items-center gap-4">
        <a href="#login" className="text-body text-base hover:text-primary">Login</a>
        <button className="bg-primary text-white text-sm px-5 py-2 rounded-lg hover:opacity-90 transition duration-300 cursor-pointer">
          Get started
        </button>
      </div>

    </nav>
  )
}

export default Navbar