import { Project, Skill, Experience } from '../types';

export const portfolioOwner = {
  name: "Ukezi Ebenezer",
  title: "AI & Automation Specialist • Full-Cycle Product Owner",
  tagline: "I Turn Your Vision Into a Product",
  aboutText: "I help startups and growing businesses design simple, user-centered digital products that people enjoy using. I combine clean visual design, user research, and AI-assisted workflows to create experiences that are intuitive, scalable, and business-focused.",
  whyWorkWithMe: [
    {
      title: "Full-Cycle Product Ownership",
      description: "From user research and wireframing to a live application."
    },
    {
      title: "AI-Powered Velocity",
      description: "Prototype features in hours, not weeks."
    },
    {
      title: "Design Systems Specialist",
      description: "Scalable UI kits built to grow from 1 to 100 users."
    }
  ],
  stats: [
    { label: "AI Automations", value: "10+" },
    { label: "Product Experience", value: "5+ Years" },
    { label: "Client Success Rating", value: "100%" },
    { label: "Turnaround Velocity", value: "Hours, not weeks" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "finance-app",
    title: "Finance App",
    tagline: "A clean, modern user interface for personal finance management.",
    description: "UI/UX design and wireframing for personal finance management, offering users clear insights into their transactions, savings, and investment portfolios.",
    longDescription: "This finance application simplifies complex wealth tracking. Designed with clean, intuitive visual hierarchy, smart dashboards, and custom UI components optimized for fintech workflows. Features dark mode consistency, readable datagrids, and accessible touch interactions.",
    category: "UI/UX - Fintech",
    tech: ["Figma", "UI Design", "Wireframing", "Fintech Rules"],
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
    featured: true,
    metrics: [
      { label: "Figma Frames", value: "24+" },
      { label: "Design Iterations", value: "3" }
    ]
  },
  {
    id: "speak-naija",
    title: "SPEAK NAIJA",
    tagline: "AI chatbot translating social media terminology and slang into standard English.",
    description: "An intelligent AI translation agent that parses and decodes Nigerian slang and colloquialisms for global standard English audiences.",
    longDescription: "Speak Naija resolves communication gaps by delivering instant, context-aware translations of popular local slang, social media terms, and pidgin into standard English. Built with state-of-the-art LLMs, the conversational chatbot processes text rapidly while maintaining natural semantic meaning.",
    category: "AI Chatbot",
    tech: ["Google AI Studio", "n8n", "OpenAI", "NLP"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    featured: true,
    metrics: [
      { label: "Accuracy Rating", value: "98.2%" },
      { label: "Response Delay", value: "<1.2s" }
    ]
  },
  {
    id: "nevtech",
    title: "NevTech",
    tagline: "Modern e-commerce landing page and web interface.",
    description: "A highly responsive, visual-intensive e-commerce catalog template built to showcase products with maximum aesthetic appeal.",
    longDescription: "NevTech is a custom web design template built for premium e-commerce niches. Features sophisticated typography, heavy emphasis on visual whitespace, scroll transitions, and lazy-loading catalogs designed to hold user interest and boost conversions.",
    category: "Web Design - E-commerce",
    tech: ["Framer", "HTML5", "TailwindCSS", "CSS Animation"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    featured: true,
    metrics: [
      { label: "Bounce Rate Reduction", value: "15%" },
      { label: "Asset Optimizations", value: "95/100" }
    ]
  },
  {
    id: "ai-lead-capture",
    title: "AI Lead Capture & Automation System",
    tagline: "End-to-end intelligent lead capturing, scoring, and routing pipeline.",
    description: "Maintains automated validation, lead scoring via budget/interest, and splits workflow into hot, warm, cold pipelines.",
    longDescription: "An advanced, zero-touch lead intake pipeline created to accelerate sales workflows. It captures leads from user-facing forms, uses AI workflows to score leads automatically depending on company budget, scale, and product interest, routes them to Google Sheets, creates Slack alerts, logs system errors, and generates live analytics.",
    category: "Automation - AI Workflow",
    tech: ["Lovable", "Make.com", "Google Sheets", "Webhooks", "JSON Path"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    featured: true,
    demoUrl: "https://make.com",
    githubUrl: "https://google.com/sheets",
    metrics: [
      { label: "Pipeline Speed", value: "Instant" },
      { label: "Validations Rate", value: "100%" },
      { label: "Routing Latency", value: "0.8s" }
    ]
  },
  {
    id: "client-onboarding",
    title: "Automated Client Onboarding & Project Setup using n8n",
    tagline: "Multi-system workflow automated in n8n for client workspace generation.",
    description: "Receives client submissions, validates duplicates, launches Asana project workspaces, Google Drive folders, schedules calendar briefings, and notifies Slack.",
    longDescription: "A beautiful multi-service workspace automation workflow. When a new client is signed, n8n handles the heavy lifting: verifying identity, preventing duplicate CRM entries, updating HubSpot records, spinning up customized Asana projects, assembling shared Google Drive structures, issuing welcome emails with calendar schedule links, and notifying internal team channels.",
    category: "Automation - AI Workflow",
    tech: ["n8n", "Lovable", "Google Sheets", "HubSpot CRM", "Asana", "Google Drive", "Gmail", "Google Calendar", "Slack"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    featured: true,
    metrics: [
      { label: "Setup Time Reduced", value: "3 Hours -> 0 Sec" },
      { label: "Integrations Bound", value: "8 APIs" },
      { label: "Error Safety Rate", value: "99.9%" }
    ]
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Agent using n8n",
    tagline: "Intelligent virtual agent managing Telegram inquiries via Google AI Studio.",
    description: "Receives inquiries automatically, processes context with LLMs, and returns natural smart answers through Telegram and Gmail logs.",
    longDescription: "This system wraps Telegram integrations in intelligent natural language handling. Messages received in customer-facing groups or chats trigger n8n, which looks up the relevant user context, consults OpenAI or Google AI Studio to decide the most accurate support response, and dispatches it in real-time.",
    category: "Automation - AI Workflow",
    tech: ["n8n", "OpenAI", "Google AI Studio", "Telegram", "Gmail", "Webhooks", "JSON Parser"],
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd3ded?auto=format&fit=crop&q=80&w=800",
    featured: false,
    metrics: [
      { label: "Support Resolution", value: "85%" },
      { label: "API Inquiries Rate", value: "20/min" },
      { label: "Avg Execution Time", value: "1.4s" }
    ]
  },
  {
    id: "lead-enrichment",
    title: "Lead Capture & Enrichment Automation using n8n",
    tagline: "Website scraping and AI-powered lead ennoblement workflow.",
    description: "Scrapes website metadata on submission, categorizes company profile using AI, updates HubSpot, and alerts sales teams.",
    longDescription: "Instead of manual research, this n8n automation takes initial email submissions, scrapes their company's landing page metadata, uses an LLM to categorize the scale, category, and target audience, stores the augmented details directly inside HubSpot CRM, sends a personalized greeting email, and alerts sales reps in Slack.",
    category: "Automation - AI Workflow",
    tech: ["n8n", "HubSpot CRM", "OpenAI", "Slack", "Email Automation", "HTML Scraping"],
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    featured: false,
    metrics: [
      { label: "Data Quality Enriched", value: "+300%" },
      { label: "Sales Delay Cut", value: "90%" },
      { label: "Metadata Parsing", value: "<2.1s" }
    ]
  }
];

export const skillsData: Skill[] = [
  // Design
  { name: "Figma", category: "Design", level: 95, iconName: "Compass" },
  { name: "FigJam", category: "Design", level: 90, iconName: "Layers" },
  { name: "Framer", category: "Design", level: 92, iconName: "Move" },
  { name: "Miro", category: "Design", level: 85, iconName: "Palette" },

  // AI Coding & Dev
  { name: "Lovable", category: "AI Coding & Dev", level: 96, iconName: "Zap" },
  { name: "Cursor", category: "AI Coding & Dev", level: 95, iconName: "Code" },
  { name: "Replit", category: "AI Coding & Dev", level: 90, iconName: "Shield" },
  { name: "Google AI Studio", category: "AI Coding & Dev", level: 93, iconName: "Cpu" },
  { name: "Make.com", category: "AI Coding & Dev", level: 95, iconName: "Workflow" },
  { name: "Zapier", category: "AI Coding & Dev", level: 92, iconName: "Workflow" },
  { name: "Airtable", category: "AI Coding & Dev", level: 88, iconName: "Database" },

  // AI Research & Assistants
  { name: "NotebookLM", category: "AI Research & Assistants", level: 90, iconName: "Activity" },
  { name: "Claude", category: "AI Research & Assistants", level: 95, iconName: "Flame" },
  { name: "ChatGPT", category: "AI Research & Assistants", level: 94, iconName: "Flame" },
  { name: "Perplexity", category: "AI Research & Assistants", level: 92, iconName: "Compass" },
  { name: "DeepSeek", category: "AI Research & Assistants", level: 90, iconName: "Gauge" },
  { name: "Manus AI", category: "AI Research & Assistants", level: 88, iconName: "Waves" }
];

export const experienceData: Experience[] = [
  {
    id: "exp1",
    role: "AI & Automation Lead Architect",
    company: "Ukezi Systems",
    period: "2024 - Present",
    description: "Developing robust automation workflows and custom client onboarding systems that integrate over 10 distinct cloud platforms.",
    points: [
      "Engineered an automated client onboarding pipeline in n8n integrating HubSpot, Asana, Google Workspace and Slack, reducing manual setup latency to zero.",
      "Designed and deployed smart lead scoring systems on Make.com that automatically parse financial criteria and categorize pipelines.",
      "Built multiple custom natural language parsing agents utilizing OpenAI and Google AI Studio frameworks for language translations. ",
      "Maintained structured Figma and Framer prototypes to guide user engagement and interface design consistency."
    ]
  },
  {
    id: "exp2",
    role: "Full-Cycle Product Owner",
    company: "Bespoke Independent Engagements",
    period: "2021 - 2024",
    description: "Helped startups build high-fidelity and feature-rich MVPs through generative workflows and AI-assisted development.",
    points: [
      "Successfully delivered 15+ custom software products from initial discovery to production-ready deployments.",
      "Fostered deep agile workflow operations with clients, prototyping complex interfaces in hours rather than weeks.",
      "Formulated comprehensive Design Systems, creating shared, scalable UI components for cross-team growth.",
      "Configured robust webhook receivers and server endpoints to safely proxy and augment incoming data loads."
    ]
  }
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export const certificationsData: Certification[] = [
  { id: "cert1", name: "AI Fluency: Frameworks and Foundations", issuer: "Anthropic" },
  { id: "cert2", name: "Claude 101", issuer: "Anthropic" },
  { id: "cert3", name: "Generative AI", issuer: "Outskirts Press, Inc." },
  { id: "cert4", name: "Manus AI Advanced Certificate", issuer: "Manus AI" },
  { id: "cert5", name: "Manus AI Intermediate Certificate", issuer: "Manus AI" },
  { id: "cert6", name: "Manus AI Beginner Certificate", issuer: "Manus AI" },
  { id: "cert7", name: "Google AI for K12 Educators", issuer: "Google" },
  { id: "cert8", name: "AI Workplace Proficiency Certification", issuer: "Superhuman AI" }
];
