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
import { TypeAnimation } from "react-type-animation";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
  link,
  delay,
}) => {
  return (
    <Link to={link} className="group">
      <div
        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 hover:scale-105 reveal stagger-item"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="bg-staymore-light-purple rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto group-hover:bg-staymore-purple transition-colors duration-300">
          <div className="text-staymore-purple group-hover:text-white transition-colors duration-300 animate-pulse-soft">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2 text-center text-staymore-dark-purple group-hover:text-staymore-purple transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm text-center">{description}</p>
      </div>
    </Link>
  );
};

const SolutionsPreview: React.FC = () => {
  const solutions = [
    {
      icon: (
        <Calendar className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "My First Period",
      description:
        "Everything you need to know about your first menstrual cycle, with guidance and support.",
      link: "/solutions/first-period",
    },
    {
      icon: (
        <Droplet className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Period Guide",
      description:
        "Understanding your cycle, flow variations, and how to manage your period effectively.",
      link: "/solutions/period-guide",
    },
    {
      icon: (
        <Sprout className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Puberty",
      description:
        "Navigate physical and emotional changes with confidence and knowledge.",
      link: "/solutions/puberty",
    },
    {
      icon: (
        <Users className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Tips For Parents",
      description:
        "How to support your daughter through puberty and her menstrual journey.",
      link: "/solutions/tips-for-parents",
    },
    {
      icon: (
        <Activity className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Cramps & Irregular Bleeding",
      description:
        "Understanding causes and finding relief from menstrual discomfort.",
      link: "/solutions/cramps-irregular-bleeding",
    },
    {
      icon: (
        <Milestone className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "PCOS",
      description:
        "Learn about Polycystic Ovary Syndrome and how to manage its symptoms.",
      link: "/solutions/pcos",
    },
    {
      icon: (
        <HeartPulse className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "PMS",
      description:
        "Strategies to cope with emotional and physical symptoms before your period.",
      link: "/solutions/pms",
    },
    {
      icon: (
        <HeartHandshake className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Vaginal Discharge",
      description:
        "Understanding what's normal and when to seek medical advice.",
      link: "/solutions/vaginal-discharge",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-staymore-light-purple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal fade-in-up">
          {/* <h2 className="section-title text-staymore-dark-purple relative shine"></h2> */}
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-tight lg:leading-tight text-staymore-dark-purple shine">
              O
            </h2>
            <TypeAnimation
              sequence={["ne Stop Solution", 1000, "", 500]}
              wrapper="h2"
              cursor={false}
              repeat={Infinity}
              className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-tight lg:leading-tight text-staymore-dark-purple shine"
              speed={30}
            />
          </div>
          <p className="text-xl italic mb-6 font-playfair text-staymore-purple animate-fade-in">
            Everything you need to know about menstrual health and wellness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-container">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} delay={index * 100} />
          ))}
        </div>

        <div className="text-center reveal fade-in-up">
          <Link
            to="/one-stop-solution"
            className="btn-primary animate-pulse-soft"
          >
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;
