import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#844A89] text-white relative">
      <div className="wave-divider transform rotate-180"></div>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Stay More</h3>
            <p className="mb-4 text-gray-300">
              Where care meets courage. Designed, developed, and made with love
              in India.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/our-mission"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/one-stop-solution"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  One Stop Solution
                </Link>
              </li>
              <li>
                <Link
                  to="/women-empowerment"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link
                  to="/she-deserves-better"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  She Deserves Better
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/solutions/first-period"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  My First Period
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/period-guide"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  Period Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/puberty"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  Puberty
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/tips-for-parents"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  Tips For Parents
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/pcos"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  PCOS
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/pms"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                >
                  PMS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-staymore-pink" />
                <span className="text-gray-300">
                  ICONIC Group, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-staymore-pink" />
                <span className="text-gray-300">+91 12345 67890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-staymore-pink" />
                <span className="text-gray-300">contact@staymore.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Stay More by ICONIC Group. All
              rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/faq"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
