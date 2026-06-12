import React from 'react'

function CtaSection() {
  return (
    <section 
      // Added 'group' class here so children can react when the user hovers over the section
      className="group relative min-h-[500px] md:min-h-[550px] lg:min-h-[600px] w-full bg-cover bg-center bg-no-repeat flex items-center px-4 md:px-12 lg:px-24 py-12 font-sans selection:bg-slate-900 selection:text-white bg-fixed overflow-hidden"
      style={{ 
        // Replace with your real public folder image or background asset path
        backgroundImage: `url('/cta.png')` 
      }}
    >
      {/* Container to restrict max width of the layout alignment */}
      <div className="max-w-7xl mx-auto w-full flex justify-start relative z-10">
        
        {/* Floating Dark Content Card with Animated Border on Section Hover */}
        <div className="relative bg-[#1e1e1e]/90 text-white p-8 md:p-12 rounded-[2.2rem] max-w-xl md:max-w-2xl lg:max-w-[640px] shadow-2xl space-y-6 overflow-hidden isolate">
          
          {/* --- ANIMATED BORDER EFFECT --- */}
          {/* 1. The Moving Gradient Layer (Invisible by default, spins on section hover) */}
          <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 bg-[conic-gradient(from_0deg,transparent_40%,#e5a93b_50%,transparent_60%)] animate-[spin_4s_linear_infinite]" />
          
          {/* 2. The Static Mask Layer (Creates the 2px border gap and matches background) */}
          <div className="absolute inset-[10px] -z-10 bg-[#1e1e1e]/95 backdrop-blur-xs rounded-[2.1rem]" />

          {/* 3. Fallback White Border (Disappears smoothly on hover when animation kicks in) */}
          <div className="absolute inset-0 -z-10 rounded-[2.2rem] group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
          {/* ------------------------------- */}

          {/* Headline with varying font weights matching the image style exactly */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.2] tracking-tight font-light text-slate-100">
            <span className="font-extrabold text-white">Exclusive Trekking</span> discounts{" "}
            <span className="font-extrabold text-white">special offers by Adventure</span> Family{" "}
            <span className="font-extrabold text-white">Travel</span> Agency
          </h2>

          {/* Descriptive Subtext */}
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal max-w-lg">
            Discover Incredible India with Bavro! Get exclusive discounts on Himachal, Kashmir, Rajasthan, Kerala, Goa, and Uttarakhand tour packages. Limited-time offers available.
          </p>

          {/* Interactive Footer Row: Button and Badge Text */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
            
            {/* Pill CTA Button */}
            <button className="bg-[#e5a93b] hover:bg-black text-white hover:border-2 hover:border-[#e5a93b] text-xs font-bold py-3.5 px-7 rounded-lg tracking-wide transition-all cursor-pointer duration-300 shadow-md shadow-black/20 shrink-0 text-center">
              Claim your Offer Now
            </button>

            {/* Special Pricing Text Tag */}
            <div className="text-[#e5a93b] text-base md:text-lg tracking-tight">
              <span className="font-bold">Buy 1, Get 1</span> <span className="text-white text-2xl font-light">50% Off!</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default CtaSection