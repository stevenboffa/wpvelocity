import { SectionHeader } from "@/components/ui/section-header";
import { Award, ChartBar, Rocket } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-black to-black opacity-90" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-8 h-8 text-primary" />
            <span className="text-gray-300">20+ Years of Experience</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-primary-light bg-clip-text text-transparent">
            WordPress Hosting + Expert Consulting
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Get more than just hosting. Partner with a seasoned expert who will work directly with you to optimize your website's performance, SEO, and user experience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-300">
              <Rocket className="w-5 h-5 text-primary" />
              <span>Performance Optimization</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <ChartBar className="w-5 h-5 text-primary" />
              <span>SEO & UX Consulting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;