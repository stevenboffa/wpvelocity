import { Server, RocketIcon, Users, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const PerformanceMetrics = () => {
  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <SectionHeader>Performance That Speaks for Itself</SectionHeader>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { metric: "99.9%", label: "Uptime Guarantee", icon: Server },
            { metric: "<2s", label: "Load Time", icon: RocketIcon },
            { metric: "24/7", label: "Expert Support", icon: Users },
            { metric: "100%", label: "Client Satisfaction", icon: CheckCircle },
          ].map((item, index) => (
            <div key={index} className="text-center p-8 glass-morphism rounded-xl">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2 text-gradient">{item.metric}</h3>
              <p className="text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;