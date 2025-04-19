import React from "react";
import { CheckCircle2, Star } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const SheDeservesBetter = () => {
  const testimonials = [
    {
      quote:
        "Stay More has transformed how I feel during my period. The comfort is unmatched, and I love that it's made in India with our needs in mind.",
      name: "Priya Singh",
      location: "Delhi",
      rating: 5,
    },
    {
      quote:
        "As a gynecologist, I recommend Stay More to all my patients. It's one of the few brands that prioritizes both comfort and health.",
      name: "Dr. Anjali Sharma",
      location: "Mumbai",
      rating: 5,
    },
    {
      quote:
        "The work Stay More is doing in rural areas is commendable. I've seen firsthand how their education programs are changing lives.",
      name: "Lakshmi Devi",
      location: "NGO Worker, Tamil Nadu",
      rating: 5,
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-staymore-light-pink/50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 reveal fade-in-up">
          <div className="flex items-center justify-center">
            <h1 className="hero-text text-staymore-dark-purple shine">S</h1>
            <TypeAnimation
              sequence={["he Deserves Better", 1000, "", 500]}
              wrapper="h1"
              cursor={false}
              repeat={Infinity}
              className="hero-text text-staymore-dark-purple shine"
              speed={1}
            />
          </div>
          <p className="text-xl italic mb-6 font-playfair text-staymore-purple">
            "She doesn't stop—so why should her comfort?"
          </p>
        </div>

        <div className="p-6 bg-staymore-light-purple rounded-lg mb-12">
          <p className="text-gray-700 italic text-center">
            "Each drop she hides,
            <br />
            Each tear she swallows,
            <br />
            We stand by her cycle,
            <br />
            Through paths she follows."
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-staymore-purple mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">
                      Made in India with love & science
                    </h3>
                    <p className="text-gray-600">
                      Locally manufactured in Andhra Pradesh, creating jobs and
                      ensuring quality control.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-staymore-purple mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">
                      Driven by empathy, not just profit
                    </h3>
                    <p className="text-gray-600">
                      Our business model balances sustainability with social
                      impact to help women across India.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-staymore-purple mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">
                      Part of a larger social mission
                    </h3>
                    <p className="text-gray-600">
                      Every purchase supports our education and distribution
                      programs in rural communities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-staymore-purple mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">
                      Endorsed by medical professionals
                    </h3>
                    <p className="text-gray-600">
                      Gynecologists and rural health missions across India
                      recommend our products.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/pic8.jpg"
                alt="Woman feeling confident"
                className="w-full h-[400px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Our Social Impact
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-staymore-purple mb-2">
                  84%
                </div>
                <p className="text-gray-600">
                  Reduction in school absenteeism in our target villages
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-staymore-purple mb-2">
                  76%
                </div>
                <p className="text-gray-600">
                  Women report improved comfort and confidence
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-staymore-purple mb-2">
                  90%
                </div>
                <p className="text-gray-600">
                  Decrease in period-related health issues
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                Our quarterly impact reports are available publicly,
                demonstrating our commitment to transparency.
              </p>
              <button className="btn-secondary">View Impact Reports</button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Movement</h2>
          <p className="mb-8 text-gray-700">
            Help us spread the message of menstrual dignity and wellness across
            India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn-primary">Read Real Stories</button>
            <button className="btn-secondary">Our Social Impact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheDeservesBetter;
