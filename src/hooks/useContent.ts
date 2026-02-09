import { useState, useEffect } from 'react';

interface Profile {
    name: string;
    title: string;
    subtitle?: string;
    bio: string;
    location: string;
    profileImage?: string;
    email?: string;
    github?: string;
    linkedin?: string;
    stats: {
        yearsOfExperience: string;
        projectsCompleted: string;
        technologiesMastered: string;
    };
}

interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo?: string;
    image: string;
}

interface Skill {
    category: string;
    icon: string;
    items: string[];
}

interface Certification {
    title: string;
    issuer: string;
    status: string;
    description: string;
    inProgress: boolean;
}

interface Contact {
    email: string;
    github: string;
    linkedin: string;
}

interface ContentData {
    profile: Profile;
    projects: Project[];
    skills: Skill[];
    certifications: Certification[];
    contact: Contact;
}

export function useContent() {
    const [content, setContent] = useState<ContentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        Promise.all([
            fetch('/data/profile.json').then(res => res.json()),
            fetch('/data/projects.json').then(res => res.json()),
            fetch('/data/skills.json').then(res => res.json()),
            fetch('/data/certifications.json').then(res => res.json()),
            fetch('/data/contact.json').then(res => res.json()),
        ])
            .then(([profile, projects, skills, certifications, contact]) => {
                setContent({ profile, projects, skills, certifications, contact });
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { content, loading, error };
}
