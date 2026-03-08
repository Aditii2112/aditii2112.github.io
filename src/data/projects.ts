import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sovereign Sentinel',
    category: 'documentary',
    year: '2025',
    slug: 'sovereign-sentinel',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Sovereign Sentinel is a privacy-first, autonomous multi-agent platform for industrial facilities in connectivity deserts.',
    descriptionBullets: [
      'Built for high-stakes industrial environments that lose billions to undetected “micro-escalations” (leaks, pests, structural faults) in low-connectivity warehouses.',
      'Four-agent edge pipeline: Vision (fine-tuned PaliGemma 2 for multi-class hazard detection), Inventory (SQL + inventory.db), Action (FunctionGemma tool calls for tickets and stock quarantine), and Auditor (Gemma 1B enforcing a safety constitution).',
      'Runs 100% on-device on a MacBook Pro, processing 4K video locally with zero cloud calls or data exfiltration for strict privacy and compliance.',
      'Implements a safety watchdog that blocks risky actions whenever humans are detected in frame and logs every tool call and decision for auditability.',
      'React/Tailwind dashboard with live video feed, bounding boxes over anomalies, agent connectivity widget, evidence gallery, and scrolling safety log.',
      'Industrial tools like `quarantine_inventory_sku`, `dispatch_visual_ticket`, and `broadcast_safety_alert` close the loop from detection to human-in-the-loop action.',
    ],
    skills: 'Edge AI, Computer Vision, PaliGemma 2, React, OpenCV, Python, Ollama',
    location: '',
    shortDescription: 'Privacy-first 4-agent edge AI platform (PaliGemma 2, FunctionGemma, Gemma) for industrial safety—100% offline.',
    demoUrl: 'https://drive.google.com/file/d/1iWbdTB_gN6dmG4eRcic3kqNkFH-fCl2d/view',
    githubUrl: 'https://github.com/Aditii2112/Instaworkers',
    images: [
      {
        id: '1-1',
        src: '/projects/sovereign-sentinel-dashboard.png',
        alt: 'Sovereign Sentinel — InstaControl Observability Surface',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Industrial facility / edge intelligence',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '2',
    title: 'Oasis: Intelligent Multi-Account Calendar Assistant',
    category: 'documentary',
    year: '2025',
    slug: 'oasis-calendar-assistant',
    coverImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Oasis OS is a multi-agent orchestrator for intelligent scheduling and daily briefings.',
    descriptionBullets: [
      'Multi-agent “Oasis OS” built on LangGraph and Google Gemini to handle scheduling, historical queries, and daily briefings from natural language.',
      'LangGraph state machine parses free-form text into structured intents (create, query, summarize) and routes them to specialized nodes.',
      'Graph nodes include: parser (Gemini → JSON), query (historical search across calendars), fetcher (day events), resolver (inverse availability / “smart gaps”), summarizer (clean agenda), and writer (UI state).',
      'Supports dual Work and Personal Google Calendar accounts, keeping availability in sync and resolving conflicts across both.',
      'Frontend: React + TypeScript (Vite) chat-style interface with date pickers and time-slot widgets so users can create and inspect events visually.',
      'Backend: Python (FastAPI + LangGraph) exposing a JSON API, making it easy to reuse the orchestrator in other frontends or tools.',
    ],
    skills: 'LangGraph, Google Gemini, FastAPI, React, TypeScript, Google Calendar API',
    location: '',
    shortDescription: 'LangGraph + Gemini calendar assistant with dual-account sync, inverse availability, and daily briefings.',
    demoUrl: 'https://drive.google.com/file/d/1VLfXz6QnrCsShMmZGhLbvCBUfv-3zYyc/view?usp=sharing',
    githubUrl: 'https://github.com/Aditii2112/To-do-and-calender-syncer',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Oasis calendar assistant',
        aspectRatio: 'landscape'
      },
      {
        id: '2-2',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'LangGraph and calendar integration',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'Farm Sage: AI-Powered Strategic Automation',
    category: 'documentary',
    year: '2025',
    slug: 'farm-sage',
    coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Farm Sage is an AI-powered climate-smart crop planning system that helps farmers generate strategies in seconds.',
    descriptionBullets: [
      'AI-powered climate-smart crop planning assistant for farmers, generating seasonal strategies in seconds instead of weeks of manual planning.',
      'Runs three parallel strategy agents (Water Saver, Yield Priority, Carbon Priority) via LangGraph and Morph LLM to explore different tradeoffs.',
      'Composite KPI engine scores each plan on water use, cost, soil carbon health, and risk, then ranks options based on farmer constraints and priorities.',
      'End-to-end pipeline: intake (farm profile, climate, constraints) → assumptions (baselines) → parallel agents → score-and-merge step that selects a recommended plan.',
      'Produces structured seasonal plans with crop rotations, rationale, and risk analysis rather than just unstructured model text.',
      'Backend: Python, FastAPI, LangGraph, LangChain, Pydantic; frontend: vanilla JS glassmorphism dashboard with composite KPI visualization.',
    ],
    skills: 'LangGraph, Morph LLM, FastAPI, Python, LangChain, Pydantic',
    location: '',
    shortDescription: 'Multi-agent climate-smart crop planner (LangGraph + Morph LLM) with composite KPI scoring and recommendation dashboard.',
    demoUrl: 'https://drive.google.com/file/d/1j7UVs-Q60YhjKRXQYOyR2RzFGxnN1kUd/view?usp=sharing',
    githubUrl: 'https://github.com/Aditii2112/FarmSage',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Farm Sage — agricultural strategy',
        aspectRatio: 'landscape'
      },
      {
        id: '3-2',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'KPI dashboard and risk analysis',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '4',
    title: 'SaaS Revenue & Product Usage Analytics Platform',
    category: 'documentary',
    year: '2025',
    slug: 'saas-product',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'An end-to-end SQL-driven analytics platform for revenue growth, customer churn, and product usage at a fictional SaaS company.',
    descriptionBullets: [
      'End-to-end analytics platform that mirrors how modern SaaS companies track revenue growth, churn, and product usage.',
      'Synthetic customer, subscription, invoice, payment, discount, and churn data generated in Python to power realistic scenarios for analysis.',
      'Normalized PostgreSQL schema with core tables such as customers, plans, subscriptions, usage_events, invoices, payments, and churn_events.',
      'Analytics views like v_monthly_mrr, v_arr, v_monthly_churn, v_retention_cohorts, v_feature_usage, v_revenue_by_plan, and v_company_kpis are designed to feed dashboards directly.',
      'Designed as SQL-first: all business metrics are expressed in reusable SQL views instead of opaque application code, making it easy for analysts to extend.',
      'Clear separation between raw data, analytics layer, and dashboard consumption to reflect analytics engineering best practices.',
    ],
    skills: 'SQL, PostgreSQL, Python, Data Modeling, Analytics',
    location: '',
    shortDescription: 'SQL-first analytics platform: MRR, churn, cohorts, and product usage on PostgreSQL with dashboard-ready views.',
    demoUrl: '',
    githubUrl: 'https://github.com/Aditii2112/SaaS-Revenue-Product-Usage-Analytics-Platform',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'SaaS product dashboard',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '5',
    title: 'ICU In-Hospital Mortality Prediction',
    category: 'documentary',
    year: '2025',
    slug: 'icu-mortality-prediction',
    coverImage: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Predicts in-hospital mortality for ICU patients using structured EHR data, comparing XGBoost and LSTM with SHAP explainability.',
    descriptionBullets: [
      'Predicts in-hospital mortality for ICU patients using structured Electronic Health Record (EHR) data to support resource allocation and clinical decision-making.',
      'Compares traditional ML (XGBoost) vs. deep learning (LSTM) for tabular and temporal patterns, with focus on predictive accuracy and interpretability.',
      'End-to-end pipeline: automated data cleaning, imputation, and feature scaling using Scikit-learn Pipelines and ColumnTransformer (180+ features: vitals, lab results).',
      'SHAP TreeExplainer integration to visualize impact of age, labs, and vitals on individual patient risk—moving beyond black-box predictions.',
      'Evaluation on ROC-AUC and Precision-Recall to handle class imbalance; prioritizes identifying high-risk patients without excessive false positives.',
      'Built in Python (Google Colab / Jupyter); stack: XGBoost, Scikit-learn, TensorFlow/Keras (LSTM), SHAP, Pandas, NumPy, Matplotlib, Seaborn.',
    ],
    skills: 'Python, XGBoost, Scikit-learn, TensorFlow, LSTM, SHAP, Pandas, Healthcare ML',
    location: '',
    shortDescription: 'EHR-based ICU mortality prediction with XGBoost vs LSTM and SHAP explainability.',
    demoUrl: '',
    githubUrl: 'https://github.com/Aditii2112/ICU-Mortality-prediction',
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'ICU Mortality Prediction — heartbeat / vital signs',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '6',
    title: 'Marathi Dialect Detection System',
    category: 'documentary',
    year: '2025',
    slug: 'marathi-dialect-detection',
    coverImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'ML system to classify regional Marathi dialects from audio, with FastAPI deployment for low-resource language accessibility.',
    descriptionBullets: [
      'Built a machine learning system to classify regional Marathi dialects using 500+ labeled audio samples.',
      'Extracted MFCC and spectral features; trained Decision Trees and Gradient Boosting models, achieving F1 score of 0.95.',
      'Improved robustness using audio data augmentation (noise injection, pitch shifting, time stretching) with cross-validation.',
      'Deployed the model via FastAPI for real-time dialect prediction, targeting low-resource language accessibility.',
    ],
    skills: 'Python, Machine Learning, Audio Processing, MFCC, Decision Trees, Gradient Boosting, FastAPI',
    location: '',
    shortDescription: 'ML system to classify regional Marathi dialects from 500+ audio samples; F1 0.95, FastAPI deployment.',
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Marathi Dialect Detection — speech and language',
        aspectRatio: 'landscape'
      }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (home page grid)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 6);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 && currentIndex >= 0 ? projects[currentIndex + 1] : null
  };
};
