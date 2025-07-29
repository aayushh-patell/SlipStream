# Deployment Configuration

This document outlines the deployment configuration for SlipStream.

## Build Configuration

The application is configured for production deployment with the following optimizations:

### Vite Build Settings
- **Code Splitting**: Automatic code splitting for optimal loading
- **Tree Shaking**: Dead code elimination for smaller bundle sizes
- **Asset Optimization**: Image and asset optimization
- **CSS Purging**: Unused CSS removal with Tailwind CSS

### Performance Optimizations
- **Lazy Loading**: Components are lazy-loaded to reduce initial bundle size
- **React Query Caching**: Intelligent data caching with 5-minute stale time
- **React.memo**: Strategic memoization for expensive components

## Environment Variables

Create a `.env.production` file with the following variables:

```bash
VITE_API_BASE_URL=https://api.slipstream.racing
VITE_ENVIRONMENT=production
VITE_SENTRY_DSN=your_sentry_dsn_here
```

## Build Scripts

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Type Check
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## Deployment Platforms

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Configure environment variables

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables

### GitHub Pages
1. Use the included GitHub Actions workflow
2. Enable GitHub Pages in repository settings
3. Source: GitHub Actions

## Performance Monitoring

The application is configured for:
- **Core Web Vitals**: LCP, FID, CLS monitoring
- **Error Tracking**: Integration-ready for Sentry
- **Analytics**: Ready for Google Analytics integration

## Security Headers

Recommended security headers for production:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
```

## Database Considerations

Currently using mock data. For production:
- Consider implementing a proper backend API
- Use a database like PostgreSQL or MongoDB
- Implement proper authentication and authorization
- Add rate limiting and caching layers
