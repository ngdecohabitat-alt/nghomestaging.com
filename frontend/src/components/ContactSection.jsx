import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
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
          {/* Contact Methods - Left Side */}
          <div className="bg-brand-taupe rounded-lg p-8">
            <h3 className="text-2xl font-bold text-brand-black mb-6 font-display">
              Contactez-nous
            </h3>
            
            {/* Calendly CTA */}
            <div className="mb-6 p-6 bg-white rounded-lg border-2 border-brand-gold/30">
              <p className="text-base text-brand-black mb-4 font-semibold">
                💬 Réservez votre créneau en 2 clics
              </p>
              <a
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-4 rounded-md font-semibold transition-all duration-300 text-center shadow-md hover:shadow-lg"
              >
                📅 Réserver un appel découverte gratuit
              </a>
            </div>

            {/* Direct Contact Options */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Appelez-nous directement</p>
                    <a 
                      href={`tel:${companyInfo.phone}`}
                      className="text-xl font-bold text-brand-black hover:text-brand-gold transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Envoyez-nous un email</p>
                    <a 
                      href={`mailto:${companyInfo.email}`}
                      className="text-lg font-semibold text-brand-black hover:text-brand-gold transition-colors break-all"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Zone d'intervention</p>
                    <p className="text-lg font-semibold text-brand-black">{companyInfo.serviceArea}</p>
                    <p className="text-sm text-gray-600 mt-1">Basés à {companyInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-sm font-semibold text-brand-black mb-3">Suivez-nous sur les réseaux</p>
              <div className="flex items-center space-x-3">
                <a 
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href={companyInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold/80 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href={companyInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
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
                <div className="flex items-center space-x-3 mb-6">
                  <CheckCircle className="w-5 h-5 text-brand-gold" />
                  <span className="text-sm">Intervention rapide en Moselle & Luxembourg</span>
                </div>
                
                {/* Social Media in Contact Section */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-300 mb-3">Suivez-nous sur les réseaux</p>
                  <div className="flex items-center space-x-3">
                    <a 
                      href={companyInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold/80 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={companyInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold/80 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={companyInfo.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={images.contact}
                alt="Contact NG Home Staging"
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
