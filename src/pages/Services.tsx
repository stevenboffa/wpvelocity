import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">WordPress Hosting</h3>
              <p className="text-muted-foreground mb-6">
                Premium WordPress hosting on WP Engine's infrastructure, ensuring optimal performance, security, and reliability for your website.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li>• Daily backups</li>
                <li>• SSL certificates</li>
                <li>• CDN integration</li>
                <li>• Staging environments</li>
                <li>• 24/7 monitoring</li>
              </ul>
              <Link to="/purchase">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">SEO Consulting</h3>
              <p className="text-muted-foreground mb-6">
                Expert SEO guidance to improve your website's visibility and ranking in search engine results.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li>• Keyword research</li>
                <li>• On-page optimization</li>
                <li>• Technical SEO audits</li>
                <li>• Content strategy</li>
                <li>• Performance tracking</li>
              </ul>
              <Link to="/purchase">
                <Button className="w-full">Learn More</Button>
              </Link>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">UX/CRO Services</h3>
              <p className="text-muted-foreground mb-6">
                Optimize your website's user experience and conversion rates through data-driven improvements.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li>• User journey mapping</li>
                <li>• A/B testing</li>
                <li>• Analytics setup</li>
                <li>• Conversion optimization</li>
                <li>• UX recommendations</li>
              </ul>
              <Link to="/purchase">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Custom Solutions</h2>
            <p className="text-muted-foreground mb-8">
              Need a tailored solution? We offer custom packages combining our hosting, SEO, and UX/CRO services to meet your specific needs.
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

export default Services;