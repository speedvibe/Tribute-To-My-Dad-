import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { TributeCard } from '@/components/TributeCard';
import { TributeForm } from '@/components/TributeForm';
import { AirtableSetup } from '@/components/AirtableSetup';
import { fetchTributes, submitTribute, type Tribute } from '@/services/airtable';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Gallery } from '@/components/Gallery';
import memorialHero from '@/assets/memorial-hero.jpg';


const Index = () => {
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSetup, setShowSetup] = useState(true);

  // Memorial details - customize these
  const memorialInfo = {
    name: "Folafemi Solanke",
    aka: "(Baba Arrange)",
    dates: "May 6, 1940 – Feb 23, 2001",
    subtitle: "Beloved Father, Husband, and Friend"
  };



  useEffect(() => {
    loadTributes();
    // Check if Airtable is configured
    const checkConfig = () => {
      const isConfigured = !window.location.href.includes('localhost') || 
                           localStorage.getItem('airtable-configured');
      setShowSetup(!isConfigured);
    };
    checkConfig();
  }, []);

  const loadTributes = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTributes();
      setTributes(data);
    } catch (error) {
      console.error('Error loading tributes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTributeSubmit = async (data: {
    name: string;
    email: string;
    relationship: string;
    message: string;
  }) => {
    await submitTribute(data);
    await loadTributes(); // Reload tributes after submission
  };

  return (
    <div className="min-h-screen bg-background ">
      {/* Hero Section with background image */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: 'url("./memorial.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // opacity: 0.5
          }}
        />
        <Hero 
          name={memorialInfo.name}
          aka={memorialInfo.aka}
          dates={memorialInfo.dates}
          subtitle={memorialInfo.subtitle}
        />
      </div>

      {/* Setup Instructions */}
      {/* {showSetup && <AirtableSetup />} */}


      {/* Gallery Section */}
      <Gallery images={[
        '/memorial.jpg',
        '/placeholder.svg',
        '/memorial.jpg',
        '/placeholder.svg',
        '/memorial.jpg',
        '/placeholder.svg'
      ]} />

      {/* Tributes Section */}
      <section className="p-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Tributes & Memories
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Share your memories and celebrate a life well lived
            </p>
          </div>

          {/* Tributes Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-48" />
              ))}
            </div>
          ) : tributes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 md:mb-16">
              {tributes.map((tribute) => (
                <TributeCard
                  key={tribute.id}
                  name={tribute.name}
                  message={tribute.message}
                  relationship={tribute.relationship}
                  createdAt={tribute.createdAt || new Date().toISOString()}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12 mb-12 sm:mb-16">
              <p className="text-sm sm:text-base text-muted-foreground">
                Be the first to share a tribute
              </p>
            </div>
          )}

          <Separator className=" mb-10 md:mb-16" />

          {/* Add Tribute Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl  font-bold text-foreground mb-4">
                Share Your Tribute
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground px-4">
                Your words of remembrance will be cherished forever
              </p>
            </div>
            
            <div className="memorial-card">
              <TributeForm onSubmit={handleTributeSubmit} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="text-center text-sm text-muted-foreground">
          <p>Forever in our hearts • {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;