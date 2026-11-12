export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  accentColor: string;
}

export interface ServiceArea {
  name: string;
  county: string;
  highlight: string;
  tag: string;
}

export interface EstimateFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  issue: string;
  preferredContact: 'phone' | 'text' | 'email';
}

export interface EstimateConfirmation {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  issue: string;
  preferredContact: string;
  status: string;
}
