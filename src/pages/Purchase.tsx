import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ServiceCard } from "@/components/sections/ServicesSummary";
import { RocketIcon, ChartBar, Settings } from "lucide-react";

const Purchase = () => {
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
      ctaText: "Get Started",
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
      ctaText: "Get Started",
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
      ctaText: "Contact Us",
      ctaLink: "/contact"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Buy WPVelocity Now | WPVelocity.pro"
        description="Choose your WordPress hosting plan and start optimizing your website today. Get expert support, enhanced security, and performance improvements."
      />
      <Header />
      <main className="flex-grow pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-gradient">Ready to make a purchase?</h1>
            <p className="text-xl text-muted-foreground">
              Select the plan that suits your needs and start your journey today with WPVelocity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Purchase;