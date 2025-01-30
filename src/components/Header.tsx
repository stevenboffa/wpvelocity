import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

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

      {/* Full Screen Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
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
          <div className="flex-1 flex flex-col justify-center px-6">
            <div className="space-y-8">
              {navigation.map((item) => (
                <div key={item.name} className="text-center">
                  <Link
                    to={item.href}
                    className="text-2xl font-medium text-white hover:text-primary transition-all duration-300 hover:scale-110 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="text-center pt-8">
                <Link
                  to="/purchase"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block"
                >
                  <Button className="bg-primary hover:bg-primary-dark text-black text-lg px-8 py-6">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;