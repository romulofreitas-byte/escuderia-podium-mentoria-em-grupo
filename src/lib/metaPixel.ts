declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

/**
 * Check if Meta Pixel is available and marketing consent is granted
 */
function isPixelAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('cookie-consent');
  if (!consent) return false;
  
  const parsedConsent = JSON.parse(consent);
  return parsedConsent.marketing === true && typeof window.fbq === 'function';
}

/**
 * Generic event tracking
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (!isPixelAvailable()) return;
  
  const fbq = (window as any).fbq as (...args: any[]) => void;
  if (fbq) {
    fbq('track', eventName, params);
  }
}

/**
 * Track WhatsApp button clicks (Contact event)
 */
export function trackWhatsAppClick(): void {
  if (!isPixelAvailable()) return;
  
  const fbq = (window as any).fbq as (...args: any[]) => void;
  if (fbq) {
    fbq('track', 'Contact');
  }
}

/**
 * Track CTA button clicks (Lead event)
 */
export function trackCTAClick(ctaName?: string): void {
  if (!isPixelAvailable()) return;
  
  const params = ctaName ? { content_name: ctaName } : undefined;
  const fbq = (window as any).fbq as (...args: any[]) => void;
  if (fbq) {
    fbq('track', 'Lead', params);
  }
}

/**
 * Track pricing CTA clicks (InitiateCheckout event)
 */
export function trackInitiateCheckout(value?: number, currency: string = 'BRL'): void {
  if (!isPixelAvailable()) return;
  
  const params = value
    ? { value: value, currency: currency }
    : undefined;
  const fbq = (window as any).fbq as (...args: any[]) => void;
  if (fbq) {
    fbq('track', 'InitiateCheckout', params);
  }
}

/**
 * Track content views (ViewContent event)
 */
export function trackViewContent(contentName?: string, contentType?: string): void {
  if (!isPixelAvailable()) return;
  
  const params: Record<string, any> = {};
  if (contentName) params.content_name = contentName;
  if (contentType) params.content_type = contentType;
  
  const fbq = (window as any).fbq as (...args: any[]) => void;
  if (fbq) {
    if (Object.keys(params).length > 0) {
      fbq('track', 'ViewContent', params);
    } else {
      fbq('track', 'ViewContent');
    }
  }
}

/**
 * Track custom events
 */
export function trackCustomEvent(eventName: string, params?: Record<string, any>): void {
  if (!isPixelAvailable()) return;
  
  const fbq = (window as any).fbq as (...args: any[]) => void;
  if (fbq) {
    fbq('trackCustom', eventName, params);
  }
}

