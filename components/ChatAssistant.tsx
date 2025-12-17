import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini, getChatSession } from '../services/gemini';
import { Message } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initializedLang = useRef<string>('');

  // Initialize greeting on mount or language change
  useEffect(() => {
    if (initializedLang.current !== language) {
      setMessages([{ role: 'model', text: t('chat.welcome') }]);
      initializedLang.current = language;
      // Reset the Gemini session for the new language
      getChatSession(language, true);
    }
  }, [language, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage, language);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: t('chat.error') }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button (Only visible when chat is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 bg-white text-stone-900 p-3 rounded-full shadow-lg border border-stone-200 hover:bg-stone-50 transition-all duration-300 group hover:scale-110"
        >
          <Bot size={24} className="text-primary-600" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {t('chat.trigger')}
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[450px] bg-white rounded-2xl shadow-2xl border border-stone-100 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-stone-900 p-4 flex justify-between items-center border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">{t('chat.title')}</h3>
                <span className="flex items-center gap-1 text-xs text-stone-400">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse"></span>
                  {t('chat.online')}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary-600 text-white rounded-tr-none'
                      : 'bg-white text-stone-800 border border-stone-100 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-stone-100 shadow-sm flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin text-primary-500" />
                  <span className="text-xs text-stone-400">{t('chat.thinking')}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('chat.placeholder')}
                className="flex-1 bg-stone-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-600 text-stone-900"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-primary-600 text-white p-2 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};