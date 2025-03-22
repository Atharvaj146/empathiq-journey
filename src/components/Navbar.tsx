
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/#about' },
    { title: 'Assessment', path: '/assessment' },
    { title: 'Dashboard', path: '/dashboard' },
  ];

  const isActive = (path: string) => {
    if (path.includes('#')) {
      return location.pathname === '/' && location.hash === path.split('/')[1];
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollPosition > 20 || isMenuOpen
          ? 'py-3 glass'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary font-semibold text-xl"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">AU</span>
          </div>
          <span>AutismDetect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Link
              to="/auth?mode=login"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/auth?mode=signup"
              className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground p-1"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/50 animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium p-2 flex justify-between items-center rounded-md transition-colors ${
                  isActive(link.path)
                    ? 'bg-secondary text-primary'
                    : 'text-foreground/80 hover:bg-secondary/50'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.title}
                <ChevronRight size={16} className="text-muted-foreground" />
              </Link>
            ))}
            <div className="pt-4 border-t border-border/50 flex flex-col space-y-3">
              <Link
                to="/auth?mode=login"
                className="text-sm font-medium w-full p-2 text-center border border-border rounded-md hover:bg-secondary/50 transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/auth?mode=signup"
                className="text-sm font-medium w-full p-2 text-center bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
