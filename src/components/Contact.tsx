import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import GradientText from './GradientText';
import { useContent } from '@/hooks/useContent';
import { ContactSkeleton } from './Skeletons';

export default function Contact() {
    const { content, loading } = useContent();
    const contact = content?.contact;
    const profile = content?.profile;

    if (loading) {
        return <ContactSkeleton />;
    }

    return (
        <section id="contact" className="snap-start snap-always scroll-mt-2 w-full h-screen flex flex-col justify-between">
            <div className="flex-1 flex items-center">
                <div className="container max-w-xl mx-auto px-5 md:px-8 py-20 md:py-8">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
                            <GradientText>Let's Connect</GradientText>
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Feel free to reach out for collaborations!
                        </p>
                    </div>

                    <Card className="border-border/40 bg-card/60 backdrop-blur">
                        <CardContent className="p-3 md:p-4">
                            <div className="grid gap-2">
                                {/* Email */}
                                {contact?.email && (
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-accent/50 transition-all group"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-sm">Email</p>
                                            <p className="text-xs text-muted-foreground truncate">{contact.email}</p>
                                        </div>
                                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                                    </a>
                                )}

                                {/* GitHub */}
                                {contact?.github && (
                                    <a
                                        href={contact.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-accent/50 transition-all group"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <Github className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-sm">GitHub</p>
                                            <p className="text-xs text-muted-foreground">
                                                {contact.github.replace('https://github.com/', '@')}
                                            </p>
                                        </div>
                                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                                    </a>
                                )}

                                {/* LinkedIn */}
                                {contact?.linkedin && (
                                    <a
                                        href={contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-accent/50 transition-all group"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <Linkedin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-sm">LinkedIn</p>
                                            <p className="text-xs text-muted-foreground">{profile?.name || 'LinkedIn Profile'}</p>
                                        </div>
                                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                                    </a>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-border/50 w-full pb-24 pt-8 md:pb-16 md:pt-8">
                <div className="container mx-auto max-w-5xl px-5 md:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-2">
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} {profile?.name || 'Avneesh Mahajan'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Built with <span className="text-primary font-medium">React</span> + {' '}
                            <span className="text-primary font-medium">TypeScript</span> + {' '}
                            <span className="text-primary font-medium">shadcn/ui</span>
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}

