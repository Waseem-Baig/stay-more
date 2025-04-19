import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Sparkles,
  MessageCircle,
  Heart,
  ArrowRight,
} from "lucide-react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const FirstPeriod = () => {
  usePageAnimations();

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-staymore-light-pink/30 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal fade-in-up">
            <div className="flex items-center justify-center">
              <h1 className="hero-text text-staymore-dark-purple shine">M</h1>
              <TypeAnimation
                sequence={["y First Period", 1000, "", 500]}
                wrapper="h1"
                cursor={false}
                repeat={Infinity}
                className="hero-text text-staymore-dark-purple shine"
                speed={1}
              />
            </div>
            <p className="text-xl font-light mb-6 font-playfair italic text-staymore-dark-purple animate-fade-in">
              "The first step to womanhood should never be feared."
            </p>
            <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-staymore-purple">
                  A New Beginning, Not a Secret
                </h2>
                <p className="mb-4 text-gray-700">
                  Your first period marks the start of a new chapter—embrace it
                  with strength, pride, and knowledge. It's a natural and
                  beautiful part of growing up.
                </p>
                <p className="text-gray-700">
                  It's a sign that your body is developing as it should, and
                  it's something to be celebrated, not feared or hidden.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/pic10.jpg"
                  alt="Young woman smiling"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500 img-hover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium">Every woman's journey is unique</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 stagger-container">
            <div className="bg-white p-6 rounded-lg shadow-md reveal">
              <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                <Calendar className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                What to Expect
              </h3>
              <p className="text-gray-600 text-center">
                Your first period typically lasts between 3-7 days. It might be
                lighter or more irregular than future periods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md reveal">
              <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                <Users className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                When It Happens
              </h3>
              <p className="text-gray-600 text-center">
                Most girls get their first period between ages 10-16, but it can
                happen earlier or later. Everyone's body has its own timeline.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md reveal">
              <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                <Sparkles className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                How to Manage
              </h3>
              <p className="text-gray-600 text-center">
                Stay More pads are your reliable partner—soft, comfortable, and
                safe for your first and every period after.
              </p>
            </div>
          </div>

          <div className="bg-staymore-light-purple/30 rounded-lg p-8 mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-center text-staymore-dark-purple">
              Tips to Make It Easier
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-container">
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink rounded-full p-2 mr-4 mt-1 animate-pulse-soft">
                  <MessageCircle className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-staymore-purple">
                    Talk to Someone You Trust
                  </h3>
                  <p className="text-gray-700">
                    Whether it's your mother, sister, friend, or teacher, having
                    a support person makes a big difference.
                  </p>
                </div>
              </div>
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink rounded-full p-2 mr-4 mt-1 animate-pulse-soft">
                  <Calendar className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-staymore-purple">
                    Start Tracking
                  </h3>
                  <p className="text-gray-700">
                    Keep a period tracker to understand your cycle better. Note
                    the start date, duration, and any symptoms.
                  </p>
                </div>
              </div>
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink rounded-full p-2 mr-4 mt-1 animate-pulse-soft">
                  <Sparkles className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-staymore-purple">
                    Be Prepared
                  </h3>
                  <p className="text-gray-700">
                    Carry a small pouch with Stay More pads and a change of
                    underwear, just in case.
                  </p>
                </div>
              </div>
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink rounded-full p-2 mr-4 mt-1 animate-pulse-soft">
                  <Heart className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-staymore-purple">
                    Community
                  </h3>
                  <p className="text-gray-700">
                    Remember, billions of women around the world share this
                    experience. You're part of an amazing community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-staymore-dark-purple">
              Common Questions About First Periods
            </h2>
            <div className="text-left bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h3 className="font-bold text-staymore-purple mb-2">
                  Will it hurt?
                </h3>
                <p className="text-gray-700">
                  Some mild cramping is normal, but severe pain isn't. Light
                  discomfort can be managed with a heating pad or gentle
                  exercise.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-staymore-purple mb-2">
                  How much blood is normal?
                </h3>
                <p className="text-gray-700">
                  The average blood loss during a period is only about 2-3
                  tablespoons, though it may seem like more. First periods are
                  often lighter.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-staymore-purple mb-2">
                  What if it starts at school or when I'm out?
                </h3>
                <p className="text-gray-700">
                  This is a common worry! That's why it's good to keep a few
                  pads in your bag. If needed, you can ask a female teacher,
                  school nurse, or friend for help.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center reveal fade-in-up">
            <p className="mb-8 text-xl text-staymore-dark-purple font-playfair italic">
              "Your first period is just one step in your amazing journey as a
              woman. Embrace it with confidence!"
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-staymore-magenta hover:bg-staymore-magenta/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group">
                <span>Explore Our Products</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-white text-staymore-magenta border border-staymore-magenta px-6 py-3 rounded-full transition-all duration-300 hover:bg-staymore-pink hover:shadow-md group">
                <span>Period Guide</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPeriod;
