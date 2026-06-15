import React, { useState } from "react";
import { HiOutlineClock, HiOutlineUserGroup, HiOutlineArrowUpRight } from "react-icons/hi2";

function Destination() {
  const destinations = [
    {
      id: 1,
      name: "Thailand",
      region: "Southeast Asia",
      duration: 10,
      description: "Bangkok chaos, Chiang Mai jungles, and southern island snorkeling.",
      age: "Ages 5+",
      bgClass: "bg-[#09523c]", // Dark teal/green
    },
    {
      id: 2,
      name: "Vietnam",
      region: "Southeast Asia",
      duration: 12,
      description: "Ha Long Bay cruise, Hoi An lanterns, and the world's best street food.",
      age: "Ages 6+",
      bgClass: "bg-[#0c7052]", // Medium teal/green
    },
    {
      id: 3,
      name: "Cambodia",
      region: "Southeast Asia",
      duration: 8,
      description: "Angkor Wat sunrise and Mekong river dolphin spotting.",
      age: "Ages 8+",
      bgClass: "bg-[#6c4212]", // Warm brown
    },
    {
      id: 4,
      name: "Costa Rica",
      region: "Americas",
      duration: 7,
      description: "Volcano zip-lines, white-water rafting, and cloud forest wildlife.",
      age: "Ages 5+",
      bgClass: "bg-[#1d420b]", // Dark forest green
    },
    {
      id: 5,
      name: "Patagonia",
      region: "Americas",
      duration: 10,
      description: "W Trek hiking, Perito Moreno glacier walk, and horseback riding.",
      age: "Ages 10+",
      bgClass: "bg-[#0f4682]", // Deep blue
    },
    {
      id: 6,
      name: "Iceland",
      region: "Europe",
      duration: 7,
      description: "Glacier hikes, Northern Lights, geysers, and geothermal swimming.",
      age: "Ages 6+",
      bgClass: "bg-[#252063]", // Midnight blue
    },
    {
      id: 7,
      name: "Tanzania",
      region: "Africa",
      duration: 10,
      description: "Serengeti migration, Ngorongoro Crater, and Zanzibar beaches.",
      age: "Ages 6+",
      bgClass: "bg-[#7c3216]", // Burnt orange/red-brown
    },
    {
      id: 8,
      name: "Norway",
      region: "Europe",
      duration: 8,
      description: "Sognefjord kayaking, Preikestolen hike, and Bergen funicular.",
      age: "Ages 8+",
      bgClass: "bg-[#033463]", // Dark blue
    },
    {
      id: 9,
      name: "Bali",
      region: "Southeast Asia",
      duration: 10,
      description: "Rice terrace cycling, volcano sunrise, and surf lessons for teens.",
      age: "Ages 6+",
      bgClass: "bg-[#424441]", // Charcoal gray
    },
  ];

  const regions = ["All regions", "Southeast Asia", "Americas", "Europe", "Africa"];
  const [selectedRegion, setSelectedRegion] = useState("All regions");

  // Filter functionality
  const filteredDestinations = selectedRegion === "All regions"
    ? destinations
    : destinations.filter(dest => dest.region === selectedRegion);

  return (
    <div className="bg-[#f7faf9] min-h-screen pb-24 text-emerald-950">
      {/* Header section */}
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-12 text-center space-y-4">
        <h3 className="text-[#0e6245] font-bold text-xs tracking-widest uppercase">
          Destinations
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight">
          Where will your family adventure?
        </h1>
        <p className="text-emerald-900/70 max-w-2xl mx-auto text-base sm:text-lg font-light">
          From jungle zip-lines to glacier hikes — 62 destinations, all with expert day-by-day planning.
        </p>

        {/* Filter Buttons */}
        <div className="pt-6 flex flex-wrap justify-center gap-2.5">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-5 py-2 text-xs sm:text-sm font-medium border rounded-full transition-all duration-200 cursor-pointer ${
                selectedRegion === region
                  ? "bg-[#0c4a34] text-white border-[#0c4a34] shadow-md shadow-emerald-950/10"
                  : "bg-white text-emerald-900/80 border-emerald-100 hover:bg-emerald-50/50 hover:text-emerald-950"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-emerald-100/60 shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 transform hover:-translate-y-0.5"
            >
              {/* Colored Banner section */}
              <div className={`h-40 ${dest.bgClass} flex flex-col justify-between p-6 relative overflow-hidden`}>
                {/* Subtle graphic accent inside the custom color box */}
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-white/10 transition-colors duration-300" />
                
                <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase block">
                  {dest.region}
                </span>
                
                <div className="flex justify-between items-end w-full">
                  <h2 className="text-white font-serif text-3xl font-medium tracking-wide">
                    {dest.name}
                  </h2>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiOutlineArrowUpRight className="text-white text-sm" />
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Styled Duration Indicator replaces text string */}
                  <div className="flex items-center space-x-1.5 text-emerald-700 font-medium text-xs">
                    <HiOutlineClock className="w-4 h-4" />
                    <span>{dest.duration} Day Complete Itinerary</span>
                  </div>
                  
                  <p className="text-emerald-950/70 text-sm leading-relaxed font-light">
                    {dest.description}
                  </p>
                </div>

                {/* Bottom Badges Section */}
                <div className="pt-4 border-t border-emerald-50/60 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 bg-[#ebf6f2] text-[#0e6245] px-3 py-1 rounded-lg">
                    <HiOutlineUserGroup className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold tracking-wide">
                      {dest.age}
                    </span>
                  </div>
                  
                  <span className="text-xs font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors flex items-center space-x-1">
                    <span>Explore Route</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destination;