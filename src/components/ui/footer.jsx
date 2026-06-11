import React from 'react'

function Footer() {
  return (
    <footer className="relative text-white py-12" style={{backgroundImage: 'url(/footer-mountain.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Trek Adventures</h3>
            <p className="text-gray-400 text-sm">
              Discover the beauty of India's most spectacular trekking destinations. 
              Adventure awaits at every step.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Trip Planner</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Safety Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@trekadventures.com</li>
              <li>Phone: +91-9876-543-210</li>
              <li>Address: Himalayan Heights,</li>
              <li>Adventure Valley</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Trek Adventures. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms & Conditions</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer