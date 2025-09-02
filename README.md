# Karthi B - Portfolio Website

A modern, responsive portfolio website built with React, showcasing professional experience, skills, and projects.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with dark theme
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **Interactive**: Smooth animations, hover effects, and micro-interactions
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes
- **SEO Ready**: Semantic HTML5, meta tags, and Open Graph integration

## 🛠️ Tech Stack

- **Frontend**: React 18+ with functional components and hooks
- **Styling**: CSS Modules with custom design system
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion and CSS animations
- **Build Tool**: Vite for fast development and optimized builds
- **Code Quality**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header/          # Navigation header
│   ├── Hero/            # Landing section with animated background
│   ├── About/           # About me section
│   ├── Skills/          # Technical skills with progress bars
│   ├── Projects/        # Portfolio projects showcase
│   ├── Experience/      # Work experience timeline
│   ├── Education/       # Education and certifications
│   ├── Contact/         # Contact form and information
│   ├── Footer/          # Site footer
│   ├── FloatingIcons/   # Animated background icons
│   ├── LoadingSpinner/  # Loading component
│   └── ErrorBoundary/   # Error handling component
├── data/                # Static data and content
│   └── resume.js        # Resume data and content
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: > 1440px

## 🎨 Design System

### Colors
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #8b5cf6 (Purple)
- **Accent**: #ec4899 (Pink)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Orange)
- **Error**: #ef4444 (Red)
- **Background**: #0f172a (Dark Blue)
- **Surface**: #1e293b (Lighter Dark)

### Typography
- **Font Family**: Inter, system fonts
- **Headings**: 700 weight, 1.2 line height
- **Body**: 400 weight, 1.6 line height
- **Small Text**: 500 weight, 1.5 line height

### Spacing
- **Base Unit**: 8px
- **Scale**: 8px, 16px, 24px, 32px, 40px, 48px, 60px, 80px

## 🚀 Deployment

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your Git repository for automatic deployments

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Customization

### Updating Content

1. **Personal Information**: Edit `src/data/resume.js`
2. **Projects**: Update the projects array in `src/data/resume.js`
3. **Skills**: Modify the skills object in `src/data/resume.js`
4. **Logo**: Replace `public/logo.png` with your logo

### Styling

1. **Colors**: Update CSS custom properties in component modules
2. **Fonts**: Modify font imports in `src/index.css`
3. **Animations**: Adjust animation timings in component CSS modules

### Adding Sections

1. Create new component in `src/components/`
2. Add CSS module for styling
3. Import and add to `src/App.jsx`
4. Update navigation in `src/components/Header/Header.jsx`

## 📊 Performance Optimization

- **Code Splitting**: Components are lazy-loaded
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Use `npm run build` and analyze bundle size
- **Caching**: Static assets are cached with proper headers

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user motion preferences

## 🔍 SEO Optimization

- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: XML sitemap for search indexing
- **Performance**: Fast loading times and Core Web Vitals optimization

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed with `npm install`
2. **Styling Issues**: Check CSS module imports and class names
3. **Performance**: Use React DevTools Profiler to identify bottlenecks
4. **Accessibility**: Test with screen readers and keyboard navigation

### Development Tools

- **React DevTools**: Browser extension for debugging
- **Lighthouse**: Performance and accessibility auditing
- **Wave**: Web accessibility evaluation tool

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- **Email**: alex.johnson@email.com
- **LinkedIn**: [Karthi B](https://linkedin.com/in/alexjohnson)
- **GitHub**: [alexjohnson](https://github.com/alexjohnson)

---

Built with ❤️ using React and modern web technologies.