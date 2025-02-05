import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ServiceCard } from "@/components/sections/ServicesSummary";
import { RocketIcon, ChartBar, Settings } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Purchase = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  useEffect(() => {
    if (success) {
      toast({
        title: "Success!",
        description: "Your subscription has been processed successfully.",
        variant: "default",
      });
    } else if (canceled) {
      toast({
        title: "Canceled",
        description: "The payment was canceled. Please try again if you wish to subscribe.",
        variant: "destructive",
      });
    }
  }, [success, canceled]);

  const handleSubscribe = async (priceId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: { priceId }
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "There was a problem initiating the checkout process. Please try again.",
        variant: "destructive",
      });
    }
  };

  const services = [
    {
      icon: RocketIcon,
      title: "WPVelocity",
      price: "$59/month",
      features: [
        "Premium WordPress hosting on WP Engine",
        "1 hour monthly consulting",
        "SEO & UX analysis with tools",
        "Monthly insights report"
      ],
      ctaText: "Buy Now",
      ctaLink: "#",
      priceId: "price_1Qn4LSF36j5KRkTBVqyyietu"
    },
    {
      icon: ChartBar,
      title: "WPVelocity Pro",
      price: "$249/month",
      features: [
        "Everything in WPVelocity package",
        "5 hours monthly consulting",
        "Monthly 30-min strategy call",
        "Priority support"
      ],
      ctaText: "Buy Now",
      ctaLink: "#",
      priceId: "price_1Qn4MQF36j5KRkTB86YH2MqN"
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
        description="Choose your ideal WordPress hosting plan with included SEO & UX consulting. Start optimizing your website today with our expert-led solutions and support."
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
              <ServiceCard 
                key={index} 
                {...service} 
                onSubscribe={service.priceId ? () => handleSubscribe(service.priceId!) : undefined}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Purchase;
