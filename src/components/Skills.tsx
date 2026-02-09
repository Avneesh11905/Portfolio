import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Globe, Cloud, Database, Server } from 'lucide-react';
import GradientText from './GradientText';
import { useContent } from '@/hooks/useContent';
import { SkillsSkeleton } from './Skeletons';

const iconMap: Record<string, any> = {
    Code2,
    Brain,
    Globe,
    Cloud,
    Database,
    Server,
};

export default function Skills() {
    const { content, loading } = useContent();
    const [isPaused, setIsPaused] = useState(false);

    if (loading) {
        return <SkillsSkeleton />;
    }

    const skillCategories = content?.skills || [];
    // Duplicate for seamless loop
    const duplicatedSkills = [...skillCategories, ...skillCategories];

    return (
        <section id="skills" className="snap-start scroll-mt-4 min-h-screen flex flex-col justify-center pb-16">
            <div className="container mx-auto max-w-5xl px-5 md:px-8">
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                        <GradientText>Skills & Technologies</GradientText>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        Tools and technologies I work with
                    </p>
                </div>
            </div>

            {/* Horizontal scroll carousel */}
            <div className="relative w-full py-2 overflow-hidden">
                {/* Subtle edge gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Animated scrolling container */}
                <div
                    className="flex gap-4 sm:gap-5 py-4"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="flex gap-4 sm:gap-5 animate-scroll"
                        style={{
                            animationPlayState: isPaused ? 'paused' : 'running',
                        }}
                    >
                        {duplicatedSkills.map((category, index) => {
                            const Icon = iconMap[category.icon] || Code2;

                            return (
                                <div
                                    key={`${category.category}-${index}`}
                                    className="group shrink-0 w-[280px] sm:w-[320px] rounded-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20"
                                >
                                    <Card className="h-full border-border/30 bg-card overflow-hidden">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 rounded-lg bg-primary/10">
                                                    <Icon className="h-5 w-5 text-primary" />
                                                </div>
                                                <CardTitle className="text-lg">{category.category}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {category.items.map((skill) => (
                                                    <Badge
                                                        key={skill}
                                                        variant="secondary"
                                                        className="text-sm font-normal px-3 py-1"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
