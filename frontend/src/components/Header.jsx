import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'À propos', id: 'a-propos' },
    { label: 'Services', id: 'services' },
    { label: 'Réalisations', id: 'realisations' },
    { label: 'Témoignages', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="flex items-center"
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/n47v9c1f_NOUVEAU%20LOGO.png"
                alt="Nayara Garcia Home Staging"
                className="h-16 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-brand-black hover:text-brand-gold font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${companyInfo.phone}`}
              className="flex items-center space-x-2 text-brand-black hover:text-brand-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{companyInfo.phone}</span>
            </a>
            <a
              href={companyInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-white px-6 py-2.5 rounded-md hover:bg-brand-gold/90 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-brand-black p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-brand-grey pt-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-brand-black hover:text-brand-gold font-medium text-left py-2 px-3 hover:bg-brand-taupe rounded transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-brand-grey space-y-2">
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center space-x-2 text-brand-black py-2 px-3"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{companyInfo.phone}</span>
                </a>
                <a
                  href={companyInfo.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-gold text-white px-6 py-3 rounded-md hover:bg-brand-gold/90 transition-all duration-300 font-medium block text-center"
                >
                  Prendre RDV
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
