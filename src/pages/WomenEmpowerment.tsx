import React from "react";
import { Link } from "react-router-dom";
import { Users, HandHeart, School, MapPin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const WomenEmpowerment = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-staymore-light-pink/50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 reveal fade-in-up">
          <div className="flex items-center justify-center">
            <h1 className="hero-text text-staymore-dark-purple shine">P</h1>
            <TypeAnimation
              sequence={["ower in Her Pad", 1000, "", 500]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
              className="hero-text text-staymore-dark-purple shine"
              speed={1}
            />
          </div>
          <p className="text-xl italic mb-6 font-playfair text-staymore-purple">
            "When she talks, the world listens. When she bleeds, she still
            leads."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="reveal fade-in-right">
            <div className="p-6 bg-staymore-pink/30 rounded-lg mb-6 shadow-md border border-staymore-magenta/20">
              <p className="text-gray-700 italic">
                "From whispers in the shadows,
                <br />
                To speeches in the light,
                <br />
                Stay More walks with women,
                <br />
                From silence into right."
              </p>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              At Stay More, our journey is incomplete without the women we serve
              and celebrate. We work with NGOs, schools, and rural health
              workers to empower women across India.
            </p>
          </div>

          <div className="reveal fade-in-left">
            <div className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="/images/img1.jpg"
                alt="Women empowerment initiative"
                className="w-full h-[400px] rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = "/images/img1.jpg";
                }}
              />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-xl font-bold">
                  Empowering women across India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 reveal fade-in-up">
          <h2 className="text-2xl font-bold mb-6 text-staymore-magenta text-center">
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-staymore-pink/30 transform hover:scale-102 transition-transform duration-300 reveal">
              <h3 className="text-xl font-bold mb-4 text-staymore-magenta">
                Train Local Women
              </h3>
              <p className="mb-4 text-gray-700">
                We train local women as menstrual educators and distributors,
                creating employment opportunities while spreading awareness.
              </p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/img2.jpg"
                  alt="Women training program"
                  className="w-full h-60 object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-staymore-pink/30 transform hover:scale-102 transition-transform duration-300 reveal">
              <h3 className="text-xl font-bold mb-4 text-staymore-magenta">
                Health Awareness Camps
              </h3>
              <p className="mb-4 text-gray-700">
                Our teams conduct health awareness camps in remote villages,
                educating women about menstrual hygiene and overall wellness.
              </p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/pic5.jpg"
                  alt="Health awareness camp"
                  className="w-full h-60 object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-staymore-pink/30 transform hover:scale-102 transition-transform duration-300 reveal">
              <h3 className="text-xl font-bold mb-4 text-staymore-magenta">
                Free Pad Distribution
              </h3>
              <p className="mb-4 text-gray-700">
                We provide free pad kits to underprivileged girls, ensuring that
                financial constraints don't hamper their education or dignity.
              </p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/pic7.jpg"
                  alt="Free pad distribution"
                  className="w-full h-60 object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-staymore-pink/30 transform hover:scale-102 transition-transform duration-300 reveal">
              <h3 className="text-xl font-bold mb-4 text-staymore-magenta">
                Leadership Roles
              </h3>
              <p className="mb-4 text-gray-700">
                We promote leadership roles for women in manufacturing and
                sales, creating a truly inclusive workplace.
              </p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/pic8.jpg"
                  alt="Women in leadership"
                  className="w-full h-60 object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-staymore-pink/20 p-8 rounded-lg mb-16 shadow-md border border-staymore-pink/30 reveal fade-in-up">
          <h2 className="text-2xl font-bold mb-6 text-center text-staymore-magenta">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 reveal">
              <h3 className="text-3xl font-bold text-staymore-magenta mb-2">
                5,000+
              </h3>
              <p className="text-gray-700">Girls supported through free pads</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 reveal">
              <h3 className="text-3xl font-bold text-staymore-magenta mb-2">
                200+
              </h3>
              <p className="text-gray-700">Villages reached across India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 reveal">
              <h3 className="text-3xl font-bold text-staymore-magenta mb-2">
                150+
              </h3>
              <p className="text-gray-700">Women employed as educators</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 reveal">
              <h3 className="text-3xl font-bold text-staymore-magenta mb-2">
                75%
              </h3>
              <p className="text-gray-700">Female workforce in our company</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 reveal fade-in-up">
          <h2 className="text-2xl font-bold mb-6 text-staymore-magenta">
            Where We Work
          </h2>
          <p className="mb-8 text-gray-700">
            Join our movement in villages across Andhra Pradesh, Telangana,
            Karnataka & Tamil Nadu.
          </p>
          <div className="max-w-md mx-auto relative transform hover:scale-105 transition-transform duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003626.3440654048!2d75.15469584576302!3d12.95830555512407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4bfb3782f23a5%3A0x3d9f7a7d34f00a6d!2sSouth%20India!5e0!3m2!1sen!2sin!4v1713089474654!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] rounded-lg shadow-lg"
            ></iframe>

            <div className="absolute inset-0 bg-gradient-to-t from-staymore-magenta/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 reveal fade-in-up">
          <Link
            to="/contact-us"
            className="btn-primary bg-staymore-magenta hover:bg-staymore-magenta/90"
          >
            Support a Girl
          </Link>
          <Link
            to="/contact-us"
            className="btn-secondary border-staymore-magenta text-staymore-magenta hover:bg-staymore-pink/20"
          >
            Become a Stay More Sakhi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WomenEmpowerment;
