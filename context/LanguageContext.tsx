import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  nl: {
    // Navbar
    'nav.about': 'Over ons',
    'nav.studio': 'Studio',
    'nav.pricing': 'Prijzen',
    'nav.location': 'Locatie',
    'nav.book': 'Boek Nu',
    
    // Hero
    'hero.title.1': 'Creëer in',
    'hero.title.2': 'alle rust.',
    'hero.subtitle': 'De perfecte daglichtstudio in hartje Amsterdam. Minimalistisch design, maximale focus.',
    'hero.rates': 'Bekijk Tarieven',
    'hero.discover': 'Ontdek de Studio',

    // About
    'about.subtitle': 'OVER ONS',
    'about.title': 'Meer dan alleen vier muren.',
    'about.p1': 'Lou Studio is opgericht in 2024 met een simpele visie: een plek creëren waar creativiteit vrij kan stromen, zonder afleiding. Als fotografen misten we een studio in Amsterdam die zowel betaalbaar als esthetisch hoogwaardig was.',
    'about.p2': 'Onze ruimte is ontworpen als een \'blank canvas\'. De neutrale tinten, de gietvloer en het overvloedige daglicht zorgen ervoor dat jouw onderwerp altijd centraal staat. Of je nu een editorial schiet, een podcast opneemt of een workshop geeft.',
    'about.p3': 'We geloven in persoonlijke service en transparantie. Geen verborgen kosten, wel goede koffie. We verwelkomen je graag in onze creatieve thuishaven aan de Kabelweg.',
    'about.surface': 'Oppervlakte',
    'about.height': 'Plafondhoogte',
    'about.possibilities': 'Mogelijkheden',

    // Features
    'features.studio': 'DE STUDIO',
    'features.title': 'Alles wat je nodig hebt.',
    'feat.gear.title': 'High-end Apparatuur',
    'feat.gear.desc': 'Inclusief Profoto D2 flitsers en diverse light shapers voor professioneel resultaat.',
    'feat.space.title': '60m² Ruimte',
    'feat.space.desc': 'Een open vloerplan met een plafondhoogte van 3 meter en een limbowand.',
    'feat.light.title': 'Overvloedig Daglicht',
    'feat.light.desc': 'Grote raampartijen op het noorden zorgen voor perfect diffuus licht de hele dag.',
    'feat.wifi.title': 'Fiber WiFi',
    'feat.wifi.desc': 'Razendsnel internet, perfect voor tethered shooting en directe uploads.',
    'feat.service.title': 'Full Service',
    'feat.service.desc': 'Verse koffie, thee, en een volledig uitgeruste keuken voor de crew.',
    'feat.privacy.title': 'Privacy',
    'feat.privacy.desc': 'Een afgesloten ruimte waar je ongestoord kunt werken aan je projecten.',

    // Gallery
    'gallery.title': 'De Ruimte',
    'gallery.subtitle': 'Een canvas voor jouw creativiteit. Bekijk hoe anderen onze studio hebben gebruikt.',
    'gallery.main': 'Hoofd Studio',
    'gallery.makeup': 'Visagie',
    'gallery.lounge': 'Lounge',
    'gallery.equipment': 'Apparatuur',

    // Pricing
    'pricing.title': 'Eenvoudige Tarieven',
    'pricing.subtitle': 'Geen verborgen kosten. Prijzen zijn exclusief BTW.',
    'pricing.tier1.name': 'Quick Shoot',
    'pricing.tier1.features': 'Koffie & Thee,Gratis WiFi,Zaterdag/zondag gratis parkeren',
    'pricing.tier2.name': 'Halve Dag',
    'pricing.tier2.features': 'Koffie & Thee,Gratis WiFi,Zaterdag/zondag gratis parkeren',
    'pricing.tier3.name': 'Hele Dag',
    'pricing.tier3.features': 'Koffie & Thee,Gratis WiFi,Zaterdag/zondag gratis parkeren',
    'pricing.mostPopular': 'Meest Gekozen',
    'pricing.button': 'Kies Pakket',
    'pricing.whatsapp': 'Hoi, ik ben geïnteresseerd in de ruimte voor: ',

    // Contact
    'contact.visit': 'Kom langs.',
    'contact.desc': 'Onze studio is centraal gelegen en makkelijk bereikbaar met OV en auto. Er is laad- en losruimte direct voor de deur.',
    'contact.map': 'Kaart Weergave',
    'contact.rights': 'Alle rechten voorbehouden.',
    'contact.terms': 'Algemene Voorwaarden',
    'contact.privacy': 'Privacybeleid',

    // WhatsApp & Chat
    'wa.button': 'WhatsApp ons',
    'chat.trigger': 'Vraag de assistent',
    'chat.title': 'Studio Assistent',
    'chat.online': 'Online',
    'chat.thinking': 'Denken...',
    'chat.placeholder': 'Typ je vraag...',
    'chat.welcome': 'Hi! Ik ben de assistent van Lou Studio. Heb je vragen over de studio of beschikbaarheid?',
    'chat.error': 'Er ging iets mis. Probeer het later opnieuw.',

    // Modals
    'terms.title': 'Algemene Voorwaarden',
    'privacy.title': 'Privacybeleid',
    'modal.close': 'Sluiten',
    'terms.content': '<p><strong>1. Definities</strong><br/>In deze algemene voorwaarden wordt verstaan onder verhuurder: Lou Studio. Huurder: de partij die de studio huurt voor een bepaalde periode.</p><p><strong>2. Reserveringen & Annulering</strong><br/>Reserveringen zijn pas definitief na bevestiging en betaling van de factuur. Annuleren kan kosteloos tot 48 uur voor aanvang. Bij annulering binnen 48 uur wordt 50% van het bedrag in rekening gebracht. Bij annulering binnen 24 uur is het volledige bedrag verschuldigd.</p><p><strong>3. Gebruik van de studio</strong><br/>De huurder dient de studio en apparatuur met zorg te behandelen. De ruimte dient in oorspronkelijke staat en schoon achtergelaten te worden. Confetti, glitter, en rookmachines zijn alleen toegestaan na schriftelijke toestemming.</p><p><strong>4. Schade & Aansprakelijkheid</strong><br/>Lou Studio is niet aansprakelijk voor diefstal, verlies of schade aan persoonlijke eigendommen van de huurder of diens team. De huurder is volledig aansprakelijk voor schade toegebracht aan de studio, het interieur of de apparatuur tijdens de huurperiode.</p><p><strong>5. Overwerk</strong><br/>Indien de huurperiode wordt overschreden, wordt een extra uurtarief in rekening gebracht van €75 per uur, afgerond op hele uren.</p><p><strong>6. Betaling</strong><br/>Betaling dient voorafgaand aan de boeking te geschieden, tenzij schriftelijk anders overeengekomen. Prijzen zijn exclusief 21% BTW.</p>',
    'privacy.content': '<p><strong>Gegevensverwerking</strong><br/>Lou Studio verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt.</p><p><strong>Doeleinden</strong><br/>Wij verwerken uw gegevens voor: afhandelen van betalingen, contact opnemen indien nodig, en levering van diensten.</p><p><strong>Bewaartermijn</strong><br/>Wij bewaren uw persoonsgegevens niet langer dan strikt nodig is.</p><p><strong>Cookies</strong><br/>Deze website gebruikt functionele cookies.</p><p><strong>Delen met derden</strong><br/>Lou Studio verkoopt uw gegevens niet aan derden.</p>'
  },
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.studio': 'Studio',
    'nav.pricing': 'Pricing',
    'nav.location': 'Location',
    'nav.book': 'Book Now',

    // Hero
    'hero.title.1': 'Create in',
    'hero.title.2': 'serenity.',
    'hero.subtitle': 'The perfect daylight studio in the heart of Amsterdam. Minimalist design, maximum focus.',
    'hero.rates': 'View Rates',
    'hero.discover': 'Discover the Studio',

    // About
    'about.subtitle': 'ABOUT US',
    'about.title': 'More than just four walls.',
    'about.p1': 'Lou Studio was founded in 2024 with a simple vision: to create a place where creativity can flow freely, without distraction. As photographers, we missed a studio in Amsterdam that was both affordable and aesthetically high-end.',
    'about.p2': 'Our space is designed as a \'blank canvas\'. The neutral tones, cast floor, and abundant daylight ensure your subject is always the center of attention. Whether you\'re shooting an editorial, recording a podcast, or hosting a workshop.',
    'about.p3': 'We believe in personal service and transparency. No hidden costs, just good coffee. We look forward to welcoming you to our creative haven at Kabelweg.',
    'about.surface': 'Surface',
    'about.height': 'Ceiling Height',
    'about.possibilities': 'Possibilities',

    // Features
    'features.studio': 'THE STUDIO',
    'features.title': 'Everything you need.',
    'feat.gear.title': 'High-end Equipment',
    'feat.gear.desc': 'Includes Profoto D2 flashes and various light shapers for professional results.',
    'feat.space.title': '60m² Space',
    'feat.space.desc': 'An open floor plan with a ceiling height of 3 meters and a cyclorama wall.',
    'feat.light.title': 'Abundant Daylight',
    'feat.light.desc': 'Large north-facing windows provide perfect diffuse light all day long.',
    'feat.wifi.title': 'Fiber WiFi',
    'feat.wifi.desc': 'Blazing fast internet, perfect for tethered shooting and direct uploads.',
    'feat.service.title': 'Full Service',
    'feat.service.desc': 'Fresh coffee, tea, and a fully equipped kitchen for the crew.',
    'feat.privacy.title': 'Privacy',
    'feat.privacy.desc': 'A private space where you can work undisturbed on your projects.',

    // Gallery
    'gallery.title': 'The Space',
    'gallery.subtitle': 'A canvas for your creativity. See how others have used our studio.',
    'gallery.main': 'Main Studio',
    'gallery.makeup': 'Makeup Area',
    'gallery.lounge': 'Lounge',
    'gallery.equipment': 'Equipment',

    // Pricing
    'pricing.title': 'Simple Pricing',
    'pricing.subtitle': 'No hidden costs. Prices exclude VAT.',
    'pricing.tier1.name': 'Quick Shoot',
    'pricing.tier1.features': 'Coffee & Tea,Free WiFi,Sat/Sun free parking',
    'pricing.tier2.name': 'Half Day',
    'pricing.tier2.features': 'Coffee & Tea,Free WiFi,Sat/Sun free parking',
    'pricing.tier3.name': 'Full Day',
    'pricing.tier3.features': 'Coffee & Tea,Free WiFi,Sat/Sun free parking',
    'pricing.mostPopular': 'Most Popular',
    'pricing.button': 'Select Package',
    'pricing.whatsapp': 'Hi, I am interested in the space for: ',

    // Contact
    'contact.visit': 'Visit us.',
    'contact.desc': 'Our studio is centrally located and easily accessible by public transport and car. Loading and unloading space directly in front of the door.',
    'contact.map': 'Map View',
    'contact.rights': 'All rights reserved.',
    'contact.terms': 'Terms & Conditions',
    'contact.privacy': 'Privacy Policy',

    // WhatsApp & Chat
    'wa.button': 'WhatsApp us',
    'chat.trigger': 'Ask the assistant',
    'chat.title': 'Studio Assistant',
    'chat.online': 'Online',
    'chat.thinking': 'Thinking...',
    'chat.placeholder': 'Type your question...',
    'chat.welcome': 'Hi! I am the Lou Studio assistant. Do you have questions about the studio or availability?',
    'chat.error': 'Something went wrong. Please try again later.',

    // Modals
    'terms.title': 'Terms & Conditions',
    'privacy.title': 'Privacy Policy',
    'modal.close': 'Close',
    'terms.content': '<p><strong>1. Definitions</strong><br/>In these general terms and conditions, lessor refers to: Lou Studio. Lessee: the party renting the studio for a certain period.</p><p><strong>2. Reservations & Cancellation</strong><br/>Reservations are only final after confirmation and payment of the invoice. Cancellation is free of charge up to 48 hours before commencement. For cancellation within 48 hours, 50% of the amount will be charged. For cancellation within 24 hours, the full amount is due.</p><p><strong>3. Use of the studio</strong><br/>The lessee must treat the studio and equipment with care. The space must be left in its original state and clean. Confetti, glitter, and smoke machines are only allowed after written permission.</p><p><strong>4. Damage & Liability</strong><br/>Lou Studio is not liable for theft, loss, or damage to personal property of the lessee or their team. The lessee is fully liable for damage caused to the studio, interior, or equipment during the rental period.</p><p><strong>5. Overtime</strong><br/>If the rental period is exceeded, an extra hourly rate of €75 per hour will be charged, rounded to whole hours.</p><p><strong>6. Payment</strong><br/>Payment must be made prior to the booking, unless agreed otherwise in writing. Prices exclude 21% VAT.</p>',
    'privacy.content': '<p><strong>Data Processing</strong><br/>Lou Studio processes your personal data because you use our services and/or because you provide them to us yourself.</p><p><strong>Purposes</strong><br/>We process your data for: handling payments, contacting you if necessary, and delivering services.</p><p><strong>Retention Period</strong><br/>We do not store your personal data longer than strictly necessary.</p><p><strong>Cookies</strong><br/>This website uses functional cookies.</p><p><strong>Sharing with Third Parties</strong><br/>Lou Studio does not sell your data to third parties.</p>'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['nl']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};