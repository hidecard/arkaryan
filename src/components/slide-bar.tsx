'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SlideBarProps {
  sections: Array<{
    id: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  className?: string;
}

export function SlideBar({ sections, activeSection, onSectionChange, className }: SlideBarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "fixed left-0 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300",
        isHovered ? "translate-x-0" : "translate-x-[-80%]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-r-2xl shadow-lg p-2">
        <div className="flex flex-col gap-2">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onSectionChange(section.id)}
              className={cn(
                "justify-start gap-2 transition-all duration-300 min-w-[120px]",
                activeSection === section.id 
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
              )}
              title={section.label}
            >
              {section.icon && <span className="w-4 h-4">{section.icon}</span>}
              <span className="text-xs font-medium">{section.label}</span>
            </Button>
          ))}
        </div>
      </div>
      
      {/* Tab indicator */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full">
        <div className="w-2 h-8 bg-gray-300 dark:bg-gray-600 rounded-l-lg opacity-50"></div>
      </div>
    </div>
  );
}
