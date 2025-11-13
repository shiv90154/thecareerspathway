export default function SeoHead({
  title,
  description,
  canonical,
  keywords,
}: {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
}) {
  return (
    <>
      {/* Title */}
      <title>{title}</title>

      {/* Meta Description */}
      <meta name="description" content={description} />

      {/* Meta Keywords (optional) */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="The Career Pathway" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
