"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Process from "@/components/home/Process";
import { MdScubaDiving } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";
import { MdForest } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { GiIsland } from "react-icons/gi";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { TiStarFullOutline } from "react-icons/ti";
function Page() {
  const destinations = [
    {
      id: 1,
      img: "/thailand.png",
      name: "Thailand",
      region: "Southeast Asia",
      duration: 10,
      price: "$780",
      age: "Ages 5+",
      bgClass: "bg-[#09523c]",
    },
    {
      id: 2,
      img: "/vietnam.png",
      name: "Vietnam",
      region: "Southeast Asia",
      duration: 12,
      price: "$860",
      age: "Ages 6+",
      bgClass: "bg-[#0c7052]",
    },
    {
      id: 3,
      img: "/cambodia.png",
      name: "Cambodia",
      region: "Southeast Asia",
      duration: 8,
      price: "$660",
      age: "Ages 8+",
      bgClass: "bg-[#6c4212]",
    },
    {
      id: 4,
      img: "/costa-rica.png",
      name: "Costa Rica",
      region: "Americas",
      duration: 7,
      price: "$1,500",
      age: "Ages 5+",
      bgClass: "bg-[#1d420b]",
    },
    {
      id: 5,
      img: "/patagonia.png",
      name: "Patagonia",
      region: "Americas",
      duration: 10,
      price: "$2,150",
      age: "Ages 10+",
      bgClass: "bg-[#0f4682]",
    },
    {
      id: 6,
      img: "/iceland.png",
      name: "Iceland",
      region: "Europe",
      duration: 7,
      price: "$1,900",
      age: "Ages 6+",
      bgClass: "bg-[#252063]",
    },
    {
      id: 7,
      img: "/tanzania.png",
      name: "Tanzania",
      region: "Africa",
      duration: 10,
      price: "$1,700",
      age: "Ages 6+",
      bgClass: "bg-[#7c3216]",
    },
    {
      id: 8,
      img: "/norway.png",
      name: "Norway",
      region: "Europe",
      duration: 8,
      price: "$1,850",
      age: "Ages 8+",
      bgClass: "bg-[#033463]",
    },
    {
      id: 9,
      img: "/bali.png",
      name: "Bali",
      region: "Southeast Asia",
      duration: 10,
      price: "$820",
      age: "Ages 6+",
      bgClass: "bg-[#424441]",
    },
    {
      id: 10,
      img: "/nepal.png",
      name: "Nepal",
      region: "South Asia",
      duration: 9,
      price: "$540",
      age: "Ages 8+",
      bgClass: "bg-[#134e4a]",
    },
    {
      id: 11,
      img: "/switzerland.png",
      name: "Switzerland",
      region: "Europe",
      duration: 8,
      price: "$2,100",
      age: "Ages 6+",
      bgClass: "bg-[#1e3a8a]",
    },
    {
      id: 12,
      img: "/new-zealand.png",
      name: "New Zealand",
      region: "Oceania",
      duration: 12,
      price: "$2,500",
      age: "Ages 8+",
      bgClass: "bg-[#14532d]",
    },
    {
      id: 13,
      img: "/peru.png",
      name: "Peru",
      region: "South America",
      duration: 11,
      price: "$1,650",
      age: "Ages 10+",
      bgClass: "bg-[#7f1d1d]",
    },
    {
      id: 14,
      img: "/bhutan.png",
      name: "Bhutan",
      region: "South Asia",
      duration: 6,
      price: "$620",
      age: "Ages 5+",
      bgClass: "bg-[#854d0e]",
    },
    {
      id: 15,
      img: "/japan.png",
      name: "Japan",
      region: "East Asia",
      duration: 9,
      price: "$1,450",
      age: "Ages 6+",
      bgClass: "bg-[#4c1d95]",
    },
  ];

  // 1. FILTER STATES (Pure JS - Syntax error resolved)
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  const [maxDuration, setMaxDuration] = useState("");

  // 2. EXTRACT UNIQUE REGIONS
  const regions = useMemo(() => {
    const allRegions = destinations.map((d) => d.region);
    return ["All", ...Array.from(new Set(allRegions))];
  }, [destinations]);

  // 3. DYNAMIC FILTERING LOGIC
  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) => {
      // Region Match
      const matchesRegion = selectedRegion === "All" || item.region === selectedRegion;

      // Price Match
      const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
      const matchesPrice = maxPrice === "" || numericPrice <= maxPrice;

      // Duration Match
      const matchesDuration = maxDuration === "" || item.duration <= maxDuration;

      return matchesRegion && matchesPrice && matchesDuration;
    });
  }, [selectedRegion, maxPrice, maxDuration, destinations]);

  // RESET HANDLER
  const handleResetFilters = () => {
    setSelectedRegion("All");
    setMaxPrice("");
    setMaxDuration("");
  };

  return (
    <>
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden bg-[#0d1b2a] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a86c8] via-[#1a3d54] to-[#0d1b2a] z-0" aria-hidden="true" />
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[120px] top-1/4 left-1/2 -translate-x-1/2 z-5 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 select-none pointer-events-none px-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white tracking-[0.4em] uppercase text-xs md:text-sm mb-4 font-semibold  bg-[#022c22] py-1 px-5 rounded-full flex gap-2 items-center"
          >
            <TiStarFullOutline className="hidden lg:flex text-2xl text-yellow-400"/>Unforgettable Journeys<TiStarFullOutline className="hidden lg:flex text-2xl text-yellow-400"/>
          </motion.span>
          <motion.h1
            initial={{ y: "40vh", opacity: 0 }}
            animate={{ y: "0vh", opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[13vw] font-black tracking-tight text-white uppercase text-center leading-none drop-shadow-2xl"
            // style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)" }}
          >
            DISCOVER
          </motion.h1>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-full bg-cover bg-bottom z-10 pointer-events-none mix-blend-lighten"
          style={{ backgroundImage: "url('/destination.png')" }}
        />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f4f6f9] to-transparent z-25" />
      </div>

      {/* =========================================================================
          2. BODY SECTION
          ========================================================================= */}
      <div className="w-full min-h-screen text-[#022c22] bg-[#f4f6f9] px-6 py-24 md:py-32">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3.5xl md:text-5xl text-[#022c22] font-black tracking-tight mb-5 leading-tight">
            Exploring Our Top Destinations
          </h2>
          <p className="text-base md:text-lg text-emerald-950/70 max-w-xl mx-auto leading-relaxed font-medium">
            Discover breathtaking trekking routes, stunning landscapes, and unforgettable adventures across the world's most beautiful destinations.
          </p>
        </div>

        {/* INPUT AND CONTROL FILTER BAR */}
        <div className="max-w-7xl mx-auto bg-white border border-emerald-950/5 rounded-2xl shadow-[0_4px_20px_rgba(2,44,34,0.03)] p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            
            {/* Filter by Region (Dropdown) */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-950/60">
                Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-[#f4f6f9] text-[#022c22] font-semibold text-sm rounded-xl px-4 py-3 border border-transparent focus:border-[#0F6E56] focus:bg-white outline-none transition duration-200 cursor-pointer"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Max Price (Numeric Entry) */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-950/60">
                Max Price ($)
              </label>
              <input
                type="number"
                placeholder="e.g. 1500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
                className="w-full bg-[#f4f6f9] text-[#022c22] font-semibold text-sm rounded-xl px-4 py-3 border border-transparent focus:border-[#0F6E56] focus:bg-white outline-none transition duration-200"
              />
            </div>

            {/* Filter by Max Days (Numeric Entry) */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-950/60">
                Max Duration (Days)
              </label>
              <input
                type="number"
                placeholder="e.g. 10"
                value={maxDuration}
                onChange={(e) => setMaxDuration(e.target.value === "" ? "" : Number(e.target.value))}
                className="w-full bg-[#f4f6f9] text-[#022c22] font-semibold text-sm rounded-xl px-4 py-3 border border-transparent focus:border-[#0F6E56] focus:bg-white outline-none transition duration-200"
              />
            </div>

            {/* Reset Button */}
            <div>
              <button
                type="button"
                onClick={handleResetFilters}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-xl transition-all duration-200 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>

          </div>
        </div>

        {/* Destination Cards Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(2,44,34,0.04)] hover:shadow-[0_20px_35px_rgba(2,44,34,0.09)] hover:-translate-y-1 border border-emerald-950/5 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Image Wrap */}
                  <div className={`h-52 w-full ${item.bgClass} relative overflow-hidden`}>
                    <img
                      src={`${item.img}`}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase bg-white/90 text-[#022c22] px-2.5 py-1 rounded-md backdrop-blur-sm shadow-sm">
                      {item.region}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-[#022c22] group-hover:text-[#0F6E56] transition-colors duration-200">
                      {item.name}
                    </h3>
                    <div className="flex justify-between mt-4 text-xs font-semibold text-emerald-950/50 border-b border-[#022c22]/10 pb-4">
                      <span className="flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0F6E56]" />
                        {item.duration} Days
                      </span>
                      <span>{item.age}</span>
                    </div>
                  </div>
                </div>

                {/* Lower Details Bar */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Starting From
                    </p>
                    <h4 className="text-xl font-black text-[#0F6E56] mt-0.5">
                      {item.price}
                    </h4>
                  </div>
                  <button className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#022c22] rounded-xl hover:bg-[#0F6E56] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State Handling */
          <div className="text-center py-16 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-emerald-950 mb-2">No Matching Destinations</h3>
            <p className="text-sm text-emerald-950/60 mb-6">
              We couldn't find matches for this custom criteria. Try reducing inputs or resetting filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#0F6E56] text-white rounded-xl hover:bg-[#022c22] transition-colors duration-200 cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Process Section Spacer */}
        <div className="mt-32 max-w-7xl mx-auto">
          <Process />
        </div>

        {/* Features Sub-section */}
        <div className="px-6 bg-[url('/destination.png')] bg-cover bg-center bg-fixed py-16 text-center rounded-3xl overflow-hidden mt-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            What We Offer
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:bg-[#022c22] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="p-4 bg-emerald-50 rounded-full mb-4 text-[#022c22] group-hover:bg-emerald-800/30 group-hover:text-emerald-400 transition-colors duration-300">
                <FaMountainSun className="text-4xl" />
              </div>
              <h4 className="text-xl font-bold text-slate-700 group-hover:text-white transition-colors duration-300">
                Mountain Trip
              </h4>
            </div>

            <div className="group flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:bg-[#022c22] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="p-4 bg-emerald-50 rounded-full mb-4 text-[#022c22] group-hover:bg-emerald-800/30 group-hover:text-emerald-400 transition-colors duration-300">
                <MdForest className="text-4xl" />
              </div>
              <h4 className="text-xl font-bold text-slate-700 group-hover:text-white transition-colors duration-300">
                Forest Trip
              </h4>
            </div>

            <div className="group flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:bg-[#022c22] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="p-4 bg-emerald-50 rounded-full mb-4 text-[#022c22] group-hover:bg-emerald-800/30 group-hover:text-emerald-400 transition-colors duration-300">
                <BsFillSuitcase2Fill className="text-4xl" />
              </div>
              <h4 className="text-xl font-bold text-slate-700 group-hover:text-white transition-colors duration-300">
                Private Trip
              </h4>
            </div>

            <div className="group flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:bg-[#022c22] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="p-4 bg-emerald-50 rounded-full mb-4 text-[#022c22] group-hover:bg-emerald-800/30 group-hover:text-emerald-400 transition-colors duration-300">
                <GiCampingTent className="text-4xl" />
              </div>
              <h4 className="text-xl font-bold text-slate-700 group-hover:text-white transition-colors duration-300">
                Camping Trip
              </h4>
            </div>

            <div className="group flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:bg-[#022c22] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="p-4 bg-emerald-50 rounded-full mb-4 text-[#022c22] group-hover:bg-emerald-800/30 group-hover:text-emerald-400 transition-colors duration-300">
                <GiIsland className="text-4xl" />
              </div>
              <h4 className="text-xl font-bold text-slate-700 group-hover:text-white transition-colors duration-300">
                Island Trip
              </h4>
            </div>

            <div className="group flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:bg-[#022c22] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="p-4 bg-emerald-50 rounded-full mb-4 text-[#022c22] group-hover:bg-emerald-800/30 group-hover:text-emerald-400 transition-colors duration-300">
                <MdScubaDiving className="text-4xl" />
              </div>
              <h4 className="text-xl font-bold text-slate-700 group-hover:text-white transition-colors duration-300">
                Diving Trip
              </h4>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Page;