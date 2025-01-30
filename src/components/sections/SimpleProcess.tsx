import { ClipboardList, MessageSquare, Rocket, Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const SimpleProcess = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "1. Requirements",
      description: "Share your hosting needs and requirements"
    },
    {
      icon: MessageSquare,
      title: "2. Consultation",
      description: "Get expert advice on the best solution"
    },
    {
      icon: Rocket,
      title: "3. Setup",
      description: "Quick and seamless deployment"
    },
    {
      icon: Check,
      title: "4. Go Live",
      description: "Your optimized WordPress site goes live"
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <SectionHeader>Our Simple Process</SectionHeader>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center relative z-10">
                <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              
              {/* Curved Arrow Connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-6 w-24 transform translate-x-1/2">
                  <div className="relative w-full">
                    <ArrowRight 
                      className={`w-8 h-8 text-primary absolute 
                        ${index % 2 === 0 ? '-rotate-[15deg]' : 'rotate-[15deg]'} 
                        transform -translate-y-1/2 animate-float`}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;