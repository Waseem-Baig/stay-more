
// Animation utility functions for consistent animations across the application

/**
 * Apply reveal animations to elements with specific classes
 */
export const applyRevealAnimations = () => {
  const reveals = document.querySelectorAll('.reveal');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

/**
 * Apply parallax effect to elements with parallax class
 */
export const applyParallaxEffects = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach((element) => {
    const scrollPosition = window.pageYOffset;
    const speedAttribute = element.getAttribute('data-speed');
    const speed = speedAttribute ? parseFloat(speedAttribute) : 0.5;
    
    // Use Element type assertion to access style property
    const htmlElement = element as HTMLElement;
    htmlElement.style.transform = `translateY(${scrollPosition * speed * -1}px)`;
  });
};

/**
 * Initialize all animations for a page
 */
export const initializePageAnimations = () => {
  // Call once to reveal elements initially in view
  applyRevealAnimations();
  applyParallaxEffects();
  
  // Add staggered animations to lists
  applyStaggeredAnimations();
  
  // Initialize button animations
  applyButtonAnimations();
  
  // Initialize icon animations
  applyIconAnimations();
  
  // Initialize section animations
  applySectionAnimations();
  
  // Initialize floating elements
  if (document.querySelector('.floating-elements-container')) {
    initializeFloatingElements();
  }
  
  // Initialize ripple effects on buttons
  initializeRippleEffects();
  
  // Initialize morphing buttons
  initializeMorphingButtons();
  
  // Initialize gradient flow
  initializeGradientFlow();
  
  // Initialize icon slide animations
  initializeIconSlideAnimations();
};

/**
 * Apply staggered animations to list items
 */
const applyStaggeredAnimations = () => {
  const staggerContainers = document.querySelectorAll('.stagger-container');
  
  staggerContainers.forEach((container) => {
    const items = container.querySelectorAll('.stagger-item');
    items.forEach((item, index) => {
      const htmlItem = item as HTMLElement;
      htmlItem.style.animationDelay = `${index * 100}ms`;
    });
  });
};

/**
 * Apply animations to buttons
 */
const applyButtonAnimations = () => {
  // Add hover effects to buttons
  const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary, .btn-pink');
  
  buttons.forEach((button) => {
    button.classList.add('transition-all', 'duration-300');
    
    // Add hover event listeners if needed
    button.addEventListener('mouseenter', () => {
      button.classList.add('scale-105', 'shadow-lg');
    });
    
    button.addEventListener('mouseleave', () => {
      button.classList.remove('scale-105', 'shadow-lg');
    });
  });
};

/**
 * Apply animations to icons
 */
const applyIconAnimations = () => {
  // Add subtle animations to icons
  const icons = document.querySelectorAll('svg:not(.no-animation)');
  
  icons.forEach((icon) => {
    // Add transition properties
    icon.classList.add('transition-all', 'duration-300');
    
    // Parent element (usually a button or container)
    const parent = icon.parentElement;
    
    if (parent) {
      // Add hover effects
      parent.addEventListener('mouseenter', () => {
        icon.classList.add('scale-110');
        
        // Add fill transition if possible
        const paths = icon.querySelectorAll('path');
        paths.forEach(path => {
          if (path.getAttribute('stroke') === 'currentColor') {
            path.setAttribute('data-original-stroke', 'currentColor');
            path.setAttribute('stroke', getComputedStyle(document.documentElement).getPropertyValue('--staymore-magenta').trim() || '#D946EF');
          }
        });
      });
      
      parent.addEventListener('mouseleave', () => {
        icon.classList.remove('scale-110');
        
        // Restore original stroke
        const paths = icon.querySelectorAll('path');
        paths.forEach(path => {
          const originalStroke = path.getAttribute('data-original-stroke');
          if (originalStroke) {
            path.setAttribute('stroke', originalStroke);
          }
        });
      });
      
      // Add pulse on hover for certain icons
      if (parent.classList.contains('pulse-on-hover')) {
        parent.addEventListener('mouseenter', () => {
          icon.classList.add('animate-pulse-soft');
        });
        
        parent.addEventListener('mouseleave', () => {
          icon.classList.remove('animate-pulse-soft');
        });
      }
      
      // Add spin on click for certain icons
      if (parent.classList.contains('spin-on-click')) {
        parent.addEventListener('click', () => {
          icon.classList.add('animate-spin-once');
          setTimeout(() => {
            icon.classList.remove('animate-spin-once');
          }, 500);
        });
      }
    }
  });
};

