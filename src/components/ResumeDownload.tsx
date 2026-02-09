import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function ResumeDownload() {
    const [status, setStatus] = useState<'idle' | 'checking' | 'not-found'>('idle');

    const handleDownload = async () => {
        setStatus('checking');

        // Add minimum delay for better UX
        await new Promise(resolve => setTimeout(resolve, 600));

        try {
            const response = await fetch('/resume.pdf');
            const contentType = response.headers.get('content-type');
            const isPdf = contentType?.includes('application/pdf');

            if (response.ok && isPdf) {
                // File exists, download it
                setStatus('idle');
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Avneesh_Mahajan_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                // File not found - show message on button
                setStatus('not-found');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            setStatus('not-found');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const getButtonText = () => {
        if (status === 'checking') return 'Checking...';
        if (status === 'not-found') return 'Resume Not Available';
        return 'Resume';
    };

    return (
        <Button
            size="lg"
            variant="outline"
            onClick={handleDownload}
            disabled={status === 'checking'}
            className={`text-base px-4 transition-colors ${status === 'not-found' ? 'border-red-500 text-red-500' : ''
                }`}
            title={status === 'not-found' ? 'Add resume.pdf to public folder' : undefined}
        >
            <Download className={`h-4 w-4 ${status === 'idle' ? 'mr-2' : ''}`} />
            <span className="">{getButtonText()}</span>
        </Button>
    );
}
