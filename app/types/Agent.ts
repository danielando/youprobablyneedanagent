export interface Agent {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  industry: string;
  primaryUseCase: string;
  problemSolved: string;
  keyFeatures: string[];
  pricingModel: 'Free' | 'Freemium' | 'Subscription' | 'Enterprise Pricing' | 'Once Off';
  websiteUrl: string;
} 