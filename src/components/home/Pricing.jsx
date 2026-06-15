import React from 'react';

function Pricing() {
  return (
    <div className='bg-white font-sans text-[#1a2b23] py-16 px-4 max-w-6xl mx-auto'>
      {/* Header Section */}
      <div className='text-center space-y-4 max-w-xl mx-auto mb-16'>
        <h3 className='uppercase text-[#0e6245] text-xs font-bold tracking-widest'>Pricing</h3>
        <h1 className='text-4xl md:text-5xl font-bold tracking-tight font-serif'>Simple, transparent pricing</h1>
        <p className='text-gray-600 text-sm leading-relaxed'>
          Start free. Upgrade when you're ready. Every package backed by a 100% satisfaction guarantee.
        </p>
      </div>

      {/* Cards Container */}
      <div className='flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto mb-10'>
        
        {/* Card 1: Explorer */}
        <div className='flex-1 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between text-left relative bg-white'>
          <div>
            <h3 className='uppercase text-xs font-bold tracking-widest text-gray-500 mb-4'>Explorer</h3>
            <div className='flex items-baseline mb-1'>
              <span className='text-5xl font-bold font-serif'>$0</span>
            </div>
            <h4 className='text-xs text-gray-500 font-medium mb-6'>Free forever</h4>
            <p className='text-gray-600 text-sm leading-relaxed pb-6 border-b border-gray-100'>
              A full Day 1 & 2 preview to see exactly how we plan — no commitment needed.
            </p>
            
            <ul className='space-y-3 my-6 text-sm text-gray-700'>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Day 1–2 itinerary preview</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Neighborhood breakdown</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>3 restaurant picks</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Activity timing suggestions</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>AI chat — 5 messages</span>
              </li>
            </ul>
          </div>
          
          <button className='w-full border border-[#0e6245] cursor-pointer text-[#0e6245] font-semibold py-3 px-4 rounded-full hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1 mt-4 text-sm'>
            Start free <span className='text-xs'>↗</span>
          </button>
        </div>

        {/* Card 2: Adventurer */}
        <div className='flex-1 border-2 border-[#0e6245] rounded-2xl p-8 flex flex-col justify-between text-left relative bg-white shadow-sm pt-12'>
          {/* Badge */}
          <span className='absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0e6245] text-white text-[11px] font-bold py-1 px-3.5 rounded-full tracking-wide whitespace-nowrap'>
            Most popular
          </span>

          <div>
            <h3 className='uppercase text-xs font-bold tracking-widest text-gray-500 mb-4'>Adventurer</h3>
            <div className='flex items-baseline mb-1'>
              <span className='text-5xl font-bold font-serif'>$349</span>
            </div>
            <h4 className='text-xs text-gray-500 font-medium mb-6'>per itinerary</h4>
            <p className='text-gray-600 text-sm leading-relaxed pb-6 border-b border-gray-100'>
              The complete trip blueprint — every day planned, every meal considered, hotels and gear included.
            </p>
            
            <ul className='space-y-3 my-6 text-sm text-gray-700'>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Full day-by-day itinerary</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Neighborhood-by-neighborhood</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>All restaurant picks (all budgets)</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Transport between every stop</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Insider tips & local secrets</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Hotel & lodge recommendations</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Downloadable PDF itinerary</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Unlimited AI chat revisions</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Gear packing checklist</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='text-[#0e6245] mt-0.5'>✓</span>
                <span>Async message support during trip</span>
              </li>
            </ul>
          </div>
          
          <button className='w-full bg-[#0e6245] cursor-pointer text-white font-semibold py-3 px-4 rounded-full hover:bg-[#0b4d36] transition-colors flex items-center justify-center gap-1 mt-4 text-sm shadow-md'>
            Get full itinerary <span className='text-xs'>↗</span>
          </button>
        </div>

      </div>

      {/* Bottom Guarantee Banner */}
      <div className='max-w-4xl mx-auto bg-[#e6f4f0] text-[#0e6245] text-xs py-3.5 px-6 rounded-lg text-center leading-relaxed font-medium shadow-sm'>
        ✓ 100% satisfaction guarantee — if your itinerary doesn't meet your needs, we'll revise it until it does or refund in full within 48 hours.
      </div>
    </div>
  );
}

export default Pricing;