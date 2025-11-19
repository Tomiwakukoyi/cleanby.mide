import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional cleaning service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-slide-up">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-secondary" />
            <span className="text-secondary font-semibold text-lg">
              Premium Cleaning Services
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Custom home cleaning services
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Keep your home fresh, comfortable, safe, and tidy with our
            professional cleaning services tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Book Your Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white text-brand-dark hover:bg-white/90 px-8 py-6 text-lg transition-all duration-300 font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Professional Team",
              "Eco-Friendly Products",
              "100% Satisfaction",
            ].map((feature, index) => (
              <div
                key={feature}
                className="flex items-center space-x-2 text-white/90 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
