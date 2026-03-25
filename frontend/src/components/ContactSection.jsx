import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { companyInfo, images } from '../data/mock';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (will be replaced with actual backend later)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Message envoyé avec succès ! Nous vous recontacterons rapidement.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-taupe px-4 py-2 rounded-full mb-4">
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-display">
            Transformons ensemble{' '}
            <span className="text-brand-gold">votre projet</span>
          </h2>
          <p className="text-lg text-gray-700">
            Demandez votre devis gratuit et personnalisé. Nous vous répondons sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-brand-taupe rounded-lg p-8">
            <h3 className="text-2xl font-bold text-brand-black mb-6 font-display">
              Demander un devis gratuit
            </h3>
            
            {/* Calendly CTA */}
            <div className="mb-6 p-4 bg-white rounded-lg border-2 border-brand-gold/30">
              <p className="text-sm text-brand-black mb-3 font-semibold">
                💬 Préférez-vous échanger directement avec nous ?
              </p>
              <a
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
              >
                📅 Réserver un appel découverte gratuit
              </a>
              <p className="text-xs text-gray-600 mt-2 text-center">
                Choisissez votre créneau en 2 clics
              </p>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-400"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-brand-taupe text-gray-600">ou remplissez le formulaire</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brand-black mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brand-black mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                  placeholder="+33 6 00 00 00 00"
                />
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-semibold text-brand-black mb-2">
                  Type de bien
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="local-commercial">Local commercial</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-black mb-2">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all resize-none"
                  placeholder="Décrivez-nous votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer ma demande</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-600 text-center">
                * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-brand-black text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 font-display">
                Nos coordonnées
              </h3>

              <div className="space-y-6">
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Téléphone</p>
                    <p className="text-lg font-semibold group-hover:text-brand-gold transition-colors">
                      {companyInfo.phone}
                    </p>
                  </div>
                </a>

                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Email</p>
                    <p className="text-lg font-semibold group-hover:text-brand-gold transition-colors break-all">
                      {companyInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Zone d'intervention</p>
                    <p className="text-lg font-semibold">{companyInfo.serviceArea}</p>
                    <p className="text-sm text-gray-400 mt-1">Basés à {companyInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-brand-gold" />
                  <span className="text-sm">Réponse sous 24h</span>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-brand-gold" />
                  <span className="text-sm">Devis gratuit et sans engagement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold" />
                  <span className="text-sm">Intervention rapide en Moselle & Luxembourg</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={images.contact}
                alt="Contact NG Déco & Habitat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
