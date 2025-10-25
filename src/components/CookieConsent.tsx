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
    <div className="fixed bottom-0 left-0 right-0 md:bottom-0 md:left-0 md:right-0 sm:bottom-6 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="max-w-6xl md:max-w-6xl sm:max-w-md w-full mx-auto md:mx-auto sm:mx-0">
        <div className="bg-gray-900 md:bg-gray-900 sm:bg-black/40 border border-gray-700 md:border-gray-700 sm:border-white/10 rounded-2xl shadow-2xl md:shadow-2xl sm:backdrop-blur-xl">
          {!showSettings ? (
            // Main consent banner
            <div className="p-6 md:p-6 sm:p-5">
              <div className="flex items-start space-x-4 md:space-x-4 sm:space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-12 md:h-12 sm:w-8 sm:h-8 bg-yellow-400/10 md:bg-yellow-400/10 sm:bg-amber-500/10 border border-yellow-400/30 md:border-yellow-400/30 sm:border-amber-500/20 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 md:w-6 md:h-6 sm:w-4 sm:h-4 text-yellow-400 md:text-yellow-400 sm:text-amber-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg md:text-lg sm:text-base font-semibold md:font-semibold sm:font-medium text-white md:text-white sm:text-gray-200 mb-2">
                    Cookies e Privacidade
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Utilizamos cookies essenciais para o funcionamento do site e cookies opcionais 
                    para melhorar sua experiência. Você pode escolher quais aceitar.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-3 sm:gap-2">
                    <button
                      onClick={handleAcceptEssential}
                      className="px-6 md:px-6 sm:px-4 py-3 md:py-3 sm:py-2 border border-gray-600 md:border-gray-600 sm:border-gray-600/50 text-gray-300 md:text-gray-300 sm:text-gray-300 rounded-full md:rounded-full sm:rounded-lg hover:border-gray-500 md:hover:border-gray-500 sm:hover:border-gray-500/70 hover:text-white md:hover:text-white sm:hover:text-gray-200 transition-colors md:transition-colors sm:transition-all duration-300 md:duration-300 sm:duration-200 text-sm font-medium"
                    >
                      Apenas Essenciais
                    </button>
                    
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 md:px-6 sm:px-4 py-3 md:py-3 sm:py-2 border border-yellow-400/30 md:border-yellow-400/30 sm:border-amber-500/30 text-yellow-400 md:text-yellow-400 sm:text-amber-400 rounded-full md:rounded-full sm:rounded-lg hover:border-yellow-400/50 md:hover:border-yellow-400/50 sm:hover:border-amber-500/50 hover:bg-yellow-400/10 md:hover:bg-yellow-400/10 sm:hover:bg-amber-500/10 transition-colors md:transition-colors sm:transition-all duration-300 md:duration-300 sm:duration-200 text-sm font-medium"
                    >
                      <Settings className="w-4 h-4 md:w-4 md:h-4 sm:w-3 sm:h-3 inline mr-2" />
                      Personalizar
                    </button>
                    
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 md:px-6 sm:px-4 py-3 md:py-3 sm:py-2 bg-yellow-400 md:bg-yellow-400 sm:bg-amber-500/90 text-gray-900 md:text-gray-900 sm:text-gray-900 rounded-full md:rounded-full sm:rounded-lg hover:bg-yellow-500 md:hover:bg-yellow-500 sm:hover:bg-amber-500 transition-colors md:transition-colors sm:transition-all duration-300 md:duration-300 sm:duration-200 text-sm font-semibold md:font-semibold sm:font-medium"
                    >
                      Aceitar Todos
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={handleAcceptEssential}
                  className="flex-shrink-0 p-2 md:p-2 sm:p-1.5 text-gray-400 md:text-gray-400 sm:text-gray-400 hover:text-white md:hover:text-white sm:hover:text-gray-200 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5 md:w-5 md:h-5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className="p-6 md:p-6 sm:p-5">
              <div className="flex items-center justify-between mb-6 md:mb-6 sm:mb-4">
                <h3 className="text-lg md:text-lg sm:text-base font-semibold md:font-semibold sm:font-medium text-white md:text-white sm:text-gray-200">
                  Configurações de Cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 md:p-2 sm:p-1.5 text-gray-400 md:text-gray-400 sm:text-gray-400 hover:text-white md:hover:text-white sm:hover:text-gray-200 transition-colors"
                  aria-label="Voltar"
                >
                  <X className="w-5 h-5 md:w-5 md:h-5 sm:w-4 sm:h-4" />
                </button>
              </div>
              
              <div className="space-y-4 md:space-y-4 sm:space-y-3 mb-6 md:mb-6 sm:mb-4">
                {/* Essential Cookies */}
                <div className="flex items-center justify-between p-4 md:p-4 sm:p-3 bg-gray-800/50 md:bg-gray-800/50 sm:bg-gray-800/30 border border-gray-700 md:border-gray-700 sm:border-gray-700/50 rounded-xl md:rounded-xl sm:rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold md:font-semibold sm:font-medium text-white md:text-white sm:text-gray-200 mb-1">Cookies Essenciais</h4>
                    <p className="text-gray-300 text-sm">
                      Necessários para o funcionamento básico do site
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 md:w-5 md:h-5 sm:w-4 sm:h-4 text-green-400" />
                    <span className="text-green-400 text-sm md:text-sm sm:text-xs font-medium">Sempre Ativo</span>
                  </div>
                </div>
                
                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-4 md:p-4 sm:p-3 bg-gray-800/50 md:bg-gray-800/50 sm:bg-gray-800/30 border border-gray-700 md:border-gray-700 sm:border-gray-700/50 rounded-xl md:rounded-xl sm:rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold md:font-semibold sm:font-medium text-white md:text-white sm:text-gray-200 mb-1">Cookies de Análise</h4>
                    <p className="text-gray-300 text-sm">
                      Nos ajudam a entender como você usa o site para melhorá-lo
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-12 h-6 md:w-12 md:h-6 sm:w-10 sm:h-5 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-yellow-400 md:bg-yellow-400 sm:bg-amber-500' : 'bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 md:w-5 md:h-5 sm:w-4 sm:h-4 bg-white rounded-full transition-transform ${
                        preferences.analytics ? 'translate-x-6 md:translate-x-6 sm:translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                
                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-4 md:p-4 sm:p-3 bg-gray-800/50 md:bg-gray-800/50 sm:bg-gray-800/30 border border-gray-700 md:border-gray-700 sm:border-gray-700/50 rounded-xl md:rounded-xl sm:rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold md:font-semibold sm:font-medium text-white md:text-white sm:text-gray-200 mb-1">Cookies de Marketing</h4>
                    <p className="text-gray-300 text-sm">
                      Usados para personalizar anúncios e conteúdo relevante
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-12 h-6 md:w-12 md:h-6 sm:w-10 sm:h-5 rounded-full transition-colors ${
                      preferences.marketing ? 'bg-yellow-400 md:bg-yellow-400 sm:bg-amber-500' : 'bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 md:w-5 md:h-5 sm:w-4 sm:h-4 bg-white rounded-full transition-transform ${
                        preferences.marketing ? 'translate-x-6 md:translate-x-6 sm:translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-3 sm:gap-2">
                <button
                  onClick={handleAcceptEssential}
                  className="px-6 md:px-6 sm:px-4 py-3 md:py-3 sm:py-2 border border-gray-600 md:border-gray-600 sm:border-gray-600/50 text-gray-300 md:text-gray-300 sm:text-gray-300 rounded-full md:rounded-full sm:rounded-lg hover:border-gray-500 md:hover:border-gray-500 sm:hover:border-gray-500/70 hover:text-white md:hover:text-white sm:hover:text-gray-200 transition-colors md:transition-colors sm:transition-all duration-300 md:duration-300 sm:duration-200 text-sm font-medium"
                >
                  Apenas Essenciais
                </button>
                
                <button
                  onClick={handleSavePreferences}
                  className="px-6 md:px-6 sm:px-4 py-3 md:py-3 sm:py-2 bg-yellow-400 md:bg-yellow-400 sm:bg-amber-500/90 text-gray-900 md:text-gray-900 sm:text-gray-900 rounded-full md:rounded-full sm:rounded-lg hover:bg-yellow-500 md:hover:bg-yellow-500 sm:hover:bg-amber-500 transition-colors md:transition-colors sm:transition-all duration-300 md:duration-300 sm:duration-200 text-sm font-semibold md:font-semibold sm:font-medium"
                >
                  Salvar Preferências
                </button>
              </div>
            </div>
          )}
          
          {/* Footer links */}
          <div className="px-6 md:px-6 sm:px-5 pb-4 md:pb-4 sm:pb-3">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-4 sm:gap-3 text-xs text-gray-400">
              <a 
                href="/privacidade" 
                className="hover:text-yellow-400 md:hover:text-yellow-400 sm:hover:text-amber-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <span>•</span>
              <a 
                href="/termos" 
                className="hover:text-yellow-400 md:hover:text-yellow-400 sm:hover:text-amber-400 transition-colors"
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
