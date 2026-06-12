import React from 'react'

function CtaSection() {
  return (
    <section 
      className="relative min-h-[500px] md:min-h-[550px] lg:min-h-[600px] w-full bg-cover bg-center bg-no-repeat flex items-center px-4 md:px-12 lg:px-24 py-12 font-sans selection:bg-slate-900 selection:text-white bg-fixed"
      style={{ 
        // Replace with your real public folder image or background asset path
        backgroundImage: `url('/cta.png')` 
      }}
    >
      {/* Container to restrict max width of the layout alignment */}
      <div className="max-w-7xl mx-auto w-full flex justify-start">
        
        {/* Floating Dark Content Card mimicking image_a09306.png */}
        <div className="bg-[#1e1e1e]/95 backdrop-blur-xs text-white p-8 md:p-12 rounded-[2.2rem] max-w-xl md:max-w-2xl lg:max-w-[640px] shadow-2xl space-y-6 border border-white/5">
          
          {/* Headline with varying font weights matching the image style exactly */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.2] tracking-tight font-light text-slate-100">
            <span className="font-extrabold text-white">Exclusive Trekking</span> discounts
            <span className="font-extrabold text-white"> special offers by Adventure</span> Family
            <span className="font-extrabold text-white"> Travel</span> Agency
          </h2>

          {/* Descriptive Subtext */}
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal max-w-lg">
            Discover Incredible India with Bavro! Get exclusive discounts on Himachal, Kashmir, Rajasthan, Kerala, Goa, and Uttarakhand tour packages. Limited-time offers available.
          </p>

          {/* Interactive Footer Row: Button and Badge Text */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
            
            {/* Pill CTA Button */}
            <button className="bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold py-3.5 px-7 rounded-full tracking-wide transition-all cursor-pointer duration-300 shadow-md shadow-black/20 shrink-0 text-center">
              Claim your Offer Now
            </button>

            {/* Special Pricing Text Tag */}
            <div className="text-white text-base md:text-lg tracking-tight">
              <span className="font-bold">Buy 1, Get 1</span> <span className="text-slate-300 font-light">50% Off!</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default CtaSection