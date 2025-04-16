import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, User } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path
      ? isScrolled
        ? "text-black"
        : "nav-item-active"
      : "";
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <nav
        className={`top-0 w-full z-50 transition-all duration-300 nav-transition ${
          isScrolled ? "bg-[#844A89] py-4 " : "bg-[#844A89] py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className={`font-bold text-xl text-staymore-light-pink`}>
              Stay More
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-item ${isActive("/")} text-white`}>
              Home
            </Link>
            <Link
              to="/about-us"
              className={`nav-item ${isActive("/about-us")} text-white`}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className={`nav-item ${isActive("/products")} text-white`}
            >
              Products
            </Link>
            <Link
              to="/our-mission"
              className={`nav-item ${isActive("/our-mission")} text-white`}
            >
              Our Mission
            </Link>

            <div className="relative group">
              <button
                onClick={toggleSolutions}
                className={`nav-item flex items-center gap-1 ${
                  location.pathname.includes("/solutions") ||
                  location.pathname === "/one-stop-solution"
                    ? "nav-item-active"
                    : ""
                } text-white`}
              >
                Solutions
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200 z-10">
                <div className="py-1 stagger-container">
                  <Link
                    to="/one-stop-solution"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-staymore-pink/20 hover:text-staymore-magenta transition-colors duration-200 stagger-item"
                  >
                    One Stop Solution
                  </Link>
                  <Link
                    to="/solutions/first-period"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-staymore-pink/20 hover:text-staymore-magenta transition-colors duration-200 stagger-item"
                  >
                    My First Period
                  </Link>
                  <Link
                    to="/solutions/period-guide"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-staymore-pink/20 hover:text-staymore-magenta transition-colors duration-200 stagger-item"
                  >
                    Period Guide
                  </Link>
                  <Link
                    to="/solutions/puberty"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-staymore-pink/20 hover:text-staymore-magenta transition-colors duration-200 stagger-item"
                  >
                    Puberty
                  </Link>
                  <Link
                    to="/solutions/tips-for-parents"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-staymore-pink/20 hover:text-staymore-magenta transition-colors duration-200 stagger-item"
                  >
                    Tips For Parents
                  </Link>
                  <Link
                    to="/solutions/cramps-irregular-bleeding"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-staymore-pink/20 hover:text-staymore-magenta transition-colors duration-200 stagger-item"
                  >
                    Cramps & Irregular Bleeding
                  </Link>
                  <Link
                    to="/solutions/PCOS"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-staymore-pink/20 hover:text-staymore-magenta transition-colors duration-200 stagger-item"
                  >
                    PCOS
                  </Link>
                  <Link
                    to="/solutions/PMS"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-staymore-pink/20 hover:text-staymore-magenta transition-colors duration-200 stagger-item"
                  >
                    PMS
                  </Link>
                  <Link
                    to="/solutions/vaginal-discharge"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-staymore-pink/20 hover:text-staymore-magenta transition-colors duration-200 stagger-item"
                  >
                    Vaginal Discharge
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/women-empowerment"
              className={`nav-item ${isActive(
                "/women-empowerment"
              )} text-white`}
            >
              Women Empowerment
            </Link>
            <Link
              to="/she-deserves-better"
              className={`nav-item ${isActive(
                "/she-deserves-better"
              )} text-white`}
            >
              She Deserves Better
            </Link>
            <Link
              to="/admin"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-staymore-pink text-staymore-magenta hover:bg-staymore-bright-pink hover:text-white transition-colors duration-200"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-staymore-dark-purple" />
            ) : (
              <Menu className="h-6 w-6 text-staymore-dark-purple" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
            isMenuOpen
              ? "max-h-screen opacity-100 shadow-lg"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4 stagger-container">
            <Link
              to="/"
              className={`block py-2 nav-item ${isActive("/")} stagger-item`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`block py-2 nav-item ${isActive(
                "/about-us"
              )} stagger-item`}
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className={`block py-2 nav-item ${isActive(
                "/products"
              )} stagger-item`}
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/our-mission"
              className={`block py-2 nav-item ${isActive(
                "/our-mission"
              )} stagger-item`}
              onClick={toggleMenu}
            >
              Our Mission
            </Link>

            <div className="stagger-item">
              <button
                onClick={toggleSolutions}
                className={`w-full text-left py-2 flex items-center justify-between nav-item ${
                  location.pathname.includes("/solutions") ||
                  location.pathname === "/one-stop-solution"
                    ? "nav-item-active"
                    : ""
                }`}
              >
                <span>Solutions</span>
                {solutionsOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              <div
                className={`pl-4 space-y-2 transition-all duration-200 ${
                  solutionsOpen
                    ? "max-h-screen opacity-100 mt-2"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <Link
                  to="/one-stop-solution"
                  className="block py-1 text-gray-700 hover:text-staymore-magenta"
                  onClick={toggleMenu}
                >
                  One Stop Solution
                </Link>
                <Link
                  to="/solutions/first-period"
                  className="block py-1 text-gray-700 hover:text-staymore-magenta"
                  onClick={toggleMenu}
                >
                  My First Period
                </Link>
                <Link
                  to="/solutions/period-guide"
                  className="block py-1 text-gray-700 hover:text-staymore-magenta"
                  onClick={toggleMenu}
                >
                  Period Guide
                </Link>
                <Link
                  to="/solutions/puberty"
                  className="block py-1 text-gray-700 hover:text-staymore-magenta"
                  onClick={toggleMenu}
                >
                  Puberty
                </Link>
                <Link
                  to="/solutions/tips-for-parents"
                  className="block py-1 text-gray-700 hover:text-staymore-magenta"
                  onClick={toggleMenu}
                >
                  Tips For Parents
                </Link>
                <Link
                  to="/solutions/cramps-irregular-bleeding"
                  className="block py-1 text-gray-700 hover:text-staymore-magenta"
                  onClick={toggleMenu}
                >
                  Cramps & Irregular Bleeding
                </Link>
              </div>
            </div>

            <Link
              to="/women-empowerment"
              className={`block py-2 nav-item ${isActive(
                "/women-empowerment"
              )} stagger-item`}
              onClick={toggleMenu}
            >
              Women Empowerment
            </Link>
            <Link
              to="/she-deserves-better"
              className={`block py-2 nav-item ${isActive(
                "/she-deserves-better"
              )} stagger-item`}
              onClick={toggleMenu}
            >
              She Deserves Better
            </Link>
            <Link
              to="/admin"
              className="flex items-center py-2 text-staymore-magenta hover:text-staymore-dark-purple stagger-item"
              onClick={toggleMenu}
            >
              <User className="h-5 w-5 mr-2" /> Admin Panel
            </Link>
          </div>
        </div>
      </nav>
      <div className="hidden md:block wave-divider bg-[#844A89]"></div>
    </div>
  );
};

export default Navbar;
