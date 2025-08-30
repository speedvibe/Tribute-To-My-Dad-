import { Flower2 } from "lucide-react";

interface HeroProps {
  name: string;
  dates: string;
  subtitle?: string;
  aka?: string;
}

export function Hero({ name, dates, subtitle, aka }: HeroProps) {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dawn" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-16">
        <Flower2 className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-primary/40" />

        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-primary mb-3 sm:mb-1">
          {name}
        </h1>
         <h1 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-4">
          {aka}
        </h1>

        <p className="text-lg md:text-2xl text-foreground/70 mb-2 font-semibold">{dates}</p>

        {subtitle && (
          <p className="text-base md:text-lg text-gray-700 mt-6 max-w-2xl mx-auto font-semibold">
            {'25 Years Remembrance'}
          </p>
        )}

        <div className="mt-12">
          <p className="text-sm text-muted-foreground italic">
            "A father, mentor, and friend to many. Though you left us in 2001,
            your legacy, values, and love remain alive in our hearts. Today we
            gather to honor your memory and celebrate the life you lived."
          </p>
        </div>
      </div>
    </section>
  );
}
