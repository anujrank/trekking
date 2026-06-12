import React from 'react'

function SuccessTrekSpotlights() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Success Trek Spotlights
        </h1>
        <p className="text-black mt-2">
          Realized dreams and active routes traversed safely by our previous
          batches.
        </p>
      </div>

      {/* Kedarkantha */}
      <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-8 bg-white border border-black/20 rounded-2xl p-6 shadow-sm">
        <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
          <img
            src="success2.png"
            alt="Kedarkantha Trek"
            className="w-full object-cover max-h-[350px] hover:scale-102 transition-transform duration-500"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4 text-left">
          <h1 className="text-2xl font-bold text-slate-900">
            Kedarkantha Trek
          </h1>
          <p className="text-black leading-relaxed">
            Experience one of India's most popular winter treks with
            breathtaking Himalayan views and snow-covered trails.
          </p>
          <p className="text-black leading-relaxed">
            The journey spans 5–6 days through dense pine forests, charming
            villages, and scenic campsites. Trekkers are rewarded with a
            stunning summit offering panoramic views of Swargarohini,
            Bandarpoonch, and Black Peak.
          </p>
        </div>
      </div>

      {/* Valley of flowers */}
      <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-16 gap-8 bg-white border border-black/20 rounded-2xl p-6 shadow-sm">
        <div className="w-full lg:w-1/2 space-y-4 text-left">
          <h1 className="text-2xl font-bold text-slate-900">
            Valley of Flowers Trek
          </h1>
          <p className="text-black leading-relaxed">
            Explore a UNESCO World Heritage Site famous for its vibrant alpine
            flowers and picturesque mountain landscapes.
          </p>
          <p className="text-black leading-relaxed">
            This 6-day trek takes you through colorful meadows, waterfalls,
            and peaceful Himalayan valleys. The trail also includes a visit to
            Hemkund Sahib, one of the highest pilgrimage sites in India.
          </p>
        </div>
        <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
          <img
            src="success1.png"
            alt="Valley of Flowers Trek"
            className="w-full object-cover max-h-[350px] hover:scale-102 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  )
}

export default SuccessTrekSpotlights
