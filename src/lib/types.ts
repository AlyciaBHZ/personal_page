export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: string;
  imageUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  featured?: boolean;
  role?: string;
  client?: string;
  timeline?: string;
  services?: string[];
  techStack?: string[];
  outcomes?: string;
  createdAt: string;
}

export interface Thought {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  date: string;
  readTime?: number;
  tags?: string[];
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  createdAt?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

