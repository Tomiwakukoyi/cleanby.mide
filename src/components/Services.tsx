import { Button } from "@/components/ui/button";
import { Home, Briefcase, SparklesIcon } from "lucide-react";
import homeCleaningImg from "@/assets/home-cleaning.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import floorCleaningImg from "@/assets/floor-cleaning.jpg";

const Services = () => {
  const services = [
    {
      title: "Home Cleaning",
      description:
        "Professional residential cleaning services for your comfort and peace of mind.",
      image: homeCleaningImg,
      icon: Home,
    },
    {
      title: "Office Cleaning",
      description:
        "Keep your workspace pristine and productive with our commercial cleaning services.",
      image: officeCleaningImg,
      icon: Briefcase,
    },
    {
      title: "Other Cleaning",
      description:
        "Specialized cleaning services including deep cleaning, move-in/out, and more.",
      image: floorCleaningImg,
      icon: SparklesIcon,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <SparklesIcon className="w-6 h-6 text-primary mr-2" />
          <span className="text-primary font-semibold">Our Services</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Complete Home and Office Cleaning
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          You Can Trust Our Professional Team to Deliver Outstanding Results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />

                {/* Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 mb-4">{service.description}</p>
                <Button className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg transition-all duration-300">
                  See More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
