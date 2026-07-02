"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TiStarFullOutline } from "react-icons/ti";
import {
  FiCompass,
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiHeart,
  FiMessageSquare,
  FiCheckCircle,
  FiPhone,
  FiMail,
  FiUser,
  FiShield,
} from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import FAQ from "@/components/home/FAQ";
import emailjs from "@emailjs/browser";

export default function TripPlannerPage() {
  const formRef = useRef();

  // Simplified Form State to handle input changes natively
  const [formData, setFormData] = useState({
    destination: "",
    departureDate: "",
    returnDate: "",
    flexibleDates: "No",
    duration: "",
    travelerType: "",
    adults: 1,
    children: 0,
    interests: [],
    budget: "",
    accommodation: "",
    specialRequirements: "",
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Content Arrays
  const destinations = [
    "Thailand",
    "Vietnam",
    "Cambodia",
    "Costa Rica",
    "Patagonia",
    "Iceland",
    "Tanzania",
    "Norway",
    "Bali",
    "Nepal",
    "Switzerland",
    "New Zealand",
    "Peru",
    "Bhutan",
    "Japan",
  ];
  const travelerTypes = [
    "Solo Traveler",
    "Couple",
    "Family",
    "Friends Group",
    "Corporate Group",
  ];
  const interestsList = [
    "Trekking",
    "Camping",
    "Wildlife Safaris",
    "Photography Tours",
    "Mountain Expeditions",
    "Cultural Experiences",
    "Road Trips",
    "Adventure Sports",
    "Luxury Escapes",
    "Family Adventures",
  ];
  const budgets = [
    "Under ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,00,000",
    "₹2,00,000+",
  ];
  const accommodations = [
    "Budget Hotels",
    "Standard Hotels",
    "Premium Resorts",
    "Luxury Resorts",
    "Camping & Glamping",
    "Mix of Everything",
  ];

  // Universal change handler for inputs, selects, and radios
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Special handler for checkbox array (Interests)
  const handleInterestChange = (interest) => {
    setFormData((prev) => {
      const updatedInterests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updatedInterests };
    });
  };

  // EmailJS Integration Submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSending(true);

  //   emailjs
  //     .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
  //     .then(() => {
  //       setIsSubmitted(true);
  //     })
  //     .catch((error) => {
  //       console.error("EmailJS Submission Error:", error);
  //       alert("Something went wrong. Please try again.");
  //     })
  //     .finally(() => {
  //       setIsSending(false);
  //     });
  // };
  const form = useRef();
  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    ).then((e)=>{
      alert("Form is submitted Our Team comtact you ASAP");
    }).catch((err) => {
  console.error("EmailJS Error:", err);
  alert(err.text || err.message || "Something went wrong");
});
  };

  const scrollToForm = () => {
    document
      .getElementById("planner-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden bg-[#0d1b2a] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#3a86c8] via-[#1a3d54] to-[#0d1b2a] z-0"
          aria-hidden="true"
        />
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[120px] top-1/4 left-1/2 -translate-x-1/2 z-[5] pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 select-none px-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white text-center tracking-[0.4em] uppercase text-xs md:text-sm mb-4 font-semibold font-sans bg-[#022c22] lg:py-1.5 py-1 lg:px-5 px-2 rounded-full flex items-center gap-2 shadow-lg"
          >
            <TiStarFullOutline className="hidden lg:flex text-xl text-yellow-400" />
            <span>Plan Your Perfect Adventure</span>
            <TiStarFullOutline className="hidden lg:flex text-xl text-yellow-400" />
          </motion.span>

          <motion.h1
            initial={{ y: "40vh", opacity: 0 }}
            animate={{ y: "0vh", opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[13vw] font-black text-white uppercase text-center drop-shadow-2xl tracking-tight leading-none"
          >
            Plan My Trip
          </motion.h1>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-full bg-cover bg-bottom z-10 pointer-events-none mix-blend-lighten"
          style={{ backgroundImage: "url('/planner.png')" }}
        />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f4f6f9] to-transparent z-[25]" />
      </div>

      {/* 2. WHY USE OUR TRIP PLANNER */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Why Use Our Trip Planner?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#0F6E56]"></div>
        </div>

        <div className="mb-12 rounded-2xl bg-white p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-emerald-50 rounded-xl text-[#0F6E56]">
            <FiCompass className="h-12 w-12" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Travel Designed Around You
            </h3>
            <p className="text-slate-600 leading-relaxed">
              No two travelers are the same. That's why we create customized
              itineraries tailored to your goals, schedule, and adventure level.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Personalized Itineraries",
              desc: "Every trip is designed based on your interests and travel preferences.",
              icon: FiMapPin,
            },
            {
              title: "Expert Recommendations",
              desc: "Get guidance from experienced destination specialists and trek leaders.",
              icon: FiShield,
            },
            {
              title: "Flexible Planning",
              desc: "Choose your dates, budget, accommodations, and activities.",
              icon: FiCalendar,
            },
            {
              title: "End-to-End Support",
              desc: "From planning to returning home, we're with you every step of the way.",
              icon: FiUsers,
            },
          ].map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white p-6 shadow-sm border border-slate-100 transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-block rounded-lg bg-emerald-50 p-3 text-[#0F6E56]">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-bold text-slate-900">{feat.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              How It Works
            </h2>
            <p className="mt-2 text-slate-600">
              Simple Planning in Four Easy Steps
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#0F6E56]"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                num: "01",
                title: "Tell Us About Your Trip",
                desc: "Share your destination preferences, travel dates, group size, and interests.",
              },
              {
                num: "02",
                title: "Receive Expert Recommendations",
                desc: "Our travel specialists create a personalized itinerary based on your requirements.",
              },
              {
                num: "03",
                title: "Customize Your Adventure",
                desc: "Review your itinerary and make any changes until it's perfect.",
              },
              {
                num: "04",
                title: "Confirm & Travel",
                desc: "Book with confidence and prepare for an unforgettable experience.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-xl bg-white p-6 shadow-sm border border-slate-200/60"
              >
                <span className="absolute -top-5 left-6 text-4xl font-black text-emerald-100 bg-white px-2 select-none">
                  {step.num}
                </span>
                <h4 className="mb-2 mt-2 font-bold text-slate-900">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRIP PLANNING FORM SECTION */}
      <section
        id="planner-form"
        className="py-20 container mx-auto px-4 max-w-4xl"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Let's Create Your Adventure
          </h2>
          <p className="mt-2 text-slate-600">
            Tell us a few details and we'll build a trip that's perfect for you.
          </p>
        </div>

        {isSubmitted ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-md border border-slate-100">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-[#0F6E56]">
              <FiCheckCircle className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Adventure Request Received!
            </h3>
            <p className="mt-2 text-slate-600 max-w-md mx-auto">
              Thank you,{" "}
              <span className="font-semibold text-[#0F6E56]">
                {formData.fullName}
              </span>
              . Our destination experts are already drafting your custom plan.
              Expect your free proposal in your inbox within 24-48 hours!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-sm font-semibold text-[#0F6E56] hover:underline"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit} ref={form}
            className="space-y-10 rounded-2xl bg-white p-6 shadow-md border border-slate-100 md:p-10"
          >
            {/* Hidden Input mapping multi-select array to a string for EmailJS templates */}
            <input
              type="hidden"
              name="interests"
              value={formData.interests.join(", ")}
            />

            {/* Destination Selection (Clean Select Dropdown) */}
            <div>
              <label className="mb-3 flex items-center text-lg font-bold text-slate-900">
                <FiMapPin className="mr-2 h-5 w-5 text-[#0F6E56]" /> Where Would
                You Like To Go?
              </label>
              <select
                name="destination"
                required
                value={formData.destination}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#0F6E56] focus:outline-none bg-white"
              >
                <option value="">Select a Destination</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            <hr className="border-slate-100" />

            {/* Travel Details */}
            <div>
              <label className="mb-4 flex items-center text-lg font-bold text-slate-900">
                <FiCalendar className="mr-2 h-5 w-5 text-[#0F6E56]" /> When Are
                You Planning To Travel?
              </label>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#0F6E56] focus:outline-none"
                    value={formData.departureDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Return Date
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#0F6E56] focus:outline-none"
                    value={formData.returnDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Flexible Dates
                  </label>
                  <select
                    name="flexibleDates"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#0F6E56] focus:outline-none bg-white"
                    value={formData.flexibleDates}
                    onChange={handleChange}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Duration (Days)
                  </label>
                  <input
                    type="text"
                    name="duration"
                    placeholder="e.g. 7 Days"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#0F6E56] focus:outline-none"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Traveler Information */}
            <div>
              <label className="mb-4 flex items-center text-lg font-bold text-slate-900">
                <FiUsers className="mr-2 h-5 w-5 text-[#0F6E56]" /> Who's
                Joining The Adventure?
              </label>
              <div className="grid gap-4 md:grid-cols-3 items-end">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Traveler Type
                  </label>
                  <select
                    name="travelerType"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#0F6E56] focus:outline-none bg-white"
                    value={formData.travelerType}
                    onChange={handleChange}
                  >
                    <option value="">Select Option</option>
                    {travelerTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Adults (12+ yrs)
                  </label>
                  <input
                    type="number"
                    name="adults"
                    min="1"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#0F6E56] focus:outline-none"
                    value={formData.adults}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Children (2-12 yrs)
                  </label>
                  <input
                    type="number"
                    name="children"
                    min="0"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#0F6E56] focus:outline-none"
                    value={formData.children}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Adventure Interests (Converted to Native Select Style or Checkbox Toggles) */}
            <div>
              <label className="mb-3 flex items-center text-lg font-bold text-slate-900">
                <FiHeart className="mr-2 h-5 w-5 text-[#0F6E56]" /> What Kind Of
                Experiences Do You Love?
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {interestsList.map((interest) => {
                  const isSelected = formData.interests.includes(interest);
                  return (
                    <button
                      type="button"
                      key={interest}
                      onClick={() => handleInterestChange(interest)}
                      className={`flex items-center justify-between rounded-xl border p-3 text-left text-xs transition-all ${
                        isSelected
                          ? "border-[#0F6E56] bg-emerald-50 text-[#0F6E56] font-semibold"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <span>{interest}</span>
                      {isSelected && (
                        <FiCheckCircle className="h-4 w-4 shrink-0 text-[#0F6E56]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Budget & Accommodation */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 flex items-center text-lg font-bold text-slate-900">
                  <span className="mr-2 font-semibold text-[#0F6E56]">₹</span>{" "}
                  Estimated Budget
                </label>
                <select
                  name="budget"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#0F6E56] focus:outline-none bg-white"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select Budget Range</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-3 flex items-center text-lg font-bold text-slate-900">
                  <HiOutlineBuildingOffice2 className="mr-2 h-5 w-5 text-[#0F6E56]" />{" "}
                  Accommodation Type
                </label>
                <select
                  name="accommodation"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#0F6E56] focus:outline-none bg-white"
                  value={formData.accommodation}
                  onChange={handleChange}
                >
                  <option value="">Select Lodging Type</option>
                  {accommodations.map((acc) => (
                    <option key={acc} value={acc}>
                      {acc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Special Requirements */}
            <div>
              <label className="mb-2 flex items-center text-lg font-bold text-slate-900">
                <FiMessageSquare className="mr-2 h-5 w-5 text-[#0F6E56]" />{" "}
                Anything Else We Should Know?
              </label>
              <textarea
                rows={3}
                name="specialRequirements"
                className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:border-[#0F6E56] focus:outline-none"
                placeholder="Example: We want easy trekking routes with comfortable accommodations."
                value={formData.specialRequirements}
                onChange={handleChange}
              />
            </div>

            <hr className="border-slate-100" />

            {/* Contact Details */}
            <div>
              <label className="mb-4 block text-lg font-bold text-slate-900">
                Let's Stay Connected
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <FiUser className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm focus:border-[#0F6E56] focus:outline-none"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm focus:border-[#0F6E56] focus:outline-none"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <FiPhone className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm focus:border-[#0F6E56] focus:outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <FiMapPin className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm focus:border-[#0F6E56] focus:outline-none"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Submit Banner */}
            <div className="rounded-xl bg-slate-950 p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base">
                  Your Next Adventure Starts Here
                </h4>
                <p className="text-xs text-slate-400">
                  Submit details to get a customized plan back within 24-48
                  hours.
                </p>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full md:w-auto shrink-0 cursor-pointer rounded-lg bg-[#0F6E56] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-700 active:scale-95 disabled:bg-slate-600"
              >
                {isSending ? "Sending Request..." : "Create My Trip Plan"}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* 5. FAQ SECTION */}
      <FAQ />

      {/* 6. FINAL CTA BANNER */}
      <section className="bg-[#0F6E56] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-xl">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            Ready To Explore The World?
          </h2>
          <p className="mb-8 text-emerald-100 text-sm md:text-base">
            Let's turn your travel dreams into unforgettable experiences.
          </p>
          <button
            onClick={scrollToForm}
            className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#0F6E56] shadow-lg transition-all hover:bg-slate-100 hover:scale-105 active:scale-95"
          >
            Start Planning Now
          </button>
        </div>
      </section>
    </div>
  );
}
