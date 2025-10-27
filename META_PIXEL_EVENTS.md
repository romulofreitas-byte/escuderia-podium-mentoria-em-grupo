# Meta Pixel Event Mapping Documentation

## Pixel Configuration
- **Pixel ID**: 680318171429216
- **Installation**: Manual implementation in `src/components/MetaPixel.tsx`
- **Consent**: Cookie consent required (marketing consent)

## Events Tracked

### 1. PageView
- **Event Type**: Automatic, standard event
- **Trigger**: When page loads
- **Parameters**: None (automatic)
- **Location**: `src/components/MetaPixel.tsx` (line 73)

### 2. ViewContent
- **Event Type**: Standard event
- **Purpose**: Track when users view specific content sections
- **Parameters**:
  - `content_name`: Section name
  - `content_category`: Section category (hero, pricing, etc.)
  - `content_type`: 'page-section' (default)
- **Locations**:
  - Hero Section: `src/components/sections/HeroSection.tsx`
  - Pricing Section: `src/components/sections/PricingStrategicSection.tsx`

#### ViewContent Events:
| Section | content_name | content_category |
|---------|-------------|------------------|
| Hero Section | Hero Section | hero |
| Pricing Section | Pricing Strategic Section | pricing |

### 3. Lead
- **Event Type**: Standard event
- **Purpose**: Track CTA button clicks
- **Parameters**:
  - `content_name`: Button/section identifier
  - `content_category`: CTA category (hero, final-cta, etc.)
  - `content_type`: 'button' (default)
- **Locations**:
  - Hero CTA: `src/components/sections/HeroSection.tsx`
  - Final CTA: `src/components/sections/FinalCTASection.tsx`

#### Lead Events:
| Location | content_name | content_category |
|----------|-------------|------------------|
| Hero CTA | Hero Section - CTA Button | hero |
| Final CTA | Final CTA Section - Main Button | final-cta |

### 4. Contact
- **Event Type**: Standard event
- **Purpose**: Track WhatsApp button clicks
- **Parameters**:
  - `content_category`: 'contact'
  - `content_type`: 'whatsapp-button'
  - `content_name`: Button identifier (optional)
  - `section`: Section where contact occurred (optional)
- **Locations**:
  - Contact Card: `src/components/sections/WhatsAppContactCard.tsx`
  - Pricing Section: `src/components/sections/PricingStrategicSection.tsx`
  - Final CTA Section: `src/components/sections/FinalCTASection.tsx`

#### Contact Events:
| Location | content_name | section |
|----------|-------------|---------|
| Contact Card | WhatsApp Card | Contact Section |
| Pricing | Pricing Strategic Section | Pricing WhatsApp |
| Final CTA | Final CTA Section | Final WhatsApp |

### 5. InitiateCheckout
- **Event Type**: Standard event
- **Purpose**: Track when users click to purchase
- **Parameters**:
  - `content_name`: 'Escuderia Podium'
  - `content_type`: 'product'
  - `value`: 1850
  - `currency`: 'BRL'
  - `num_items`: 1
- **Location**: `src/components/sections/PricingStrategicSection.tsx`

## Function Signatures

### trackWhatsAppClick(contentName?, sectionName?)
Tracks WhatsApp button clicks as Contact events.

### trackCTAClick(ctaName?, contentCategory?)
Tracks CTA button clicks as Lead events.

### trackInitiateCheckout(value?, currency?)
Tracks checkout initiation with product details.

### trackViewContent(contentName?, contentCategory?)
Tracks content/section views.

## Development Debugging

All events are logged in development mode with:
- Timestamp (Brazilian local time)
- Event name
- Parameters in table format

To test events, open browser console on localhost.

## Meta Events Manager Setup

### Event Configuration:
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Select Pixel ID: 680318171429216
3. View "Test Events" tab for real-time event verification
4. Use "Event Debugger" to view event parameters

### Recommended Custom Conversions:
- **High Intent Leads**: Contact events from pricing/final CTA
- **Engagement**: ViewContent events from hero section
- **Purchase Intent**: InitiateCheckout events

## Testing Checklist
- [ ] PageView fires on page load
- [ ] ViewContent fires when scrolling to sections
- [ ] Lead fires on CTA clicks
- [ ] Contact fires on WhatsApp clicks
- [ ] InitiateCheckout fires on pricing button
- [ ] All parameters visible in Meta Events Manager

## Support
For issues or questions, check:
- [Meta Pixel Documentation](https://www.facebook.com/business/help/742478679120153)
- [Standard Events Reference](https://developers.facebook.com/docs/meta-pixel/reference)
