import { format } from 'date-fns';
import { Heart } from 'lucide-react';

interface TributeCardProps {
  name: string;
  message: string;
  relationship?: string;
  createdAt: string;
}

export function TributeCard({ name, message, relationship, createdAt }: TributeCardProps) {
  return (
    <div className="memorial-card tribute-animation hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground">{name}</h3>
          {relationship && (
            <p className="text-sm text-muted-foreground mt-1">{relationship}</p>
          )}
        </div>
        <Heart className="w-4 h-4 text-primary/30" />
      </div>
      
      <p className="text-foreground/90 leading-relaxed mb-4 whitespace-pre-wrap">
        {message}
      </p>
      
      <time className="text-xs text-muted-foreground">
        {format(new Date(createdAt), 'MMMM d, yyyy')}
      </time>
    </div>
  );
}