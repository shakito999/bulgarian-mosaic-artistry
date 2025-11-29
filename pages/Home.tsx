import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Check, Star, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../translations';
import { MosaicItem } from '../types';

export const Home: React.FC = () => {
  const { t, portfolioItems } = useLanguage();
  const featuredWorks = portfolioItems.filter(item => item.featured).slice(0, 3);
  const [selectedItem, setSelectedItem] = useState<MosaicItem | null>(null);
  const [mainImage, setMainImage] = useState<string>('');

  const handleOpenItem = (item: MosaicItem) => {
    setSelectedItem(item);
    setMainImage(item.imageUrl);
  };

  const handleCloseItem = () => {
    setSelectedItem(null);
    setMainImage('');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero}
            alt="Mosaic Background" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544163071-118805f42a59?auto=format&fit=crop&q=80&w=2000'; // Fallback
            }}
          />
          <div className="absolute inset-0 bg-stone-950/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in-up">
          <h2 className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">
            {t.hero.subtitle}
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button variant="white">{t.hero.ctaPortfolio}</Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" className="border-gold-500 bg-gold-500 hover:bg-gold-600 hover:border-gold-600">{t.hero.ctaQuote}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro/Value Prop */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-400/30 z-0" />
              <img 
                src={IMAGES.process} 
                alt="Mosaic Artist at Work" 
                className="relative z-10 w-full h-auto shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1596627725358-154df6175e14?auto=format&fit=crop&q=80&w=1000';
                }}
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                {t.intro.title}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                {t.intro.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gold-100 p-2 rounded-full mr-4">
                    <Check className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{t.intro.feature1Title}</h4>
                    <p className="text-sm text-stone-600">{t.intro.feature1Desc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold-100 p-2 rounded-full mr-4">
                    <Star className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{t.intro.feature2Title}</h4>
                    <p className="text-sm text-stone-600">{t.intro.feature2Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2">{t.featured.subtitle}</h2>
              <h3 className="text-3xl font-serif">{t.featured.title}</h3>
            </div>
            <Link to="/portfolio" className="hidden md:block">
              <Button variant="white" icon>{t.featured.viewAll}</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <div key={work.id} className="group cursor-pointer" onClick={() => handleOpenItem(work)}>
                <div className="relative overflow-hidden aspect-[3/4] mb-4">
                  <img 
                    src={work.imageUrl} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback for demo purposes if local image not found
                      if (!work.imageUrl.startsWith('http')) {
                         (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x800?text=${encodeURIComponent(work.title)}`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-sm">{t.featured.viewDetails}</span>
                  </div>
                </div>
                <h4 className="text-xl font-serif">{work.title}</h4>
                <p className="text-stone-400 text-sm mt-1">{t.portfolioPage.categories[work.category]}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/portfolio">
              <Button variant="white" icon>{t.featured.viewAll}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">{t.process.title}</h2>
            <p className="text-stone-600 mt-4 max-w-xl mx-auto">{t.process.description}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="relative p-6 bg-stone-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-stone-100 text-center group">
                <div className="w-16 h-16 bg-stone-200 text-stone-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{step.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
                {index < t.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-stone-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-stone-100" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">{t.pricing.title}</h2>
            <p className="text-stone-600 mt-4">{t.pricing.description}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {t.pricing.tiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 border ${index === 1 ? 'border-gold-400 shadow-xl scale-105 relative' : 'border-stone-200'} flex flex-col`}>
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white text-xs font-bold uppercase py-1 px-4 tracking-widest">
                    Best Value
                  </div>
                )}
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{tier.title}</h3>
                <p className="text-stone-500 text-sm mb-6 font-medium">{tier.recommendedFor}</p>
                <div className="flex items-baseline mb-8">
                  {tier.title !== t.pricing.tiers[2].title && <span className="text-4xl font-bold text-stone-900">€{tier.price}</span>}
                  {tier.title === t.pricing.tiers[2].title && <span className="text-4xl font-bold text-stone-900">+€{tier.price}</span>}
                  <span className="text-stone-500 ml-2">{tier.unit}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-stone-600">
                      <Check className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/contact?type=${encodeURIComponent(tier.title)}`}>
                  <Button variant={index === 1 ? 'primary' : 'outline'} className="w-full">
                    {t.pricing.choose} {tier.title}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-white p-6 border border-stone-200 max-w-3xl mx-auto">
             <h4 className="font-bold text-stone-900 mb-2">{t.pricing.depositTitle}</h4>
             <p className="text-stone-600 text-sm">{t.pricing.depositDesc('20%')}</p>
          </div>
        </div>
      </section>

      {/* Modal / Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/95 backdrop-blur-sm overflow-y-auto">
          <button 
            className="fixed top-6 right-6 text-white hover:text-gold-500 transition-colors z-[70]"
            onClick={handleCloseItem}
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="bg-white w-full max-w-6xl rounded-none shadow-2xl flex flex-col my-auto relative min-h-[80vh]">
            <div className="flex flex-col lg:flex-row h-full flex-grow">
               {/* Image Section */}
              <div className="lg:w-3/5 bg-stone-100 p-4 md:p-8 flex flex-col">
                <div className="flex-grow flex items-center justify-center mb-6">
                  <img 
                    src={mainImage} 
                    alt={selectedItem.title} 
                    className="max-h-[60vh] w-auto object-contain shadow-lg"
                    onError={(e) => {
                          if (!mainImage.startsWith('http')) {
                            (e.target as HTMLImageElement).src = `https://via.placeholder.com/1000x1000?text=${encodeURIComponent(selectedItem.title)}`;
                          }
                    }}
                  />
                </div>
                
                {/* Gallery Thumbnails */}
                {selectedItem.gallery && selectedItem.gallery.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">{t.portfolioPage.processTitle}</h4>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                       {/* Main thumbnail */}
                       <button 
                        onClick={() => setMainImage(selectedItem.imageUrl)}
                        className={`aspect-square overflow-hidden border-2 transition-all ${mainImage === selectedItem.imageUrl ? 'border-gold-500 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                       >
                         <img src={selectedItem.imageUrl} alt="Main" className="w-full h-full object-cover" />
                       </button>
                       {/* Gallery thumbnails */}
                       {selectedItem.gallery.map((img, idx) => (
                         <button 
                          key={idx}
                          onClick={() => setMainImage(img)}
                          className={`aspect-square overflow-hidden border-2 transition-all ${mainImage === img ? 'border-gold-500 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                         >
                           <img src={img} alt={`Process ${idx}`} className="w-full h-full object-cover" />
                         </button>
                       ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="lg:w-2/5 p-8 md:p-12 flex flex-col bg-white">
                <span className="text-gold-600 text-sm font-bold uppercase tracking-widest mb-2">{t.portfolioPage.categories[selectedItem.category]}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">{selectedItem.title}</h2>
                <div className="w-12 h-1 bg-stone-200 mb-6"></div>
                <p className="text-stone-700 leading-relaxed text-lg mb-8">{selectedItem.description}</p>
                
                <div className="mt-auto space-y-6 border-t border-stone-200 pt-8">
                  <div>
                    <p className="text-sm text-stone-500 italic mb-3">{t.portfolioPage.interested}</p>
                    <Link to={`/contact?style=${selectedItem.id}`} className="inline-flex justify-center items-center w-full bg-stone-900 text-white px-8 py-4 text-sm font-bold tracking-wide hover:bg-gold-500 transition-colors uppercase">
                      {t.portfolioPage.inquire}
                    </Link>
                  </div>
                  <div className="text-xs text-stone-400 text-center">
                    {/* Placeholder for sharing or tags if needed */}
                    ID: {selectedItem.id.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};