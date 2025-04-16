import React from "react";
import { CheckCircle2 } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Ultra Comfort Regular Pads",
      description: "Soft, breathable, all-day freshness for regular flow days.",
      image: "/images/pic3.jpg",
      features: [
        "Super absorbent",
        "Leak-proof wings",
        "Gentle on skin",
        "Odor control",
      ],
      sizes: ["Pack of 10", "Pack of 20", "Monthly subscription"],
    },
    {
      name: "Maxi Night Pads",
      description: "Extra length, leak-proof security for peaceful sleep.",
      image: "/images/pic4.jpg",
      features: [
        "Extended coverage",
        "Extra absorbent",
        "Anti-leak barriers",
        "Soft top layer",
      ],
      sizes: ["Pack of 8", "Pack of 16", "Monthly subscription"],
    },
    {
      name: "Pantyliners",
      description:
        "For light days and daily freshness, keep you feeling confident.",
      image: "/images/pic13.jpg",
      features: ["Ultra thin", "Breathable", "Discreet", "Comfortable fit"],
      sizes: ["Pack of 24", "Pack of 48", "Monthly subscription"],
    },
    {
      name: "Rural Economy Packs",
      description:
        "Affordable, accessible, and empowering sanitary pads for rural communities.",
      image: "/images/img2.jpg",
      features: [
        "Cost-effective",
        "Quality protection",
        "Bulk packaging",
        "Educational inserts",
      ],
      sizes: ["Pack of 30", "Pack of 60", "Community pack (120)"],
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-staymore-dark-purple">
            Our Products
          </h1>
          <p className="text-xl italic font-playfair text-staymore-purple mb-4">
            "A pad that doesn't interrupt your day—but carries you through it."
          </p>
          <p className="text-gray-600 mb-8">
            Gentle as a breeze, strong like your soul.
            <br />
            Every layer of Stay More, plays a healing role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <h3 className="text-lg font-medium mb-2">Features:</h3>
                <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="text-staymore-purple h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mb-2">Available in:</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.sizes.map((size, i) => (
                    <span
                      key={i}
                      className="bg-staymore-light-purple px-3 py-1 rounded-full text-sm text-staymore-purple"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <button className="btn-primary w-full">Buy Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-staymore-light-purple p-8 rounded-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Why Choose Stay More Products?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold mb-2">Dermatologically Tested</h3>
                <p className="text-sm text-gray-600">
                  Safe for all skin types, even the most sensitive
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold mb-2">No Harsh Chemicals</h3>
                <p className="text-sm text-gray-600">
                  Free from toxins, dyes, and artificial fragrances
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold mb-2">Biodegradable Packaging</h3>
                <p className="text-sm text-gray-600">
                  Environmentally conscious design and materials
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              Safe for teenagers, working women, and mothers alike — because
              every woman deserves comfort.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Specifications</h2>
          <p className="mb-8 text-gray-600">
            For detailed specifications, product ingredients, and usage
            instructions, please download our product guide.
          </p>
          <button className="btn-secondary">View Specifications</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
