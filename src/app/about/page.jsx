'use client'

import React from 'react'
import { GoDash } from 'react-icons/go'
import { FaHiking, FaUsers, FaShieldAlt, FaLeaf } from 'react-icons/fa'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <img
          src="/footer.png"
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              About Trek Adventures
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Dedicated to creating unforgettable mountain experiences
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-bold tracking-wider uppercase text-black flex items-center gap-2">
                <GoDash className="text-xl text-emerald-400" />
                Our Story
              </h2>
              <h3 className="text-4xl font-bold text-slate-900">
                Born from a Passion for Mountains
              </h3>
            </div>
            <p className="text-black text-lg leading-relaxed">
              Trek Adventures was founded in 2015 by a group of experienced mountaineers who shared a common vision: to make trekking accessible, safe, and transformative for everyone. What started as a small initiative with just 5 guides has grown into a trusted name in the trekking industry.
            </p>
            <p className="text-black text-lg leading-relaxed">
              Our journey has been defined by our commitment to excellence, safety, and sustainable tourism. We believe that every trek is more than just a physical journey—it's a spiritual reconnection with nature and oneself.
            </p>
            <p className="text-black text-lg leading-relaxed">
              Today, we've guided over 5,000 trekkers across 50+ routes, maintained a 100% safety record, and built a community of adventure enthusiasts who share our values.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/about-us.png"
              alt="Our Story"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-900">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-black leading-relaxed text-lg">
                To provide world-class trekking experiences that are safe, sustainable, and transformative. We are committed to connecting adventurers with the breathtaking beauty of the Himalayas while preserving these pristine ecosystems and supporting local communities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-900">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-black leading-relaxed text-lg">
                To be the most trusted and innovative trekking company in South Asia, known for exceptional service, environmental stewardship, and empowering individuals to discover their true potential through mountaineering adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Safety */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Safety First</h3>
            <p className="text-black">
              Rigorous safety protocols and trained guides ensuring every trek is secure and well-managed.
            </p>
          </div>

          {/* Passion */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
              <FaHiking className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Passionate</h3>
            <p className="text-black">
              Dedicated professionals who love mountains and genuinely care about your journey.
            </p>
          </div>

          {/* Community */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Community</h3>
            <p className="text-black">
              Supporting local communities and creating positive impact through responsible tourism.
            </p>
          </div>

          {/* Sustainability */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
              <FaLeaf className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Sustainable</h3>
            <p className="text-black">
              Committed to preserving nature and promoting eco-friendly trekking practices.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            By The Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#e5a93b] mb-2">5000+</div>
              <p className="text-white text-lg">Happy Trekkers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#e5a93b] mb-2">50+</div>
              <p className="text-gray-300 text-lg">Trek Routes</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#e5a93b] mb-2">25+</div>
              <p className="text-gray-300 text-lg">Expert Guides</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#e5a93b] mb-2">100%</div>
              <p className="text-gray-300 text-lg">Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-16">
          Our dedicated team of experienced guides, administrators, and adventure enthusiasts are committed to making your trek unforgettable.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
              <div className="text-6xl">👨‍💼</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Rajesh Kumar</h3>
              <p className="text-[#e5a93b] font-semibold mb-3">Founder & Lead Guide</p>
              <p className="text-slate-600">
                15+ years of mountaineering experience. Expert on Himalayan trails with a passion for safety and sustainability.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
              <div className="text-6xl">👩‍⚕️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Priya Sharma</h3>
              <p className="text-[#e5a93b] font-semibold mb-3">Medical Officer</p>
              <p className="text-slate-600">
                Certified mountaineering medic ensuring health and safety of all trekkers. Emergency response specialist.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
              <div className="text-6xl">👨‍🏫</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Vikram Singh</h3>
              <p className="text-[#e5a93b] font-semibold mb-3">Head Guide</p>
              <p className="text-slate-600">
                Certified wilderness guide with expertise in route planning and local culture education. 12 years experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Why Choose Trek Adventures
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Experienced Guides</h3>
                <p className="text-slate-600">
                  Our guides have years of mountaineering experience and intimate knowledge of every trail.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Safety Certified</h3>
                <p className="text-slate-600">
                  100% safety record with certified guides, medical support, and emergency protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Affordable Pricing</h3>
                <p className="text-slate-600">
                  Competitive rates with transparent pricing and customizable packages for every budget.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Community Impact</h3>
                <p className="text-slate-600">
                  We support local communities and practice sustainable tourism at every trek.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">All Skill Levels</h3>
                <p className="text-slate-600">
                  Beginner-friendly to challenging expeditions. We have a trek for everyone.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Support</h3>
                <p className="text-slate-600">
                  Round-the-clock customer support before, during, and after your trek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-600">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90">
            Join thousands of trekkers who have experienced the magic of the Himalayas with Trek Adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg">
              Explore Treks
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
