import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/sections/ServicesHero";
import CoreServices from "@/components/sections/CoreServices";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ConsultingBenefits from "@/components/sections/ConsultingBenefits";
import EnterpriseTechStack from "@/components/sections/EnterpriseTechStack";
import CTASection from "@/components/sections/CTASection";
import SEO from "@/components/SEO";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="WordPress Hosting & Expert Consulting | WPVelocity.pro"
        description="Transform your WordPress site with our premium hosting and expert consulting. Monthly optimization, dedicated support, and proven strategies for better performance."
      />
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <CoreServices />
        <ConsultingBenefits />
        <ComparisonTable />
        <EnterpriseTechStack />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;