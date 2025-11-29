import React from 'react';

export type Language = 'en' | 'bg';

export enum MosaicCategory {
  PORTRAIT = 'Portrait',
  RELIGIOUS = 'Religious',
  LANDSCAPE = 'Landscape',
  CLASSICAL = 'Classical',
  MODERN = 'Modern',
  FLOOR = 'Floor',
  ALL = 'All'
}

export interface MosaicItem {
  id: string;
  title: string;
  description: string;
  category: MosaicCategory;
  imageUrl: string;
  gallery?: string[]; // Added gallery support
  featured?: boolean;
}

export interface PricingTier {
  title: string;
  price: number;
  unit: string;
  features: string[];
  recommendedFor: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface SiteContent {
  nav: {
    home: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
    ctaPortfolio: string;
    ctaQuote: string;
  };
  intro: {
    title: string;
    description: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
  };
  featured: {
    subtitle: string;
    title: string;
    viewAll: string;
    viewDetails: string;
  };
  process: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  pricing: {
    title: string;
    description: string;
    tiers: PricingTier[];
    choose: string;
    depositTitle: string;
    depositDesc: (deposit: string) => string;
  };
  portfolioPage: {
    title: string;
    description: string;
    viewDetails: string;
    interested: string;
    inquire: string;
    categories: Record<MosaicCategory, string>;
    processTitle: string; 
  };
  contactPage: {
    title: string;
    description: string;
    infoTitle: string;
    phone: string;
    email: string;
    location: string;
    locationValue: string;
    turnaround: string;
    turnaroundValue: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    typeLabel: string;
    sizeLabel: string;
    msgLabel: string;
    submit: string;
    privacy: string;
    mosaicTypes: string[];
  };
  footer: {
    description: string;
    explore: string;
    contact: string;
    rights: string;
  };
}