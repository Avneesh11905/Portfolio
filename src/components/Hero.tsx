import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './GradientText';
import ResumeDownload from './ResumeDownload';
import { useContent } from '@/hooks/useContent';
import { HeroSkeleton } from './Skeletons';

const getImagePath = (path: string) => {
    if (!path) return '';
    return path.startsWith('/') ? path : `/images/${path}`;
};

export default function Hero() {
    const { content, loading } = useContent();
    const profile = content?.profile;
    const profileImage = profile?.profileImage ? getImagePath(profile.profileImage) : '';
    const contact = content?.contact;

    if (loading) {
        return <HeroSkeleton />;
    }

    return (
        <section
            id="hero"
            className="snap-start scroll-mt-12 min-h-[90vh] md:min-h-screen flex items-center justify-center px-5 md:px-8 "
        >
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Profile Image */}
                    <div className="flex justify-center mb-5 md:mb-8">
                        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-muted border-4 border-primary/30 shadow-lg shadow-primary/20">
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt={profile?.name || 'Profile'}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                                    <User className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                                </div>
                            )}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight tracking-tight">
                        Hi, I'm <GradientText>{profile?.name || 'Developer'}</GradientText>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2">
                        {profile?.title || 'Full-Stack Developer'}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground/70 mb-4">
                        {profile?.subtitle || profile?.location || ''}
                    </p>

                    {/* Bio */}
                    {profile?.bio && (
                        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                            {profile.bio}
                        </p>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-4 justify-center items-center mb-6 px-4 sm:px-0">
                        <Button
                            size="lg"
                            className="sm:w-auto h-11 px-4"
                            onClick={() => {
                                const element = document.getElementById('projects');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                        >
                            View My Work
                        </Button>
                        <ResumeDownload />
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center">
                        {contact?.github && (
                            <Button variant="outline" size="icon" className="h-11 w-11 rounded-lg" asChild>
                                <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github className="h-5 w-5" />
                                </a>
                            </Button>
                        )}
                        {contact?.linkedin && (
                            <Button variant="outline" size="icon" className="h-11 w-11 rounded-lg" asChild>
                                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </Button>
                        )}
                        {contact?.email && (
                            <Button variant="outline" size="icon" className="h-11 w-11 rounded-lg" asChild>
                                <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
                                    <Mail className="h-5 w-5" />
                                </a>
                            </Button>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
