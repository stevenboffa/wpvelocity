
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
  // Only update metadata if props are provided
  if (!title && !description && !canonical) {
    return null;
  }

  const currentUrl = canonical || window.location.href;
  const siteUrl = window.location.origin;
  const ogImage = `${siteUrl}/lovable-uploads/77023825-139d-4c3d-859a-102892b45a1c.png`;
  
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={currentUrl} />}
      
      {/* Only update OG tags if title or description are provided */}
      {(title || description) && (
        <>
          {title && <meta property="og:title" content={title} />}
          {description && <meta property="og:description" content={description} />}
          <meta property="og:url" content={currentUrl} />
          
          {/* Twitter Card Meta Tags */}
          {title && <meta name="twitter:title" content={title} />}
          {description && <meta name="twitter:description" content={description} />}
        </>
      )}
    </Helmet>
  );
};

export default SEO;
