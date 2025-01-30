import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, Briefcase, HelpCircle, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  // Enable/disable body scroll when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Add haptic feedback for iOS devices
  const handleMenuItemClick = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(5); // Subtle vibration
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed w-full bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gradient">
              WPVelocity
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/purchase">
                <Button className="bg-primary hover:bg-primary-dark text-black">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Enhanced Full Screen Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 transform transition-all duration-500 ease-spring md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Gradient Background with Blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary/10 backdrop-blur-xl" />

        {/* Content Container */}
        <div className="relative h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
            <Link 
              to="/" 
              className="text-2xl font-bold text-gradient"
              onClick={() => setIsMenuOpen(false)}
            >
              WPVelocity
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-8 px-6">
            <div className="space-y-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="group">
                    <Link
                      to={item.href}
                      className="flex items-center space-x-4 text-xl font-medium text-white group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-2"
                      onClick={handleMenuItemClick}
                    >
                      <Icon className="w-6 h-6" />
                      <span>{item.name}</span>
                      <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/purchase"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <Button className="w-full bg-primary hover:bg-primary-dark text-black text-lg px-8 py-6 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;