import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface TributeFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    relationship: string;
    message: string;
  }) => Promise<void>;
  isSubmitting?: boolean;
}

export function TributeForm({ onSubmit, isSubmitting: externalSubmitting }: TributeFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitting = externalSubmitting ?? isSubmitting;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    relationship: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name and message are required",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      toast({
        title: "Thank you",
        description: "Your tribute has been added to the memorial",
      });
      setFormData({
        name: '',
        email: '',
        relationship: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit tribute. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm sm:text-base">Your Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="John Ade"
            required
            className="bg-card text-sm sm:text-base"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm sm:text-base">Email (optional)</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="john@example.com"
            className="bg-card text-sm sm:text-base"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="relationship" className="text-sm sm:text-base">Your Relationship (optional)</Label>
        <Input
          id="relationship"
          value={formData.relationship}
          onChange={(e) => setFormData(prev => ({ ...prev, relationship: e.target.value }))}
          placeholder="Friend, Colleague, Family..."
          className="bg-card text-sm sm:text-base"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm sm:text-base">Your Tribute Message *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Share your memories, thoughts, or condolences..."
          rows={5}
          required
          className="bg-card resize-none text-sm sm:text-base"
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={submitting}
        className="w-full sm:w-auto"
        size="lg"
      >
        <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
        {submitting ? 'Sending...' : 'Share Tribute'}
      </Button>
    </form>
  );
}