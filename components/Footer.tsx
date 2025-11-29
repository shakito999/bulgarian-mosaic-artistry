import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white font-bold">Mosaic.BG</h3>
            <p className="text-sm leading-relaxed max-w-xs text-stone-400">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-white">{t.footer.explore}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold-500 transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">{t.hero.ctaQuote}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-white">{t.footer.contact}</h4>
            <div className="space-y-2">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center hover:text-gold-500 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE}`} className="flex items-center hover:text-gold-500 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {CONTACT_PHONE}
              </a>
              <div className="flex space-x-4 mt-4 pt-4 border-t border-stone-800">
                <a href="#" className="hover:text-gold-500"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-gold-500"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} {COMPANY_NAME}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};