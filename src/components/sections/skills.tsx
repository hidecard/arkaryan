'use client';

import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Code, Database, Smartphone, Shield, Palette, Server, 
  Globe, Cpu, LineChart, Sparkles
} from 'lucide-react';

// Animation Hook
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isIntersecting };
};

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Bento Grid Item Component
const BentoItem = ({ 
  children, 
  className = "", 
  delay = 0,
  colSpan = 1,
  rowSpan = 1
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  colSpan?: number;
  rowSpan?: number;
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-700 hover:shadow-xl hover:scale-[1.02] ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'scale(1)' : 'scale(0.95)',
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-100/50 dark:to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
};

// Skill Badge Component
const SkillBadge = ({ name, level }: { name: string; level: 'expert' | 'advanced' | 'intermediate' }) => {
  const levelStyles = {
    expert: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    advanced: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800',
    intermediate: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${levelStyles[level]} transition-all duration-300 hover:scale-105 cursor-default`}>
      {name}
    </span>
  );
};

// Skills data organized for Bento Grid
const skillClusters = {
  frontend: {
    title: 'Frontend Stack',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Next.js', level: 'expert' as const },
      { name: 'React.js', level: 'expert' as const },
      { name: 'TypeScript', level: 'expert' as const },
      { name: 'Vue.js', level: 'advanced' as const },
      { name: 'Tailwind CSS', level: 'expert' as const },
      { name: 'HTML/CSS', level: 'expert' as const },
    ],
    description: 'Modern frontend frameworks & responsive design'
  },
  backend: {
    title: 'Backend Stack',
    icon: Server,
    color: 'from-green-500 to-emerald-600',
    skills: [
      { name: 'Node.js', level: 'expert' as const },
      { name: 'Express.js', level: 'expert' as const },
      { name: 'Laravel', level: 'advanced' as const },
      { name: 'Django', level: 'intermediate' as const },
      { name: 'PostgreSQL', level: 'advanced' as const },
      { name: 'MongoDB', level: 'expert' as const },
      { name: 'Redis', level: 'advanced' as const },
    ],
    description: 'Server-side technologies & database management'
  },
  languages: {
    title: 'Languages',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'JavaScript', level: 'expert' as const },
      { name: 'TypeScript', level: 'expert' as const },
      { name: 'Python', level: 'advanced' as const },
      { name: 'PHP', level: 'expert' as const },
      { name: 'Java', level: 'advanced' as const },
      { name: 'C#', level: 'advanced' as const },
      { name: 'Dart', level: 'advanced' as const },
      { name: 'Rust', level: 'intermediate' as const },
    ],
    description: 'Programming languages proficiency'
  },
  mobile: {
    title: 'Mobile Dev',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Flutter', level: 'expert' as const },
      { name: 'React Native', level: 'advanced' as const },
      { name: 'Android (Java)', level: 'advanced' as const },
      { name: 'iOS (Swift)', level: 'intermediate' as const },
    ],
    description: 'Cross-platform & native mobile development'
  },
  security: {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-rose-600',
    skills: [
      { name: 'Vulnerability Assessment', level: 'advanced' as const },
      { name: 'Network Security', level: 'advanced' as const },
      { name: 'Incident Response', level: 'advanced' as const },
      { name: 'Penetration Testing', level: 'intermediate' as const },
    ],
    description: 'Security practices & threat mitigation'
  },
  data: {
    title: 'Data & AI',
    icon: LineChart,
    color: 'from-violet-500 to-fuchsia-500',
    skills: [
      { name: 'Python Data Stack', level: 'advanced' as const },
      { name: 'TensorFlow', level: 'intermediate' as const },
      { name: 'Power BI', level: 'advanced' as const },
      { name: 'Machine Learning', level: 'intermediate' as const },
    ],
    description: 'Data science, analytics & ML'
  },
  design: {
    title: 'Design Tools',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Figma', level: 'advanced' as const },
      { name: 'Adobe Creative Suite', level: 'advanced' as const },
      { name: 'Motion Graphics', level: 'advanced' as const },
      { name: 'UI/UX Design', level: 'expert' as const },
    ],
    description: 'Design tools & creative workflows'
  },
  infrastructure: {
    title: 'Infrastructure',
    icon: Cpu,
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Docker', level: 'advanced' as const },
      { name: 'AWS/GCP', level: 'advanced' as const },
      { name: 'Linux Admin', level: 'advanced' as const },
      { name: 'CI/CD', level: 'advanced' as const },
      { name: 'Kubernetes', level: 'intermediate' as const },
    ],
    description: 'DevOps, cloud & system administration'
  }
};

export default function SkillsSection() {
  const clusters = Object.values(skillClusters);
  
  return (
    <section id="skills" className="py-20 section-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-heading">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Expertise
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical capabilities across multiple domains, 
              organized by expertise level.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
          {/* Large Featured Item - Frontend */}
          <BentoItem delay={100} colSpan={2} rowSpan={2} className="p-6">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                    {clusters[0].title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 dark:text-gray-400">
                    {clusters[0].description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {clusters[0].skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </BentoItem>

          {/* Medium Items */}
          {clusters.slice(1, 3).map((cluster, idx) => {
            const Icon = cluster.icon;
            return (
              <BentoItem key={cluster.title} delay={200 + idx * 100} colSpan={2} rowSpan={1} className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cluster.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                    {cluster.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </BentoItem>
            );
          })}

          {/* Small Items */}
          {clusters.slice(3).map((cluster, idx) => {
            const Icon = cluster.icon;
            return (
              <BentoItem key={cluster.title} delay={400 + idx * 100} colSpan={1} rowSpan={1} className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cluster.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 dark:text-white">
                    {cluster.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cluster.skills.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </BentoItem>
            );
          })}
        </div>

        {/* Stats Summary */}
        <AnimatedSection delay={800}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Technologies', value: '45+' },
              { label: 'Expert Level', value: '12' },
              { label: 'Years Coding', value: '10+' },
              { label: 'Domains', value: '8' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="font-heading text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="font-body text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
