import React from "react";
import { Quote } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  image,
  delay,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 relative reveal transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl stagger-item"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -top-4 -left-4 bg-staymore-pink rounded-full p-2 animate-pulse-soft">
        <Quote className="h-5 w-5 text-white" />
      </div>
      <p className="mb-6 text-gray-700 italic">
        "
        <span
          className="inline-block animate-fade-in"
          style={{
            animationDelay: `${delay + 200}ms`,
            animationFillMode: "both",
          }}
        >
          {quote}
        </span>
        "
      </p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-staymore-light-purple transform transition-transform duration-300 hover:scale-110"
        />
        <div>
          <h4 className="font-bold text-staymore-dark-purple">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Stay More pads have been a game-changer for me. They're so comfortable that I forget I'm on my period. The quality is exceptional!",
      name: "Priya Sharma",
      title: "Working Professional",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "As a mother of a teenage daughter, I appreciate how Stay More educates about menstrual health. Their pads are the only ones my daughter will use.",
      name: "Anjali Mehta",
      title: "Mother of Two",
      image:
        "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "I've always had skin sensitivity issues with other brands, but Stay More pads are truly skin-friendly. No more rashes or discomfort!",
      name: "Divya Patel",
      title: "College Student",
      image:
        "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-staymore-light-purple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal fade-in-up">
          {/* <h2 className="section-title text-staymore-dark-purple relative shine"></h2> */}
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-tight lg:leading-tight text-staymore-dark-purple shine">
              W
            </h2>
            <TypeAnimation
              sequence={["hat Women Say About Us", 1000, "", 500]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-tight lg:leading-tight text-staymore-dark-purple shine"
              speed={30}
            />
          </div>
          <p className="text-xl italic mb-6 font-playfair text-staymore-purple animate-fade-in">
            Real experiences from women who have made Stay More a part of their
            menstrual wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 stagger-container">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 200} />
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto reveal fade-in-up">
          <p className="text-xl italic font-playfair text-staymore-dark-purple mb-8">
            "When women support women, incredible things happen. Join the Stay
            More family and experience the difference."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
