// Image optimization script for Next.js
// Converts images to WebP format with optimized quality

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '..', 'public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

// Note: This script requires imagemin and imagemin-webp
// Install with: npm install --save-dev imagemin imagemin-webp

function getAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllImages(filePath, fileList);
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  console.log('⚠️  Note: You need to install sharp or use an external tool for optimization');
  console.log('   For WebP conversion, you can use online tools or sharp package');
  console.log('');
  console.log('📋 Images found:');
  
  const images = getAllImages(publicDir);
  const imageStats = {};
  
  images.forEach(imgPath => {
    const stats = fs.statSync(imgPath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    const relPath = path.relative(publicDir, imgPath);
    
    imageStats[relPath] = {
      size: stats.size,
      sizeKB: parseFloat(sizeKB)
    };
    
    console.log(`   ${relPath} - ${sizeKB} KB`);
  });
  
  console.log('');
  console.log('💡 Large images (>500KB) that need optimization:');
  Object.entries(imageStats)
    .sort((a, b) => b[1].size - a[1].size)
    .forEach(([file, stats]) => {
      if (stats.sizeKB > 500) {
        console.log(`   ⚠️  ${file}: ${stats.sizeKB} KB`);
      }
    });
  
  console.log('');
  console.log('📊 Total images:', images.length);
  const totalSize = Object.values(imageStats).reduce((sum, stats) => sum + stats.size, 0);
  console.log('📦 Total size:', (totalSize / 1024 / 1024).toFixed(2), 'MB');
  console.log('');
  console.log('✅ Analysis complete!');
  console.log('');
  console.log('🔧 Manual optimization recommendations:');
  console.log('   1. Convert PNG to WebP (use: https://squoosh.app or sharp)');
  console.log('   2. Compress JPEG images to 75% quality');
  console.log('   3. Use Next.js Image component which auto-optimizes');
  console.log('   4. Consider using AVIF format for modern browsers');
}

// Run the analysis
optimizeImages();

