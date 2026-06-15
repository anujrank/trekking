'use client'
import React from 'react'
import { motion } from 'framer-motion'

function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0d1b2a] flex items-center justify-center">
      
      {/* 1. BACKGROUND LAYER: The Sky */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#3a86c8] via-[#205072] to-[#0d1b2a] z-0"
        aria-hidden="true"
      />

      {/* 2. ANIMATED TEXT LAYER */}
      <div className="absolute inset-0 flex items-center justify-center z-10 select-none pointer-events-none">
        <motion.h1 
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "0vh", opacity: 1 }}
          transition={{ 
            duration: 1.8, 
            ease: [0.2, 1, 0.3, 1], // Custom smooth cubic-bezier curve
            delay: 0.2 
          }}
          className="text-[15vw] font-black tracking-tighter text-white/40 uppercase font-sans text-center leading-none"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.6)",
          }}
        >
          DISCOVER
        </motion.h1>
      </div>

      {/* 3. FOREGROUND LAYER: The Mountain Peak */}
      {/* Note: For a true overlap, 'mountain-cutout.png' needs to be an image 
          where the sky is completely transparent, leaving only the mountain rocks.
      */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[65vh] bg-cover bg-bottom z-20"
        style={{ 
          backgroundImage: "url('/path-to-your-mountain-cutout.png')",
        }}
      />
      
    </div>
  )
}

export default Page