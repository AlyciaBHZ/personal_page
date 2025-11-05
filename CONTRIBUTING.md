# Contributing to Personal Portfolio

Thank you for considering contributing to this project! This document outlines the process and guidelines for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project follows a standard code of conduct. Please be respectful and constructive in all interactions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/repo-name.git
   cd repo-name
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-owner/repo-name.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### 1. Keep Your Fork Synced

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

### 2. Make Your Changes

- Write clean, maintainable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

```bash
# Run linting
npm run lint

# Check types
npm run type-check

# Test the build
npm run build

# Preview the production build
npm run preview
```

### 4. Commit Your Changes

Follow the [Commit Message Guidelines](#commit-message-guidelines) below.

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

- Go to the original repository on GitHub
- Click "New Pull Request"
- Select your fork and branch
- Fill out the PR template with:
  - Description of changes
  - Related issues (if any)
  - Screenshots (for UI changes)
  - Testing notes

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types (avoid `any`)
- Use interfaces for object shapes
- Export types from `src/lib/types.ts`

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

// Avoid
const user: any = { ... };
```

### React

- Use functional components with hooks
- Keep components small and focused (single responsibility)
- Extract reusable logic into custom hooks
- Use proper naming: `PascalCase` for components, `camelCase` for functions

```typescript
// Good
export function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState<User | null>(null);
  // ...
}
```

### Styling

- Use Tailwind utility classes
- Follow the project's design tokens (colors, spacing, typography)
- For complex styles, use the `cn()` utility from `@/lib/utils`
- Maintain responsive design (mobile-first approach)

```typescript
// Good
<button className={cn(
  'px-4 py-2 rounded-lg',
  'bg-primary text-white',
  'hover:bg-primary/90 transition-colors',
  className
)}>
  {children}
</button>
```

### File Organization

- Components: `src/components/`
- Pages: `src/pages/`
- Utils/Helpers: `src/lib/`
- Types: `src/lib/types.ts`
- UI Components: `src/components/ui/`

### Naming Conventions

- **Files**: `PascalCase.tsx` for components, `camelCase.ts` for utilities
- **Components**: `PascalCase` (e.g., `UserProfile`)
- **Functions**: `camelCase` (e.g., `getUserData`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`)
- **Types/Interfaces**: `PascalCase` (e.g., `UserProfile`)

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without feature changes
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (dependencies, config, etc.)
- **ci**: CI/CD changes

### Examples

```bash
feat(projects): add filtering by category

feat: add contact form submission to Supabase
fix(navigation): resolve mobile menu not closing on route change
docs: update README with deployment instructions
style: format code with Prettier
refactor(api): extract API logic into separate module
perf(images): add lazy loading for project images
chore(deps): update dependencies to latest versions
```

### Scope

The scope should be the name of the affected component or module:
- `projects`, `thoughts`, `contact`
- `api`, `supabase`, `animations`
- `ui`, `navigation`, `footer`

### Subject

- Use imperative mood ("add" not "added")
- Don't capitalize first letter
- No period at the end
- Keep under 50 characters

### Body (Optional)

- Explain what and why, not how
- Wrap at 72 characters

### Footer (Optional)

- Reference issues: `Fixes #123`, `Closes #456`
- Breaking changes: `BREAKING CHANGE: description`

## Pull Request Process

### Before Submitting

1. ✅ Code passes linting: `npm run lint`
2. ✅ Code is formatted: `npm run format:check`
3. ✅ TypeScript checks pass: `npm run type-check`
4. ✅ Build succeeds: `npm run build`
5. ✅ All commits follow the commit message guidelines
6. ✅ Branch is up to date with `main`

### PR Checklist

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings or errors
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

### Review Process

1. A maintainer will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Delete your feature branch after merge

## Questions?

If you have questions or need help, feel free to:
- Open an issue for discussion
- Reach out via email (see README)

---

Thank you for contributing! 🎉


