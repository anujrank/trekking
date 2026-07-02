"use client";
import React from "react";
import { motion } from "framer-motion";
import { TiStarFullOutline } from "react-icons/ti";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

function Page() {
  return (
    <div className="min-h-screen bg-[#f4f6f9] text-[#1a2d42]">
      {/* =========================================================================
          1. HERO SECTION (Identical to Main Page)
          ========================================================================= */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden bg-[#0d1b2a] flex items-center justify-center">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#3a86c8] via-[#1a3d54] to-[#0d1b2a] z-0"
          aria-hidden="true"
        />

        {/* Glowing Circle Element */}
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[120px] top-1/4 left-1/2 -translate-x-1/2 z-[5] pointer-events-none" />

        {/* Foreground Animated Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 select-none px-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white tracking-[0.4em] uppercase text-xs md:text-sm mb-4 font-semibold font-sans bg-[#022c22] py-1.5 px-5 rounded-full flex items-center gap-2 shadow-lg"
          >
            <TiStarFullOutline className="hidden lg:flex text-xl text-yellow-400" />
            <span>Get In Touch</span>
            <TiStarFullOutline className="hidden lg:flex text-xl text-yellow-400" />
          </motion.span>

          <motion.h1
            initial={{ y: "40vh", opacity: 0 }}
            animate={{ y: "0vh", opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[13vw] font-black text-white uppercase text-center drop-shadow-2xl tracking-tight leading-none"
          >
            contact us
          </motion.h1>
        </div>

        {/* Bottom Horizon Silhouette Image */}
        <div
          className="absolute inset-x-0 bottom-0 h-full bg-cover bg-bottom z-10 pointer-events-none mix-blend-lighten"
          style={{ backgroundImage: "url('/destination.png')" }}
        />

        {/* Transition Blend Layer to Main Page Body */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f4f6f9] to-transparent z-[25]" />
      </div>

      {/* =========================================================================
          2. BODY SECTION 
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Info Card Panel */}
          <div className="lg:col-span-2 space-y-8 bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0d1b2a]">
                We’d love to help
              </h2>
              <p className="mt-3 text-slate-500 leading-relaxed">
                Tell us about your needs, and our team of experts will get back
                to you shortly.
              </p>
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-6">
              {/* Phone item */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-[#0F6E56]">
                  <HiOutlinePhone className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Phone
                  </h3>
                  <p className="text-lg font-medium text-slate-800 mt-0.5 hover:text-[#0F6E56] transition cursor-pointer">
                    +1 (234) 567-890
                  </p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-[#0F6E56]">
                  <HiOutlineMail className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Email
                  </h3>
                  <p className="text-lg font-medium text-slate-800 mt-0.5 hover:text-[#0F6E56] transition cursor-pointer">
                    example@gmail.com
                  </p>
                </div>
              </div>

              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-[#0F6E56]">
                  <HiOutlineLocationMarker className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Address
                  </h3>
                  <p className="text-lg font-medium text-slate-800 mt-0.5 leading-relaxed">
                    115 E Main street, suite 13H Buford, ga 30518
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] mb-8">
              Send a Message
            </h2>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent successfully!");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="border border-slate-200 bg-slate-50/50 p-4 w-full rounded-xl outline-none transition focus:border-[#0F6E56] focus:bg-white focus:ring-4 focus:ring-emerald-50 text-base"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@example.com"
                    required
                    className="border border-slate-200 bg-slate-50/50 p-4 w-full rounded-xl outline-none transition focus:border-[#0F6E56] focus:bg-white focus:ring-4 focus:ring-emerald-50 text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  required
                  className="border border-slate-200 bg-slate-50/50 p-4 w-full rounded-xl outline-none transition focus:border-[#0F6E56] focus:bg-white focus:ring-4 focus:ring-emerald-50 text-base resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-[#022c22] cursor-pointer text-white font-medium px-10 py-4 rounded-xl hover:bg-[#0b5240] transition shadow-lg shadow-emerald-700/20 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* =========================================================================
            3. MAP SECTION 
            ========================================================================= */}
        <div className="mt-16 lg:mt-24">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0d1b2a]">
              Find Us On The Map
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Stop by our main corporate hub during normal operational hours.
            </p>
          </div>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 bg-white p-2">
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps?q=115+E+Main+Street+Suite+13H+Buford+GA+30518&output=embed"
              className="w-full h-full rounded-xl border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
