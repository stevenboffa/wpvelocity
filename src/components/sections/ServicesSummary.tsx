import { RocketIcon, ChartBar, Settings } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  price, 
  features, 
  highlights,
  ctaText, 
  ctaLink,
  onSubscribe,
  recommended
}: {
  icon: any;
  title: string;
  price: string;
  features: string[];
  highlights?: string[];
  ctaText: string;
  ctaLink: string;
  onSubscribe?: () => void;
  recommended?: boolean;
}) => (
  <div className={`p-8 rounded-xl neo-blur hover:border-primary/50 transition-all duration-300 relative ${recommended ? 'border-2 border-primary' : ''}`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-semibold">
        Recommended
      </div>
    )}
    <Icon className="w-12 h-12 text-primary mb-6" />
    <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
    <div className="text-3xl font-bold text-primary mb-6">{price}</div>
    {highlights && (
      <div className="mb-6 space-y-2">
        {highlights.map((highlight, index) => (
          <div key={index} className="text-primary-light font-medium">{highlight}</div>
        ))}
      </div>
    )}
    <ul className="space-y-4 mb-8 text-gray-300">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
          {feature}
        </li>
      ))}
    </ul>
    {onSubscribe ? (
      <Button className="w-full" size="lg" onClick={onSubscribe}>
        {ctaText}
      </Button>
    ) : (
      <Link to={ctaLink}>
        <Button className="w-full" size="lg">{ctaText}</Button>
      </Link>
    )}
  </div>
);

const ServicesSummary = () => {
  const services = [
    {
      icon: RocketIcon,
      title: "WPVelocity",
      price: "$59/month",
      highlights: [
        "Perfect for Small to Medium Businesses",
        "1-on-1 Expert Guidance"
      ],
      features: [
        "Premium WordPress hosting on WP Engine",
        "1 hour monthly consulting with SEO expert",
        "Website performance optimization",
        "Security monitoring & updates",
        "Monthly SEO & UX analysis report",
        "24/7 infrastructure monitoring"
      ],
      ctaText: "Get Started",
      ctaLink: "/contact"
    },
    {
      icon: ChartBar,
      title: "WPVelocity Pro",
      price: "$249/month",
      recommended: true,
      highlights: [
        "Ideal for Growing Businesses",
        "Comprehensive Growth Strategy"
      ],
      features: [
        "Everything in WPVelocity, plus:",
        "5 hours monthly consulting",
        "Advanced SEO strategy & implementation",
        "Conversion rate optimization",
        "Monthly strategy calls",
        "Priority support & custom development",
        "Competitor analysis & tracking"
      ],
      ctaText: "Get Started",
      ctaLink: "/contact"
    },
    {
      icon: Settings,
      title: "Custom Enterprise",
      price: "Custom",
      highlights: [
        "For Large Organizations",
        "Tailored Solutions"
      ],
      features: [
        "Custom WordPress infrastructure",
        "Dedicated support team",
        "Custom consulting hours",
        "Enterprise security features",
        "Multi-site management",
        "Custom development & integrations"
      ],
      ctaText: "Contact Us",
      ctaLink: "/contact"
    }
  ];

  return (
    <>
      {/* Main Services */}
      <section className="py-24 relative">
        <SectionHeader>Expert-Led WordPress Solutions</SectionHeader>
        <p className="text-gray-400 max-w-3xl mx-auto text-center mb-16">
          Get more than just hosting. Partner with a seasoned expert with 20+ years of experience in SEO and UX optimization. 
          I'll work directly with you to improve your website's performance and grow your online presence.
        </p>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Expertise */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Personal Consulting Included</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every plan includes direct access to expert consulting to help grow your online presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SEO Strategy",
                description: "Custom SEO strategy based on your specific business goals and market analysis.",
              },
              {
                title: "UX Optimization",
                description: "Improve user experience and conversion rates through data-driven analysis.",
              },
              {
                title: "Performance Tuning",
                description: "Expert optimization of your WordPress site for maximum speed and efficiency.",
              },
              {
                title: "Growth Planning",
                description: "Strategic guidance to scale your online presence and achieve business goals.",
              },
              {
                title: "Technical Support",
                description: "Direct access to expert technical support for any WordPress-related issues.",
              },
              {
                title: "Regular Updates",
                description: "Stay informed with detailed reports and actionable recommendations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSummary;