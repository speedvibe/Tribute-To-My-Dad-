import { Flower2 } from 'lucide-react';

interface HeroProps {
  name: string;
  dates: string;
  subtitle?: string;
}

export function Hero({ name, dates, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dawn" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-16">
        <Flower2 className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-primary/40" />
        
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-3 sm:mb-4">
          {name}
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-2">
          {dates}
        </p>
        
        {subtitle && (
          <p className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            {subtitle}
          </p>
        )}
        
        <div className="mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm text-muted-foreground italic px-4">
            "Those we love don't go away, they walk beside us every day"
          </p>
        </div>
      </div>
    </section>
  );
}