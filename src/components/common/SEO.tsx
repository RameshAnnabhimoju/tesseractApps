import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    url?: string;
    type?: string;
    // Optional OG overrides (social preview can differ from meta title/description)
    ogTitle?: string;
    ogDescription?: string;
    // Article-specific
    publishedAt?: string;
    author?: string;
    section?: string;
    tags?: string[];
    // Twitter
    twitterCard?: "summary" | "summary_large_image";
    twitterCreator?: string;
    // Misc
    structuredData?: Record<string, unknown>;
    canonical?: string;
    noIndex?: boolean;
    schemaMarkup?: string;
}

const SITE_URL = "https://www.tesseractapps.com.au";
const TWITTER_SITE = "@TesseractApps";

const SEO = ({
    title,
    description,
    image = "/tesseract_logo.webp",
    imageAlt,
    url,
    type = "website",
    ogTitle,
    ogDescription,
    publishedAt,
    author,
    section,
    tags,
    twitterCard = "summary_large_image",
    twitterCreator,
    structuredData,
    canonical,
    noIndex,
    schemaMarkup,
}: SEOProps) => {
    const currentUrl = url || (typeof window !== "undefined" ? window.location.href : SITE_URL);

    const imageUrl = image.startsWith("http")
        ? image
        : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;

    const canonicalUrl = canonical ?? currentUrl.split("?")[0];

    const resolvedOgTitle = ogTitle ?? title;
    const resolvedOgDescription = ogDescription ?? description;

    const safeSchemaMarkup = (() => {
        if (!schemaMarkup) return null;
        try {
            JSON.parse(schemaMarkup);
            return schemaMarkup;
        } catch {
            return null;
        }
    })();

    return (
        <Helmet>
            {/* ── Standard ── */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* ── Canonical ── */}
            <link rel="canonical" href={canonicalUrl} />

            {/* ── Open Graph (base) ── */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={resolvedOgTitle} />
            <meta property="og:description" content={resolvedOgDescription} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
            <meta property="og:site_name" content="TesseractApps" />

            {/* ── Open Graph (article) ── */}
            {type === "article" && publishedAt && (
                <meta property="article:published_time" content={publishedAt} />
            )}
            {type === "article" && author && (
                <meta property="article:author" content={author} />
            )}
            {type === "article" && section && (
                <meta property="article:section" content={section} />
            )}
            {type === "article" && tags?.map((tag) => (
                <meta key={tag} property="article:tag" content={tag} />
            ))}

            {/* ── Twitter Card ── */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:site" content={TWITTER_SITE} />
            {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
            <meta name="twitter:title" content={resolvedOgTitle} />
            <meta name="twitter:description" content={resolvedOgDescription} />
            <meta name="twitter:image" content={imageUrl} />
            {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}

            {/* ── Structured Data — Sanity JSON-LD string ── */}
            {safeSchemaMarkup && (
                <script type="application/ld+json">{safeSchemaMarkup}</script>
            )}

            {/* ── Structured Data — programmatic object ── */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
