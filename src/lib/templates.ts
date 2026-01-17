// Template and style definitions for logo creation

export interface Template {
  id: string;
  name: string;
  category: string;
  preview: string;
  creator: string;
  likes: number;
  style: string;
  colors: string[];
}

export interface Style {
  id: string;
  name: string;
  description: string;
  preview: string;
  icon: string;
}

export const categories = [
  'All',
  'Minimalist',
  'Abstract',
  'Mascot',
  'Luxury',
  'Tech',
  'Nature',
  '3D',
] as const;

export const styles: Style[] = [
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean, simple designs with essential elements',
    preview: '🎯',
    icon: 'Minimize2',
  },
  {
    id: '3d',
    name: '3D',
    description: 'Three-dimensional depth and perspective',
    preview: '🎲',
    icon: 'Box',
  },
  {
    id: 'abstract',
    name: 'Abstract',
    description: 'Artistic and conceptual interpretations',
    preview: '🎨',
    icon: 'Sparkles',
  },
  {
    id: 'mascot',
    name: 'Mascot',
    description: 'Character-based brand representations',
    preview: '🦊',
    icon: 'Smile',
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Premium, elegant, and sophisticated',
    preview: '👑',
    icon: 'Crown',
  },
  {
    id: 'tech',
    name: 'Tech',
    description: 'Modern, digital, and futuristic',
    preview: '⚡',
    icon: 'Zap',
  },
];

export const colorPalettes = [
  {
    id: 'purple-blue',
    name: 'Purple & Blue',
    colors: ['#8b5cf6', '#6366f1', '#3b82f6', '#0ea5e9'],
  },
  {
    id: 'sunset',
    name: 'Sunset',
    colors: ['#f97316', '#fb923c', '#fbbf24', '#facc15'],
  },
  {
    id: 'ocean',
    name: 'Ocean',
    colors: ['#06b6d4', '#0891b2', '#0e7490', '#155e75'],
  },
  {
    id: 'forest',
    name: 'Forest',
    colors: ['#10b981', '#059669', '#047857', '#065f46'],
  },
  {
    id: 'rose',
    name: 'Rose',
    colors: ['#ec4899', '#db2777', '#be185d', '#9f1239'],
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    colors: ['#000000', '#404040', '#737373', '#a3a3a3'],
  },
];

// Sample templates (in a real app, these would come from a database)
export const sampleTemplates: Template[] = [
  {
    id: '1',
    name: 'Geometric Bird',
    category: 'Minimalist',
    preview: '🦅',
    creator: 'LogoMaster',
    likes: 1200,
    style: 'minimalist',
    colors: ['#f5e6d3', '#2c3e50'],
  },
  {
    id: '2',
    name: 'Luxury Brand',
    category: 'Luxury',
    preview: '👑',
    creator: 'BrandGenius',
    likes: 567,
    style: 'luxury',
    colors: ['#d4a574', '#1a1a1a'],
  },
  {
    id: '3',
    name: 'Gradient Sphere',
    category: 'Abstract',
    preview: '🌈',
    creator: 'DesignAI',
    likes: 843,
    style: 'abstract',
    colors: ['#667eea', '#764ba2', '#f093fb'],
  },
  {
    id: '4',
    name: 'Cloud Tech',
    category: 'Tech',
    preview: '☁️',
    creator: 'CloudArt',
    likes: 1400,
    style: 'tech',
    colors: ['#ffffff', '#0f766e'],
  },
  {
    id: '5',
    name: 'Neon Fox',
    category: 'Mascot',
    preview: '🦊',
    creator: 'NeonVibe',
    likes: 2400,
    style: 'mascot',
    colors: ['#ff006e', '#8338ec', '#3a86ff'],
  },
  {
    id: '6',
    name: 'Eco Leaf',
    category: 'Nature',
    preview: '🌿',
    creator: 'EcoDesign',
    likes: 928,
    style: 'minimalist',
    colors: ['#ffffff', '#059669'],
  },
];
