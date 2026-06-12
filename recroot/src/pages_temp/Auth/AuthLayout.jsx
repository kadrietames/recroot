import React from 'react';
import Logo from '../../assets/Logo.png';
import manBg from '../../assets/man_background.png';
import man from '../../assets/man.png';

export default function AuthLayout({ children }) {
  return (
    <main className="w-screen min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#eef3f9] m-0 p-0 overflow-x-hidden">
      
      {/* Left Sidebar */}
      <section className="hidden lg:flex lg:col-span-5 bg-white flex-col justify-between p-12 h-screen border-r border-gray-100 select-none">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Recroot logo" className="h-7 w-auto object-contain" />
        </div>

        {/* Hero copy */}
        <div className="my-auto max-w-[420px]">
          <h1 className="font-bold text-[44px] text-slate-900 tracking-tight leading-[1.15] mb-4">
            Your Next <span className="text-[#183c6b]">Opportunity</span> Starts Here
          </h1>
          <p className="text-[15px] font-medium leading-relaxed text-[#183c6b]/80">
            Find roles that match your skills, connect with top employers, and take the next step in your career.
          </p>
          <div className="relative w-full aspect-[4/3] mt-8 flex items-center justify-center">
            <img src={manBg} alt="" className="w-full h-full object-contain absolute inset-0 z-0 scale-105" />
            <img src={man} alt="Career illustration" className="h-[85%] object-contain absolute bottom-0 z-10" />
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-1.5 pb-2">
          <span className="h-1.5 w-6 rounded-full bg-[#183c6b]"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
        </div>
      </section>

      {/* Right Side Form */}
      <section className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center px-6 sm:px-16 md:px-24 py-12 overflow-y-auto h-screen">
        <div className="w-full max-w-[460px] flex flex-col justify-center">
          {children}
        </div>
      </section>

    </main>
  );
}