import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  HeartPulse,
  Sprout,
  Users,
  Activity,
  Milestone,
  HeartHandshake,
  Droplet,
} from "lucide-react";
import usePageAnimations from "@/hooks/usePageAnimations";
import { TypeAnimation } from "react-type-animation";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tagline: string;
  link: string;
  delay: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
  tagline,
  link,
  delay,
}) => {
  return (
    <Link to={link} className="group">
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 reveal"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="h-1 bg-purple-gradient"></div>
        <div className="p-6">
          <div className="bg-staymore-light-purple rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-staymore-purple transition-colors duration-300">
            <div className="text-staymore-purple group-hover:text-white transition-colors duration-300 animate-pulse-soft">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-staymore-purple italic mb-3 text-sm">
            "{tagline}"
          </p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const OneStopSolution = () => {
  usePageAnimations();

  const solutions = [
    {
      icon: (
        <Calendar className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "My First Period",
      tagline: "The first step to womanhood should never be feared.",
      description:
        "Everything you need to know about your first menstrual cycle, with guidance and support.",
      link: "/solutions/first-period",
    },
    {
      icon: (
        <Droplet className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Period Guide",
      tagline: "It's not just a cycle—it's your rhythm, your strength.",
      description:
        "Understanding your cycle, flow variations, and how to manage your period effectively.",
      link: "/solutions/period-guide",
    },
    {
      icon: (
        <Sprout className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Puberty",
      tagline: "Puberty is a journey, not a destination.",
      description:
        "Navigate physical and emotional changes with confidence and knowledge.",
      link: "/solutions/puberty",
    },
    {
      icon: (
        <Users className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Tips For Parents",
      tagline: "Your support means the world to her.",
      description:
        "How to support your daughter through puberty and her menstrual journey.",
      link: "/solutions/tips-for-parents",
    },
    {
      icon: (
        <Activity className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Cramps & Irregular Bleeding",
      tagline: "Your body speaks; we listen.",
      description:
        "Understanding causes and finding relief from menstrual discomfort.",
      link: "/solutions/cramps-irregular-bleeding",
    },
    {
      icon: (
        <Milestone className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "PCOS",
      tagline: "PCOS is part of your story—not the end.",
      description:
        "Learn about Polycystic Ovary Syndrome and how to manage its symptoms.",
      link: "/solutions/pcos",
    },
    {
      icon: (
        <HeartPulse className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "PMS",
      tagline: "It's okay to not feel okay. We're here for you.",
      description:
        "Strategies to cope with emotional and physical symptoms before your period.",
      link: "/solutions/pms",
    },
    {
      icon: (
        <HeartHandshake className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Vaginal Discharge",
      tagline: "What flows within is part of your health—let's demystify it.",
      description:
        "Understanding what's normal and when to seek medical advice.",
      link: "/solutions/vaginal-discharge",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal fade-in-up">
          <div className="flex items-center justify-center">
            <h1 className="hero-text text-staymore-dark-purple shine">O</h1>
            <TypeAnimation
              sequence={["ne Stop Solution", 1000, "", 500]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
              className="hero-text text-staymore-dark-purple shine"
              speed={1}
            />
          </div>
          <p className="text-xl font-light mb-6 font-playfair italic text-staymore-dark-purple animate-fade-in">
            Everything you need to know about menstrual health and wellness, all
            in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-container">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} delay={index * 100} />
          ))}
        </div>

        <div className="bg-staymore-light-purple p-8 rounded-lg mb-16 reveal fade-in-up animate-float">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
            <p
              className="text-gray-700 mb-6 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Our team of experts is always here to help. Reach out with any
              questions about menstrual health and wellness.
            </p>
            <button className="btn-primary animate-pulse-soft">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneStopSolution;
