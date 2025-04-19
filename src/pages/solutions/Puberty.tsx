import React from "react";
import { Link } from "react-router-dom";
import { Sprout, ArrowRight, Heart, BookOpen, Brain, Zap } from "lucide-react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const Puberty = () => {
  usePageAnimations();

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-staymore-light-pink/30 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal fade-in-up">
            <div className="flex items-center justify-center">
              <h1 className="hero-text text-staymore-dark-purple shine">P</h1>
              <TypeAnimation
                sequence={["uberty", 1000, "", 500]}
                wrapper="h1"
                cursor={false}
                repeat={Infinity}
                className="hero-text text-staymore-dark-purple shine"
                speed={1}
              />
            </div>
            <p className="text-xl italic mb-6 font-playfair text-staymore-purple">
              "Puberty is a journey, not a destination."
            </p>
            <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-staymore-purple">
                  The Change is Real, But So Is Your Strength
                </h2>
                <p className="mb-4 text-gray-700">
                  The body you knew is changing, and that's okay—embrace the new
                  you with confidence. Puberty is a natural part of growing up.
                </p>
                <p className="text-gray-700">
                  These changes might feel overwhelming at times, but remember:
                  every woman before you has gone through this same journey.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/pic5.jpg"
                  alt="Young woman"
                  className="w-full h-[420px] object-cover transform hover:scale-105 transition-transform duration-500 img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-staymore-purple/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium">Every journey is unique</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center text-staymore-dark-purple">
              Navigating Puberty
            </h2>
            <p className="text-lg text-center text-gray-700 mb-10">
              Puberty brings physical, emotional, and hormonal changes. It's
              okay to feel a little confused or overwhelmed by these new
              experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Sprout className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Physical Changes
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Growth spurts in height and weight
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Development of breast tissue
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Growth of body hair (underarms, legs, pubic area)
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Skin changes, possibly including acne
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Beginning of menstruation (your period)
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Brain className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Emotional Changes
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Mood swings and increased sensitivity
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    New feelings of attraction or interest in others
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Changes in how you feel about yourself and your body
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Desire for more independence
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Developing your own identity and values
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-staymore-light-purple/30 rounded-lg p-8 mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-center text-staymore-dark-purple">
              Tips for Puberty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="bg-staymore-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Heart className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold mb-2 text-center text-staymore-purple">
                  Self-Care
                </h3>
                <p className="text-gray-700 text-center">
                  Establish good hygiene habits. Pay attention to your body's
                  needs for sleep, nutrition, and exercise.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="bg-staymore-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <BookOpen className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold mb-2 text-center text-staymore-purple">
                  Ask Questions
                </h3>
                <p className="text-gray-700 text-center">
                  Don't be afraid to ask trusted adults about the changes you're
                  experiencing. Knowledge is empowering.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="bg-staymore-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Zap className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold mb-2 text-center text-staymore-purple">
                  Be Patient
                </h3>
                <p className="text-gray-700 text-center">
                  Everyone develops at their own pace. There's no "right"
                  timeline for puberty—your body has its own schedule.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-staymore-dark-purple">
              Common Questions About Puberty
            </h2>
            <div className="text-left bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h3 className="font-bold text-staymore-purple mb-2">
                  When does puberty start?
                </h3>
                <p className="text-gray-700">
                  Puberty typically begins between ages 8-13 for girls, but can
                  start earlier or later. It's a process that takes several
                  years.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-staymore-purple mb-2">
                  Why do I sometimes feel moody?
                </h3>
                <p className="text-gray-700">
                  Hormonal changes during puberty can affect your emotions. It's
                  normal to feel happy one moment and upset the next. Try to be
                  patient with yourself.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-staymore-purple mb-2">
                  What if I develop earlier or later than my friends?
                </h3>
                <p className="text-gray-700">
                  Every person's body has its own timeline. There's nothing
                  wrong with developing earlier or later than others—it's all
                  part of what makes you unique.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center reveal fade-in-up">
            <p className="mb-8 text-xl text-staymore-dark-purple font-playfair italic">
              "This journey of change is transforming you into the amazing
              person you're meant to be."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-staymore-magenta hover:bg-staymore-magenta/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group">
                <span>Teenage Wellness Resources</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-white text-staymore-magenta border border-staymore-magenta px-6 py-3 rounded-full transition-all duration-300 hover:bg-staymore-pink hover:shadow-md group">
                <span>First Period Guide</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puberty;
