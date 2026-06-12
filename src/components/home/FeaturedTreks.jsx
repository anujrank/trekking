import React from 'react'

function FeaturedTreks() {
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
    },
  ]

  // Helper function to color code difficulty tiers cleanly
  const getDifficultyStyles = (difficulty) => {
    const diff = difficulty.toLowerCase()
    if (diff.includes('difficult')) {
      return 'bg-white text-black border-black/20'
    }
    if (diff.includes('moderate')) {
      return 'bg-white text-black border-black/20'
    }
    return 'bg-white text-black border-black/20'
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto space-y-6 selection:bg-slate-900 selection:text-white">
      {/* Header Section */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Featured Treks
        </h2>
        <p className="text-black max-w-md mx-auto text-sm md:text-base leading-relaxed">
          Discover our most popular trekking adventures across the Himalayas.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
        {treks.map((item) => {
          return (
            <div
              key={item.id}
              className="group flex flex-col bg-white border border-black/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle dark vignette overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Location Badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/95 text-slate-900 shadow-sm backdrop-blur-xs border border-black/20">
                  <svg className="w-3 h-3 text-emerald-400 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {item.location}
                </span>
              </div>

              {/* Content Space */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-black transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-black line-clamp-2 mb-5 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Separator */}
                <div className="w-full h-[1px] bg-black/20 mb-4" />

                {/* Footer Section: Meta Metrics & Pricing */}
                <div className="flex justify-between items-center gap-2">
                  {/* Duration & Difficulty */}
                  <div className="flex flex-col sm:flex-row gap-2 text-xs font-semibold">
                    <span className={`px-2.5 py-1 rounded-lg border text-center ${getDifficultyStyles(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    <span className="inline-flex items-center justify-center gap-1 bg-white text-black px-2.5 py-1 rounded-lg border border-black/20">
                      <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2 text-black" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.duration.split(' / ')[0]}
                    </span>
                  </div>

                  {/* Pricing Matrix */}
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-black block font-bold uppercase tracking-wider leading-none mb-0.5">
                      Per Person
                    </span>
                    <span className="text-xl font-black text-emerald-400 tracking-tight">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <button className='bg-green-700 text-white px-7 py-3 cursor-pointer rounded-lg hover:bg-black transition-all duration-500'>View All Trek</button>
      </div>
    </div>
  )
}

export default FeaturedTreks