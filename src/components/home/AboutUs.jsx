import React from 'react'
import { GoDash } from 'react-icons/go'

function AboutUs() {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center gap-16 py-16 px-6 max-w-7xl mx-auto">
      <div className="group relative h-[450px] w-full max-w-[450px] flex-shrink-0">
        <img
          src="/about1.png"
          alt="About back"
          className="w-4/5 h-4/5 object-cover absolute top-0 left-0 transition-all duration-500 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-4 rounded-xl shadow-md"
        />
        <img
          src="/about2.png"
          alt="About front"
          className="w-4/5 h-4/5 object-cover absolute bottom-0 right-0 transition-all duration-500 ease-in-out group-hover:translate-x-4 group-hover:translate-y-4 rounded-xl shadow-lg border-4 border-white"
        />
      </div>
      <div className="w-full lg:w-1/2 space-y-5 text-left">
        <h1 className="text-sm font-bold tracking-wider uppercase text-slate-500 flex items-center gap-1">
          <GoDash className="text-xl text-slate-900" />
          About Us
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Explore the Mountains, Discover Yourself
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We are passionate adventurers dedicated to creating unforgettable
          trekking experiences across the breathtaking landscapes of India.
          From beginner-friendly trails to challenging mountain expeditions,
          our mission is to help travelers connect with nature, embrace
          adventure, and create lifelong memories.
        </p>
        <p className="text-slate-600 leading-relaxed">
          With experienced guides, carefully planned itineraries, and a
          commitment to safety, we ensure every journey is enjoyable,
          authentic, and rewarding. Whether you're seeking peaceful nature
          walks or thrilling Himalayan treks, we're here to guide you every
          step of the way.
        </p>

        <div className="grid grid-cols-2 gap-y-4 pt-4 border-t border-slate-100 text-slate-800 font-semibold">
          <div className="flex items-center gap-2">
            🔹 500+ Happy Trekkers
          </div>
          <div className="flex items-center gap-2">🔹 50+ Trek Routes</div>
          <div className="flex items-center gap-2">🔹 10+ Expert Guides</div>
          <div className="flex items-center gap-2">🔹 100% Safety Focus</div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
