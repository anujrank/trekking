import React, { useState } from 'react';

function Faq() {
  // State to track which accordion item is currently open
  const [openIndex, setOpenIndex] = useState(0); // Default first one open as seen in image_bad7cc.png

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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
              Get our best family travel guides — free
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Destination deep-dives, packing lists, and planning tips straight to your inbox. No spam, unsubscribe anytime.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full sm:w-64 px-4 py-2.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D6246]"
            />
            <button className="w-full sm:w-auto bg-[#0D6246] hover:bg-[#08422F] text-white font-medium text-sm px-6 py-2.5 rounded-full transition-colors whitespace-nowrap">
              Send me the guides
            </button>
          </div>
        </div>
      </div>

      {/* 2. FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-[#0D6246] uppercase block mb-2">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
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
                className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden"
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors text-sm md:text-base"
                >
                  <span>{item.question}</span>
                  <span className={`transform transition-transform duration-200 text-[#0D6246] font-semibold text-lg`}>
                    {isOpen ? (
                      // Up Chevron
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      // Down Chevron
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Accordion Content Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-60 border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 text-sm md:text-base text-slate-600 leading-relaxed bg-[#F8F9FA]">
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

export default Faq;