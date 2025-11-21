import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Home, Briefcase, SparklesIcon, CheckCircle2, Clock, Users, Sparkles } from "lucide-react";
import homeCleaningImg from "@/assets/home-cleaning.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import floorCleaningImg from "@/assets/floor-cleaning.jpg";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: "Home Cleaning",
      description:
        "Professional residential cleaning services for your comfort and peace of mind.",
      image: homeCleaningImg,
      icon: Home,
      details: {
        included: [
          "Living Areas: Dusting surfaces, vacuuming, mopping floors",
          "Kitchen: Countertops, appliances (exterior), sink, cabinet fronts",
          "Bathrooms: Toilets, showers, tubs, sinks, mirrors, floors",
          "Bedrooms: Making beds, dusting, vacuuming, organizing",
          "All Floors: Vacuuming carpets, mopping hard floors",
          "General: Emptying trash bins, light fixture dusting",
        ],
        whatToExpect: [
          "Estimated time: 2-4 hours depending on home size",
          "Professional cleaning team of 1-2 cleaners",
          "Eco-friendly cleaning products provided",
          "All equipment and supplies included",
        ],
        addons: [
          "Interior window cleaning",
          "Refrigerator deep clean",
          "Oven deep clean",
          "Carpet shampooing",
          "Laundry service",
        ],
      },
    },
    {
      title: "Office Cleaning",
      description:
        "Keep your workspace pristine and productive with our commercial cleaning services.",
      image: officeCleaningImg,
      icon: Briefcase,
      details: {
        included: [
          "Workstations: Desks, computers (exterior), keyboards dusting",
          "Common Areas: Reception, waiting rooms, break rooms",
          "Restrooms: Complete sanitization and restocking",
          "Floors: Vacuuming, mopping, spot cleaning",
          "Trash: Emptying all waste bins and replacing liners",
          "Kitchen/Break Room: Counters, sinks, appliances, tables",
        ],
        whatToExpect: [
          "Flexible scheduling (after hours, weekends, or during business hours)",
          "Experienced commercial cleaning team",
          "Professional-grade equipment and products",
          "Regular quality checks and inspections",
        ],
        addons: [
          "Carpet deep cleaning",
          "Window washing (interior and exterior)",
          "Conference room setup",
          "Upholstery cleaning",
          "Hard floor buffing and waxing",
        ],
      },
    },
    {
      title: "Other Cleaning",
      description:
        "Specialized cleaning services including deep cleaning, move-in/out, and more.",
      image: floorCleaningImg,
      icon: SparklesIcon,
      details: {
        included: [
          "Deep Cleaning: Intensive top-to-bottom cleaning of entire space",
          "Move-In/Out: Complete cleaning for new or departing tenants",
          "Post-Construction: Removing dust, debris, and construction residue",
          "Event Cleaning: Pre and post-event cleanup services",
          "Spring Cleaning: Seasonal deep cleaning and organization",
          "Specialized Areas: Garages, basements, attics",
        ],
        whatToExpect: [
          "Customized cleaning plan for your specific needs",
          "Detailed cleaning checklist provided",
          "Specialized equipment for tough jobs",
          "Flexible scheduling to accommodate your timeline",
        ],
        addons: [
          "Pressure washing (exterior)",
          "Gutter cleaning",
          "Appliance deep cleaning",
          "Grout and tile restoration",
          "Furniture moving assistance",
        ],
      },
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
                <Button 
                  onClick={() => setSelectedService(service.title)}
                  className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  See More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-primary">
                  {selectedService}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {services.find(s => s.title === selectedService)?.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* What's Included */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl font-bold">What's Included</h3>
                  </div>
                  <ul className="space-y-2 ml-8">
                    {services.find(s => s.title === selectedService)?.details.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Expect */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl font-bold">What to Expect</h3>
                  </div>
                  <ul className="space-y-2 ml-8">
                    {services.find(s => s.title === selectedService)?.details.whatToExpect.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add-on Services */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl font-bold">Add-on Services</h3>
                  </div>
                  <ul className="space-y-2 ml-8">
                    {services.find(s => s.title === selectedService)?.details.addons.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now Button */}
                <div className="pt-4 border-t">
                  <a 
                    href={`https://wa.me/447886667036?text=Hi! I'm interested in ${selectedService} services. Can you provide more details?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg shadow-glow">
                      Book This Service Now
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
