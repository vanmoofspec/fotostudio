# Public Afbeeldingen Map (Public Images Directory)

Plaats hier je eigen foto's om de standaard afbeeldingen op de website automatisch te vervangen!

## Bestandsnamen & Locaties:

- **`public/images/hero.jpg`** -> Homepage Hero Achtergrondfoto (Aanbevolen verhouding 16:9)
- **`public/images/about.jpg`** -> Over Ons / Studio Oprichters & Interieur (Aanbevolen verhouding 4:5)
- **`public/images/gallery-1.jpg`** -> Fotogalerij: Hoofdruimte (Main Studio Area)
- **`public/images/gallery-2.jpg`** -> Fotogalerij: Visagie & Makeup Corner
- **`public/images/gallery-3.jpg`** -> Fotogalerij: Lounge & Zithoek
- **`public/images/gallery-4.jpg`** -> Fotogalerij: Apparatuur & Belichting

## Hoe werkt het?
Het slimme `SmartImage` script in de applicatie probeert altijd eerst de lokale afbeelding uit de `public/images/` folder te laden (bijvoorbeeld `/images/hero.jpg`).

1. **Foto aanwezig in `public/images/`**: De website toont direct jouw eigen foto!
2. **Geen foto in `public/images/`**: Het script detecteert automatisch dat de foto ontbreekt en schakelt direct over op de vervangende online placeholder foto.
