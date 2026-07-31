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
    'nav.inspiration': 'Inspiratie',
    'nav.location': 'Locatie',
    'nav.book': 'Boek Nu',
    
    // Hero
    'hero.title.1': 'De ruimte om',
    'hero.title.2': 'te creëeren.',
    'hero.subtitle': 'Een stijlvolle studio met een industriële look, ontwerpen voor makers.',
    'hero.rates': 'Bekijk Tarieven',
    'hero.discover': 'Ontdek de Studio',

    // About
    'about.subtitle': 'OVER ONS',
    'about.title': 'Meer dan alleen vier muren.',
    'about.p1': 'Lou Studio is ontstaan vanuit iets wat we zelf misten: een fijne plek waar creativiteit alle ruimte krijgt. Als fotografen weten we hoe belangrijk het is om in een studio te werken die niet alleen praktisch is, maar ook inspireert en waar je je meteen thuis voelt.',
    'about.p2': 'Daarom hebben we een plek gecreëerd waar makers welkom zijn en waar je zonder gedoe aan de slag kunt. Een rustige en veelzijdige studio voor fotografie, videocontent, podcasts, campagnes en allerlei andere creatieve projecten.',
    'about.p3': 'Met professionele apparatuur, continue verlichting en een limbowand kun je de ruimte helemaal eigen maken en creëren wat past bij jouw idee.',
    'about.p4': 'Of je nu een grote productie draait, content maakt voor je merk of gewoon lekker wilt experimenteren: bij Lou Studio krijg je de ruimte en vrijheid om jouw visie tot leven te brengen.',
    'about.p5': 'We vinden persoonlijk contact belangrijk en willen dat iedereen zich welkom voelt. Geen ingewikkelde regels, maar een studio waar je graag binnenkomt, fijn kunt werken en met plezier weer terugkomt.',
    'about.surface': 'Oppervlakte',
    'about.height': 'Plafondhoogte',
    'about.possibilities': 'Mogelijkheden',

    // Features
    'features.studio': 'DE STUDIO',
    'features.title': 'Alles wat je nodig hebt.',
    'feat.gear.title': 'High-end Apparatuur',
    'feat.gear.desc': 'Inclusief twee continulampen voor professioneel resultaat.',
    'feat.space.title': '60m² Ruimte',
    'feat.space.desc': 'Een open vloerplan met een plafondhoogte van 3 meter en een limbowand.',
    'feat.light.title': 'Harde Limbowand',
    'feat.light.desc': 'Een professionele harde limbowand voor strakke en naadloze achtergronden in al je producties.',
    'feat.wifi.title': 'Fiber WiFi',
    'feat.wifi.desc': 'Razendsnel internet, perfect voor tethered shooting en directe uploads.',
    'feat.service.title': 'Full Service',
    'feat.service.desc': 'Verse koffie en thee voor de crew.',
    'feat.privacy.title': 'Privacy',
    'feat.privacy.desc': 'Een afgesloten ruimte waar je ongestoord kunt werken aan je projecten.',

    // Gallery
    'gallery.title': 'De Ruimte',
    'gallery.subtitle': 'Een kijkje in onze studio. Ontdek de verschillende ruimtes, mogelijkheden en details die Lou Studio een fijne plek maken om te creëren.',
    'gallery.main': 'Hoofd Studio',
    'gallery.makeup': 'Visagie',
    'gallery.lounge': 'Lounge',
    'gallery.equipment': 'Apparatuur',

    // Pricing
    'pricing.title': 'Eenvoudige Tarieven',
    'pricing.subtitle': 'Prijzen zijn exclusief BTW.',
    'pricing.tier1.name': 'Quick Shoot',
    'pricing.tier1.features': 'Koffie & Thee,Gratis WiFi,Zaterdag/zondag gratis parkeren',
    'pricing.tier2.name': 'Halve Dag',
    'pricing.tier2.features': 'Koffie & Thee,Gratis WiFi,Zaterdag/zondag gratis parkeren',
    'pricing.tier3.name': 'Hele Dag',
    'pricing.tier3.features': 'Koffie & Thee,Gratis WiFi,Zaterdag/zondag gratis parkeren',
    'pricing.mostPopular': 'Meest Gekozen',
    'pricing.button': 'Kies Pakket',
    'pricing.whatsapp': 'Hoi, ik ben geïnteresseerd in de ruimte voor: ',

    // Inspiration
    'inspiration.tagline': 'INSPIRATIE',
    'inspiration.title': 'Inspiratie uit de studio',
    'inspiration.subtitle': 'Laat je inspireren door de veelzijdigheid van Lou Studio. Bekijk voorbeelden van fotografie, videocontent en creatieve concepten.',
    'inspiration.filter.all': 'Alles',
    'inspiration.filter.fashion': 'Fashion & Editorial',
    'inspiration.filter.portrait': 'Portret & Beauty',
    'inspiration.filter.brand': 'Brand & Content',
    'inspiration.filter.podcast': 'Video Opnames',
    'inspiration.card1.title': 'Editorial Fashion Shoot',
    'inspiration.card1.desc': 'Strakke fashion editorial op de harde limbowand met zachte continulichting.',
    'inspiration.card2.title': 'Merken Content & Lookbook',
    'inspiration.card2.desc': 'Sfeervolle merkfotografie met een minimalistisch en industrieel karakter.',
    'inspiration.card3.title': 'Portret & Beauty Sessie',
    'inspiration.card3.desc': 'Intieme portretten met natuurlijk diffuus licht en verfijnde schaduwen.',
    'inspiration.card4.title': 'Video Opnames',
    'inspiration.card4.desc': 'Comfortabele video setup in een rustige, akoestisch fijne omgeving.',
    'inspiration.card5.title': 'Campagne & Productie',
    'inspiration.card5.desc': 'Grootschalige merkcampagne met volle benutting van de 60m² studiovloer.',
    'inspiration.card6.title': 'Creatief Experiment',
    'inspiration.card6.desc': 'Dynamische kleur- en licht-experimenten met onze continue verlichtingsset.',

    // Contact
    'contact.visit': 'Kom langs.',
    'contact.desc': 'Onze studio is centraal gelegen en makkelijk bereikbaar met OV en auto. Er is laad- en losruimte direct voor de deur.',
    'contact.map': 'Kaart Weergave',
    'contact.rights': 'Alle rechten voorbehouden.',
    'contact.terms': 'Algemene Voorwaarden',
    'contact.privacy': 'Privacybeleid',

    // WhatsApp
    'wa.button': 'WhatsApp ons',

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
    'nav.inspiration': 'Inspiration',
    'nav.location': 'Location',
    'nav.book': 'Book Now',

    // Hero
    'hero.title.1': 'Create in',
    'hero.title.2': 'serenity.',
    'hero.subtitle': 'A stylish studio with an industrial look, designed for creators.',
    'hero.rates': 'View Rates',
    'hero.discover': 'Discover the Studio',

    // About
    'about.subtitle': 'ABOUT US',
    'about.title': 'More than just four walls.',
    'about.p1': 'Lou Studio was born from something we missed ourselves: a great place where creativity gets all the space it needs. As photographers, we know how important it is to work in a studio that is not only practical, but also inspires and makes you feel right at home.',
    'about.p2': 'That\'s why we created a space where creators are welcome and can get straight to work without hassle. A quiet and versatile studio for photography, video content, podcasts, campaigns, and all kinds of other creative projects.',
    'about.p3': 'With professional equipment, continuous lighting, and a cyclorama wall, you can make the space completely your own and create whatever fits your vision.',
    'about.p4': 'Whether you\'re running a big production, creating content for your brand, or just want to experiment: at Lou Studio, you get the space and freedom to bring your vision to life.',
    'about.p5': 'We value personal contact and want everyone to feel welcome. No complicated rules, just a studio where you love coming in, working comfortably, and gladly coming back to.',
    'about.surface': 'Surface',
    'about.height': 'Ceiling Height',
    'about.possibilities': 'Possibilities',

    // Features
    'features.studio': 'THE STUDIO',
    'features.title': 'Everything you need.',
    'feat.gear.title': 'High-end Equipment',
    'feat.gear.desc': 'Includes two continuous lights for professional results.',
    'feat.space.title': '60m² Space',
    'feat.space.desc': 'An open floor plan with a ceiling height of 3 meters and a cyclorama wall.',
    'feat.light.title': 'Hard Cyclorama Wall',
    'feat.light.desc': 'A professional hard cyclorama wall for clean, seamless backgrounds in all your productions.',
    'feat.wifi.title': 'Fiber WiFi',
    'feat.wifi.desc': 'Blazing fast internet, perfect for tethered shooting and direct uploads.',
    'feat.service.title': 'Full Service',
    'feat.service.desc': 'Fresh coffee and tea for the crew.',
    'feat.privacy.title': 'Privacy',
    'feat.privacy.desc': 'A private space where you can work undisturbed on your projects.',

    // Gallery
    'gallery.title': 'The Space',
    'gallery.subtitle': 'A look inside our studio. Discover the different spaces, possibilities, and details that make Lou Studio a great place to create.',
    'gallery.main': 'Main Studio',
    'gallery.makeup': 'Makeup Area',
    'gallery.lounge': 'Lounge',
    'gallery.equipment': 'Equipment',

    // Pricing
    'pricing.title': 'Simple Pricing',
    'pricing.subtitle': 'Prices exclude VAT.',
    'pricing.tier1.name': 'Quick Shoot',
    'pricing.tier1.features': 'Coffee & Tea,Free WiFi,Sat/Sun free parking',
    'pricing.tier2.name': 'Half Day',
    'pricing.tier2.features': 'Coffee & Tea,Free WiFi,Sat/Sun free parking',
    'pricing.tier3.name': 'Full Day',
    'pricing.tier3.features': 'Coffee & Tea,Free WiFi,Sat/Sun free parking',
    'pricing.mostPopular': 'Most Popular',
    'pricing.button': 'Select Package',
    'pricing.whatsapp': 'Hi, I am interested in the space for: ',

    // Inspiration
    'inspiration.tagline': 'INSPIRATION',
    'inspiration.title': 'Studio Inspiration',
    'inspiration.subtitle': 'Get inspired by the versatility of Lou Studio. View examples of photography, video content, and creative concepts.',
    'inspiration.filter.all': 'All',
    'inspiration.filter.fashion': 'Fashion & Editorial',
    'inspiration.filter.portrait': 'Portrait & Beauty',
    'inspiration.filter.brand': 'Brand & Content',
    'inspiration.filter.podcast': 'Video Recordings',
    'inspiration.card1.title': 'Editorial Fashion Shoot',
    'inspiration.card1.desc': 'Sleek fashion editorial on the cyclorama wall with soft continuous lighting.',
    'inspiration.card2.title': 'Brand Content & Lookbook',
    'inspiration.card2.desc': 'Atmospheric brand photography with a minimalist, industrial character.',
    'inspiration.card3.title': 'Portrait & Beauty Session',
    'inspiration.card3.desc': 'Intimate portraits with natural diffuse light and refined shadows.',
    'inspiration.card4.title': 'Video Recordings',
    'inspiration.card4.desc': 'Comfortable video setup in a quiet, acoustically pleasant environment.',
    'inspiration.card5.title': 'Campaign & Production',
    'inspiration.card5.desc': 'Large-scale brand campaign utilizing the full 60m² studio floor space.',
    'inspiration.card6.title': 'Creative Experiment',
    'inspiration.card6.desc': 'Dynamic color and light experiments using our continuous lighting setup.',

    // Contact
    'contact.visit': 'Visit us.',
    'contact.desc': 'Our studio is centrally located and easily accessible by public transport and car. Loading and unloading space directly in front of the door.',
    'contact.map': 'Map View',
    'contact.rights': 'All rights reserved.',
    'contact.terms': 'Terms & Conditions',
    'contact.privacy': 'Privacy Policy',

    // WhatsApp
    'wa.button': 'WhatsApp us',

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