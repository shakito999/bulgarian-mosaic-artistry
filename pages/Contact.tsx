import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSearchParams } from 'react-router-dom';

export const Contact: React.FC = () => {
  const { t, portfolioItems } = useLanguage();
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const styleId = searchParams.get('style');
    if (styleId) {
      const item = portfolioItems.find(p => p.id === styleId);
      if (item) {
        const prefillMessage = `I am interested in the "${item.title}" mosaic (ID: ${item.id.toUpperCase()}).\n\nPlease provide more information about this style and pricing options.`;
        setMessage(prefillMessage);
      }
    }
  }, [searchParams, portfolioItems]);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">{t.contactPage.title}</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            {t.contactPage.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-stone-900 text-white p-10 shadow-xl">
            <h3 className="text-2xl font-serif mb-8">{t.contactPage.infoTitle}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.contactPage.phone}</h4>
                  <p className="text-stone-300">{CONTACT_PHONE}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.contactPage.email}</h4>
                  <p className="text-stone-300">{CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.contactPage.location}</h4>
                  <p className="text-stone-300">{t.contactPage.locationValue}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.contactPage.turnaround}</h4>
                  <p className="text-stone-300">{t.contactPage.turnaroundValue}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-stone-800">
               <p className="text-stone-400 italic text-sm">
                 "The details are not the details. They make the design."
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 shadow-lg border border-stone-200">
            <h3 className="text-2xl font-serif text-stone-900 mb-6">{t.contactPage.formTitle}</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">{t.contactPage.nameLabel}</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-stone-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">{t.contactPage.emailLabel}</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-stone-50" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-semibold text-stone-700 mb-2">{t.contactPage.typeLabel}</label>
                  <select id="type" className="w-full px-4 py-3 border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-stone-50">
                    {t.contactPage.mosaicTypes.map((type, i) => (
                      <option key={i}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="size" className="block text-sm font-semibold text-stone-700 mb-2">{t.contactPage.sizeLabel}</label>
                  <input type="number" id="size" className="w-full px-4 py-3 border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-stone-50" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">{t.contactPage.msgLabel}</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-stone-50"
                ></textarea>
              </div>

              <Button variant="primary" className="w-full">
                {t.contactPage.submit}
              </Button>
              <p className="text-xs text-stone-500 text-center mt-4">
                {t.contactPage.privacy}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};