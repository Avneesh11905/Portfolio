import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import GradientText from './GradientText';
import { ProjectsSkeleton } from './Skeletons';
import { useContent } from '@/hooks/useContent';
import { useRef, useState, useCallback } from 'react';

// Helper to add /images/ prefix if not present
const getImagePath = (path: string) => {
    if (!path) return '/placeholder-project.png';
    return path.startsWith('/') ? path : `/images/${path}`;
};

export default function Projects() {
    const { content, loading } = useContent();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const mobileScrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showSwipeHint, setShowSwipeHint] = useState(true);

    // Track active project on mobile scroll
    const handleMobileScroll = useCallback(() => {
        if (mobileScrollRef.current) {
            const container = mobileScrollRef.current;
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.offsetWidth * 0.8; // 80vw
            const newIndex = Math.round(scrollLeft / (cardWidth + 16)); // 16 = gap-4
            setActiveIndex(newIndex);

            // Hide swipe hint after user starts scrolling
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
        return <ProjectsSkeleton />;
    }

    const projects = content?.projects || [];

    // Shared card component
    const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
        <div
            key={`${project.title}-${index}`}
            className="group rounded-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20"
        >
            <div className="h-full bg-card border border-border/30 rounded-xl overflow-hidden transition-shadow flex flex-col">
                {/* Image Section */}
                <div className="relative h-40 overflow-hidden bg-muted shrink-0">
                    {project.image && (
                        <img
                            src={getImagePath(project.image)}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    )}

                    {/* Placeholder icon - only when no image */}
                    {!project.image && (
                        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/20 via-primary/5 to-muted">
                            <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 py-2">
                        {project.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                        {project.github && (
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 h-9 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
                                asChild
                            >
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4 mr-1.5" />
                                    Source
                                </a>
                            </Button>
                        )}
                        {project.demo && (
                            <Button
                                size="sm"
                                className="flex-1 h-10 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
                                asChild
                            >
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Demo
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="projects" className="snap-start scroll-mt-8 min-h-screen flex flex-col justify-center py-4 md:py-16">
            <div className="container mx-auto max-w-5xl px-5 md:px-8">
                <div className="text-center md:mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                        <GradientText>Featured Projects</GradientText>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        Showcase of my recent work and side projects
                    </p>
                </div>
            </div>

            {/* Mobile: Horizontal swipeable carousel */}
            <div className="md:hidden relative w-full">
                {/* Edge gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Swipe hint - fades out after scrolling */}
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
                    {projects.map((project, index) => (
                        <div
                            key={`mobile-${project.title}-${index}`}
                            className={`shrink-0 w-[80vw] max-w-[300px] snap-center transition-all duration-300 ${activeIndex === index ? 'scale-100 opacity-100' : 'scale-[0.95] opacity-80'
                                }`}
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>

                {/* Scroll indicator with active state */}
                <div className="flex flex-col items-center gap-2 pb-16">
                    <div className="flex gap-2">
                        {projects.map((_, i) => (
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
                    className="flex gap-5 overflow-x-scroll px-12 pt-8 scroll-smooth scrollbar-hide mx-auto w-fit max-w-full"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((project, index) => (
                        <div key={`${project.title}-${index}`} className="shrink-0 w-[320px]">
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
