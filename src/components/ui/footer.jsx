import React from 'react'
// Make sure to import Lucide icons or use SVGs for social media if needed, 
// but standard font/layout styling is handled below.

function Footer() {
  return (
    <footer className='bg-[#043324] text-[#A3E2CD] font-sans'>
      
      {/* Top Banner Section */}
      <div className='flex flex-col items-center text-center gap-6 py-16 px-6 max-w-4xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight'>
          Your family's best trip is one conversation away
        </h1>
        <p className='text-md md:text-lg text-[#DFFAF0] max-w-2xl'>
          Tell us where you want to go, who's coming, and what your family loves. We handle the rest.
        </p>
        
        <button className='bg-[#5CDBB5] text-[#043324] font-medium py-3 px-8 rounded-full flex items-center gap-2 hover:bg-[#49c29e] transition-all my-2 text-sm md:text-base'>
          Build my free itinerary 
          <span className="text-xs">↗</span>
        </button>
        
        <p className='text-xs md:text-sm text-[#8FD8BF] opacity-90'>
          No credit card · Free Day 1–2 preview · Full plan from $349
        </p>
      </div>

      <hr className='border-[#08422F] max-w-7xl mx-auto px-6 opacity-30' />

      {/* Main Footer Content Links */}
      <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 text-sm'>
        
        {/* Brand Column */}
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2 font-semibold text-white'>
            {/* Simple Compass Icon representation */}
            <img src="/logo.png" alt="Logo" className='w-full h-28' />
          </div>
          <p className='text-[#8FD8BF] leading-relaxed max-w-xs'>
            Custom adventure itineraries for active families. 62 destinations, 15 years of experience, 500+ trips planned.
          </p>
          {/* Social Icons Placeholder */}
          <div className='flex gap-3 mt-2 text-white opacity-80'>
            <span className='w-7 h-7 border border-[#08422F] rounded-full flex items-center justify-center bg-[#063f2d] cursor-pointer hover:bg-[#08422F]'>i</span>
            <span className='w-7 h-7 border border-[#08422F] rounded-full flex items-center justify-center bg-[#063f2d] cursor-pointer hover:bg-[#08422F]'>p</span>
            <span className='w-7 h-7 border border-[#08422F] rounded-full flex items-center justify-center bg-[#063f2d] cursor-pointer hover:bg-[#08422F]'>f</span>
          </div>
        </div>

        {/* Destinations Column */}
        <div className='flex flex-col gap-3'>
          <h4 className='text-[11px] font-bold tracking-widest text-[#5CDBB5] uppercase mb-1'>Destinations</h4>
          <a href="#" className='hover:text-white transition-colors'>Southeast Asia</a>
          <a href="#" className='hover:text-white transition-colors'>Central America</a>
          <a href="#" className='hover:text-white transition-colors'>Africa & Safari</a>
          <a href="#" className='hover:text-white transition-colors'>Europe</a>
          <a href="#" className='hover:text-white transition-colors'>All 62 destinations</a>
        </div>

        {/* Plan Your Trip Column */}
        <div className='flex flex-col gap-3'>
          <h4 className='text-[11px] font-bold tracking-widest text-[#5CDBB5] uppercase mb-1'>Plan Your Trip</h4>
          <a href="#" className='hover:text-white transition-colors'>Free planner tool</a>
          <a href="#" className='hover:text-white transition-colors'>Pricing & packages</a>
          <a href="#" className='hover:text-white transition-colors'>How it works</a>
          <a href="#" className='hover:text-white transition-colors'>About</a>
        </div>

        {/* Blog Column */}
        <div className='flex flex-col gap-3'>
          <h4 className='text-[11px] font-bold tracking-widest text-[#5CDBB5] uppercase mb-1'>Blog</h4>
          <a href="#" className='hover:text-white transition-colors'>Thailand with kids</a>
          <a href="#" className='hover:text-white transition-colors'>Vietnam 12-day guide</a>
          <a href="#" className='hover:text-white transition-colors'>Iceland itinerary</a>
          <a href="#" className='hover:text-white transition-colors'>Costa Rica guide</a>
          <a href="#" className='hover:text-white transition-colors'>SEA family guide</a>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className='border-t border-[#063e2d] py-6 px-6'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8FD8BF] opacity-80'>
          <div>© 2026 Adventure Travel Co. All rights reserved.</div>
          <div className='flex gap-6'>
            <a href="#" className='hover:text-white transition-colors'>Privacy policy</a>
            <a href="#" className='hover:text-white transition-colors'>Terms of service</a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer