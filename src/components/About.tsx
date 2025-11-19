import { CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";

const About = () => {
  const features = [
    "Professional & Trusted Team",
    "Satisfaction Guaranteed",
    "Eco-Friendly Products",
    "Flexible Scheduling",
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-6 h-6 text-primary mr-2" />
          <span className="text-primary font-semibold">About Us</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Bringing Freshness, Comfort,
          <br />
          and Care to Every Home
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <img
              src={heroImage}
              alt="Professional cleaning team"
              className="relative rounded-2xl shadow-lg w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-muted-foreground">
              We provide professional cleaning services tailored to your needs,
              ensuring a spotless and comfortable home environment. Our team
              uses eco-friendly products and modern techniques to deliver
              outstanding results every time.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 mt-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
