import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Purchase = () => {
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gradient">Purchase Your Plan</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Select the best plan that suits your needs and start your journey with WPVelocity.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-morphism p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
                <p className="text-lg text-muted-foreground mb-4">Perfect for small websites and blogs.</p>
                <p className="text-3xl font-bold mb-4">$10/month</p>
                <Link to="/checkout/basic">
                  <Button className="w-full">Choose Basic</Button>
                </Link>
              </div>
              <div className="glass-morphism p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
                <p className="text-lg text-muted-foreground mb-4">Ideal for growing businesses with more traffic.</p>
                <p className="text-3xl font-bold mb-4">$25/month</p>
                <Link to="/checkout/pro">
                  <Button className="w-full">Choose Pro</Button>
                </Link>
              </div>
              <div className="glass-morphism p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Business Plan</h2>
                <p className="text-lg text-muted-foreground mb-4">Best for larger businesses needing advanced features.</p>
                <p className="text-3xl font-bold mb-4">$50/month</p>
                <Link to="/checkout/business">
                  <Button className="w-full">Choose Business</Button>
                </Link>
              </div>
              <div className="glass-morphism p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Enterprise Plan</h2>
                <p className="text-lg text-muted-foreground mb-4">Custom solutions for enterprises with specific needs.</p>
                <p className="text-3xl font-bold mb-4">Contact Us</p>
                <Link to="/contact">
                  <Button className="w-full">Inquire Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Purchase;
