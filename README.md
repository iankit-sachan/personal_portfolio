# Ankit Kumar - Portfolio Website

A modern, fully-featured portfolio website built with React, TypeScript, Tailwind CSS, and Supabase. Features stunning 3D animations, smooth scrolling, and a responsive design.

## Features

- **Dynamic Data Loading**: All content is loaded from Supabase database
- **3D Hero Section**: Interactive 3D animations using Three.js and React Three Fiber
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Modern UI**: Clean, professional design with gradient accents
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **Loading Screen**: Professional loading animation on initial page load
- **Scroll to Top**: Convenient button to return to the top of the page

## Sections

1. **Hero** - Eye-catching introduction with 3D animations
2. **About** - Personal bio and education timeline
3. **Skills** - Categorized technical skills display
4. **Projects** - Featured projects with descriptions and links
5. **Experience** - Work experience and internships
6. **Certifications** - Professional certifications from leading organizations
7. **Contact** - Contact information and message form
8. **Footer** - Quick links and social media

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, React Three Fiber
- **3D Graphics**: Three.js, React Three Drei
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **Icons**: Lucide React

## Database Schema

The portfolio uses Supabase with the following tables:

- `profiles` - Personal information and bio
- `education` - Educational qualifications
- `experience` - Work experience and internships
- `projects` - Portfolio projects
- `certifications` - Professional certifications
- `skills` - Technical skills categorized by type
- `achievements` - Achievements and hobbies

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env`:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Scene3D.tsx
│   ├── ScrollToTop.tsx
│   └── Skills.tsx
├── hooks/              # Custom React hooks
│   └── usePortfolioData.ts
├── lib/                # Utility libraries
│   └── supabase.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Customization

To update your portfolio content:

1. Update the data in your Supabase database tables
2. The website will automatically reflect the changes
3. No code modifications needed for content updates

## Performance

- Optimized bundle size with code splitting
- Lazy loading of heavy components
- Efficient database queries with proper indexing
- Responsive images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email**: ankitsachan982@gmail.com
- **LinkedIn**: [linkedin.com/in/techankit10](https://linkedin.com/in/techankit10)
- **GitHub**: [github.com/iankit-sachan](https://github.com/iankit-sachan)

---

Built with ❤️ using React, TypeScript, and Supabase
