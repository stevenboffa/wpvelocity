import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RocketIcon, ChartBar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const ServiceCard = ({ icon: Icon, title, price, features, ctaText, ctaLink }: {
  icon: any;
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}) => (
  <div className="flex flex-col h-full p-8 rounded-xl neo-blur hover:border-primary/50 transition-all duration-300">
    <div className="flex-grow">
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
    </div>
    <Link to={ctaLink} className="mt-auto">
      <Button className="w-full" size="lg">{ctaText}</Button>
    </Link>
  </div>
);

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
        "Consulting hours",
        "Dedicated support team",
        "Bespoke development"
      ],
      ctaText: "Get Started",
      ctaLink: "/contact"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <SEO 
          title="Buy WPVelocity Now | WPVelocity.pro"
          description="Choose your perfect WordPress hosting plan. Get started with our premium managed hosting services including SEO optimization and expert consulting."
          path="/purchase"
        />
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect combination of hosting and consulting services for your needs.
              All plans include our premium WordPress hosting on WP Engine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
