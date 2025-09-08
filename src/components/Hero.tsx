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
      {/* <div className="absolute inset-0 bg-gradient-dawn" />
      <div className="absolute inset-0 bg-gradient-hero" /> */}

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mt-[20%]">

            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-primary mb-3 sm:mb-1">
              {name}
            </h1>
            {aka && (
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-4">
                {aka}
              </h2>
            )}

            <p className="text-lg md:text-2xl text-foreground/70 mb-2 font-semibold">{dates}</p>

            {subtitle && (
              <p className="text-base md:text-lg text-gray-700 mt-6 font-semibold">
                25 Years Remembrance
              </p>
            )}

            <div className="mt-8 max-w-xl">
              <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed">
                "A father, mentor, and friend to many. Though you left us in 2001,
                your legacy, values, and love remain alive in our hearts. Today we
                gather to honor your memory and celebrate the life you lived."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
