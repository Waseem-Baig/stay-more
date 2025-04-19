import React from "react";
import { Link } from "react-router-dom";
import { Activity, Leaf, Flame, ArrowRight, Waves, Coffee } from "lucide-react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const CrampsIrregularBleeding = () => {
  usePageAnimations();

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-staymore-light-pink/30 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal fade-in-up">
            <div className="flex items-center justify-center">
              <h1 className="hero-text text-staymore-dark-purple shine">C</h1>
              <TypeAnimation
                sequence={["ramps & Irregular Bleeding", 1000, "", 500]}
                wrapper="h1"
                cursor={false}
                repeat={Infinity}
                className="hero-text text-staymore-dark-purple shine"
                speed={1}
              />
            </div>
            <p className="text-xl italic mb-6 font-playfair text-staymore-purple">
              "Your body speaks; we listen."
            </p>
            <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-staymore-purple">
                  Comfort When You Need It Most
                </h2>
                <p className="mb-4 text-gray-700">
                  Cramping, irregular bleeding, or discomfort don't have to rule
                  your days—here's how to take control and find relief.
                </p>
                <p className="text-gray-700">
                  Understanding the causes of your symptoms is the first step
                  toward managing them effectively and comfortably.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/pic7.jpg"
                  alt="Woman relaxing"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500 img-hover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium">Finding comfort and solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center text-staymore-dark-purple">
              Understanding the Pain
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 reveal fade-in-left">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Activity className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Menstrual Cramps
                </h3>
                <p className="text-gray-700 mb-4">
                  Menstrual cramps (dysmenorrhea) are caused by the uterus
                  contracting to shed its lining. These contractions can
                  compress blood vessels, temporarily cutting off oxygen supply
                  to the uterus, which causes pain.
                </p>
                <p className="text-gray-700">
                  Cramps often occur 1-2 days before or during menstruation and
                  typically last for 2-3 days.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 reveal fade-in-right">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Waves className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Irregular Bleeding
                </h3>
                <p className="text-gray-700 mb-4">
                  Irregular bleeding refers to unpredictable spotting, bleeding
                  between periods, heavier than normal flow, or skipped periods.
                </p>
                <p className="text-gray-700">
                  It can be caused by a variety of factors, including hormonal
                  imbalances, stress, significant weight changes, certain
                  medications, or underlying medical conditions.
                </p>
              </div>
            </div>

            <div className="bg-staymore-light-purple/30 rounded-lg p-8 reveal fade-in-up">
              <h3 className="font-bold text-xl mb-6 text-center text-staymore-dark-purple">
                When to See a Doctor
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold mb-3 text-staymore-purple">
                    For Cramps
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Severe pain that interferes with daily activities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Pain that doesn't respond to over-the-counter pain
                        relievers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Pain that gets worse over time or suddenly changes
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold mb-3 text-staymore-purple">
                    For Irregular Bleeding
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                      <span>Bleeding that lasts longer than 7 days</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Soaking through a pad or tampon every hour for several
                        hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Bleeding between periods for more than 3 months
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                      <span>Bleeding after menopause</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center text-staymore-dark-purple">
              Tips for Relief
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Flame className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Heat Therapy
                </h3>
                <p className="text-gray-700 text-center">
                  Apply a heating pad or take a warm bath to relax the muscles
                  of the uterus and increase blood flow, which can reduce
                  cramping.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Activity className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Gentle Exercise
                </h3>
                <p className="text-gray-700 text-center">
                  Light physical activity like walking, yoga, or swimming can
                  help release endorphins (natural pain relievers) and improve
                  blood circulation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Leaf className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Anti-Inflammatory Diet
                </h3>
                <p className="text-gray-700 text-center">
                  Reduce foods that may increase inflammation, like sugar and
                  processed foods. Focus on fruits, vegetables, lean proteins,
                  and whole grains.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="flex items-center mb-4">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 animate-pulse-soft">
                    <Coffee className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <h3 className="font-bold text-lg text-staymore-purple">
                    Limit Certain Substances
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Reducing caffeine, alcohol, and salt intake, especially before
                  your period, may help minimize cramps and bloating.
                </p>
                <p className="text-gray-700">
                  Try herbal teas like chamomile, peppermint, or ginger, which
                  may have soothing effects.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="flex items-center mb-4">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 animate-pulse-soft">
                    <Activity className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <h3 className="font-bold text-lg text-staymore-purple">
                    Over-the-Counter Relief
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Nonsteroidal anti-inflammatory drugs (NSAIDs) like ibuprofen
                  can help reduce cramping by decreasing prostaglandin
                  production.
                </p>
                <p className="text-gray-700">
                  Always follow package directions and consult with a healthcare
                  provider if you have concerns.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-staymore-light-purple/30 rounded-lg p-8 mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-center text-staymore-dark-purple">
              Managing Irregular Bleeding
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              If you're experiencing irregular bleeding, these strategies may
              help:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <h3 className="font-bold mb-3 text-staymore-purple">
                  Track Your Cycle
                </h3>
                <p className="text-gray-700">
                  Keep a detailed record of when bleeding occurs, how heavy it
                  is, and any accompanying symptoms. This information can be
                  valuable when discussing concerns with your healthcare
                  provider.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <h3 className="font-bold mb-3 text-staymore-purple">
                  Stress Management
                </h3>
                <p className="text-gray-700">
                  Stress can affect hormone levels and contribute to irregular
                  bleeding. Practices like meditation, deep breathing, and
                  adequate sleep may help regulate your cycle.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <h3 className="font-bold mb-3 text-staymore-purple">
                  Always Be Prepared
                </h3>
                <p className="text-gray-700">
                  Keep Stay More pads with you at all times, especially if your
                  bleeding is unpredictable. Our pads are designed for comfort
                  and reliability, giving you peace of mind.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <h3 className="font-bold mb-3 text-staymore-purple">
                  Consult a Healthcare Professional
                </h3>
                <p className="text-gray-700">
                  If irregular bleeding persists for more than three months,
                  it's important to see a doctor for proper evaluation and
                  treatment.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center reveal fade-in-up">
            <p className="mb-8 text-xl text-staymore-dark-purple font-playfair italic">
              "Your comfort matters—and with the right knowledge and tools, you
              can manage cramps and irregular bleeding effectively."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-staymore-magenta hover:bg-staymore-magenta/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group">
                <span>Learn More About Cramps</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-white text-staymore-magenta border border-staymore-magenta px-6 py-3 rounded-full transition-all duration-300 hover:bg-staymore-pink hover:shadow-md group">
                <span>Find Natural Pain Relief</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrampsIrregularBleeding;
