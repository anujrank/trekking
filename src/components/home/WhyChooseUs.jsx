import React from "react";
import { HiOutlineMapPin, HiOutlineClock, HiOutlineCake, HiOutlineSparkles } from "react-icons/hi2";

function WhyChooseUs() {
  return (
    <div className="bg-white text-emerald-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 space-y-12 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-emerald-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
            Why families choose us
          </h3>
          <h1 className="text-3xl sm:text-4xl font-serif font-medium tracking-tight">
            Adventure planning is hard. We've already done the hard part.
          </h1>
          <p className="text-emerald-900/70 text-base md:text-lg leading-relaxed font-light">
            Most families spend 40+ hours researching a trip and still land on
            generic itineraries not built for their kids' ages, energy levels, or
            budget.
          </p>
        </div>

        {/* Core Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left pt-4">
          
          {/* Card 1 */}
          <div className="flex flex-col space-y-4 border border-emerald-100 bg-emerald-50/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/5">
            <div className="h-10 w-10 flex justify-center items-center rounded-xl bg-emerald-100">
              <HiOutlineMapPin className="text-xl text-emerald-800" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-emerald-900">
              Neighborhood by neighborhood
            </h3>
            <p className="text-emerald-900/70 text-sm leading-relaxed">
              Exact areas, logical daily flow, no backtracking. You always know
              exactly where you are and where you're heading next.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col space-y-4 border border-emerald-100 bg-emerald-50/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/5">
            <div className="h-10 w-10 flex justify-center items-center rounded-xl bg-emerald-100">
              <HiOutlineClock className="text-xl text-emerald-800" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-emerald-900">
              Timed to the minute
            </h3>
            <p className="text-emerald-900/70 text-sm leading-relaxed">
              Realistic schedules that include the 20 minutes it takes to get everyone out the door. No itinerary that assumes perfect execution.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col space-y-4 border border-emerald-100 bg-emerald-50/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/5">
            <div className="h-10 w-10 flex justify-center items-center rounded-xl bg-emerald-100">
              <HiOutlineCake className="text-xl text-emerald-800" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-emerald-900">
              Restaurants kids will eat
            </h3>
            <p className="text-emerald-900/70 text-sm leading-relaxed">
              Every pick chosen for flavor, price, allergy-friendliness, and whether it survives a picky 9-year-old. Every dietary restriction covered.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col space-y-4 border border-emerald-100 bg-emerald-50/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/5">
            <div className="h-10 w-10 flex justify-center items-center rounded-xl bg-emerald-100">
              <HiOutlineSparkles className="text-xl text-emerald-800" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-emerald-900">
              Insider tips that matter
            </h3>
            <p className="text-emerald-900/70 text-sm leading-relaxed">
              The waterfall with no entrance fee. The bus locals actually take. The trick to avoiding the crowds at peak attractions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;