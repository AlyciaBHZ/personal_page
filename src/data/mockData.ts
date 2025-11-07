import type { Project, Thought } from '../lib/types';

export const mockProjects: Project[] = [
  {
    id: '1',
    slug: 'philo-drinking-game',
    name: 'Philo Drinking Game',
    description: 'An interactive party card game with philosophical twists and drinking challenges.',
    longDescription:
      'Philo Drinking Game is a web-based party game that combines philosophical questions with drinking challenges. Players draw cards from different categories including philosophical debates, truth or dare, and creative challenges. Built with modern React and featuring a beautiful UI inspired by card game aesthetics.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'Web App',
    imageUrl: '/philo-game.jpg',
    githubUrl: 'https://github.com/AlyciaBHZ/philo-drinking',
    websiteUrl: 'https://philo.lexaverse.dev',
    featured: true,
    role: 'Creator & Developer',
    client: 'Personal Project',
    timeline: '2 Weeks',
    services: ['Web Development', 'Game Design', 'UI/UX'],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    outcomes:
      'Created an engaging party game with over 100 unique cards across multiple categories. Features smooth animations, responsive design, and an intuitive user interface perfect for social gatherings.',
    createdAt: '2025-11-04',
  },
  {
    id: '1.5',
    slug: 'xiao-liu-ren-divination',
    name: 'Xiao Liu Ren Divination Tool',
    description: 'A modern web-based divination tool for traditional Chinese Xiao Liu Ren (小六壬) fortune-telling.',
    longDescription:
      'Xiao Liu Ren Divination Tool is a comprehensive web application that brings the ancient Chinese divination method into the modern era. It implements the complete Six Ren calculation algorithm with six palace layouts (大安、流连、速喜、赤口、小吉、空亡), five elements correspondence, twelve time periods, and divine creature annotations. Built with React and TypeScript, it features a clean, minimalist design that respects traditional aesthetics while providing instant calculations and detailed user guidance.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'I18n'],
    category: 'Web App',
    imageUrl: '/mysterious-game.png',
    githubUrl: 'https://github.com/AlyciaBHZ/mysterious',
    websiteUrl: 'https://mysterious.lexaverse.dev',
    featured: true,
    role: 'Creator & Developer',
    client: 'Personal Project',
    timeline: '1 Week',
    services: ['Web Development', 'Algorithm Implementation', 'UI/UX'],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    outcomes:
      'Created a functional divination tool that accurately implements the Xiao Liu Ren algorithm with an intuitive interface. Features include real-time calculation, responsive design, built-in user manual, and support for all twelve time periods with complete five elements and divine creature correspondences.',
    createdAt: '2025-11-07',
  },
  {
    id: '2',
    slug: 'e-commerce-platform',
    name: 'E-commerce Platform',
    description: 'A full-stack web application built with React and Node.js.',
    longDescription:
      'This project is a full-featured e-commerce platform built from the ground up using modern web technologies. The goal was to create a fast, intuitive, and visually appealing shopping experience for customers, while providing a powerful and easy-to-use dashboard for administrators to manage products, orders, and customers.',
    tags: ['React', 'Node.js', 'Figma'],
    category: 'Web App',
    imageUrl:
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    websiteUrl: 'https://ecommerce-demo.example.com',
    featured: false,
    role: 'Lead Developer',
    client: 'Personal Project',
    timeline: '3 Months',
    services: ['Web Development', 'UI/UX'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Figma'],
    outcomes:
      'The project successfully met all its objectives, resulting in a fully functional e-commerce site that saw a 20% increase in user engagement during beta testing.',
    createdAt: '2023-10-01',
  },
  {
    id: '3',
    slug: 'task-management-app',
    name: 'Task Management App',
    description: 'A productivity tool for teams to manage tasks and workflows.',
    tags: ['Vue', 'Firebase', 'TypeScript'],
    category: 'Web App',
    imageUrl:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    featured: false,
    createdAt: '2023-09-15',
  },
  {
    id: '4',
    slug: 'design-system',
    name: 'Design System',
    description: 'A comprehensive component library created in Figma.',
    tags: ['Figma', 'Storybook'],
    category: 'UI/UX',
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    createdAt: '2023-08-20',
  },
  {
    id: '5',
    slug: 'mobile-weather-app',
    name: 'Mobile Weather App',
    description: 'A native mobile application for checking weather forecasts.',
    tags: ['React Native', 'API'],
    category: 'Mobile',
    imageUrl:
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    createdAt: '2023-07-10',
  },
  {
    id: '6',
    slug: 'data-visualization-dashboard',
    name: 'Data Visualization Dashboard',
    description: 'An analytics dashboard for visualizing complex datasets.',
    tags: ['D3.js', 'Python', 'Flask'],
    category: 'Web App',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    createdAt: '2023-06-05',
  },
  {
    id: '7',
    slug: 'portfolio-website-v1',
    name: 'Portfolio Website V1',
    description: "The first version of my personal portfolio, built with Next.js.",
    tags: ['Next.js', 'Vercel'],
    category: 'Web App',
    imageUrl:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    createdAt: '2023-05-01',
  },
];

export const mockThoughts: Thought[] = [
  {
    id: '1',
    slug: 'on-the-evolution-of-frontend-frameworks',
    title: 'On the Evolution of Frontend Frameworks',
    excerpt:
      'Exploring the journey of frontend development, from the early days of jQuery to the modern era of reactive frameworks like React, Vue, and Svelte.',
    content: `
# On the Evolution of Frontend Frameworks

Exploring the journey of frontend development, from the early days of jQuery to the modern era of reactive frameworks like React, Vue, and Svelte.

## The jQuery Era

In the early 2000s, jQuery revolutionized web development by providing a simple API for DOM manipulation...

## The Rise of SPAs

Single Page Applications changed the game...

## Modern Frameworks

Today's frameworks like React, Vue, and Svelte offer unprecedented developer experience and performance...
    `,
    coverImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80',
    date: '2023-10-26',
    readTime: 8,
    tags: ['JavaScript', 'React', 'Frontend'],
  },
  {
    id: '2',
    slug: 'why-side-projects-are-essential-for-growth',
    title: 'Why Side Projects are Essential for Growth',
    excerpt:
      'A deep dive into how personal projects can accelerate learning, build a stronger portfolio, and foster creativity outside of a 9-to-5 role.',
    content: `
# Why Side Projects are Essential for Growth

Personal projects are one of the most effective ways to grow as a developer...

## Learning by Doing

The best way to learn is by building...
    `,
    coverImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    date: '2023-09-15',
    readTime: 6,
    tags: ['Career', 'Learning', 'Development'],
  },
  {
    id: '3',
    slug: 'demystifying-the-event-loop',
    title: 'Demystifying the Event Loop',
    excerpt:
      "Breaking down one of JavaScript's most fundamental and often misunderstood concepts. A practical guide for developers of all levels.",
    content: `
# Demystifying the Event Loop

Understanding the event loop is crucial for writing efficient JavaScript code...

## Call Stack

The call stack is where your code executes...

## Callback Queue

When asynchronous operations complete...
    `,
    coverImage:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80',
    date: '2023-08-01',
    readTime: 10,
    tags: ['JavaScript', 'Async', 'Fundamentals'],
  },
];

