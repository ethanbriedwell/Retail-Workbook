// Choctaw Nation of Oklahoma — typed design tokens for React/TSX work
// (e.g. retail_guest_experience_dashboard.tsx). Mirrors tokens.json.

export type BrandKey = 'nation' | 'oe' | 'retail';

export interface BrandPalette {
  primary: string;
  primaryDeep: string;
  accent: string;
  alert: string;
  ornament: string;
  surface: string;
  surfaceAlt: string;
  neutral: string;
  text: string;
  onPrimary: string;
}

export const palettes: Record<BrandKey, BrandPalette> = {
  nation: {
    primary: '#3E0286',
    primaryDeep: '#4D2F66',
    accent: '#76BEE4',
    alert: '#C81F06',
    ornament: '#FDD802',
    surface: '#FFFFFF',
    surfaceAlt: '#F4F2F7',
    neutral: '#B7B7B7',
    text: '#222222',
    onPrimary: '#FFFFFF',
  },
  oe: {
    primary: '#2E4B40',
    primaryDeep: '#1F332B',
    accent: '#C6A45D',
    alert: '#C81F06',
    ornament: '#C6A45D',
    surface: '#FFFFFF',
    surfaceAlt: '#F2F2F2',
    neutral: '#B7B7B7',
    text: '#222222',
    onPrimary: '#FFFFFF',
  },
  retail: {
    primary: '#4F2C1D',
    primaryDeep: '#2B1D17',
    accent: '#AB2328',
    alert: '#AB2328',
    ornament: '#EBB000',
    surface: '#FFFFFF',
    surfaceAlt: '#FAF8F6',
    neutral: '#C9B6A9',
    text: '#2B1D17',
    onPrimary: '#FFFFFF',
  },
};

// Ordered series colors for charts. Primary first, alert reserved for the one value that needs attention.
export const chartSeries: Record<BrandKey, string[]> = {
  nation: ['#3E0286', '#76BEE4', '#4D2F66', '#B7B7B7'],
  oe: ['#2E4B40', '#C6A45D', '#7A9187', '#B7B7B7'],
  retail: ['#4F2C1D', '#C9B6A9', '#1F4E79', '#3C88CF'],
};

export const fonts = {
  display: '"Montserrat", "Arial Black", Arial, sans-serif',
  body: '"Source Sans 3", Arial, Helvetica, sans-serif',
};

// 2026–2030 Strategic Alignment — use to tag initiatives, KPIs and slides.
export const strategicPillars = {
  'culture-sovereignty': {
    label: 'Culture and Sovereignty',
    objectives: [
      'Cultural Heritage and Language',
      'Environmental Sustainability and Protection',
      'Public Safety and Risk Management',
      'Self-Governance',
    ],
  },
  'empowering-people': {
    label: 'Empowering People',
    objectives: [
      'Communication and Accountability',
      'Learning and Development',
      'Service Coordination',
      'Health Outcomes',
      'Quality Education',
      'Sustainable Housing',
    ],
  },
  'best-in-class': {
    label: 'Best in Class',
    objectives: [
      'Operational Efficiency',
      'Service Excellence',
      'Technology Advancement',
      'Data-Driven Decisions',
    ],
  },
  'financial-stewardship': {
    label: 'Financial Stewardship',
    objectives: ['Revenue Growth', 'Cost Optimization', 'Economic Growth', 'Strategic Growth'],
  },
} as const;

export type StrategicPillar = keyof typeof strategicPillars;
