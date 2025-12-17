import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-stone-100">
          <h3 className="text-xl font-medium text-stone-900">{title}</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-900 transition-colors p-1 bg-stone-50 rounded-full">
            <X size={20} />
          </button>
        </div>
        <div className="overflow-y-auto p-6 text-stone-600 space-y-4 leading-relaxed custom-scrollbar">
          {children}
        </div>
        <div className="p-4 border-t border-stone-100 bg-stone-50 rounded-b-2xl flex justify-end">
            <button onClick={onClose} className="bg-stone-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">
                {t('modal.close')}
            </button>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('terms.title')}>
      <div dangerouslySetInnerHTML={{ __html: t('terms.content') }} />
    </Modal>
  );
};

export const PrivacyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('privacy.title')}>
      <div dangerouslySetInnerHTML={{ __html: t('privacy.content') }} />
    </Modal>
  );
};