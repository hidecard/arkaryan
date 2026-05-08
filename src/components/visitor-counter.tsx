'use client';

import { useState, useEffect } from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface VisitorCounterProps {
  className?: string;
  showLabel?: boolean;
  variant?: 'default' | 'compact' | 'card';
}

export default function VisitorCounter({ 
  className = '', 
  showLabel = true,
  variant = 'default'
}: VisitorCounterProps) {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewVisitor, setIsNewVisitor] = useState(false);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const hasTracked = sessionStorage.getItem('visitorTracked');
        
        if (!hasTracked) {
          const response = await fetch('/api/visitors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
          });
          
          if (response.ok) {
            const data = await response.json();
            setCount(data.count);
            setIsNewVisitor(data.isNewVisitor);
            sessionStorage.setItem('visitorTracked', 'true');
          }
        } else {
          const response = await fetch('/api/visitors');
          if (response.ok) {
            const data = await response.json();
            setCount(data.count);
          }
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
      } finally {
        setIsLoading(false);
      }
    };

    trackVisitor();
  }, []);

  // Animate number counting
  const [displayCount, setDisplayCount] = useState(0);
  
  useEffect(() => {
    if (!isLoading && count > 0) {
      const duration = 1500;
      const steps = 30;
      const increment = count / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= count) {
          setDisplayCount(count);
          clearInterval(timer);
        } else {
          setDisplayCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [count, isLoading]);

  if (isLoading) {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full ${className}`}>
        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-xs text-gray-500 dark:text-gray-400">...</span>
      </div>
    );
  }

  // Compact variant for minimal display
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-100 dark:border-blue-800 ${className}`}
      >
        <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {displayCount.toLocaleString()}
        </span>
      </motion.div>
    );
  }

  // Card variant for dashboard-style display
  if (variant === 'card') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`inline-flex items-center gap-4 px-5 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}
      >
        <div className="relative">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          {isNewVisitor && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </span>
          )}
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {displayCount.toLocaleString()}
            </span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          {showLabel && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isNewVisitor ? 'Welcome, new visitor!' : 'Total visitors'}
            </span>
          )}
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <div className="relative">
        <div className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-md">
          <Users className="w-4 h-4 text-white" />
        </div>
        {isNewVisitor && (
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          {displayCount.toLocaleString()}
        </span>
        {showLabel && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {isNewVisitor ? 'Welcome!' : 'visitors'}
          </span>
        )}
      </div>
    </motion.div>
  );
}
