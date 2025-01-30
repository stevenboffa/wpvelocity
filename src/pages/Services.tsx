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
        description="Explore our comprehensive WordPress hosting services including SEO optimization, UX design, and conversion rate optimization to boost your online presence."
        path="/services"
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
