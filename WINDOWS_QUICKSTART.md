# 🚀 Windows 快速启动指南

由于 PowerShell 的环境变量语法与 Unix 不同，请按以下步骤操作：

## ✅ 步骤 1：安装依赖

### 方法 A：使用自动安装脚本（推荐）

在项目目录中，执行：

```powershell
.\install.ps1
```

### 方法 B：手动安装

```powershell
# 清理旧的安装（如果有）
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue

# 清理缓存
npm cache clean --force

# 安装依赖
npm install
```

**预计时间：** 2-3 分钟  
**包数量：** 应该看到 ~500+ 个包被安装

---

## ✅ 步骤 2：启动开发服务器（Mock 模式）

安装完成后，运行：

```powershell
npm run dev:mock
```

**访问：** http://localhost:5173

---

## 🔧 常见问题排查

### 问题 1：`gh-pages@^7.0.0` 不存在
**状态：** ✅ 已修复（已改为 `^6.2.0`）

### 问题 2：`VITE_USE_MOCK=true` 命令失败
**状态：** ✅ 已修复（已添加 `cross-env` 包）

### 问题 3：只安装了 2 个包
**原因：** node_modules 未被正确清理  
**解决：**
```powershell
# 手动删除（如果存在）
Remove-Item -Recurse -Force node_modules

# 重新安装
npm install
```

### 问题 4：中文路径编码问题
如果路径包含中文，PowerShell 可能显示乱码，但**不影响实际操作**。

---

## 📋 所有可用命令

| 命令 | 用途 | Windows 可用 |
|------|------|-------------|
| `npm run dev:mock` | Mock 模式开发 | ✅ |
| `npm run dev` | 连接 Supabase 开发 | ✅ |
| `npm run build` | 生产构建 | ✅ |
| `npm run build:mock` | Mock 模式构建 | ✅ |
| `npm run preview` | 预览构建结果 | ✅ |
| `npm run lint` | 代码检查 | ✅ |
| `npm run format` | 格式化代码 | ✅ |

---

## 🎯 验证安装成功

执行以下命令，应该看到版本号：

```powershell
node --version    # 应该显示 v22.16.0
npm --version     # 应该显示 10.x.x
```

检查 node_modules 是否存在：

```powershell
Test-Path node_modules
# 应该返回：True
```

检查关键包是否安装：

```powershell
ls node_modules | Select-String -Pattern "react|vite|tailwind"
# 应该看到 react、react-dom、vite、tailwindcss 等
```

---

## 🚀 下一步

安装成功后，请参考：
- **README.md** - 完整项目文档
- **EXECUTION_GUIDE.md** - 详细执行指南

---

## 💡 提示

### 如果 npm install 很慢：
1. 使用国内镜像：
```powershell
npm config set registry https://registry.npmmirror.com
npm install
# 安装完成后恢复
npm config set registry https://registry.npmjs.org
```

2. 或使用 pnpm（更快）：
```powershell
npm install -g pnpm
pnpm install
pnpm run dev:mock
```

### 关闭防火墙提示：
首次运行 Vite 时，Windows 防火墙可能会弹出，请选择**允许访问**。

---

## ✅ 安装验证清单

- [ ] Node.js 版本 >= 18.0.0
- [ ] npm install 成功（无错误）
- [ ] node_modules 目录存在
- [ ] 包数量 > 400
- [ ] npm run dev:mock 启动成功
- [ ] 浏览器访问 http://localhost:5173 正常

---

**祝您使用愉快！** 🎉

如有问题，请查看 **EXECUTION_GUIDE.md** 的故障排查章节。

