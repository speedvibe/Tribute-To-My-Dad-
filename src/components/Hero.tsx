import { Flower2 } from 'lucide-react';

interface HeroProps {
  name: string;
  dates: string;
  subtitle?: string;
}

export function Hero({ name, dates, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dawn" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16">
        <Flower2 className="w-12 h-12 mx-auto mb-6 text-primary/40" />
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-4">
          {name}
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/70 mb-2">
          {dates}
        </p>
        
        {subtitle && (
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <div className="mt-12">
          <p className="text-sm text-muted-foreground italic">
            "Those we love don't go away, they walk beside us every day"
          </p>
        </div>
      </div>
    </section>
  );
}