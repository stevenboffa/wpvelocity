import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSummary from "@/components/sections/ServicesSummary";
import CTASection from "@/components/sections/CTASection";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
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