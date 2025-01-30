import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSummary from "@/components/sections/ServicesSummary";
import ParticleBackground from "@/components/ui/particle-background";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <ServicesSummary />
      </main>
      <Footer />
    </div>
  );
};

export default Services;