# 🌐 DNS 配置指南 - 修复 GitHub Pages 自定义域名

## 🎯 问题诊断

**您的状态：**
- ❌ DNS check unsuccessful
- ❌ Domain's DNS record could not be retrieved
- ❌ HTTPS unavailable

**原因：** DNS 记录未正确指向 GitHub Pages 服务器

---

## ✅ 解决方案：配置 DNS 记录

### 方法 A：使用 A 记录（推荐 - 根域名）

如果您想使用 `lexaverse.world`（无 www）：

#### 1. 登录域名管理面板

访问您的域名注册商（例如 Namecheap、Cloudflare）

#### 2. 添加/修改 DNS 记录

**删除现有的冲突记录（如果有）：**
- 删除指向 `lexaverse.world` 的旧 A 记录
- 删除旧的 CNAME 记录

**添加以下 4 个 A 记录：**

```
类型: A
主机/名称: @ (或留空，表示根域名)
值/指向: 185.199.108.153
TTL: 自动或 3600

类型: A
主机/名称: @
值/指向: 185.199.109.153
TTL: 自动或 3600

类型: A
主机/名称: @
值/指向: 185.199.110.153
TTL: 自动或 3600

类型: A
主机/名称: @
值/指向: 185.199.111.153
TTL: 自动或 3600
```

**添加 www 的 CNAME 记录（可选但推荐）：**

```
类型: CNAME
主机/名称: www
值/指向: alyciabhz.github.io
TTL: 自动或 3600
```

---

### 方法 B：使用 CNAME 记录（子域名）

如果您想使用 `www.lexaverse.world`：

```
类型: CNAME
主机/名称: www
值/指向: alyciabhz.github.io
TTL: 3600
```

然后在 GitHub Pages 设置中填写：`www.lexaverse.world`

---

## 📋 具体配置示例

### Cloudflare 配置步骤

1. 登录 Cloudflare Dashboard
2. 选择域名 `lexaverse.world`
3. 进入 **DNS** 标签
4. 点击 **Add record**

**配置示例：**

| Type | Name | Content | Proxy status | TTL |
|------|------|---------|--------------|-----|
| A | @ | 185.199.108.153 | DNS only (灰色云) | Auto |
| A | @ | 185.199.109.153 | DNS only (灰色云) | Auto |
| A | @ | 185.199.110.153 | DNS only (灰色云) | Auto |
| A | @ | 185.199.111.153 | DNS only (灰色云) | Auto |
| CNAME | www | alyciabhz.github.io | DNS only (灰色云) | Auto |

**重要：** Proxy status 必须是 **DNS only**（灰色云图标），而不是 Proxied（橙色云）

---

### Namecheap 配置步骤

1. 登录 Namecheap
2. 进入 **Dashboard** > **Domain List**
3. 点击域名旁的 **Manage**
4. 进入 **Advanced DNS** 标签

**添加记录：**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | alyciabhz.github.io. | Automatic |

---

### GoDaddy 配置步骤

1. 登录 GoDaddy
2. 进入 **My Products** > **DNS**
3. 找到 `lexaverse.world`
4. 点击 **Manage DNS**

**添加记录：**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 seconds |
| A | @ | 185.199.109.153 | 600 seconds |
| A | @ | 185.199.110.153 | 600 seconds |
| A | @ | 185.199.111.153 | 600 seconds |
| CNAME | www | alyciabhz.github.io | 1 Hour |

---

## ⏱️ 步骤 3：等待 DNS 传播

配置完成后：
- **传播时间：** 5 分钟 - 48 小时（通常 10-30 分钟）
- **验证工具：** https://dnschecker.org

---

## 🔍 步骤 4：验证 DNS 配置

### 在命令行验证：

```bash
# Windows PowerShell
nslookup lexaverse.world

# 应该返回 GitHub Pages 的 IP：
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### 在线工具：

访问 https://dnschecker.org
- 输入：`lexaverse.world`
- 类型：A
- 检查是否全球解析正确

---

## 🔒 步骤 5：在 GitHub 重新配置域名

DNS 传播后：

1. 进入 GitHub 仓库 **Settings** > **Pages**
2. **Custom domain** 中删除 `lexaverse.world`
3. 点击 **Save**
4. 等待 10 秒
5. 重新输入 `lexaverse.world`
6. 点击 **Save**
7. 等待 DNS 检查（通常 1-2 分钟）

看到 **✅ DNS check successful** 后：

8. 勾选 **Enforce HTTPS**
9. 等待证书颁发（5-10 分钟）

---

## ✅ 验证成功标准

**GitHub Pages 设置应该显示：**

```
✅ DNS check successful
Your site is published at https://lexaverse.world/
✅ Enforce HTTPS — HTTPS enforced
```

---

## ❌ 常见错误及解决

### 错误 1：DNS check unsuccessful

**原因：**
- DNS 记录未添加
- DNS 记录值不正确
- DNS 未传播完成

**解决：**
```bash
# 检查 DNS 是否生效
nslookup lexaverse.world

