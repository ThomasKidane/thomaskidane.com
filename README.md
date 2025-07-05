# Thomas Kidane - Portfolio Website

A stunning portfolio website featuring Apple's Liquid Glass effect, showcasing Thomas Kidane's profile as a Computer Science student at Duke University.

## 🌟 Features

- **Liquid Glass Effect**: Utilizes the cutting-edge `liquid-glass-react` package for Apple-style glass morphism
- **Interactive Controls**: Real-time customization panel for the liquid glass effect
- **Responsive Design**: Beautiful on all devices with Tailwind CSS
- **Modern Tech Stack**: Next.js 15, TypeScript, and React 19
- **Smooth Animations**: Elegant hover effects and transitions
- **Professional Layout**: Clean, modern design perfect for showcasing skills

## 🚀 Live Preview

The portfolio includes:
- **Personal Information**: Name, education, location
- **Academic Details**: Duke University, Class of 2028
- **Skills Showcase**: React, TypeScript, Python, Machine Learning, Web Development, Data Science
- **Social Links**: Email, LinkedIn, GitHub (ready for customization)
- **Interactive Glass Controls**: Experiment with different liquid glass modes and effects

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Effects**: liquid-glass-react
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for Vercel, Netlify, or any hosting platform

## 🎮 Interactive Features

### Liquid Glass Modes
- **Standard**: Classic liquid glass effect
- **Polar**: Polar coordinate-based distortion
- **Prominent**: Enhanced prominence effect
- **Shader**: Advanced shader-based rendering (experimental)

### Customizable Parameters
- **Displacement Scale**: Controls edge distortion intensity (0-200)
- **Blur Amount**: Adjusts backdrop blur (0-1)
- **Elasticity**: Controls liquid responsiveness (0-1)
- **Corner Radius**: Adjusts glass corner roundness (0-50px)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Navigate to the portfolio directory
cd Projects/portfolio

# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📱 Browser Compatibility

- ✅ **Chrome/Chromium**: Full support with all effects
- ✅ **Edge**: Full support with all effects  
- ⚠️ **Safari**: Partial support (no edge refraction)
- ⚠️ **Firefox**: Partial support (no edge refraction)

*Note: The liquid glass displacement effect is only fully visible in Chromium-based browsers due to SVG filter limitations in Safari and Firefox.*

## 🎨 Customization

### Personal Information
Update your details in `src/app/page.tsx`:
- Name and title
- Education information
- Location details
- Skills and interests
- Social media links

### Styling
Modify colors and effects in:
- `src/app/globals.css` - Global styles and animations
- `src/app/page.tsx` - Component-specific styling

### Liquid Glass Settings
Adjust default values in the component state:
```tsx
const [displacementScale, setDisplacementScale] = useState(100)
const [blurAmount, setBlurAmount] = useState(0.3)
const [elasticity, setElasticity] = useState(0.25)
// ... other settings
```

## 📦 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── globals.css       # Global styles & animations
│       ├── layout.tsx        # Root layout & metadata
│       └── page.tsx          # Main portfolio page
├── public/                   # Static assets
├── package.json             # Dependencies & scripts
└── README.md               # This file
```

## 🌐 Deployment

This portfolio is ready for deployment on:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'out' folder to Netlify
```

### Other Platforms
The built application in the `.next` folder can be deployed to any Node.js hosting service.

## 🎯 Performance Features

- **Optimized Images**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle splitting for faster loads
- **SEO Ready**: Complete meta tags and Open Graph support
- **Responsive**: Mobile-first design approach
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🔧 Environment Configuration

For production deployment, consider setting:
- `NEXT_PUBLIC_SITE_URL`: Your domain URL
- Analytics tracking IDs
- Contact form endpoints

## 📞 Contact & Updates

Update the contact information in the portfolio:
- **Email**: `thomas.kidane@duke.edu`
- **LinkedIn**: Update the href in social links
- **GitHub**: Update the href in social links

## 🎓 About Thomas Kidane

Computer Science Student at Duke University, Class of 2028, passionate about:
- Web Development & Modern Frameworks
- Machine Learning & AI Applications  
- Data Science & Analytics
- Open Source Contributions
- Technology Innovation

---

*Built with ❤️ using Next.js and the amazing liquid-glass-react library*
