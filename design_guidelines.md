# Design Guidelines: Basic Knowledge of Singing

## Design Approach: Educational Platform with Cultural Warmth

**Selected Approach:** Hybrid of Material Design (for educational clarity) + Duolingo/Khan Academy patterns (for engaging learning experience)

**Key Design Principles:**
- Educational clarity with cultural authenticity
- Welcoming, approachable learning environment
- Bilingual content with equal visual weight
- Dark/light modes with proper contrast ratios
- Mobile-first responsive strategy

---

## Typography System

**Primary Font Family:** 'Inter' or 'Poppins' (Google Fonts)
- Clean, modern, excellent multilingual support
- Works well for both Bangla and English scripts

**Secondary Font:** 'Noto Sans Bengali' for Bangla-specific content
- Ensures proper rendering of Bengali characters

**Type Scale:**
- **Hero Headline:** 3xl (mobile) → 6xl (desktop), font-weight: 700
- **Section Titles:** 2xl (mobile) → 4xl (desktop), font-weight: 600
- **Card Titles:** xl → 2xl, font-weight: 600
- **Body Text:** base → lg, font-weight: 400
- **Captions/Labels:** sm, font-weight: 500

**Line Heights:** Relaxed (1.7-1.8) for better readability in educational content

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- **Section Padding:** py-16 (mobile) → py-24 (desktop)
- **Card Spacing:** p-6 → p-8
- **Element Gaps:** gap-6 → gap-8
- **Container Max-Width:** max-w-7xl for content sections

**Grid Systems:**
- **Instrument Cards:** 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)
- **Video Embeds:** 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Cultural Songs:** 1 column (mobile) → 2 columns (desktop)

---

## Component Library

### Navigation Bar
- **Structure:** Fixed top navigation with backdrop blur
- **Height:** h-16 (mobile) → h-20 (desktop)
- **Content:** Logo (left) + Menu links (center) + Theme toggle + Language switcher (right)
- **Mobile:** Hamburger menu with slide-in drawer from right
- **Glass Effect:** bg-white/80 dark:bg-gray-900/80 with backdrop-blur-md
- **Shadow:** subtle drop shadow for depth

### Hero Section
- **Layout:** Full viewport height (min-h-screen) with centered content
- **Background:** Large hero image showing a singer or musical performance
- **Image Treatment:** Gradient overlay (from transparent to semi-dark) for text readability
- **Content Structure:** Logo at top → Main headline → Subheadline → Primary CTA button
- **CTA Button:** Large, prominent with blurred background backdrop
- **Spacing:** Generous vertical spacing between elements (space-y-8)

### Section Layouts
- **Pattern:** Alternating left-right content blocks for visual rhythm
- **Background:** Subtle gradient transitions between sections
- **Header:** Section title + short description centered above content

### Card Components

**Educational Cards (Learn Singing, Instruments):**
- **Style:** Glass-morphism effect with subtle borders
- **Structure:** Icon/Image (top) → Title → Description → Optional CTA
- **Padding:** p-6 → p-8
- **Border Radius:** rounded-2xl
- **Shadow:** hover:shadow-xl with smooth transition
- **Height:** Equal heights within same row (h-full)

**Video Cards:**
- **Aspect Ratio:** 16:9 maintained across all devices
- **Border Radius:** rounded-xl
- **Shadow:** shadow-lg
- **Spacing:** mb-4 for title below video

### Theme Toggle & Language Switcher
- **Position:** Top-right corner of navbar
- **Style:** Icon buttons with subtle background circles
- **Size:** w-10 h-10 with icons sized at w-5 h-5
- **Spacing:** gap-3 between toggle buttons
- **Hover:** Scale animation (scale-110) with smooth transition

### Footer
- **Height:** Generous py-12
- **Structure:** Three columns (desktop): About/Links/Social → Single column (mobile)
- **Typography:** Smaller text (text-sm) with muted colors
- **Border:** Top border with subtle accent color

---

## Visual Design Elements

### Glass-Morphism Cards
- **Background:** bg-white/70 dark:bg-gray-800/70
- **Backdrop:** backdrop-blur-lg
- **Border:** border border-white/20 dark:border-gray-700/30
- **Shadow:** shadow-xl

### Gradient Backgrounds
- **Hero Section:** Diagonal gradient from warm to cool tones
- **Section Dividers:** Subtle gradients between major sections
- **Card Hovers:** Gradient border animation on hover

### Button Styles

**Primary CTA:**
- **Size:** px-8 py-4 (generous touch targets)
- **Border Radius:** rounded-full
- **Typography:** font-semibold text-base → text-lg
- **Background:** Solid color with subtle gradient
- **Hover:** Scale (105%) + brightness increase
- **On Images:** backdrop-blur-md with semi-transparent background

**Secondary Buttons:**
- **Style:** Outline style with transparent background
- **Border:** 2px solid border
- **Hover:** Filled background transition

---

## Animations

**Page Load:**
- Fade-in animations for hero content (stagger children)
- Cards slide-up on scroll into view (subtle 20px movement)

**Interactions:**
- **Hover:** Smooth scale and shadow transitions (duration-300)
- **Theme Toggle:** Color transitions over 500ms
- **Language Switch:** Fade-out/fade-in content swap (duration-200)
- **Scroll:** Smooth scroll behavior between sections

**Navigation:**
- Mobile menu slides in from right with backdrop overlay
- Smooth scrolling to anchor sections

---

## Images

### Hero Image
- **Placement:** Full-width background of hero section
- **Subject:** Professional singer performing or music lesson in progress
- **Treatment:** Dark gradient overlay (0% top → 60% bottom) for text contrast
- **Size:** Minimum 1920x1080px for desktop

### Section Images
- **Singer Portrait (About Section):** Circular or rounded-2xl, positioned beside text content, approximately 400x400px
- **Instrument Images:** Square format (1:1 ratio) for Harmonium, Tabla, Guitar, Flute cards, approximately 300x300px each
- **Cultural Songs:** Illustrative images of Bangla cultural performances, 16:9 ratio, approximately 600x400px
- **Logo:** Clean, modern design incorporating musical elements, used in navbar and footer

---

## Responsive Breakpoints

- **Mobile:** Default (up to 768px) - Single column, stacked layout
- **Tablet:** md: (768px+) - Two-column grids, expanded navbar
- **Desktop:** lg: (1024px+) - Multi-column layouts, full navigation
- **Wide:** xl: (1280px+) - Maximum content width with centered container

---

## Dark/Light Mode Specifications

**Light Mode:**
- Background: Pure white or very light gray (50-100)
- Text: Dark gray (700-900)
- Cards: White with subtle shadows

**Dark Mode:**
- Background: Very dark gray (900-950)
- Text: Light gray (100-200)
- Cards: Dark gray (800) with lighter borders
- Accent: Slightly brighter accent colors for better visibility

**Transition:** All color changes animate smoothly (duration-300)

---

## Accessibility Standards

- **Color Contrast:** WCAG AA minimum (4.5:1 for body text, 3:1 for large text)
- **Focus States:** Clear focus rings on all interactive elements
- **Touch Targets:** Minimum 44x44px for all buttons and links
- **Alt Text:** Descriptive alt text for all images
- **Language Tags:** Proper lang attributes switch between "en" and "bn"