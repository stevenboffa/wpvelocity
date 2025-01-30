import { Server, ChartBar, RocketIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const ServicesSummary = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <SectionHeader>Everything You Need to Succeed Online</SectionHeader>
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`service-particle-${i}`}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: 'rgba(155, 135, 245, 0.2)',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Server,
              title: "Managed WordPress Hosting",
              description: "Lightning-fast, secure, and reliable hosting on WPEngine's infrastructure.",
            },
            {
              icon: ChartBar,
              title: "SEO & UX Consulting",
              description: "Expert guidance to improve your search rankings and user experience.",
            },
            {
              icon: RocketIcon,
              title: "CRO Optimization",
              description: "Convert more visitors into customers with data-driven optimization.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-secondary/10 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;