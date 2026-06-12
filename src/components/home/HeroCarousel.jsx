import React, { useState, useEffect } from 'react'

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  // Injecting the custom CSS animations dynamically so you don't need to change tailwind.config.js
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
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-reveal {
          animation: traveleRevealUp 1.1s cubic-bezier(0.25, 1, 0.3, 1) forwards;
        }
        .animate-fade {
          animation: traveleFade 0.8s ease-in-out forwards;
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  return (
    <div className="h-screen max-h-[750px] overflow-hidden relative w-full bg-slate-900 font-sans">
      
      {/* Slide 1 */}
      {currentSlide === 0 && (
        <div className="animate-fade relative h-full w-full">
          <img src="/hero-1.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="max-w-5xl mx-auto space-y-5">
              {/* Title Mask */}
              <div className="overflow-hidden py-2 block">
                <h1 className="animate-reveal text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wide drop-shadow-sm">
                  Explore the Majestic <br /> Himalayas
                </h1>
              </div>
              {/* Paragraph Mask */}
              <div className="overflow-hidden py-1 block">
                <p style={{ animationDelay: '250ms' }} className="animate-reveal text-lg md:text-xl lg:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                  Discover breathtaking mountain trails, stunning landscapes,
                  <br /> and unforgettable trekking experiences across the Himalayas.
                </p>
              </div>
              {/* Button Mask */}
              <div className="overflow-hidden py-3 block">
                <div style={{ animationDelay: '450ms' }} className="animate-reveal">
                  <button className="bg-green-600 cursor-pointer text-white font-bold uppercase tracking-wider text-xs md:text-sm py-4 px-9 rounded-sm hover:bg-neutral-900 transition-colors duration-300 shadow-md">
                    Start Your Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 2 */}
      {currentSlide === 1 && (
        <div className="animate-fade relative h-full w-full">
          <img src="/hero-2.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="max-w-5xl mx-auto space-y-5">
              {/* Title Mask */}
              <div className="overflow-hidden py-2 block">
                <h1 className="animate-reveal text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wide drop-shadow-sm">
                  Discover Hidden Mountain Trails
                </h1>
              </div>
              {/* Paragraph Mask */}
              <div className="overflow-hidden py-1 block">
                <p style={{ animationDelay: '250ms' }} className="animate-reveal text-lg md:text-xl lg:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                  Experience thrilling adventures and uncover
                  <br /> nature's most spectacular trekking routes.
                </p>
              </div>
              {/* Button Mask */}
              <div className="overflow-hidden py-3 block">
                <div style={{ animationDelay: '450ms' }} className="animate-reveal">
                  <button className="bg-green-600 cursor-pointer text-white font-bold uppercase tracking-wider text-xs md:text-sm py-4 px-9 rounded-sm hover:bg-neutral-900 transition-colors duration-300 shadow-md">
                    Explore Treks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 3 */}
      {currentSlide === 2 && (
        <div className="animate-fade relative h-full w-full">
          <img src="/hero-3.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="max-w-5xl mx-auto space-y-5">
              {/* Title Mask */}
              <div className="overflow-hidden py-2 block">
                <h1 className="animate-reveal text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wide drop-shadow-md">
                  Create Memories in <br />the Wild
                </h1>
              </div>
              {/* Paragraph Mask */}
              <div className="overflow-hidden py-1 block">
                <p style={{ animationDelay: '250ms' }} className="animate-reveal text-lg md:text-xl lg:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                  Escape the ordinary and immerse yourself in nature
                  <br /> with carefully planned trekking and camping experiences.
                </p>
              </div>
              {/* Button Mask */}
              <div className="overflow-hidden py-3 block">
                <div style={{ animationDelay: '450ms' }} className="animate-reveal">
                  <button className="bg-green-600 cursor-pointer text-white font-bold uppercase tracking-wider text-xs md:text-sm py-4 px-9 rounded-sm hover:bg-neutral-900 transition-colors duration-300 shadow-md">
                    View Treks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/15 text-white transition-all duration-300 px-3 py-6 rounded-sm z-20 cursor-pointer border border-white/10 text-lg"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/15 text-white transition-all duration-300 px-3 py-6 rounded-sm z-20 cursor-pointer border border-white/10 text-lg"
      >
        ❯
      </button>
    </div>
  )
}

export default HeroCarousel