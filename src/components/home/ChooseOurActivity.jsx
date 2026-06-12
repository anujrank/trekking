import React from 'react'

function ChooseOurActivity() {
  const activities = [
    {
      id: 1,
      title: "Adventure",
      destinations: "15 Destination",
      // Custom inline SVG mimicking the geometric mountain peaks icon
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 20L8 6l6 14M10 20l4-7 4 7M4 20h16" />
          <circle cx="6" cy="7" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Trekking",
      destinations: "12 Destination",
      // Custom inline SVG mimicking a backpack
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="7" width="14" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M5 11h14M9 11v9M15 11v9" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Camp Fire",
      destinations: "7 Destination",
      // Custom inline SVG mimicking logs and flames
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 19l14-4M19 19L5 15" strokeLinecap="round" />
          <path d="M12 4c-2 3-3 5.5-3 8a3 3 0 006 0c0-2.5-1-5-3-8z" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Off Road",
      destinations: "15 Destination",
      // Custom inline SVG mimicking a wooden multi-directional signpost
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v18M7 6h10l2 2-2 2H7V6zM17 11H7l-2 2 2 2h10v-4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Camping",
      destinations: "13 Destination",
      // Custom inline SVG mimicking a tent setup
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4L3 19h18L12 4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 4v15M9 14h6" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Exploring",
      destinations: "25 Destination",
      // Custom inline SVG mimicking a map with a pin drop location
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 6l6-3 6 3 6-3v12l-6 3-6-3-6 3V6z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="15" cy="9" r="2" />
          <path d="M15 11c1 1.5 2 3.5 2 3.5s-1-2-2-3.5z" />
        </svg>
      )
    }
  ];

  return (
    <div 
      className="relative min-h-[600px] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between py-16 px-4 md:px-8 font-sans selection:bg-coral-500 text-white"
      style={{ 
        // Replace with your real public assets or local imports
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url('/activity.png')` 
      }}
    >

      {/* Main Title Header Layout */}
      <div className="text-center max-w-3xl mx-auto space-y-3 pt-6">
        <span className="text-[#ff5252 font-bold text-xs md:text-sm tracking-widest uppercase">
          Choose Our Activities
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-wide uppercase text-white drop-shadow-md">
          Travel Activities
        </h1>
        
        {/* Intricate Divider Line with Suitcase Center Icon */}
        <div className="flex items-center justify-center space-x-3 opacity-90 pt-1">
          <span className="text-white tracking-widest text-lg font-bold">••••</span>
          <div className="border p-1.5 rounded border-white/40">
            {/* Minimal Suitcase SVG */}
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v7zM16 4V2a1 1 0 00-1-1H9a1 1 0 00-1 1v2" />
            </svg>
          </div>
          <span className="text-white tracking-widest text-lg font-bold">••••</span>
        </div>
      </div>

      {/* Grid Display Column Container mirroring image_a1da19.png */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4 divide-x-0 md:divide-x divide-white/50">
        {activities.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col items-center text-center space-y-4 px-2 group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Centered Decorative Custom SVG */}
            <div className="p-1 transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            {/* Typography Group stack */}
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-coral-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-300/90 font-light font-sans">
                {item.destinations}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChooseOurActivity