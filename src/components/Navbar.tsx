import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Code2, FolderKanban, Award, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderKanban },
    { name: 'Certs', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const mainElement = document.querySelector('main');
        if (!mainElement) return;

        const handleScroll = () => {
            setIsScrolled(mainElement.scrollTop > 50);

            // Auto-detect active section based on scroll position
            const sections = navItems.map(item => item.href.replace('#', ''));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        mainElement.addEventListener('scroll', handleScroll);
        return () => mainElement.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveSection(id);
    };

    return (
        <>
            {/* Desktop Navigation - Top */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${isScrolled
                    ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-primary/5'
                    : 'bg-background/50 backdrop-blur-sm'
                    }`}
            >
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="flex items-center justify-center h-16">
                        <div className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <Button
                                    key={item.href}
                                    variant="ghost"
                                    onClick={() => scrollToSection(item.href)}
                                    className={`text-base font-medium px-6 py-2 rounded-lg transition-all ${activeSection === item.href.replace('#', '')
                                        ? 'text-primary bg-primary/15 shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                                        }`}
                                >
                                    {item.name === 'Certs' ? 'Certifications' : item.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation - Bottom Fixed Bar */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 safe-area-bottom">
                <div className="flex items-center justify-around h-16 px-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.href.replace('#', '');

                        return (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 rounded-lg transition-all ${isActive
                                        ? 'text-primary'
                                        : 'text-muted-foreground'
                                    }`}
                            >
                                <Icon className={`h-5 w-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                                <span className={`text-[10px] font-medium ${isActive ? 'text-primary' : ''}`}>
                                    {item.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
