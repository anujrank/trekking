import React from 'react';
import { FaStar } from "react-icons/fa";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      review: '"The itinerary accounted for three kids aged 7, 10, and 13 — different energy levels and our oldest with a nut allergy. I cried at the zip-line because it was so perfect. Worth every penny."',
      place: 'Costa Rica · Adventurer package'
    },
    {
      id: 2,
      name: 'James R.',
      review: '"I was skeptical of an AI travel planner but the 2-day free preview was SO detailed that I immediately bought the full package. The restaurant suggestions alone saved us from three tourist traps."',
      place: 'Thailand · Adventurer package'
    },
    {
      id: 3,
      name: 'The Chen Family',
      review: '"We have done 4 trips through Adventure Travel Co. — Iceland, Patagonia, Japan, and Tanzania. Every time the planning gets better. Alex knows our family now."',
      place: '4 trips · Adventurer package'
    }
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Don't just take our word for it
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            See how we've helped families and adventurers create unforgettable memories around the world.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Star Rating */}
                <div className="flex gap-1 text-amber-400 mb-5">
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                </div>
                
                {/* Review Text */}
                <p className="text-slate-700 leading-relaxed italic text-base">
                  {testimonial.review}
                </p>
              </div>

              {/* User Info Footer */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="font-semibold text-slate-900 text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-sm font-medium text-[#0e6245] mt-1">
                  {testimonial.place}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Testimonial;