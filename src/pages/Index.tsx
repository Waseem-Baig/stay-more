
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MissionPreview from '@/components/MissionPreview';
import ProductsPreview from '@/components/ProductsPreview';
import Testimonials from '@/components/Testimonials';
import SolutionsPreview from '@/components/SolutionsPreview';
import EmpowermentPreview from '@/components/EmpowermentPreview';
import NewsletterSignup from '@/components/NewsletterSignup';
import usePageAnimations from '@/hooks/usePageAnimations';
import { initializeFloatingElements } from '@/utils/animations';

const Index = () => {
  // Use our custom hook for handling all animations
  usePageAnimations();

  useEffect(() => {
    // Make sure floating elements are initialized when the page loads
    const floatingElementsContainer = document.querySelector('.floating-elements-container');
    if (!floatingElementsContainer) {
      const container = document.createElement('div');
      container.className = 'floating-elements-container fixed inset-0 overflow-hidden pointer-events-none z-0';
      document.body.appendChild(container);
      
      // Initialize floating elements after the container is created
      initializeFloatingElements();
    }
    
    return () => {
      // Clean up floating elements when page unmounts
      const container = document.querySelector('.floating-elements-container');
      if (container) {
        container.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-staymore-light-pink to-white relative">
      <Hero />
      <div className="wave-divider"></div>
      <Features />
      <div className="wave-divider"></div>
      <MissionPreview />
      <div className="wave-divider"></div>
      <ProductsPreview />
      <div className="wave-divider"></div>
      <SolutionsPreview />
      <div className="wave-divider"></div>
      <EmpowermentPreview />
      <div className="wave-divider"></div>
      <Testimonials />
      <div className="wave-divider"></div>
      <NewsletterSignup />
    </div>
  );
};

export default Index;
