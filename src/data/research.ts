export interface ResearchItem {
  id: string;
  title: string;
  date: string;
  journal: string;
  tags: string[];
  description: string;
  paperUrl?: string;
}

export const research: ResearchItem[] = [
  {
    id: '1',
    title: 'Threat Detection in Social Media Networks Using Machine Learning Based Network Analysis',
    date: 'December 2025',
    journal: 'The Journal of Computational Science and Engineering (TJCSE)',
    tags: ['Python', 'Machine Learning', 'Neural Networks', 'UNSW-NB15', 'Network Analysis', 'Cybersecurity'],
    description: 'Developed a machine learning-based threat detection framework for social media networks using artificial neural networks (ANN) to identify malicious behavior patterns in network traffic. Conducted comprehensive preprocessing and exploratory data analysis on the UNSW-NB15 dataset, addressing challenges of data imbalance, feature inconsistency, and noise in over two million network flow records. Designed and implemented an ANN-based classification model capable of learning complex, non-linear relationships in network traffic features to distinguish between normal and malicious activities. Achieved high performance across multiple evaluation metrics including accuracy, precision, recall, F1-score, and ROC-AUC. The framework operates at the network traffic level, making it robust to language diversity, semantic ambiguity, and content obfuscation common in social media platforms.',
    paperUrl: 'https://jcse.cloud/JCSE/Published_Papers/2Dec15_25.pdf',
  },
  {
    id: '2',
    title: 'Food Waste Management with Community Collaboration',
    date: 'May 2023',
    journal: 'International Journal of Research and Analytical Reviews (IJRAR)',
    tags: ['MySQL', 'Apache', 'HTML', 'JavaScript'],
    description: 'Developed comprehensive food waste management system that leverages community collaboration to reduce food waste and promote sustainable practices. Created efficient platform that connects local communities, restaurants, and food banks to redistribute surplus food effectively. Incorporated advanced data analytics to predict food surplus patterns and optimize distribution routes using machine learning algorithms. Key findings demonstrated 40% reduction in food waste within participating communities and 60% improvement in food distribution efficiency. Platform\'s success led to partnerships with local government agencies and non-profit organizations.',
    paperUrl: 'https://ijrar.org/viewfull.php?&p_id=IJRAR23B3259',
  },
];
