import React from 'react';
import { Check } from 'lucide-react';
import { companyInfo, benefits, images } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={images.about}
                alt="Intérieur élégant NG Déco & Habitat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Association Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/fkru02ci_PHOTO-2025-10-23-12-15-33.jpg"
                alt="Association Home Staging Brasil"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-brand-taupe px-4 py-2 rounded-full mb-4">
              <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">À propos</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-display">
              Votre partenaire home staging en{' '}
              <span className="text-brand-gold">Moselle & Luxembourg</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Basés à <strong>{companyInfo.location}</strong>, nous offrons une approche sur-mesure et une réactivité qui fait la différence. Contrairement aux généralistes, nous nous concentrons exclusivement sur la valorisation immobilière pour vous garantir des résultats concrets.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Découvrir nos services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
