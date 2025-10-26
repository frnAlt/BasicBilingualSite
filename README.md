# 🎵 Basic Knowledge of Singing

A beautiful, fully responsive, bilingual (Bangla + English) educational website for learning singing, Bangla cultural songs, and music instruments.

**Written by:** Muhammad Mahin  
**Developed by:** Farhan Muh Tasim  
**Copyright:** © 2025 Farhan Muh Tasim

---

## 📋 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Quick Start](#-quick-start)
- [Customization Guide](#-customization-guide)
  - [Adding Your Photos](#1-adding-your-photos)
  - [Adding Social Media URLs](#2-adding-social-media-urls)
  - [Changing Content](#3-changing-content)
  - [Customizing Colors & Theme](#4-customizing-colors--theme)
  - [Adding More YouTube Videos](#5-adding-more-youtube-videos)
- [Deployment](#-deployment)
  - [GitHub Pages](#github-pages)
  - [Vercel](#vercel)
  - [Replit](#replit)
  - [Netlify](#netlify)
- [File Structure](#-file-structure)
- [Technologies Used](#-technologies-used)
- [Browser Support](#-browser-support)
- [License](#-license)
- [Support](#-support)

---

## ✨ Features

- 🌓 **Dark/Light Mode** - Toggle between themes with preference saved
- 🌐 **Bilingual** - Seamless switching between English and বাংলা
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Modern Design** - Glass-morphism effects, gradients, and smooth animations
- 📺 **YouTube Integration** - Embedded video tutorials
- 🎹 **Instrument Guides** - Harmonium, Tabla, Guitar, and Flute tutorials
- 🎤 **Singing Lessons** - Vocal warm-ups, breathing techniques, and pitch control
- 🔗 **Social Media Ready** - Placeholders for all major platforms
- ⚡ **Fast Loading** - Optimized performance with CDN resources
- ♿ **Accessible** - WCAG compliant with proper ARIA labels

---

## 🌐 Live Demo

Visit the live website: [Add your URL here after deployment]

---

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `public/index.html` in your web browser!

### Option 2: Using a Local Server (Recommended)

```bash
# Using Python 3
cd public
python -m http.server 8000

# Using Node.js (http-server)
npm install -g http-server
cd public
http-server

# Using PHP
cd public
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

---

## 🎨 Customization Guide

### 1. Adding Your Photos

Replace the placeholder images in the `public/assets/` folder with your own:

#### Required Images:

1. **Logo** (`logo.png`) - 500x500px recommended
   - Your singing education logo
   - Used in navbar and hero section
   - PNG format with transparent background recommended

2. **Singer Profile** (`singer.jpg`) - 800x800px recommended
   - Your professional photo
   - Square format works best
   - Good lighting and clear background

3. **Hero Banner** (`hero-banner.jpg`) - 1920x1080px recommended
   - Full-width background image
   - Should convey music/singing theme
   - Higher resolution for better quality

4. **Instruments** (`instruments.jpg`) - 1200x900px recommended
   - Photo of musical instruments
   - Can be used for all instrument cards or create separate images

5. **Cultural Songs** (`bangla-song.jpg`) - 1600x900px recommended
   - Traditional Bangla music performance
   - Cultural or folk music theme

6. **Favicon** (`favicon.png`) - 64x64px recommended
   - Small icon for browser tab
   - Should match your logo

#### How to Replace Images:

```bash
# Navigate to assets folder
cd public/assets/

# Replace with your images (keep the same filenames)
# Or update the filenames in index.html
```

**In `index.html`, find and update image paths:**
```html
<!-- Example: Change logo -->
<img src="./assets/logo.png" alt="Logo">

<!-- Change to your custom image -->
<img src="./assets/my-custom-logo.png" alt="Logo">
```

---

### 2. Adding Social Media URLs

Open `public/index.html` and find the **Contact & Social Media Section** (around line 650):

```html
<!-- YouTube -->
<a href="#" class="social-link" data-testid="link-youtube" aria-label="YouTube">
    <i class="fab fa-youtube text-4xl text-red-600"></i>
    <span class="mt-2 text-sm font-medium">YouTube</span>
</a>
```

**Replace the `#` with your actual URLs:**

```html
<!-- Example: Add your YouTube channel -->
<a href="https://www.youtube.com/@YourChannelName" class="social-link" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-youtube text-4xl text-red-600"></i>
    <span class="mt-2 text-sm font-medium">YouTube</span>
</a>

<!-- Example: Add your Facebook page -->
<a href="https://www.facebook.com/YourPageName" class="social-link" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-facebook text-4xl text-blue-600"></i>
    <span class="mt-2 text-sm font-medium">Facebook</span>
</a>

<!-- Example: Add your Instagram -->
<a href="https://www.instagram.com/yourusername" class="social-link" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-instagram text-4xl text-pink-600"></i>
    <span class="mt-2 text-sm font-medium">Instagram</span>
</a>

<!-- Example: Add your TikTok -->
<a href="https://www.tiktok.com/@yourusername" class="social-link" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-tiktok text-4xl text-gray-900 dark:text-white"></i>
    <span class="mt-2 text-sm font-medium">TikTok</span>
</a>

<!-- Example: Add your Spotify -->
<a href="https://open.spotify.com/artist/yourartistid" class="social-link" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-spotify text-4xl text-green-600"></i>
    <span class="mt-2 text-sm font-medium">Spotify</span>
</a>
```

**Adding More Social Platforms:**

You can add more platforms like Twitter, LinkedIn, etc:

```html
<!-- Twitter/X -->
<a href="https://twitter.com/yourusername" class="social-link" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-twitter text-4xl text-blue-400"></i>
    <span class="mt-2 text-sm font-medium">Twitter</span>
</a>

<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/yourprofile" class="social-link" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-linkedin text-4xl text-blue-700"></i>
    <span class="mt-2 text-sm font-medium">LinkedIn</span>
</a>

<!-- SoundCloud -->
<a href="https://soundcloud.com/yourusername" class="social-link" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-soundcloud text-4xl text-orange-500"></i>
    <span class="mt-2 text-sm font-medium">SoundCloud</span>
</a>
```

---

### 3. Changing Content

#### Updating Text Content:

**English Text:** Look for `<span data-lang="en">Your Text Here</span>`  
**Bangla Text:** Look for `<span data-lang="bn">আপনার টেক্সট এখানে</span>`

**Example - Changing About Section:**

```html
<!-- Find this in the About section -->
<span data-lang="en">
    Hello! I'm Muhammad Mahin, a passionate singer from Chattogram, Bangladesh.
</span>

<!-- Change to your own bio -->
<span data-lang="en">
    Hello! I'm [Your Name], a dedicated vocalist and music teacher with [X] years of experience.
</span>
```

#### Adding New Sections:

Copy an existing section and modify it:

```html
<!-- Add a new testimonials section -->
<section id="testimonials" class="py-16 md:py-24 bg-white dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="section-title">
                <span data-lang="en">Student Testimonials</span>
                <span data-lang="bn" style="display:none;">শিক্ষার্থীদের মতামত</span>
            </h2>
        </div>
        <!-- Add your testimonial cards here -->
    </div>
</section>
```

---

### 4. Customizing Colors & Theme

#### Method 1: Using TailwindCSS Classes

Colors are defined in the `<script>` tag in `index.html` (around line 30):

```javascript
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563eb',  // Change this blue color
                    dark: '#1d4ed8',     // Darker shade
                }
            }
        }
    }
}
```

**Popular Color Palettes:**

```javascript
// Purple Theme
primary: {
    DEFAULT: '#7c3aed',
    dark: '#6d28d9',
}

// Green Theme
primary: {
    DEFAULT: '#10b981',
    dark: '#059669',
}

// Red Theme
primary: {
    DEFAULT: '#ef4444',
    dark: '#dc2626',
}

// Orange Theme
primary: {
    DEFAULT: '#f97316',
    dark: '#ea580c',
}
```

#### Method 2: Custom CSS

Edit `public/style.css` to override styles:

```css
/* Change section title gradient */
.section-title {
    background: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Change hover effects */
.icon-btn:hover {
    background: rgba(249, 115, 22, 0.1);
    color: #f97316;
}
```

---

### 5. Adding More YouTube Videos

Find the **Video Tutorials Section** in `index.html` (around line 550):

```html
<!-- Add a new video card -->
<div class="glass-card p-4 hover-card">
    <div class="aspect-video rounded-lg overflow-hidden mb-4">
        <iframe 
            class="w-full h-full" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="Your Video Title"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        <span data-lang="en">Your Video Title</span>
        <span data-lang="bn" style="display:none;">আপনার ভিডিও শিরোনাম</span>
    </h3>
</div>
```

**How to get YouTube Video ID:**
- YouTube URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ` (everything after `v=`)
- Embed URL: `https://www.youtube.com/embed/dQw4w9WgXcQ`

---

## 🚀 Deployment

### GitHub Pages

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/frnAlt/singing-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/root` or `/docs` (if you move files there)
   - Click Save

3. **Important:** Move `public/` contents to root OR configure `_config.yml`
   ```bash
   # Option 1: Move files to root
   mv public/* .
   
   # Option 2: Update baseurl in _config.yml
   # baseurl: "/your-repo-name"
   ```

4. Your site will be live at: `https://frnAlt.github.io/repository-name/`

---

### Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. Follow the prompts and your site will be live instantly!

**Or use Vercel Dashboard:**
- Import your GitHub repository
- Vercel will auto-detect the `vercel.json` configuration
- Click Deploy

---

### Replit

1. **Create a new Repl:**
   - Choose "HTML, CSS, JS" template
   
2. **Upload your files:**
   - Upload all files from `public/` folder to the root
   
3. **Configure Run Command:**
   - In `.replit` file:
     ```
     run = "python3 -m http.server 8000"
     ```
   
4. **Click Run** - Your site will be live at the Replit URL!

---

### Netlify

1. **Drag & Drop:**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `public/` folder into the deploy area
   
2. **Or via Git:**
   - Connect your GitHub repository
   - Build settings: Leave empty (static site)
   - Publish directory: `public`
   - Click Deploy

3. **Custom Domain (Optional):**
   - Go to Domain Settings
   - Add your custom domain

---

## 📁 File Structure

```
basic-knowledge-of-singing/
│
├── public/                    # Main website files
│   ├── index.html            # Main HTML file
│   ├── style.css             # Custom CSS styles
│   ├── script.js             # JavaScript functionality
│   ├── favicon.png           # Browser tab icon
│   │
│   └── assets/               # Images and media
│       ├── logo.png          # Website logo
│       ├── singer.jpg        # Singer profile photo
│       ├── hero-banner.jpg   # Hero section background
│       ├── instruments.jpg   # Musical instruments photo
│       └── bangla-song.jpg   # Cultural songs image
│
├── _config.yml               # GitHub Pages configuration
├── vercel.json               # Vercel deployment config
└── README.md                 # This file
```

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive features
- **TailwindCSS** - Utility-first CSS framework (CDN)
- **Font Awesome** - Icon library
- **Google Fonts** - Inter, Poppins, Noto Sans Bengali
- **LocalStorage API** - Preference persistence
- **Intersection Observer API** - Scroll animations

---

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ Internet Explorer (not supported)

---

## 📄 License

© 2025 Farhan Muh Tasim. All rights reserved.

This website is created for educational purposes. You may use and modify the code for your own projects.

---

## 💬 Support

For questions, suggestions, or issues:

- **Email:** [Add your email]
- **GitHub:** https://github.com/frnAlt
- **Website:** [Add your website]

---

## 🙏 Acknowledgments

- **Muhammad Mahin** - Content and vision
- **Farhan Muh Tasim** - Development and design
- **TailwindCSS** - Amazing utility framework
- **Font Awesome** - Beautiful icons
- **Google Fonts** - Typography

---

## 📝 Changelog

### Version 1.0.0 (2025)
- Initial release
- Bilingual support (English/Bangla)
- Dark/Light theme
- Responsive design
- YouTube video integration
- Social media placeholders

---

## 🔮 Future Enhancements

- [ ] Add contact form with email integration
- [ ] Implement blog section for singing tips
- [ ] Add downloadable PDF resources
- [ ] Create student gallery
- [ ] Add audio player for vocal exercises
- [ ] Implement newsletter subscription
- [ ] Add search functionality
- [ ] Create admin panel for content management

---

**Made with ❤️ by Farhan Muh Tasim**

*Empowering singers through education and cultural preservation*
