import { link } from "framer-motion/client";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineClock, HiOutlineUserGroup, HiOutlineArrowUpRight } from "react-icons/hi2";

function Destination() {
  const destinations = [
    {
      id: 1,
      img: "thailand.png",
      name: "Thailand",
      region: "Southeast Asia",
      duration: 10,
      description: "Bangkok chaos, Chiang Mai jungles, and southern island snorkeling.",
      age: "Ages 5+",
      bgClass: "bg-[#09523c]", // Dark teal/green fallback
    },
    {
      id: 2,
      img: "vietnam.png",
      name: "Vietnam",
      region: "Southeast Asia",
      duration: 12,
      description: "Ha Long Bay cruise, Hoi An lanterns, and the world's best street food.",
      age: "Ages 6+",
      bgClass: "bg-[#0c7052]", // Medium teal/green fallback
    },
    {
      id: 3,
      img: "cambodia.png",
      name: "Cambodia",
      region: "Southeast Asia",
      duration: 8,
      description: "Angkor Wat sunrise and Mekong river dolphin spotting.",
      age: "Ages 8+",
      bgClass: "bg-[#6c4212]", // Warm brown fallback
    },
    {
      id: 4,
      img: "costa-rica1.png",
      name: "Costa Rica",
      region: "Americas",
      duration: 7,
      description: "Volcano zip-lines, white-water rafting, and cloud forest wildlife.",
      age: "Ages 5+",
      bgClass: "bg-[#1d420b]", // Dark forest green fallback
    },
    {
      id: 5,
      img: "patagonia.png",
      name: "Patagonia",
      region: "Americas",
      duration: 10,
      description: "W Trek hiking, Perito Moreno glacier walk, and horseback riding.",
      age: "Ages 10+",
      bgClass: "bg-[#0f4682]", // Deep blue fallback
    },
    {
      id: 6,
      img: "iceland.png",
      name: "Iceland",
      region: "Europe",
      duration: 7,
      description: "Glacier hikes, Northern Lights, geysers, and geothermal swimming.",
      age: "Ages 6+",
      bgClass: "bg-[#252063]", // Midnight blue fallback
    },
    {
      id: 7,
      img: "tanzania.png",
      name: "Tanzania",
      region: "Africa",
      duration: 10,
      description: "Serengeti migration, Ngorongoro Crater, and Zanzibar beaches.",
      age: "Ages 6+",
      bgClass: "bg-[#7c3216]", // Burnt orange/red-brown fallback
    },
    {
      id: 8,
      img: "norway.png",
      name: "Norway",
      region: "Europe",
      duration: 8,
      description: "Sognefjord kayaking, Preikestolen hike, and Bergen funicular.",
      age: "Ages 8+",
      bgClass: "bg-[#033463]", // Dark blue fallback
    },
    {
      id: 9,
      img: "/bali.png",
      name: "Bali",
      region: "Southeast Asia",
      duration: 10,
      description: "Rice terrace cycling, volcano sunrise, and surf lessons for teens.",
      age: "Ages 6+",
      bgClass: "bg-[#424441]", // Charcoal gray fallback
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
            <Link href="/destination" >
            <div
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-emerald-100/60 shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 transform hover:-translate-y-0.5"
            >
              {/* Colored Banner section WITH background images */}
              <div className={`h-48 ${dest.bgClass} flex flex-col justify-between p-6 relative overflow-hidden`}>
                
                {/* Background Image Layer */}
                <img 
                  src={`${dest.img}`} // Maps to your public/images/ folder
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 pointer-events-none" />
                
                {/* Subtle graphic accent - remains functional over the gradient */}
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-white/10 transition-colors duration-300" />
                
                {/* Text Content over Image */}
                <span className="relative z-10 text-[10px] bg-white w-fit px-2 py-1 rounded-full text-[#0c4a34] font-bold tracking-widest uppercase block">
                  {dest.region}
                </span>
                
                <div className="relative z-10 flex justify-between items-end w-full">
                  <h2 className="text-white font-serif text-3xl font-medium tracking-wide drop-shadow-sm">
                    {dest.name}
                  </h2>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            </Link>            
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <button className="bg-[#0c4a34] cursor-pointer text-white font-bold py-3 px-6 rounded-full hover:bg-[#0e6245] transition-colors">
          Plan any destination — free preview ↗
        </button>
      </div>
    </div>
  );
}

export default Destination;