import { SectionHeader } from "@/components/ui/section-header";

const SimpleProcess = () => {
  const steps = [
    {
      title: "1. Requirements",
      description: "Share your hosting needs and requirements"
    },
    {
      title: "2. Consultation",
      description: "Get expert advice on the best solution"
    },
    {
      title: "3. Setup",
      description: "Quick and seamless deployment"
    },
    {
      title: "4. Go Live",
      description: "Your optimized WordPress site goes live"
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <SectionHeader>Our Simple Process</SectionHeader>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl glass-morphism hover:bg-white/10 transition-all duration-300"
            >
              {/* Numbered Circle */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white">
                {index + 1}
              </div>
              
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;