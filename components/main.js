// ========================================
// MARTINEZ WELDING - MAIN JAVASCRIPT
// ========================================

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100
  });

  // Initialize Lottie Animation
  initLottieAnimation();

  // Navbar scroll effect
  initNavbarScroll();

  // Smooth scroll for anchor links
  initSmoothScroll();
});

// ========================================
// LOTTIE ANIMATION
// ========================================
function initLottieAnimation() {
  const animationContainer = document.getElementById('lottie-animation');

  if (animationContainer) {
    // Create Lottie player element
    const player = document.createElement('lottie-player');
    player.setAttribute('src', 'https://lottie.host/4c3d8c8e-8f3e-4d3e-9c3e-8f3e4c3d8c8e/9KqBxKqBxK.json');
    player.setAttribute('background', 'transparent');
    player.setAttribute('speed', '1');
    player.setAttribute('style', 'width: 100%; height: auto;');
    player.setAttribute('loop', '');
    player.setAttribute('autoplay', '');

    // Fallback: Use a welding-themed SVG if Lottie fails
    player.addEventListener('error', function () {
      animationContainer.innerHTML = createWeldingSVG();
    });

    animationContainer.appendChild(player);

    // Fallback timeout
    setTimeout(() => {
      if (!player.shadowRoot && animationContainer.children.length === 1) {
        animationContainer.innerHTML = createWeldingSVG();
      }
    }, 3000);
  }
}

// ========================================
// FALLBACK SVG ANIMATION
// ========================================
function createWeldingSVG() {
  return `
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <!-- Spark animation -->
        <style>
          @keyframes spark {
            0%, 100% { opacity: 0; transform: translateY(0) scale(0); }
            50% { opacity: 1; transform: translateY(-20px) scale(1); }
          }
          .spark {
            animation: spark 2s ease-in-out infinite;
          }
          .spark:nth-child(2) { animation-delay: 0.3s; }
          .spark:nth-child(3) { animation-delay: 0.6s; }
          .spark:nth-child(4) { animation-delay: 0.9s; }
          .spark:nth-child(5) { animation-delay: 1.2s; }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .rotating { 
            transform-origin: center;
            animation: rotate 20s linear infinite;
          }
          
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .pulse {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        </style>
      </defs>
      
      <!-- Background circle -->
      <circle cx="250" cy="250" r="200" fill="#929a68" opacity="0.1" class="rotating"/>
      
      <!-- Welding torch -->
      <g transform="translate(250, 250)">
        <!-- Torch body -->
        <rect x="-15" y="-120" width="30" height="100" rx="5" fill="#2a2a2a"/>
        <rect x="-12" y="-110" width="24" height="80" rx="3" fill="#3a3a3a"/>
        
        <!-- Torch tip -->
        <polygon points="0,-120 -10,-130 10,-130" fill="#1a1a1a"/>
        
        <!-- Flame/Arc -->
        <g class="pulse" filter="url(#glow)">
          <ellipse cx="0" cy="-135" rx="25" ry="15" fill="#929a68" opacity="0.8"/>
          <ellipse cx="0" cy="-140" rx="15" ry="10" fill="#ecead6" opacity="0.9"/>
        </g>
        
        <!-- Sparks -->
        <g>
          <circle class="spark" cx="-20" cy="-130" r="3" fill="#ecead6"/>
          <circle class="spark" cx="15" cy="-135" r="2.5" fill="#929a68"/>
          <circle class="spark" cx="-10" cy="-145" r="2" fill="#ecead6"/>
          <circle class="spark" cx="20" cy="-125" r="2.5" fill="#8c5d1d"/>
          <circle class="spark" cx="0" cy="-150" r="2" fill="#ecead6"/>
        </g>
        
        <!-- Handle -->
        <rect x="-20" y="-30" width="40" height="60" rx="8" fill="#1a1a1a"/>
        <rect x="-15" y="-25" width="30" height="50" rx="6" fill="#2a2a2a"/>
        
        <!-- Grip lines -->
        <line x1="-15" y1="-15" x2="15" y2="-15" stroke="#000000" stroke-width="2"/>
        <line x1="-15" y1="0" x2="15" y2="0" stroke="#000000" stroke-width="2"/>
        <line x1="-15" y1="15" x2="15" y2="15" stroke="#000000" stroke-width="2"/>
      </g>
      
      <!-- Decorative gears -->
      <g opacity="0.3" class="rotating">
        <circle cx="100" cy="100" r="30" fill="none" stroke="#929a68" stroke-width="3"/>
        <circle cx="100" cy="100" r="20" fill="none" stroke="#929a68" stroke-width="2"/>
        
        <circle cx="400" cy="380" r="25" fill="none" stroke="#8c5d1d" stroke-width="3"/>
        <circle cx="400" cy="380" r="15" fill="none" stroke="#8c5d1d" stroke-width="2"/>
      </g>
      
      <!-- Text -->
      <text x="250" y="420" text-anchor="middle" font-family="Outfit, sans-serif" font-size="28" font-weight="700" fill="#929a68">
        Martinez & Sons Welding
      </text>
    </svg>
  `;
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// PHONE NUMBER TRACKING (Optional)
// ========================================
function trackPhoneClick() {
  // Add analytics tracking here if needed
  console.log('Phone number clicked');
}

// Add click tracking to all phone links
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', trackPhoneClick);
});
