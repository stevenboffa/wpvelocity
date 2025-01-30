import { Server, Shield, Zap, Database, Cloud, Lock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const EnterpriseTechStack = () => {
  const technologies = [
    {
      icon: Server,
      title: "High-Performance Infrastructure",
      description: "Enterprise-grade servers optimized for WordPress"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Multi-layered security with real-time threat detection"
    },
    {
      icon: Zap,
      title: "Global CDN",
      description: "Lightning-fast content delivery worldwide"
    },
    {
      icon: Database,
      title: "Managed Database",
      description: "Automated backups and optimized queries"
    },
    {
      icon: Cloud,
      title: "Auto-Scaling",
      description: "Dynamic resource allocation for peak performance"
    },
    {
      icon: Lock,
      title: "SSL Certificates",
      description: "Free SSL certificates with automatic renewal"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-secondary">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container relative">
        <SectionHeader>Enterprise-Grade Technology Stack</SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-8 rounded-xl neo-blur hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-lg bg-primary/10 inline-block group-hover:bg-primary/20 transition-colors">
                <tech.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                {tech.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTechStack;