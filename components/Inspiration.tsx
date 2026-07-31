import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SmartImage } from './SmartImage';
import { Sparkles, ArrowRight, Camera } from 'lucide-react';

interface InspirationItem {
  id: string;
  category: 'fashion' | 'portrait' | 'brand' | 'podcast';
  categoryLabelKey: string;
  titleKey: string;
  descKey: string;
  imageLocal: string;
  imageFallback: string;
  aspect: string;
}

export const Inspiration: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<InspirationItem | null>(null);

  const items: InspirationItem[] = [
    {
      id: '1',
      category: 'fashion',
      categoryLabelKey: 'inspiration.filter.fashion',
      titleKey: 'inspiration.card1.title',
      descKey: 'inspiration.card1.desc',
      imageLocal: '/images/inspiration-1.jpg',
      imageFallback: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
      aspect: 'aspect-[3/4]',
    },
    {
      id: '2',
      category: 'brand',
      categoryLabelKey: 'inspiration.filter.brand',
      titleKey: 'inspiration.card2.title',
      descKey: 'inspiration.card2.desc',
      imageLocal: '/images/inspiration-2.jpg',
      imageFallback: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80',
      aspect: 'aspect-[4/5]',
    },
    {
      id: '3',
      category: 'portrait',
      categoryLabelKey: 'inspiration.filter.portrait',
      titleKey: 'inspiration.card3.title',
      descKey: 'inspiration.card3.desc',
      imageLocal: '/images/inspiration-3.jpg',
      imageFallback: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      aspect: 'aspect-[3/4]',
    },
    {
      id: '4',
      category: 'podcast',
      categoryLabelKey: 'inspiration.filter.podcast',
      titleKey: 'inspiration.card4.title',
      descKey: 'inspiration.card4.desc',
      imageLocal: '/images/inspiration-4.jpg',
      imageFallback: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80',
      aspect: 'aspect-[16/10]',
    },
    {
      id: '5',
      category: 'brand',
      categoryLabelKey: 'inspiration.filter.brand',
      titleKey: 'inspiration.card5.title',
      descKey: 'inspiration.card5.desc',
      imageLocal: '/images/inspiration-5.jpg',
      imageFallback: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=80',
      aspect: 'aspect-[4/3]',
    },
    {
      id: '6',
      category: 'fashion',
      categoryLabelKey: 'inspiration.filter.fashion',
      titleKey: 'inspiration.card6.title',
      descKey: 'inspiration.card6.desc',
      imageLocal: '/images/inspiration-6.jpg',
      imageFallback: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      aspect: 'aspect-[3/4]',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter(item => item.category === activeFilter);

  const filters = [
    { id: 'all', label: t('inspiration.filter.all') },
    { id: 'fashion', label: t('inspiration.filter.fashion') },
    { id: 'portrait', label: t('inspiration.filter.portrait') },
    { id: 'brand', label: t('inspiration.filter.brand') },
    { id: 'podcast', label: t('inspiration.filter.podcast') },
  ];

  return (
    <section id="inspiration" className="py-24 bg-stone-50 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/60 text-primary-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={13} className="text-primary-700" />
            <span>{t('inspiration.tagline')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-stone-900 mb-5 tracking-tight font-serif italic">
            {t('inspiration.title')}
          </h2>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed">
            {t('inspiration.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-800 text-white shadow-md scale-105'
                  : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {filteredItems.map((item) => {
            const title = t(item.titleKey);
            const desc = t(item.descKey);
            const categoryLabel = t(item.categoryLabelKey);

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                  <SmartImage
                    localSrc={item.imageLocal}
                    fallbackSrc={item.imageFallback}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-stone-900/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-primary-200 mb-1">
                        <Camera size={12} />
                        Bekijk Details
                      </span>
                      <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-white border-t border-stone-100">
                  <div>
                    <h3 className="text-base font-medium text-stone-900 group-hover:text-primary-800 transition-colors">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs text-stone-500 line-clamp-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  
                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-primary-800 group-hover:text-primary-700">
                    <span>Bekijk concept</span>
                    <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-primary-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif italic mb-4">
              Jouw eigen visie tot leven brengen in Lou Studio?
            </h3>
            <p className="text-primary-100/80 text-sm md:text-base mb-8 leading-relaxed font-light">
              Heb je specifieke ideeën voor je shoot of wil je overleggen over de mogelijkheden en lichtopstellingen? Neem direct contact met ons op via WhatsApp.
            </p>
            <a
              href="https://wa.me/31612345678?text=Hoi!%20Ik%20heb%20inspiratie%20opgedaan%20op%20de%20website%20en%20wil%20graag%20meer%20weten%20over%20een%20shoot%20bij%20Lou%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-950 px-8 py-3.5 rounded-full font-medium hover:bg-stone-100 transition-all hover:scale-105 shadow-lg"
            >
              <span>Bespreek je idee via WhatsApp</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 bg-stone-900/80 hover:bg-stone-900 text-white w-9 h-9 rounded-full flex items-center justify-center text-sm transition-colors"
            >
              ✕
            </button>

            <div className="relative w-full h-80 sm:h-96 bg-stone-100 overflow-hidden">
              <SmartImage
                localSrc={selectedImage.imageLocal}
                fallbackSrc={selectedImage.imageFallback}
                alt={t(selectedImage.titleKey)}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                {t(selectedImage.categoryLabelKey)}
              </span>
              <h3 className="text-2xl font-serif text-stone-900 mb-2">
                {t(selectedImage.titleKey)}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {t(selectedImage.descKey)}
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-stone-100">
                <span className="text-xs text-stone-500 font-medium">
                  Locatie: Lou Studio Amsterdam • Kabelweg 22
                </span>
                <a
                  href={`https://wa.me/31612345678?text=${encodeURIComponent(`Hoi! Ik ben geïnteresseerd in een shoot vergelijkbaar met '${t(selectedImage.titleKey)}'.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-800 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-primary-700 transition-colors shadow-md"
                >
                  Boek een vergelijkbare shoot
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
