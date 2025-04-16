import React from "react";
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  Droplet,
  CheckCircle,
  XCircle,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const VaginalDischarge = () => {
  usePageAnimations();

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-staymore-light-pink/30 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal fade-in-up">
            <div className="flex items-center justify-center">
              <h1 className="hero-text text-staymore-dark-purple shine">V</h1>
              <TypeAnimation
                sequence={["aginal Discharge", 1000, "", 500]}
                wrapper="h1"
                cursor={true}
                repeat={Infinity}
                className="hero-text text-staymore-dark-purple shine"
                speed={1}
              />
            </div>
            <p className="text-xl italic mb-6 font-playfair text-staymore-purple">
              "What flows within is part of your health—let's demystify it."
            </p>
            <div className="w-24 h-1 bg-staymore-pink mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-staymore-purple">
                  It's Natural. It's Normal.
                </h2>
                <p className="mb-4 text-gray-700">
                  Vaginal discharge is a natural part of life. It's your body's
                  way of maintaining vaginal health and preventing infection.
                </p>
                <p className="text-gray-700">
                  Understanding what's normal and what's not can help you
                  monitor your reproductive health and know when to seek medical
                  advice.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/pic11.jpg"
                  alt="Woman relaxing"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500 img-hover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium">Knowledge creates confidence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center text-staymore-dark-purple">
              What Is Vaginal Discharge?
            </h2>
            <p className="text-lg text-center text-gray-700 mb-10">
              Vaginal discharge is fluid produced by glands inside the vagina
              and cervix. It's your body's way of cleaning and protecting
              itself. The amount, consistency, and color may change depending on
              your cycle or health condition.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-md mb-10">
              <h3 className="font-bold text-xl mb-6 text-center text-staymore-purple">
                Normal Discharge Throughout Your Cycle
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
                <div className="flex items-start stagger-item">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 mt-1 animate-pulse-soft">
                    <Droplet className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-staymore-purple">
                      After Menstruation
                    </h4>
                    <p className="text-gray-700">
                      Little to no discharge, or slightly sticky/thick whitish
                      or yellowish discharge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start stagger-item">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 mt-1 animate-pulse-soft">
                    <Droplet className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-staymore-purple">
                      Pre-Ovulation
                    </h4>
                    <p className="text-gray-700">
                      Increasing amount, becoming creamier, whiter, and moister
                      as ovulation approaches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start stagger-item">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 mt-1 animate-pulse-soft">
                    <Droplet className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-staymore-purple">
                      During Ovulation
                    </h4>
                    <p className="text-gray-700">
                      Clear, stretchy, slippery discharge, similar to egg
                      whites. This helps sperm travel to the egg.
                    </p>
                  </div>
                </div>

                <div className="flex items-start stagger-item">
                  <div className="bg-staymore-light-pink rounded-full p-3 mr-4 mt-1 animate-pulse-soft">
                    <Droplet className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-staymore-purple">
                      Post-Ovulation
                    </h4>
                    <p className="text-gray-700">
                      Less discharge, returning to a thicker, cloudier
                      consistency before your period starts again.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 reveal fade-in-right">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600 transform transition-transform duration-300 hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-lg text-staymore-purple">
                    Healthy Discharge
                  </h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />{" "}
                    Clear or whitish color
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />{" "}
                    Non-offensive odor (mild or no scent)
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />{" "}
                    Changes in consistency throughout your cycle
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />{" "}
                    No irritation, itching, or burning
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 reveal fade-in-left">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-full p-2 mr-4">
                    <XCircle className="h-6 w-6 text-red-600 transform transition-transform duration-300 hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-lg text-staymore-purple">
                    Abnormal Discharge
                  </h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />{" "}
                    Yellow, green, or gray color
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />{" "}
                    Strong or unpleasant odor
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />{" "}
                    Foamy or chunky texture
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />{" "}
                    Accompanied by itching, burning, or pain
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-staymore-light-purple/30 rounded-lg p-8 mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-center text-staymore-dark-purple">
              Common Causes of Abnormal Discharge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-container">
              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="flex items-center mb-4">
                  <div className="bg-staymore-light-pink rounded-full p-2 mr-4">
                    <ShieldAlert className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <h3 className="font-bold text-staymore-purple">
                    Yeast Infection
                  </h3>
                </div>
                <p className="text-gray-700">
                  Thick, white, cottage cheese-like discharge with itching and
                  irritation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="flex items-center mb-4">
                  <div className="bg-staymore-light-pink rounded-full p-2 mr-4">
                    <ShieldAlert className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <h3 className="font-bold text-staymore-purple">
                    Bacterial Vaginosis
                  </h3>
                </div>
                <p className="text-gray-700">
                  Gray or white discharge with a fishy odor, especially after
                  sex.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="flex items-center mb-4">
                  <div className="bg-staymore-light-pink rounded-full p-2 mr-4">
                    <ShieldAlert className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <h3 className="font-bold text-staymore-purple">
                    Trichomoniasis
                  </h3>
                </div>
                <p className="text-gray-700">
                  Greenish-yellow, possibly frothy discharge with a strong odor
                  and possible vaginal itching.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md stagger-item">
                <div className="flex items-center mb-4">
                  <div className="bg-staymore-light-pink rounded-full p-2 mr-4">
                    <ShieldAlert className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                  </div>
                  <h3 className="font-bold text-staymore-purple">
                    Chlamydia or Gonorrhea
                  </h3>
                </div>
                <p className="text-gray-700">
                  Yellow or cloudy discharge, possibly with pelvic pain,
                  bleeding between periods, or pain when urinating.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-staymore-dark-purple">
              Vaginal Health Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-container">
              <div className="bg-white p-6 rounded-lg shadow-md stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <HeartHandshake className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold mb-2 text-center text-staymore-purple">
                  Gentle Cleansing
                </h3>
                <p className="text-gray-700 text-center">
                  Use only water or mild, unscented soap on the external genital
                  area. The vagina is self-cleaning and doesn't need douches or
                  special products.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <HeartHandshake className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold mb-2 text-center text-staymore-purple">
                  Breathable Fabrics
                </h3>
                <p className="text-gray-700 text-center">
                  Wear cotton underwear and avoid tight-fitting pants to allow
                  air circulation and reduce moisture buildup.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md stagger-item">
                <div className="bg-staymore-light-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <HeartHandshake className="h-5 w-5 text-staymore-pink transform transition-transform duration-300 hover:rotate-12" />
                </div>
                <h3 className="font-bold mb-2 text-center text-staymore-purple">
                  Practice Safe Sex
                </h3>
                <p className="text-gray-700 text-center">
                  Use protection to reduce the risk of sexually transmitted
                  infections, which can affect vaginal discharge.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 reveal fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-staymore-dark-purple">
              When to See a Doctor
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                If you notice unusual changes in your discharge, especially if
                accompanied by other symptoms like itching, burning, pain, or a
                strong odor, it's important to see a healthcare provider.
              </p>
              <p className="text-gray-700">
                Many vaginal infections are easily treated with medication, but
                it's important to get the right diagnosis from a healthcare
                professional.
              </p>
            </div>
          </div>

          <div className="text-center reveal fade-in-up">
            <p className="mb-8 text-xl text-staymore-dark-purple font-playfair italic">
              "Your body communicates through changes—listen to it with
              knowledge and care."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-staymore-magenta hover:bg-staymore-magenta/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group">
                <span>Learn More About Vaginal Health</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-white text-staymore-magenta border border-staymore-magenta px-6 py-3 rounded-full transition-all duration-300 hover:bg-staymore-pink hover:shadow-md group">
                <span>Consult a Gynecologist</span>
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaginalDischarge;
