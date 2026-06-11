import React from 'react'

function WhyChooseUs() {
  return (
    <div className="text-center py-16 px-6 max-w-7xl mx-auto space-y-5 bg-slate-50/50 rounded-3xl my-12 border border-slate-100">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
        Why Choose Us
      </h1>
      <p className="text-slate-600 max-w-md mx-auto">
        We combine structured mountain planning with localized mastery for an
        optimal trekking expedition.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pt-8">
        {/* 1st */}
        <div className="flex flex-col justify-center items-center text-center space-y-3 p-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
            <img src="/award.svg" alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-lg font-bold text-slate-900">
            Award Winning Teams
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
            Experienced professionals delivering exceptional trekking
            adventures with dedication.
          </p>
        </div>
        {/* 2nd */}
        <div className="flex flex-col justify-center items-center text-center space-y-3 p-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
            <img src="/personalized.svg" alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-lg font-bold text-slate-900">
            Personalized Experience
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
            Customized itineraries designed to match your goals and
            preferences.
          </p>
        </div>
        {/* 3rd */}
        <div className="flex flex-col justify-center items-center text-center space-y-3 p-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
            <img src="/guides.svg" alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-lg font-bold text-slate-900">Best Guides</h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
            Knowledgeable local guides ensuring memorable journeys through
            every trail.
          </p>
        </div>
        {/* 4th */}
        <div className="flex flex-col justify-center items-center text-center space-y-3 p-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
            <img src="/acclimatization.svg" alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-lg font-bold text-slate-900">
            Acclimatization
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
            Carefully planned schedules helping trekkers adjust comfortably to
            altitude.
          </p>
        </div>
        {/* 5th */}
        <div className="flex flex-col justify-center items-center text-center space-y-3 p-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
            <img src="/safety.svg" alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-lg font-bold text-slate-900">Safety First</h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
            Strict safety standards maintained throughout every trek and
            expedition.
          </p>
        </div>
        {/* 6th */}
        <div className="flex flex-col justify-center items-center text-center space-y-3 p-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
            <img src="/community.svg" alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-lg font-bold text-slate-900">
            Community Support
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
            Supporting local communities while promoting responsible and
            sustainable tourism.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
