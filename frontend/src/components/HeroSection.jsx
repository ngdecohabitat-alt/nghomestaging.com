import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { companyInfo, images } from '../data/mock';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('realisations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={images.hero}
          alt="Intérieur élégant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Expert Home Staging - Moselle & Luxembourg</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Vendez plus vite et au{' '}
            <span className="text-amber-400">meilleur prix</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-stone-200 mb-8 leading-relaxed">
            Transformez votre bien immobilier en coup de cœur grâce à notre expertise en home staging et valorisation déco.
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
              <span className="text-sm md:text-base">Vente accélérée</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
              <span className="text-sm md:text-base">+8% de plus-value moyenne</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
              <span className="text-sm md:text-base">Intervention rapide</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToPortfolio}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              Voir nos réalisations
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <a 
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center space-x-3 text-white hover:text-amber-400 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-stone-300">Appelez-nous maintenant</p>
                <p className="text-lg font-semibold">{companyInfo.phone}</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
