import { SectionHeader } from "@/components/ui/section-header";

const SimpleProcess = () => {
  const steps = [
    {
      title: "Consultation",
      description: "Let's discuss your goals and see if we are a good fit"
    },
    {
      title: "Requirements",
      description: "Provide tech requirements that enables us to get started"
    },
    {
      title: "Setup",
      description: "We will setup your hosting and setup your SEO/UX plan"
    },
    {
      title: "Optimize",
      description: "Every month we will optimize and strengthen focus areas of your business"
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