/**
 * Apply animations to page sections
 */
const applySectionAnimations = () => {
  // Add fade-in animations to sections
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section) => {
    section.classList.add('reveal');
    
    // Add specific animation class if not already present
    if (!section.classList.contains('fade-in-up') && 
        !section.classList.contains('fade-in-left') && 
        !section.classList.contains('fade-in-right')) {
      section.classList.add('fade-in-up');
    }
  });
  
  // Apply animations to images
  const images = document.querySelectorAll('img:not(.no-animation)');
  
  images.forEach((img) => {
    img.classList.add('transition-all', 'duration-500');
    
    // Add hover effect if it doesn't already have one
    if (!img.classList.contains('img-hover')) {
      img.classList.add('hover:scale-105');
    }
  });
};

/**
 * Initialize floating elements for background effect
 * Reduced quantity for a more pleasant experience
 */
export const initializeFloatingElements = () => {
  const floatingElementsContainer = document.querySelector('.floating-elements-container');
  if (!floatingElementsContainer) return;
  
  // Clear existing elements if any
  floatingElementsContainer.innerHTML = '';
  
  // Create floating elements - REDUCED FROM 15 TO 6
  const shapes = ['circle', 'square', 'droplet'];
  const colors = [
    'bg-staymore-pink',
    'bg-staymore-bright-pink',
    'bg-staymore-light-purple'
  ];
  
  // Reduced number of elements for a more pleasant, subtle effect
  for (let i = 0; i < 6; i++) {
    const element = document.createElement('div');
    
    // Random properties
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 20) + 15; // Smaller size range: 15-35px
    const left = Math.floor(Math.random() * 100); // 0-100%
    const speed = Math.floor(Math.random() * 30) + 15; // Slower speed: 15-45s
    const delay = Math.floor(Math.random() * 15); // 0-15s 
    const opacity = (Math.floor(Math.random() * 3) + 1) / 10; // 0.1-0.3 opacity (more subtle)
    
    // Set classes and styles
    element.classList.add('floating-element', color, 'fixed', 'pointer-events-none', 'z-0');
    
    if (shape === 'circle') {
      element.classList.add('rounded-full');
    } else if (shape === 'square') {
      element.classList.add('rounded-md');
    } else if (shape === 'droplet') {
      element.classList.add('droplet');
    }
    
    // Set style
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = `${left}%`;
    element.style.top = '-100px';
    element.style.opacity = opacity.toString();
    element.style.animation = `float ${speed}s linear ${delay}s infinite`;
    element.style.filter = 'blur(1px)';
    
    // Add to container
    floatingElementsContainer.appendChild(element);
  }
};

/**
 * Initialize ripple effects on buttons
 */
const initializeRippleEffects = () => {
  const rippleButtons = document.querySelectorAll('.btn-ripple');
  
  rippleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Fix TypeScript error by explicitly typing the event as MouseEvent
      const mouseEvent = e as MouseEvent;
      const x = mouseEvent.clientX - button.getBoundingClientRect().left;
      const y = mouseEvent.clientY - button.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
};

/**
 * Initialize morphing buttons
 */
const initializeMorphingButtons = () => {
  const morphButtons = document.querySelectorAll('.btn-morph');
  
  morphButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('btn-morphed');
    });
    
    button.addEventListener('mouseleave', () => {
      button.classList.remove('btn-morphed');
    });
  });
};

/**
 * Initialize gradient flow effect
 */
const initializeGradientFlow = () => {
  const gradientButtons = document.querySelectorAll('.btn-gradient-flow');
  
  gradientButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('gradient-flowing');
    });
    
    button.addEventListener('mouseleave', () => {
      button.classList.remove('gradient-flowing');
    });
  });
};

/**
 * Initialize icon slide animations
 */
const initializeIconSlideAnimations = () => {
  const slideButtons = document.querySelectorAll('.btn-icon-slide');
  
  slideButtons.forEach(button => {
    const icon = button.querySelector('svg');
    if (!icon) return;
    
    button.addEventListener('mouseenter', () => {
      icon.classList.add('icon-slide-in');
    });
    
    button.addEventListener('mouseleave', () => {
      icon.classList.remove('icon-slide-in');
    });
  });
};
