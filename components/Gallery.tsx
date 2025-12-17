import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-stone-900">{t('gallery.title')}</h2>
            <p className="mt-4 text-stone-600 max-w-xl">
              {t('gallery.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          <div className="h-80 md:h-auto md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/800/800?grayscale"
              alt="Main Studio Area"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-stone-900/80 to-transparent w-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-medium">{t('gallery.main')}</span>
            </div>
          </div>
          <div className="h-64 md:h-auto md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl">
             <img
              src="https://picsum.photos/400/400?grayscale&random=1"
              alt="Makeup Area"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-stone-900/80 to-transparent w-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-medium">{t('gallery.makeup')}</span>
            </div>
          </div>
          <div className="h-64 md:h-auto md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl">
             <img
              src="https://picsum.photos/400/400?grayscale&random=2"
              alt="Lounge"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-stone-900/80 to-transparent w-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-medium">{t('gallery.lounge')}</span>
            </div>
          </div>
          <div className="h-64 md:h-auto md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl">
             <img
              src="https://picsum.photos/800/400?grayscale&random=3"
              alt="Equipment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-stone-900/80 to-transparent w-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-medium">{t('gallery.equipment')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};