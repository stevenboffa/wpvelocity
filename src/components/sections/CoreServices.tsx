import { Server, Rocket, Shield, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const CoreServices = () => {
  const services = [
    {
      icon: Server,
      title: "Managed WordPress Hosting",
      description: "Enterprise-grade infrastructure with automated backups, updates, and 24/7 monitoring to keep your site running smoothly.",
      features: [
        "Automated daily backups",
        "Real-time security monitoring",
        "Managed WordPress updates",
        "24/7 infrastructure monitoring"
      ]
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Advanced caching, CDN integration, and code optimization to ensure your site loads in under 2 seconds globally.",
      features: [
        "Global CDN distribution",
        "Advanced caching setup",
        "Image optimization",
        "Database performance tuning"
      ]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Proactive security measures and regular maintenance to protect your site from threats and keep it running optimally.",
      features: [
        "WAF protection",
        "Malware scanning",
        "SSL certificate management",
        "Regular security audits"
      ]
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Strategic guidance on SEO, UX improvements, and conversion optimization to help your business grow.",
      features: [
        "Monthly strategy calls",
        "Performance reports",
        "SEO recommendations",
        "UX improvement advice"
      ]
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container">
        <SectionHeader>Our Core Services</SectionHeader>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl neo-blur hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-lg bg-primary/10">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;