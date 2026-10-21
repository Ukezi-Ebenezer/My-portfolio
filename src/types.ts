export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  tech: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  outcomes?: string[];
  architecture?: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number; // 0 to 100
  iconName: string;
  description?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  points: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  verificationUrl?: string;
}

export interface FacilitatingVideo {
  id: string;
  title: string;
  description: string;
  topic: string;
  eventName?: string; // Verified event/program name
  duration?: string;
  role?: string;
  thumbnailUrl: string;
  videoUrl?: string; // YouTube, Google Drive link, or direct mp4
  embedUrl?: string; // Optional direct embed URL
  platform: 'google-drive' | 'youtube' | 'external';
  keyTakeaways?: string[];
  category?: 'Workshops' | 'Training' | 'Presentations' | 'Facilitation';
  date?: string;
}

export type SpeakingVideo = FacilitatingVideo;

export interface GitHubRepo {
  id: string;
  name: string;
  description: string;
  language: string;
  category: 'AI & Automation' | 'Web Apps' | 'Backend & APIs';
  stars?: number;
  forks?: number;
  url: string;
  liveDemoUrl?: string;
  screenshotUrl?: string;
  tech: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: number;
  client: string;
  role?: string;
  quote: string;
}
