import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          
          if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1;
          }
        }
      }, 20);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    startAutoScroll();
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const testimonials = [
    {
      name: "Malik",
      review:
        "Nobody has ever cleaned my apartment like this before! The attention to detail was incredible and the team was so professional.",
      rating: 5,
      avatar: "M",
    },
    {
      name: "Ishmael",
      review:
        "It's the first time my apartment has felt this clean. The fresh scent and spotless surfaces make such a difference!",
      rating: 5,
      avatar: "I",
    },
    {
      name: "Kelvin",
      review:
        "They make my move-out cleaning process stress-free. Everything was perfect and the landlord was impressed!",
      rating: 5,
      avatar: "K",
    },
    {
      name: "Damisi",
      review:
        "Outstanding service! Every corner was spotless and the team was courteous and efficient.",
      rating: 5,
      avatar: "D",
    },
    {
      name: "Destiny",
      review:
        "Absolutely amazing! My home has never looked better. Highly recommend their services!",
      rating: 5,
      avatar: "D",
    },
    {
      name: "Ade",
      review:
        "Professional, thorough, and reliable. They exceeded all my expectations!",
      rating: 5,
      avatar: "A",
    },
    {
      name: "Tommy",
      review:
        "The best cleaning service I've ever used. My office looks pristine!",
      rating: 5,
      avatar: "T",
    },
    {
      name: "Dave",
      review:
        "Fantastic job! The team was friendly and did an incredible deep clean.",
      rating: 5,
      avatar: "D",
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
          Over 20 Positive Reviews
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Hear what our satisfied clients have to say about our services
        </p>

        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-6 pb-4 min-w-max">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-1-${index}`}
                className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative hover-lift animate-scale-in w-[350px] flex-shrink-0"
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
            {/* Duplicate testimonials for seamless infinite scroll */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-2-${index}`}
                className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative hover-lift animate-scale-in w-[350px] flex-shrink-0"
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
      </div>
    </section>
  );
};

export default Testimonials;
