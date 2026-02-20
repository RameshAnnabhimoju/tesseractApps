import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
    structuredData?: Record<string, any>;
}

const SEO = ({
    title,
    description,
    image = "/tesseract_logo.webp",
    url,
    type = "website",
    structuredData,
}: SEOProps) => {
    // Construct full URL if not provided
    const currentUrl = url || window.location.href;

    // Construct full image URL (handle relative vs absolute)
    const imageUrl = image.startsWith("http")
        ? image
        : `${window.location.origin}${image.startsWith("/") ? "" : "/"}${image}`;

    // Remove query params for canonical unless essential
    const canonicalUrl = currentUrl.split("?")[0];

    return (
        <Helmet>
            {/* 1. Standard SEO Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* 2. Open Graph Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={imageUrl} />

            {/* 3. Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* 4. Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
