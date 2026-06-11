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
    { name: 'Destinations', href: '#destinations' },
    { name: 'Blog', href: '#blog' },
    { name: 'Trip Planner', href: '#planner' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-2 rounded-lg">
              <GiMountainClimbing className="text-white text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-tight">Trek</span>
              <span className="text-orange-400 text-xs font-semibold">Adventures</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-orange-400 bg-white/20'
                      : 'text-gray-200 hover:text-orange-400 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-orange-400 transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 block ${
                      isActive
                        ? 'text-orange-400 bg-white/20'
                        : 'text-gray-200 hover:text-orange-400 hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              })}
              <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 w-full mt-4">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header