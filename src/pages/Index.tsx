import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Star, ArrowRight, Database, Server, ShieldCheck, RocketIcon, ChartBar, Users } from "lucide-react";
import { usePixabayImages } from "@/hooks/use-pixabay-images";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { data: images, isLoading, error } = usePixabayImages();
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading images",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                WordPress Hosting with a Personal Touch
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Expert hosting combined with SEO, UX, and CRO consulting to help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link to="/purchase">
                  <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark">
                    Get Started
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="text-yellow-400" size={24} fill="currentColor" />
                    ))}
                  </div>
                  <span className="ml-4 text-gray-300">500+ happy customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="animate-float">
                {isLoading ? (
                  <div className="w-full max-w-lg mx-auto h-64 bg-gray-800 animate-pulse rounded-lg" />
                ) : images && images[0] ? (
                  <img
                    src={images[0].webformatURL}
                    alt="WordPress Hosting"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
                  />
                ) : (
                  <img
                    src="/placeholder.svg"
                    alt="WordPress Hosting"
                    className="w-full max-w-lg mx-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Everything You Need to Succeed Online
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Server,
                title: "Managed WordPress Hosting",
                description: "Lightning-fast, secure, and reliable hosting on WPEngine's infrastructure.",
              },
              {
                icon: ChartBar,
                title: "SEO & UX Consulting",
                description: "Expert guidance to improve your search rankings and user experience.",
              },
              {
                icon: RocketIcon,
                title: "CRO Optimization",
                description: "Convert more visitors into customers with data-driven optimization.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-secondary/10 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pain Points Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Common WordPress Hosting Challenges Solved
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Database,
                pain: "Slow Loading Times",
                solution: "Our optimized server infrastructure and advanced caching mechanisms ensure your WordPress site loads in under 2 seconds. We utilize WPEngine's premium infrastructure combined with our custom optimization techniques to deliver exceptional performance. Your visitors won't have to wait, leading to better engagement and higher conversion rates.",
              },
              {
                icon: ShieldCheck,
                pain: "Security Concerns",
                solution: "We implement enterprise-grade security measures including daily malware scans, real-time threat detection, and automated backups. Our partnership with industry-leading security providers ensures your site is protected against the latest threats. Plus, we handle all security updates and patches automatically.",
              },
              {
                icon: ChartBar,
                pain: "Poor SEO Performance",
                solution: "Our expert SEO consulting helps identify and fix technical issues that might be holding your site back. We conduct thorough audits of your site's structure, content, and performance metrics to optimize for search engines. Regular reports and recommendations keep you informed about your site's progress and areas for improvement.",
              },
              {
                icon: Users,
                pain: "Low Conversion Rates",
                solution: "Through data-driven CRO strategies, we help identify user experience bottlenecks and optimize your conversion funnel. We use advanced analytics and heat mapping tools to understand user behavior and make informed decisions. Our team continuously tests and implements improvements to increase your conversion rates.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6 p-8 rounded-xl bg-secondary/10 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <item.icon className="text-primary flex-shrink-0 w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.pain}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Performance Metrics Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Performance That Speaks for Itself
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "Uptime Guarantee", icon: Server },
              { metric: "<2s", label: "Load Time", icon: RocketIcon },
              { metric: "24/7", label: "Expert Support", icon: Users },
              { metric: "100%", label: "Client Satisfaction", icon: CheckCircle },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 glass-morphism rounded-xl">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2 text-gradient">{item.metric}</h3>
                <p className="text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Stack Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Enterprise-Grade Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-6 neo-blur rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-white">Infrastructure</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    WP Engine Premium Infrastructure
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    Global CDN Network
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    Advanced Caching Systems
                  </li>
                </ul>
              </div>
              <div className="p-6 neo-blur rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-white">Security</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    Daily Malware Scanning
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    DDoS Protection
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    SSL Certificates Included
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-6 neo-blur rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-white">Development</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    Staging Environments
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    Git Integration
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    Custom Development Support
                  </li>
                </ul>
              </div>
              <div className="p-6 neo-blur rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-white">Analytics</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    Performance Monitoring
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    User Behavior Tracking
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    Conversion Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Simple Process
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We start with a thorough discussion of your business goals, current challenges, and technical requirements to create a tailored hosting solution.",
              },
              {
                step: "2",
                title: "Site Analysis & Planning",
                description: "Our team conducts a comprehensive analysis of your WordPress site, identifying optimization opportunities and creating an action plan.",
              },
              {
                step: "3",
                title: "Implementation & Support",
                description: "We handle the entire migration process, implement optimizations, and provide ongoing support to ensure your site performs at its best.",
              },
            ].map((item, index) => (
              <div key={index} className="relative p-8 glass-morphism rounded-xl">
                <div className="absolute -top-6 left-8 w-12 h-12 flex items-center justify-center bg-primary rounded-full">
                  <span className="text-xl font-bold text-black">{item.step}</span>
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Social Proof */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Trusted by Growing Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Johnson",
                company: "Fashion Boutique",
                testimonial: "Steve's hosting and SEO services helped us double our online sales in just 6 months.",
              },
              {
                name: "Mike Thompson",
                company: "Local Restaurant",
                testimonial: "The best WordPress hosting service I've ever used. The personal touch makes all the difference.",
              },
              {
                name: "Emily Chen",
                company: "Digital Agency",
                testimonial: "Outstanding support and expertise. Our clients' sites have never performed better.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-secondary/10 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-semibold text-lg text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-t from-secondary to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to learn how we can help your business grow with professional WordPress hosting and expert consulting.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark">
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
