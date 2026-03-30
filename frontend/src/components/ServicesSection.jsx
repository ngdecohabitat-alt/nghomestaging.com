import React, { useState } from 'react';
import { Home, Palette, TrendingUp, ArrowRight, Check, Star } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  home: Home,
  palette: Palette,
  trendingUp: TrendingUp
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-brand-taupe">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white px-4 py-2 rounded-full mb-4">
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">Nos Services & Tarifs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-display">
            Des solutions adaptées à{' '}
            <span className="text-brand-gold">chaque projet</span>
          </h2>
          <p className="text-lg text-gray-700">
            De l'audit personnalisé à la transformation complète, découvrez nos prestations transparentes et sans surprise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Badge if exists */}
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </div>
                )}
                
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

                {/* Price Display */}
                {service.price && (
                  <div className="mb-6 p-4 bg-brand-taupe rounded-lg">
                    <div className="text-3xl font-bold text-brand-gold mb-1 font-display">
                      {service.price}
                    </div>
                    <p className="text-sm text-gray-600">{service.priceDetails}</p>
                    {service.additionalPrice && (
                      <p className="text-xs text-gray-500 mt-2">{service.additionalPrice}</p>
                    )}
                  </div>
                )}

                {/* Details List */}
                <ul className="space-y-3 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Note if exists */}
                {service.note && (
                  <p className="text-xs text-gray-500 italic mb-4 pb-4 border-t border-gray-200 pt-4">
                    {service.note}
                  </p>
                )}

                {/* CTA */}
                {service.offerings ? (
                  <button
                    onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                    className="w-full text-brand-gold font-semibold flex items-center justify-center space-x-2 py-3 border-2 border-brand-gold rounded-md hover:bg-brand-gold hover:text-white transition-all duration-300"
                  >
                    <span>{selectedService === service.id ? 'Masquer les formules' : 'Voir les formules'}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${selectedService === service.id ? 'rotate-90' : ''}`} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-brand-gold font-semibold flex items-center justify-center space-x-2 py-3 border-2 border-brand-gold rounded-md hover:bg-brand-gold hover:text-white transition-all duration-300"
                  >
                    <span>Demander un devis</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                {/* Expandable Audit Details */}
                {service.offerings && selectedService === service.id && (
                  <div className="mt-6 space-y-4 animate-in slide-in-from-top">
                    {service.offerings.map((offer, idx) => (
                      <div 
                        key={idx}
                        className="p-4 bg-brand-taupe/50 rounded-lg border-2 border-brand-gold/20 hover:border-brand-gold/50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-brand-black">{offer.name}</h4>
                            {offer.duration && (
                              <p className="text-xs text-gray-600 mt-1">Durée: {offer.duration}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-brand-gold">{offer.price}</div>
                          </div>
                        </div>
                        <ul className="space-y-2 mb-3">
                          {offer.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-start space-x-2 text-xs text-gray-700">
                              <div className="w-1 h-1 bg-brand-gold rounded-full mt-1.5 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {offer.highlight && (
                          <div className="flex items-center space-x-1 text-xs text-brand-gold font-semibold">
                            <Star className="w-3 h-3 fill-brand-gold" />
                            <span>{offer.highlight}</span>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Explanatory Note */}
                    <div className="mt-4 p-4 bg-brand-gold/10 rounded-lg border border-brand-gold/30">
                      <p className="text-sm text-gray-700 italic">
                        💡 L'audit sur place permet d'aller plus loin qu'un compte rendu, grâce à des échanges en direct et une analyse précise du bien.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-brand-black mb-4 font-display">
            Besoin d'un conseil personnalisé ?
          </h3>
          <p className="text-gray-700 mb-6">
            Chaque projet est unique. Contactez-nous pour un devis sur-mesure adapté à vos besoins et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Demander un devis gratuit
            </button>
            <a
              href="tel:+33630218017"
              className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-8 py-4 rounded-md font-semibold transition-all duration-300"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
