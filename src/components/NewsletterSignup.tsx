import React, { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll now receive updates from Stay More.",
        variant: "default",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-b from-staymore-light-purple/30 to-white py-20">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold mb-4 text-staymore-dark-purple">
            Join Our Empowered Circle
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Be the first to hear about new products, inspiring stories, and
            wellness resources tailored just for you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-5 py-3 rounded-full text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-staymore-vivid-purple bg-white"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-staymore-purple text-white font-semibold px-6 py-3 rounded-full hover:bg-staymore-dark-purple transition-all duration-300 flex items-center justify-center shadow-md"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Subscribe <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-sm mt-5 text-gray-600 italic">
            We respect your privacy — unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
