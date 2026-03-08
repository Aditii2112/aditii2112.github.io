export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  logoUrl?: string;
}

export const education: EducationItem[] = [
  {
    id: '1',
    degree: "Master's in Computer Science",
    institution: 'University of California, Davis',
    location: 'Davis, USA',
    duration: 'Sept 2024 – March 2026',
    grade: 'CGPA: 3.91/4.0',
    logoUrl: '/logos/ucdavis.png',
  },
  {
    id: '2',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'MIT-WPU',
    location: 'Pune, India',
    duration: 'Sept 2020 – June 2024',
    grade: 'CGPA: 9.21/10.0',
    logoUrl: '/logos/mitwpu.png',
  },
  {
    id: '3',
    degree: 'BS in Data Science and its Application',
    institution: 'IIT Madras',
    location: 'Madras, India',
    duration: 'Sept 2021 – Dec 2024',
    grade: 'CGPA: 8.08/10.0',
    logoUrl: '/logos/iitmadras.png',
  },
];
