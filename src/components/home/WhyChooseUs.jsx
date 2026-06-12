import React from "react";

function WhyChooseUs() {
  const checkItems = [
    "Award Winning Teams.",
    "Personalized Experience.",
    "Acclimatization.",
    "Safety First.",
    "Community Support",
  ];

  const cards = [
    {
      id: 1,
      title: "Safety First Approach",
      desc: "Your safety is our highest priority, with trained leaders, proper equipment, and well-planned trekking routes for every adventure.",
    },
    {
      id: 2,
      title: "Best Guides",
      desc: "Our experienced local guides provide expert navigation, valuable insights, and continuous support throughout your journey.",
    },
    {
      id: 3,
      title: "Customer Support",
      desc: "From booking to trek completion, our dedicated support team is always available to assist you whenever needed.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Main Hero Image */}
        <div className="lg:col-span-4 h-full min-h-[500px] lg:min-h-[650px] relative">
          <img
            src="/why-choose-us2.png"
            alt="Hiker looking at mountain lake"
            className="w-full h-full object-cover rounded-2xl shadow-sm"
          />
        </div>

        {/* Middle Column: Typography & Checklists */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div className="space-y-4">
            <span className="text-green-700 uppercase tracking-widest font-extrabold text-xs md:text-sm block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15]">
              Elevating Your Trekking Experience
            </h2>
            <div className="space-y-4 text-slate-500 text-sm md:text-base leading-relaxed">
              <p>
                Every trek is carefully planned to provide comfort, adventure,
                and unforgettable mountain experiences.
              </p>
              <p>
                We go beyond just organizing treks to create truly memorable
                adventures. Our experienced team ensures smooth planning and
                reliable support. Enjoy breathtaking trails, safe journeys, and
                authentic local experiences. Every detail is thoughtfully
                managed for your comfort and confidence. Explore the mountains
                with a team dedicated to your success.
              </p>
            </div>
          </div>

          {/* Sub-grid: Small Image & Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-4">
            <div className="h-48 relative">
              <img
                src="/why-choose-us1.png"
                alt="Two hikers on a summit"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="space-y-3">
              <ul className="space-y-2.5">
                {checkItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2.5 text-slate-700 font-semibold text-sm"
                  >
                    {/* Orange Check Icon */}
                    <svg
                      className="w-5 h-5 text-green-700 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button className="px-6 py-2 border-2 border-green-700 text-slate-800 text-sm font-bold rounded-full hover:bg-green-700 cursor-pointer hover:text-white transition-colors duration-300">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dark Custom Cards Stack */}
        <div className="lg:col-span-3 flex flex-col gap-5 h-full justify-between">
          {cards.map((card) => (
            <div
  key={card.id}
  className="group bg-black text-white p-6 md:p-8 rounded-[2rem] border border-green-700/10 shadow-lg flex flex-col justify-center flex-1 transition-all duration-300 hover:scale-105 hover:bg-green-700"
>
  <h3 className="text-xl font-bold mb-3 tracking-tight text-white">
    {card.title}
  </h3>

  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light transition-colors duration-300 group-hover:text-white">
    {card.desc}
  </p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
