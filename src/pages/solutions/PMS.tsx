import React from "react";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Brain,
  MoveVertical,
  Utensils,
  Moon,
  ArrowRight,
} from "lucide-react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const PMS = () => {
  usePageAnimations();

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-staymore-light-pink/30 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal fade-in-up">
            <div className="flex items-center justify-center">
              <h1 className="hero-text text-staymore-dark-purple shine">P</h1>
              <TypeAnimation
                sequence={["MS", 1000, "", 500]}
                wrapper="h1"
                cursor={true}
                repeat={Infinity}
                className="hero-text text-staymore-dark-purple shine"
                speed={1}
              />
            </div>
            <p className="text-xl italic mb-6 font-playfair text-staymore-purple">
              "It's okay to not feel okay. We're here for you."
            </p>
            <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-staymore-purple">
                  Understanding the Emotional and Physical Shifts
                </h2>
                <p className="mb-4 text-gray-700">
                  Premenstrual Syndrome (PMS) can make your body and emotions
                  feel out of sync—but with the right knowledge, you can
                  navigate these changes with confidence.
                </p>
                <p className="text-gray-700">
                  You're not alone in this experience, and there are effective
                  ways to manage your symptoms.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/pic9.jpg"
                  alt="Woman relaxing"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 img-hover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium">Self-care makes a difference</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center text-staymore-dark-purple">
              What is PMS?
            </h2>
            <p className="text-lg text-center text-gray-700 mb-10">
              Premenstrual Syndrome is a combination of symptoms that many women
              experience 1-2 weeks before their period. These symptoms are
              related to the natural hormonal fluctuations of the menstrual
              cycle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Brain className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Emotional Symptoms
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Mood swings
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Irritability or anger
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Anxiety or tension
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Depressed mood
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Crying spells or increased sensitivity
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Changes in appetite or food cravings
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Difficulty concentrating
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <HeartPulse className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Physical Symptoms
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Breast tenderness
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Bloating or fluid retention
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Abdominal cramps
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Headaches or migraines
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Fatigue or low energy
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Joint or muscle pain
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 flex-shrink-0" />{" "}
                    Sleep disturbances
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-staymore-light-purple/30 rounded-lg p-8 mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-center text-staymore-dark-purple">
              Tips for Better Days
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="bg-staymore-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <MoveVertical className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold mb-2 text-center text-staymore-purple">
                  Exercise Regularly
                </h3>
                <p className="text-gray-700 text-center">
                  Regular physical activity can help reduce PMS symptoms. Even
                  light exercise like walking, yoga, or swimming can make a
                  difference.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="bg-staymore-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Utensils className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold mb-2 text-center text-staymore-purple">
                  Mindful Eating
                </h3>
                <p className="text-gray-700 text-center">
                  Reduce salt, sugar, caffeine, and alcohol. Focus on fruits,
                  vegetables, whole grains, and calcium-rich foods to help
                  manage symptoms.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="bg-staymore-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Moon className="h-5 w-5 text-white transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold mb-2 text-center text-staymore-purple">
                  Prioritize Sleep
                </h3>
                <p className="text-gray-700 text-center">
                  Aim for 7-9 hours of quality sleep each night. Create a
                  relaxing bedtime routine and maintain a consistent sleep
                  schedule.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold mb-4 text-center text-staymore-purple">
                Track Your Symptoms
              </h3>
              <p className="text-gray-700 text-center mb-4">
                Keep a PMS journal to track your symptoms and patterns. This can
                help you predict when symptoms will occur and prepare
                accordingly. Note:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-staymore-light-pink/30 p-3 rounded-lg">
                  <p className="text-gray-700 text-center">
                    When symptoms start and end
                  </p>
                </div>
                <div className="bg-staymore-light-pink/30 p-3 rounded-lg">
                  <p className="text-gray-700 text-center">
                    Severity of symptoms
                  </p>
                </div>
                <div className="bg-staymore-light-pink/30 p-3 rounded-lg">
                  <p className="text-gray-700 text-center">
                    Diet, exercise, and stress levels
                  </p>
                </div>
                <div className="bg-staymore-light-pink/30 p-3 rounded-lg">
                  <p className="text-gray-700 text-center">
                    What helps relieve symptoms
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-staymore-dark-purple">
              When to See a Doctor
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                Most PMS symptoms can be managed with lifestyle changes and
                over-the-counter remedies. However, if your symptoms are severe
                enough to interfere with your daily life, it's important to
                consult with a healthcare provider.
              </p>
              <p className="text-gray-700">
                They may recommend additional treatments or check for conditions
                like Premenstrual Dysphoric Disorder (PMDD), which is a more
                severe form of PMS.
              </p>
            </div>
          </div>

          <div className="text-center reveal fade-in-up">
            <p className="mb-8 text-xl text-staymore-dark-purple font-playfair italic">
              "Understanding your body's rhythms is empowering—embrace the
              knowledge and care for yourself accordingly."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-staymore-magenta hover:bg-staymore-magenta/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group">
                <span>Read More About PMS</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-white text-staymore-magenta border border-staymore-magenta px-6 py-3 rounded-full transition-all duration-300 hover:bg-staymore-pink hover:shadow-md group">
                <span>Coping Strategies</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default PMS;
