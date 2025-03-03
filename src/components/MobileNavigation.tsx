
import { Home, Info, Settings, MessageSquare, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Info, label: "About", path: "/about" },
    { icon: Settings, label: "Services", path: "/services" },
    { icon: MessageSquare, label: "Contact", path: "/contact" },
    { icon: Calendar, label: "Book", path: "/book" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 md:hidden z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              isActive(path) 
                ? "text-primary" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavigation;
