import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const destinationsData = [
  {
    id: 1,
    title: "Himachal Pradesh",
    img: "/hp.png",
    desc: "Snowy peaks, alpine meadows, and unforgettable mountain adventures.",
  },
  {
    id: 2,
    title: "Uttarakhand",
    img: "/uk.png",
    desc: "Sacred trails, scenic valleys, and Himalayan beauty.",
  },
  {
    id: 3,
    title: "Ladakh",
    img: "/ladakh.png",
    desc: "High-altitude deserts and rugged Himalayan wilderness.",
  },
  {
    id: 4,
    title: "Kashmir",
    img: "/j&k.png",
    desc: "Snowy peaks, alpine meadows, and unforgettable mountain adventures.",
  },
  {
    id: 5,
    title: "Nepal",
    img: "/nepal.png",
    desc: "World-famous trekking routes beneath towering Himalayan giants.",
  },
  {
    id: 6,
    title: "Sikkim",
    img: "/sikkim.png",
    desc: "Pristine forests, glaciers, and stunning mountain vistas.",
  },
  {
    id: 7,
    title: "Arunachal Pradesh",
    img: "/ap.png",
    desc: "Enchanting landscapes, diverse wildlife, and vibrant culture.",
  },
];

function PopularDestinations() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            Popular Destinations
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            From snow-covered Himalayan peaks to scenic alpine valleys,
            discover the perfect destination for your next adventure.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".dest-prev",
              nextEl: ".dest-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {destinationsData.map((dest) => (
              <SwiperSlide key={dest.id}>
                <div className="group overflow-hidden rounded-2xl shadow-lg">
                  <div className="relative aspect-[3/4]">
                    <img
                      src={dest.img}
                      alt={dest.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {dest.title}
                      </h3>

                      <p className="text-sm text-white/80">
                        {dest.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}
          <button className="dest-prev flex absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#e5a93b] hover:text-white transition">
            <HiChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button className="dest-next flex absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#e5a93b] hover:text-white transition">
            <HiChevronRight size={24} />
          </button>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#e5a93b] hover:bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 transition">
            View All Destinations
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;