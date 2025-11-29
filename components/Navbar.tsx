import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || !isHome ? 'bg-white/95 backdrop-blur-md text-stone-900 shadow-sm py-3' : 'bg-transparent text-white py-6'
  }`;

  const linkClass = `text-sm font-semibold tracking-widest hover:text-gold-500 transition-colors uppercase ${
    scrolled || !isHome ? 'text-stone-800' : 'text-white'
  }`;

  const globeClass = `w-5 h-5 cursor-pointer hover:text-gold-500 transition-colors ${
     scrolled || !isHome ? 'text-stone-800' : 'text-white'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className={`font-serif text-2xl font-bold tracking-tighter ${scrolled || !isHome ? 'text-stone-900' : 'text-white'}`}>
            Mosaic<span className="text-gold-500">.</span>BG
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass}>{t.nav.home}</Link>
            <Link to="/portfolio" className={linkClass}>{t.nav.portfolio}</Link>
            <Link to="/contact" className={linkClass}>{t.nav.contact}</Link>
            
            <button 
              onClick={toggleLanguage} 
              className="flex items-center space-x-1 focus:outline-none"
              aria-label="Toggle Language"
            >
              <Globe className={globeClass} />
              <span className={`text-xs font-bold uppercase ${scrolled || !isHome ? 'text-stone-800' : 'text-white'}`}>
                {language === 'en' ? 'BG' : 'EN'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
                onClick={toggleLanguage} 
                className="flex items-center space-x-1 focus:outline-none"
              >
              <span className={`text-xs font-bold uppercase ${scrolled || !isHome ? 'text-stone-800' : 'text-white'}`}>
                {language === 'en' ? 'BG' : 'EN'}
              </span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className={scrolled || !isHome ? "text-stone-900" : "text-white"} /> : <Menu className={scrolled || !isHome ? "text-stone-900" : "text-white"} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white text-stone-900 shadow-lg py-6 px-4 flex flex-col space-y-4">
          <Link to="/" className="text-lg font-serif" onClick={() => setIsOpen(false)}>{t.nav.home}</Link>
          <Link to="/portfolio" className="text-lg font-serif" onClick={() => setIsOpen(false)}>{t.nav.portfolio}</Link>
          <Link to="/contact" className="text-lg font-serif" onClick={() => setIsOpen(false)}>{t.nav.contact}</Link>
        </div>
      )}
    </nav>
  );
};