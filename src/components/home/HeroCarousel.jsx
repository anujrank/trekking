import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const carouselData = [
  {
    id: 1,
    img: '/hero-1.png',
    title: (
      <>
        Explore the Majestic <br /> Himalayas
      </>
    ),
    desc: (
      <>
        Discover breathtaking mountain trails, stunning landscapes,
        <br /> and unforgettable trekking experiences across the Himalayas.
      </>
    ),
    btnText: 'Start Your Journey',
  },
  {
    id: 2,
    img: '/hero-2.png',
    title: 'Discover Hidden Mountain Trails',
    desc: (
      <>
        Experience thrilling adventures and uncover
        <br /> nature's most spectacular trekking routes.
      </>
    ),
    btnText: 'Explore Treks',
  },
  {
    id: 3,
    img: '/hero-3.png',
    title: (
      <>
        Create Memories in <br /> the Wild
      </>
    ),
    desc: (
      <>
        Escape the ordinary and immerse yourself in nature
        <br /> with carefully planned trekking and camping experiences.
      </>
    ),
    btnText: 'View Treks',
  },
]

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length)
  }

  // Injecting the custom CSS animations dynamically
  useEffect(() => {
    const styleId = 'slider-reveal-animations'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.innerHTML = `
        @keyframes traveleRevealUp {
          0% { transform: translateY(110%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes traveleFade {
          0% { opacity: 0; transform: scale(1.03); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-reveal {
          animation: traveleRevealUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade {
          animation: traveleFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  return (
    <div className="h-screen max-h-[750px] overflow-hidden relative w-full bg-slate-950 font-sans group">
      
      {carouselData.map((slide, index) => {
        if (index !== currentSlide) return null

        return (
          <div key={slide.id} className="animate-fade relative h-full w-full transition-all duration-700">
            {/* Background Image */}
            <img 
              src={slide.img} 
              alt="" 
              className="w-full h-full object-cover select-none pointer-events-none" 
            />
            
            {/* Premium Vignette Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
            
            {/* Content Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
              <div className="max-w-4xl mx-auto space-y-6">
                
                {/* Title */}
                <div className="overflow-hidden py-2 block">
                  <h1 className="animate-reveal text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-md leading-[1.1]">
                    {slide.title}
                  </h1>
                </div>

                {/* Description */}
                <div className="overflow-hidden py-1 block">
                  <p 
                    style={{ animationDelay: '200ms' }} 
                    className="animate-reveal text-base md:text-lg lg:text-xl text-neutral-200/90 font-light max-w-2xl mx-auto leading-relaxed"
                  >
                    {slide.desc}
                  </p>
                </div>

                {/* Button */}
                <div className="overflow-hidden py-3 block">
                  <div style={{ animationDelay: '400ms' }} className="animate-reveal">
                    <button className="bg-emerald-600 cursor-pointer text-white font-semibold tracking-wide text-sm py-3.5 px-8 rounded-full hover:bg-emerald-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-900/20">
                      {slide.btnText}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )
      })}

      {/* Slick Control Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-all duration-300 p-3 rounded-full z-20 cursor-pointer border border-white/10 shadow-lg group-hover:translate-x-1"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="text-xl stroke-[1.5]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-all duration-300 p-3 rounded-full z-20 cursor-pointer border border-white/10 shadow-lg group-hover:-translate-x-1"
        aria-label="Next slide"
      >
        <HiChevronRight className="text-xl stroke-[1.5]" />
      </button>

      {/* Dashboard Style Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3 items-center">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ease-out ${
              currentSlide === idx 
                ? 'w-10 bg-emerald-500' 
                : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default HeroCarousel