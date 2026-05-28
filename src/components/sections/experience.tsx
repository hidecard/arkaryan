'use client';
import { AnimatedSection, AnimatedCard } from '@/hooks/use-animations';


import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Code, Settings, Briefcase, Calendar } from 'lucide-react';

// Experience data
const experiences = [
  {
    title: 'Programming Instructor & Project Manager',
    company: 'YHA Computer',
    period: '2024 – Present',
    type: 'Full-time',
    description: 'Leading high-impact development projects and supervising student-led initiatives. Instructing advanced courses in Full-stack Web Development and Mobile App Frameworks.',
    technologies: ['Next.js', 'Express.js', 'React.js', 'Node.js', 'MongoDB', 'Web Design', 'Flutter & Dart', 'Python', 'C# Programming', 'Laravel & Vue'],
  },
  {
    title: 'Cybersecurity Consultant & Digital Literacy Advocate',
    company: 'Myanmar Cyber Ghost',
    period: '2024 – Present',
    type: 'Founder',
    description: 'Founded platform to share knowledge on Cybercrime and technical security trends. Specialized in Vulnerability Assessment and providing protection strategies.',
    technologies: ['Vulnerability Assessment', 'Network Security', 'Incident Response', 'Digital Literacy Advocacy'],
  },
  {
    title: 'Founder & CEO',
    company: 'k Square',
    period: '2022 – Present',
    type: 'Founder',
    description: 'Directing software firm specializing in custom enterprise solutions and modern SaaS architecture. Spearheading technical strategy and client relations.',
    technologies: ['SaaS Architecture', 'Project Management', 'Business Strategy', 'Team Leadership', 'Full-Stack Development'],
  },
  {
    title: 'Independent Software Developer & Media Consultant',
    company: 'Freelance',
    period: '2017 – 2024',
    type: 'Freelance',
    description: 'Delivered high-quality freelance software solutions for local and international clients. Mentored hundreds of students through online batches.',
    technologies: ['Full-Stack Development', 'Mobile Development', 'Graphic Design', 'Motion Video Editing', 'Page Administration'],
  },
  {
    title: 'Founder',
    company: 'Power Agriculture Myanmar',
    period: '2023 – Present',
    type: 'Founder',
    description: 'Established proprietary brand for agricultural products, managing end-to-end supply chain and branding.',
    technologies: ['Brand Management', 'Supply Chain', 'Agricultural Technology', 'Business Development'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My professional journey and achievements
            </p>
          </div>
        </AnimatedSection>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedCard key={index} delay={index * 200}>
              <div className="relative">
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                )}
                
                <div className="flex gap-8">
                  {/* Timeline Dot with Animation */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:border-blue-500 dark:hover:border-blue-400">
                      {exp.type === 'Founder' ? (
                        <Award className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                      ) : exp.title.includes('Teacher') ? (
                        <Code className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                      ) : exp.title.includes('Security') ? (
                        <Settings className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <Briefcase className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content with Hover Effects */}
                  <div className="flex-grow bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <Badge variant="outline" className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-medium mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                            style={{ animationDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
