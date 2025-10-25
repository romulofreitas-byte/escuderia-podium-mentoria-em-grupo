'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allConsent));
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    const essentialConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(essentialConsent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    if (key === 'essential') return; // Can't disable essential cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl backdrop-blur-sm">
          {!showSettings ? (
            // Main consent banner
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Cookies e Privacidade
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Utilizamos cookies essenciais para o funcionamento do site e cookies opcionais 
                    para melhorar sua experiência. Você pode escolher quais aceitar.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAcceptEssential}
                      className="px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:border-gray-500 hover:text-white transition-colors text-sm font-medium"
                    >
                      Apenas Essenciais
                    </button>
                    
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-3 border border-yellow-400/30 text-yellow-400 rounded-full hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-colors text-sm font-medium"
                    >
                      <Settings className="w-4 h-4 inline mr-2" />
                      Personalizar
                    </button>
                    
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition-colors text-sm font-semibold"
                    >
                      Aceitar Todos
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={handleAcceptEssential}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">
                  Configurações de Cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Voltar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Essential Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Cookies Essenciais</h4>
                    <p className="text-gray-300 text-sm">
                      Necessários para o funcionamento básico do site
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">Sempre Ativo</span>
                  </div>
                </div>
                
                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Cookies de Análise</h4>
                    <p className="text-gray-300 text-sm">
                      Nos ajudam a entender como você usa o site para melhorá-lo
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                
                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Cookies de Marketing</h4>
                    <p className="text-gray-300 text-sm">
                      Usados para personalizar anúncios e conteúdo relevante
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      preferences.marketing ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptEssential}
                  className="px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:border-gray-500 hover:text-white transition-colors text-sm font-medium"
                >
                  Apenas Essenciais
                </button>
                
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition-colors text-sm font-semibold"
                >
                  Salvar Preferências
                </button>
              </div>
            </div>
          )}
          
          {/* Footer links */}
          <div className="px-6 pb-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <a 
                href="/privacidade" 
                className="hover:text-yellow-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <span>•</span>
              <a 
                href="/termos" 
                className="hover:text-yellow-400 transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
