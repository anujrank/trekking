import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { HiOutlineBolt, HiOutlineStar, HiOutlineArrowPath, HiOutlineGlobeAlt, HiArrowUpRight } from "react-icons/hi2";

function ContactForm() {
  return (
    <div
      className="w-full relative bg-cover bg-center text-white py-20 md:py-28 px-6 lg:px-12 font-sans"
      style={{ backgroundImage: `url('/contact.png')` }}
    >
      {/* Dark green overlay to ensure text contrast and maintain original branding */}
      <div className="absolute inset-0 bg-[#063726]/90 mix-blend-multiply pointer-events-none" />

      {/* Content wrapper relative to sit above the overlay */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content Side */}
        <div className="lg:col-span-7 space-y-6 lg:pr-8">
          <h3 className="text-[#4ade80] uppercase text-xs font-bold tracking-widest">
            Free itinerary builder
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.15] tracking-tight">
            Build your family's custom adventure — free
          </h1>
          <p className="text-[#a3b8b0] text-base md:text-lg leading-relaxed max-w-xl font-light">
            Tell Alex about your family. Get a full Day 1 & 2 itinerary
            instantly — neighborhoods, restaurants, activity timing, transport,
            and insider tips. Then decide if you want the full trip.
          </p>

          <ul className="space-y-4 pt-4 max-w-md">
            <li className="flex items-center gap-3.5 text-[#a3b8b0]">
              <span className="p-1.5 rounded-full bg-[#0e4d36] text-[#4ade80] flex-shrink-0">
                <IoMdCheckmark className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium">No credit card required</span>
            </li>
            <li className="flex items-center gap-3.5 text-[#a3b8b0]">
              <span className="p-1.5 rounded-full bg-[#0e4d36] text-emerald-300 flex-shrink-0">
                <HiOutlineBolt className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium">Ready in under 2 minutes</span>
            </li>
            <li className="flex items-center gap-3.5 text-[#a3b8b0]">
              <span className="p-1.5 rounded-full bg-[#0e4d36] text-emerald-300 flex-shrink-0">
                <HiOutlineStar className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium">Built for your exact family</span>
            </li>
            <li className="flex items-center gap-3.5 text-[#a3b8b0]">
              <span className="p-1.5 rounded-full bg-[#0e4d36] text-emerald-400/60 flex-shrink-0">
                <HiOutlineArrowPath className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium">Unlimited chat revisions</span>
            </li>
          </ul>
        </div>

        {/* Right Form Card Side */}
        <div className="lg:col-span-5 bg-white rounded-3xl text-gray-800 shadow-2xl overflow-hidden w-full max-w-md lg:ml-auto border border-emerald-900/10">
          {/* Chat Header */}
          <div className="flex items-center gap-3.5 p-5 border-b border-gray-100 bg-emerald-50/10">
            <div className="w-11 h-11 rounded-full bg-emerald-50 text-[#115e59] flex items-center justify-center">
              <HiOutlineGlobeAlt className="w-6 h-6 text-[#0e6245]" />
            </div>
            <div>
              <div className="font-bold text-sm text-gray-900">
                Alex — Lead Adventure Planner
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Online now · 15 yrs experience
              </div>
            </div>
          </div>

          {/* Chat Bubble Area */}
          <div className="p-5 bg-emerald-50/10 flex gap-3 border-b border-gray-50">
            <div className="w-6 h-6 rounded-full bg-[#0e6245] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              A
            </div>
            <div className="bg-gray-100/80 text-gray-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tl-none max-w-[85%] leading-relaxed">
              Hey! I'm Alex, your adventure travel planner. Fill in your trip
              details below and I'll build your free Day 1-2 itinerary right
              now.
            </div>
          </div>

          {/* Form Inputs Area */}
          <form className="p-5 sm:p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="e.g. Thailand"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0e6245] focus:ring-4 focus:ring-[#0e6245]/5 transition-all text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Trip length
                </label>
                <select className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0e6245] focus:ring-4 focus:ring-[#0e6245]/5 transition-all text-gray-700 bg-white">
                  <option>Select...</option>
                  <option>3-4 days</option>
                  <option>5-7 days</option>
                  <option>8-10 days</option>
                  <option>2+ weeks</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Total budget
                </label>
                <select className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0e6245] focus:ring-4 focus:ring-[#0e6245]/5 transition-all text-gray-700 bg-white">
                  <option>Select...</option>
                  <option>Under $3000</option>
                  <option>$3000-$6000</option>
                  <option>$6000-$12000</option>
                  <option>$12000+</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Group size
                </label>
                <input
                  type="text"
                  placeholder="e.g. 4"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0e6245] focus:ring-4 focus:ring-[#0e6245]/5 transition-all text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Kids' ages
                </label>
                <input
                  type="text"
                  placeholder="e.g. 8, 11, 14"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0e6245] focus:ring-4 focus:ring-[#0e6245]/5 transition-all text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Food restrictions
                </label>
                <input
                  type="text"
                  placeholder="e.g. nut allergy"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0e6245] focus:ring-4 focus:ring-[#0e6245]/5 transition-all text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Your email (to save itinerary)
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0e6245] focus:ring-4 focus:ring-[#0e6245]/5 transition-all text-gray-900 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="group w-full bg-[#0e6245] hover:bg-[#0a4732] text-white text-sm font-semibold py-3.5 px-4 rounded-full transition-all duration-200 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-emerald-950/10 transform hover:-translate-y-0.5"
            >
              <span>Build my free itinerary</span>
              <HiArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactForm;