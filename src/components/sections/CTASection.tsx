import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-t from-secondary to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today to learn how we can help your business grow with professional WordPress hosting and expert consulting.
          </p>
          <Link to="/contact" className="block w-full sm:inline-block sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary-dark"
            >
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;