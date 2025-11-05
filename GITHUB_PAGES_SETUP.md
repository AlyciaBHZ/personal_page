# 🚀 GitHub Pages 部署指南

## 📝 前提条件

- ✅ 项目代码已完成
- ✅ 所有测试通过
- ✅ GitHub 账号已登录

---

## 🔧 步骤 1：初始化 Git 仓库

在项目目录 `personal_web` 中执行：

```bash
# 初始化 Git
git init

# 添加所有文件
git add .

# 创建首次提交
git commit -m "Initial commit: Complete portfolio with eye animation"
```

---

## 🌐 步骤 2：创建 GitHub 仓库

1. 访问 https://github.com/new
2. **Repository name:** `portfolio` (或您喜欢的名字)
3. **Description:** Personal portfolio website with interactive features
4. **Public** (必须是 Public 才能免费使用 GitHub Pages)
5. **不要勾选** "Add a README file"
6. 点击 **Create repository**

---

## 🔗 步骤 3：连接本地仓库到 GitHub

复制 GitHub 提供的命令，或手动执行：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 重命名分支为 main
git branch -M main

# 推送代码
git push -u origin main
```

**示例：**
```bash
git remote add origin https://github.com/lexa/portfolio.git
git branch -M main
git push -u origin main
```

---

## ⚙️ 步骤 4：配置 GitHub Pages（关键！）

### 4.1 进入仓库设置

1. 打开您的 GitHub 仓库
2. 点击 **Settings** (设置) 标签
3. 左侧菜单找到 **Pages**

### 4.2 配置 Source（这是您当前看到的页面！）

**重要选择：**

| 选项 | 是否选择 | 原因 |
|------|---------|------|
| ❌ **GitHub Pages Jekyll** | 不选 | 我们不使用 Jekyll |
| ❌ **Static HTML** | 不选 | 我们需要构建步骤 |
| ✅ **使用自定义工作流** | **选这个** | 我们已有 `.github/workflows/pages.yml` |

**正确步骤：**

1. **Source** 下拉菜单选择：**GitHub Actions**
   ```
   Source: GitHub Actions  ← 选这个！
   ```

2. 您会看到：
   ```
   Use a suggested workflow, browse all workflows, or create your own.
   ```

3. **忽略所有模板建议**，直接关闭页面

4. GitHub 会自动检测到我们的 `.github/workflows/pages.yml` 文件

---

## 🎯 步骤 5：触发部署

### 方法 A：推送触发（推荐）

```bash
# 任何推送到 main 分支都会触发部署
git add .
git commit -m "Trigger deployment"
git push
```

### 方法 B：手动触发

1. 进入仓库的 **Actions** 标签
2. 找到 "Deploy to GitHub Pages" 工作流
3. 点击 **Run workflow**
4. 选择 `main` 分支
5. 点击绿色的 **Run workflow** 按钮

---

## 📊 步骤 6：查看部署状态

1. 进入仓库的 **Actions** 标签
2. 查看最新的工作流运行
3. 等待所有步骤完成（通常 2-3 分钟）

**状态指示：**
- 🟡 黄色圆圈 = 正在运行
- ✅ 绿色勾 = 部署成功
- ❌ 红色叉 = 部署失败（查看日志）

---

## 🌍 步骤 7：访问您的网站

部署成功后，您的网站将发布在：

```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

**示例：**
- 用户名：`lexa`
- 仓库名：`portfolio`
- 网址：`https://lexa.github.io/portfolio/`

---

## 🎨 步骤 8：（可选）配置自定义域名

### 8.1 添加 CNAME 文件

如果您有自己的域名（如 `lexa.com`）：

1. 复制 `CNAME.example` 为 `CNAME`：
   ```bash
   cp CNAME.example public/CNAME
   ```

2. 编辑 `public/CNAME`，填入您的域名：
   ```
   lexa.com
   ```

3. 提交并推送：
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

### 8.2 配置 DNS

在您的域名提供商（如 Cloudflare、Namecheap）添加：

**A 记录（推荐）：**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**CNAME 记录（子域名）：**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### 8.3 在 GitHub 启用自定义域名

1. 回到 **Settings > Pages**
2. **Custom domain** 输入您的域名
3. 等待 DNS 检查通过
4. 勾选 **Enforce HTTPS**

---

## ❓ 常见问题

### Q1: 部署失败怎么办？

**检查清单：**
```bash
# 1. 检查文件是否存在
ls .github/workflows/pages.yml

# 2. 验证 package.json 中的构建脚本
npm run build  # 本地测试构建

# 3. 查看 Actions 日志
# 在 GitHub Actions 页面查看详细错误
```

### Q2: 页面显示 404

**可能原因：**
- GitHub Pages 未启用
- 选择了错误的 Source（应该是 GitHub Actions）
- base URL 配置错误

**解决方案：**

检查 `vite.config.ts` 中的 base 路径：

```typescript
export default defineConfig({
  base: '/REPO_NAME/',  // 确保与仓库名匹配
  // ...
})
```

### Q3: 路由刷新后 404

**原因：** GitHub Pages 不支持 SPA 路由

**解决方案：** 我们已配置 `public/404.html` 作为回退

### Q4: 部署成功但样式没加载

**原因：** CSS 路径问题

**解决方案：**
```bash
# 检查构建输出
npm run build
ls dist/

# 确保 dist 目录包含：
# - index.html
# - assets/ (CSS 和 JS)
```

---

## 📋 部署验证清单

部署完成后，请验证：

- [ ] 网站可以访问
- [ ] 首页显示 "Welcome to Lexa's Page"
- [ ] 眼睛动画正常工作
- [ ] 导航栏所有链接可点击
- [ ] Projects、Thoughts、Contact 页面正常
- [ ] 移动端响应式正常
- [ ] 深色模式工作正常
- [ ] 没有 404 错误
- [ ] 没有控制台错误

---

## 🔄 后续更新流程

修改代码后部署：

```bash
# 1. 修改代码
# 2. 测试
npm run dev:mock

# 3. 构建验证
npm run build
npm run preview

# 4. 提交推送（自动触发部署）
git add .
git commit -m "Update: description of changes"
git push
```

---

## 🎉 完成！

您的作品集网站现在已经上线！

**分享链接：**
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

**下一步建议：**
- 📝 添加真实项目内容
- 📸 替换示例图片
- 🔗 更新社交媒体链接
- 📊 添加 Google Analytics（可选）
- 🌐 配置自定义域名（可选）

---

## 🆘 需要帮助？

- GitHub Pages 文档：https://docs.github.com/en/pages
- GitHub Actions 文档：https://docs.github.com/en/actions
- Vite 部署指南：https://vitejs.dev/guide/static-deploy.html

---

**祝您部署顺利！** 🚀


