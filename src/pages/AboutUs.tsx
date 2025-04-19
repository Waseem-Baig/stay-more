import React from "react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { TypeAnimation } from "react-type-animation";

const AboutUs = () => {
  usePageAnimations();

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center">
          <h1 className="hero-text text-staymore-dark-purple shine">A</h1>
          <TypeAnimation
            sequence={["bout Us", 1000, "", 500]}
            wrapper="h1"
            cursor={false}
            repeat={Infinity}
            className="hero-text text-staymore-dark-purple shine"
            speed={10}
          />
        </div>
        <p
          className="text-xl italic mb-6 font-playfair text-staymore-purple reveal fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          "More than a pad. A purpose."
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="mb-6 text-gray-700 leading-relaxed reveal fade-in-right">
              Stay More is not just a brand. It's a revolution. Built under the
              ICONIC Group's vision of empowering India through industry and
              innovation, Stay More addresses menstrual health, stigma, and
              dignity all at once.
            </p>

            <div className="p-6 bg-staymore-light-purple rounded-xl shadow-lg border-l-4 border-staymore-magenta quote-animate mb-6">
              <p className="text-gray-700 italic leading-relaxed">
                "Crafted in the heart of India,
                <br />
                To embrace every woman's soul.
                <br />
                Each pad a whisper of freedom,
                <br />
                In a world that's made her whole."
              </p>
            </div>

            <h2
              className="text-2xl font-bold mb-4 reveal fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              We aim to:
            </h2>
            <ul className="space-y-3 mb-6 stagger-container">
              <li className="flex items-start stagger-item">
                <div className="w-2 h-2 rounded-full bg-staymore-purple mt-2 mr-3 pulse"></div>
                <span>Create safe, reliable menstrual products</span>
              </li>
              <li className="flex items-start stagger-item">
                <div className="w-2 h-2 rounded-full bg-staymore-purple mt-2 mr-3 pulse"></div>
                <span>Empower women to speak freely about their cycle</span>
              </li>
              <li className="flex items-start stagger-item">
                <div className="w-2 h-2 rounded-full bg-staymore-purple mt-2 mr-3 pulse"></div>
                <span>
                  Support rural outreach programs that educate and elevate
                </span>
              </li>
              <li className="flex items-start stagger-item">
                <div className="w-2 h-2 rounded-full bg-staymore-purple mt-2 mr-3 pulse"></div>
                <span>Be a proud voice for Make in India, Made for Women</span>
              </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-container">
              <div className="bg-white p-4 rounded-lg shadow-md stagger-item reveal hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold mb-2">Manufacturing Unit</h3>
                <p>Made in Andhra Pradesh</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md stagger-item reveal hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold mb-2">Distribution</h3>
                <p>PAN India & Rural Networks</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative reveal fade-in-left">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-pink-200 transform hover:scale-105 transition duration-500 group">
              <div
                className="w-full h-[400px] bg-[url('/images/pic1.jpg')] bg-no-repeat bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                role="img"
                aria-label="Women supporting each other"
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-staymore-dark-purple/60" />
              <div className="absolute bottom-0 left-0 p-6 text-white z-20 hover:shadow-xl">
                <p className="font-bold animate-fade-in">
                  Manufacturing Unit: Made in Andhra Pradesh
                </p>
                <p className="animate-fade-in delay-300">
                  Distribution: PAN India & Rural Networks
                </p>
              </div>
            </div>

            {/* Floating Make in India Badge */}
            <div className="absolute z-10 -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl transform">
              <img
                src="/images/img2.jpg"
                alt="Make in India"
                className="h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
