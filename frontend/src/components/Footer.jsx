import React from 'react';
import { Phone, Mail, MapPin, Heart, Instagram, Facebook, Linkedin } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/n47v9c1f_NOUVEAU%20LOGO.png"
                alt="Nayara Garcia Home Staging Logo"
                className="h-20 w-auto bg-white rounded-full p-2"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Expert en home staging et valorisation immobilière en Moselle et Luxembourg. 
              Nous transformons vos biens pour créer le coup de cœur qui accélère la vente.
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/fkru02ci_PHOTO-2025-10-23-12-15-33.jpg"
                alt="Home Staging Brasil Association"
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <span className="text-sm text-gray-400">Membre associé Home Staging Brasil</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href={companyInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={companyInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={companyInfo.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-display text-brand-gold">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-gray-400 hover:text-brand-gold transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('a-propos')}
                  className="text-gray-400 hover:text-brand-gold transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-brand-gold transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('realisations')}
                  className="text-gray-400 hover:text-brand-gold transition-colors"
                >
                  Réalisations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-brand-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-display text-brand-gold">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-400 hover:text-brand-gold transition-colors flex items-start space-x-2"
                >
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-400 hover:text-brand-gold transition-colors flex items-start space-x-2"
                >
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="break-all">{companyInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>{companyInfo.location}</p>
                  <p className="text-sm">{companyInfo.serviceArea}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} NG Déco & Habitat. Tous droits réservés.
            </p>
            <p className="text-sm text-gray-400 flex items-center space-x-1">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-brand-gold fill-brand-gold" />
              <span>pour valoriser vos biens</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
