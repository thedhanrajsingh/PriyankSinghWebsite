
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
