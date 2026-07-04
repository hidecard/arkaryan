'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin as LocationIcon } from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '@/hooks/use-animations';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Learn more about my background and expertise
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedCard delay={200}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Arkar Yan</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I'm a passionate full-stack developer with extensive experience in building modern web and mobile applications. 
                  My expertise spans across frontend technologies like React.js and Next.js, backend systems with Node.js and PHP, 
                  and mobile development using Flutter.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I have a strong foundation in system administration, version control, and modern development practices. 
                  I enjoy creating efficient, scalable solutions and staying up-to-date with the latest technology trends.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
          </AnimatedCard>
          
          <div className="space-y-6">
            <AnimatedCard delay={400}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">info@arkaryan.net</span>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">09758430371</span>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                    <LocationIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Kamaryut Township, Yangon</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={600}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Frontend', 'Backend', 'Mobile', 'DevOps', 'Database', 'API Design'].map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
