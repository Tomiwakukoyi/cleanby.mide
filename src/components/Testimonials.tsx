import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      review:
        "Nobody has ever cleaned my apartment like this before! The attention to detail was incredible and the team was so professional.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      review:
        "It's the first time my apartment has felt this clean. The fresh scent and spotless surfaces make such a difference!",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      review:
        "They make my move-out cleaning process stress-free. Everything was perfect and the landlord was impressed!",
      rating: 5,
      avatar: "ER",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted relative overflow-hidden">
      {/* Continuous motion backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Star className="w-6 h-6 text-primary mr-2" />
          <span className="text-primary font-semibold">Testimonials</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Over 500 Positive Reviews
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Hear what our satisfied clients have to say about our services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />

              {/* Avatar */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {testimonial.avatar}
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground mb-4 italic">
                "{testimonial.review}"
              </p>

              {/* Name */}
              <p className="font-semibold text-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
