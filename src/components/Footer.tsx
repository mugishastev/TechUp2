import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFlickr,
  FaRss,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">kapee.</h2>
          <p className="text-lg mb-4">Shop Smart, Live Better.</p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">INFORMATION</h3>
          <ul className="space-y-2 text-sm md:text-lg">
            <li>About Us</li>
            <li>Store Location</li>
            <li>Contact Us</li>
            <li>Shipping & Delivery</li>
            <li>Latest News</li>
            <li>Our Sitemap</li>
          </ul>
        </div>

        {/* Our Service */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">OUR SERVICE</h3>
          <ul className="space-y-2 text-sm md:text-lg">
            <li>Privacy Policy</li>
            <li>Terms of Sale</li>
            <li>Customer Service</li>
            <li>Delivery Information</li>
            <li>Payments</li>
            <li>Saved Cards</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-sm md:text-lg mb-2">
            Subscribe to our mailing list to get the new updates!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="border border-gray-300 rounded-l px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-900 text-yellow-500 px-4 py-2 rounded-r font-semibold text-sm hover:bg-black transition-colors">
              SIGN UP
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            <FaFacebookF className="w-6 h-6 bg-blue-700 text-white p-1 rounded-sm" />
            <FaTwitter className="w-6 h-6 bg-blue-400 text-white p-1 rounded-sm" />
            <FaLinkedinIn className="w-6 h-6 bg-blue-500 text-white p-1 rounded-sm" />
            <FaInstagram className="w-6 h-6 bg-pink-500 text-white p-1 rounded-sm" />
            <FaFlickr className="w-6 h-6 bg-pink-400 text-white p-1 rounded-sm" />
            <FaRss className="w-6 h-6 bg-orange-500 text-white p-1 rounded-sm" />
            <FaYoutube className="w-6 h-6 bg-red-600 text-white p-1 rounded-sm" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <span>Kapee © 2025 by PressLayouts. All Rights Reserved.</span>
        <div className="flex gap-2 mt-2 md:mt-0">
          <img
            src="https://i.pinimg.com/1200x/46/ce/f9/46cef9b13d991ea91b736defe437b409.jpg"
            alt="Visa"
            className="h-6"
          />
          <img
            src="https://i.pinimg.com/1200x/92/a1/e2/92a1e27e5bdde27b89551a38dd40c2b2.jpg"
            alt="PayPal"
            className="h-6"
          />
          <img
            src="https://i.pinimg.com/736x/ff/f6/e7/fff6e7e536749d822039b505d57226eb.jpg"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="https://i.pinimg.com/1200x/42/2a/61/422a616d2467b797f906b9174ab917ed.jpg"
            alt="Amex"
            className="h-6"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
