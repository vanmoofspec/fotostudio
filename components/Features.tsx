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
    <section id="studio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">{t('features.studio')}</h2>
          <h3 className="text-3xl md:text-4xl font-medium text-stone-900">{t('features.title')}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-stone-900 group-hover:scale-110 transition-transform duration-300">
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