# 如果没有返回 GitHub Pages IP，重新检查 DNS 配置
```

### 错误 2：Domain already taken

**原因：** 域名被其他 GitHub 仓库使用

**解决：**
1. 检查您的其他仓库
2. 或联系 GitHub Support

### 错误 3：HTTPS 无法启用

**原因：** 
- DNS 检查未通过
- CAA 记录阻止证书颁发

**解决：**
1. 确保 DNS 检查通过
2. 检查 CAA 记录（如果有）：
   ```
   删除或修改 CAA 记录，允许 Let's Encrypt 颁发证书
   ```

### 错误 4：Cloudflare "Too many redirects"

**原因：** Cloudflare Proxy（橙色云）与 GitHub Pages HTTPS 冲突

**解决：**
- 将 Cloudflare DNS 记录的 Proxy status 改为 **DNS only**（灰色云）

---

## 🎯 完整配置检查清单

配置完成后，请验证：

- [ ] DNS A 记录已添加（4个）
- [ ] CNAME 记录已添加（www）
- [ ] DNS 传播完成（nslookup 验证）
- [ ] GitHub Pages DNS 检查通过
- [ ] HTTPS 已启用
- [ ] 访问 https://lexaverse.world 正常
- [ ] 访问 https://www.lexaverse.world 正常（如果配置了）
- [ ] 眼睛动画正常工作
- [ ] 所有页面可访问

---

## 📊 DNS 记录快速参考

### 完整 DNS 配置（复制使用）

```
# 根域名
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153

# www 子域名
CNAME www alyciabhz.github.io
```

---

## 🆘 仍然无法解决？

### 调试步骤：

1. **验证 DNS：**
   ```bash
   nslookup lexaverse.world
   nslookup www.lexaverse.world
   ```

2. **检查 CNAME 文件：**
   ```bash
   # 确保仓库中有 public/CNAME 文件
   # 内容只有一行：lexaverse.world
   ```

3. **查看部署日志：**
   - GitHub 仓库 > Actions
   - 查看最新工作流是否成功

4. **清除 GitHub Pages 缓存：**
   - 删除自定义域名
   - 保存
   - 等待 1 分钟
   - 重新添加域名

---

## 📝 时间线估计

| 步骤 | 预计时间 |
|------|---------|
| 配置 DNS 记录 | 5 分钟 |
| DNS 传播 | 10-30 分钟 |
| GitHub DNS 检查 | 1-2 分钟 |
| HTTPS 证书颁发 | 5-10 分钟 |
| **总计** | **20-50 分钟** |

---

## 🎉 成功后的访问测试

网站应该可以通过以下方式访问：

- ✅ https://lexaverse.world
- ✅ https://www.lexaverse.world (如果配置了 www)
- ✅ http://lexaverse.world (自动重定向到 HTTPS)
- ✅ https://alyciabhz.github.io/[repo-name]/ (原始地址仍可用)

---

## 💡 专业提示

1. **使用 Cloudflare（免费）:**
   - 更快的 DNS 传播
   - 免费 CDN 加速
   - DDoS 保护
   - 但记住：GitHub Pages 的 DNS 记录必须是 **DNS only**

2. **配置 CAA 记录（可选）:**
   ```
   CAA @ 0 issue "letsencrypt.org"
   CAA @ 0 issuewild "letsencrypt.org"
   ```

3. **添加 AAAA 记录（IPv6，可选）:**
   ```
   AAAA @ 2606:50c0:8000::153
   AAAA @ 2606:50c0:8001::153
   AAAA @ 2606:50c0:8002::153
   AAAA @ 2606:50c0:8003::153
   ```

---

**立即开始配置 DNS，20-50 分钟后您的网站就能通过 https://lexaverse.world 访问！** 🚀


