import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
}

export default function SEO({
  title = "The Tent - Premium VIP Festival Hospitality for Artists",
  description = "Elevate your festival experience with The Tent's premium hospitality services. Exclusive VIP amenities, recovery services, and luxury accommodations for artists at major music festivals.",
  keywords = "festival hospitality, VIP services, artist amenities, music festival, luxury hospitality, artist services, festival VIP, entertainment hospitality",
  image = "https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd552d3dff3c64d3ca968ef25827c341c?format=webp&width=1200",
  url = "https://thetent.club",
  type = "website",
  author = "The Tent, LLC",
  publishedTime,
  modifiedTime,
  section,
  tags,
  noIndex = false,
}: SEOProps) {
  const siteTitle = "The Tent";
  const fullTitle = title.includes(siteTitle)
    ? title
    : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && section && (
        <meta property="article:section" content={section} />
      )}
      {type === "article" &&
        tags &&
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
    </Helmet>
  );
}
