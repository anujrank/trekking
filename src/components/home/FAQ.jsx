import React, { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What fitness level is required for the trek?",
      answer:
        "Most treks require basic fitness and endurance. We recommend regular walking, jogging, or exercise before your trek.",
    },
    {
      question: "What is included in the trek package?",
      answer:
        "Our packages typically include accommodation, meals, guide support, permits, and camping equipment.",
    },
    {
      question: "Is the trek safe for beginners?",
      answer:
        "Yes, many of our treks are beginner-friendly and led by experienced guides with proper safety measures.",
    },
    {
      question: "What should I pack for the trek?",
      answer:
        "Bring trekking shoes, warm clothing, a backpack, water bottle, personal medications, and rain protection.",
    },
    {
      question: "What is your cancellation and refund policy?",
      answer:
        "Refund eligibility depends on the cancellation date and trek schedule as outlined in our policy.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-2 tracking-tight">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-slate-600 mb-10">
        Everything you need to know before stepping out on the trail.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 transition-colors duration-200 ${
                openIndex === index
                  ? "bg-slate-50/80 text-slate-950"
                  : "hover:bg-slate-50/50"
              }`}
            >
              <span>{faq.question}</span>
              <span
                className={`text-xl transition-transform duration-200 ${
                  openIndex === index ? "text-slate-900 font-bold" : "text-slate-400"
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[500px] border-t border-slate-100"
                  : "max-h-0"
              }`}
            >
              <div className="p-5 text-sm text-slate-600 leading-relaxed bg-white">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
