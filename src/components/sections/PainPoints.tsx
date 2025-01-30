import { Database, ShieldCheck, ChartBar, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const PainPoints = () => {
  return (
    <section className="py-24 bg-black/50 relative overflow-hidden">
      <SectionHeader>Common WordPress Hosting Challenges Solved</SectionHeader>
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`pain-particle-${i}`}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: Database,
              pain: "Slow Loading Times",
              solution: "Our optimized server infrastructure ensures your site loads in under 2 seconds.",
            },
            {
              icon: ShieldCheck,
              pain: "Security Concerns",
              solution: "We implement daily malware scans and real-time threat detection.",
            },
            {
              icon: ChartBar,
              pain: "Poor SEO Performance",
              solution: "Our expert SEO consulting helps identify and fix technical issues.",
            },
            {
              icon: Users,
              pain: "Low Conversion Rates",
              solution: "We help identify user experience bottlenecks to increase conversions.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-6 p-8 rounded-xl bg-secondary/10 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <item.icon className="text-primary flex-shrink-0 w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.pain}</h3>
                <p className="text-gray-300 leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;