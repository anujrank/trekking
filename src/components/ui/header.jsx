'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { GiMountainClimbing } from 'react-icons/gi'
import { HiMenu, HiX } from 'react-icons/hi'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Destination', href: '/destination' },
    { name: 'Blog', href: '#blog' },
    { name: 'Trip Planner', href: '#planner' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    /* PERFECTED: Kept bg-white but added a subtle border-b for modern flat aesthetics */
    <header className="bg-white border-b border-slate-100 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0 py-2">
            {/* FIXED: Constrained height to h-12 to neatly balance inside the 80px (h-20) header frame */}
            <img 
              src="/logo.png" 
              alt="Trek Adventures Logo" 
              className="h--52 w-auto object-contain max-w-[160px]" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <a
                  key={item.name}
                  href={item.href}
                  /* FIXED: Text colors adjusted to slate-600/slate-900 with clear light slate hover backgrounds */
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-900 hover:text-emerald-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            {/* OPTIMIZED: Kept your high-visibility emerald button but balanced its shadow for a light background */}
            <button className="bg-[#e5a93b] hover:bg-black cursor-pointer text-white px-6 py-2.5 rounded-xl font-bold tracking-wide transition-all duration-300 transform hover:scale-[1.03] shadow-md shadow-emerald-500/20">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            {/* FIXED: Changed button color from gray-200 to slate-700 so it's fully visible against white */}
            <button
              onClick={toggleMenu}
              className="text-slate-900 hover:text-emerald-600 p-2 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          /* FIXED: Dropdown wrapper matches bg-white and uses slate borders */
          <div className="md:hidden pb-6 pt-2 border-t border-slate-100 bg-white">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    /* FIXED: Mobile links updated to accessible dark text values */
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 block ${
                      isActive
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-slate-900 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              })}
              <div className="px-4 pt-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 w-full shadow-lg shadow-emerald-500/20">
                  Book Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header