export default function SEO() {
    const siteTitle = 'Avneesh Mahajan - AI/ML Engineer & Full-Stack Developer';
    const siteDescription =
        '3rd Year B.Tech CSE student at VIT Bhopal specializing in AI/ML. Portfolio showcasing projects in Machine Learning, Full-Stack Development, Python, React, FastAPI, Docker, and more.';
    const siteUrl = 'https://aymahajan.in';
    const siteImage = `${siteUrl}/images/profile.webp`;
    const keywords =
        'Avneesh Mahajan, AI Engineer, Machine Learning, Full Stack Developer, React, Python, FastAPI, Docker, TypeScript, Portfolio, VIT Bhopal';

    return (
        <>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Avneesh Mahajan" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={`${siteUrl}${siteImage}`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={`${siteUrl}${siteImage}`} />

            {/* Additional SEO */}
            <meta name="theme-color" content="#14b8a6" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </>
    );
}
