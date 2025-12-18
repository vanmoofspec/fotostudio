import React from 'react';
import { Zap, Maximize, Wifi, Coffee, Sun, ShieldCheck } from 'lucide-react';
import { Feature } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features: Feature[] = [
    {
      title: t('feat.gear.title'),
      description: t('feat.gear.desc'),
      icon: Zap,
    },
    {
      title: t('feat.space.title'),
      description: t('feat.space.desc'),
      icon: Maximize,
    },
    {
      title: t('feat.light.title'),
      description: t('feat.light.desc'),
      icon: Sun,
    },
    {
      title: t('feat.wifi.title'),
      description: t('feat.wifi.desc'),
      icon: Wifi,
    },
    {
      title: t('feat.service.title'),
      description: t('feat.service.desc'),
      icon: Coffee,
    },
    {
      title: t('feat.privacy.title'),
      description: t('feat.privacy.desc'),
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="studio" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-2">{t('features.studio')}</h2>
          <h3 className="text-3xl md:text-4xl font-medium text-stone-900">{t('features.title')}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-stone-50 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary-100">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-primary-700 group-hover:scale-110 group-hover:bg-primary-50 transition-all duration-300 ring-1 ring-stone-100 group-hover:ring-primary-100">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-medium text-stone-900 mb-3">{feature.title}</h4>
              <p className="text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};