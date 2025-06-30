import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Sprout, Users } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

// Define minimal types for Spline usage
interface SplineObject {
  rotation: { x: number; y: number; z: number };
}
interface SplineInstance {
  findObjectByName?: (name: string) => SplineObject | undefined;
}

const Hero: React.FC = () => {
  const splineRef = useRef<SplineInstance | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const spline = splineRef.current;
      if (!spline) return;
      const obj = spline.findObjectByName?.("Cube"); // Change "Cube" to your object name
      if (!obj) return;
      if (e.key === "ArrowLeft") obj.rotation.y += 0.1;
      if (e.key === "ArrowRight") obj.rotation.y -= 0.1;
      if (e.key === "ArrowUp") obj.rotation.x += 0.1;
      if (e.key === "ArrowDown") obj.rotation.x -= 0.1;
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden pt-16 pb-4">
      <div className="absolute inset-0 bg-gradient-to-r from-staymore-light-pink to-staymore-light-purple/40 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right order-2 lg:order-1">
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
            className="relative z-0 h-[400px] w-auto lg:h-[500px] animate-fade-in-left rounded-lg bg-transparent order-1 lg:order-2"
            style={{ mixBlendMode: "multiply" }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 z-10 rounded-lg overflow-hidden"
              role="img"
              aria-label="Woman feeling confident and comfortable"
            >
              <Spline
                scene="https://prod.spline.design/uUr1F0sBvfVUvZcC/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
                onLoad={(spline) => {
                  splineRef.current = spline as SplineInstance;
                }}
              />
            </div>

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/10 z-0 rounded-lg"></div> */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
