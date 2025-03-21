
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/70 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-primary font-semibold text-xl">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">EQ</span>
              </div>
              <span>empathiQ</span>
            </Link>
            <p className="text-sm text-muted-foreground pr-4">
              Advanced screening technology to help identify autism spectrum conditions through interactive assessments.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Platform</h3>
            <ul className="space-y-3">
              {['Home', 'Assessment', 'Dashboard', 'Research'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {['About', 'Team', 'Careers', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contact@empathiq.ai" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <Mail size={14} className="mr-2" />
                  contact@empathiq.ai
                </a>
              </li>
              <li>
                <a 
                  href="tel:+11234567890" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <Phone size={14} className="mr-2" />
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-start"
                >
                  <MapPin size={14} className="mr-2 mt-1 flex-shrink-0" />
                  <span>123 Innovation Drive<br />San Francisco, CA 94107</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} empathiQ. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((platform) => (
              <a 
                key={platform}
                href={`https://${platform.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                {platform}
                <ArrowUpRight size={12} className="ml-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
