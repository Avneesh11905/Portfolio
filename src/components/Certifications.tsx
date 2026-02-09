import { useRef, useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import GradientText from './GradientText';
import { CertificationsSkeleton } from './Skeletons';
import { useContent } from '@/hooks/useContent';

export default function Certifications() {
    const { content, loading } = useContent();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const mobileScrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showSwipeHint, setShowSwipeHint] = useState(true);

    // Track active cert on mobile scroll
    const handleMobileScroll = useCallback(() => {
        if (mobileScrollRef.current) {
            const container = mobileScrollRef.current;
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.offsetWidth * 0.8;
            const newIndex = Math.round(scrollLeft / (cardWidth + 16));
            setActiveIndex(newIndex);

            if (scrollLeft > 20 && showSwipeHint) {
                setShowSwipeHint(false);
            }
        }
    }, [showSwipeHint]);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
    };

    if (loading) {
        return <CertificationsSkeleton />;
    }

    const certifications = content?.certifications || [];

    // Shared card component
    const CertCard = ({ cert }: { cert: typeof certifications[0] }) => (
        <Card className="h-full border-border/30 bg-card overflow-hidden">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                        {cert.inProgress ? (
                            <Clock className="h-5 w-5 text-primary" />
                        ) : (
                            <Award className="h-5 w-5 text-primary" />
                        )}
                    </div>
                    <Badge
                        variant={cert.inProgress ? 'default' : 'secondary'}
                        className={cert.inProgress ? 'bg-primary text-sm px-3' : 'text-sm px-3'}
                    >
                        {cert.status}
                    </Badge>
                </div>
                <CardTitle className="text-lg mt-3">{cert.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-primary font-semibold mb-2">
                    {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3">
                    {cert.description}
                </p>
            </CardContent>
        </Card>
    );

    return (
        <section id="certifications" className="snap-start scroll-mt-4 min-h-screen flex flex-col items-center justify-center py-4 md:py-16">
            <div className="container mx-auto max-w-5xl px-5 md:px-8">
                <div className="text-center mb-2 md:mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                        <GradientText>Certifications & Learning</GradientText>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        Continuous learning and professional development
                    </p>
                </div>
            </div>

            {/* Mobile: Horizontal swipeable carousel */}
            <div className="md:hidden relative w-full">
                {/* Edge gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Swipe hint */}
                {showSwipeHint && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none transition-opacity duration-500">
                        <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/50 shadow-lg animate-bounce-x">
                            <span className="text-[10px] text-muted-foreground font-medium">Swipe</span>
                            <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                    </div>
                )}

                {/* Scrollable container */}
                <div
                    ref={mobileScrollRef}
                    onScroll={handleMobileScroll}
                    className="flex gap-4 overflow-x-auto px-6 py-6 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                    {certifications.map((cert, index) => (
                        <div
                            key={`mobile-${cert.title}-${index}`}
                            className={`shrink-0 w-[80vw] max-w-[300px] snap-center transition-all duration-300 ${activeIndex === index ? 'scale-100 opacity-100' : 'scale-[0.95] opacity-80'
                                }`}
                        >
                            <CertCard cert={cert} />
                        </div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="flex flex-col items-center gap-2 mt-2 pb-16">
                    <div className="flex gap-2">
                        {certifications.map((_, i) => (
                            <div
                                key={i}
                                className={`rounded-full transition-all duration-300 ${activeIndex === i
                                    ? 'w-6 h-2 bg-primary'
                                    : 'w-2 h-2 bg-primary/30'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop: Horizontal scroll carousel */}
            <div className="hidden md:block relative w-full py-2">
                {/* Subtle edge gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Arrow buttons */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-card/90 hover:bg-card border border-border shadow-md"
                    onClick={scrollLeft}
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-card/90 hover:bg-card border border-border shadow-md"
                    onClick={scrollRight}
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Scrollable container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-5 overflow-x-scroll px-12 py-4 scroll-smooth scrollbar-hide mx-auto w-fit max-w-full"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {certifications.map((cert) => (
                        <div
                            key={cert.title}
                            className="group shrink-0 w-[320px] rounded-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20"
                        >
                            <CertCard cert={cert} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
