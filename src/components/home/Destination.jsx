import React, { useState } from "react";

function Destination() {
  const destinations = [
    {
      id: 1,
      name: "Thailand",
      region: "Southeast Asia",
      duration: 10,
      description: "Bangkok chaos, Chiang Mai jungles, and southern island snorkeling.",
      age: "Ages 5+",
      bgClass: "bg-[#09523c]", // Dark teal/green
    },
    {
      id: 2,
      name: "Vietnam",
      region: "Southeast Asia",
      duration: 12,
      description: "Ha Long Bay cruise, Hoi An lanterns, and the world's best street food.",
      age: "Ages 6+",
      bgClass: "bg-[#0c7052]", // Medium teal/green
    },
    {
      id: 3,
      name: "Cambodia",
      region: "Southeast Asia",
      duration: 8,
      description: "Angkor Wat sunrise and Mekong river dolphin spotting.",
      age: "Ages 8+",
      bgClass: "bg-[#6c4212]", // Warm brown
    },
    {
      id: 4,
      name: "Costa Rica",
      region: "Americas",
      duration: 7,
      description: "Volcano zip-lines, white-water rafting, and cloud forest wildlife.",
      age: "Ages 5+",
      bgClass: "bg-[#1d420b]", // Dark forest green
    },
    {
      id: 5,
      name: "Patagonia",
      region: "Americas",
      duration: 10,
      description: "W Trek hiking, Perito Moreno glacier walk, and horseback riding.",
      age: "Ages 10+",
      bgClass: "bg-[#0f4682]", // Deep blue
    },
    {
      id: 6,
      name: "Iceland",
      region: "Europe",
      duration: 7,
      description: "Glacier hikes, Northern Lights, geysers, and geothermal swimming.",
      age: "Ages 6+",
      bgClass: "bg-[#252063]", // Midnight blue
    },
    {
      id: 7,
      name: "Tanzania",
      region: "Africa",
      duration: 10,
      description: "Serengeti migration, Ngorongoro Crater, and Zanzibar beaches.",
      age: "Ages 6+",
      bgClass: "bg-[#7c3216]", // Burnt orange/red-brown
    },
    {
      id: 8,
      name: "Norway",
      region: "Europe",
      duration: 8,
      description: "Sognefjord kayaking, Preikestolen hike, and Bergen funicular.",
      age: "Ages 8+",
      bgClass: "bg-[#033463]", // Dark blue
    },
    {
      id: 9,
      name: "Bali",
      region: "Southeast Asia",
      duration: 10,
      description: "Rice terrace cycling, volcano sunrise, and surf lessons for teens.",
      age: "Ages 6+",
      bgClass: "bg-[#424441]", // Charcoal gray
    },
  ];

  const regions = ["All regions", "Southeast Asia", "Americas", "Europe", "Africa"];
  const [selectedRegion, setSelectedRegion] = useState("All regions");

  // Filter functionality
  const filteredDestinations = selectedRegion === "All regions"
    ? destinations
    : destinations.filter(dest => dest.region === selectedRegion);

  return (
    <div className="bg-[#f7faf9] min-h-screen pb-20">
      {/* Header section */}
      <div className="mx-auto max-w-5xl px-10 pt-20 pb-10 text-center font-sans space-y-4">
        <h3 className="text-[#0e6245] font-semibold text-xs tracking-widest uppercase">Destinations</h3>
        <h1 className="text-4xl font-bold text-gray-900">
          Where will your family adventure?
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From jungle zip-lines to glacier hikes — 62 destinations, all with expert day-by-day planning.
        </p>

        {/* Filter Buttons */}
        <div className="pt-4 flex flex-wrap justify-center gap-3">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-full transition-colors cursor-pointer ${
                selectedRegion === region
                  ? "bg-[#0c4a34] text-white border-[#0c4a34]"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout Section */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col transition-transform transition hover:shadow-lg hover:scale-[1.01] duration-300"
            >
              {/* Colored Banner section */}
              <div className={`h-36 ${dest.bgClass} flex items-center justify-center p-4`}>
                <h2 className="text-white font-serif text-3xl font-bold tracking-wide">
                  {dest.name}
                </h2>
              </div>

              {/* Content section */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-blue-800 uppercase block mb-1">
                    {dest.region}
                  </span>
                  <h4 className="text-gray-900 font-bold text-sm">
                    {dest.name} — <span className="font-normal">{dest.duration} days</span>
                  </h4>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                {/* Age Tag */}
                <div>
                  <span className="inline-block bg-[#ebf6f2] text-[#0e6245] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {dest.age}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destination;