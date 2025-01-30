import React from 'react';
import BlogPost from '@/components/sections/BlogPost';
import SEO from '@/components/SEO';

const Blog = () => {
  return (
    <>
      <SEO 
        title="The Ultimate Guide to Managed WordPress Hosting | WPVelocity"
        description="Learn everything about managed WordPress hosting, its benefits, and why it might be the perfect solution for your website needs."
      />
      <BlogPost />
    </>
  );
};

export default Blog;