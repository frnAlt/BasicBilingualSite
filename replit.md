# Basic Knowledge of Singing

## Overview

This is a bilingual (English/Bangla) educational website for learning singing, Bangla cultural songs, and music instruments. The project features a full-stack architecture with a React frontend and Express backend, designed to provide an engaging learning experience with dark/light mode support, YouTube video integration, and comprehensive music education content.

The website serves as a platform to teach vocal techniques, instrument tutorials (Harmonium, Tabla, Guitar, Flute), and Bangla cultural songs through a modern, responsive interface.

**Author:** Muhammad Mahin  
**Developer:** Farhan Muh Tasim

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** React 18+ with TypeScript
- **Build Tool:** Vite for fast development and optimized production builds
- **Routing:** Wouter for lightweight client-side routing
- **State Management:** TanStack React Query for server state management
- **UI Framework:** Radix UI primitives with custom shadcn/ui components
- **Styling:** TailwindCSS with custom design system extending neutral base colors
- **Type Safety:** Full TypeScript implementation with strict mode enabled

**Design System:**
- Uses shadcn/ui component library (New York style variant)
- Custom CSS variables for theming with dark/light mode support
- Glass-morphism effects and gradient backgrounds
- Responsive breakpoints: mobile-first approach (768px mobile breakpoint)
- Typography: Inter/Poppins for English, Noto Sans Bengali for Bangla text
- Animation support with Framer Motion patterns

**Key Design Decisions:**
- **Problem:** Need for bilingual support with equal visual weight for both languages
- **Solution:** Separate font stacks optimized for each script, with language toggle functionality
- **Rationale:** Ensures proper rendering and readability for both English and Bengali characters

### Backend Architecture

**Server:** Express.js with TypeScript
- **Runtime:** Node.js with ES modules
- **Development:** tsx for TypeScript execution in development
- **Production Build:** esbuild for fast, optimized bundling
- **API Pattern:** RESTful API structure with `/api` prefix routing

**Storage Layer:**
- **In-Memory Storage:** MemStorage class implementing IStorage interface for development
- **Interface-Driven:** Abstracted storage interface allowing easy swap to database implementations
- **User Management:** Basic user schema with username/password fields (prepared for authentication)

**Key Architectural Decisions:**
- **Problem:** Need flexible data persistence that can scale from development to production
- **Solution:** Storage abstraction with interface-based design (IStorage)
- **Rationale:** Allows starting with in-memory storage and seamlessly migrating to PostgreSQL when needed
- **Alternatives:** Could have started directly with database, but abstraction provides development flexibility

### External Dependencies

**Database (Configured, Not Currently Used):**
- **PostgreSQL:** Via Neon serverless driver (`@neondatabase/serverless`)
- **ORM:** Drizzle ORM with Drizzle Kit for migrations
- **Schema Management:** Type-safe schema definitions with Drizzle Zod integration
- **Connection:** DATABASE_URL environment variable required when database is activated

**Third-Party Services:**
- **YouTube API:** Video embedding for tutorial content (uses iframe embeds)
  - Example videos configured for singing tutorials
  - Responsive aspect ratio handling with Radix UI AspectRatio component
  
**CDN Resources:**
- **Google Fonts:** Inter, Poppins, Noto Sans Bengali for typography
- **Font Awesome:** Icon library for UI elements
- **TailwindCSS CDN:** Used in static HTML version (`public/index.html`)

**Development Tools:**
- **Replit Integration:** 
  - Runtime error modal overlay
  - Cartographer for code navigation
  - Development banner for Repl environment
- **Session Management:** connect-pg-simple for PostgreSQL session storage (when database enabled)

**Deployment Platforms:**
- **Vercel:** Configured with `vercel.json` for static site deployment
- **GitHub Pages:** Compatible with `_config.yml` (Jekyll compatibility)
- **Netlify/Replit:** General deployment support

### Data Schema

**User Model** (PostgreSQL schema via Drizzle):
```typescript
- id: UUID (auto-generated primary key)
- username: text (unique, not null)
- password: text (not null)
```

**Schema Validation:**
- Zod schemas generated from Drizzle tables
- Type-safe insertUser schema for user creation
- Runtime validation with `drizzle-zod` integration

### Content Structure

**Static Assets:**
- Logo, singer photos, instrument images, Bangla song imagery
- Favicon support
- Hero banner images
- Located in `attached_assets` and `public/assets` directories

**Page Sections:**
1. Home - Hero with welcome text
2. About - Information about Muhammad Mahin
3. Learn Singing - Vocal techniques (warm-ups, breathing, pitch control)
4. Bangla Cultural Songs - Bilingual tutorials
5. Instrument Tutorials - Harmonium, Tabla, Guitar, Flute guides
6. Video Tutorials - Embedded YouTube playlists
7. Contact/Social Media - Placeholder links for platforms

### Key Technical Patterns

**Client-Server Communication:**
- Fetch-based API requests with credential inclusion
- Centralized error handling with `throwIfResNotOk` helper
- Query client configuration with custom query functions
- Stale-time set to Infinity for stable educational content

**Theme Management:**
- CSS class-based dark mode (`class` strategy)
- localStorage persistence for theme preference
- CSS custom properties for color system
- Automatic system preference detection capability

**Responsive Strategy:**
- Mobile-first Tailwind utilities
- Custom mobile breakpoint hook (`useIsMobile`)
- Responsive grid systems for cards and videos
- Flexible layouts: 1-col mobile → 2-col tablet → 3-4 col desktop

**Form Handling:**
- React Hook Form integration with Zod resolvers
- Type-safe form validation
- Accessible form components from Radix UI