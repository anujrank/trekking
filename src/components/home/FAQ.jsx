'use client'

import React, { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Your exact text from the original array preserved completely
  const faqs = [
    {
      question: "What fitness level is required for the trek?",
      answer:
        "Most treks require basic fitness and endurance. We recommend regular walking, jogging, or cardio exercise at least 3-4 weeks before your trek departure.",
    },
    {
      question: "What is included in the trek package?",
      answer:
        "Our packages typically include premium tent accommodations, all nutritious mountain meals, certified wilderness guide support, forestry permits, and safety equipment.",
    },
    {
      question: "Is the trek safe for beginners?",
      answer:
        "Yes, many of our routes are specifically structured to welcome beginner trekkers. They feature gentle ascents and are led by expert safety-certified guides.",
    },
    {
      question: "What should I pack for the trek?",
      answer:
        "We recommend sturdy trekking shoes, layered warm fleece clothing, a comfortable 40-60L backpack, insulated water bottles, personal medication, and rain layers.",
    },
    {
      question: "What is your cancellation and refund policy?",
      answer:
        "Refund eligibility depends entirely on your cancellation timeline relative to the batch departure dates. Please review our terms page for complete timeline thresholds.",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-16 font-sans selection:bg-slate-900 selection:text-white bg-[#FAF9F6]">
      {/* 2-Column Responsive Split Layout inspired by image_94c4c0.png */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading Block & Badge with Image Styling Controls */}
        <div className="lg:col-span-5 space-y-6">
          {/* FAQ Outline Pill Badge */}
          <div className="inline-block">
            <span className="text-[#e5a93b] border border-[#e5a93b]/40 bg-[#e5a93b]/5 font-bold text-xs px-3 py-1 rounded-full tracking-wider uppercase">
              FAQ's
            </span>
          </div>

          {/* Styled Header Split */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800 leading-[1.15]">
            Frequently Asked <br />
            <span className="text-[#e5a93b] italic font-serif font-normal block mt-1">Questions</span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
           Planning your next trekking adventure? Find answers to the most common questions about our treks, safety standards, bookings, accommodations, guides, and equipment. We aim to make your journey smooth, safe, and memorable from start to finish. Whether you're a beginner or an experienced trekker, our FAQ section provides the information you need before hitting the trail. Explore the details below and get ready for an unforgettable mountain experience.
          </p>
        </div>

        {/* Right Column: Borderless Accordion Stack */}
        <div className="lg:col-span-7 divide-y divide-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                {/* Accordion Row Header Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center py-4 text-left font-bold text-base md:text-lg text-slate-800 hover:text-[#e5a93b] transition-colors duration-200 gap-4 group"
                >
                  {/* Minimalist Leading Plus / Minus Indicator */}
                  <span className="flex items-center justify-center w-6 h-6 shrink-0 text-slate-700 group-hover:text-[#e5a93b] transition-transform duration-300">
                    {isOpen ? (
                      <svg className="w-5 h-5 stroke-current stroke-[2]" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 stroke-current stroke-[2]" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                  </span>

                  <span className="tracking-tight font-semibold">{faq.question}</span>
                </button>

                {/* Content Panel Transition Area */}
                <div
                  className={`grid transition-all duration-300 ease-in-out text-slate-600 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-10 pr-4 pb-4 text-sm md:text-base leading-relaxed text-slate-500">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