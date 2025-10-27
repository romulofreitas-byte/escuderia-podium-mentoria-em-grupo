'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const MetaPixel: React.FC = () => {
  useEffect(() => {
    const initializePixel = () => {
      const consent = localStorage.getItem('cookie-consent');
      
      if (!consent) {
        // If no consent yet, wait for it
        return;
      }

      const parsedConsent = JSON.parse(consent);
      
      // Only initialize if marketing consent is granted
      if (!parsedConsent.marketing) {
        return;
      }

      // Check if already initialized
      if (window.fbq && typeof window.fbq === 'function') {
        return;
      }

      // Meta Pixel Code
      (function(f: any, b: any, e: string, v: string, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function(...args: any[]) {
          n.callMethod
            ? n.callMethod.apply(n, args)
            : n.queue.push(args);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode?.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);

      // Initialize and track
      const fbq = (window as any).fbq as (...args: any[]) => void;
      if (fbq) {
        fbq('init', '680318171429216');
        fbq('track', 'PageView');
      }
    };

    // Try to initialize immediately
    initializePixel();

    // Listen for consent changes
    const handleConsentChange = () => {
      initializePixel();
    };

    window.addEventListener('cookieConsentChange', handleConsentChange);

    return () => {
      window.removeEventListener('cookieConsentChange', handleConsentChange);
    };
  }, []);

  return (
    <>
      {/* Noscript tracking image */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=680318171429216&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
};

