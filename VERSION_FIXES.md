# 🔧 版本修复记录

本文档记录了项目初始化过程中遇到的版本兼容性问题及其修复方案。

---

## 修复的版本问题

### 1. `gh-pages@^7.0.0` 不存在
**错误信息：**
```
npm error notarget No matching version found for gh-pages@^7.0.0.
```

**原因：** gh-pages 包没有发布 7.x 版本

**修复：** 降级到 `^6.2.0`
```json
"gh-pages": "^6.2.0"  // 原为 ^7.0.0
```

---

### 2. `tailwind-merge@^2.7.0` 不存在
**错误信息：**
```
npm error notarget No matching version found for tailwind-merge@^2.7.0.
```

**原因：** tailwind-merge 最新稳定版本为 2.5.x

**修复：** 降级到 `^2.5.5`
```json
"tailwind-merge": "^2.5.5"  // 原为 ^2.7.0
```

---

### 3. Windows 环境变量语法不兼容
**错误信息：**
```
'VITE_USE_MOCK' is not recognized as an internal or external command
```

**原因：** PowerShell 不支持 `VAR=value command` 语法

**修复：** 添加 `cross-env` 包并更新脚本
```json
// package.json
{
  "devDependencies": {
    "cross-env": "^7.0.3"
  },
  "scripts": {
    "dev:mock": "cross-env VITE_USE_MOCK=true vite"  // 原为 VITE_USE_MOCK=true vite
  }
}
```

---

## 当前稳定版本清单

### 核心框架
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.3",
  "typescript": "^5.7.2",
  "vite": "^6.3.5"
}
```

### UI 库
```json
{
  "@radix-ui/react-*": "^1.x - ^2.x",
  "lucide-react": "^0.487.0",
  "framer-motion": "^11.15.0",
  "gsap": "^3.12.7"
}
```

### 样式
```json
{
  "tailwindcss": "^3.4.17",
  "tailwind-merge": "^2.5.5",        // ⚠️ 已修复
  "tailwindcss-animate": "^1.0.7",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.49"
}
```

### 后端服务
```json
{
  "@supabase/supabase-js": "^2.47.12"
}
```

### 开发工具
```json
{
  "eslint": "^9.18.0",
  "prettier": "^3.4.2",
  "cross-env": "^7.0.3",             // ⚠️ 新增（Windows 兼容）
  "gh-pages": "^6.2.0"               // ⚠️ 已修复
}
```

---

## 版本选择原则

1. **优先使用最新稳定版本**
   - 查看 npm 官网确认版本存在性
   - 避免使用 beta/alpha/rc 版本

2. **使用 `^` 范围版本号**
   - `^2.5.5` 表示 `>=2.5.5 <3.0.0`
   - 自动接收补丁和次版本更新
   - 避免主版本破坏性更新

3. **锁定关键依赖**
   - React、TypeScript 等核心框架使用精确版本
   - 工具类包可以使用范围版本

4. **跨平台兼容性**
   - 使用 `cross-env` 处理环境变量
   - 避免平台特定的脚本

---

## 验证版本可用性

### 方法 1：npm view
```bash
npm view gh-pages versions --json
npm view tailwind-merge versions --json
```

### 方法 2：在线查询
- https://www.npmjs.com/package/gh-pages
- https://www.npmjs.com/package/tailwind-merge

### 方法 3：尝试安装
```bash
npm install gh-pages@6.2.0 --dry-run
```

---

## 遇到新版本问题？

### 快速诊断
1. **查看完整错误日志：**
   ```bash
   npm install --verbose
   ```

2. **清理缓存：**
   ```bash
   npm cache clean --force
   ```

3. **删除 lock 文件重试：**
   ```bash
   rm -f package-lock.json
   npm install
   ```

### 常见解决方案

#### 版本不存在
- 搜索可用版本：`npm view <package> versions`
- 降级到最新稳定版本

#### 依赖冲突
- 检查 peer dependencies
- 使用 `npm ls <package>` 查看依赖树
- 考虑使用 `--legacy-peer-deps`

#### 平台兼容性
- Windows：使用 `cross-env` 处理环境变量
- 路径：使用 `/` 而非 `\`
- 脚本：避免 Unix-only 命令（`rm`, `cp`, `&&`）

---

## 更新日志

| 日期 | 包名 | 原版本 | 新版本 | 原因 |
|------|------|--------|--------|------|
| 2025-11-04 | gh-pages | ^7.0.0 | ^6.2.0 | 版本不存在 |
| 2025-11-04 | tailwind-merge | ^2.7.0 | ^2.5.5 | 版本不存在 |
| 2025-11-04 | cross-env | - | ^7.0.3 | Windows 兼容性 |

---

## 相关文档

- **WINDOWS_QUICKSTART.md** - Windows 快速启动指南
- **README.md** - 完整项目文档
- **package.json** - 当前依赖清单

---

**最后更新：** 2025-11-04


