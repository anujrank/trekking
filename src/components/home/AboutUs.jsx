import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function AboutUs() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      {/* Top Section: Main Content Split */}
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Left Side: Tall Main Image */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <div className="w-full max-w-[420px] aspect-[3/4] overflow-hidden rounded-[2rem] shadow-md">
            <img
              src="/about2.png"
              alt="Adventurer exploring ruins"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content and Secondary Image */}
        <div className="w-full lg:w-[55%] space-y-6 text-left">
          {/* Pill Badge */}
          <span className="inline-block px-5 py-1.5 border border-green-500/50 text-green-700 rounded-full text-sm font-medium">
            About Us
          </span>

          {/* Mixed Styling Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Curating Exceptional <br />
            Travel{" "}
            <span className="text-green-700 italic font-serif font-medium">
              Experiences
            </span>
          </h2>

          {/* Text and Right Image Split */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-3/5 space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                We are passionate adventurers dedicated to creating
                unforgettable trekking experiences across the breathtaking
                landscapes of India. From beginner-friendly trails to
                challenging mountain expeditions.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                With experienced guides, carefully planned itineraries, and a
                commitment to safety, we ensure every journey is enjoyable,
                authentic, and rewarding.
              </p>

              {/* Call to Action Button */}
              <div className="pt-2">
                <button className="bg-green-700 cursor-pointer text-white font-medium px-6 py-3 rounded-lg flex gap-2 items-center hover:bg-black transition-all duration-500 shadow-md text-sm">
                  Learn More
                  <FiArrowUpRight className="text-base" />
                </button>
              </div>
            </div>

            {/* Right Side Secondary Image */}
            <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/about1.png"
                alt="Scenic travel destination"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Divider */}
          <hr className="border-2 border-green-200/50" />

          {/* Bottom Section: Clean Row Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl">
            <div className="space-y-1">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
                25+
              </h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                Years Of Experience
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
                300+
              </h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                Trip Destinations
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
                140K+
              </h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
