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
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="max-w-sm w-full">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          {!showSettings ? (
            // Main consent banner
            <div className="p-5">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center">
                    <Cookie className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-200 mb-2">
                    Cookies e Privacidade
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Utilizamos cookies essenciais para o funcionamento do site e cookies opcionais 
                    para melhorar sua experiência. Você pode escolher quais aceitar.
                  </p>
                  
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={handleAcceptEssential}
                      className="px-4 py-2 border border-gray-600/50 text-gray-300 rounded-lg hover:border-gray-500/70 hover:text-gray-200 transition-all duration-200 text-sm font-medium"
                    >
                      Apenas Essenciais
                    </button>
                    
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-4 py-2 border border-amber-500/30 text-amber-400 rounded-lg hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-200 text-sm font-medium"
                    >
                      <Settings className="w-3 h-3 inline mr-2" />
                      Personalizar
                    </button>
                    
                    <button
                      onClick={handleAcceptAll}
                      className="px-4 py-2 bg-amber-500/90 text-gray-900 rounded-lg hover:bg-amber-500 transition-all duration-200 text-sm font-medium"
                    >
                      Aceitar Todos
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={handleAcceptEssential}
                  className="flex-shrink-0 p-1.5 text-gray-400 hover:text-gray-200 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-gray-200">
                  Configurações de Cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-200 transition-colors"
                  aria-label="Voltar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-3 mb-4">
                {/* Essential Cookies */}
                <div className="flex items-center justify-between p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-200 mb-1 text-sm">Cookies Essenciais</h4>
                    <p className="text-gray-300 text-xs">
                      Necessários para o funcionamento básico do site
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-xs font-medium">Sempre Ativo</span>
                  </div>
                </div>
                
                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-200 mb-1 text-sm">Cookies de Análise</h4>
                    <p className="text-gray-300 text-xs">
                      Nos ajudam a entender como você usa o site para melhorá-lo
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-10 h-5 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-amber-500' : 'bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.analytics ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                
                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-200 mb-1 text-sm">Cookies de Marketing</h4>
                    <p className="text-gray-300 text-xs">
                      Usados para personalizar anúncios e conteúdo relevante
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-10 h-5 rounded-full transition-colors ${
                      preferences.marketing ? 'bg-amber-500' : 'bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.marketing ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAcceptEssential}
                  className="px-4 py-2 border border-gray-600/50 text-gray-300 rounded-lg hover:border-gray-500/70 hover:text-gray-200 transition-all duration-200 text-sm font-medium"
                >
                  Apenas Essenciais
                </button>
                
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 bg-amber-500/90 text-gray-900 rounded-lg hover:bg-amber-500 transition-all duration-200 text-sm font-medium"
                >
                  Salvar Preferências
                </button>
              </div>
            </div>
          )}
          
          {/* Footer links */}
          <div className="px-5 pb-3">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400">
              <a 
                href="/privacidade" 
                className="hover:text-amber-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <span>•</span>
              <a 
                href="/termos" 
                className="hover:text-amber-400 transition-colors"
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
