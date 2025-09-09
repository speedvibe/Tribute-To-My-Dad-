import { useState } from 'react';
import { TributeForm } from '@/components/TributeForm';
import { submitTribute } from '@/services/airtable';
import { ArrowLeft } from 'lucide-react';

const TributeFormPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleTributeSubmit = async (data: {
    name: string;
    email: string;
    relationship: string;
    message: string;
  }) => {
    setIsSubmitting(true);
    try {
      await submitTribute(data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting tribute:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4 border-b">
        <div className="max-w-4xl mx-auto flex items-center">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center">
              <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
                Thank You
              </h1>
              <p className="text-muted-foreground mb-8">
                Your tribute has been submitted and will be cherished forever.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Return Home
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Share Your Tribute
                </h1>
                <p className="text-muted-foreground">
                  Your words of remembrance will be cherished forever
                </p>
              </div>
              
              <div className="memorial-card">
                <TributeForm onSubmit={handleTributeSubmit} isSubmitting={isSubmitting} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default TributeFormPage;