import React from 'react';
import { stats } from '../data/mock';

const StatsSection = () => {
  return (
    <section className="py-16 bg-brand-taupe">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2 font-display">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-brand-black/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
