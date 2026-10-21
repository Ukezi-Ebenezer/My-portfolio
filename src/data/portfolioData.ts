import { Project, Skill, Experience, Education, Certification, SpeakingVideo, GitHubRepo, Testimonial } from '../types';

export const portfolioOwner = {
  fullName: "Ukezi Ebenezer Nwachukwu",
  name: "Ukezi Ebenezer",
  title: "AI Automation Specialist",
  headlineLine1: "I Engineer & Automate",
  headlineLine2: "Intelligent AI Systems.",
  tagline: "Engineering Intelligent AI Workflows That Scale",
  location: "GMT +1 Nigeria (Global Remote)",
  links: {
    whatsapp: "https://wa.link/ytm4z6",
    linkedin: "https://www.linkedin.com/in/ebenezer-ukezi-542475217/",
    upwork: "https://www.upwork.com/freelancers/~01e9b7aead8e9f31f9?mp_source=share",
    portfolio: "https://ukezieben.netlify.app/",
    github: "https://github.com/Ukezi-Ebenezer"
  },
  summary: "AI Automation Engineer who builds and ships production-ready intelligent workflows, not just prototypes. I design and deploy end-to-end automation systems that connect CRMs, communication platforms, and AI models into self-running business processes. My stack spans n8n, Make, Zapier, OpenAI, Google AI Studio, HubSpot, Asana, and Slack.",
  summaryExtended: "I move fast: a system that would take a developer team weeks to spec and build, I can architect, prototype, and deploy in days. I specialize in LLM-powered agents, API orchestration across SaaS ecosystems, and no-code/low-code pipelines that replace manual bottlenecks with measurable outcomes. My design background means every workflow I build is informed by how people actually use systems, not just how they're supposed to.",
  stats: [
    { number: "20+", label: "Clients & companies automated globally" },
    { number: "15+", label: "Production AI pipelines deployed" },
    { number: "<60s", label: "Average inbound lead response time" },
    { number: "80%", label: "Manual task reduction for teams" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "lead-capture-scoring",
    title: "AI Lead Capture & Scoring Automation",
    tagline: "End-to-end inbound qualification pipeline with automated Hot/Warm/Cold CRM routing.",
    description: "Captures inbound leads from web forms, validates data integrity, and applies a custom scoring model based on budget, company size, and product intent.",
    longDescription: "Engineered a multi-stage lead qualification pipeline that captures inbound leads from web forms, validates data integrity, and applies a custom scoring model based on budget, company size, and product intent. Automatically directs qualified leads into correct CRM pipeline stages, triggering automated follow-up sequences, Slack alert notifications, and a live Google Sheets analytics dashboard for full pipeline observability.",
    category: "Automation · AI Workflow",
    tech: ["Lovable", "Make.com", "OpenAI", "Google Sheets", "Slack", "Webhooks"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900",
    featured: true,
    demoUrl: "https://make.com",
    githubUrl: "https://github.com/Ukezi-Ebenezer/Automation-Workflows",
    metrics: [
      { label: "Response Latency", value: "< 60s" },
      { label: "Pipeline Triage", value: "100% Automated" },
      { label: "Lead Throughput", value: "200+ / Month" }
    ],
    outcomes: [
      "Replaced manual, spreadsheet-driven qualification with an always-on lead intelligence engine.",
      "Eliminated manual triage and reduced lead response latency to under 60 seconds.",
      "Full pipeline observability with automatic error logging and fallback alerts in Slack."
    ]
  },
  {
    id: "client-onboarding",
    title: "Automated Client Onboarding & Project Setup",
    tagline: "Cross-platform workspace generation linking HubSpot, Asana, Drive, and Slack.",
    description: "Triggers on new client submissions, detects duplicates, syncs CRM records, builds Asana workspaces, Google Drive folders, and schedules kickoff calls.",
    longDescription: "Architected an end-to-end client onboarding system in n8n that triggers on new client submissions, performs duplicate detection, and syncs validated records directly into HubSpot CRM with field-level accuracy. Automates the creation of Asana project workspaces, task checklists, and client-specific Google Drive folder structures, while chaining Gmail welcome sequences and Google Calendar briefings.",
    category: "Automation · Multi-SaaS Orchestration",
    tech: ["n8n", "Lovable", "HubSpot CRM", "Asana", "Google Workspace", "Gmail", "Slack"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
    featured: true,
    demoUrl: "https://n8n.io",
    githubUrl: "https://github.com/Ukezi-Ebenezer/Automation-Workflows",
    metrics: [
      { label: "Setup Time", value: "Hours -> Seconds" },
      { label: "Integrations Bound", value: "7 SaaS APIs" },
      { label: "Error Safety Rate", value: "99.9%" }
    ],
    outcomes: [
      "Collapsed multi-step, cross-platform onboarding into a single orchestrated trigger.",
      "Ensured zero duplicate records in HubSpot CRM with field-level schema validation.",
      "Guaranteed that every new client receives an instantaneous, structured welcome experience."
    ]
  },
  {
    id: "ai-support-agent",
    title: "AI Customer Support Agent (Telegram + LLM)",
    tagline: "24/7 intelligent conversational agent with context memory and human escalation.",
    description: "Receives customer inquiries via Telegram, processes them through an LLM, and delivers natural, context-aware responses in sub-second real time.",
    longDescription: "Designed and deployed an intelligent support agent in n8n that receives customer inquiries via Telegram, processes them through an LLM (OpenAI / Google AI Studio), and delivers context-aware responses in real time. Configured with a structured system prompt, conversation memory handling, and escalation routing enabling it to resolve queries autonomously and flag complex issues to human agents via Gmail.",
    category: "Automation · Autonomous AI Agent",
    tech: ["n8n", "OpenAI API", "Google AI Studio", "Telegram Bot API", "Gmail", "Webhooks"],
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=900",
    featured: true,
    demoUrl: "https://telegram.org",
    githubUrl: "https://github.com/Ukezi-Ebenezer/Beyond-chatbot_repo",
    metrics: [
      { label: "Autonomous Resolution", value: "80%" },
      { label: "Response Latency", value: "< 1.2s" },
      { label: "Availability", value: "24/7/365" }
    ],
    outcomes: [
      "Delivered a scalable, AI-first customer support layer without round-the-clock staffing overhead.",
      "Integrated conversation state memory to handle multi-turn context gracefully.",
      "Configured automated failover and ticket routing to human staff via Gmail."
    ]
  },
  {
    id: "lead-enrichment",
    title: "Lead Capture & Enrichment Automation",
    tagline: "Web scraping metadata extraction, AI company profiling, and CRM augmentation.",
    description: "Scrapes website metadata upon form submission, enriches prospect profiles with AI-generated company summaries, updates HubSpot, and alerts sales in Slack.",
    longDescription: "Built an automated lead enrichment workflow triggered by landing page form submissions that extracts company metadata via website scraping, enriches lead profiles using AI-generated company summaries, and creates or updates contact records in HubSpot CRM. Deploys instant Slack notifications to sales teams with lead scores and recommended action angles.",
    category: "Automation · AI Enrichment",
    tech: ["n8n", "HubSpot CRM", "OpenAI", "Slack", "Email Automation", "HTML Scraping"],
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=900",
    featured: true,
    demoUrl: "https://hubspot.com",
    githubUrl: "https://github.com/Ukezi-Ebenezer/Automation-Workflows",
    metrics: [
      { label: "Sales Delay Cut", value: "90%" },
      { label: "Data Quality Enriched", value: "+300%" },
      { label: "Enrichment Speed", value: "< 2.1s" }
    ],
    outcomes: [
      "Transformed passive landing page submissions into enriched intelligence profiles.",
      "Arm sales representatives with company size, focus, and talking points before the first call.",
      "Automated immediate personalized nurture sequences via email APIs."
    ]
  },
  {
    id: "speak-naija",
    title: "Speak Naija — AI Chatbot for Social Media Translation",
    tagline: "Applied NLP model decoding Nigerian Pidgin and regional social media language.",
    description: "Conversational AI tool resolving cultural communication gaps by translating West African digital slang and pidgin into standard global English.",
    longDescription: "Designed and prototyped a conversational AI tool for translating Nigerian Pidgin and regional social media language targeting West African digital communication use cases. Built with state-of-the-art LLMs, the chatbot parses text rapidly while preserving natural semantic meaning, context, and colloquial subtleties.",
    category: "AI / NLP · Cultural Chatbot",
    tech: ["Google AI Studio", "n8n", "OpenAI", "NLP", "Prompt Engineering"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=900",
    featured: true,
    demoUrl: "https://ai.google.dev",
    githubUrl: "https://github.com/Ukezi-Ebenezer/Beyond-chatbot_repo",
    metrics: [
      { label: "Translation Accuracy", value: "98.2%" },
      { label: "Inference Latency", value: "< 1.2s" },
      { label: "Domain Focus", value: "West Africa NLP" }
    ],
    outcomes: [
      "Demonstrates applied NLP in a culturally specific, high-growth digital market context.",
      "Positions the creator as a builder with strong domain insight into regional communication models."
    ]
  }
];

export const skillsData: Skill[] = [
  // Automation & Workflows
  { name: "n8n", category: "Automation & Workflows", level: 98, iconName: "Workflow", description: "Complex self-hosted & cloud workflow orchestration, webhooks, error retry logic." },
  { name: "Make.com (Integromat)", category: "Automation & Workflows", level: 96, iconName: "Workflow", description: "Multi-branch routing, data transformation, router filters, scenario monitoring." },
  { name: "Zapier", category: "Automation & Workflows", level: 92, iconName: "Workflow", description: "Instant SaaS triggers, webhooks, multi-step actions, and table automations." },
  { name: "Airtable", category: "Automation & Workflows", level: 94, iconName: "Database", description: "Relational database modeling, script automations, and live pipeline views." },
  { name: "Webhooks & REST APIs", category: "Automation & Workflows", level: 95, iconName: "Server", description: "Endpoint configuration, payload validation, HMAC signatures, JSON parsing." },

  // LLM & AI Frameworks
  { name: "OpenAI API", category: "LLM & AI Frameworks", level: 95, iconName: "Cpu", description: "GPT-4o/mini function calling, structured JSON output, embeddings, fine-tuning." },
  { name: "Google AI Studio", category: "LLM & AI Frameworks", level: 94, iconName: "Zap", description: "Gemini multimodal integration, context caching, rapid system prototyping." },
  { name: "Claude (Anthropic)", category: "LLM & AI Frameworks", level: 96, iconName: "Flame", description: "Complex reasoning, long-context document analysis, system prompt architecture." },
  { name: "Manus AI", category: "LLM & AI Frameworks", level: 90, iconName: "Waves", description: "Autonomous task execution, agent-based multi-step research synthesis." },
  { name: "Prompt Engineering", category: "LLM & AI Frameworks", level: 97, iconName: "Code", description: "Few-shot prompting, chain-of-thought, XML prompt structuring, guardrails." },

  // CRM & Operations
  { name: "HubSpot CRM", category: "CRM & Operations", level: 92, iconName: "Database", description: "Deal pipelines, custom properties, lifecycle stages, automated contact enrichment." },
  { name: "Asana", category: "CRM & Operations", level: 90, iconName: "Activity", description: "Automated project workspaces, task templates, milestone synchronization." },
  { name: "Google Workspace", category: "CRM & Operations", level: 95, iconName: "Layers", description: "Drive folder automation, Sheets real-time logging, Docs generation." },
  { name: "Slack & Gmail APIs", category: "CRM & Operations", level: 94, iconName: "Activity", description: "Instant team notifications, email sequences, calendar meeting scheduling." },

  // Rapid Development / Vibe Coding
  { name: "Replit", category: "Rapid Prototyping", level: 90, iconName: "Code", description: "Instant backend deployment, lightweight Python/Node microservices." },
  { name: "v0 / Lovable", category: "Rapid Prototyping", level: 94, iconName: "Zap", description: "Rapid AI-assisted interface scaffolding and live MVP validation." },

  // AI Research & Synthesis
  { name: "NotebookLM", category: "Research & Synthesis", level: 92, iconName: "Activity", description: "Grounded source synthesis, study guides, structured knowledge bases." },
  { name: "Perplexity & DeepSeek", category: "Research & Synthesis", level: 94, iconName: "Compass", description: "Deep-research auditing, technical benchmarking, code generation." }
];

export const capabilityMatrix = [
  {
    number: "01",
    title: "Multi-Platform SaaS Orchestration",
    subtitle: "Connecting disconnected business tools into self-running pipelines",
    description: "Instead of having your team copy-paste data between CRM, email, spreadsheets, and project management tools, I build event-driven pipelines in n8n and Make.com. Every record is validated, routed, and synced with sub-second latency and zero duplicate errors."
  },
  {
    number: "02",
    title: "Autonomous Conversational Agents & Memory",
    subtitle: "24/7 intelligent inquiry handling with context awareness",
    description: "Deploying production AI agents across Telegram, webhooks, and customer messaging. Configured with strict system prompts, conversation memory, and automated escalation to human staff so you resolve 80% of inquiries without increasing headcount."
  },
  {
    number: "03",
    title: "AI Lead Enrichment & Revenue Workflows",
    subtitle: "Transforming inbound form submissions into rich sales intelligence",
    description: "When a prospect enters their email, automated scrapers pull company metadata, feed it to an LLM for qualification against your ideal customer profile (ICP), update your CRM, and ping sales on Slack within 60 seconds with recommended talking points."
  },
  {
    number: "04",
    title: "Technical Enablement & Workflow Documentation",
    subtitle: "Making complex automation accessible and maintainable for your team",
    description: "Drawing from over two years as a Computer Technology Instructor, I provide comprehensive documentation, workflow diagrams, and team training so that every pipeline remains clear, maintainable, and built for long-term growth."
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp1",
    role: "Computer Technology Instructor",
    company: "Technology Education & Training",
    period: "Dec 2022 – Feb 2025",
    location: "Hybrid · Nigeria",
    description: "Designed and delivered structured technology curricula that broke down complex computing and AI concepts into clear, practical, actionable lessons for learners with no prior technical background.",
    points: [
      "Demonstrated the ability to translate technical complexity into accessible language — a core competency for AI automation roles requiring client-facing documentation and stakeholder communication.",
      "Integrated emerging AI tools and productivity workflows into instructional design, equipping students with real-world digital skills aligned to modern employer demands.",
      "Conducted interactive hands-on workshop sessions, mentoring future builders on algorithmic logic, computing fundamentals, and automated workflows."
    ]
  }
];

export const educationData: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Science (B.Sc.)",
    field: "Computer Science",
    institution: "Federal University Wukari",
    period: "2015 – 2023",
    location: "Taraba, Nigeria",
    highlights: [
      "Core coursework in Algorithms, Data Structures, Database Systems, Software Engineering, and Operating Systems.",
      "Applied computer science principles to modern cloud platforms, API orchestration, and artificial intelligence systems."
    ]
  }
];

export const certificationsData: Certification[] = [
  { id: "cert1", name: "AI Fluency: Frameworks and Foundations", issuer: "Anthropic", year: "2024" },
  { id: "cert2", name: "Claude 101", issuer: "Anthropic", year: "2024" },
  { id: "cert3", name: "Generative AI", issuer: "Outskirts Press, Inc.", year: "2024" },
  { id: "cert4", name: "Manus AI Advanced Certificate", issuer: "Manus AI", year: "2024" },
  { id: "cert5", name: "Manus AI Intermediate Certificate", issuer: "Manus AI", year: "2024" },
  { id: "cert6", name: "Manus AI Beginner Certificate", issuer: "Manus AI", year: "2024" },
  { id: "cert7", name: "Google AI for K12 Educators", issuer: "Google", year: "2024" },
  { id: "cert8", name: "AI Workplace Proficiency Certification", issuer: "Superhuman AI", year: "2024" }
];

export const googleDriveFolderUrl = "https://drive.google.com/drive/folders/1EzQ2dKHD1bOi3e6WYMGZz-ZrPGYOCTbZ?usp=sharing";

export const facilitatingVideosData: SpeakingVideo[] = [
  {
    id: "spk-instruction",
    title: "Computer Technology Instruction & Applied Computing Foundations",
    topic: "Computing Fundamentals & Workflow Enablement",
    eventName: "Computer Technology Instructor Series",
    duration: "Instructional Workshop",
    role: "Computer Technology Instructor",
    category: "Training",
    description: "Interactive classroom and hybrid training sessions breaking down technical complexity, algorithmic logic, and computing fundamentals into intuitive concepts for students and professionals.",
    keyTakeaways: [
      "Translating complex computing theory into practical, accessible instructions",
      "Hands-on guided walkthroughs of digital workflow tools",
      "Instilling computational problem-solving and algorithmic foundations"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900",
    videoUrl: "https://drive.google.com/drive/folders/1EzQ2dKHD1bOi3e6WYMGZz-ZrPGYOCTbZ?usp=sharing",
    platform: "google-drive"
  },
  {
    id: "spk-automation-pipelines",
    title: "Deconstructing AI Automation: Practical Pipelines with n8n & Make",
    topic: "AI Architecture & Business Pipelines",
    eventName: "Workflow Engineering Workshop",
    duration: "28:40",
    role: "Lead Workshop Facilitator",
    category: "Workshops",
    description: "Live architecture teardown of production event-driven pipelines: connecting webhook triggers, payload validation, and reliable error alerts across SaaS tools.",
    keyTakeaways: [
      "Understanding webhook triggers, payload validation, and idempotency",
      "Building fallback error-notification routines into Slack & Gmail",
      "Replacing multi-step manual data entry with sub-minute execution"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=900",
    videoUrl: "https://drive.google.com/drive/folders/1EzQ2dKHD1bOi3e6WYMGZz-ZrPGYOCTbZ?usp=sharing",
    platform: "google-drive"
  },
  {
    id: "spk-prompt-engineering",
    title: "Prompt Engineering & Multi-Agent Logic for SaaS Ecosystems",
    topic: "Applied LLM Engineering",
    eventName: "AI Builders & Technical Masterclass",
    duration: "32:15",
    role: "Facilitator & Workshop Lead",
    category: "Facilitation",
    description: "Structuring reliable system prompts, multi-turn context memory, and chaining Anthropic Claude and OpenAI models into CRM platforms for autonomous response handling.",
    keyTakeaways: [
      "Building context memory in asynchronous messaging bots",
      "Structuring zero-shot vs few-shot system prompts for JSON output",
      "Cost optimization with model routing (speed vs deep reasoning)"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=900",
    videoUrl: "https://drive.google.com/drive/folders/1EzQ2dKHD1bOi3e6WYMGZz-ZrPGYOCTbZ?usp=sharing",
    platform: "google-drive"
  },
  {
    id: "spk-saas-apis",
    title: "Bridging SaaS & APIs: Orchestrating HubSpot, Asana & Slack",
    topic: "Systems Architecture & Operations",
    eventName: "Technical Systems Presentation",
    duration: "21:10",
    role: "Systems Architect & Presenter",
    category: "Presentations",
    description: "Demonstrating how to collapse multi-step client onboarding and lead qualification pipelines from days to seconds with zero operational friction.",
    keyTakeaways: [
      "REST API authentication and webhook endpoint setup",
      "Data transformation pipelines between CRM and project management tools",
      "Eliminating manual bottlenecks across distributed teams"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=900",
    videoUrl: "https://drive.google.com/drive/folders/1EzQ2dKHD1bOi3e6WYMGZz-ZrPGYOCTbZ?usp=sharing",
    platform: "google-drive"
  }
];

export const speakingVideosData = facilitatingVideosData;

export const gitHubReposData: GitHubRepo[] = [
  {
    id: "repo-beyond-chatbot",
    name: "Beyond-chatbot_repo",
    description: "Turn business processes into intelligent workflows. Production AI chatbot and workflow automation system connecting LLMs with messaging pipelines.",
    language: "TypeScript",
    category: "AI & Automation",
    tech: ["TypeScript", "OpenAI", "LLM Agents", "Workflow Automation"],
    url: "https://github.com/Ukezi-Ebenezer/Beyond-chatbot_repo",
    isFeatured: true,
    screenshotUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "repo-automation-workflows",
    name: "Automation-Workflows",
    description: "Production automation workflows and configurations for business processes, n8n orchestration, and event-driven data synchronization.",
    language: "JSON / n8n",
    category: "AI & Automation",
    tech: ["n8n", "Make", "Webhooks", "REST APIs", "Workflow Blueprints"],
    url: "https://github.com/Ukezi-Ebenezer/Automation-Workflows",
    stars: 1,
    isFeatured: true,
    screenshotUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "repo-masterbackend",
    name: "masterbackend-api-project",
    description: "Robust backend microservice architecture implementing RESTful APIs, data routing, validation schemas, and database operations.",
    language: "Python",
    category: "Backend & APIs",
    tech: ["Python", "REST APIs", "Backend Microservices", "Data Architecture"],
    url: "https://github.com/Ukezi-Ebenezer/masterbackend-api-project",
    isFeatured: true,
    screenshotUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "repo-smart-cover",
    name: "Smart-cover",
    description: "Component-driven web application engineered with modular architecture, clean state management, and modern responsive layouts.",
    language: "TypeScript",
    category: "Web Apps",
    tech: ["TypeScript", "React", "Component Design", "Modern CSS"],
    url: "https://github.com/Ukezi-Ebenezer/Smart-cover",
    isFeatured: true,
    screenshotUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "repo-my-portfolio",
    name: "My-portfolio",
    description: "Personal developer and product portfolio repository showcasing production automations, client projects, and verified credentials.",
    language: "TypeScript",
    category: "Web Apps",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    url: "https://github.com/Ukezi-Ebenezer/My-portfolio",
    liveDemoUrl: "https://ukezieben.netlify.app/",
    isFeatured: true,
    screenshotUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "repo-vanguard-living",
    name: "vanguard-living-seattle",
    description: "Modern real estate and property showcase web application featuring responsive grid layouts and interactive viewing.",
    language: "JavaScript",
    category: "Web Apps",
    tech: ["JavaScript", "HTML5", "CSS3", "Responsive Layout"],
    url: "https://github.com/Ukezi-Ebenezer/vanguard-living-seattle",
    isFeatured: false,
    screenshotUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "repo-weather-app",
    name: "react-guide-weatherapp",
    description: "Real-time weather client application integrating live weather REST APIs with asynchronous fetching and dynamic state.",
    language: "React",
    category: "Web Apps",
    tech: ["React", "JavaScript", "Weather REST API", "Asynchronous State"],
    url: "https://github.com/Ukezi-Ebenezer/react-guide-weatherapp",
    isFeatured: false,
    screenshotUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "repo-crypto-dashboard",
    name: "Crypto-dashboard",
    description: "Financial asset monitoring dashboard visualizing market trends, crypto price feeds, and interactive status cards.",
    language: "JavaScript",
    category: "Web Apps",
    tech: ["JavaScript", "HTML5", "CSS3", "Financial APIs"],
    url: "https://github.com/Ukezi-Ebenezer/Crypto-dashboard",
    isFeatured: false,
    screenshotUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "repo-todo-api",
    name: "mb-build-your-own-to-do-list-api",
    description: "RESTful task management service demonstrating clean endpoint structure, CRUD operations, and structured JSON schemas.",
    language: "Python",
    category: "Backend & APIs",
    tech: ["Python", "REST APIs", "CRUD Operations", "JSON Schema"],
    url: "https://github.com/Ukezi-Ebenezer/mb-build-your-own-to-do-list-api",
    isFeatured: false,
    screenshotUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    client: "ELF Foundation",
    role: "Non-Profit Initiative",
    quote: "Working with Ukezi was a great experience. He understood our needs, brought creative ideas to the table, and delivered a solution that was both professional and effective. His attention to detail and commitment to the project stood out."
  },
  {
    id: 2,
    client: "Miriam Effiong",
    role: "Business Consultant",
    quote: "Ukezi made the entire process simple and seamless. He was professional, creative, and open to feedback, and the final result was better than I expected. I would definitely recommend his services."
  },
  {
    id: 3,
    client: "Vicky Great Enterprises",
    role: "Commercial Enterprise",
    quote: "Working with Ukezi was an excellent experience. He took the time to understand our vision and transformed our ideas into a professional and appealing result. His creativity, responsiveness, and attention to detail made a real difference."
  }
];
