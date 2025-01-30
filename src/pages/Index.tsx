import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Star, ArrowRight, Server, ShieldCheck, RocketIcon, ChartBar, Database, Users } from "lucide-react";
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

  const SectionHeader = ({ children, variant = "default", className }: { children: React.ReactNode; variant?: "default" | "gradient" | "dashed" | "thick"; className?: string }) => {
    const underlineStyles = {
      default: "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-0.5 after:bg-primary",
      gradient: "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/3 after:h-1 after:bg-gradient-to-r after:from-primary/30 after:via-primary after:to-primary/30",
      dashed: "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/3 after:h-0.5 after:bg-primary after:border-dashed after:[background-size:8px_2px] after:[background-image:linear-gradient(to_right,#9b87f5_50%,transparent_50%)]",
      thick: "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-1.5 after:bg-primary after:rounded-full",
    };

    return (
      <h2 className={`text-4xl font-bold text-center mb-16 text-white relative pb-6 ${underlineStyles[variant]} ${className}`}>
        {children}
      </h2>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-48 pb-32 min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Enhanced Animated Background with more particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-black to-black opacity-90" />
        
        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: i % 2 === 0 ? 'rgba(155, 135, 245, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 6 + 2}s`,
                filter: `blur(${Math.random() * 2}px)`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              {/* Star Rating with enhanced styling */}
              <div className="flex items-center glass-morphism p-4 rounded-full w-fit">
                <div className="flex space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star 
                      key={i} 
                      className="text-yellow-400 transform hover:scale-110 transition-transform" 
                      size={24} 
                      fill="currentColor" 
                    />
                  ))}
                </div>
                <span className="ml-4 text-gray-300">500+ happy customers</span>
              </div>

              {/* Enhanced Heading with Gradient */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-primary to-primary-light bg-clip-text text-transparent animate-background-shine bg-[length:200%_auto]">
                WordPress Hosting with a Personal Touch
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Expert hosting combined with SEO, UX, and CRO consulting to help your business grow.
              </p>

              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link to="/purchase">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </Link>
                
                {/* Trust Indicators */}
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    <span>30-day guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-2 text-primary" />
                    <span>Secure checkout</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Image Container with floating features */}
            <div className="relative group">
              {/* Animation 1: Gradient glow effect - subtle */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg filter blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse opacity-60" />
              
              {/* Animation 2: Float animation */}
              <div className="animate-float relative">
                {isLoading ? (
                  <div className="w-full max-w-lg mx-auto h-64 bg-gray-800 animate-pulse rounded-lg" />
                ) : (
                  <div className="transition-all duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                      alt="Professional consultant"
                      className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
                    />
                    
                    {/* Top Left Feature Card */}
                    <div className="absolute -top-8 -left-8 glass-morphism p-6 rounded-lg animate-float shadow-lg border border-primary/20 min-w-[200px]"
                         style={{ animationDelay: "0s", animationDuration: "4s" }}>
                      <div className="flex items-center space-x-4">
                        <RocketIcon className="text-primary animate-pulse w-8 h-8" />
                        <span className="text-lg font-medium">Instant Deploy</span>
                      </div>
                    </div>
                    
                    {/* Top Right Feature Card */}
                    <div className="absolute -top-8 -right-8 glass-morphism p-6 rounded-lg animate-float shadow-lg border border-primary/20 min-w-[200px]"
                         style={{ animationDelay: "1s", animationDuration: "4.5s" }}>
                      <div className="flex items-center space-x-4">
                        <ShieldCheck className="text-primary animate-pulse w-8 h-8" />
                        <span className="text-lg font-medium">Secure</span>
                      </div>
                    </div>
                    
                    {/* Bottom Left Feature Card */}
                    <div className="absolute -bottom-8 -left-8 glass-morphism p-6 rounded-lg animate-float shadow-lg border border-primary/20 min-w-[200px]"
                         style={{ animationDelay: "1.5s", animationDuration: "4.2s" }}>
                      <div className="flex items-center space-x-4">
                        <Server className="text-primary animate-pulse w-8 h-8" />
                        <span className="text-lg font-medium">Optimized</span>
                      </div>
                    </div>

                    {/* Bottom Right Feature Card */}
                    <div className="absolute -bottom-8 -right-8 glass-morphism p-6 rounded-lg animate-float shadow-lg border border-primary/20 min-w-[200px]"
                         style={{ animationDelay: "2s", animationDuration: "4.8s" }}>
                      <div className="flex items-center space-x-4">
                        <ChartBar className="text-primary animate-pulse w-8 h-8" />
                        <span className="text-lg font-medium">Analytics</span>
                      </div>
                    </div>

                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-background-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-transparent to-black" />
        </div>
      </section>

      {/* Enhanced Services Summary with particles */}
      <section className="py-24 bg-black relative overflow-hidden">
        <SectionHeader variant="gradient">Everything You Need to Succeed Online</SectionHeader>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`service-particle-${i}`}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: 'rgba(155, 135, 245, 0.2)',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 4 + 3}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6">
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

      {/* Enhanced Pain Points Section with particles */}
      <section className="py-24 bg-black/50 relative overflow-hidden">
        <SectionHeader variant="thick">Common WordPress Hosting Challenges Solved</SectionHeader>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`pain-particle-${i}`}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 4 + 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Database,
                pain: "Slow Loading Times",
                solution: "Our optimized server infrastructure ensures your site loads in under 2 seconds.",
              },
              {
                icon: ShieldCheck,
                pain: "Security Concerns",
                solution: "We implement daily malware scans and real-time threat detection.",
              },
              {
                icon: ChartBar,
                pain: "Poor SEO Performance",
                solution: "Our expert SEO consulting helps identify and fix technical issues.",
              },
              {
                icon: Users,
                pain: "Low Conversion Rates",
                solution: "We help identify user experience bottlenecks to increase conversions.",
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
          <SectionHeader>Performance That Speaks for Itself</SectionHeader>
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
          <SectionHeader>Enterprise-Grade Technology Stack</SectionHeader>
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
          <SectionHeader>Our Simple Process</SectionHeader>
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
          <SectionHeader>Trusted by Growing Businesses</SectionHeader>
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
