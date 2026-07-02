import React from "react";
import exploreData from "../exploredata";

export default async function Page({ params }) {
  const { slug } = await params;

  console.log("Slug:", slug);
  console.log("Explore Data:", exploreData);
  console.log("Slugs:", exploreData.map((item) => item.slug));

  const destination = exploreData.find((item) => item.slug === slug);

  console.log("Destination:", destination);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            No Destination Found
          </h1>
          <p className="text-gray-600">
            The destination you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#022c22] selection:text-white">
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[70vh] flex items-end justify-start overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover absolute inset-0 transform scale-102 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

        <div className="relative z-10 lg:ml-28 max-w-5xl px-6 md:px-12 pb-16 text-white">
          <span className="inline-block px-5 py-1 bg-[#022c22] backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Explore Destination
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 drop-shadow-sm">
            {destination.name}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
            {destination.description}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT SPLIT GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* LEFT 2 COLUMNS: CONTENT */}
          <div className="lg:col-span-2 space-y-24">
            {/* 2. TOP PLACES TO VISIT SECTION */}
            <div>
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Top Places to Visit
                </h2>
                <p className="text-slate-500 mt-2">
                  Must-see attractions to add to your custom itinerary.
                </p>
              </div>

              <div className="grid gap-8">
                {destination.topPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-6 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-full sm:w-2/5 overflow-hidden rounded-xl h-48 relative">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover transition duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="w-full sm:w-3/5 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {place.name}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {place.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. THINGS TO DO & ADVENTURE SECTION */}
            <div className="grid md:grid-cols-1 gap-8">
              {/* Things to Do */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  ✨ Things to Do
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.thingsToDo.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span className="text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Adventure Activities */}
              <div className="bg-[#022c22] p-8 rounded-2xl text-white shadow-md">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                  🏔️ Adventure Activities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.adventureActivities.map((activity, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-emerald-100"
                    >
                      <span className="text-emerald-400 mt-1">✦</span>
                      <span className="text-sm leading-snug">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT 1 COLUMN: STICKY BOOKING / ENQUIRY FORM */}
          <div className="lg:sticky lg:top-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Plan Your Trip
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Drop your details below to secure quotes and tailor your
                experience for {destination.name}.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="travelDate"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Travel Date
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    id="travelDate"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-slate-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    id="guests"
                    min="1"
                    required
                    placeholder="2"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="preferredActivity"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Preferred Activity
                </label>
                <select
                  name="preferredActivity"
                  id="preferredActivity"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-slate-600"
                >
                  <option value="">Select an adventure (Optional)</option>
                  {destination.adventureActivities.map((activity, idx) => (
                    <option key={idx} value={activity}>
                      {activity}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-emerald-600/20 transition-all duration-150 transform active:scale-[0.98] mt-2 text-center text-sm cursor-pointer"
              >
                Send Free Enquiry
              </button>
            </form>

            <div className="pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                🔒 Your privacy is safe with us. No spam, ever.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-slate-200 my-16" />

        {/* 4. MODERN FAQ SECTION */}
        {destination?.faq && destination.faq.length > 0 && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 mt-2">
                Quick answers to help plan your ultimate trip smoothly.
              </p>
            </div>

            <div className="space-y-4">
              {destination.faq.map((item, index) => (
                <details
                  key={index}
                  className="group border border-slate-200 bg-white rounded-xl transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between gap-1.5 p-5 text-slate-900 cursor-pointer focus:outline-none select-none">
                    <h5 className="font-semibold text-base md:text-lg text-slate-800 group-open:text-emerald-700 transition-colors">
                      {item.question}
                    </h5>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5 text-slate-400 group-open:text-emerald-600 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  {/* Smooth Wrapper starts here */}
                  <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 leading-relaxed text-slate-600 border-t border-slate-100 pt-3 text-sm md:text-md">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                  {/* Smooth Wrapper ends here */}
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
