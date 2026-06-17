"use client";
import React from "react";
import { motion } from "framer-motion";
import Pricing from "@/components/home/Pricing";
import { TiStarFullOutline } from "react-icons/ti";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { TbBusFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
function Page() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      review:
        '"The itinerary accounted for three kids aged 7, 10, and 13 — different energy levels and our oldest with a nut allergy. I cried at the zip-line because it was so perfect. Worth every penny."',
      place: "Costa Rica · Adventurer package",
    },
    {
      id: 2,
      name: "James R.",
      review:
        '"I was skeptical of an AI travel planner but the 2-day free preview was SO detailed that I immediately bought the full package. The restaurant suggestions alone saved us from three tourist traps."',
      place: "Thailand · Adventurer package",
    },
    {
      id: 3,
      name: "The Chen Family",
      review:
        '"We have done 4 trips through Adventure Travel Co. — Iceland, Patagonia, Japan, and Tanzania. Every time the planning gets better. Alex knows our family now."',
      place: "4 trips · Adventurer package",
    },
  ];
  return (
    <>
      {/* =========================================================================
          1. HERO SECTION (Matched perfectly with Destination Hero)
          ========================================================================= */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden bg-[#0d1b2a] flex items-center justify-center">
        {/* Sky/Atmosphere Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#3a86c8] via-[#1a3d54] to-[#0d1b2a] z-0"
          aria-hidden="true"
        />

        {/* Radial Glow Spotlight - Fixed z-5 to z-[5] */}
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[120px] top-1/4 left-1/2 -translate-x-1/2 z-[5] pointer-events-none" />

        {/* Animated Typography Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 select-none pointer-events-none px-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/70 tracking-[0.4em] bg-[#022c22] py-1 px-5 rounded-full flex items-center uppercase text-xs md:text-sm mb-4 font-semibold gap-2"
          >
            <TiStarFullOutline className="hidden lg:flex text-2xl text-yellow-400" /> Transparent Plans
            <TiStarFullOutline className="hidden lg:flex text-2xl text-yellow-400" />
          </motion.span>
          <motion.h1
            initial={{ y: "40vh", opacity: 0 }}
            animate={{ y: "0vh", opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[13vw] font-black tracking-tight text-white uppercase text-center leading-none drop-shadow-2xl"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)" }}
          >
            BOOK NOW
          </motion.h1>
        </div>

        {/* Foreground Mountain Landscape Vector Silhouette */}
        <div
          className="absolute inset-x-0 bottom-0 h-full bg-cover bg-bottom z-10 pointer-events-none mix-blend-lighten"
          style={{ backgroundImage: "url('/pricing-hero.png')" }}
        />

        {/* Soft Blend Transition to Body - Fixed z-25 to z-[25] */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f4f6f9] to-transparent z-[25]" />
      </div>

      {/* =========================================================================
          2. BODY SECTION (Pricing Component Wrap)
          ========================================================================= */}
      <div className="w-full min-h-screen text-[#022c22] bg-[#f4f6f9] px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <Pricing />
        </div>
      </div>
      <div className="relative bg-[url('/pricing.png')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-20 text-center text-2xl font-semibold text-white h-[400px] p-20">
          <div className="flex flex-col gap-5 justify-center items-center border-3 border-white/60 rounded-lg h-full">
            <FaMapMarkedAlt className="text-5xl" />
            <h2>Great Destination</h2>
          </div>

          <div className="flex flex-col gap-5 justify-center  items-center border-3 border-white/60 rounded-lg h-full">
            <FaCameraRetro className="text-5xl" />
            <h2>Amazing View</h2>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center border-3 border-white/60 rounded-lg h-full">
            <GiCampingTent className="text-5xl" />
            <h2>Comfortable Camp</h2>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center border-3 border-white/60 rounded-lg h-full">
            <TbBusFilled className="text-5xl" />
            <h2>Awesome Journey</h2>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Side: Header Content */}
          <div className="space-y-6 lg:sticky lg:top-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                What Our Clients Say
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-base">
              Discover why travelers trust us for unforgettable journeys. Read
              real stories and experiences shared by our happy clients.
            </p>
            <button className="inline-flex items-center justify-center bg-[#022c22] text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-950 transition-colors duration-200 shadow-sm">
              Read More Stories
            </button>
          </div>

          {/* Right Side: Testimonials Grid */}
          <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col justify-between bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Star Rating */}
                    <div className="flex gap-1 text-amber-400 mb-4">
                      <FaStar size={16} />
                      <FaStar size={16} />
                      <FaStar size={16} />
                      <FaStar size={16} />
                      <FaStar size={16} />
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-600 leading-relaxed italic text-sm sm:text-base">
                      "{testimonial.review}"
                    </p>
                  </div>

                  {/* User Info Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs font-medium text-emerald-700 mt-0.5">
                        {testimonial.place}
                      </p>
                    </div>

                    {/* Optional: Simple decorative quotation mark */}
                    <span className="text-4xl font-serif text-slate-200 pointer-events-none select-none leading-none -mt-4">
                      ”
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
