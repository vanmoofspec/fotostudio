import React, { useState } from 'react';
import { X, CheckCircle2, Folder, Copy, Check } from 'lucide-react';

interface ImageGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageGuideModal: React.FC<ImageGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  if (!isOpen) return null;

  const imageMappings = [
    {
      section: 'Homepage Hero Achtergrond',
      path: 'public/images/hero.jpg',
      recommendedSize: '1920x1080 (16:9)',
      status: 'Actief (Aanwezig in public/images/hero.jpg)',
    },
    {
      section: 'Over Ons / Studio Impressie',
      path: 'public/images/about.jpg',
      recommendedSize: '600x800 (4:5)',
      status: 'Actief (Aanwezig in public/images/about.jpg)',
    },
    {
      section: 'Galerij: Hoofdruimte',
      path: 'public/images/gallery-1.jpg',
      recommendedSize: '800x800 (1:1)',
      status: 'Fallback actief (Plaats gallery-1.jpg om te vervangen)',
    },
    {
      section: 'Galerij: Visagie Corner',
      path: 'public/images/gallery-2.jpg',
      recommendedSize: '400x400 (1:1)',
      status: 'Fallback actief (Plaats gallery-2.jpg om te vervangen)',
    },
    {
      section: 'Galerij: Lounge Area',
      path: 'public/images/gallery-3.jpg',
      recommendedSize: '400x400 (1:1)',
      status: 'Fallback actief (Plaats gallery-3.jpg om te vervangen)',
    },
    {
      section: 'Galerij: Equipment & Licht',
      path: 'public/images/gallery-4.jpg',
      recommendedSize: '800x400 (2:1)',
      status: 'Fallback actief (Plaats gallery-4.jpg om te vervangen)',
    },
  ];

  const handleCopy = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6 border-b border-stone-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-primary-50 rounded-xl text-primary-800">
              <Folder size={24} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-stone-900">Public Afbeeldingen Beheer</h3>
              <p className="text-sm text-stone-500">Plaats foto's in de public folder om deze op de site te vervangen</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 p-2 rounded-full hover:bg-stone-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="bg-stone-50 rounded-xl p-4 mb-6 border border-stone-200 text-sm text-stone-700 leading-relaxed">
          <p className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600" />
            Hoe vervang je een foto?
          </p>
          Het script controleert automatisch of een foto bestaat in <code className="bg-stone-200 px-1.5 py-0.5 rounded text-stone-800">public/images/</code>. Als je een bestand toevoegt met de onderstaande bestandsnaam, vervangt de website direct de foto op die plek!
        </div>

        <div className="space-y-3">
          {imageMappings.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-200/80 hover:border-primary-200 transition-colors gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-800 block mb-0.5">
                  {item.section}
                </span>
                <div className="flex items-center gap-2">
                  <code className="text-sm font-mono text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-200">
                    {item.path}
                  </code>
                  <button
                    onClick={() => handleCopy(item.path)}
                    title="Kopieer pad"
                    className="text-stone-400 hover:text-primary-800 p-1 rounded transition-colors"
                  >
                    {copiedPath === item.path ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
                <span className="text-xs text-stone-500 block mt-1">
                  Aanbevolen: {item.recommendedSize}
                </span>
              </div>
              <div className="text-xs font-medium text-stone-600 sm:text-right bg-white sm:bg-transparent p-2 sm:p-0 rounded border sm:border-0 border-stone-200">
                {item.status}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary-800 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};
