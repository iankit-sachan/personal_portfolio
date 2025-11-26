# Deployment Guide

## Quick Start

Your portfolio website is ready for deployment! Here's how to get it live:

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Make sure your `.env` file contains:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment Options

### 1. Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel settings
5. Deploy!

### 2. Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Create new site from Git
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables
7. Deploy!

### 3. GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. Render

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Static Site
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables
7. Deploy!

## Post-Deployment Checklist

- [ ] Test all sections load correctly
- [ ] Verify navigation works
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify social media links
- [ ] Test 3D animations performance
- [ ] Check all images load
- [ ] Verify Supabase connection

## Updating Content

To update your portfolio content:

1. Go to your Supabase dashboard
2. Navigate to the Table Editor
3. Update records in any table:
   - `profiles` - Personal information
   - `education` - Education history
   - `experience` - Work experience
   - `projects` - Portfolio projects
   - `certifications` - Professional certifications
   - `skills` - Technical skills
4. Changes appear immediately (no rebuild needed!)

## Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Enable Caching**: Configure CDN caching headers
3. **Code Splitting**: Consider lazy loading sections
4. **Monitoring**: Set up analytics to track performance

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS records

## Support

If you encounter any issues:
1. Check browser console for errors
2. Verify environment variables are set
3. Ensure Supabase database is accessible
4. Check build logs for deployment errors

## Security Notes

- Never commit `.env` file to Git
- Use environment variables for all sensitive data
- Keep Supabase keys secure
- Enable Row Level Security (RLS) policies

## Additional Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

Built with React, TypeScript, Tailwind CSS, and Supabase
