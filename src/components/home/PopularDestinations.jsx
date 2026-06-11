import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

function PopularDestinations() {
  return (
    <div className="text-center space-y-5 py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
        Popular Destinations
      </h1>
      <p className="text-slate-600 max-w-xl mx-auto">
        From snow-covered Himalayan peaks to scenic alpine valleys, discover
        the perfect destination for your next adventure.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 w-full py-6">
        {/* Card 1: Himachal Pradesh */}
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-slate-100">
          <img
            src="/hp.png"
            alt="Himachal Pradesh"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          <div
            className="absolute bottom-0 left-0 right-0 p-4 text-white text-left
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
          >
            <h1 className="text-lg font-bold mb-1">Himachal Pradesh</h1>
            <p className="text-xs text-gray-200 line-clamp-3 leading-relaxed">
              Snowy peaks, alpine meadows, and unforgettable mountain
              adventures.
            </p>
          </div>
        </div>

        {/* Card 2: Uttarakhand */}
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-slate-100">
          <img
            src="/uk.png"
            alt="Uttarakhand"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          <div
            className="absolute bottom-0 left-0 right-0 p-4 text-white text-left
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
          >
            <h1 className="text-lg font-bold mb-1">Uttarakhand</h1>
            <p className="text-xs text-gray-200 line-clamp-3 leading-relaxed">
              Sacred trails, scenic valleys, and Himalayan beauty.
            </p>
          </div>
        </div>

        {/* Card 3: Ladakh */}
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-slate-100">
          <img
            src="/ladakh.png"
            alt="Ladakh"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          <div
            className="absolute bottom-0 left-0 right-0 p-4 text-white text-left
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
          >
            <h1 className="text-lg font-bold mb-1">Ladakh</h1>
            <p className="text-xs text-gray-200 line-clamp-3 leading-relaxed">
              High-altitude deserts and rugged Himalayan wilderness.
            </p>
          </div>
        </div>

        {/* Card 4: Kashmir */}
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-slate-100">
          <img
            src="/kashmir.png"
            alt="Kashmir"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          <div
            className="absolute bottom-0 left-0 right-0 p-4 text-white text-left
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
          >
            <h1 className="text-lg font-bold mb-1">Kashmir</h1>
            <p className="text-xs text-gray-200 line-clamp-3 leading-relaxed">
              Snowy peaks, alpine meadows, and unforgettable mountain
              adventures.
            </p>
          </div>
        </div>

        {/* Card 5: Nepal */}
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-slate-100">
          <img
            src="/nepal.png"
            alt="Nepal"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          <div
            className="absolute bottom-0 left-0 right-0 p-4 text-white text-left
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
          >
            <h1 className="text-lg font-bold mb-1">Nepal</h1>
            <p className="text-xs text-gray-200 line-clamp-3 leading-relaxed">
              World-famous trekking routes beneath towering Himalayan giants.
            </p>
          </div>
        </div>

        {/* Card 6: Sikkim */}
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-slate-100">
          <img
            src="/sikkim.png"
            alt="Sikkim"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          <div
            className="absolute bottom-0 left-0 right-0 p-4 text-white text-left
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
          >
            <h1 className="text-lg font-bold mb-1">Sikkim</h1>
            <p className="text-xs text-gray-200 line-clamp-3 leading-relaxed">
              Pristine forests, glaciers, and stunning mountain vistas.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <button className="bg-slate-900 text-white font-medium px-6 py-3 rounded-lg flex gap-2 items-center hover:bg-slate-800 transition-all shadow-md">
          View All Destinations
          <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  )
}

export default PopularDestinations
