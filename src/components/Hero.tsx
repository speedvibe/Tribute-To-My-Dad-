import { Flower2 } from "lucide-react";

interface HeroProps {
  name: string;
  dates: string;
  subtitle?: string;
  aka?: string;
}

export function Hero({ name, dates, subtitle, aka }: HeroProps) {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute h-full w-full inset-0 bg-gradient-dawn" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className=" flex justify-start   mt-[68%]  md:mt-[20%] z-40">
            <div>
              <h1 className="font-serif   text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-3 sm:mb-1">
                {name}
              </h1>
              {aka && (
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4">
                  {aka}
                </h2>
              )}

              <p className="text-lg md:text-2xl text-gray-200 mb-2 font-semibold">
                {dates}
              </p>

              {subtitle && (
                <p className="text-base md:text-lg text-gray-200 mt-6 font-semibold italic">
                  25 Years Remembrance
                </p>
              )}
            </div>

            {/* <div className="mt-8 max-w-xl">
              <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed">
                "A father, mentor, and friend to many. Though you left us in 2001,
                your legacy, values, and love remain alive in our hearts. Today we
                gather to honor your memory and celebrate the life you lived."
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
