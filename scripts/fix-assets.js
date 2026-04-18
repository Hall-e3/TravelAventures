const fs = require('fs');
const path = require('path');

const assets = [
  {
    src: '/home/hall/.gemini/antigravity/brain/13677a48-ecdb-42f9-bf4b-42e2cb406f28/travel_aventures_final_logo_white_1776521790745.png',
    dest: '/home/hall/Downloads/AppTest/TravelAventures/assets/images/logo.png'
  },
  {
    src: '/home/hall/.gemini/antigravity/brain/13677a48-ecdb-42f9-bf4b-42e2cb406f28/travel_aventures_final_logo_white_1776521790745.png',
    dest: '/home/hall/Downloads/AppTest/TravelAventures/assets/images/icon.png'
  },
  {
    src: '/home/hall/.gemini/antigravity/brain/13677a48-ecdb-42f9-bf4b-42e2cb406f28/travel_aventures_final_logo_white_1776521790745.png',
    dest: '/home/hall/Downloads/AppTest/TravelAventures/assets/images/splash-icon.png'
  },
  {
    src: '/home/hall/.gemini/antigravity/brain/13677a48-ecdb-42f9-bf4b-42e2cb406f28/travel_aventures_final_logo_teal_1776521829257.png',
    dest: '/home/hall/Downloads/AppTest/TravelAventures/assets/images/favicon.png'
  },
  {
    src: '/home/hall/.gemini/antigravity/brain/13677a48-ecdb-42f9-bf4b-42e2cb406f28/travel_aventures_final_logo_teal_1776521829257.png',
    dest: '/home/hall/Downloads/AppTest/TravelAventures/assets/images/android-icon-background.png'
  },
  {
    src: '/home/hall/.gemini/antigravity/brain/13677a48-ecdb-42f9-bf4b-42e2cb406f28/travel_aventures_final_logo_white_1776521790745.png',
    dest: '/home/hall/Downloads/AppTest/TravelAventures/assets/images/android-icon-foreground.png'
  },
  {
    src: '/home/hall/.gemini/antigravity/brain/13677a48-ecdb-42f9-bf4b-42e2cb406f28/travel_aventures_final_logo_white_1776521790745.png',
    dest: '/home/hall/Downloads/AppTest/TravelAventures/assets/images/android-icon-monochrome.png'
  },
  {
    src: '/home/hall/.gemini/antigravity/brain/13677a48-ecdb-42f9-bf4b-42e2cb406f28/travel_aventures_final_logo_teal_1776521829257.png',
    dest: '/home/hall/Downloads/AppTest/landing/public/favicon.png'
  }
];

assets.forEach(asset => {
  try {
    if (fs.existsSync(asset.src)) {
      // Ensure destination directory exists
      const destDir = path.dirname(asset.dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      fs.copyFileSync(asset.src, asset.dest);
      console.log(`✅ Successfully installed: ${path.basename(asset.dest)}`);
    } else {
      console.error(`❌ Source not found: ${asset.src}`);
    }
  } catch (err) {
    console.error(`❌ Error copying ${asset.dest}:`, err.message);
  }
});
