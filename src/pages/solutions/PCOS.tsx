import React from "react";
import { Link } from "react-router-dom";
import {
  Milestone,
  Heart,
  Activity,
  Leaf,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const PCOS = () => {
  usePageAnimations();

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-staymore-light-pink/30 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal fade-in-up">
            <div className="flex items-center justify-center">
              <h1 className="hero-text text-staymore-dark-purple shine">P</h1>
              <TypeAnimation
                sequence={["COS", 1000, "", 500]}
                wrapper="h1"
                cursor={false}
                repeat={Infinity}
                className="hero-text text-staymore-dark-purple shine"
                speed={1}
              />
            </div>
            <p className="text-xl italic mb-6 font-playfair text-staymore-purple">
              "PCOS is part of your story—not the end."
            </p>
            <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-staymore-purple">
                  A Journey to Understanding Your Body
                </h2>
                <p className="mb-4 text-gray-700">
                  Polycystic Ovary Syndrome (PCOS) can affect many aspects of
                  your health, but it's manageable with the right care and
                  information.
                </p>
                <p className="text-gray-700">
                  With proper management, women with PCOS lead healthy,
                  fulfilling lives. Knowledge is the first step toward
                  empowerment.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/pic8.jpg"
                  alt="Woman empowered"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500 img-hover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium">
                    Understanding leads to empowerment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center text-staymore-dark-purple">
              What is PCOS?
            </h2>
            <p className="text-lg text-center text-gray-700 mb-10">
              PCOS affects the hormones that regulate your menstrual cycle. It's
              one of the most common hormonal disorders among women of
              reproductive age.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h3 className="font-bold text-xl mb-4 text-staymore-purple">
                Common Symptoms
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-container">
                <div className="flex items-start stagger-item">
                  <div className="bg-staymore-light-pink rounded-full p-2 mr-4 mt-1">
                    <Milestone className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-staymore-purple">
                      Irregular Periods
                    </h4>
                    <p className="text-gray-700">
                      Infrequent, irregular, or prolonged menstrual cycles are
                      the most common sign of PCOS.
                    </p>
                  </div>
                </div>
                <div className="flex items-start stagger-item">
                  <div className="bg-staymore-light-pink rounded-full p-2 mr-4 mt-1">
                    <Activity className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-staymore-purple">
                      Excess Androgen
                    </h4>
                    <p className="text-gray-700">
                      Elevated levels of male hormones may result in physical
                      signs, such as excess facial and body hair.
                    </p>
                  </div>
                </div>
                <div className="flex items-start stagger-item">
                  <div className="bg-staymore-light-pink rounded-full p-2 mr-4 mt-1">
                    <ShieldCheck className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-staymore-purple">
                      Polycystic Ovaries
                    </h4>
                    <p className="text-gray-700">
                      Ovaries might enlarge and contain follicles that surround
                      the eggs, which might affect regular ovulation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start stagger-item">
                  <div className="bg-staymore-light-pink rounded-full p-2 mr-4 mt-1">
                    <Heart className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-staymore-purple">
                      Other Common Signs
                    </h4>
                    <p className="text-gray-700">
                      Weight gain, acne, skin tags, thinning hair or hair loss,
                      and darkening of skin in certain areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-staymore-light-purple/30 rounded-lg p-8">
              <h3 className="font-bold text-xl mb-4 text-center text-staymore-dark-purple">
                Health Implications
              </h3>
              <p className="text-gray-700 mb-6 text-center">
                PCOS is associated with several health concerns, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 stagger-container">
                <div className="bg-white p-4 rounded-lg shadow-sm stagger-item">
                  <p className="text-center text-staymore-purple font-medium">
                    Infertility
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm stagger-item">
                  <p className="text-center text-staymore-purple font-medium">
                    Type 2 Diabetes
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm stagger-item">
                  <p className="text-center text-staymore-purple font-medium">
                    Heart Disease
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm stagger-item">
                  <p className="text-center text-staymore-purple font-medium">
                    High Blood Pressure
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm stagger-item">
                  <p className="text-center text-staymore-purple font-medium">
                    Abnormal Uterine Bleeding
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm stagger-item">
                  <p className="text-center text-staymore-purple font-medium">
                    Endometrial Cancer
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-6 text-center">
                Early diagnosis and treatment can reduce the risk of long-term
                complications.
              </p>
            </div>
          </div>

          <div className="mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center text-staymore-dark-purple">
              Managing PCOS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Activity className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Lifestyle Changes
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Regular exercise can help improve insulin sensitivity and
                      reduce symptoms.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      A balanced diet rich in fiber and low in refined
                      carbohydrates can help manage symptoms.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Maintaining a healthy weight can improve hormone balance
                      and menstrual regularity.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <Leaf className="h-6 w-6 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center text-staymore-purple">
                  Medical Treatments
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Hormonal contraceptives can help regulate menstrual cycles
                      and reduce androgen production.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Anti-androgen medications can reduce symptoms like excess
                      hair growth and acne.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-staymore-pink mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Medications to induce ovulation may be recommended if
                      pregnancy is desired.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-staymore-dark-purple">
              When to See a Doctor
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-6">
                If you're experiencing irregular periods, excess hair growth,
                acne, and weight gain, it's important to consult with a
                healthcare provider. Early diagnosis and treatment can help
                manage symptoms and prevent long-term health problems.
              </p>
              <p className="text-gray-700">
                Remember that PCOS is a common condition, and you're not alone.
                With proper management, women with PCOS lead healthy, fulfilling
                lives.
              </p>
            </div>
          </div>

          <div className="text-center reveal fade-in-up">
            <p className="mb-8 text-xl text-staymore-dark-purple font-playfair italic">
              "PCOS doesn't define you—your strength in managing it does."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-staymore-magenta hover:bg-staymore-magenta/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group">
                <span>Explore PCOS Support</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-white text-staymore-magenta border border-staymore-magenta px-6 py-3 rounded-full transition-all duration-300 hover:bg-staymore-pink hover:shadow-md group">
                <span>Consult a Specialist</span>
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
export default PCOS;
