import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Users, Leaf } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
  link,
  delay,
}) => {
  return (
    <Link to={link} className="group">
      <div
        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 hover:scale-125 reveal stagger-item"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="bg-staymore-light-purple rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto group-hover:bg-staymore-purple transition-colors duration-300">
          <div className="text-staymore-purple group-hover:text-white transition-colors duration-300 animate-pulse-soft">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2 text-center text-staymore-dark-purple group-hover:text-staymore-purple transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm text-center">{description}</p>
      </div>
    </Link>
  );
};

const OurMission = () => {
  const beliefs = [
    {
      icon: (
        <Heart className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Menstrual Health is Holistic Health",
      description:
        "Caring for your menstrual health means caring for your overall wellbeing.",
      link: "/",
      delay: 100,
    },
    {
      icon: (
        <Sparkles className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Period Talk is Empowerment, not Taboo",
      description:
        "Breaking the silence around periods is essential for dignity and health.",
      link: "/",
      delay: 200,
    },
    {
      icon: (
        <Users className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Rural Women deserve Equal Access",
      description:
        "We're committed to making quality products accessible to all women.",
      link: "/",
      delay: 300,
    },
    {
      icon: (
        <Leaf className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Sustainable Manufacturing is the Future",
      description:
        "We're reducing our environmental impact with every pad we produce.",
      link: "/",
      delay: 400,
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center">
            <h1 className="hero-text text-staymore-dark-purple shine">O</h1>
            <TypeAnimation
              sequence={["ur Mission", 1000, "", 500]}
              wrapper="h1"
              cursor={false}
              repeat={Infinity}
              className="hero-text text-staymore-dark-purple shine"
              speed={1}
            />
          </div>
          <p className="text-xl font-light mb-6 font-playfair italic text-staymore-dark-purple animate-fade-in">
            "Let's talk periods, with pride."
          </p>
          <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 reveal">
          {/* Left Content */}
          <div className="animate-fade-in-right">
            <p className="mb-6 text-gray-700 leading-relaxed">
              We exist to challenge a culture of silence around menstruation...
            </p>
            <div className="p-6 bg-staymore-light-pink rounded-lg mb-6 border-l-4 border-staymore-pink">
              <p className="text-gray-700 italic">"No shame in the flow,..."</p>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Stay More is not just a brand. It's a revolution...
            </p>
            <div className="p-6 bg-staymore-light-purple rounded-lg mb-6 border-l-4 border-staymore-purple">
              <p className="text-gray-700 italic">
                "Crafted in the heart of India..."
              </p>
            </div>
          </div>

          {/* Right Image */}
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

            {/* Floating elements */}
            <div className="absolute top-1/4 -left-12 w-24 h-24 rounded-full bg-staymore-bright-pink/40 blur-2xl animate-pulse-soft"></div>
            <div className="absolute bottom-1/3 -right-16 w-32 h-32 rounded-full bg-staymore-purple/30 blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-8 left-1/4 w-20 h-20 rounded-full bg-staymore-pink blur-xl animate-float"></div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg transform">
              <img
                src="/images/pic7.jpg"
                alt="Make in India"
                className="h-20 w-auto"
              />
            </div>
            <div className="absolute top-10 -left-10 bg-white rounded-lg p-4 shadow-lg transform ">
              <p className="text-staymore-purple font-bold">Made in India</p>
              <p className="text-sm text-gray-600">With love & care</p>
            </div>
          </div>
        </div>

        <div className="wave-divider mb-16"></div>

        {/* Core Beliefs Section using SolutionCard */}
        <h2 className="text-3xl font-bold mb-8 text-center text-staymore-dark-purple reveal">
          Our Core Beliefs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 reveal">
          {beliefs.map((belief, index) => (
            <SolutionCard
              key={index}
              icon={belief.icon}
              title={belief.title}
              description={belief.description}
              link={belief.link}
              delay={belief.delay}
            />
          ))}
        </div>

        <div className="wave-divider mb-16"></div>

        {/* "We aim to" section (unchanged) */}
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
                Champion sustainability and eco-friendly initiatives
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
