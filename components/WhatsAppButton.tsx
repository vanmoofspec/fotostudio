import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  return (
    <a
      href="https://wa.me/31612345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary-800 text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-primary-700 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-medium">
        {t('wa.button')}
      </span>
    </a>
  );
};