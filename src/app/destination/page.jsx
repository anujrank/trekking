import React from "react";
const destinations = [
  {
    id: 1,
    img: "/images/destinations/himachal-pradesh.jpg",
    name: "Himachal Pradesh",
  },
  {
    id: 2,
    img: "/images/destinations/uttarakhand.jpg",
    name: "Uttarakhand",
  },
  {
    id: 3,
    img: "/images/destinations/jammu-kashmir.jpg",
    name: "Jammu & Kashmir",
  },
  {
    id: 4,
    img: "/images/destinations/ladakh.jpg",
    name: "Ladakh",
  },
  {
    id: 5,
    img: "/images/destinations/sikkim.jpg",
    name: "Sikkim",
  },
  {
    id: 6,
    img: "/images/destinations/arunachal-pradesh.jpg",
    name: "Arunachal Pradesh",
  },
  {
    id: 7,
    img: "/images/destinations/meghalaya.jpg",
    name: "Meghalaya",
  },
  {
    id: 8,
    img: "/images/destinations/nagaland.jpg",
    name: "Nagaland",
  },
  {
    id: 9,
    img: "/images/destinations/manipur.jpg",
    name: "Manipur",
  },
  {
    id: 10,
    img: "/images/destinations/kerala.jpg",
    name: "Kerala",
  },
  {
    id: 11,
    img: "/images/destinations/maharashtra.jpg",
    name: "Maharashtra",
  },
  {
    id: 12,
    img: "/images/destinations/west-bengal.jpg",
    name: "West Bengal",
  },
];
function DestinationHero() {
  return (
    <div>
      {/* destination hero section */}
      <section className="relative w-full h-screen bg-slate-950 text-white flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/destination-hero.png"
            alt="Scenic trekking destination landscape"
            className="w-full h-full object-cover opacity-40 select-none"
          />
          {/* Optional gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6 md:px-4 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Explore Our <span className="text-emerald-400">Destinations</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            Discover breathtaking trekking destinations around the world. From
            the majestic Himalayas to the serene trails of Patagonia, we offer a
            wide range of trekking experiences for adventurers of all levels.
          </p>

          {/* Added a Call to Action because every good hero section needs one! */}
          <div className="pt-4">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 cursor-pointer">
              Start Your Adventure
            </button>
          </div>
        </div>
      </section>
      {/* destination list */}
    </div>
  );
}

export default DestinationHero;
