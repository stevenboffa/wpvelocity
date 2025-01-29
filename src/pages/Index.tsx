import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-light to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary">
                WordPress Hosting with a Personal Touch
              </h1>
              <p className="text-xl text-gray-600">
                Expert hosting combined with SEO, UX, and CRO consulting to help your business grow.
              </p>
              <div className="flex items-center space-x-4">
                <Link to="/purchase">
                  <Button size="lg" className="text-lg">
                    Get Started
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
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
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Succeed Online
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Managed WordPress Hosting",
                description: "Lightning-fast, secure, and reliable hosting on WPEngine's infrastructure.",
              },
              {
                title: "SEO & UX Consulting",
                description: "Expert guidance to improve your search rankings and user experience.",
              },
              {
                title: "CRO Optimization",
                description: "Convert more visitors into customers with data-driven optimization.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common WordPress Hosting Challenges Solved
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                pain: "Slow Loading Times",
                solution: "Lightning-fast servers and optimized configurations",
              },
              {
                pain: "Security Concerns",
                solution: "Advanced security measures and regular backups",
              },
              {
                pain: "Poor SEO Performance",
                solution: "Expert SEO consulting and optimization",
              },
              {
                pain: "Low Conversion Rates",
                solution: "Data-driven CRO strategies and improvements",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">{item.pain}</h3>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Growing Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                className="p-6 rounded-lg bg-white shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Contact us today to learn how we can help your business grow with professional WordPress hosting and expert consulting.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg">
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