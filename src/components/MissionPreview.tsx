import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Sprout, Users } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const MissionPreview: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1 reveal fade-in-right">
            {/* <h2 className="text-4xl font-bold text-staymore-dark-purple shine leading-tight mb-4">
              <span className="bg-gradient-to-r from-staymore-dark-purple via-staymore-pink to-staymore-magenta text-transparent bg-clip-text"></span>
            </h2> */}
            <div className="flex items-center mb-4">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-tight lg:leading-tight text-staymore-dark-purple shine">
                B
              </h2>
              <TypeAnimation
                sequence={["orn for Her. Built in India.", 1000, "", 500]}
                wrapper="h2"
                cursor={false}
                repeat={Infinity}
                className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-tight lg:leading-tight text-staymore-dark-purple shine"
                speed={30}
              />
            </div>

            <p className="text-xl italic mb-6 font-playfair text-staymore-purple animate-fade-in">
              "More than a pad. A purpose."
            </p>

            <p
              className="mb-6 text-gray-700 leading-relaxed animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              Stay More is not just a brand. It's a revolution. Built under the
              ICONIC Group's vision of empowering India through industry and
              innovation, Stay More addresses menstrual health, stigma, and
              dignity all at once.
            </p>

            {/* Poem Box */}
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

            {/* Mission Points */}
            <div className="mb-8 stagger-container space-y-3">
              {[
                "Create safe, reliable menstrual products",
                "Empower women to speak freely about their cycle",
                "Support rural outreach programs",
                "Be a proud voice for Make in India, Made for Women",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center stagger-item animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-staymore-purple mr-3 animate-pulse" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <Link
              to="/our-mission"
              className="inline-flex items-center text-staymore-purple hover:text-staymore-dark-purple font-semibold group animate-fade-in transition-all duration-300"
              style={{ animationDelay: "800ms" }}
            >
              Learn more about our mission
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="order-1 lg:order-2 relative reveal fade-in-left">
            <div
              className="relative z-0 h-[400px] w-auto lg:h-[500px] animate-fade-in-left rounded-lg bg-transparent"
              style={{ mixBlendMode: "multiply" }}
            >
              <div
                className="w-full h-[400px] bg-[url('/images/pic5.jpg')] bg-no-repeat bg-cover bg-center transition-transform duration-700"
                role="img"
                aria-label="Women supporting each other"
              ></div>

              {/* Card 1: Empowered Periods */}
              <div className="group absolute top-20 right-[-100px] md:top-20 md:right-[-20px] animate-slide-in-right bg-white/80 backdrop-blur-sm p-4 pr-6 pl-4 rounded-[20px] shadow-xl flex items-center gap-4 max-w-xs w-[250px] md:w-[20vw] transition-all duration-300 transform hover:-translate-x-3 z-10 hover:z-20 cursor-pointer">
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
              <div className="group absolute md:bottom-48 md:md:left-[-20px] bottom-20 w-[250px] left-[-30px] animate-slide-in-left bg-white/80 backdrop-blur-sm p-4 pr-6 pl-4 rounded-[20px] shadow-xl flex items-center gap-4 max-w-xs md:w-[20vw] transition-all duration-300 transform hover:translate-x-3 z-10 hover:z-20 cursor-pointer ">
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
              <div className="hidden group absolute right-16 bottom-[-50px] md:bottom-[10px] md:right-16 animate-slide-in-bottom bg-white/80 backdrop-blur-sm p-4 pr-6 pl-4 rounded-[20px] shadow-xl md:flex items-center gap-4 max-w-xs w-[250px] md:w-[20vw] transition-transform duration-300 will-change-transform hover:-translate-y-3 z-10 hover:z-20 cursor-pointer">
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
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-staymore-dark-purple/60" /> */}
            </div>

            {/* Floating Make in India Badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl transform z-10">
              <img
                src="/images/img2.jpg"
                alt="Make in India"
                className="h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionPreview;
