import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2' 
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules' 

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation' 

const destinationsData = [
  {
    id: 1,
    title: 'Himachal Pradesh',
    img: '/hp.png',
    desc: 'Snowy peaks, alpine meadows, and unforgettable mountain adventures.',
  },
  {
    id: 2,
    title: 'Uttarakhand',
    img: '/uk.png',
    desc: 'Sacred trails, scenic valleys, and Himalayan beauty.',
  },
  {
    id: 3,
    title: 'Ladakh',
    img: '/ladakh.png',
    desc: 'High-altitude deserts and rugged Himalayan wilderness.',
  },
  {
    id: 4,
    title: 'Kashmir',
    img: '/kashmir.png',
    desc: 'Snowy peaks, alpine meadows, and unforgettable mountain adventures.',
  },
  {
    id: 5,
    title: 'Nepal',
    img: '/nepal.png',
    desc: 'World-famous trekking routes beneath towering Himalayan giants.',
  },
  {
    id: 6,
    title: 'Sikkim',
    img: '/sikkim.png',
    desc: 'Pristine forests, glaciers, and stunning mountain vistas.',
  },
]

function PopularDestinations() {
  // 1. Create state hooks to safely hold references to our DOM elements
  const [prevEl, setPrevEl] = useState(null)
  const [nextEl, setNextEl] = useState(null)

  return (
    <div className="text-center space-y-5 py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
        Popular Destinations
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        From snow-covered Himalayan peaks to scenic alpine valleys, discover
        the perfect destination for your next adventure.
      </p>

      {/* Slider Container */}
      <div className="w-full py-6 destination-slider relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]} 
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          // 2. Pass the state elements directly to navigation instead of string classes
          navigation={{
            prevEl: prevEl,
            nextEl: nextEl,
          }}
          // 3. This forces Swiper to update and bind events once the buttons exist
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevEl;
            swiper.params.navigation.nextEl = nextEl;
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {destinationsData.map((dest) => (
            <SwiperSlide key={dest.id}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-sm border border-black/10 mx-auto w-full">
                <img
                  src={dest.img}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                
                {/* Text Content */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 text-white text-left z-10
                             opacity-100 translate-y-0
                             md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0
                             transition-all duration-300 ease-out"
                >
                  <h1 className="text-lg font-bold mb-1">{dest.title}</h1>
                  <p className="text-xs text-white/90 line-clamp-3 leading-relaxed">
                    {dest.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 4. Use the 'ref' prop to assign these DOM nodes to our states once they mount */}
        {/* Left Arrow */}
        <button 
          ref={(node) => setPrevEl(node)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 text-slate-800 p-3 rounded-full shadow-lg hover:bg-slate-50 transition-all focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <HiChevronLeft className="text-xl stroke-[2]" />
        </button>

        {/* Right Arrow */}
        <button 
          ref={(node) => setNextEl(node)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 text-slate-800 p-3 rounded-full shadow-lg hover:bg-slate-50 transition-all focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <HiChevronRight className="text-xl stroke-[2]" />
        </button>
      </div>

      <div className="flex justify-center pt-4">
        <button className="bg-[#e5a93b] text-white font-medium px-6 py-3 rounded-lg flex gap-2 items-center hover:bg-black cursor-pointer transition-all duration-500 shadow-md">
          View All Destinations
          <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  )
}

export default PopularDestinations