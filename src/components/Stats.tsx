import { useEffect, useState, useRef } from "react";

const Stats = () => {
  const stats = [
    { number: 500, label: "Happy Clients", suffix: "+" },
    { number: 1200, label: "Completed Cleanings", suffix: "+" },
    { number: 100, label: "Service Guaranteed", suffix: "%" },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  stat,
  index,
}: {
  stat: { number: number; label: string; suffix: string };
  index: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.number]);

  return (
    <div
      ref={ref}
      className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover-lift animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-lg font-medium text-muted-foreground">
        {stat.label}
      </div>
    </div>
  );
};

export default Stats;
