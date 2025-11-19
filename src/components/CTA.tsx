import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-cleaning.jpg";

const CTA = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={ctaImage}
              alt="Professional cleaning team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-20 px-8 md:px-16">
            <div className="max-w-2xl animate-slide-up">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let's Bring Freshness
                <br />
                Back to Your Home
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Book your first cleaning service today and experience the
                difference of a professionally cleaned home. Our expert team is
                ready to make your space shine.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg shadow-glow hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Decorative Elements with continuous motion */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
