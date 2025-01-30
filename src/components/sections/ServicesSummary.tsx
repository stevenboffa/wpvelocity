import { RocketIcon, ChartBar, Settings } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, price, features, ctaText, ctaLink }: {
  icon: any;
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}) => (
  <div className="p-8 rounded-xl neo-blur hover:border-primary/50 transition-all duration-300">
    <Icon className="w-12 h-12 text-primary mb-6" />
    <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
    <div className="text-3xl font-bold text-primary mb-6">{price}</div>
    <ul className="space-y-4 mb-8 text-gray-300">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
          {feature}
        </li>
      ))}
    </ul>
    <Link to={ctaLink}>
      <Button className="w-full" size="lg">{ctaText}</Button>
    </Link>
  </div>
);

const ServicesSummary = () => {
  const services = [
    {
      icon: RocketIcon,
      title: "Velocity",
      price: "$59/month",
      features: [
        "Premium WordPress hosting on WP Engine",
        "1 hour monthly consulting",
        "SEO & UX analysis with tools",
        "Monthly insights report"
      ],
      ctaText: "Get a Quote",
      ctaLink: "/contact"
    },
    {
      icon: ChartBar,
      title: "Velocity Pro",
      price: "$249/month",
      features: [
        "Everything in Velocity package",
        "5 hours monthly consulting",
        "Monthly 30-min strategy call",
        "Priority support"
      ],
      ctaText: "Get a Quote",
      ctaLink: "/contact"
    },
    {
      icon: Settings,
      title: "Custom Services",
      price: "Custom",
      features: [
        "Tailored WordPress solutions",
        "Custom consulting hours",
        "Dedicated support team",
        "Bespoke development"
      ],
      ctaText: "Get a Quote",
      ctaLink: "/contact"
    }
  ];

  return (
    <>
      {/* Main Services */}
      <section className="py-24 relative">
        <SectionHeader>Supercharge Your Online Presence</SectionHeader>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
          Expert WordPress hosting combined with personalized SEO, UX, and CRO consulting
          to help your business grow.
        </p>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Why Choose Our Services?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get the perfect blend of technical expertise and strategic guidance to grow your online presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Analysis",
                description: "In-depth analysis using professional SEO and UX tools to uncover opportunities.",
              },
              {
                title: "Reliable Hosting",
                description: "Premium WordPress hosting on WP Engine's enterprise infrastructure.",
              },
              {
                title: "Strategic Guidance",
                description: "Personalized recommendations based on your specific business goals.",
              },
              {
                title: "Regular Reports",
                description: "Monthly insights and actionable recommendations for improvement.",
              },
              {
                title: "1:1 Support",
                description: "Direct access to expertise through strategy sessions (Pro plan).",
              },
              {
                title: "Continuous Optimization",
                description: "Ongoing monitoring and optimization of your website's performance.",
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