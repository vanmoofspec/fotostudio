import React from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onOpenImageGuide?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenTerms, onOpenPrivacy, onOpenImageGuide }) => {
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
              <a 
                href="https://maps.app.goo.gl/qcTup3VGZNnx6AF7A?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:opacity-95 transition-opacity"
                title="Open Google Maps"
              >
                <div className="p-2 bg-primary-900/50 rounded-lg text-primary-300 group-hover:text-primary-200 group-hover:bg-primary-900 transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="text-primary-50 leading-relaxed group-hover:underline decoration-primary-300 underline-offset-4">
                  Kabelweg 22<br />
                  1014 BB Amsterdam
                </span>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-primary-900/50 rounded-lg text-primary-300 group-hover:text-primary-200 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-primary-50">info@loustudio.nl</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-primary-900/50 rounded-lg text-primary-300 group-hover:text-primary-200 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-primary-50">+31 (0) 20 123 4567</span>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/loustudio.nl/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-primary-900 rounded-full hover:bg-primary-800 text-primary-100 hover:text-white transition-all hover:scale-105 shadow-lg border border-primary-800/80 group"
                  aria-label="Instagram @loustudio.nl"
                >
                    <Instagram size={18} className="group-hover:rotate-6 transition-transform" />
                    <span className="text-xs font-medium tracking-wide">@loustudio.nl</span>
                </a>
            </div>
          </div>
          
          <div className="h-80 md:h-full min-h-[350px] bg-white rounded-3xl overflow-hidden relative border border-primary-900 shadow-2xl transition-all duration-700 group">
             <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4159.684313134965!2d4.8477105!3d52.389689499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e35497746aff%3A0xfa3b904bca753c5f!2sLou%20Studio!5e1!3m2!1snl!2snl!4v1785495099932!5m2!1snl!2snl" 
                frameBorder="0" 
                scrolling="no" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lou Studio Location"
                className="w-full h-full"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-3xl"></div>
             <a 
                href="https://maps.app.goo.gl/qcTup3VGZNnx6AF7A?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-stone-900/90 hover:bg-stone-900 text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-lg border border-stone-700/60 backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105"
             >
                <MapPin size={14} className="text-primary-300" />
                <span>Open in Google Maps</span>
             </a>
          </div>
        </div>
        
        <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide text-primary-300/50">
            <p className="uppercase">&copy; {new Date().getFullYear()} Lou Studio. {t('contact.rights')}</p>
            <div className="flex gap-8 mt-6 md:mt-0">
                {onOpenImageGuide && (
                  <button onClick={onOpenImageGuide} className="hover:text-white transition-colors uppercase font-medium text-primary-200 underline underline-offset-4">
                    📁 Public Foto Beheer
                  </button>
                )}
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