import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const SEO = ({ title, description, path }: SEOProps) => {
  const baseUrl = 'https://wpvelocity.pro';
  const canonicalUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;