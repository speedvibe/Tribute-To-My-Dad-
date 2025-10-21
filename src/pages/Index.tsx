import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { TributeCard } from "@/components/TributeCard";
import { TributeForm } from "@/components/TributeForm";
import { AirtableSetup } from "@/components/AirtableSetup";
import {
  fetchTributes,
  submitTribute,
  type Tribute,
} from "@/services/airtable";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Gallery } from "@/components/Gallery";

const Index = () => {
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSetup, setShowSetup] = useState(true);
  const [seeMore, setSeeMore] = useState(false);

  // Memorial details - customize these
  const memorialInfo = {
    name: "Folafemi Solanke",
    aka: "(Baba Arrange)",
    dates: "May 6, 1940 – Feb 23, 2001",
    subtitle: "Beloved Father, Husband, and Friend",
  };

  useEffect(() => {
    loadTributes();
    // Check if Airtable is configured
    const checkConfig = () => {
      const isConfigured =
        !window.location.href.includes("localhost") ||
        localStorage.getItem("airtable-configured");
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
      console.error("Error loading tributes:", error);
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
    <div className="min-h-screen bg-background  ">
      {/* Hero Section with background image */}
      <div className="relative h-[65vh] md:min-h-[85vh]">
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: 'url("./memorial.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            // opacity: 0.5
          }}
        />
        <div className="bg-[#462d2d]/30 h-full w-full absolute top-0 right-0 left-0 z-10" />
        <Hero
          name={memorialInfo.name}
          aka={memorialInfo.aka}
          dates={memorialInfo.dates}
          subtitle={memorialInfo.subtitle}
        />
      </div>

      {/* Setup Instructions */}
      {/* {showSetup && <AirtableSetup />} */}
      <div className="">
        <div className="mt-8 max-w-xl mx-auto text-center p-4">
          <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed">
            "A father, mentor, and friend to many. Though you left us in 2001,
            your legacy, values, and love remain alive in our hearts. Today we
            gather to honor your memory and celebrate the life you lived."
          </p>
        </div>
      </div>

      {/* Biography Section */}
      <section className="py-10 md:py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Biography
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              The Life and Legacy of Albert Folafemi Olalekan Solanke
            </p>
          </div>

          <div className="memorial-card p-3 md:p-8">
            <div className="prose prose-lg max-w-none text-foreground">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">
                  May 6, 1940 – February 23, 2001
                </h3>
              </div>

              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <p>
                  Mr. Albert Folafemi Olalekan Solanke was born on May 6, 1940,
                  in Abeokuta, Ogun State, Nigeria. He lived an exceptional life
                  marked by integrity, humility, service, and joy. His legacy
                  continues to inspire all who were privileged to know him.
                </p>

                <p>
                  He attended the prestigious Baptist Boys' High School (BBHS),
                  Abeokuta, in the 1960s, where he distinguished himself as a
                  brilliant, disciplined, and sociable student. His love for the
                  institution endured long after graduation, as he became an
                  active and loyal member of the BBHS Old Boys' Association,
                  where he served meritoriously as General Secretary. His
                  passion for unity, progress, and community spirit within the
                  association earned him deep respect from his peers.
                </p>

                <p>
                  Mr. Solanke built an admirable career with the Ministry of
                  Agriculture, Abeokuta, where he served with dedication and
                  excellence. He rose to become the Head of the Mile 6 Settler
                  and Administration Unit, a role in which he displayed
                  remarkable leadership, fairness, and a strong sense of
                  responsibility. Known for his discipline and commitment, he
                  was a dependable administrator who led by example and inspired
                  confidence among his colleagues and subordinates.
                </p>

                <p>
                  A man of principle, integrity, and compassion, Mr. Solanke was
                  deeply respected for his honesty and sense of justice. His
                  words were his bond, and his lifestyle reflected his values of
                  hard work, faith, and service to humanity.
                </p>

               {!seeMore && <span
                  onClick={() => setSeeMore(true)}
                  className="italics text-blue-600 text-center mx-auto cursor-pointer w-full"
                >
                  See more ...
                </span>}

                {seeMore && (
                  <>
                    <p>
                      He was happily married to his beloved wife, Mrs. Omotolase
                      Adunni Solanke, and their marriage was blessed with five
                      sons. He was a devoted husband and father who prioritized
                      family, education, and good character. His home was one of
                      warmth, laughter, and wisdom — a reflection of his heart
                      and values.
                    </p>

                    <p>
                      Beyond his career and family life, Mr. Solanke was widely
                      known for his vibrant and social personality. Fondly
                      called "Baba Arrange," he was the life of every occasion —
                      cheerful, stylish, and full of positive energy. His
                      friends and associates admired his ability to balance a
                      responsible life with a fun-loving spirit. He loved good
                      music, lively gatherings, and enjoyed relaxing moments
                      over a cup of coffee or a glass of Guinness Stout, his
                      favorite refreshment.
                    </p>

                    <p>
                      Mr. Albert Folafemi Olalekan Solanke was, above all, a man
                      of character, joy, and service — a true gentleman whose
                      name evokes respect and fond memories. He lived with
                      purpose, gave selflessly, and touched countless lives
                      through his kindness and integrity.
                    </p>

                    <p className="font-medium italic">
                      He passed away peacefully on February 23, 2001, but his
                      memory remains evergreen. His life continues to shine as
                      an enduring example of goodness, leadership, and love — a
                      legacy that lives on in his children, family, and all who
                      knew him.
                    </p>
                  </>
                )}

                  {seeMore && <span
                  onClick={() => setSeeMore(false)}
                  className="italics text-blue-600 text-center mx-auto cursor-pointer w-full"
                >
                  See Less ...
                </span>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery
        images={[
          "/memorial.jpg",
          "/gallery/g1.JPG",
          "/gallery/g2.JPG",
          "/gallery/g3.JPG",
          "/gallery/g4.JPG",
          "/gallery/g5.JPG",
          "/gallery/g6.JPG",
          "/gallery/g7.JPG",
          "/gallery/g8.JPG",
          "/gallery/g9.JPG",
          "/gallery/g10.JPG",
          "/gallery/g11.JPG",
          "/gallery/g12.JPG",
        ]}
      />

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
          <div className="max-w-2xl mx-auto" id="tribute-form">
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
