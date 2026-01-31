# Martinez Welding - Landing Page

A professional, high-converting landing page for Martinez Welding services built with modern web technologies.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless adaptation to all screen sizes
- **Premium Aesthetics**: Modern dark theme with vibrant orange accents and smooth gradients
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging scroll animations
- **Interactive Elements**: Lottie animations with SVG fallback for hero section
- **Sticky Navigation**: Fixed navbar with scroll effects
- **SEO Optimized**: Semantic HTML, meta tags, and proper heading structure
- **Accessible**: WCAG compliant with proper contrast ratios and semantic markup
- **Fast Loading**: Optimized CSS and minimal dependencies

## 📁 Project Structure

```
martinezwelding/
├── index.html          # Main landing page
├── styles.css          # Complete design system and styles
├── components/
│   └── main.js        # JavaScript for animations and interactions
└── assets/            # Images and media files
```

## 🎨 Design System

### Color Palette
- **Primary Orange**: `hsl(25, 95%, 53%)` - Brand color for CTAs and accents
- **Dark Background**: `hsl(220, 20%, 10%)` - Main background
- **Steel Accent**: `hsl(200, 15%, 25%)` - Secondary elements
- **Text Colors**: High-contrast whites and grays for readability

### Typography
- **Display Font**: Outfit (headings)
- **Body Font**: Inter (paragraphs and UI)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: Vanilla JS for interactions
- **AOS**: Animate On Scroll library
- **Lottie**: Animation library with SVG fallback
- **Google Fonts**: Inter and Outfit font families

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🚀 Getting Started

1. **Open the project**:
   Simply open `index.html` in your web browser

2. **Local Development**:
   Use a local server for best results:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Customize**:
   - Update phone number in `index.html` (search for `tel:+15555551234`)
   - Modify colors in `styles.css` CSS variables
   - Add your own content and images

## 📞 Contact Information

Update the following in `index.html`:
- Phone: `(555) 555-1234` → Your actual number
- Email: `info@martinezwelding.com` → Your email
- Location: Update service area as needed

## ✨ Key Sections

1. **Navbar**: Sticky navigation with call-to-action button
2. **Hero**: Eye-catching headline with animated welding torch
3. **Features**: 6 service cards highlighting key benefits
4. **CTA Banner**: Conversion-focused call-to-action
5. **Footer**: Contact information and service links

## 🎯 Conversion Optimization

- Prominent phone number CTAs throughout
- Trust indicators (client count, guarantees)
- Clear value propositions
- Mobile-optimized for on-the-go users
- Fast loading for better engagement

## 📊 Performance

- Minimal external dependencies
- Optimized CSS with no framework bloat
- Lazy-loaded animations
- Efficient JavaScript with no jQuery

## 🔧 Customization Guide

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-orange: hsl(25, 95%, 53%);
  --dark-bg: hsl(220, 20%, 10%);
  /* ... */
}
```

### Adding New Sections
Follow the existing pattern:
```html
<section class="section" id="new-section">
  <div class="container">
    <!-- Your content -->
  </div>
</section>
```

### Modifying Animations
Adjust AOS settings in `components/main.js`:
```javascript
AOS.init({
  duration: 800,  // Animation duration
  offset: 100,    // Trigger offset
  once: true      // Animate only once
});
```

## 📄 License

This project is created for Martinez Welding. All rights reserved.

## 🤝 Support

For questions or support, contact the development team.

---

Built with ❤️ for Martinez Welding
