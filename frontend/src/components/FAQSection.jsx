import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqs } from '../data/mock';

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-taupe px-4 py-2 rounded-full mb-4">
              <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-display">
              Questions{' '}
              <span className="text-brand-gold">fréquentes</span>
            </h2>
            <p className="text-lg text-gray-700">
              Toutes les réponses à vos questions sur le home staging et nos services.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-brand-taupe rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-black hover:text-brand-gold transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-brand-taupe rounded-lg p-8">
            <h3 className="text-2xl font-bold text-brand-black mb-4 font-display">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-gray-700 mb-6">
              Notre équipe est à votre disposition pour répondre à toutes vos interrogations.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
