import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ChevronRight,
  Droplet,
  Bookmark,
  Activity,
  Heart,
} from "lucide-react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";

const PeriodGuide = () => {
  usePageAnimations();

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-staymore-light-pink/30 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal fade-in-up">
            <div className="flex items-center justify-center">
              <h1 className="hero-text text-staymore-dark-purple shine">P</h1>
              <TypeAnimation
                sequence={["eriod Guide", 1000, "", 500]}
                wrapper="h1"
                cursor={true}
                repeat={Infinity}
                className="hero-text text-staymore-dark-purple shine"
                speed={1}
              />
            </div>
            <p className="text-xl italic mb-6 font-playfair text-staymore-purple">
              "It's not just a cycle—it's your rhythm, your strength."
            </p>
            <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-staymore-purple">
                  Understand the Flow, Empower the Soul
                </h2>
                <p className="mb-4 text-gray-700">
                  Your menstrual cycle is unique to you. Understanding it helps
                  you anticipate changes, manage your health, and feel more in
                  control.
                </p>
                <p className="text-gray-700">
                  Let's break down the basics of your period and how to embrace
                  this natural process with confidence.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/pic11.jpg"
                  alt="Woman smiling"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500 img-hover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium">Knowledge is power</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center text-staymore-dark-purple">
              Menstrual Cycle Basics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 stagger-container">
              <Card className="border border-staymore-pink/30 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-staymore-light-pink rounded-full p-3 mr-4 animate-pulse-soft">
                      <Calendar className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                    </div>
                    <h3 className="font-bold text-lg text-staymore-purple">
                      The Cycle Length
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Your cycle ranges from 21-35 days, counted from the first
                    day of one period to the first day of the next. The average
                    is 28 days, but yours may vary.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-staymore-pink/30 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-staymore-light-pink rounded-full p-3 mr-4 animate-pulse-soft">
                      <Clock className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                    </div>
                    <h3 className="font-bold text-lg text-staymore-purple">
                      The Four Phases
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Your cycle includes menstruation, the follicular phase,
                    ovulation, and the luteal phase. Each phase brings different
                    hormonal changes and symptoms.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-staymore-pink/30 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-staymore-light-pink rounded-full p-3 mr-4 animate-pulse-soft">
                      <Droplet className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                    </div>
                    <h3 className="font-bold text-lg text-staymore-purple">
                      The Flow
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Your period typically lasts 3-7 days. The heaviest flow
                    usually occurs in the first 1-2 days, then gradually becomes
                    lighter.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-staymore-pink/30 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-staymore-light-pink rounded-full p-3 mr-4 animate-pulse-soft">
                      <Bookmark className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                    </div>
                    <h3 className="font-bold text-lg text-staymore-purple">
                      Spotting
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Light bleeding between periods can be common. It's usually
                    harmless, but if it happens frequently, consult with a
                    healthcare provider.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-staymore-light-purple/30 rounded-lg p-8 mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-center text-staymore-dark-purple">
              How Stay More Helps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-container">
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink rounded-full p-2 mr-4 mt-1 animate-pulse-soft">
                  <Heart className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-staymore-purple">
                    Ultra-Soft Comfort
                  </h3>
                  <p className="text-gray-700">
                    Our pads offer exceptional comfort, ensuring no interruption
                    to your daily life, from school to work to play.
                  </p>
                </div>
              </div>
              <div className="flex items-start stagger-item">
                <div className="bg-staymore-pink rounded-full p-2 mr-4 mt-1 animate-pulse-soft">
                  <Activity className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-staymore-purple">
                    Track Your Cycle
                  </h3>
                  <p className="text-gray-700">
                    Keep track of your cycle with our staymore.in app for
                    personalized tips and reminders tailored just for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-staymore-dark-purple">
              Period Facts & Myths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
                <h3 className="font-bold text-green-600 mb-2">FACT</h3>
                <p className="text-gray-700">
                  Exercise can help reduce period pain by releasing endorphins
                  and improving blood circulation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-600 mb-2">MYTH</h3>
                <p className="text-gray-700">
                  You shouldn't exercise during your period. (You absolutely
                  can, and it often helps with symptoms!)
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
                <h3 className="font-bold text-green-600 mb-2">FACT</h3>
                <p className="text-gray-700">
                  Your period can change throughout your life due to age,
                  stress, weight changes, and other factors.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-600 mb-2">MYTH</h3>
                <p className="text-gray-700">
                  Having your period means you can't swim or take a bath. (With
                  proper protection, you can do both safely.)
                </p>
              </div>
            </div>
          </div>

          <div className="text-center reveal fade-in-up">
            <p className="mb-8 text-xl text-staymore-dark-purple font-playfair italic">
              "Understanding your cycle is the first step to embracing your
              body's natural rhythm."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-staymore-magenta hover:bg-staymore-magenta/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group">
                <span>Track Your Cycle</span>
                <ChevronRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-white text-staymore-magenta border border-staymore-magenta px-6 py-3 rounded-full transition-all duration-300 hover:bg-staymore-pink hover:shadow-md group">
                <span>Period Products</span>
                <ChevronRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodGuide;
