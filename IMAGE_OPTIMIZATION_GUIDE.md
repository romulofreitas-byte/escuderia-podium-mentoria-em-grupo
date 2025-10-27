# Image Optimization Guide

## Current Status
The codebase has been optimized for automatic image conversion. Next.js will automatically serve WebP/AVIF formats when available.

## What Was Done

### 1. Next.js Configuration
- ✅ Added WebP and AVIF format support
- ✅ Configured responsive image sizes
- ✅ Set proper cache headers

### 2. Component Optimizations
- ✅ Reduced font weights (from 9 to 5)
- ✅ Simplified ProtectedImage component
- ✅ Added proper `sizes` attributes
- ✅ Reduced image quality to 75-80%
- ✅ Implemented lazy loading for below-fold sections

### 3. Lazy Loading
- ✅ All sections below the fold now lazy load
- ✅ Deferred third-party scripts (Meta Pixel)
- ✅ Optimized component bundle splitting

## Manual Image Optimization Required

Next.js will automatically convert images to WebP/AVIF, but you can manually optimize source images for better results:

### Critical Images to Optimize

#### Large Images (>1 MB):
- `romulo-hero-2.png` (2.6 MB) → Convert to WebP
- `background-podium-hero.jpg` (2 MB) → Compress to 75% quality
- `Mentor.png` (1.7 MB) → Convert to WebP
- `Mentor2.png` (1.7 MB) → Convert to WebP
- `Mentor.jpg` (1.6 MB) → Compress to 75% quality
- `IMG_0260.jpg` (1.6 MB) → Compress to 75% quality
- `Mentor3.png` (978 KB) → Convert to WebP
- `dores-piloto.jpg` (895 KB) → Compress to 75% quality

### Recommended Tools

1. **Squoosh** (https://squoosh.app/)
   - Drag and drop images
   - Select WebP format
   - Set quality to 75-80
   - Download optimized versions

2. **Sharp** (CLI)
   ```bash
   npm install sharp-cli -g
   sharp -i input.png -o output.webp --webp
   ```

3. **ImageMagick** (CLI)
   ```bash
   convert input.jpg -quality 75 output.webp
   ```

### Expected Results

- **Image size reduction**: 14.75 MB → ~3-4 MB (70-75% reduction)
- **Initial page load**: Faster by 2-3 seconds
- **LCP improvement**: From ~4-5s → ~2s
- **PageSpeed Score**: Expected 85-95+ on mobile, 95-100 on desktop

## Next Steps

1. ✅ Code optimizations complete
2. ⏳ Manually optimize large images using tools above
3. 📊 Test with Lighthouse/PageSpeed Insights after optimization
4. 🚀 Deploy and verify performance improvements

## Testing

Run the optimization analysis:
```bash
node scripts/optimize-images.js
```

This will show you which images need optimization.

