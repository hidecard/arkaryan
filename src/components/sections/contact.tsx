'use client';
import { AnimatedSection, AnimatedCard } from '@/hooks/use-animations';


import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin as LocationIcon, ArrowRight, ExternalLink, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 section-muted">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm always interested in hearing about new opportunities
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedCard delay={200}>
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-8">
              <div className="text-center group">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                  <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-500" />
                </div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">info@arkaryan.net</p>
                <Button variant="outline" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 transition-colors" asChild>
                  <a href="mailto:info@arkaryan.net">Send email</a>
                </Button>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-green-100 dark:group-hover:bg-green-900/30">
                  <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-green-500" />
                </div>
                <h3 className="font-medium mb-2">Phone</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">09758430371</p>
                <Button variant="outline" size="sm" className="hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-500 transition-colors" asChild>
                  <a href="tel:+959758430371">Call me</a>
                </Button>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30">
                  <Send className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-cyan-500" />
                </div>
                <h3 className="font-medium mb-2">Telegram</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">@hidecard1</p>
                <Button variant="outline" size="sm" className="hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-500 transition-colors" asChild>
                  <a href="https://t.me/hidecard1" target="_blank" rel="noopener noreferrer">Message me</a>
                </Button>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 dark:group-hover:bg-blue-800/30">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-600 bg-white dark:bg-gray-800 rounded w-8 h-8 flex items-center justify-center">
                    f
                  </div>
                </div>
                <h3 className="font-medium mb-2">Facebook</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">@arkaryan11</p>
                <Button variant="outline" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-600 transition-colors" asChild>
                  <a href="https://facebook.com/arkaryan11" target="_blank" rel="noopener noreferrer">Follow me</a>
                </Button>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30">
                  <LocationIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-500" />
                </div>
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Yangon</p>
                <Button variant="outline" size="sm" className="hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-500 transition-colors" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View map</a>
                </Button>
              </div>
            </div>
            
            <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Available for freelance projects and full-time opportunities
              </p>
              <div className="flex justify-center px-4 sm:px-0">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all duration-300 group"
                  asChild
                >
                  <a href="mailto:arkaryan.info@gmail.com" className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Send message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
