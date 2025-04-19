import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Sprout, Users } from "lucide-react";
import { TypeAnimation } from "react-type-animation"; // Import the TypeAnimation component
import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden pt-16 pb-4">
      <div className="absolute inset-0 bg-gradient-to-r from-staymore-light-pink to-staymore-light-purple/40 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right">
            <div className="mb-4">
              <div className="flex items-center justify-start">
                <h1 className="hero-text text-staymore-dark-purple shine">S</h1>
                <TypeAnimation
                  sequence={["tay More: Where", 1000, "", 500]}
                  wrapper="h1"
                  cursor={false}
                  repeat={Infinity}
                  className="hero-text text-staymore-dark-purple shine"
                  speed={1}
                />
              </div>
              <div className="flex items-center justify-start">
                <h1 className="hero-text text-staymore-dark-purple shine">C</h1>
                <TypeAnimation
                  sequence={["are Meets Courage", 1000, "", 500]}
                  wrapper="h1"
                  cursor={false}
                  repeat={Infinity}
                  className="hero-text text-staymore-dark-purple shine"
                  speed={1}
                />
              </div>
            </div>
            <p
              className="text-xl font-light mb-6 font-playfair italic text-staymore-dark-purple animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              "Stay More. Be More. Because your period deserves more than just a
              product—it deserves understanding."
            </p>
            {/* <div
              className="p-6 bg-staymore-light-purple rounded-xl shadow-lg border-l-4 border-staymore-magenta quote-animate mb-6 bg-clip-padding backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-200"
              style={{
                animationDelay: "400ms",
              }}
            >
              <div className="absolute inset-0 z-[-1] rounded-xl border border-staymore-bright-pink/30"></div>
              <p className="text-gray-700 italic leading-relaxed">
                “A pad that breathes comfort,
                <br />
                A promise stitched in care.
                <br />
                For every woman's cycle,
                <br />
                We stand aware and fair.”
              </p>
            </div> */}

            <p
              className="mb-8 text-gray-700 leading-relaxed animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              Welcome to Stay More, a movement born from the belief that
              menstrual wellness is not a luxury—it's a right. Designed,
              developed, and made with love in India, our sanitary pads are
              chemical-free, ultra-soft, and responsibly manufactured, keeping
              your comfort, health, and dignity at the core.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8 stagger-container">
              <div className="flex items-center stagger-item">
                <div className="w-3 h-3 rounded-full bg-staymore-bright-pink mr-3 pulse"></div>
                <span className="text-gray-700">
                  100% Skin-Friendly & Rash-Free
                </span>
              </div>
              <div className="flex items-center stagger-item">
                <div className="w-3 h-3 rounded-full bg-staymore-bright-pink mr-3 pulse"></div>
                <span className="text-gray-700">Eco-Aware Manufacturing</span>
              </div>
              <div className="flex items-center stagger-item">
                <div className="w-3 h-3 rounded-full bg-staymore-bright-pink mr-3 pulse"></div>
                <span className="text-gray-700">Trusted by Doctors</span>
              </div>
              <div className="flex items-center stagger-item">
                <div className="w-3 h-3 rounded-full bg-staymore-bright-pink mr-3 pulse"></div>
                <span className="text-gray-700">
                  Voice for Menstrual Dignity
                </span>
              </div>
            </div>
            <p
              className="text-lg font-medium text-staymore-bright-pink mb-8 animate-fade-in"
              style={{ animationDelay: "800ms" }}
            >
              "Your menstrual wellbeing is our responsibility."
            </p>
            <div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in"
              style={{ animationDelay: "1000ms" }}
            >
              <Link
                to="/products"
                className="btn-primary btn-ripple btn-gradient-flow"
              >
                Explore Our Products
              </Link>
              <Link
                to="/women-empowerment"
                className="btn-secondary btn-morph btn-icon-slide group"
              >
                Join the Movement{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div
            className="relative z-0 h-[400px] w-auto lg:h-[500px] animate-fade-in-left rounded-lg bg-transparent"
            style={{ mixBlendMode: "multiply" }} // Or try 'screen', 'overlay', etc.
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat z-0 rounded-lg"
              style={{
                backgroundImage: "url('/images/pic22.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "transparent",
              }}
              role="img"
              aria-label="Woman feeling confident and comfortable"
            ></div>

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/10 z-0 rounded-lg"></div> */}
            {/* Card 1: Empowered Periods */}
            <div className="group absolute top-5 right-[-50px] md:top-10 md:right-[-20px] animate-slide-in-right bg-white/80 backdrop-blur-sm p-4 pr-6 pl-4 rounded-[20px] shadow-xl flex items-center gap-4 max-w-xs w-[250px] md:w-[20vw] transition-all duration-300 transform hover:-translate-x-3 z-10 hover:z-20 cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-200">
                <Users className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  Empowered Periods
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  We go beyond products—toward education and dignity.
                </p>
              </div>
            </div>
            {/* Card 2: Kind to Skin */}
            <div className="group absolute md:bottom-32 md:md:left-[-20px] bottom-20 w-[250px] left-[-30px] animate-slide-in-left bg-white/80 backdrop-blur-sm p-4 pr-6 pl-4 rounded-[20px] shadow-xl flex items-center gap-4 max-w-xs md:w-[20vw] transition-all duration-300 transform hover:translate-x-3 z-10 hover:z-20 cursor-pointer ">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-green-200">
                <Sprout className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  Kind to Skin
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Soft, safe, and completely chemical-free.
                </p>
              </div>
            </div>
            {/* Card 3: Made in India */}
            <div className="hidden group absolute right-16 bottom-[-50px] md:bottom-[-60px] md:right-16 animate-slide-in-bottom bg-white/80 backdrop-blur-sm p-4 pr-6 pl-4 rounded-[20px] shadow-xl md:flex items-center gap-4 max-w-xs w-[250px] md:w-[20vw] transition-transform duration-300 will-change-transform hover:-translate-y-3 z-10 hover:z-20 cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200">
                <Droplet className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  Made in India
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Crafted with care, by women and for women.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
