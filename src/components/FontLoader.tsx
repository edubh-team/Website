'use client';

import { useEffect, useState } from 'react';

interface FontLoaderProps {
  children: React.ReactNode;
}

export default function FontLoader({ children }: FontLoaderProps) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontError, setFontError] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const checkFont = () => {
      try {
        // Check if Inter font is available
        if (document.fonts && document.fonts.check) {
          const isInterLoaded = document.fonts.check('1em Inter');
          
          if (isInterLoaded) {
            setFontLoaded(true);
            document.documentElement.classList.add('font-loaded');
            return;
          }
          
          // If font is not loaded, wait a bit more and check again
          timeoutId = setTimeout(() => {
            const retryCheck = document.fonts.check('1em Inter');
            if (retryCheck) {
              setFontLoaded(true);
              document.documentElement.classList.add('font-loaded');
            } else {
              // Font failed to load, use fallback
              setFontError(true);
              document.documentElement.classList.add('font-fallback');
            }
          }, 2000);
        } else {
          // Browser doesn't support font loading API, assume font is loaded
          setFontLoaded(true);
          document.documentElement.classList.add('font-loaded');
        }
      } catch (error) {
        console.warn('Font loading check failed:', error);
        setFontError(true);
        document.documentElement.classList.add('font-fallback');
      }
    };

    // Check font status after a short delay
    const initialTimer = setTimeout(checkFont, 500);
    
    return () => {
      clearTimeout(initialTimer);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return <>{children}</>;
}
