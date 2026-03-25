import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, TrendingUp, Clock } from 'lucide-react';
import { portfolioProjects, companyInfo } from '../data/mock';

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % portfolioProjects.length);
    setShowBefore(true);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + portfolioProjects.length) % portfolioProjects.length);
    setShowBefore(true);
  };

  const currentProject = portfolioProjects[activeProject];

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-taupe px-4 py-2 rounded-full mb-4">
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">Nos Réalisations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-display">
            Des transformations qui font{' '}
            <span className="text-brand-gold">la différence</span>
          </h2>
          <p className="text-lg text-gray-700">
            Découvrez comment nous avons aidé nos clients à vendre plus vite et au meilleur prix grâce au home staging.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Before/After Images */}
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={showBefore ? currentProject.beforeImage : currentProject.afterImage}
                  alt={showBefore ? 'Avant home staging' : 'Après home staging'}
                  className="w-full h-full object-cover"
                />
                
                {/* Before/After Toggle */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full p-1 shadow-lg">
                  <button
                    onClick={() => setShowBefore(true)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      showBefore ? 'bg-brand-black text-white' : 'text-gray-700'
                    }`}
                  >
                    Avant
                  </button>
                  <button
                    onClick={() => setShowBefore(false)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      !showBefore ? 'bg-brand-gold text-white' : 'text-gray-700'
                    }`}
                  >
                    Après
                  </button>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-4 right-4 bg-brand-gold text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  {currentProject.result}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-4 font-display">
                {currentProject.title}
              </h3>
              
              <div className="flex items-center space-x-2 text-gray-600 mb-6">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>{currentProject.location}</span>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Results */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-taupe p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="w-5 h-5 text-brand-gold" />
                    <span className="text-sm font-semibold text-brand-black uppercase tracking-wide">Délai</span>
                  </div>
                  <p className="text-xl font-bold text-brand-black">{currentProject.result}</p>
                </div>
                <div className="bg-brand-taupe p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-brand-gold" />
                    <span className="text-sm font-semibold text-brand-black uppercase tracking-wide">Plus-value</span>
                  </div>
                  <p className="text-xl font-bold text-brand-gold">{currentProject.priceIncrease}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={companyInfo.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Réserver un appel découverte
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-8 py-4 rounded-md font-semibold transition-all duration-300"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {portfolioProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveProject(index);
                  setShowBefore(true);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === activeProject ? 'w-12 bg-brand-gold' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {portfolioProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => {
                setActiveProject(index);
                setShowBefore(true);
              }}
              className={`relative h-40 rounded-lg overflow-hidden group ${
                index === activeProject ? 'ring-4 ring-brand-gold' : ''
              }`}
            >
              <img 
                src={project.afterImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-sm text-center px-2">
                  {project.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
