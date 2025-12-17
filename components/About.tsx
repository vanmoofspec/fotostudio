import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 relative z-10 shadow-2xl">
               <img 
                src="https://picsum.photos/600/800?grayscale&random=10" 
                alt="Studio Founders" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-primary-500/10 mix-blend-multiply pointer-events-none"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-200/50 rounded-full blur-2xl"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-stone-100 rounded-full -z-0"></div>
            <div className="absolute bottom-10 -right-10 z-20 hidden md:block">
                 <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-100">
                    <p className="font-serif italic text-2xl text-primary-600">"Create freely"</p>
                 </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">{t('about.subtitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-stone-900 mb-6">{t('about.title')}</h3>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
            
            <div className="mt-8 flex gap-8">
              <div>
                <span className="block text-3xl font-medium text-primary-600">60m²</span>
                <span className="text-sm text-stone-500">{t('about.surface')}</span>
              </div>
              <div>
                <span className="block text-3xl font-medium text-primary-600">3m</span>
                <span className="text-sm text-stone-500">{t('about.height')}</span>
              </div>
              <div>
                <span className="block text-3xl font-medium text-primary-600">∞</span>
                <span className="text-sm text-stone-500">{t('about.possibilities')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};