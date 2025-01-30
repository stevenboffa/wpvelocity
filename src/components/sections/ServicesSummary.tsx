import { RocketIcon, ChartBar, Settings } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSummary = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <SectionHeader>Supercharge Your Online Presence</SectionHeader>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
          Expert WordPress hosting combined with personalized SEO, UX, and CRO consulting
          to help your business grow.
        </p>

        {/* Main Services */}
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {/* Velocity Package */}
            <div className="p-8 rounded-xl neo-blur hover:border-primary/50 transition-all duration-300">
              <RocketIcon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Velocity</h3>
              <div className="text-3xl font-bold text-primary mb-6">$59/month</div>
              <ul className="space-y-4 mb-8 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  Premium WordPress hosting on WP Engine
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  1 hour monthly consulting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  SEO & UX analysis with tools
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  Monthly insights report
                </li>
              </ul>
              <Link to="/purchase">
                <Button className="w-full" size="lg">Get Started</Button>
              </Link>
            </div>

            {/* Velocity Pro Package */}
            <div className="p-8 rounded-xl neo-blur hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <ChartBar className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Velocity Pro</h3>
              <div className="text-3xl font-bold text-primary mb-6">$249/month</div>
              <ul className="space-y-4 mb-8 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  Everything in Velocity package
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  5 hours monthly consulting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  Monthly 30-min strategy call
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  Priority support
                </li>
              </ul>
              <Link to="/purchase">
                <Button className="w-full" size="lg">Get Started</Button>
              </Link>
            </div>
          </div>

          {/* Custom Services Section */}
          <div className="max-w-3xl mx-auto text-center p-8 rounded-xl neo-blur">
            <Settings className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-white">Custom SEO/UX/CRO Services</h3>
            <p className="text-gray-300 mb-8">
              Need a tailored solution? Let's create a custom package that fits your specific needs,
              whether it's advanced SEO strategies, comprehensive UX improvements, or 
              conversion rate optimization.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="hover:bg-primary/10">
                Get a Quote
              </Button>
            </Link>
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
    </div>
  );
};

export default ServicesSummary;