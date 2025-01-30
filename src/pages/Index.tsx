import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Star, ArrowRight, Database, Server, ShieldCheck, RocketIcon, ChartBar, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-primary-light to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
                WordPress Hosting with a Personal Touch
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert hosting combined with SEO, UX, and CRO consulting to help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link to="/purchase">
                  <Button size="lg" className="text-lg px-8 py-6">
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
                  <span className="ml-4 text-gray-600">500+ happy customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="animate-float">
                <img
                  src="/placeholder.svg"
                  alt="WordPress Hosting"
                  className="w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
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
                className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-secondary-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Common WordPress Hosting Challenges Solved
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Database,
                pain: "Slow Loading Times",
                solution: "Lightning-fast servers and optimized configurations",
              },
              {
                icon: ShieldCheck,
                pain: "Security Concerns",
                solution: "Advanced security measures and regular backups",
              },
              {
                icon: ChartBar,
                pain: "Poor SEO Performance",
                solution: "Expert SEO consulting and optimization",
              },
              {
                icon: Users,
                pain: "Low Conversion Rates",
                solution: "Data-driven CRO strategies and improvements",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6 p-8 rounded-xl bg-white shadow-md">
                <item.icon className="text-primary flex-shrink-0 w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">{item.pain}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
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
                className="p-8 rounded-xl bg-white shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact us today to learn how we can help your business grow with professional WordPress hosting and expert consulting.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
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