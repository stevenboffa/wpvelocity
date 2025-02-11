
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
  const currentUrl = canonical || window.location.href;
  // Ensure the image URL is absolute
  const siteUrl = window.location.origin;
  const ogImage = `${siteUrl}/lovable-uploads/77023825-139d-4c3d-859a-102892b45a1c.png`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags for Facebook, WhatsApp, etc. */}
      <meta property="og:site_name" content="WPVelocity" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wpvelocity" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* WhatsApp specific (though it uses Open Graph) */}
      <meta property="og:image:alt" content={description} />
    </Helmet>
  );
};

export default SEO;
