/**
 * Skills / tech stack for portfolio (from resume and previous portfolio).
 * icon = Simple Icons slug for logo (https://cdn.simpleicons.org/SLUG).
 */

export interface SkillItem {
  name: string;
  /** Simple Icons slug for logo (https://cdn.simpleicons.org/SLUG) */
  icon?: string;
  /** Custom logo URL (e.g. /logos/langchain.png) when not in Simple Icons */
  iconUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: '1',
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'SQL', icon: 'postgresql' },
      { name: 'R', icon: 'r' },
    ],
  },
  {
    id: '2',
    title: 'Frameworks & Tools',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Vue.js', icon: 'vuedotjs' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Flask', icon: 'flask' },
      { name: 'LangGraph', icon: 'langgraph' },
      { name: 'LangChain', iconUrl: '/logos/langchain.png' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Git/GitHub', icon: 'github' },
    ],
  },
  {
    id: '3',
    title: 'Machine Learning & AI',
    skills: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'scikit-learn', icon: 'scikitlearn' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'NLP' },
      { name: 'Transformers' },
      { name: 'LLMs' },
      { name: 'Computer Vision' },
    ],
  },
  {
    id: '4',
    title: 'Data & Analytics',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'Data Modeling' },
      { name: 'Tableau', icon: 'tableau' },
      { name: 'Power BI', icon: 'powerbi' },
      { name: 'Seaborn' },
      { name: 'Matplotlib' },
      { name: 'Google Analytics', icon: 'googleanalytics' },
    ],
  },
  {
    id: '5',
    title: 'Concepts',
    skills: [
      { name: 'Software Engineering' },
      { name: 'Agile' },
      { name: 'Data Structures & Algorithms' },
      { name: 'OOP' },
      { name: 'Database Management' },
      { name: 'Product Strategy' },
      { name: 'User Research' },
    ],
  },
];
