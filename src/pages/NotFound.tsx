import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import ParticleBackground from "@/components/ui/particle-background";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      <SEO 
        title="Page Not Found | WPVelocity.pro"
        description="The page you're looking for couldn't be found. Return to our homepage to explore our WordPress hosting and optimization services."
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <ParticleBackground />
      <div className="text-center relative">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-400 mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary-light underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;