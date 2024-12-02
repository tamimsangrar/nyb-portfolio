# Deployment Guide

## Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

### Local Setup Steps
1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Access the site at `http://localhost:5173`

### Building for Production
1. Create production build
```bash
npm run build
```

2. Preview production build locally
```bash
npm run preview
```

## Domain Setup with GoDaddy

### 1. Purchase Domain
1. Go to [GoDaddy.com](https://www.godaddy.com)
2. Search for your desired domain name
3. Add to cart and complete purchase
4. Access your GoDaddy dashboard

### 2. Configure DNS Settings
1. Log in to GoDaddy account
2. Go to Domain Settings > DNS Management
3. Add the following records for Netlify:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   TTL: 600 seconds

   Type: CNAME
   Name: www
   Value: your-netlify-site.netlify.app
   TTL: 1 hour
   ```

## Deployment on Netlify

### 1. Prepare for Deployment
1. Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Ensure all environment variables are set in `.env.production`

### 2. Deploy to Netlify
1. Create Netlify account at [netlify.com](https://www.netlify.com)
2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Login to Netlify:
```bash
netlify login
```

4. Initialize Netlify site:
```bash
netlify init
```

5. Deploy:
```bash
netlify deploy --prod
```

### 3. Connect Custom Domain
1. Go to Netlify dashboard > Site settings
2. Navigate to "Domain management"
3. Click "Add custom domain"
4. Enter your GoDaddy domain
5. Follow Netlify's verification steps
6. Wait for DNS propagation (can take up to 48 hours)

## SSL/HTTPS Setup
1. In Netlify dashboard, go to Site settings > Domain management
2. Under HTTPS, click "Verify DNS configuration"
3. Enable "Force HTTPS"
4. Wait for SSL certificate provisioning

## Post-Deployment Checklist
- [ ] Verify all pages load correctly
- [ ] Test all interactive features
- [ ] Check mobile responsiveness
- [ ] Verify forms and contact functionality
- [ ] Test navigation and routing
- [ ] Check meta tags and SEO elements
- [ ] Verify SSL certificate is active
- [ ] Test load times and performance
- [ ] Monitor error tracking
- [ ] Set up analytics

## Troubleshooting

### Common Issues

#### DNS Issues
1. Verify DNS records are correct
2. Check propagation status at [whatsmydns.net](https://www.whatsmydns.net)
3. Wait for full propagation

#### Build Failures
1. Check build logs in Netlify
2. Verify all dependencies are included
3. Test build locally:
```bash
npm run build
```

#### SSL Certificate Issues
1. Verify DNS configuration
2. Check domain ownership verification
3. Contact Netlify support if needed

## Maintenance

### Regular Tasks
1. Update dependencies monthly
2. Monitor error logs
3. Check performance metrics
4. Update content as needed
5. Verify SSL certificate renewal

### Security
1. Keep dependencies updated
2. Monitor for vulnerabilities
3. Regularly update access credentials
4. Review security headers

## Monitoring

### Setup Analytics
1. Create Google Analytics account
2. Add tracking code to `index.html`
3. Set up custom events
4. Monitor user behavior

### Performance Monitoring
1. Use Lighthouse for audits
2. Monitor Core Web Vitals
3. Track page load times
4. Check mobile performance