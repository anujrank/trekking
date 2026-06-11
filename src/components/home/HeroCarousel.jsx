import React, { useState } from 'react'

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  return (
    <div className="h-screen max-h-[750px] overflow-hidden relative w-full bg-slate-900">
      {/* Slide 1 */}
      {currentSlide === 0 && (
        <div className="animate-fadeIn relative h-full w-full">
          <img
            src="/hero-1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60" />
          {/* Kept right alignment for the container, but changed text to text-left */}
          <div className="absolute right-12 md:right-40 top-1/2 -translate-y-1/2 space-y-5 text-left max-w-2xl z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
              Explore the Majestic <br /> Himalayas
            </h1>
            <p className="text-lg md:text-2xl text-gray-100">
              Discover breathtaking mountain trails, stunning landscapes,
              <br /> and unforgettable trekking experiences across the
              Himalayas.
            </p>
            <button className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-slate-100 transition-all shadow-lg transform hover:-translate-y-0.5">
              Start Your Journey
            </button>
          </div>
        </div>
      )}

      {/* Slide 2 */}
      {currentSlide === 1 && (
        <div className="animate-fadeIn relative h-full w-full">
          <img
            src="/hero-2.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute left-12 md:left-40 top-1/2 -translate-y-1/2 space-y-5 text-left max-w-2xl z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
              Discover Hidden Mountain
              <br /> Trails
            </h1>
            <p className="text-lg md:text-2xl text-gray-100">
              Experience thrilling adventures and uncover
              <br /> nature's most spectacular trekking routes.
            </p>
            <button className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-slate-100 transition-all shadow-lg transform hover:-translate-y-0.5">
              Explore Treks
            </button>
          </div>
        </div>
      )}

      {/* Slide 3 */}
      {currentSlide === 2 && (
        <div className="animate-fadeIn relative h-full w-full">
          <img
            src="/hero-3.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60" />
          {/* Kept right alignment for the container, but changed text to text-left */}
          <div className="absolute right-12 md:right-40 top-1/2 -translate-y-1/2 space-y-5 text-left max-w-2xl z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
              Create Memories in the <br /> Wild
            </h1>
            <p className="text-lg md:text-2xl text-gray-100">
              Escape the ordinary and immerse yourself in nature
              <br /> with carefully planned trekking and camping experiences.
            </p>
            <button className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-slate-100 transition-all shadow-lg transform hover:-translate-y-0.5">
              View Treks
            </button>
          </div>
        </div>
      )}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-white text-white hover:text-slate-900 cursor-pointer border border-white/20 transition-all duration-300 text-2xl p-3 rounded-full z-20 backdrop-blur-sm"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-white text-white hover:text-slate-900 cursor-pointer border border-white/20 transition-all duration-300 text-2xl p-3 rounded-full z-20 backdrop-blur-sm"
      >
        ❯
      </button>
    </div>
  )
}

export default HeroCarousel