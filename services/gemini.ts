import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const getStudioInfo = (lang: 'nl' | 'en') => {
  const baseInfo = `
- Locatie/Location: Kabelweg 22, Amsterdam.
- Size: 60m2, 3m high ceiling.
- Gear: Profoto D2 flashes.
- Facilities: Makeup area, WiFi, Coffee/Tea, Free weekend parking.
- Prices:
  - Quick Shoot (2hr): €145
  - Half Day (4hr): €195
  - Full Day (8hr): €395
- Open: 08:00 - 22:00, 7 days/week.
- Rules: Max 10 people, no confetti/glitter without permission.
`;

  if (lang === 'en') {
    return `
You are the virtual assistant of "Lichtruimte Studio", a photo studio in Amsterdam.
Your goal is to help potential renters with questions.

Info: ${baseInfo}

Answer concisely, friendly, and professionally in ENGLISH.
If people want to book, refer them to the WhatsApp button on the website.
`;
  } else {
    return `
Je bent de virtuele assistent van "Lichtruimte Studio", een fotostudio in Amsterdam.
Jouw doel is om potentiële huurders te helpen met vragen over de studio.

Info: ${baseInfo}

Antwoord altijd beknopt, vriendelijk en professioneel in het NEDERLANDS.
Als mensen willen boeken, verwijs ze vriendelijk naar de WhatsApp knop op de website.
`;
  }
};

let chatSession: Chat | null = null;
let currentLang: 'nl' | 'en' = 'nl';

export const getChatSession = (lang: 'nl' | 'en' = 'nl', forceReset: boolean = false): Chat => {
  if (!chatSession || currentLang !== lang || forceReset) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    currentLang = lang;
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getStudioInfo(lang),
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string, lang: 'nl' | 'en' = 'nl'): Promise<string> => {
  try {
    const chat = getChatSession(lang);
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || (lang === 'en' ? "Sorry, I didn't catch that." : "Sorry, ik begreep dat niet helemaal.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'en' 
      ? "Temporary connection error. Please try again later or use WhatsApp."
      : "Er is een tijdelijke storing in mijn verbinding. Probeert u het later opnieuw of gebruik WhatsApp.";
  }
};