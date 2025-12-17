import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}