import { Calendar, ClipboardCheck, Sparkles, ThumbsUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Book Your Service",
      description:
        "Select your preferred cleaning date, time, and service package with our easy booking system.",
      icon: Calendar,
    },
    {
      number: "02",
      title: "Confirmation & Preparation",
      description:
        "We confirm your booking and our team prepares all necessary equipment and eco-friendly supplies.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "We Do the Cleaning",
      description:
        "Our professional team arrives on time and delivers thorough, high-quality cleaning services.",
      icon: Sparkles,
    },
    {
      number: "04",
      title: "Relax & Enjoy",
      description:
        "Sit back and enjoy your spotless, fresh home while we handle all the hard work.",
      icon: ThumbsUp,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Steps to a Cleaner Home
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Our streamlined process ensures a hassle-free experience from start
            to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-white/30" />
              )}

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Number */}
                <div className="text-6xl font-bold text-white/20 mb-2">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/90">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
