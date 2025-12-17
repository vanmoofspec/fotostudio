import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Globe } from 'lucide-react';
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
      // Trigger active state when section is in the upper third of the screen
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
      const navHeight = 80; // Approximate height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.studio'), href: '#studio', id: 'studio' },
    { name: t('nav.pricing'), href: '#pricing', id: 'pricing' },
    { name: t('nav.location'), href: '#location', id: 'location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 group">
            <Camera className={`h-6 w-6 transition-colors ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`} />
            <span className={`text-2xl font-serif font-bold tracking-wide transition-colors ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
              LICHTRUIMTE
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-stone-900 ${
                  activeSection === link.id ? 'text-stone-900 underline underline-offset-4 decoration-stone-900' : 'text-stone-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="text-stone-600 hover:text-stone-900 font-medium text-sm flex items-center gap-1 uppercase"
            >
              {language}
            </button>

            <a
              href="https://wa.me/31612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 text-stone-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors transform hover:scale-105"
            >
              {t('nav.book')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-stone-900 font-medium text-sm uppercase"
            >
              {language}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-900 p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                  activeSection === link.id ? 'text-stone-900' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
             href="https://wa.me/31612345678"
             className="bg-stone-900 text-stone-50 text-center py-3 rounded-md font-medium"
          >
            {t('nav.book')}
          </a>
        </div>
      </div>
    </nav>
  );
};