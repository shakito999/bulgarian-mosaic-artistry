import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MosaicCategory, MosaicItem } from '../types';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<MosaicCategory>(MosaicCategory.ALL);
  const [selectedItem, setSelectedItem] = useState<MosaicItem | null>(null);
  const [mainImage, setMainImage] = useState<string>(''); // State to handle temporary image swap in lightbox
  
  const { t, portfolioItems } = useLanguage();

  const filteredItems = filter === MosaicCategory.ALL 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const handleOpenItem = (item: MosaicItem) => {
    setSelectedItem(item);
    setMainImage(item.imageUrl);
  };

  const handleCloseItem = () => {
    setSelectedItem(null);
    setMainImage('');
  };

  return (
    <div className="pt-24 min-h-screen bg-stone-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">{t.portfolioPage.title}</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">{t.portfolioPage.description}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.values(MosaicCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
                filter === cat 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-white text-stone-600 hover:bg-stone-200'
              }`}
            >
              {t.portfolioPage.categories[cat]}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => handleOpenItem(item)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                      if (!item.imageUrl.startsWith('http')) {
                         (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x600?text=${encodeURIComponent(item.title)}`;
                      }
                    }}
                />
                <div className="absolute inset-0 bg-stone-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif italic text-lg">{t.portfolioPage.viewDetails}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-stone-900">{item.title}</h3>
                <p className="text-gold-600 text-xs font-bold uppercase tracking-widest mt-1 mb-2">{t.portfolioPage.categories[item.category]}</p>
                <p className="text-stone-500 text-sm line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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