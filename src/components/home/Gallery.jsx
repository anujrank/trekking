'use client'

import React, { useState, useEffect } from 'react'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Expanded gallery array with specific trek details and terrain locations
  const gallery = [
  {
    id: 1,
    src: '/gallery1.png',
    alt: 'Everest Base Camp Trek in the Khumbu Region of Nepal',
    name: 'Everest Base Camp Trek',
    location: 'Khumbu Region, Nepal',
    size: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    src: '/gallery2.png',
    alt: 'Scenic views along the Kheerganga Trek',
    name: 'Kheerganga Trek',
    location: 'Himachal Pradesh, India',
    size: 'col-span-1'
  },
  {
    id: 3,
    src: '/gallery3.png',
    alt: 'Mountain landscape on the Valley of Flowers Trek',
    name: 'Valley of Flowers Trek',
    location: 'Uttarakhand, India',
    size: 'col-span-1'
  },
  {
    id: 4,
    src: '/gallery4.png',
    alt: 'Panoramic Himalayan views from Goechala Trek',
    name: 'Goechala Trek',
    location: 'Sikkim, India',
    size: 'col-span-1 md:col-span-2'
  },
  {
    id: 5,
    src: '/gallery5.png',
    alt: 'Alpine lakes on the Kashmir Great Lakes Trek',
    name: 'Kashmir Great Lakes Trek',
    location: 'Jammu & Kashmir, India',
    size: 'col-span-1'
  },
  {
    id: 6,
    src: '/gallery6.png',
    alt: 'Historic Rajgad Fort Trek trail',
    name: 'Rajgad Fort Trek',
    location: 'Maharashtra, India',
    size: 'col-span-1'
  },
  {
    id: 7,
    src: '/gallery7.png',
    alt: 'Sunrise view from the Kodachadri Trek',
    name: 'Kodachadri Trek',
    location: 'Karnataka, India',
    size: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 8,
    src: '/gallery8.png',
    alt: 'Bhadraj Temple Trek through forest trails',
    name: 'Bhadraj Temple Trek',
    location: 'Uttarakhand, India',
    size: 'col-span-1 md:col-span-2'
  }
];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto space-y-8 selection:bg-slate-900 selection:text-white">
      {/* Header Section */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Moments from the Trail
        </h2>
        <p className="text-slate-600 max-w-md mx-auto text-sm md:text-base leading-relaxed">
          Captured snapshots of raw wilderness, high passes, and triumphant summits.
        </p>
      </div>

      {/* Bento Layout Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[160px] lg:auto-rows-[180px] py-4">
        {gallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`group relative overflow-hidden rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-xl transition-all duration-500 ease-out cursor-pointer ${item.size}`}
          >
            {/* Image element */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Hover Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
            
            {/* Contextual Title & Location Info on Hover */}
            <div className="absolute inset-x-0 bottom-0 p-5 text-white text-left z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              <h4 className="text-base md:text-lg font-black tracking-tight line-clamp-1 leading-snug">
                {item.name}
              </h4>
              
              {/* Added Location Metadata row inside hover state */}
              <div className="flex items-center space-x-1.5 mt-1 text-emerald-400">
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold tracking-wide uppercase line-clamp-1 opacity-90">
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Image Display Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button Top Right */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Close interactive gallery"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Center Core wrapper */}
          <div 
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10 select-none animate-scaleIn"
            />
            
            {/* Expanded Caption block showcasing Trek Details and Location Pins */}
            <div className="mt-5 text-center space-y-1.5 px-4 max-w-2xl">
              <h3 className="text-white text-xl md:text-2xl font-black tracking-wide">
                {selectedImage.name}
              </h3>
              
              <div className="flex items-center justify-center space-x-2 text-emerald-400 font-bold tracking-widest text-xs uppercase">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{selectedImage.location}</span>
                <span className="text-white/30 px-1">•</span>
                <span className="text-white/70 font-medium normal-case">{selectedImage.alt}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery