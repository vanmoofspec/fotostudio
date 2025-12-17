import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const tiers: PricingTier[] = [
    {
      name: t('pricing.tier1.name'),
      price: '€145',
      duration: '2 Uur',
      features: t('pricing.tier1.features').split(','),
    },
    {
      name: t('pricing.tier2.name'),
      price: '€195',
      duration: '4 Uur',
      recommended: true,
      features: t('pricing.tier2.features').split(','),
    },
    {
      name: t('pricing.tier3.name'),
      price: '€395',
      duration: '8 Uur',
      features: t('pricing.tier3.features').split(','),
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-stone-900 mb-4">{t('pricing.title')}</h2>
          <p className="text-stone-600">{t('pricing.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            // Generate the dynamic WhatsApp message
            const message = `${t('pricing.whatsapp')}${tier.name} (${tier.duration}).`;
            const whatsappUrl = `https://wa.me/31612345678?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={tier.name}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  tier.recommended
                    ? 'bg-stone-900 text-white shadow-xl scale-105 z-10'
                    : 'bg-stone-50 text-stone-900 hover:shadow-lg'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-200 text-stone-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {t('pricing.mostPopular')}
                  </div>
                )}
                <h3 className="text-xl font-medium mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className={`text-sm ${tier.recommended ? 'text-stone-400' : 'text-stone-500'}`}>
                    / {tier.duration}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check size={18} className={tier.recommended ? 'text-stone-300' : 'text-stone-900'} />
                      <span className={`text-sm ${tier.recommended ? 'text-stone-300' : 'text-stone-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-colors ${
                    tier.recommended
                      ? 'bg-white text-stone-900 hover:bg-stone-100'
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  {t('pricing.button')}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};