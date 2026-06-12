"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative w-full text-white bg-black overflow-hidden font-sans">
      {/* ========================================== */}
      {/* TOP SECTION: UPPER CTA PROMO BLOCK        */}
      {/* ========================================== */}
      <div
        className="relative w-full py-24 px-6 md:px-12 text-center bg-cover bg-center"
        style={{
          // Subtle landscape background contrast behind the dark overlay
          backgroundImage: `url('/footer.png')`,
        }}
      >
        {/* Darkened visual layer matching image_9aef8.png */}
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Headline featuring the iconic gold italic text treatment */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Get{" "}
            <span className="text-[#e5a93b] italic font-serif font-normal">
              Closer
            </span>{" "}
            With Us &amp; Get <br className="hidden sm:inline" />
            Special Promo
          </h2>

          <p className="text-gray-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed opacity-90">
            Discover the beauty of India's most spectacular trekking
            destinations. Adventure awaits at every step. Join us today for
            special offers.
          </p>

          {/* Action Link Button */}
          <div className="pt-2">
            <button className="bg-[#e5a93b] hover:bg-[#d4982a] text-white font-bold text-sm px-8 py-3.5 rounded-full inline-flex items-center space-x-2 transition-all duration-300 shadow-lg shadow-amber-500/10 transform hover:scale-[1.02]">
              <span>Let's Get Started</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* BOTTOM SECTION: 4-COLUMN CONTENT LINK GRID */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Brand & Social Handles (Width 4/12) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo Layout Header resembling the design framework */}
            <div className="flex flex-col items-start gap-5 shadow-sm">
              <img
                src="/logo.png"
                alt="Trek Adventures Logo"
                className="h-32 w-56 object-contain -mb-6"
              />

              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs">
                Adventure Family Travel, Trekking & Adventure Experts.
                <br />
                Explore India's Best Treks — Your Trusted Partner for Himalayan
                Adventures.
              </p>
            </div>

            {/* Managed text fields */}

            {/* Circular Rounded Social Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#e5a93b] text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#e5a93b] text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#e5a93b] text-white transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Easy Links (Width 2/12) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#e5a93b] font-bold text-sm md:text-base tracking-wide">
              Easy Links
            </h3>
            <ul className="space-y-2.5 text-gray-400 text-xs md:text-sm font-medium">
              <li>
                <a
                  href="/"
                  className="hover:text-[#e5a93b] transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#e5a93b] transition duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#e5a93b] transition duration-200"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#e5a93b] transition duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Links (Width 2/12) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#e5a93b] font-bold text-sm md:text-base tracking-wide">
              Support Links
            </h3>
            <ul className="space-y-2.5 text-gray-400 text-xs md:text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-[#e5a93b] transition duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#e5a93b] transition duration-200"
                >
                  Booking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#e5a93b] transition duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#e5a93b] transition duration-200"
                >
                  Online Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Inline Capsule Newsletter Form (Width 4/12) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[#e5a93b] font-bold text-sm md:text-base tracking-wide">
              Our Newsletter
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Join our community of explorers and receive trek updates, special
              discounts, and expert travel insights every month.
            </p>

            {/* Pill-shaped Container Subscription Form input wrapper */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center w-full max-w-md bg-white/5 border border-white/10 rounded-full focus-within:border-[#e5a93b]/50 transition-colors duration-300"
            >
              <input
                type="email"
                placeholder="Your Email:"
                className="w-full bg-transparent text-white placeholder-gray-500 pl-4 pr-4 text-xs md:text-sm focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#e5a93b] hover:bg-[#d4982a] text-white font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center space-x-1 transition-all duration-300 shrink-0"
              >
                <span>Subscribe</span>
                <svg className="w-3 h-3 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Horizontal Copyright Strip */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center md:flex md:justify-between md:items-center text-gray-500 text-xs">
          <p>&copy; 2026 Trek Adventures. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-3 md:mt-0 opacity-80">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
