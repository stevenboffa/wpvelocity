import { Brain, TrendingUp, LineChart, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const ConsultingBenefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "20+ Years of Expertise",
      description: "Benefit from decades of experience in WordPress optimization, SEO strategies, and UX improvements."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Get personalized recommendations to improve your site's speed, SEO rankings, and user experience."
    },
    {
      icon: LineChart,
      title: "Growth Strategy",
      description: "Regular consulting sessions to review metrics and plan strategic improvements for your website."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Direct access to expert consultation for technical issues and growth strategies."
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container px-4">
        <SectionHeader>Expert Consulting Included</SectionHeader>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Every plan includes direct access to expert consulting to help grow your online presence. 
          Work directly with a seasoned professional who understands your business goals.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg neo-blur hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-6 p-4 rounded-lg bg-primary/10 inline-block">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingBenefits;