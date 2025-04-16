import React, { useEffect } from "react";
import { Heart, Shield, Leaf, Award } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg border border-staymore-pink/30 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-pink-200 animate-fade-in-up opacity-0 reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-staymore-pink/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto transition-transform duration-500 group-hover:scale-110">
        <div className="animate-bounce text-2xl text-staymore-magenta">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-center text-staymore-magenta animate-fade-in">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-sm animate-fade-in delay-200">
        {description}
      </p>
    </div>
  );
};

const Features: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".features-reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".features-reveal").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-staymore-pink/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal features-reveal fade-in-up">
          <h2 className="section-title text-staymore-magenta relative shine">
            Why Choose Stay More?
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in">
            Our products are designed with your comfort and health in mind,
            ensuring you can stay active and confident during your period.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-container">
          <FeatureCard
            icon={
              <Heart className="text-staymore-magenta h-8 w-8 transition-all duration-300 hover:scale-110" />
            }
            title="Gentle Comfort"
            description="Our pads are designed to be ultra-soft and breathable, providing maximum comfort throughout the day."
            delay={100}
          />
          <FeatureCard
            icon={
              <Shield className="text-staymore-purple h-8 w-8 transition-all duration-300 hover:scale-110" />
            }
            title="Safe & Chemical-Free"
            description="Free from harmful chemicals and irritants, our products are skin-friendly and dermatologically tested."
            delay={300}
          />
          <FeatureCard
            icon={
              <Leaf className="text-green-500 h-8 w-8 transition-all duration-300 hover:scale-110" />
            }
            title="Eco-Aware"
            description="We're committed to sustainable manufacturing practices and reducing our environmental footprint."
            delay={500}
          />
          <FeatureCard
            icon={
              <Award className="text-amber-500 h-8 w-8 transition-all duration-300 hover:scale-110" />
            }
            title="Quality Assured"
            description="Rigorous quality control ensures our products meet the highest standards for safety and performance."
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
