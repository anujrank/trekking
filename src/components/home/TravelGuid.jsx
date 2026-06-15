import React from "react";
import { HiOutlineBookOpen, HiOutlineUserGroup, HiOutlineArrowLongRight } from "react-icons/hi2";

function TravelGuide() {
  const travelGuide = [
    {
      id: 1,
      img: "/thailand-kids.png",
      category: "Southeast Asia",
      name: "Thailand with Kids: A 10-Day Family Adventure Itinerary",
      desc: "Bangkok, Chiang Mai elephant sanctuaries, and Koh Lanta sea kayaking for active families.",
      readTime: "10 min read",
      age: "Ages 5+",
    },
    {
      id: 2,
      img: "/vietnam-kids.png",
      category: "Southeast Asia",
      name: "Vietnam with Kids: A 12-Day Itinerary from Hanoi to Hoi An",
      desc: "Ha Long Bay cruise, ancient Hoi An lanterns, and incredible street food adventures.",
      readTime: "12 min read",
      age: "Ages 6+",
    },
    {
      id: 3,
      img: "/iceland-kids.png",
      category: "Europe",
      name: "Iceland with Kids: 7-Day Ring Road Family Adventure",
      desc: "Glacier hikes, ice caves, geysers, and geothermal swimming around Iceland.",
      readTime: "11 min read",
      age: "Ages 6+",
    },
    {
      id: 4,
      img: "/costa-rica.png",
      category: "Central America",
      name: "Costa Rica Family Adventure: The Ultimate 7-Day Itinerary",
      desc: "Arenal zip-lines, Monteverde cloud forests, and Manuel Antonio sea kayaking.",
      readTime: "10 min read",
      age: "Ages 5+",
    },
    {
      id: 5,
      img: "/southeast.png",
      category: "Southeast Asia",
      name: "Southeast Asia with Kids: The Complete Family Guide",
      desc: "Compare Thailand, Vietnam, Cambodia, and Bali to find the perfect family trip.",
      readTime: "14 min read",
      age: "All Ages",
    },
    {
      id: 6,
      img: "/top-10.png",
      category: "Best Of",
      name: "10 Best Adventure Travel Destinations for Active Families in 2026",
      desc: "Top-rated family adventure destinations with honest assessments and budgets.",
      readTime: "13 min read",
      age: "All Ages",
    },
  ];

  return (
    <div className="bg-[#f7faf9] py-20 md:py-28 text-emerald-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#0e6245]">
            Travel guides
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight">
            Family adventure guides
          </h1>
          <p className="text-emerald-900/70 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Day-by-day itineraries and destination overviews — built from 15 years on the road.
          </p>
        </div>

        {/* Guides Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {travelGuide.map((guide) => (
            <div 
              key={guide.id} 
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-100/60 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 transform hover:-translate-y-0.5"
            >
              {/* 1. Image Wrapper Container */}
              <div className="overflow-hidden aspect-[16/10] w-full bg-emerald-50 relative">
                <img 
                  src={guide.img} 
                  alt={guide.name} 
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Clean inline category pill overlaying the image block */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0e6245] shadow-sm">
                  {guide.category}
                </span>
              </div>

              {/* 2. Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 leading-snug group-hover:text-[#0e6245] transition-colors duration-200">
                    {guide.name}
                  </h3>
                  <p className="mt-3 text-sm text-emerald-900/70 font-light leading-relaxed line-clamp-3">
                    {guide.desc}
                  </p>
                </div>

                {/* 3. Footer Metadata */}
                <div className="mt-auto flex items-center justify-between text-xs font-medium text-emerald-800/80 border-t border-emerald-50/80 pt-4">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <HiOutlineBookOpen className="w-4 h-4 text-emerald-600" /> 
                    <span>{guide.readTime}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-[#ebf6f2] text-[#0e6245] px-2.5 py-1 rounded-md font-semibold text-[11px]">
                    <HiOutlineUserGroup className="w-3.5 h-3.5" />
                    <span>{guide.age}</span>
                  </div>
                </div>

                {/* Optional interactive read guide link */}
                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#0e6245] opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Read Full Guide</span>
                  <HiOutlineArrowLongRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TravelGuide;