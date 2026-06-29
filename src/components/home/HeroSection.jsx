import React from 'react';
import Link from 'next/link';
import { HiSparkles, HiArrowUpRight } from 'react-icons/hi2';
import { FaCalendarDay, FaCreditCard, FaShieldHeart } from 'react-icons/fa6';

function HeroSection() {
  return (
    <section 
      className="w-full lg:min-h-screen bg-cover bg-center relative text-white antialiased flex flex-col justify-between" 
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Dark overlay to match the rich, deep green-tinted atmosphere */}
      <div className="absolute inset-0 bg-emerald-950/90 mix-blend-multiply pointer-events-none" />

      {/* Main Content Wrapper (relative to sit above the overlay) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-between min-h-screen py-6">
            
        {/* 2. HERO BODY (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-12">
          
          {/* Left Column: Headings & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag/Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-emerald-300">
              <HiSparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>Adventure travel for active families</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight">
              Your family's most <br />
              <span className="text-emerald-300 font-semibold">unforgettable trip</span> starts here
            </h1>

            {/* Description */}
            <p className="text-emerald-100/80 text-lg max-w-xl leading-relaxed">
              Day-by-day adventure itineraries built by a planner with 15 years experience. 
              Every restaurant, every trail, every local secret — already figured out.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/planner" className="bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-semibold px-6 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg flex items-center space-x-1.5 group">
                <span>Build my free itinerary</span>
                <HiArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/10 font-semibold px-6 py-3.5 rounded-full text-base transition-all duration-200">
                View packages
              </Link>
            </div>
          </div>

          {/* Right Column: Statistics Stack */}
          <div className="lg:col-span-5 flex flex-col space-y-4 w-full max-w-sm lg:ml-auto">
            {/* Stat Card 1 */}
            <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-800/50 p-6 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-serif font-bold text-white mb-1">500+</div>
              <div className="text-xs uppercase tracking-wider text-emerald-300/80 font-medium">families planned</div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-800/50 p-6 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-serif font-bold text-white mb-1">4.9★</div>
              <div className="text-xs uppercase tracking-wider text-emerald-300/80 font-medium">average rating</div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-800/50 p-6 rounded-2xl text-center shadow-xl">
              <div className="text-3xl font-serif font-bold text-white mb-1">62</div>
              <div className="text-xs uppercase tracking-wider text-emerald-300/80 font-medium">destinations</div>
            </div>
          </div>

        </div>

        {/* 3. FOOTER TRUST BADGES */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm font-medium text-emerald-300/90 border-t border-white/10 pt-6 pb-2">
          <div className="flex items-center space-x-2">
            <FaCalendarDay className="text-emerald-400 w-3.5 h-3.5" />
            <span>Free 2-day preview</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCreditCard className="text-emerald-400 w-3.5 h-3.5" />
            <span>No credit card</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaShieldHeart className="text-emerald-400 w-3.5 h-3.5" />
            <span>100% satisfaction guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;