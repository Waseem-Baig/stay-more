import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  features,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover reveal">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 relative shine">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="mb-4 stagger-container">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start mb-2 stagger-item">
              <CheckCircle2 className="h-5 w-5 text-staymore-purple mr-2 flex-shrink-0 mt-0.5 animate-pulse-soft" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/products"
          className="text-staymore-purple hover:text-staymore-dark-purple font-medium inline-flex items-center group"
        >
          Learn more{" "}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const ProductsPreview: React.FC = () => {
  const products = [
    {
      name: "Ultra Comfort Regular Pads",
      description: "Soft, breathable, all-day freshness for regular flow days.",
      image: "/images/pic4.jpg",
      features: [
        "Super absorbent",
        "Leak-proof wings",
        "Gentle on skin",
        "Odor control",
      ],
    },
    {
      name: "Maxi Night Pads",
      description: "Extra length, leak-proof security for peaceful sleep.",
      image: "/images/pic5.jpg",
      features: [
        "Extended coverage",
        "Extra absorbent",
        "Anti-leak barriers",
        "Soft top layer",
      ],
    },
    {
      name: "Pantyliners",
      description:
        "For light days and daily freshness, keep you feeling confident.",
      image: "/images/pic3.jpg",
      features: ["Ultra thin", "Breathable", "Discreet", "Comfortable fit"],
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-staymore-light-purple/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 reveal fade-in-up">
          {/* <h2 className="section-title relative shine"></h2> */}
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-tight lg:leading-tight text-staymore-dark-purple shine">
              C
            </h2>
            <TypeAnimation
              sequence={["rafted for Comfort, Designed for You", 1000, "", 500]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-tight lg:leading-tight text-staymore-dark-purple shine"
              speed={30}
            />
          </div>
          <p className="text-xl italic mb-4 font-playfair text-staymore-purple animate-fade-in">
            "A pad that doesn't interrupt your day—but carries you through it."
          </p>
          <p
            className="text-gray-600 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            Gentle as a breeze, strong like your soul.
            <br />
            Every layer of Stay More, plays a healing role.
          </p>
        </div>

        <div className="text-center reveal fade-in-up mr-10">
          <div className="inline-block mb-8 p-4 bg-staymore-light-purple rounded-lg">
            <div className="flex flex-wrap justify-center gap-4 stagger-container">
              <span className="inline-flex items-center bg-white px-3 py-1 rounded-full text-sm font-medium text-staymore-purple stagger-item">
                Dermatologically Tested
              </span>
              <span className="inline-flex items-center bg-white px-3 py-1 rounded-full text-sm font-medium text-staymore-purple stagger-item">
                No Harsh Chemicals
              </span>
              <span className="inline-flex items-center bg-white px-3 py-1 rounded-full text-sm font-medium text-staymore-purple stagger-item">
                Biodegradable Packaging
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 stagger-container">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Link to="/products" className="btn-primary animate-pulse-soft">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
