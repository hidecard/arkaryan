'use client';

import { useState, useEffect } from 'react';

interface ReadingProgressProps {
  targetId?: string;
  height?: number;
  className?: string;
  color?: string;
}

export default function ReadingProgress({
  targetId = 'article-content',
  height = 3,
  className = '',
  color = 'bg-blue-600'
}: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) {
        console.log('Target element not found:', targetId);
        return;
      }

      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetTop = targetElement.offsetTop;
      const targetHeight = targetElement.offsetHeight;

      // Calculate the reading area
      const readingStart = targetTop;
      const readingEnd = targetTop + targetHeight;
      const totalReadingDistance = readingEnd - windowHeight - readingStart;
      
      // Calculate progress
      if (scrollTop <= readingStart) {
        setProgress(0);
      } else if (scrollTop >= readingEnd - windowHeight) {
        setProgress(100);
      } else if (totalReadingDistance > 0) {
        const readingProgress = ((scrollTop - readingStart) / totalReadingDistance) * 100;
        setProgress(Math.min(Math.max(readingProgress, 0), 100));
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateProgress);
    };

    // Delay initial calculation to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      calculateProgress();
    }, 100);

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add resize listener
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [targetId]);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 ${className}`}
      style={{ height: `${height}px` }}
    >
      <div className="h-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full ${color} transition-all duration-150 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
