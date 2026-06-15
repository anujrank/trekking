import React from 'react';

export default function Process() {
  const steps = [
    {
      id: 1,
      title: 'Tell us about your family',
      description: "Budget, group size, kids' ages, mobility needs, food restrictions. Takes 2 minutes in our free planner tool.",
    },
    {
      id: 2,
      title: 'Get your free 2-day preview',
      description: 'Alex — your AI-powered planning guide — generates a detailed Day 1 & 2 itinerary instantly. Neighborhoods, restaurants, activities, timing, insider tips.',
    },
    {
      id: 3,
      title: 'Unlock your full trip',
      description: 'Love the preview? Upgrade from $299 for every day planned, a downloadable PDF, gear checklist, and unlimited revisions.',
    },
  ];

  return (
    <div className="bg-[#f7faf9] px-10 py-20 text-center font-sans">
      {/* Header Section */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-[#0e6245] mb-4">
          Simple Process
        </p>
        <h2 className="font-serif text-4xl font-bold text-gray-900">
          Your custom itinerary in 3 steps
        </h2>
      </div>

      {/* Steps Section */}
      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl justify-between gap-10">
        
        {/* Horizontal Connecting Line */}
        <div className="hidden lg:block absolute left-12 right-12 top-6 h-[1px] bg-[#e3eae6] z-10" />

        {steps.map((step) => (
          <div key={step.id} className="relative z-20 flex flex-1 flex-col items-start text-left">
            {/* Circle Number (ring masks the line behind it) */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#0c4a34] font-semibold text-white ring-8 ring-[#f7faf9]">
              {step.id}
            </div>
            <h3 className="mb-3 text-lg font-bold text-gray-900">
              {step.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}