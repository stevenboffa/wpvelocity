import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSummary from "@/components/sections/ServicesSummary";
import CTASection from "@/components/sections/CTASection";
import SEO from "@/components/SEO";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Services Offered | WPVelocity.pro"
        description="Discover our comprehensive WordPress hosting services including managed hosting, SEO optimization, UX improvements, and conversion rate optimization."
      />
      <Header />
      <main className="flex-grow">
        <ServicesSummary />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
