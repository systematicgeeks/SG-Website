import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediate check if IntersectionObserver is not available
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      // Adjusted: threshold 0.1 means 10% visible, rootMargin -50px delays trigger until element is 50px up from bottom
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' } 
    );

    if (ref.current) {
      // 1. Start observing
      observer.observe(ref.current);
      
      // 2. Synchronously check if the element is already DEEP in the viewport (hero section)
      const rect = ref.current.getBoundingClientRect();
      // Only auto-show if it's well within the visible area on load
      const inView = (rect.top < window.innerHeight) && (rect.bottom >= 0);
      
      if (inView) {
        setIsVisible(true);
        observer.unobserve(ref.current);
      }
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      // Matches source code: 0.8s ease-out, starts with 30px translate (approx translate-y-8) and blur 8px
      className={`transition-all duration-[800ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[2px]'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};