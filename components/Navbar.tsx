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

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center bg-stone-200/50 p-1 rounded-full border border-stone-200/50 backdrop-blur-sm ${className}`}>
      <button 
        onClick={() => setLanguage('nl')}
        className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all duration-200 ${
          language === 'nl' 
          ? 'bg-primary-900 text-white shadow-sm' 
          : 'text-stone-500 hover:text-primary-900'
        }`}
      >
        NL
      </button>
      <button 
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all duration-200 ${
          language === 'en' 
          ? 'bg-primary-900 text-white shadow-sm' 
          : 'text-stone-500 hover:text-primary-900'
        }`}
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
            <span className={`text-3xl font-serif font-normal tracking-wider leading-none transition-colors ${isScrolled ? 'text-primary-900' : 'text-primary-900'}`}>
              LOU
            </span>
            <span className={`text-[0.65rem] font-sans font-medium tracking-[0.35em] uppercase leading-none mt-1.5 ml-1 transition-colors ${isScrolled ? 'text-primary-700' : 'text-primary-800'}`}>
              STUDIO
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-8 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    activeSection === link.id ? 'text-primary-600 underline underline-offset-4 decoration-primary-500' : 'text-stone-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a
              href="https://wa.me/31612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-800 transition-colors transform hover:scale-105 shadow-md shadow-primary-900/20"
            >
              {t('nav.book')}
            </a>

            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle className="scale-90" />
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
      <div className={`md:hidden absolute top-full left-0 w-full bg-stone-50 border-b border-stone-200 shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
        <div className="px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-lg font-medium transition-colors ${
                  activeSection === link.id ? 'text-primary-900' : 'text-stone-600 hover:text-primary-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
             href="https://wa.me/31612345678"
             className="bg-primary-900 text-white text-center py-3 rounded-md font-medium hover:bg-primary-800 transition-colors"
          >
            {t('nav.book')}
          </a>
        </div>
      </div>
    </nav>
  );
};