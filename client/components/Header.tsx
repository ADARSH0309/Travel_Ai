import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, Calendar } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-ocean-500 p-2 rounded-xl group-hover:bg-ocean-600 transition-colors">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Wanderlust</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/destinations"
              className="text-foreground hover:text-ocean-600 transition-colors font-medium cursor-pointer"
            >
              Destinations
            </Link>
            <Link
              to="/travel-buddy"
              className="text-foreground hover:text-ocean-600 transition-colors font-medium cursor-pointer"
            >
              Travel Buddy
            </Link>
            <Link
              to="/galleries"
              className="text-foreground hover:text-ocean-600 transition-colors font-medium cursor-pointer"
            >
              Galleries
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-ocean-600 transition-colors font-medium cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-ocean-600 transition-colors font-medium cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/daffy">
              <Button
                size="sm"
                className="bg-gradient-to-r from-sunset-500 to-orange-500 hover:from-sunset-600 hover:to-orange-600 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-sunset-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Talk to Daffy
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/destinations"
                onClick={closeMenu}
                className="text-foreground hover:text-ocean-600 transition-colors font-medium text-left"
              >
                Destinations
              </Link>
              <Link
                to="/travel-buddy"
                onClick={closeMenu}
                className="text-foreground hover:text-ocean-600 transition-colors font-medium text-left"
              >
                Travel Buddy
              </Link>
              <Link
                to="/galleries"
                onClick={closeMenu}
                className="text-foreground hover:text-ocean-600 transition-colors font-medium text-left"
              >
                Galleries
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-ocean-600 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-ocean-600 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <div className="pt-4">
                <Link to="/daffy" onClick={closeMenu}>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-sunset-500 to-orange-500 hover:from-sunset-600 hover:to-orange-600 text-white font-bold w-full justify-start rounded-xl"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Talk to Daffy
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
