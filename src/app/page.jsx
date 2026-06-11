"use client";

import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { GoDash } from "react-icons/go";
function page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };
  //   Featured Treks section details
  const treks = [
    {
      id: 1,
      img: "/hampta.png",
      title: "Hampta Pass Trek",
      location: "Himachal Pradesh",
      duration: "5 Days / 4 Nights",
      difficulty: "Moderate",
      price: "₹9,999",
      description:
        "A scenic crossover trek connecting lush valleys with dramatic mountain landscapes.",
      buttonText: "View Details",
    },
    {
      id: 2,
      img: "/kedarkantha.png",
      title: "Kedarkantha Trek",
      location: "Uttarakhand",
      duration: "6 Days / 5 Nights",
      difficulty: "Easy to Moderate",
      price: "₹7,999",
      description:
        "One of India's most loved winter treks with snowy forests and summit views.",
      buttonText: "View Details",
    },
    {
      id: 3,
      img: "/goechala.png",
      title: "Goechala Trek",
      location: "Sikkim",
      duration: "11 Days / 10 Nights",
      difficulty: "Difficult",
      price: "₹18,999",
      description:
        "Witness breathtaking views of Kanchenjunga through forests, meadows, and glaciers.",
      buttonText: "View Details",
    },
    {
      id: 4,
      img: "/kashmir-lake.png",
      title: "Kashmir Great Lakes Trek",
      location: "Jammu & Kashmir",
      duration: "8 Days / 7 Nights",
      difficulty: "Moderate to Difficult",
      price: "₹14,999",
      description:
        "Explore stunning alpine lakes surrounded by vast meadows and snowy peaks.",
      buttonText: "View Details",
    },
    {
      id: 5,
      img: "/kheerganga.png",
      title: "Kheerganga Trek",
      location: "Himachal Pradesh",
      duration: "3 Days / 2 Nights",
      difficulty: "Easy",
      price: "₹4,999",
      description:
        "A beginner-friendly trek through forests, waterfalls, and scenic Parvati Valley views.",
      buttonText: "View Details",
    },
    {
      id: 6,
      img: "/valley-of-flowers.png",
      title: "Valley of Flowers Trek",
      location: "Uttarakhand",
      duration: "5 Days / 4 Nights",
      difficulty: "Easy",
      price: "₹8,499",
      description:
        "Walk through colorful alpine meadows filled with rare Himalayan flowers and stunning landscapes.",
      buttonText: "View Details",
    },
  ];
  return (
    <>
      {/* hero section */}
      <div className="h-fit overflow-hidden relative">
        {currentSlide === 0 && (
          <div className="animate-fadeIn">
            <img src="/hero-1.png" alt="" className="w-full" />
            <div className="absolute right-40 top-60 space-y-5">
              <h1 className="text-6xl font-bold text-slate-800">
                Explore the Majestic <br /> Himalayas
              </h1>
              <p className="text-2xl">
                Discover breathtaking mountain trails, stunning landscapes,
                <br /> and unforgettable trekking experiences across the
                Himalayas.
              </p>
              <button className="bg-slate-700 text-white py-3 px-8 rounded-lg">
                Start Your Journey
              </button>
            </div>
          </div>
        )}

        {currentSlide === 1 && (
          <div className="animate-fadeIn">
            <img src="/hero-2.png" alt="" className="w-full" />
            <div className="absolute left-40 top-60 space-y-5">
              <h1 className="text-6xl font-bold text-slate-800">
                Discover Hidden Mountain
                <br /> Trails
              </h1>
              <p className="text-2xl">
                Experience thrilling adventures and uncover
                <br /> nature's most spectacular trekking routes.
              </p>
              <button className="bg-slate-700 text-white py-3 px-8 rounded-lg">
                Explore Treks
              </button>
            </div>
          </div>
        )}

        {currentSlide === 2 && (
          <div className="animate-fadeIn">
            <img src="/hero-3.png" alt="" className="w-full" />
            <div className="absolute right-40 top-60 space-y-5">
              <h1 className="text-6xl font-bold text-slate-800">
                Create Memories in the <br /> Wild
              </h1>
              <p className="text-2xl">
                Escape the ordinary and immerse yourself in nature
                <br /> with carefully planned trekking and camping experiences.
              </p>
              <button className="bg-slate-700 text-white py-3 px-8 rounded-lg">
                View Treks
              </button>
            </div>
          </div>
        )}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-slate-900 hover:bg-white text-white hover:text-slate-900 cursor-pointer hover:border hover:border-slate-900 transition-all duration-500 text-3xl px-4 py-2 rounded-lg"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-slate-900 hover:bg-white text-white hover:text-slate-900 cursor-pointer hover:border hover:border-slate-900 transition-all duration-500 text-3xl px-4 py-2 rounded-lg"
        >
          ❯
        </button>
      </div>
      {/* Popular Destinations */}
      <div className="text-center space-y-5 p-10">
        <h1 className="text-3xl font-semibold text-slate-900">
          Popular Destinations
        </h1>
        <p>
          From snow-covered Himalayan peaks to scenic alpine valleys,
          <br /> discover the perfect destination for your next adventure.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full p-4">
          {/* Card 1: Himachal Pradesh */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-md">
            <img
              src="/hp.png"
              alt="Himachal Pradesh"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Added: Dedicated overlay div */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-white bg-slate-900/80
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
            >
              {" "}
              {/* Ensure text is above overlay */}
              <h1 className="text-xl font-bold mb-1">Himachal Pradesh</h1>
              <p className="text-xs text-gray-200 line-clamp-3">
                Snowy peaks, alpine meadows, and unforgettable mountain
                adventures.
              </p>
            </div>
          </div>

          {/* Card 2: Uttarakhand */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-md">
            <img
              src="/uk.png"
              alt="Uttarakhand"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Added: Dedicated overlay div */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-white bg-slate-900/80
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
            >
              <h1 className="text-xl font-bold mb-1">Uttarakhand</h1>
              <p className="text-xs text-gray-200 line-clamp-3">
                Sacred trails, scenic valleys, and Himalayan beauty.
              </p>
            </div>
          </div>

          {/* Card 3: Ladakh */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-md">
            <img
              src="/ladakh.png"
              alt="Ladakh"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Added: Dedicated overlay div */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-white bg-slate-900/80
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
            >
              <h1 className="text-xl font-bold mb-1">Ladakh</h1>
              <p className="text-xs text-gray-200 line-clamp-3">
                High-altitude deserts and rugged Himalayan wilderness.
              </p>
            </div>
          </div>

          {/* Card 4: Kashmir */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-md">
            <img
              src="/kashmir.png"
              alt="Kashmir"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Added: Dedicated overlay div */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-white bg-slate-900/80
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
            >
              <h1 className="text-xl font-bold mb-1">Kashmir</h1>
              <p className="text-xs text-gray-200 line-clamp-3">
                Snowy peaks, alpine meadows, and unforgettable mountain
                adventures.
              </p>
            </div>
          </div>

          {/* Card 5: Nepal */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-md">
            <img
              src="/nepal.png"
              alt="Nepal"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Added: Dedicated overlay div */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-white bg-slate-900/80
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
            >
              <h1 className="text-xl font-bold mb-1">Nepal</h1>
              <p className="text-xs text-gray-200 line-clamp-3">
                World-famous trekking routes beneath towering Himalayan giants.
              </p>
            </div>
          </div>

          {/* Card 6: Sikkim */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-md">
            <img
              src="/sikkim.png"
              alt="Sikkim"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Added: Dedicated overlay div */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-white bg-slate-900/80
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-300 ease-out z-10"
            >
              <h1 className="text-xl font-bold mb-1">Sikkim</h1>
              <p className="text-xs text-gray-200 line-clamp-3">
                Pristine forests, glaciers, and stunning mountain vistas.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-slate-900 text-white px-5 py-3 rounded-lg flex gap-3 items-center">
            View All Destinations
            <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* about us */}
      <div className="flex lg:flex-row flex-col  justify-between p-10">
        <div className="group relative h-[500px] w-[500px]">
          {/* Back image moves UP and LEFT when container is hovered */}
          <img
            src="/about1.png"
            alt="About back"
            className="h-96 absolute transition-all duration-500 ease-in-out group-hover:-translate-x-8 rounded-lg group-hover:-translate-y-8"
          />

          {/* Front image moves DOWN and RIGHT and fades when container is hovered */}
          <img
            src="/about2.png"
            alt="About front"
            className="h-96 relative top-30 left-30 transition-all duration-500 ease-in-out group-hover:translate-x-8 group-hover:translate-y-8 rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-lg text-slate-900 flex items-center gap-2">
            <GoDash />
            About Us
          </h1>
          <h2 className="text-3xl font-semibold text-slate-900">
            Explore the Mountains, Discover Yourself
          </h2>
          <p>
            We are passionate adventurers dedicated to creating unforgettable
            trekking experiences across the breathtaking landscapes of India.
            From beginner-friendly trails to challenging mountain expeditions,
            our mission is to help travelers connect with nature, embrace
            adventure, and create lifelong memories.
          </p>
          <p>
            With experienced guides, carefully planned itineraries, and a
            commitment to safety, we ensure every journey is enjoyable,
            authentic, and rewarding. Whether you're seeking peaceful nature
            walks or thrilling Himalayan treks, we're here to guide you every
            step of the way.
          </p>
          <ul className="flex gap-20 items-center">
            <li>500+ Happy Trekkers</li>
            <li>50+ Trek Routes</li>
          </ul>
          <ul className="flex gap-20 items-center">
            <li>10+ Expert Guides</li>
            <li>100% Adventure & Safety Focus</li>
          </ul>
        </div>
      </div>
      {/* Featured Treks */}
      <div className="p-10 space-y-5">
        <h1 className="text-3xl font-semibold text-slate-900 text-center">
          Featured Treks
        </h1>
        <p className="text-center">
          Discover our most popular trekking adventures across the Himalayas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {treks.map((item) => {
            return (
              <div
                key={item.id}
                className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  {/* Subtle overlay gradient for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Title and Location */}
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h2 className="text-xl font-bold text-slate-800 tracking-tight line-clamp-1">
                      {item.title}
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-100 shrink-0">
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <hr className="border-slate-100 my-3" />

                  {/* Stats & Price Row */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 text-xs font-medium text-slate-500">
                      <span className="bg-slate-50 px-2 py-1 rounded">
                        {item.difficulty}
                      </span>
                      <span className="bg-slate-50 px-2 py-1 rounded">
                        {item.duration}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">
                        From
                      </span>
                      <span className="text-lg font-extrabold text-slate-900">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* why choose us content from whatsapp */}
      <div>
        
      </div>
    </>
  );
}

export default page;
