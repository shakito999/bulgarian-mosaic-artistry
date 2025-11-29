import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSearchParams } from 'react-router-dom';

export const Contact: React.FC = () => {
  const { t, portfolioItems, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Portrait',
    size: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlternative, setShowAlternative] = useState(false);

  useEffect(() => {
    const styleId = searchParams.get('style');
    const mosaicType = searchParams.get('type');
    
    // Handle specific mosaic inquiry
    if (styleId) {
      const item = portfolioItems.find(p => p.id === styleId);
      if (item) {
        const prefillMessage = language === 'bg' 
          ? `Интересувам се от "${item.title}" мозайка (ID: ${item.id.toUpperCase()}).\n\nМоля, предоставете повече информация за този стил и ценови опции.`
          : `I am interested in the "${item.title}" mosaic (ID: ${item.id.toUpperCase()}).\n\nPlease provide more information about this style and pricing options.`;
        setMessage(prefillMessage);
      }
    }
    
    // Handle mosaic type selection (Wall/Floor)
    if (mosaicType) {
      // Find the matching type in the dropdown options
      const matchingType = t.contactPage.mosaicTypes.find(type => 
        type.toLowerCase().includes(mosaicType.toLowerCase())
      );
      
      if (matchingType) {
        setFormData(prev => ({ ...prev, type: matchingType }));
        
        // Auto-fill message based on language and type
        let prefillMessage = '';
        if (language === 'bg') {
          if (mosaicType.toLowerCase().includes('wall')) {
            prefillMessage = `Бих искал да поръчам стена мозайка.\n\nИмам следните изисквания:\n- Местоположение: [посочете къде ще се монтира]\n- Приблизителна площ: [m²]\n- Стил/дизайн: [опишете предпочитанията си]\n\nМоля, изпратете ми оферта и информация за процеса.`;
          } else if (mosaicType.toLowerCase().includes('floor')) {
            prefillMessage = `Бих искал да поръчам подова мозайка.\n\nИмам следните изисквания:\n- Местоположение: [посочете помещението]\n- Приблизителна площ: [m²]\n- Интензивност на натоварване: [лека/средна/висока]\n- Стил/дизайн: [опишете предпочитанията си]\n\nМоля, изпратете ми оферта и информация за издръжливостта и поддръжката.`;
          } else {
            prefillMessage = `Бих искал да поръчам мозайка.\n\nМоля, предоставете повече информация за възможностите и цени.`;
          }
        } else {
          if (mosaicType.toLowerCase().includes('wall')) {
            prefillMessage = `I would like to order a wall mosaic.\n\nMy requirements:\n- Location: [specify installation location]\n- Approximate area: [m²]\n- Style/design: [describe your preferences]\n\nPlease send me a quote and information about the process.`;
          } else if (mosaicType.toLowerCase().includes('floor')) {
            prefillMessage = `I would like to order a floor mosaic.\n\nMy requirements:\n- Location: [specify the room/area]\n- Approximate area: [m²]\n- Traffic intensity: [light/medium/heavy]\n- Style/design: [describe your preferences]\n\nPlease send me a quote and information about durability and maintenance.`;
          } else {
            prefillMessage = `I would like to order a mosaic.\n\nPlease provide more information about options and pricing.`;
          }
        }
        
        // Only set message if it's empty (don't override style-specific messages)
        if (!message) {
          setMessage(prefillMessage);
        }
      }
    }
  }, [searchParams, portfolioItems, language, message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const subject = encodeURIComponent(`Mosaic Inquiry - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Mosaic Type: ${formData.type}\n` +
      `Size: ${formData.size || 'Not specified'}\n\n` +
      `Message:\n${message}`
    );

    // Create mailto link
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    
    // Try multiple methods to open email client
    try {
      // Method 1: Create and click a temporary link
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Method 2: Fallback to window.location
      setTimeout(() => {
        if (!document.hidden) {
          window.open(mailtoLink, '_blank');
        }
      }, 500);
    } catch (error) {
      console.error('Error opening email client:', error);
      // Final fallback
      window.location.href = mailtoLink;
    }

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', type: 'Portrait', size: '' });
      setMessage('');
      setIsSubmitting(false);
      setShowAlternative(true); // Show alternative after 3 seconds
    }, 2000);
    
    // Hide alternative after 10 seconds
    setTimeout(() => {
      setShowAlternative(false);
    }, 12000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                  <div className="flex gap-2 mt-2">
                    <a 
                      href={`tel:${CONTACT_PHONE.replace(/[\s\-\(\)]/g, '')}`}
                      className="inline-flex items-center px-3 py-1 bg-gold-600 text-white text-xs rounded hover:bg-gold-700 transition-colors"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </a>
                    <a 
                      href={`viber://contact?number=%2B${CONTACT_PHONE.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 transition-colors"
                    >
                      💬 Viber
                    </a>
                  </div>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">{t.contactPage.nameLabel}</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-stone-50" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">{t.contactPage.emailLabel}</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-stone-50" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-semibold text-stone-700 mb-2">{t.contactPage.typeLabel}</label>
                  <select 
                    id="type" 
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    className="w-full px-4 py-3 border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-stone-50"
                  >
                    {t.contactPage.mosaicTypes.map((type, i) => (
                      <option key={i}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="size" className="block text-sm font-semibold text-stone-700 mb-2">{t.contactPage.sizeLabel}</label>
                  <input 
                    type="number" 
                    id="size" 
                    value={formData.size}
                    onChange={(e) => handleInputChange('size', e.target.value)}
                    placeholder="Approximate area in m²"
                    className="w-full px-4 py-3 border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-stone-50" 
                  />
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

              <Button variant="primary" className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Opening Email Client...' : t.contactPage.submit}
              </Button>
              
              {/* Alternative contact method */}
              {showAlternative && (
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800 mb-3">
                    📧 Email client didn't open? You can also:
                  </p>
                  <div className="space-y-2">
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="block text-center bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors text-sm"
                    >
                      Click here to open email manually
                    </a>
                    <div className="flex gap-2">
                      <a 
                        href={`tel:${CONTACT_PHONE.replace(/[\s\-\(\)]/g, '')}`}
                        className="flex-1 text-center bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors text-sm"
                      >
                        📞 Call Now
                      </a>
                      <a 
                        href={`viber://contact?number=%2B${CONTACT_PHONE.replace(/[^0-9]/g, '')}`}
                        className="flex-1 text-center bg-purple-600 text-white px-3 py-2 rounded hover:bg-purple-700 transition-colors text-sm"
                      >
                        💬 Message on Viber
                      </a>
                    </div>
                  </div>
                </div>
              )}
              
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