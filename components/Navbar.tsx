import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'studio', 'pricing', 'location'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.studio'), href: '#studio', id: 'studio' },
    { name: t('nav.pricing'), href: '#pricing', id: 'pricing' },
    { name: t('nav.location'), href: '#location', id: 'location' },
  ];

  const LanguageSelector = ({ className = "" }: { className?: string }) => (
    <div className={`relative flex items-center bg-stone-200/50 p-1 rounded-full border border-stone-300/30 backdrop-blur-sm select-none ${className}`}>
      {/* Sliding background indicator */}
      <div 
        className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-primary-900 rounded-full transition-all duration-300 ease-in-out shadow-sm ${
          language === 'nl' ? 'translate-x-0' : 'translate-x-full'
        }`}
      />
      <button 
        onClick={() => setLanguage('nl')}
        className={`relative z-10 w-9 h-7 flex items-center justify-center text-[10px] font-bold tracking-tighter transition-colors duration-300 ${
          language === 'nl' ? 'text-white' : 'text-stone-500 hover:text-stone-800'
        }`}
        title="Nederlands"
      >
        NL
      </button>
      <button 
        onClick={() => setLanguage('en')}
        className={`relative z-10 w-9 h-7 flex items-center justify-center text-[10px] font-bold tracking-tighter transition-colors duration-300 ${
          language === 'en' ? 'text-white' : 'text-stone-500 hover:text-stone-800'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex flex-col items-center group select-none">
            <span className={`text-3xl font-serif font-normal tracking-wider leading-none transition-colors text-primary-900`}>
              LOU
            </span>
            <span className={`text-[0.65rem] font-sans font-medium tracking-[0.35em] uppercase leading-none mt-1.5 ml-1 transition-colors text-primary-800`}>
              STUDIO
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8 mr-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    activeSection === link.id ? 'text-primary-600 border-b-2 border-primary-500 pb-0.5' : 'text-stone-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l border-stone-200 pl-8">
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-800 transition-all transform hover:scale-105 shadow-md shadow-primary-900/10 active:scale-95"
              >
                {t('nav.book')}
              </a>
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector className="scale-90" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-900 p-2 focus:outline-none bg-stone-200/50 rounded-full"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-stone-50 border-b border-stone-200 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 py-8' : 'max-h-0 py-0'}`}>
        <div className="px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-xl font-medium transition-colors ${
                  activeSection === link.id ? 'text-primary-900' : 'text-stone-600 hover:text-primary-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
             href="https://wa.me/31612345678"
             className="bg-primary-900 text-white text-center py-4 rounded-2xl font-medium hover:bg-primary-800 transition-colors shadow-lg shadow-primary-900/20 text-lg"
          >
            {t('nav.book')}
          </a>
        </div>
      </div>
    </nav>
  );
};