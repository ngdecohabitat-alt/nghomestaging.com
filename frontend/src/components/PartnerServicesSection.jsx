import React from 'react';
import { Sparkles, Camera, Users, Wrench, Sofa, Truck, Package } from 'lucide-react';

const partnerServices = [
  {
    icon: Sparkles,
    title: "Nettoyage Pro",
    description: "Nettoyage professionnel avant shooting photo"
  },
  {
    icon: Camera,
    title: "Reportage Photo Pro",
    description: "Photos professionnelles haute qualité"
  },
  {
    icon: Users,
    title: "Home Organiser",
    description: "Organisation et désencombrement en partenariat"
  },
  {
    icon: Wrench,
    title: "Petits Travaux",
    description: "Bricoleurs pour réparations et finitions"
  },
  {
    icon: Sofa,
    title: "Location Mobilier",
    description: "Mobilier de home staging en location"
  },
  {
    icon: Truck,
    title: "Déménageurs",
    description: "Déménagement et transport de meubles"
  },
  {
    icon: Package,
    title: "Garde-Meubles",
    description: "Solutions de stockage sécurisées"
  }
];

const PartnerServicesSection = () => {
  return (
    <section className="py-16 bg-white border-t border-brand-grey">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-brand-black mb-4 font-display">
            Services complémentaires en{' '}
            <span className="text-brand-gold">partenariat</span>
          </h3>
          <p className="text-gray-700">
            Nous coordonnons un réseau de partenaires de confiance pour vous offrir une solution complète clés en main.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-7xl mx-auto">
          {partnerServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-brand-taupe/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-brand-gold group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-brand-black text-sm mb-2">
                  {service.title}
                </h4>
                <p className="text-xs text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            <span className="font-semibold text-brand-gold">Options disponibles</span> - Nous sous-traitons ces services à des professionnels sélectionnés pour leur qualité. Devis sur demande selon vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerServicesSection;
