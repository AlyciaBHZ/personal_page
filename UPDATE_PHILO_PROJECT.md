# ✅ Philo 项目已添加到 Portfolio

## 📝 **更新内容**

### 1. 项目信息已添加

Philo Drinking Game 现在是您 portfolio 的**特色项目**，显示在首位。

**项目详情：**
- **名称：** Philo Drinking Game
- **描述：** Interactive party card game with philosophical twists
- **技术栈：** React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **链接：**
  - GitHub: https://github.com/AlyciaBHZ/philo-drinking
  - 网站: https://philo.lexaverse.dev

---

## 🔄 **查看更新**

### 本地预览

```bash
# 在 personal_web 目录
npm run dev:mock

# 访问
http://localhost:5173/projects
```

您应该看到 Philo 项目卡片在最前面，标记为 "Featured"。

---

## 🚀 **部署更新到 lexaverse.dev**

```bash
# 在 personal_web 目录
git add src/data/mockData.ts
git commit -m "Add Philo Drinking Game to projects"
git push
```

**自动部署：** 推送后约 2-3 分钟，更新会自动发布到：
```
https://lexaverse.dev/projects
```

---

## 📊 **项目展示**

### 在 Portfolio 中的显示位置

1. **首页：** Featured Projects 区域（如果有）
2. **Projects 页面：** 第一个项目卡片
3. **项目详情：** `/projects/philo-drinking-game`

### 项目卡片信息

```
┌─────────────────────────────────┐
│  [图片]                         │
│                                 │
│  Philo Drinking Game     ⭐    │
│  Interactive party card game... │
│                                 │
│  React | TypeScript | Vite     │
│                                 │
│  [View Project] [GitHub]       │
└─────────────────────────────────┘
```

---

## 🎨 **自定义项目信息**

如果需要修改项目描述或其他信息，编辑：
```
personal_web/src/data/mockData.ts
```

### 可修改字段

- `description`: 简短描述（显示在卡片上）
- `longDescription`: 详细描述（显示在详情页）
- `tags`: 技术标签
- `imageUrl`: 项目封面图（当前使用 Unsplash 占位图）
- `githubUrl`: GitHub 仓库链接
- `websiteUrl`: 项目网站链接
- `featured`: 是否特色展示

---

## 📸 **添加项目截图（可选）**

### 方法 1：使用本地图片

1. 将截图放在 `personal_web/public/projects/` 目录
2. 更新 `imageUrl`:
   ```typescript
   imageUrl: '/projects/philo-screenshot.png'
   ```

### 方法 2：使用在线图片

使用 Philo 项目的实际截图 URL：
```typescript
imageUrl: 'https://philo.lexaverse.dev/screenshot.png'
```

---

## 🔗 **域名结构**

现在您有两个项目网站：

```
主域名:
└── lexaverse.dev (Portfolio)
    ├── /               (首页)
    ├── /projects       (项目列表 - 包含 Philo)
    ├── /thoughts       (博客)
    └── /contact        (联系)

子域名:
└── philo.lexaverse.dev (Philo Game)
```

---

## ✅ **检查清单**

Portfolio 更新：
- [x] Philo 项目已添加到 mockData.ts
- [x] 项目设置为 featured
- [x] GitHub 和网站链接已配置
- [ ] 提交并推送更新
- [ ] 验证 lexaverse.dev/projects 显示正确

Philo 部署：
- [ ] Git 初始化
- [ ] GitHub 仓库创建
- [ ] GitHub Pages 启用
- [ ] DNS CNAME 记录添加
- [ ] 自定义域名配置
- [ ] 网站访问验证

---

## 🎯 **下一步**

1. **部署 Philo 项目：** 按照 `DEPLOYMENT_GUIDE.md`
2. **更新 Portfolio：** 推送 mockData.ts 更新
3. **添加项目截图：** 替换占位图
4. **撰写博客：** 在 Thoughts 分享开发经验
5. **社交分享：** 分享您的新项目

---

**两个网站都在线后的访问路径：**

- 📱 **Portfolio:** https://lexaverse.dev
- 🎮 **Philo Game:** https://philo.lexaverse.dev
- 📋 **Philo in Portfolio:** https://lexaverse.dev/projects/philo-drinking-game

---

**准备就绪！开始部署 Philo 项目吧！** 🚀


