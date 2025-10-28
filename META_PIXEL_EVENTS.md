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
  - Cold Call Section: `src/components/sections/ColdCallSection.tsx`
  - Community Section: `src/components/sections/CommunitySection.tsx`

#### ViewContent Events:
| Section | content_name | content_category |
|---------|-------------|------------------|
| Hero Section | Hero Section | hero |
| Pricing Section | Pricing Strategic Section | pricing |
| Cold Call Section | Cold Call Section | cold-call |
| Community Section | Community Section | community |

### 3. Lead
- **Event Type**: Standard event
- **Purpose**: Track user engagement and interactions
- **Parameters**: Varies by interaction type
- **Locations**: Multiple sections

#### Lead Events - CTA Buttons:
| Location | content_name | content_category | content_type |
|----------|-------------|------------------|--------------|
| Hero CTA | Hero Section - CTA Button | hero | button |
| Final CTA | Final CTA Section - Main Button | final-cta | button |

#### Lead Events - FAQ Expansion:
| Parameter | Description |
|-----------|-------------|
| content_type | 'faq' |
| content_category | 'engagement' |
| content_id | FAQ item number (1-based) |
| content_name | FAQ question text |

#### Lead Events - Community Join:
| Parameter | Description |
|-----------|-------------|
| content_type | 'community' |
| content_name | 'Join WhatsApp Community' |
| content_category | 'engagement' |
| Location | `src/components/sections/CommunitySection.tsx` |

#### Lead Events - Video Opens:
| Parameter | Description |
|-----------|-------------|
| content_type | 'video' or video category |
| content_name | Video title (optional) |
| Locations | Cold Call Section, Social Proof Section |

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
  - `content_name`: 'Escuderia Pódium'
  - `content_type`: 'product'
  - `value`: 1850
  - `currency`: 'BRL'
  - `num_items`: 1
- **Locations**: 
  - `src/components/sections/PricingStrategicSection.tsx`
  - `src/components/sections/ColdCallSection.tsx`

## Function Signatures

### trackWhatsAppClick(contentName?, sectionName?)
Tracks WhatsApp button clicks as Contact events.

### trackCTAClick(ctaName?, contentCategory?)
Tracks CTA button clicks as Lead events.

### trackInitiateCheckout(value?, currency?)
Tracks checkout initiation with product details.

### trackViewContent(contentName?, contentCategory?)
Tracks content/section views.

### trackFAQExpansion(questionNumber?, questionText?)
Tracks FAQ item expansions as Lead events.

### trackCommunityJoin()
Tracks community join button clicks as Lead events.

### trackVideoOpen(videoName?, contentType?)
Tracks video modal opens as Lead events.

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
- **Content Engagement**: ViewContent events from sections
- **Purchase Intent**: InitiateCheckout events
- **Video Engagement**: Lead events from video opens
- **FAQ Engagement**: Lead events from FAQ expansions
- **Community Interest**: Lead events from community joins

## Testing Checklist
- [ ] PageView fires on page load
- [ ] ViewContent fires when scrolling to sections (Hero, Pricing, Cold Call, Community)
- [ ] Lead fires on CTA clicks (Hero, Final CTA)
- [ ] Lead fires on FAQ expansions
- [ ] Lead fires on community join clicks
- [ ] Lead fires on video modal opens (Cold Call, Social Proof)
- [ ] Contact fires on WhatsApp clicks
- [ ] InitiateCheckout fires on pricing buttons (Pricing Strategic, Cold Call)
- [ ] All parameters visible in Meta Events Manager

## Support
For issues or questions, check:
- [Meta Pixel Documentation](https://www.facebook.com/business/help/742478679120153)
- [Standard Events Reference](https://developers.facebook.com/docs/meta-pixel/reference)
