# Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a beautiful dark mode design, smooth animations, and optional backend integration with Supabase.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with Space Grotesk typography
- 🌓 **Dark Mode**: Beautiful dark theme with smooth transitions
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and production builds
- 📱 **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- 🎬 **Smooth Animations**: GSAP-powered curtain reveal and scroll animations
- ♿ **Accessible**: WCAG-compliant with semantic HTML and ARIA labels
- 🔌 **BaaS Ready**: Optional Supabase integration for backend functionality
- 🎯 **Mock Mode**: Develop and test without a backend using local mock data
- 🚀 **GitHub Pages**: Ready for deployment with included workflow

## 📁 Project Structure

```
personal_web/
├── .github/workflows/    # GitHub Actions workflows
│   └── pages.yml         # Automated deployment to GitHub Pages
├── public/               # Static assets
│   └── 404.html          # SPA routing fallback for GitHub Pages
├── src/
│   ├── components/       # React components
│   │   ├── ui/           # Reusable UI components (Button, Input, etc.)
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Page components (routes)
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Thoughts.tsx
│   │   └── Contact.tsx
│   ├── lib/              # Utilities and configurations
│   │   ├── api.ts        # API layer with Supabase/mock integration
│   │   ├── supabase.ts   # Supabase client configuration
│   │   ├── animations.ts # GSAP animation utilities
│   │   ├── utils.ts      # Helper functions
│   │   └── types.ts      # TypeScript type definitions
│   ├── data/             # Local data
│   │   └── mockData.ts   # Mock data for development
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .eslintrc.cjs         # ESLint configuration
├── .prettierrc           # Prettier configuration
├── .editorconfig         # EditorConfig for consistent coding styles
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite build configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** or **pnpm** or **yarn**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git
cd <REPO_NAME>
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables** (optional)

Create a `.env.local` file in the root directory. For local development without a backend:

```env
VITE_USE_MOCK=true
```

For production with Supabase (see [Backend Setup](#-backend-setup-supabase)):

```env
VITE_USE_MOCK=false
VITE_SUPABASE_URL=your-project-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Development

```bash
# Start development server (with backend if configured)
npm run dev

# Start development server in mock mode (no backend needed)
npm run dev:mock
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🗄️ Backend Setup (Supabase)

The project supports optional backend integration with Supabase for contact form submissions and dynamic content.

### Option 1: Mock Mode (No Backend)

By default, the app runs in mock mode using local data from `src/data/mockData.ts`. Perfect for development and static deployments.

```bash
npm run dev:mock
```

### Option 2: Supabase Integration

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Set up database tables**

```sql
-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  long_description TEXT,
  tags TEXT[],
  category TEXT,
  image_url TEXT,
  github_url TEXT,
  website_url TEXT,
  featured BOOLEAN DEFAULT false,
  role TEXT,
  client TEXT,
  timeline TEXT,
  services TEXT[],
  tech_stack TEXT[],
  outcomes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Thoughts table
CREATE TABLE thoughts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  date DATE NOT NULL,
  read_time INTEGER,
  tags TEXT[]
);

-- Contact messages table
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. **Configure environment variables**

Update `.env.local`:

```env
VITE_USE_MOCK=false
VITE_SUPABASE_URL=your-project-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

4. **Enable Row Level Security (RLS)**

```sql
-- Allow public read access to projects and thoughts
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE thoughts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON thoughts FOR SELECT USING (true);

-- Allow anyone to submit contact messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow insert" ON contact_messages FOR INSERT WITH CHECK (true);
```

## 📝 Content Management

### Adding Projects

Edit `src/data/mockData.ts` to add new projects:

```typescript
{
  id: '7',
  slug: 'my-new-project',
  name: 'My New Project',
  description: 'A brief description',
  tags: ['React', 'TypeScript'],
  category: 'Web App',
  imageUrl: 'https://...',
  githubUrl: 'https://github.com/...',
  websiteUrl: 'https://...',
  createdAt: '2024-01-01',
}
```

### Adding Thoughts/Blog Posts

Edit `src/data/mockData.ts`:

```typescript
{
  id: '4',
  slug: 'my-blog-post',
  title: 'My Blog Post Title',
  excerpt: 'A brief excerpt',
  content: '# Full markdown content here...',
  date: '2024-01-01',
  readTime: 5,
  tags: ['JavaScript', 'React'],
}
```

## 🎨 Customization

### Design Tokens

Edit `tailwind.config.js` to customize colors, fonts, and spacing:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1313ec',  // Your brand color
      accent: '#64FFDA',   // Accent color
    },
    fontFamily: {
      display: ['Space Grotesk', 'sans-serif'],
    },
  },
}
```

### Animations

To disable animations, remove or comment out animation calls in component files (e.g., `src/pages/Home.tsx`).

### Personal Information

Update the following files with your information:
- `src/components/Navigation.tsx` - Your name and logo
- `src/components/Footer.tsx` - Social links and copyright
- `src/pages/Home.tsx` - Hero section content
- `src/pages/Contact.tsx` - Email address
- `index.html` - Page title and meta description

## 🚀 Deployment to GitHub Pages

### Step 1: Prepare Repository

1. Create a new repository on GitHub
2. Initialize git and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**

### Step 3: Configure Base Path (if using repo subdirectory)

If deploying to `https://<GITHUB_USERNAME>.github.io/<REPO_NAME>`, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/<REPO_NAME>/',
  // ... rest of config
});
```

If using a custom domain or deploying to root, keep `base: '/'` (default).

### Step 4: Deploy

The GitHub Action will automatically build and deploy on every push to `main`:

```bash
git add .
git commit -m "Update content"
git push
```

Visit `https://<GITHUB_USERNAME>.github.io/<REPO_NAME>` (or your custom domain).

### Custom Domain Setup (Optional)

1. Create a `CNAME` file in the `public/` directory:

```
yourdomain.com
```

2. Configure DNS records with your domain provider:

```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: <GITHUB_USERNAME>.github.io
```

3. Enable **Enforce HTTPS** in GitHub Pages settings

## 📊 Performance

- Lighthouse Score: 90+ (Performance/Best Practices/SEO/Accessibility)
- Code splitting for optimal loading
- Lazy loading for images
- Optimized bundle size with tree-shaking
- First Contentful Paint < 1.5s

Run Lighthouse audit:

```bash
npm run build
npm run preview
# Open Chrome DevTools > Lighthouse
```

## 🧪 Scripts

```bash
npm run dev          # Start development server
npm run dev:mock     # Start dev server in mock mode
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking
npm run deploy:pages # Build and deploy to GitHub Pages
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: GSAP + Framer Motion
- **Routing**: React Router v7
- **Backend**: Supabase (optional)
- **Deployment**: GitHub Pages
- **Linting**: ESLint + Prettier

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/<GITHUB_USERNAME>/<REPO_NAME>](https://github.com/<GITHUB_USERNAME>/<REPO_NAME>)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**










