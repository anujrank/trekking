import React from "react";

// Typos fixed: TravelGuid -> TravelGuide, disc -> desc
function TravelGuide() {
  const travelGuide = [
    {
      id: 1,
      img: "/thailand-kids.png",
      category: "Southeast Asia",
      name: "Thailand with Kids: A 10-Day Family Adventure Itinerary",
      desc: "Bangkok, Chiang Mai elephant sanctuaries, and Koh Lanta sea kayaking for active families.",
      readTime: "10 min read",
      age: "Ages 5+",
    },
    {
      id: 2,
      img: "/vietnam-kids.png",
      category: "Southeast Asia",
      name: "Vietnam with Kids: A 12-Day Itinerary from Hanoi to Hoi An",
      desc: "Ha Long Bay cruise, ancient Hoi An lanterns, and incredible street food adventures.",
      readTime: "12 min read",
      age: "Ages 6+",
    },
    {
      id: 3,
      img: "/iceland-kids.png",
      category: "Europe",
      name: "Iceland with Kids: 7-Day Ring Road Family Adventure",
      desc: "Glacier hikes, ice caves, geysers, and geothermal swimming around Iceland.",
      readTime: "11 min read",
      age: "Ages 6+",
    },
    {
      id: 4,
      img: "/costa-rica.png",
      category: "Central America",
      name: "Costa Rica Family Adventure: The Ultimate 7-Day Itinerary",
      desc: "Arenal zip-lines, Monteverde cloud forests, and Manuel Antonio sea kayaking.",
      readTime: "10 min read",
      age: "Ages 5+",
    },
    {
      id: 5,
      img: "/southeast.png",
      category: "Southeast Asia",
      name: "Southeast Asia with Kids: The Complete Family Guide",
      desc: "Compare Thailand, Vietnam, Cambodia, and Bali to find the perfect family trip.",
      readTime: "14 min read",
      age: "All Ages",
    },
    {
      id: 6,
      img: "/top-10.png",
      category: "Best Of",
      name: "10 Best Adventure Travel Destinations for Active Families in 2026",
      desc: "Top-rated family adventure destinations with honest assessments and budgets.",
      readTime: "13 min read",
      age: "All Ages",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-4">
        <h3 className="text-xs font-bold uppercase text-center tracking-widest text-[#0e6245]">Travel guides</h3>
        <h1 className="text-4xl font-bold text-center">Family adventure guides</h1>
        <p className="text-center text-gray-600">
          Day-by-day itineraries and destination overviews — built from 15 years on the road.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {travelGuide.map((guide) => (
          <div 
            key={guide.id} 
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg hover:scale-[1.01] duration-300"
          >
            {/* 1. Image Wrapper Container */}
            <div className="overflow-hidden aspect-video w-full bg-gray-100">
              <img 
                src={guide.img} 
                alt={guide.name} 
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* 2. Text Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                  {guide.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-teal-700 transition-colors">
                  {guide.name}
                </h3>
                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {guide.desc}
                </p>
              </div>

              {/* 3. Footer Metadata */}
              <div className="mt-6 flex items-center justify-between text-xs font-medium text-gray-500 border-t border-[#0e6245]/20 pt-4">
                <span className="flex items-center gap-1">⏱️ {guide.readTime}</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">{guide.age}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelGuide;