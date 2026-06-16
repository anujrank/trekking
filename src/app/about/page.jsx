"use client"; // <--- Add this at the absolute top of the file

import React, { useState, useEffect, useRef } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import {
  FaUserTie,
  FaChevronRight,
  FaMapMarkerAlt,
  FaQuoteLeft,
} from "react-icons/fa";

function Page() {
  // --- Typing Effect State ---
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hii, I'm Alex.";

  // --- Counter States ---
  const [familiesCount, setFamiliesCount] = useState(0);
  const [destinationsCount, setDestinationsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  const statsSectionRef = useRef(null);

  // 1. Typing Effect Logic
  useEffect(() => {
    let currentIdx = 0;
    setDisplayText("");

    const typingInterval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setDisplayText((prev) => fullText.slice(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  // 2. Animated Counter Logic (Triggered on Scroll)
  useEffect(() => {
    const target = statsSectionRef.current;
    if (!target) return;

    const animateCount = (targetValue, setter, duration = 2000) => {
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const easeOutQuad = progress * (2 - progress);
        setter(Math.floor(easeOutQuad * targetValue));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateCount(500, setFamiliesCount, 2000);
          animateCount(62, setDestinationsCount, 1800);
          animateCount(15, setExperienceCount, 1500);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-[#0F6E56]/10 selection:text-[#0F6E56]">
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-b from-[#E5F3EE] via-[#E5F3EE]/60 to-slate-50 py-20 flex flex-col items-center justify-center gap-6 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0F6E56_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

        {/* Profile Icon */}
        <div className="h-24 w-24 rounded-2xl p-1 flex justify-center items-center bg-[#0F6E56] text-white text-5xl shadow-xl shadow-[#0F6E56]/10 transition-all duration-500 hover:scale-105 hover:rotate-3 relative z-10">
          <FaUserTie />
        </div>

        {/* Subtitle */}
        <h3 className="uppercase text-[#0F6E56] font-extrabold tracking-widest text-xs sm:text-sm bg-[#0F6E56]/10 px-4 py-1.5 rounded-full relative z-10">
          About your planner
        </h3>

        {/* Animated Title with blinking cursor */}
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 min-h-[64px] flex items-center gap-1 tracking-tight relative z-10">
          {displayText}
          <span className="w-[4px] h-[44px] bg-[#0F6E56] animate-[pulse_0.8s_infinite] rounded-full"></span>
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-center max-w-2xl text-lg sm:text-xl leading-relaxed mt-2 font-medium relative z-10">
          Adventure travel planner for{" "}
          <span className="text-[#0F6E56] font-semibold">15 years</span>.{" "}
          <span className="text-[#0F6E56] font-semibold">62 destinations</span>.
          500+ families who went home with stories they'll still be telling at
          the dinner table in 20 years.
        </p>
      </div>

      {/* Tailwind Style Injector for Custom Keyframes */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>

      {/* Upgraded Stats Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-4 mb-16 relative z-20">
        <div
          ref={statsSectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-100"
        >
          {/* Stat Box 1 */}
          <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 transition-all duration-300 hover:shadow-md hover:border-[#0F6E56]/20 group text-center">
            <h1 className="text-5xl font-black text-[#0F6E56] tracking-tight transition-transform duration-300 group-hover:scale-105">
              {familiesCount}+
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-wider text-xs sm:text-sm">
              families planned
            </p>
          </div>

          {/* Stat Box 2 */}
          <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 transition-all duration-300 hover:shadow-md hover:border-[#0F6E56]/20 group text-center">
            <h1 className="text-5xl font-black text-[#0F6E56] tracking-tight transition-transform duration-300 group-hover:scale-105">
              {destinationsCount}
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-wider text-xs sm:text-sm">
              destinations covered
            </p>
          </div>

          {/* Stat Box 3 */}
          <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 transition-all duration-300 hover:shadow-md hover:border-[#0F6E56]/20 group text-center">
            <h1 className="text-5xl font-black text-[#0F6E56] tracking-tight transition-transform duration-300 group-hover:scale-105">
              {experienceCount}
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-wider text-xs sm:text-sm">
              years of experience
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto px-6 space-y-6 py-12 text-slate-600 text-lg leading-relaxed relative">
        <div className="absolute left-0 top-12 text-slate-200 hidden md:block transform -translate-x-12 -translate-y-4">
          <FaQuoteLeft className="text-6xl text-slate-200/80" />
        </div>
        <p className="font-semibold text-slate-900 text-xl md:text-2xl italic leading-snug">
          "I didn't start out planning other people's trips. I started by
          planning my own — badly."
        </p>
        <p>
          The first international trip I ever took with a family was a disaster
          by conventional standards. Wrong hotels in the wrong neighborhoods. A
          restaurant that looked great online and served nothing anyone would
          eat. An activity booking that didn't account for the age of the
          youngest kid. Three hours lost to traffic on a route any local would
          have avoided.
        </p>
        <p>
          But somewhere in the middle of that chaos, something else happened. We
          found a street market nobody had written about. We ate the best meal
          of the trip at a plastic-stool restaurant that wasn't in any
          guidebook. The kids — exhausted, slightly sunburned, a little lost —
          decided it was the greatest adventure of their lives.
        </p>
        <p className="pt-2 font-medium text-slate-800">
          I've spent the 15 years since that trip learning how to keep the
          second part and eliminate the first.
        </p>
      </div>

      <hr className="max-w-4xl mx-auto border-slate-200 my-12" />

      {/* Philosophy Section */}
      <div className="max-w-4xl mx-auto px-6 space-y-8 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          What I actually believe about{" "}
          <span className="text-[#0F6E56]">family travel</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-4 items-start">
          <div className="md:col-span-3 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              The best family vacations aren't the ones where everything goes
              perfectly. They're the ones where your 10-year-old hiked further
              than she thought she could. Where your teenager put his phone away
              for three days because the glacier was more interesting than his
              feed. Where your youngest tried something new every single meal
              and discovered that Vietnamese food is her favorite thing in the
              world.
            </p>
            <p className="font-medium text-slate-800">
              Comfort is overrated. Structure is underrated. And the gap between
              a good trip and a transcendent one is almost always in the
              planning — specifically, in the 200 small decisions that most
              families don't know to make until they're already on the ground
              and it's too late.
            </p>
          </div>
          <div className="md:col-span-2 bg-[#E5F3EE]/40 border border-[#0F6E56]/20 p-6 rounded-2xl space-y-4 shadow-inner">
            <h4 className="font-bold text-[#0F6E56] uppercase text-xs tracking-wider">
              The 200 Decisions:
            </h4>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex gap-2 items-start">
                <FaChevronRight className="text-[#0F6E56] mt-1 shrink-0 text-xs" />{" "}
                Which restaurant has the dish your picky eater will try?
              </li>
              <li className="flex gap-2 items-start">
                <FaChevronRight className="text-[#0F6E56] mt-1 shrink-0 text-xs" />{" "}
                Which waterfall has a hidden path behind it?
              </li>
              <li className="flex gap-2 items-start">
                <FaChevronRight className="text-[#0F6E56] mt-1 shrink-0 text-xs" />{" "}
                Which temple is actually worth the early wakeup?
              </li>
              <li className="flex gap-2 items-start">
                <FaChevronRight className="text-[#0F6E56] mt-1 shrink-0 text-xs" />{" "}
                Which zip-line guide is best for nervous first-timers?
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Upgraded Cards Section with Background Images */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-slate-100/50 rounded-xl border-b-4 border-[#0F6E56] mt-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E56] bg-[#0F6E56]/10 px-3 py-1 rounded-full">
            Real Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-8 text-slate-900 tracking-tight">
            A few trips that shaped how I work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Iceland */}
          <div className="relative group min-h-[420px] rounded-3xl overflow-hidden shadow-xl shadow-slate-300/40 border border-slate-200 flex flex-col justify-end transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F6E56]/10 bg-slate-900">
            {/* Background Image with Hover Zoom Effect */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url('/iceland.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Enhanced Dark/Gradient Overlay for perfect text clarity */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/85 to-slate-950 transition-opacity duration-300 group-hover:opacity-95"></div>

            {/* Card Contents */}
            <div className="relative z-10 p-8 space-y-4">
              <div className="flex items-center gap-2 text-[#E5F3EE] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/10">
                <FaMapMarkerAlt className="text-emerald-400 text-xs" />
                <span className="text-xs font-black tracking-wider uppercase">
                  Iceland · Family of 5
                </span>
              </div>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal">
                One of the kids had been diagnosed with Type 1 diabetes six
                months before the trip. The parents almost cancelled. We built
                the itinerary around the diabetes management — every activity
                near medical facilities, hotels within 20 minutes of services,
                every guide briefed. They saw the Northern Lights from a hot tub
                in Akureyri on night five. Their son said it was the best night
                of his life.
              </p>
            </div>
          </div>

          {/* Card 2 - Costa Rica */}
          <div className="relative group min-h-[420px] rounded-3xl overflow-hidden shadow-xl shadow-slate-300/40 border border-slate-200 flex flex-col justify-end transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F6E56]/10 bg-slate-900">
            {/* Background Image with Hover Zoom Effect */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url('/costa-rica1.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Enhanced Dark/Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/90 to-slate-950 transition-opacity duration-300 group-hover:opacity-95"></div>

            {/* Card Contents */}
            <div className="relative z-10 p-8 space-y-4">
              <div className="flex items-center gap-2 text-[#E5F3EE] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/10">
                <FaMapMarkerAlt className="text-emerald-400 text-xs" />
                <span className="text-xs font-black tracking-wider uppercase">
                  Costa Rica · High Fears
                </span>
              </div>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal">
                She told me on the intake form she was terrified of heights. Her
                kids — 9 and 12 — desperately wanted to zip-line. I found a
                course in Monteverde with a 30-meter practice cable and a guide
                specifically trained for anxious first-timers. She did all 11
                cables. I got an email with three photos afterward. Her kids
                were so proud of her they talked about it for the rest of the
                trip.
              </p>
            </div>
          </div>

          {/* Card 3 - Patagonia */}
          <div className="relative group min-h-[420px] rounded-3xl overflow-hidden shadow-xl shadow-slate-300/40 border border-slate-200 flex flex-col justify-end transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F6E56]/10 bg-slate-900">
            {/* Background Image with Hover Zoom Effect */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url('/patagonia.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Enhanced Dark/Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/85 to-slate-950 transition-opacity duration-300 group-hover:opacity-95"></div>

            {/* Card Contents */}
            <div className="relative z-10 p-8 space-y-4">
              <div className="flex items-center gap-2 text-[#E5F3EE] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/10">
                <FaMapMarkerAlt className="text-emerald-400 text-xs" />
                <span className="text-xs font-black tracking-wider uppercase">
                  Patagonia · Age 6 Adventure
                </span>
              </div>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal">
                Everyone told them Patagonia was too hard for a 6-year-old. They
                came to me anyway. We built a version of the W Trek with lodge
                accommodation instead of camping and an alternative low-impact
                trail on the steep days. Their daughter hiked 28 miles over four
                days. She asked to go back the following year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upgraded Premium Work With Me Section */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-2xl shadow-slate-200 relative overflow-hidden">
          {/* Subtle graphic accent background */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-[#E5F3EE]/30 to-transparent pointer-events-none hidden lg:block" />

          {/* Left Column: CTA Pitch */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E56] bg-[#0F6E56]/10 px-3 py-1 rounded-full w-fit">
              Let's build your story
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Work with me
            </h2>
            <div className="space-y-4 text-slate-600 text-md md:text-lg leading-relaxed max-w-xl">
              <p>
                The free <strong className="text-slate-900 font-semibold">2-day itinerary preview</strong> is the best way to start. It takes 2 minutes to fill in and you'll have a full Day 1 and Day 2 — real restaurants, real timing, real insider tips — within seconds.
              </p>
              <p className="text-sm bg-slate-50 border border-slate-100 rounded-xl p-3 inline-block font-medium">
                🔒 No credit card, no commitment.
              </p>
            </div>
            <div className="pt-2">
              <button className="group flex items-center gap-3 bg-[#0F6E56] hover:bg-[#0b5240] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-[#0F6E56]/20 hover:shadow-2xl hover:shadow-[#0F6E56]/30 hover:-translate-y-0.5 active:translate-y-0 text-base md:text-lg">
                Start your free itinerary
                <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Transparent Package Breakdowns */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-8 rounded-3xl flex flex-col justify-between shadow-inner relative z-10">
            <div className="space-y-6">
              <div className="flex justify-between items-start border-b border-slate-200/60 pb-4">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xl">The Adventurer</h3>
                  <p className="text-xs text-slate-400 font-medium">Complete end-to-end planning</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#0F6E56]">$349</span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">one-time payment</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {[
                  "Every single vacation day planned out",
                  "Hand-picked hotel & eco-lodge matches",
                  "Downloadable interactive PDF offline guide",
                  "Customized gear and packing checklists",
                  "Unlimited itinerary revisions via chat",
                  "On-trip support via async messenger",
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-center text-sm text-slate-600 font-medium">
                    <span className="h-5 w-5 rounded-full bg-[#E5F3EE] flex items-center justify-center text-[#0F6E56] shrink-0">
                      <FiCheck className="text-xs stroke-[3]" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[11px] text-slate-400 mt-6 pt-4 border-t border-slate-100 text-center leading-snug font-medium">
              If a ferry gets canceled or a venue closes while you're on the ground, message me and I'll sort it out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;