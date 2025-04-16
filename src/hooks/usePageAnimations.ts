
import { useEffect } from 'react';
import { applyRevealAnimations, applyParallaxEffects, initializePageAnimations } from '@/utils/animations';

/**
 * Hook to add animations to any page
 */
const usePageAnimations = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const handleScroll = () => {
      applyRevealAnimations();
      applyParallaxEffects();
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations on page load for elements already in viewport
    setTimeout(() => {
      initializePageAnimations();
    }, 300);
    
    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default usePageAnimations;
