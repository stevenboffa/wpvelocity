import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Star, ArrowRight, Server, ShieldCheck, RocketIcon, ChartBar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-48 pb-16 md:pb-32 min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-black to-black opacity-90" />
      
      {/* Animated Particles */}
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
            {/* Star Rating */}
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

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-primary to-primary-light bg-clip-text text-transparent animate-background-shine bg-[length:200%_auto]">
              WordPress Hosting with a Personal Touch
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Expert hosting combined with SEO, UX, and CRO consulting to help your business grow.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
              <Link to="/purchase" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary-dark relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
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

          {/* Image Container with floating features - Hidden on mobile */}
          <div className="relative group hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg filter blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse opacity-60" />
            
            {/* Float animation */}
            <div className="animate-float relative">
              <div className="transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                  alt="Professional consultant"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
                />
                
                {/* Top Left Feature Card */}
                <div className="absolute -top-8 -left-8 glass-morphism p-6 rounded-lg animate-float shadow-lg border border-primary/20 min-w-[180px]"
                     style={{ animationDelay: "0s", animationDuration: "4s" }}>
                  <div className="flex items-center space-x-3">
                    <RocketIcon className="text-primary animate-pulse w-8 h-8" />
                    <span className="text-lg font-medium">Instant Deploy</span>
                  </div>
                </div>
                
                {/* Top Right Feature Card */}
                <div className="absolute -top-8 -right-8 glass-morphism p-6 rounded-lg animate-float shadow-lg border border-primary/20 min-w-[180px]"
                     style={{ animationDelay: "1s", animationDuration: "4.5s" }}>
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="text-primary animate-pulse w-8 h-8" />
                    <span className="text-lg font-medium">Secure</span>
                  </div>
                </div>
                
                {/* Bottom Left Feature Card */}
                <div className="absolute -bottom-8 -left-8 glass-morphism p-6 rounded-lg animate-float shadow-lg border border-primary/20 min-w-[180px]"
                     style={{ animationDelay: "1.5s", animationDuration: "4.2s" }}>
                  <div className="flex items-center space-x-3">
                    <Server className="text-primary animate-pulse w-8 h-8" />
                    <span className="text-lg font-medium">Optimized</span>
                  </div>
                </div>

                {/* Bottom Right Feature Card */}
                <div className="absolute -bottom-8 -right-8 glass-morphism p-6 rounded-lg animate-float shadow-lg border border-primary/20 min-w-[180px]"
                     style={{ animationDelay: "2s", animationDuration: "4.8s" }}>
                  <div className="flex items-center space-x-3">
                    <ChartBar className="text-primary animate-pulse w-8 h-8" />
                    <span className="text-lg font-medium">Analytics</span>
                  </div>
                </div>

                {/* Shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-background-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  );
};

export default HeroSection;
