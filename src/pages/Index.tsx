import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSummary from "@/components/sections/ServicesSummary";
import PainPoints from "@/components/sections/PainPoints";
import PerformanceMetrics from "@/components/sections/PerformanceMetrics";
import EnterpriseTechStack from "@/components/sections/EnterpriseTechStack";
import SimpleProcess from "@/components/sections/SimpleProcess";
import { usePixabayImages } from "@/hooks/use-pixabay-images";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { data: images, isLoading, error } = usePixabayImages();
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading images",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <HeroSection />
      <PainPoints />
      <PerformanceMetrics />
      <EnterpriseTechStack />
      <SimpleProcess />
      <ServicesSummary />
      
      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-t from-secondary to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to learn how we can help your business grow with professional WordPress hosting and expert consulting.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark">
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;