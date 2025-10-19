# 🚀 Sexual Repression Calculator - Cloudflare Pages 部署指南

## 📂 项目信息

**项目位置**: `C:\Users\龚琪\Desktop\Sexual-Repression-Calculator\`
**GitHub 仓库**: https://github.com/xuanwen0715/sexual-repression-calculator
**项目类型**: 性压抑指数计算器 - 基于心理学量表的专业评估工具

## 🛠️ 技术栈

- **前端**: React 19 + TypeScript + Tailwind CSS
- **构建工具**: Rsbuild
- **路由**: React Router v7
- **UI组件**: shadcn/ui + Radix UI
- **部署**: Cloudflare Pages

## 🟠 Cloudflare Pages 部署步骤

### 第一步：登录 Cloudflare
1. 访问：[dash.cloudflare.com](https://dash.cloudflare.com)
2. 注册/登录账号（完全免费）

### 第二步：创建 Pages 项目
1. 点击左侧 **"Workers & Pages"**
2. 点击 **"Create application"**
3. 选择 **"Pages"** 标签
4. 点击 **"Connect to Git"**

### 第三步：连接 GitHub
1. 选择 **"GitHub"**
2. 授权 Cloudflare 访问 GitHub
3. 选择仓库：`xuanwen0715/sexual-repression-calculator`
4. 点击 **"Begin setup"**

### 第四步：构建配置 ⚠️ 关键步骤

```
项目名称: sexual-repression-calculator
框架预设: None
构建命令: npm run cf:deploy
输出目录: dist
根目录: /
```

**环境变量（可选）**：
```
NODE_VERSION = 22
SHOW_ABUSE_POPUP = false
ABUSE_REDIRECT_ENABLED = false
```

### 第五步：部署
1. 点击 **"Save and Deploy"**
2. 等待 2-5 分钟构建完成
3. 获得 URL：`https://your-project.pages.dev`

## 📋 项目当前状态

✅ **源代码已复刻**
✅ **Git 仓库已初始化**
✅ **代码已上传到 GitHub**
✅ **本地项目可正常运行**
⏳ **等待域名购买完成后部署**

## 🔧 本地开发命令

```bash
cd "C:\Users\龚琪\Desktop\Sexual-Repression-Calculator"

# 开发模式
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview

# Cloudflare 构建
npm run cf:deploy
```

## 📞 重要提醒

1. **构建命令必须是**: `npm run cf:deploy`（不是 `npm run build`）
2. **输出目录必须是**: `dist`
3. **Node.js 版本**: 22
4. **项目已包含所有必需的配置文件**：
   - `_routes.json` - 客户端路由支持
   - `functions/api/env.js` - 环境变量 API
   - `rsbuild.config.cloudflare.ts` - Cloudflare 优化配置

## 🎯 完成部署后

部署成功后你将获得：
- 全球 CDN 加速
- 自动 HTTPS
- 免费托管
- 自动更新（每次推送 GitHub 都会重新部署）

---

**创建时间**: 2025-10-19
**项目复刻**: 已完成
**部署状态**: 待域名购买完成后执行