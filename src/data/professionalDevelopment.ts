export interface ProfessionalDevelopmentItem {
  id: string;
  title: string;
  date: string;
  organization: string;
  bullets: string[];
  certificateUrl?: string;
  logoUrl?: string;
}

export const professionalDevelopment: ProfessionalDevelopmentItem[] = [
  {
    id: '1',
    title: 'UC Entrepreneurship Academy',
    date: 'Sept 2025',
    organization: 'University of California',
    logoUrl: '/logos/ucdavis.png',
    bullets: [
      'Completed four-day intensive program focused on innovation, business strategy, and venture creation.',
      'Collaborated with graduate students, postdocs, and faculty across diverse disciplines.',
      'Gained hands-on experience through immersive workshops and expert mentorship in entrepreneurship.',
    ],
    certificateUrl: 'https://drive.google.com/file/d/1LYGX16asUlqi_hSDqvC9OIrgrcUqbzFN/view?usp=sharing',
  },
  {
    id: '2',
    title: 'McKinsey Forward Program',
    date: 'July 2025',
    organization: 'McKinsey & Company',
    logoUrl: '/logos/mckinsey.png',
    bullets: [
      'Completed the McKinsey Forward Program, gaining essential business and leadership skills.',
      'Engaged with interactive learning modules and real-world case studies.',
    ],
    certificateUrl: 'https://www.credly.com/badges/80098563-9e63-46fb-8455-014075f0a536/linked_in_profile',
  },
  {
    id: '3',
    title: 'Data Science for Business',
    date: 'July 2025',
    organization: 'Harvard Business School Online',
    logoUrl: '/logos/harvard-hbs-online.png',
    bullets: [
      'Completed comprehensive data science training focused on business applications.',
      'Covered statistical analysis, machine learning, and data-driven decision making.',
    ],
    certificateUrl: 'https://drive.google.com/file/d/16xJ2DYM-DtXOyPQxeCxucTSQHorkWeOh/view',
  },
  {
    id: '4',
    title: 'Lions Clubs International',
    date: 'Jan 2022 – Present',
    organization: 'Volunteer, Social Services',
    logoUrl: '/logos/lions-clubs.png',
    bullets: [
      'Active volunteer with Lions Clubs International, contributing to community service initiatives and social development programs.',
      'Demonstrating leadership and commitment to social responsibility.',
    ],
  },
];
