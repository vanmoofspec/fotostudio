import React from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  const { t } = useLanguage();

  return (
    <footer id="location" className="bg-stone-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-medium mb-6">{t('contact.visit')}</h2>
            <p className="text-stone-400 mb-8 max-w-md">
              {t('contact.desc')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-stone-500 mt-1" size={20} />
                <span className="text-stone-300">
                  Kabelweg 22<br />
                  1014 BB Amsterdam
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-stone-500" size={20} />
                <span className="text-stone-300">info@lichtruimtestudio.nl</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-stone-500" size={20} />
                <span className="text-stone-300">+31 (0) 20 123 4567</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
                <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors">
                    <Instagram size={20} />
                </a>
            </div>
          </div>
          
          <div className="h-64 md:h-full bg-stone-800 rounded-2xl overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-stone-700">
             {/* Placeholder for map */}
             <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="Map location" 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded text-sm font-medium border border-white/20">
                    {t('contact.map')}
                </span>
             </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} Lichtruimte Studio. {t('contact.rights')}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <button onClick={onOpenTerms} className="hover:text-stone-300 transition-colors">
                  {t('contact.terms')}
                </button>
                <button onClick={onOpenPrivacy} className="hover:text-stone-300 transition-colors">
                  {t('contact.privacy')}
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};