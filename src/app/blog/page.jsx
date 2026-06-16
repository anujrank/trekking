"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import blogs from "@/app/blog/blogdata";

function Page() {
  return (
    <>
      {/* =========================================================================
          1. HERO SECTION (With Black Contrast Overlay)
          ========================================================================= */}
      <div className="relative w-full h-screen overflow-hidden bg-[#0d1b2a] flex flex-col justify-between">
        {/* Unified Background Gradient Layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#3a86c8] via-[#1a3d54] to-[#0d1b2a] z-0" 
          aria-hidden="true" 
        />
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[120px] top-1/4 left-1/2 -translate-x-1/2 z-5 pointer-events-none" />

        {/* Foreground Artwork Asset */}
        <div
          className="absolute inset-0 bg-cover bg-bottom z-10 pointer-events-none mix-blend-lighten"
          style={{ backgroundImage: "url('/blog.png')" }}
        />

        {/* Dynamic Dark Contrast Overlay (Improves text readability) */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-15 pointer-events-none" />

        {/* Cinematic Animated Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 select-none pointer-events-none px-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/80 tracking-[0.4em] uppercase text-xs md:text-sm mb-4 font-semibold font-sans drop-shadow-sm"
          >
            Stories & Perspectives
          </motion.span>
          
          <motion.h1
            initial={{ y: "30vh", opacity: 0 }}
            animate={{ y: "0vh", opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[13vw] font-black tracking-tight text-white uppercase font-sans text-center leading-none drop-shadow-2xl"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)" }}
          >
            THE BLOG
          </motion.h1>
        </div>

        {/* Bottom Blend Mask to catch the background change cleanly */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#f4f6f9] via-[#f4f6f9]/40 to-transparent z-25" />
      </div>

      {/* =========================================================================
          2. BODY & CONTENT GRID SECTION
          ========================================================================= */}
      <div className="w-full min-h-screen text-[#022c22] bg-[#f4f6f9] px-6 py-24 md:py-32">
        
        {/* Section Header Context */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3.5xl md:text-5xl text-[#022c22] font-black tracking-tight mb-5 leading-tight">
            Latest Travel Insights
          </h2>
          <p className="text-base md:text-lg text-emerald-950/70 max-w-xl mx-auto leading-relaxed font-medium">
            Read comprehensive guides, global trends, and firsthand accounts penned by our expert adventurers worldwide.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((item) => (
            <Link key={item.id} href={`/blog/${item.slug}`} className="block group">
              <div className="flex flex-col h-full justify-between bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(2,44,34,0.04)] hover:shadow-[0_20px_35px_rgba(2,44,34,0.09)] hover:-translate-y-1 border border-emerald-950/5 transition-all duration-300">
                
                <div>
                  {/* Aspect Ratio Controlled Image Wrapper */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    
                    {/* Floating Region Label */}
                    {item.region && (
                      <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase bg-white/90 text-[#022c22] px-2.5 py-1 rounded-md backdrop-blur-sm shadow-sm">
                        {item.region}
                      </span>
                    )}
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6">
                    <h3 className="mb-3 line-clamp-2 text-xl font-extrabold text-[#022c22] group-hover:text-[#0F6E56] transition-colors duration-200 leading-snug">
                      {item.title}
                    </h3>

                    <p className="line-clamp-3 text-sm text-emerald-950/70 leading-relaxed font-medium">
                      {item.dis}
                    </p>
                  </div>
                </div>

                {/* Card Footer Structural Layout */}
                <div className="px-6 pb-6 pt-4 mt-auto flex items-center justify-between border-t border-slate-50 text-xs font-semibold text-emerald-950/50">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="h-4 w-4 stroke-[2.5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#0F6E56"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item.time}</span>
                  </div>

                  {item.age && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 font-bold text-[11px]">
                      {item.age}
                    </span>
                  )}
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  );
}

export default Page;