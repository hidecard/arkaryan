'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');
  const fullText = '<ArkarYan />';

  useEffect(() => {
    // Typing effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 120);

    // Hide loading screen after content loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearInterval(typeInterval);
    };
  }, []);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Loading Screen - Modern Code Style */}
      <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Background mesh gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Code Editor Window */}
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden w-80 sm:w-96">
          {/* Window header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 text-center text-xs text-gray-500 dark:text-gray-400 font-mono">
              portfolio.tsx
            </div>
          </div>

          {/* Code content */}
          <div className="p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-purple-600 dark:text-purple-400">const</span>
              <span className="text-blue-600 dark:text-blue-400">developer</span>
              <span className="text-gray-600 dark:text-gray-400">=</span>
              <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span>
            </div>
            <div className="pl-4 mb-2">
              <span className="text-gray-500 dark:text-gray-500">name:</span>
              <span className="text-green-600 dark:text-green-400 ml-2">
                &quot;{text}&quot;
                <span className="inline-block w-0.5 h-4 bg-blue-500 ml-0.5 animate-pulse" />
              </span>
            </div>
            <div className="pl-4 mb-2">
              <span className="text-gray-500 dark:text-gray-500">role:</span>
              <span className="text-green-600 dark:text-green-400 ml-2">
                &quot;Full Stack Developer&quot;
              </span>
            </div>
            <div className="pl-4 mb-2">
              <span className="text-gray-500 dark:text-gray-500">experience:</span>
              <span className="text-orange-600 dark:text-orange-400 ml-2">
                &quot;10+ years&quot;
              </span>
            </div>
            <div className="text-yellow-600 dark:text-yellow-400">{'}'}</div>
          </div>

          {/* Progress line */}
          <div className="h-1 bg-gray-200 dark:bg-gray-700">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 progress-bar" />
          </div>
        </div>

        {/* Status text */}
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono">compiling portfolio...</span>
        </div>
      </div>

      {/* Main content (hidden while loading) */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>

      <style jsx>{`
        .progress-bar {
          animation: loading 1.5s ease-out forwards;
        }
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </>
  );
}
