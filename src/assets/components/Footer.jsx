import React from 'react';
import { Link } from 'react-router-dom';
import insta from '../insta.png';
import facebook from '../fb.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12 text-sm text-gray-700 rounded-t-xl shadow-md">



      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 md:divide-x divide-gray-300">

        {/* Branches */}
        <div className="space-y-4 md:pr-6">
          <div>
            <h4 className="font-semibold text-md">🇹🇭 Sukhumvit Branch</h4>
            <p>4/1 Sukhumvit 49 Alley, Watthana, Bangkok 10110</p>
            <p>📞 02-023-7165</p>
          </div>
          <div>
            <h4 className="font-semibold text-md">🇹🇭 Ratchadaphisek Branch</h4>
            <p>Smith Privé, Soi 566, Ratchadaphisek Rd, Chatuchak, Bangkok 10310</p>
            <p>📞 02-539-7543</p>
          </div>
          <div>
            <h4 className="font-semibold text-md">🇹🇭 Vibhavadi Branch</h4>
            <p>3rd Floor, Exit 2.5 BTS, Lat Phrao, Bangkok 10330</p>
            <p>📞 064-962-8222, 02-115-5336</p>
          </div>
        </div>

        {/* Pages + Newsletter */}
        <div className="space-y-6 md:px-6">
          {/* Pages */}
          <div>
            <h4 className="font-semibold text-md mb-1">Pages</h4>
            <ul className="space-y-1">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/membership">Membership</Link></li>
              <li><Link to="/blog">News & Articles</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-left py-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">💌 Beauty in Your Inbox</h4>
            <p className="text-sm text-gray-500 mb-3">Get skincare tips, self-care secrets & special offers.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
              }}
              className="flex justify-center gap-2 max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
              <button
                type="submit"
                className="bg-[#d9b294] text-black px-4 py-2 rounded hover:bg-[#b78b69] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4 md:pl-6">
          <h4 className="font-semibold text-md mb-2">Follow Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <img src={facebook} alt="Facebook" className="w-5 h-5" />
              <span>Smith Privé Aesthetique</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={insta} alt="Instagram" className="w-5 h-5" />
              <span>@smith_clinic</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">📍</span>
              <span>Smith Skin</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Info */}
      <div className="text-center text-xs text-gray-400 py-4 border-t">
        © 2025 Smith Pixie Aesthetique | <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms" className="hover:underline">Terms of Use</Link>
      </div>
    </footer>
  );
}
