declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, any>) => void;
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
  
  window.fbq?.('track', eventName, params);
}

/**
 * Track WhatsApp button clicks (Contact event)
 */
export function trackWhatsAppClick(): void {
  if (!isPixelAvailable()) return;
  
  window.fbq?.('track', 'Contact');
}

/**
 * Track CTA button clicks (Lead event)
 */
export function trackCTAClick(ctaName?: string): void {
  if (!isPixelAvailable()) return;
  
  const params = ctaName ? { content_name: ctaName } : undefined;
  window.fbq?.('track', 'Lead', params);
}

/**
 * Track pricing CTA clicks (InitiateCheckout event)
 */
export function trackInitiateCheckout(value?: number, currency: string = 'BRL'): void {
  if (!isPixelAvailable()) return;
  
  const params = value
    ? { value: value, currency: currency }
    : undefined;
  window.fbq?.('track', 'InitiateCheckout', params);
}

/**
 * Track content views (ViewContent event)
 */
export function trackViewContent(contentName?: string, contentType?: string): void {
  if (!isPixelAvailable()) return;
  
  const params: Record<string, any> = {};
  if (contentName) params.content_name = contentName;
  if (contentType) params.content_type = contentType;
  
  window.fbq?.('track', 'ViewContent', Object.keys(params).length > 0 ? params : undefined);
}

/**
 * Track custom events
 */
export function trackCustomEvent(eventName: string, params?: Record<string, any>): void {
  if (!isPixelAvailable()) return;
  
  window.fbq?.('trackCustom', eventName, params);
}

