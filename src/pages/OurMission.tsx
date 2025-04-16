import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Users, Leaf } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const OurMission = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center">
            <h1 className="hero-text text-staymore-dark-purple shine">O</h1>
            <TypeAnimation
              sequence={["ur Mission", 1000, "", 500]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
              className="hero-text text-staymore-dark-purple shine"
              speed={1}
            />
          </div>{" "}
          <p className="text-xl font-light mb-6 font-playfair italic text-staymore-dark-purple animate-fade-in">
            "Let's talk periods, with pride."
          </p>
          <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 reveal">
          <div className="animate-fade-in-right">
            <p className="mb-6 text-gray-700 leading-relaxed">
              We exist to challenge a culture of silence around menstruation. We
              believe every woman should have access to pads that not only
              protect her body, but also respect her being.
            </p>

            <div className="p-6 bg-staymore-light-pink rounded-lg mb-6 border-l-4 border-staymore-pink">
              <p className="text-gray-700 italic">
                "No shame in the flow,
                <br />
                No silence in the storm.
                <br />
                She rises every month,
                <br />
                And we are her warm."
              </p>
            </div>

            <p className="mb-6 text-gray-700 leading-relaxed">
              Stay More is not just a brand. It's a revolution. Built under the
              ICONIC Group's vision of empowering India through industry and
              innovation, Stay More addresses menstrual health, stigma, and
              dignity all at once.
            </p>

            <div className="p-6 bg-staymore-light-purple rounded-lg mb-6 border-l-4 border-staymore-purple">
              <p className="text-gray-700 italic">
                "Crafted in the heart of India,
                <br />
                To embrace every woman's soul.
                <br />
                Each pad a whisper of freedom,
                <br />
                In a world that's made her whole."
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-left">
            <div className="relative z-0 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div
                className="w-full h-[400px] bg-[url('/images/img4.jpg')] bg-no-repeat bg-cover bg-center"
                role="img"
                aria-label="Woman feeling confident and comfortable"
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-medium">
                  Comfort. Confidence. Care.
                </p>
                <p className="text-sm">Designed for the modern Indian woman</p>
              </div>
            </div>

            <div className="absolute top-1/4 -left-12 w-24 h-24 rounded-full bg-staymore-bright-pink/40 blur-2xl animate-pulse-soft"></div>
            <div className="absolute bottom-1/3 -right-16 w-32 h-32 rounded-full bg-staymore-purple/30 blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-8 left-1/4 w-20 h-20 rounded-full bg-staymore-pink blur-xl animate-float"></div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg transform rotate-3 animate-float">
              <img
                src="/images/pic7.jpg"
                alt="Make in India"
                className="h-20 w-auto"
              />
            </div>
            <div className="absolute top-10 -left-10 bg-white rounded-lg p-4 shadow-lg transform -rotate-6 animate-float">
              <p className="text-staymore-purple font-bold">Made in India</p>
              <p className="text-sm text-gray-600">With love & care</p>
            </div>
          </div>
        </div>

        <div className="wave-divider mb-16"></div>

        <h2 className="text-3xl font-bold mb-8 text-center text-staymore-dark-purple reveal">
          Our Core Beliefs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 reveal">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <Heart className="h-6 w-6 text-staymore-pink" />
            </div>
            <h3 className="font-bold mb-3 text-staymore-purple text-center">
              Menstrual Health is Holistic Health
            </h3>
            <p className="text-gray-600 text-center">
              Caring for your menstrual health means caring for your overall
              wellbeing.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="h-6 w-6 text-staymore-pink" />
            </div>
            <h3 className="font-bold mb-3 text-staymore-purple text-center">
              Period Talk is Empowerment, not Taboo
            </h3>
            <p className="text-gray-600 text-center">
              Breaking the silence around periods is essential for dignity and
              health.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <Users className="h-6 w-6 text-staymore-pink" />
            </div>
            <h3 className="font-bold mb-3 text-staymore-purple text-center">
              Rural Women deserve Equal Access
            </h3>
            <p className="text-gray-600 text-center">
              We're committed to making quality products accessible to all
              women.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <Leaf className="h-6 w-6 text-staymore-pink" />
            </div>
            <h3 className="font-bold mb-3 text-staymore-purple text-center">
              Sustainable Manufacturing is the Future
            </h3>
            <p className="text-gray-600 text-center">
              We're reducing our environmental impact with every pad we produce.
            </p>
          </div>
        </div>

        <div className="wave-divider mb-16"></div>

        <div className="bg-staymore-light-purple/30 rounded-lg p-8 mb-20 reveal">
          <h2 className="text-3xl font-bold mb-6 text-center text-staymore-dark-purple">
            We aim to:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-staymore-purple mt-2 mr-3"></div>
              <span className="text-gray-700">
                Create safe, reliable menstrual products
              </span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-staymore-purple mt-2 mr-3"></div>
              <span className="text-gray-700">
                Empower women to speak freely about their cycle
              </span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-staymore-purple mt-2 mr-3"></div>
              <span className="text-gray-700">
                Support rural outreach programs that educate and elevate
              </span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-staymore-purple mt-2 mr-3"></div>
              <span className="text-gray-700">
                Be a proud voice for Make in India, Made for Women
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md reveal fade-in-right">
              <h3 className="font-bold mb-3 text-staymore-purple">
                Manufacturing Unit
              </h3>
              <p className="text-gray-700">
                Made in Andhra Pradesh with care & precision
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md reveal fade-in-left">
              <h3 className="font-bold mb-3 text-staymore-purple">
                Distribution
              </h3>
              <p className="text-gray-700">
                PAN India & Rural Networks reaching every corner
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-700 mb-8 reveal">
          Stay More is committed to driving national conversations, local
          solutions, and personal care through every pad.
        </p>

        <div className="flex flex-wrap justify-center gap-4 reveal">
          <Link to="/women-empowerment" className="btn-primary">
            Join Our Outreach Programs
          </Link>
          <Link to="/solutions/first-period" className="btn-pink">
            Explore Our Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
