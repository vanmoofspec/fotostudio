import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80; // Approximate height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=2670&auto=format&fit=crop"
          alt="Professional Studio Interior with Lighting"
          className="w-full h-full object-cover grayscale"
        />
        {/* Added a hint of primary color to the overlay */}
        <div className="absolute inset-0 bg-primary-900/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-stone-100/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-stone-900 mb-6 drop-shadow-sm">
          {t('hero.title.1')} <br />
          <span className="font-semibold italic text-primary-600">{t('hero.title.2')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-700 max-w-2xl mx-auto mb-10 font-light">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            onClick={(e) => scrollToSection(e, '#pricing')}
            className="group bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-primary-700 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20"
          >
            {t('hero.rates')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#studio"
            onClick={(e) => scrollToSection(e, '#studio')}
            className="bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-900 px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-white hover:border-primary-300 shadow-sm"
          >
            {t('hero.discover')}
          </a>
        </div>
      </div>
    </section>
  );
};