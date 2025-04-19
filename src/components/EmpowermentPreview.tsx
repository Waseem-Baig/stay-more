import React from "react";
import { Link } from "react-router-dom";
import { Users, HandHeart, School, MapPin } from "lucide-react";

const EmpowermentPreview: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-staymore-light-pink/40 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 reveal fade-in-right">
            <h2 className="section-title text-staymore-magenta relative shine">
              Power in Her Pad
            </h2>
            <p className="text-xl italic mb-6 font-playfair text-staymore-purple animate-fade-in">
              "When she talks, the world listens. When she bleeds, she still
              leads."
            </p>
            <div className="p-6 bg-staymore-light-purple rounded-xl shadow-lg border-l-4 border-staymore-magenta quote-animate mb-6">
              <p className="text-gray-700 italic leading-relaxed">
                "From whispers in the shadows,
                <br />
                To speeches in the light,
                <br />
                Stay More walks with women,
                <br />
                From silence into right."
              </p>
            </div>
            <p
              className="mb-6 text-gray-700 leading-relaxed animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              At Stay More, our journey is incomplete without the women we serve
              and celebrate. We work with NGOs, schools, and rural health
              workers to empower women across India.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 stagger-container">
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink/30 rounded-full p-2 mr-3 flex-shrink-0 animate-pulse-soft">
                  <Users className="h-5 w-5 text-staymore-magenta transition-transform duration-300 hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-staymore-dark-purple">
                    Train Local Educators
                  </h3>
                  <p className="text-sm text-gray-600">
                    Empowering local women as menstrual educators & distributors
                  </p>
                </div>
              </div>
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink/30 rounded-full p-2 mr-3 flex-shrink-0 animate-pulse-soft">
                  <HandHeart className="h-5 w-5 text-staymore-magenta transition-transform duration-300 hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-staymore-dark-purple">
                    Health Awareness
                  </h3>
                  <p className="text-sm text-gray-600">
                    Conducting health awareness camps in remote villages
                  </p>
                </div>
              </div>
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink/30 rounded-full p-2 mr-3 flex-shrink-0 animate-pulse-soft">
                  <School className="h-5 w-5 text-staymore-magenta transition-transform duration-300 hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-staymore-dark-purple">
                    Free Pad Distribution
                  </h3>
                  <p className="text-sm text-gray-600">
                    Providing free pad kits to underprivileged girls
                  </p>
                </div>
              </div>
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink/30 rounded-full p-2 mr-3 flex-shrink-0 animate-pulse-soft">
                  <MapPin className="h-5 w-5 text-staymore-magenta transition-transform duration-300 hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-staymore-dark-purple">
                    Rural Outreach
                  </h3>
                  <p className="text-sm text-gray-600">
                    Present in villages across multiple states in Southern India
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in"
              style={{ animationDelay: "800ms" }}
            >
              <Link
                to="/women-empowerment"
                className="btn-primary bg-staymore-magenta hover:bg-staymore-magenta/90 animate-scale"
              >
                Support a Girl
              </Link>
              <Link
                to="/women-empowerment"
                className="btn-secondary border-staymore-magenta text-staymore-magenta hover:bg-staymore-pink/20 group"
              >
                Become a Stay More Sakhi
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative reveal fade-in-left">
            <div className="relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 group">
              <div
                className="w-full h-[400px] bg-[url('/images/pic22.png')] bg-no-repeat bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                role="img"
                aria-label="Women empowerment initiative"
              ></div>

              <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <p className="text-lg font-bold animate-fade-in">
                  Join our movement across India
                </p>
                <p className="animate-fade-in delay-300">
                  Making a difference in women's lives, one pad at a time
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-staymore-pink rounded-full p-4 shadow-lg h-24 w-24 flex items-center justify-center pulse">
              <img
                src="/images/pic7.jpg"
                alt="Female empowerment symbol"
                className="h-12 w-auto animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowermentPreview;
