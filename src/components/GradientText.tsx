interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
    return (
        <span className={`bg-linear-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent ${className}`}>
            {children}
        </span>
    );
}
