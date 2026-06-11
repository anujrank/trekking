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

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-5">
      <h1 className="text-3xl font-bold text-slate-900 text-center tracking-tight">
        Featured Treks
      </h1>
      <p className="text-center text-slate-600 max-w-md mx-auto">
        Discover our most popular trekking adventures across the Himalayas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
        {treks.map((item) => {
          return (
            <div
              key={item.id}
              className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight line-clamp-1">
                    {item.title}
                  </h2>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-100 shrink-0">
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed flex-1">
                  {item.description}
                </p>

                <hr className="border-slate-100 my-3" />

                <div className="flex justify-between items-center">
                  <div className="flex gap-2 text-xs font-medium text-slate-500">
                    <span className="bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                      {item.difficulty}
                    </span>
                    <span className="bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                      {item.duration}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                      From
                    </span>
                    <span className="text-lg font-extrabold text-slate-900">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedTreks
