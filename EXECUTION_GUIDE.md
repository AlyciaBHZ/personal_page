# 🚀 执行指南 - 快速启动您的个人网站

本指南将带您**从零开始**，完成整个项目的安装、配置、开发到部署的完整流程。

---

## 📋 前置检查清单

在开始之前，请确保：

- [ ] 已安装 **Node.js 18+** ([下载地址](https://nodejs.org/))
- [ ] 已安装 **Git** ([下载地址](https://git-scm.com/))
- [ ] 拥有 **GitHub账号** ([注册](https://github.com/join))
- [ ] （可选）拥有 **Supabase账号** ([注册](https://supabase.com))

### 验证Node版本

```bash
node -v  # 应该显示 v18.x.x 或更高
npm -v   # 应该显示 9.x.x 或更高
```

---

## 第一步：获取代码

### 方式 1：使用Bootstrap脚本（推荐）

```bash
# 1. 导航到项目目录
cd personal_web

# 2. 运行自动化安装脚本
node scripts/bootstrap.mjs
```

**脚本会自动完成：**
- ✅ 检查Node版本
- ✅ 安装所有依赖
- ✅ 创建 `.env.local` 环境文件
- ✅ 验证项目配置

### 方式 2：手动安装

```bash
# 1. 导航到项目目录
cd personal_web

# 2. 安装依赖
npm install

# 3. 创建环境文件
cp .env.example .env.local
# 编辑 .env.local 设置 VITE_USE_MOCK=true
```

---

## 第二步：本地开发（Mock模式 - 无需后端）

### 启动开发服务器

```bash
# 方式 1：使用 mock 模式（推荐首次使用）
npm run dev:mock

# 方式 2：使用标准模式（需要配置 Supabase）
npm run dev
```

**预期输出：**
```
  VITE v6.3.5  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.x:3000/
  ➜  press h + enter to show help
```

### 访问网站

打开浏览器访问：`http://localhost:3000`

您应该看到：
- ✨ 帘幕动画开场
- 🏠 Hero区域显示"Your Name"
- 📦 可以浏览Projects、Thoughts、Contact页面

---

## 第三步：自定义内容

### 3.1 更新个人信息

编辑以下文件，将占位符替换为您的信息：

| 文件 | 修改内容 | 示例 |
|------|----------|------|
| `src/components/Navigation.tsx` | `Your Name` | 改为您的名字 |
| `src/components/Footer.tsx` | 社交链接 | GitHub/Twitter/LinkedIn URL |
| `src/pages/Home.tsx` | Hero标题和描述 | 个人简介 |
| `src/pages/Contact.tsx` | 邮箱地址 | `your.email@example.com` |
| `index.html` | 页面标题 | `<title>您的名字 - Portfolio</title>` |

### 3.2 添加项目

编辑 `src/data/mockData.ts`，在 `mockProjects` 数组添加：

```typescript
{
  id: '7',
  slug: 'my-awesome-project',  // URL路径
  name: 'My Awesome Project',  // 项目名称
  description: '项目简短描述',
  longDescription: '详细的项目描述...',
  tags: ['React', 'TypeScript', 'Tailwind'],
  category: 'Web App',  // Web App | Mobile | UI/UX
  imageUrl: 'https://images.unsplash.com/photo-xxx',
  githubUrl: 'https://github.com/username/repo',
  websiteUrl: 'https://project-demo.com',
  featured: true,  // 是否在首页展示
  role: 'Lead Developer',
  client: 'Personal Project',
  timeline: '2 Months',
  techStack: ['React', 'Node.js', 'MongoDB'],
  outcomes: '项目成果描述...',
  createdAt: '2024-01-15',
}
```

### 3.3 添加博客文章

在 `src/data/mockData.ts` 的 `mockThoughts` 数组添加：

```typescript
{
  id: '4',
  slug: 'my-blog-post',
  title: '我的博客标题',
  excerpt: '文章摘要，会显示在列表页',
  content: `
# 完整的Markdown内容

## 二级标题

这里是文章的详细内容...
  `,
  coverImage: 'https://images.unsplash.com/photo-xxx',
  date: '2024-01-20',
  readTime: 5,  // 阅读时间（分钟）
  tags: ['JavaScript', 'React', 'Tutorial'],
}
```

### 3.4 自定义颜色和字体

编辑 `tailwind.config.js`：

```javascript
colors: {
  primary: {
    DEFAULT: '#1313ec',  // 主品牌色
    foreground: '#ffffff',
  },
  accent: {
    DEFAULT: '#64FFDA',  // 强调色
  },
},
fontFamily: {
  display: ['Your Font', 'sans-serif'],  // 替换字体
},
```

**提示：** 修改后保存，Vite会自动热更新浏览器！

---

## 第四步：构建生产版本

### 本地构建测试

```bash
# 1. 构建生产版本
npm run build

# 2. 预览构建结果
npm run preview
```

访问 `http://localhost:4173` 测试生产版本。

### 检查构建质量

```bash
# 类型检查
npm run type-check

# 代码规范检查
npm run lint

# 代码格式检查
npm run format:check
```

**所有检查都应通过！** 如有错误：

```bash
# 自动修复Lint错误
npm run lint:fix

# 自动格式化代码
npm run format
```

---

## 第五步：部署到GitHub Pages

### 5.1 创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 **+** → **New repository**
3. 填写信息：
   - **Repository name**: `my-portfolio` (或您喜欢的名字)
   - **Public** 或 **Private**（Pages需要Public或Pro账户的Private）
   - **不要** 勾选"Initialize with README"

### 5.2 推送代码到GitHub

```bash
# 1. 初始化Git（如果尚未初始化）
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit: Complete portfolio setup"

# 4. 添加远程仓库（替换YOUR_USERNAME和YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. 推送到main分支
git branch -M main
git push -u origin main
```

### 5.3 启用GitHub Pages

1. 进入仓库页面
2. 点击 **Settings** 标签
3. 左侧点击 **Pages**
4. **Source** 选择：**GitHub Actions**
5. 保存后，GitHub会自动触发部署

### 5.4 等待部署完成

1. 点击仓库顶部的 **Actions** 标签
2. 等待 "Deploy to GitHub Pages" 工作流完成（约2-3分钟）
3. 成功后会显示绿色 ✓

### 5.5 访问您的网站

**URL格式：**
- 如果仓库名是 `YOUR_USERNAME.github.io`：
  - `https://YOUR_USERNAME.github.io`
- 如果仓库名是其他（如 `my-portfolio`）：
  - `https://YOUR_USERNAME.github.io/my-portfolio`

**如果使用子路径，需要配置base路径：**

编辑 `vite.config.ts`：

```typescript
export default defineConfig({
  base: '/my-portfolio/',  // 仓库名
  // ...其他配置
});
```

然后重新提交并推送：

```bash
git add vite.config.ts
git commit -m "Configure base path for GitHub Pages"
git push
```

---

## （可选）第六步：配置自定义域名

### 6.1 购买域名

推荐域名注册商：
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)

### 6.2 配置DNS记录

在您的域名DNS设置中添加：

**A记录（指向GitHub Pages）：**
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

**CNAME记录（www子域名）：**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### 6.3 添加CNAME文件

在项目中创建 `public/CNAME` 文件：

```
yourdomain.com
```

提交并推送：

```bash
git add public/CNAME
git commit -m "Add custom domain"
git push
```

### 6.4 GitHub配置

1. 仓库 **Settings** → **Pages**
2. **Custom domain** 填入：`yourdomain.com`
3. 勾选 **Enforce HTTPS**
4. 等待DNS传播（可能需要24-48小时）

---

## （可选）第七步：集成Supabase后端

### 7.1 创建Supabase项目

1. 访问 [Supabase](https://supabase.com)
2. 点击 **Start your project**
3. 创建组织（如果没有）
4. 创建新项目：
   - **Name**: `my-portfolio-db`
   - **Database Password**: 设置强密码（保存好！）
   - **Region**: 选择离您最近的区域

### 7.2 创建数据表

在Supabase控制台，进入 **SQL Editor**，运行：

```sql
-- Projects表
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

-- Thoughts表
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

-- Contact Messages表
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 7.3 配置Row Level Security (RLS)

在SQL Editor继续运行：

```sql
-- 启用RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE thoughts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- 允许公开读取
CREATE POLICY "Public read" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read" ON thoughts FOR SELECT USING (true);

-- 允许提交联系表单
CREATE POLICY "Anyone can insert" ON contact_messages 
  FOR INSERT WITH CHECK (true);
```

### 7.4 获取API密钥

1. Supabase控制台 → **Settings** → **API**
2. 复制：
   - **Project URL**
   - **anon public key**

### 7.5 配置本地环境

编辑 `.env.local`：

```env
VITE_USE_MOCK=false
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxx...
```

### 7.6 配置GitHub Secrets（用于部署）

1. 仓库 **Settings** → **Secrets and variables** → **Actions**
2. 添加secrets：
   - `VITE_SUPABASE_URL` = 您的Project URL
   - `VITE_SUPABASE_ANON_KEY` = 您的anon key

3. 编辑 `.github/workflows/pages.yml`，取消注释：

```yaml
env:
  VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
  VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
  # 改为 false 以使用真实后端
  VITE_USE_MOCK: 'false'
```

### 7.7 导入数据到Supabase

使用Supabase控制台 → **Table Editor** 手动添加数据，或使用SQL：

```sql
INSERT INTO projects (slug, name, description, tags, category, created_at)
VALUES 
  ('project-1', 'My First Project', 'Description...', 
   ARRAY['React', 'TypeScript'], 'Web App', NOW());
```

---

## 🎯 后续更新流程

### 日常更新内容

```bash
# 1. 修改内容（项目、博客等）
# 2. 本地测试
npm run dev

# 3. 提交更改
git add .
git commit -m "Add new project: AI Dashboard"

# 4. 推送到GitHub
git push

# 5. 自动部署（GitHub Actions）
# 等待2-3分钟，访问网站查看更新
```

### 更新依赖

```bash
# 检查过时的依赖
npm outdated

# 更新所有依赖
npm update

# 测试是否正常
npm run dev
npm run build
```

---

## 🐛 常见问题排查

### 问题1：`npm install` 失败

**错误示例：** `ERESOLVE unable to resolve dependency tree`

**解决方案：**
```bash
# 清除npm缓存
npm cache clean --force

# 删除node_modules和lock文件
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 问题2：GitHub Actions部署失败

**检查：**
1. 仓库 **Actions** 标签查看错误日志
2. 确保 `package.json` 中所有依赖正确
3. 检查 `.github/workflows/pages.yml` 语法

**常见原因：**
- Node版本不匹配（确保工作流使用Node 18+）
- 构建脚本错误（本地先运行 `npm run build` 测试）

### 问题3：404页面无法正常跳转

**原因：** GitHub Pages需要 `404.html` 在构建产物中

**解决：** 确保 `public/404.html` 存在，并且构建时会复制到 `dist/`

### 问题4：自定义域名不生效

**检查：**
1. DNS记录是否正确配置（使用 [DNS Checker](https://dnschecker.org) 验证）
2. CNAME文件是否在 `dist/` 目录（构建后检查）
3. 等待DNS传播（最多48小时）

### 问题5：Supabase连接失败

**检查：**
1. `.env.local` 中的URL和KEY是否正确
2. Supabase项目是否处于激活状态
3. RLS策略是否正确配置

**调试：**
```typescript
// 在 src/lib/supabase.ts 添加
console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Mock mode:', import.meta.env.VITE_USE_MOCK);
```

---

## 📚 进阶资源

### 学习路径

1. **React进阶**：
   - [React文档](https://react.dev)
   - [React Patterns](https://reactpatterns.com)

2. **TypeScript**：
   - [TypeScript Handbook](https://www.typescriptlang.org/docs/)

3. **性能优化**：
   - [Web.dev Performance](https://web.dev/performance/)
   - [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

4. **无障碍性**：
   - [WCAG快速参考](https://www.w3.org/WAI/WCAG21/quickref/)
   - [axe DevTools](https://www.deque.com/axe/devtools/)

### 社区资源

- **Discord**: [Reactiflux](https://discord.gg/reactiflux)
- **论坛**: [Dev.to](https://dev.to/t/react), [Stack Overflow](https://stackoverflow.com/questions/tagged/react)
- **Newsletter**: [React Status](https://react.statuscode.com)

---

## 🎉 恭喜！

您已经完成了整个流程：
- ✅ 本地开发环境搭建
- ✅ 内容定制
- ✅ 生产构建
- ✅ GitHub Pages部署
- ✅ （可选）Supabase后端集成
- ✅ （可选）自定义域名

**您的个人网站现在已经在线了！** 🚀

---

## 📞 获取帮助

如果您遇到其他问题：

1. 📖 **查阅文档**：`README.md`、`MIGRATION_REPORT.md`
2. 🐛 **提交Issue**：[GitHub Issues](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues)
3. 💬 **讨论区**：[GitHub Discussions](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/discussions)

---

**祝您的个人网站大获成功！** ✨

Made with ❤️ by [Your Name]


