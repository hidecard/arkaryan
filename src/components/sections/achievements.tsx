import { AnimatedSection, AnimatedCard } from '@/hooks/use-animations';
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Rocket, Shield, Trophy } from 'lucide-react';

// Achievements data
const achievements = [
  {
    title: '9+ Years of Teaching Excellence',
    description: 'Empowering the next generation of Myanmar developers since 2017',
    icon: GraduationCap,
  },
  {
    title: 'Technological Evolution',
    description: 'Transitioned from Native Java development to modern Cross-platform (Flutter) and Full-stack cloud architectures',
    icon: Rocket,
  },
  {
    title: 'Cybersecurity Impact',
    description: 'Successfully resolved complex cybercrime cases and provided public education via Myanmar Cyber Ghost',
    icon: Shield,
  },
  {
    title: 'Entrepreneurial Success',
    description: 'Founded three distinct ventures in Tech, Cybersecurity, and Agriculture',
    icon: Trophy,
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Milestones</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Key accomplishments and career highlights
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedCard key={index} delay={index * 200}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
