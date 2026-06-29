import React, { useState } from 'react';
import { HiChevronUp, HiChevronDown, HiOutlineEnvelope } from 'react-icons/hi2';

function FAQ() {
  // State updated to null so no accordion item is open by default
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How is this different from a travel agent?",
      answer: "Traditional travel agents book flights and hotels and take commissions on those bookings. We don't book anything — we design the plan. Our only incentive is building you the best possible trip. We're independent, unbiased, and the AI planner is available 24/7."
    },
    {
      question: "Is the AI planner actually good enough?",
      answer: "The free 2-day preview will answer that better than anything we could say. It takes 2 minutes and costs nothing. Our planner has 15 years of family adventure travel knowledge and gets better with every conversation."
    },
    {
      question: "My kids have special needs / very young ages — can you still help?",
      answer: "Absolutely. We plan trips for families with kids as young as 2, families with wheelchair accessibility needs, and families managing multiple dietary restrictions. The intake form captures everything and we build around your specific situation."
    },
    {
      question: "What if I'm not happy with my itinerary?",
      answer: "We revise until it's right — unlimited revisions are included in both paid packages. If it still doesn't meet your needs within 48 hours of purchase, we refund in full. No questions asked."
    },
    {
      question: "Do you plan domestic US trips too?",
      answer: "Yes — national park road trips, Pacific Northwest adventures, Utah canyon country, and more. International trips are more popular because families need more help navigating unfamiliar logistics, but we love domestic adventure planning too."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      
      {/* 1. Newsletter Banner Section */}
      <div className="bg-[#E6F4EA] py-12 px-6 md:px-12 dynamic-banner">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-slate-900 mb-2">
              Get our best family travel guides — free
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-light">
              Destination deep-dives, packing lists, and planning tips straight to your inbox. No spam, unsubscribe anytime.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-72">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full pl-5 pr-12 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-4 focus:ring-[#0D6246]/10 focus:border-[#0D6246] transition-all bg-white/80 backdrop-blur-sm"
              />
              <HiOutlineEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button 
              onClick={() => alert('Thanks for subscribing!')}
              className="w-full sm:w-auto bg-[#0D6246] hover:bg-[#08422F] text-white font-semibold text-sm px-7 py-3 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 duration-150 whitespace-nowrap cursor-pointer"
            >
              Send me the guides
            </button>
          </div>
        </div>
      </div>

      {/* 2. FAQ Section */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#0D6246] uppercase block mb-2">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 tracking-tight">
            Common questions
          </h2>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl bg-white overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#0D6246]/30 shadow-md shadow-emerald-950/5' : 'border-slate-200 shadow-sm'
                }`}
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-semibold text-slate-900 hover:bg-slate-50/50 transition-colors text-sm md:text-base gap-4"
                >
                  <span className={isOpen ? 'text-[#0D6246]' : 'text-slate-900'}>
                    {item.question}
                  </span>
                  <span className="text-[#0D6246] shrink-0">
                    {isOpen ? (
                      <HiChevronUp className="w-5 h-5 stroke-[1.5]" />
                    ) : (
                      <HiChevronDown className="w-5 h-5 stroke-[1.5]" />
                    )}
                  </span>
                </button>

                {/* Accordion Content Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 md:p-6 text-sm md:text-base text-slate-600 font-light leading-relaxed bg-slate-50/40">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default FAQ;