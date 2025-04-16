import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  BookOpen,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const TipsForParents = () => {
  usePageAnimations();

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-staymore-light-pink/30 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal fade-in-up">
            <div className="flex items-center justify-center">
              <h1 className="hero-text text-staymore-dark-purple shine">T</h1>
              <TypeAnimation
                sequence={["ips For Parents", 1000, "", 500]}
                wrapper="h1"
                cursor={true}
                repeat={Infinity}
                className="hero-text text-staymore-dark-purple shine"
                speed={1}
              />
            </div>
            <p className="text-xl italic mb-6 font-playfair text-staymore-purple">
              "Your support means the world to her."
            </p>
            <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-staymore-purple">
                  Guiding Her Through Every Phase
                </h2>
                <p className="mb-4 text-gray-700">
                  Navigating your daughter's journey through puberty can be
                  challenging, but your guidance is her strength.
                </p>
                <p className="text-gray-700">
                  By providing support, information, and reassurance, you can
                  help her embrace this transformative time with confidence.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/pic6.jpg"
                  alt="Mother and daughter"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 img-hover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium">
                    Building trust and open communication
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center text-staymore-dark-purple">
              How Parents Can Help
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="flex items-start">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 mt-1 animate-pulse-soft">
                    <MessageCircle className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-staymore-purple">
                      Start the Conversation Early
                    </h3>
                    <p className="text-gray-700">
                      Don't wait for the first period to talk about
                      menstruation. Begin conversations about body changes and
                      periods when your daughter is around 8-10 years old,
                      before puberty begins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="flex items-start">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 mt-1 animate-pulse-soft">
                    <Heart className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-staymore-purple">
                      Normalize the Discussion
                    </h3>
                    <p className="text-gray-700">
                      Break the stigma around periods with age-appropriate
                      conversations. Use proper terminology and speak
                      matter-of-factly to show that menstruation is a natural,
                      healthy process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="flex items-start">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 mt-1 animate-pulse-soft">
                    <BookOpen className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-staymore-purple">
                      Provide Resources
                    </h3>
                    <p className="text-gray-700">
                      Offer books, websites, or videos about puberty and
                      menstruation. Having multiple sources of information can
                      reinforce your conversations and give her privacy to learn
                      at her own pace.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="flex items-start">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 mt-1 animate-pulse-soft">
                    <Users className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-staymore-purple">
                      Be Supportive, Not Critical
                    </h3>
                    <p className="text-gray-700">
                      Let her know that her body's changes are natural, and her
                      feelings are valid. Create a judgment-free zone where she
                      can ask questions without embarrassment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-staymore-light-purple/30 rounded-lg p-8 mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-center text-staymore-dark-purple">
              Practical Preparation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <h3 className="font-bold mb-3 text-staymore-purple text-center">
                  Before Her First Period
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Create a "period kit" with Stay More pads, a change of
                      underwear, and wipes that she can keep in her backpack or
                      locker.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Show her how to use pads and explain the different options
                      available.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Explain what to do if her period starts at school or when
                      she's away from home.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <h3 className="font-bold mb-3 text-staymore-purple text-center">
                  When Her Period Starts
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Celebrate this milestone in a way that feels comfortable
                      for her—it's a natural part of growing up.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Help her track her cycle with a calendar or period app to
                      better understand her pattern.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Be patient and understanding about mood swings or
                      discomfort she might experience.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-staymore-dark-purple">
              Resources for Parents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-staymore-light-pink rounded-full p-3 animate-pulse-soft">
                    <Users className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Parent Support Groups
                </h3>
                <p className="text-gray-700 text-center">
                  Connect with other parents navigating similar challenges
                  through online forums and local communities.
                </p>
                <div className="mt-4 text-center">
                  <Button
                    variant="link"
                    className="text-staymore-purple hover:text-staymore-pink transition-colors duration-300"
                  >
                    Find Support Groups
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-staymore-light-pink rounded-full p-3 animate-pulse-soft">
                    <Calendar className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Period Tracker App
                </h3>
                <p className="text-gray-700 text-center">
                  Download our Stay More Period Tracker App to help educate both
                  you and your daughter about her cycle.
                </p>
                <div className="mt-4 text-center">
                  <Button
                    variant="link"
                    className="text-staymore-purple hover:text-staymore-pink transition-colors duration-300"
                  >
                    Download App
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center reveal fade-in-up">
            <p className="mb-8 text-xl text-staymore-dark-purple font-playfair italic">
              "Your guidance through this time will shape her relationship with
              her body for years to come."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-staymore-magenta hover:bg-staymore-magenta/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group">
                <span>Learn How to Support Your Daughter</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-white text-staymore-magenta border border-staymore-magenta px-6 py-3 rounded-full transition-all duration-300 hover:bg-staymore-pink hover:shadow-md group">
                <span>Read Parent Tips on Puberty</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsForParents;
