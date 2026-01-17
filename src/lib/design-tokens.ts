// Design tokens for consistent styling across the app

export const colors = {
  background: {
    primary: '#0a0a0f',
    secondary: '#1a1a24',
    card: '#1e1e2e',
  },
  text: {
    primary: '#ffffff',
    secondary: '#9ca3af',
    muted: '#6b7280',
  },
  accent: {
    purple: '#8b5cf6',
    blue: '#6366f1',
    pink: '#ec4899',
  },
  gradients: {
    purple: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    dark: 'linear-gradient(180deg, #1a1a24 0%, #0a0a0f 100%)',
    glow: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
  },
};

export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
};

export const borderRadius = {
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.5rem',     // 24px
  '2xl': '2rem',    // 32px
  full: '9999px',
};

export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    display: 'Outfit, Inter, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const animation = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  glow: '0 0 20px rgba(139, 92, 246, 0.3)',
  glowStrong: '0 0 40px rgba(139, 92, 246, 0.5)',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
