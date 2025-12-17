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
    <footer id="location" className="bg-primary-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif italic mb-6">{t('contact.visit')}</h2>
            <p className="text-primary-100/60 mb-8 max-w-md font-light">
              {t('contact.desc')}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-primary-900/50 rounded-lg text-primary-400 group-hover:text-primary-300 transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="text-primary-50 leading-relaxed">
                  Kabelweg 22<br />
                  1014 BB Amsterdam
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-primary-900/50 rounded-lg text-primary-400 group-hover:text-primary-300 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-primary-50">info@loustudio.nl</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-primary-900/50 rounded-lg text-primary-400 group-hover:text-primary-300 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-primary-50">+31 (0) 20 123 4567</span>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-900 rounded-full hover:bg-primary-800 transition-all hover:scale-110 shadow-lg border border-primary-800">
                    <Instagram size={20} />
                </a>
            </div>
          </div>
          
          <div className="h-80 md:h-full min-h-[350px] bg-white rounded-3xl overflow-hidden relative border border-primary-800 shadow-2xl transition-all duration-700">
             <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Kabelweg+22,+1014+BB+Amsterdam&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                title="Lou Studio Location"
                className="w-full h-full"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-3xl"></div>
          </div>
        </div>
        
        <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide text-primary-300/50">
            <p className="uppercase">&copy; {new Date().getFullYear()} Lou Studio. {t('contact.rights')}</p>
            <div className="flex gap-8 mt-6 md:mt-0">
                <button onClick={onOpenTerms} className="hover:text-white transition-colors uppercase font-medium">
                  {t('contact.terms')}
                </button>
                <button onClick={onOpenPrivacy} className="hover:text-white transition-colors uppercase font-medium">
                  {t('contact.privacy')}
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};