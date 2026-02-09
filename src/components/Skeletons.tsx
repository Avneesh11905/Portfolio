import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function HeroSkeleton() {
    return (
        <section
            id="hero"
            className="snap-start scroll-mt-12 min-h-[90vh] md:min-h-screen flex items-center justify-center px-5 md:px-8 "
        >
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    animate={{ opacity: 1, y: [0, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-center"
                >
                    {/* Profile Image */}
                    <div className="flex justify-center mb-5 md:mb-8">
                        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-muted">
                            <div className="w-full h-full bg-muted animate-pulse" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center justify-center gap-4 mb-8">
                        <div className="h-12 w-64 md:w-96 bg-muted/50 rounded-lg animate-pulse" />
                        <div className="h-6 w-48 md:w-64 bg-muted/50 rounded-lg animate-pulse" />
                        <div className="h-4 w-32 bg-muted/50 rounded-lg animate-pulse" />
                    </div>

                    {/* Bio */}
                    <div className="flex flex-col gap-2 mb-8 max-w-xl mx-auto items-center">
                        <div className="h-4 w-full bg-muted/50 rounded animate-pulse" />
                        <div className="h-4 w-[90%] bg-muted/50 rounded animate-pulse" />
                        <div className="h-4 w-[80%] bg-muted/50 rounded animate-pulse" />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-4 justify-center items-center mb-6 px-4 sm:px-0">
                        <div className="h-11 w-32 md:w-40 bg-muted/50 rounded-lg animate-pulse" />
                        <div className="h-11 w-32 md:w-40 bg-muted/50 rounded-lg animate-pulse" />
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center">
                        <div className="h-11 w-11 bg-muted/50 rounded-lg animate-pulse" />
                        <div className="h-11 w-11 bg-muted/50 rounded-lg animate-pulse" />
                        <div className="h-11 w-11 bg-muted/50 rounded-lg animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function SkillsSkeleton() {
    return (
        <section id="skills" className="snap-start min-h-screen flex flex-col justify-center container mx-auto max-w-6xl py-20">
            <div className="text-center mb-12">
                <div className="h-10 w-64 bg-muted/50 rounded-lg mx-auto mb-4 animate-pulse" />
                <div className="h-5 w-80 bg-muted/30 rounded mx-auto animate-pulse" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <Card key={i} className="border-border/50 bg-card/30 animate-pulse">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 bg-muted/50 rounded-lg" />
                                <div className="h-5 w-24 bg-muted/50 rounded" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {[...Array(4)].map((_, j) => (
                                    <div key={j} className="h-5 w-16 bg-muted/30 rounded-full" />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export function ProjectsSkeleton() {
    return (
        <section id="projects" className="snap-start min-h-screen flex flex-col justify-center py-12">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-8">
                    <div className="h-10 w-64 bg-muted/50 rounded-lg mx-auto mb-4 animate-pulse" />
                    <div className="h-5 w-96 bg-muted/30 rounded mx-auto animate-pulse" />
                </div>
            </div>
            <div className="flex gap-4 px-8 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                    <Card key={i} className="shrink-0 w-72 border-border/50 bg-card/30 animate-pulse">
                        <div className="h-40 bg-muted/50" />
                        <CardHeader className="pb-1 pt-3 px-3">
                            <div className="h-4 w-32 bg-muted/50 rounded mb-2" />
                            <div className="h-3 w-full bg-muted/30 rounded" />
                        </CardHeader>
                        <CardContent className="px-3 pt-2">
                            <div className="flex gap-1">
                                {[...Array(3)].map((_, j) => (
                                    <div key={j} className="h-4 w-12 bg-muted/30 rounded-full" />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export function CertificationsSkeleton() {
    return (
        <section id="certifications" className="snap-start min-h-screen flex flex-col justify-center container mx-auto max-w-6xl py-20">
            <div className="text-center mb-12">
                <div className="h-10 w-72 bg-muted/50 rounded-lg mx-auto mb-4 animate-pulse" />
                <div className="h-5 w-96 bg-muted/30 rounded mx-auto animate-pulse" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                    <Card key={i} className="border-border/50 bg-card/30 animate-pulse">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="w-9 h-9 bg-muted/50 rounded-lg" />
                                <div className="h-5 w-20 bg-muted/30 rounded-full" />
                            </div>
                            <div className="h-5 w-48 bg-muted/50 rounded mt-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="h-4 w-24 bg-primary/20 rounded mb-2" />
                            <div className="h-3 w-full bg-muted/30 rounded" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
export function ContactSkeleton() {
    return (
        <section id="contact" className="snap-start min-h-screen flex flex-col justify-center container mx-auto max-w-4xl py-20 px-4">
            <div className="text-center mb-12">
                <div className="h-10 w-48 bg-muted/50 rounded-lg mx-auto mb-4 animate-pulse" />
                <div className="h-6 w-96 bg-muted/30 rounded mx-auto animate-pulse" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-card/30 rounded-2xl p-8 border border-border/50 animate-pulse">
                    <div className="h-7 w-40 bg-muted/50 rounded mb-6" />
                    <div className="space-y-6">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-muted/50 rounded-lg" />
                                <div className="space-y-2">
                                    <div className="h-4 w-20 bg-muted/30 rounded" />
                                    <div className="h-5 w-32 bg-muted/50 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-card/30 rounded-2xl p-8 border border-border/50 animate-pulse">
                    <div className="h-7 w-40 bg-muted/50 rounded mb-6" />
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-10 bg-muted/30 rounded-lg" />
                            <div className="h-10 bg-muted/30 rounded-lg" />
                        </div>
                        <div className="h-10 bg-muted/30 rounded-lg" />
                        <div className="h-32 bg-muted/30 rounded-lg" />
                        <div className="h-10 w-full bg-muted/50 rounded-lg" />
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-border/10 text-center">
                <div className="h-5 w-64 bg-muted/30 rounded mx-auto animate-pulse" />
            </div>
        </section>
    );
}
