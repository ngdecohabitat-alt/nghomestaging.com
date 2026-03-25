import React from 'react';
import { Home, Palette, TrendingUp, ArrowRight } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  home: Home,
  palette: Palette,
  trendingUp: TrendingUp
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-brand-taupe">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white px-4 py-2 rounded-full mb-4">
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">Nos Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-display">
            Des solutions adaptées à{' '}
            <span className="text-brand-gold">chaque projet</span>
          </h2>
          <p className="text-lg text-gray-700">
            De la valorisation complète au coaching personnalisé, nous vous accompagnons pour transformer votre bien en véritable coup de cœur.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-brand-gold group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-brand-black mb-4 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>

                {/* Details List */}
                <ul className="space-y-3 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-brand-gold font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
