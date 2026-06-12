import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const carouselData = [
  {
    id: 1,
    img: "/hero-1.png",
    title: "Explore the Majestic Himalayas",
    desc: "Discover breathtaking mountain trails, stunning landscapes, and unforgettable trekking experiences across the Himalayas.",
    btnText: "Start Your Journey",
  },
  {
    id: 2,
    img: "/hero-2.png",
    title: "Discover Hidden Mountain Trails",
    desc: "Experience thrilling adventures and uncover nature's most spectacular trekking routes.",
    btnText: "Explore Treks",
  },
  {
    id: 3,
    img: "/hero-3.png",
    title: "Create Memories in the Wild",
    desc: "Escape the ordinary and immerse yourself in nature with carefully planned trekking and camping experiences.",
    btnText: "View Treks",
  },
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Inject Injectable Custom CSS Animations
  useEffect(() => {
    const styleId = "slider-reveal-animations";

    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;

      style.innerHTML = `
        @keyframes traveleRevealUp {
          0% {
            transform: translateY(110%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes traveleFade {
          0% {
            opacity: 0;
            transform: scale(1.03);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .active-slide .animate-reveal {
          animation: traveleRevealUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .active-slide.animate-fade {
          animation: traveleFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `;

      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="relative w-full h-[50vh] sm:h-[20vh] lg:h-screen max-h-[850px] overflow-hidden bg-red-950 font-sans group">
      {carouselData.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-10 active-slide animate-fade" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-[50vh] lg:h-full lg:object-cover object-center select-none pointer-events-none"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
              <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                
                {/* Title */}
                <div className="overflow-hidden py-2">
                  <h1 className="animate-reveal opacity-0 text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                </div>

                {/* Description */}
                <div className="overflow-hidden py-1">
                  <p
                    style={{ animationDelay: isActive ? "200ms" : "0ms" }}
                    className="animate-reveal opacity-0 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200/90 font-light max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto leading-relaxed"
                  >
                    {slide.desc}
                  </p>
                </div>

                {/* CTA */}
                <div className="overflow-hidden py-3">
                  <div
                    style={{ animationDelay: isActive ? "400ms" : "0ms" }}
                    className="animate-reveal opacity-0"
                  >
                    <button className="bg-[#e5a93b] cursor-pointer text-white font-semibold tracking-wide text-sm sm:text-base py-3 px-6 sm:px-8 rounded-xl hover:bg-emerald-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-900/20">
                      {slide.btnText}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* --- सुधरा हुआ नेविगेशन सिस्टम (FIXED NAVIGATION) --- */}
      {/* मोबाइल लेआउट (Mobile View): बॉटम राइट में एक साथ रहेंगे */}
      <div className="absolute bottom-5 right-5 z-30 flex items-center gap-2 sm:hidden">
        <button
          onClick={prevSlide}
          className="bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-all duration-300 p-3 rounded-lg cursor-pointer border border-white/10 shadow-lg"
          aria-label="Previous slide"
        >
          <HiChevronLeft className="text-sm" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-all duration-300 p-3 rounded-lg cursor-pointer border border-white/10 shadow-lg"
          aria-label="Next slide"
        >
          <HiChevronRight className="text-sm" />
        </button>
      </div>

      {/* डेस्कटॉप लेआउट (Desktop View): स्क्रीन के Left और Right किनारों पर वर्टिकली सेंटर रहेंगे */}
      <div className="hidden sm:block absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none px-4 md:px-8">
        <div className="flex justify-between w-full">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-all duration-300 p-3 sm:p-4 rounded-full cursor-pointer border border-white/10 shadow-lg pointer-events-auto target-left"
            aria-label="Previous slide"
          >
            <HiChevronLeft className="text-xl md:text-2xl" />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-all duration-300 p-3 sm:p-4 rounded-full cursor-pointer border border-white/10 shadow-lg pointer-events-auto target-right"
            aria-label="Next slide"
          >
            <HiChevronRight className="text-xl md:text-2xl" />
          </button>
        </div>
      </div>
      {/* -------------------------------------------------- */}

      {/* Indicators */}
      <div className="absolute bottom-8 left-6 sm:left-1/2 sm:-translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              currentSlide === idx
                ? "w-10 bg-emerald-500"
                : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;