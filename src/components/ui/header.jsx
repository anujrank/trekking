"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Destination", href: "/destination" },
    { name: "Planner", href: "/planner" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#022c22] sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 text-white font-semibold text-lg tracking-wide">
            <Link
              href="/"
              className="flex items-center space-x-2 text-white font-semibold text-lg tracking-wide"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-20 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#4ade80]"
                      : "text-emerald-100/80 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mint Pill CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-[#52d1a3] hover:bg-[#42be92] text-[#022c22] font-semibold px-6 py-2.5 rounded-xl text-sm transition-all duration-200 flex items-center space-x-1 shadow-md">
              <span>Plan my trip</span>
              <span className="text-xs font-bold">↗</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-emerald-100 hover:text-white p-2 rounded-lg transition-colors focus:outline-none z-50 relative"
              aria-label="Toggle Menu"
            >
              {/* Animated Icon Toggle */}
              <div className="relative w-6 h-6 transition-transform duration-300">
                {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
              </div>
            </button>
          </div>
        </div>

        {/* Smooth Mobile Navigation Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden border-emerald-900 bg-[#022c22] ${
            isOpen 
              ? "max-h-[450px] opacity-100 border-t pb-6 pt-2" 
              : "max-h-0 opacity-0 border-t-0 pb-0 pt-0"
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 block ${
                    isActive
                      ? "text-white bg-emerald-900/50"
                      : "text-emerald-100/80 hover:text-white hover:bg-emerald-900/30"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-4 pt-4">
              <button className="w-full bg-[#52d1a3] hover:bg-[#42be92] text-[#022c22] font-semibold px-6 py-3 rounded-full text-base transition-all duration-200 flex items-center justify-center space-x-1 shadow-md">
                <span>Plan my trip</span>
                <span className="text-sm font-bold">↗</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;