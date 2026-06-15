import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStar, FaCompass } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

function ContactForm() {
  return (
    <div
      className="w-full relative bg-cover bg-center text-white py-16 px-4 md:px-12 lg:px-24 font-sans"
      // Replace the URL below with your own background image path
      style={{ backgroundImage: `url('/contact.png')` }}
    >
      {/* Dark green overlay to ensure text contrast and maintain original branding */}
      <div className="absolute inset-0 bg-[#063726]/90 mix-blend-multiply pointer-events-none" />

      {/* Content wrapper relative to sit above the overlay */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content Side */}
        <div className="space-y-6">
          <h3 className="text-[#4ade80] uppercase text-xs font-bold tracking-widest">
            Free itinerary builder
          </h3>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
            Build your family's custom adventure — free
          </h1>
          <p className="text-[#a3b8b0] text-base md:text-lg leading-relaxed max-w-xl">
            Tell Alex about your family. Get a full Day 1 & 2 itinerary
            instantly — neighborhoods, restaurants, activity timing, transport,
            and insider tips. Then decide if you want the full trip.
          </p>

          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3 text-[#a3b8b0]">
              <span className="p-1 rounded-full bg-[#0e4d36] text-[#4ade80]">
                <IoMdCheckmark className="w-4 h-4" />
              </span>
              <span>No credit card required</span>
            </li>
            <li className="flex items-center gap-3 text-[#a3b8b0]">
              <span className="p-1 rounded-full bg-[#0e4d36] text-[#fbbf24]">
                <AiFillThunderbolt className="w-4 h-4" />
              </span>
              <span>Ready in under 2 minutes</span>
            </li>
            <li className="flex items-center gap-3 text-[#a3b8b0]">
              <span className="p-1 rounded-full bg-[#0e4d36] text-[#2dd4bf]">
                <FaStar className="w-4 h-4" />
              </span>
              <span>Built for your exact family</span>
            </li>
            <li className="flex items-center gap-3 text-[#a3b8b0]">
              <span className="p-1 rounded-full bg-[#0e4d36] text-[#a3b8b0]">
                <VscDebugRestart className="w-4 h-4" />
              </span>
              <span className="px-1 rounded">Unlimited chat revisions</span>
            </li>
          </ul>
        </div>

        {/* Right Form Card Side */}
        <div className="bg-white rounded-2xl text-gray-800 shadow-2xl overflow-hidden max-w-lg mx-auto w-full">
          {/* Chat Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-[#fbfdfc]">
            <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#115e59]">
              <FaCompass className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-gray-900">
                Alex — Lead Adventure Planner
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                Online now · 15 yrs experience
              </div>
            </div>
          </div>

          {/* Chat Bubble Area */}
          <div className="p-5 bg-[#fbfdfc] flex gap-3">
            <div className="w-6 h-6 rounded-full bg-[#e8f5e9] text-[#115e59] text-[10px] font-bold flex items-center justify-center shrink-0 mt-1">
              A
            </div>
            <div className="bg-[#f3f4f6] text-gray-800 text-sm p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed">
              Hey! I'm Alex, your adventure travel planner. Fill in your trip
              details below and I'll build your free Day 1-2 itinerary right
              now.
            </div>
          </div>

          {/* Form Inputs Area */}
          <form className="p-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="e.g. Thailand"
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-emerald-600"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Trip length
                </label>
                <select className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-emerald-600 bg-white text-gray-600">
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
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Total budget
                </label>
                <select className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-emerald-600 bg-white text-gray-600">
                  <option>Select...</option>
                  <option>Under $3000</option>
                  <option>$3000-$6000</option>
                  <option>$6000-$12000</option>
                  <option>$12000+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Group size
                </label>
                <input
                  type="text"
                  placeholder="e.g. 4"
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Kids' ages
                </label>
                <input
                  type="text"
                  placeholder="e.g. 8, 11, 14"
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-emerald-600"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Food restrictions
                </label>
                <input
                  type="text"
                  placeholder="e.g. nut allergy"
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Your email (to save itinerary)
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0e6245] hover:bg-[#0a4732] text-white text-sm font-semibold py-3 px-4 rounded-full transition duration-200 flex items-center justify-center gap-2 mt-2"
            >
              Build my free itinerary ↗
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
