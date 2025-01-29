import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingTier = ({
  name,
  price,
  description,
  features,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
}) => (
  <div className="bg-card p-6 rounded-lg shadow-sm">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold">${price}</span>
      <span className="text-muted-foreground">/month</span>
    </div>
    <p className="text-muted-foreground mb-6">{description}</p>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className="text-primary h-5 w-5" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/contact">
      <Button className="w-full">Get Started</Button>
    </Link>
  </div>
);

const Purchase = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect combination of hosting and consulting services for your needs.
              All plans include our premium WordPress hosting on WP Engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingTier
              name="Starter"
              price="99"
              description="Perfect for small businesses getting started with WordPress"
              features={[
                "Premium WordPress Hosting",
                "Daily Backups",
                "SSL Certificate",
                "CDN Integration",
                "Basic SEO Audit",
                "Monthly Performance Report"
              ]}
            />

            <PricingTier
              name="Professional"
              price="199"
              description="Ideal for growing businesses seeking optimization"
              features={[
                "Everything in Starter",
                "Advanced SEO Consulting",
                "Monthly UX Analysis",
                "Conversion Rate Optimization",
                "Priority Support",
                "Quarterly Strategy Sessions"
              ]}
            />

            <PricingTier
              name="Enterprise"
              price="399"
              description="Comprehensive solution for serious online businesses"
              features={[
                "Everything in Professional",
                "Custom Development Hours",
                "Weekly Performance Reviews",
                "Advanced Analytics Setup",
                "Dedicated Support Manager",
                "Custom Reporting Dashboard"
              ]}
            />
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-6">
              We can create a tailored package to meet your specific requirements.
            </p>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Purchase;