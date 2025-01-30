import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/sections/ServicesHero";
import CoreServices from "@/components/sections/CoreServices";
import EnterpriseTechStack from "@/components/sections/EnterpriseTechStack";
import CTASection from "@/components/sections/CTASection";
import SEO from "@/components/SEO";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="WordPress Hosting Services | WPVelocity.pro"
        description="Enterprise-grade WordPress hosting with expert consulting services for performance optimization, security, and business growth."
      />
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <CoreServices />
        <EnterpriseTechStack />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;