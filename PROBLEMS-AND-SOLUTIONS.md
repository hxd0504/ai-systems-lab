# 问题与解法交接库

## 1. npm/pnpm 安装超时
**问题**: pnpm install 下载大包时频繁超时 (lightningcss, next, sharp 等)
**解法**: 改用淘宝镜像 `npm install --legacy-peer-deps --registry https://registry.npmmirror.com`

## 2. TypeScript 找不到 next/react 类型
**问题**: 编辑器报错 "找不到模块 next 或其相应的类型声明"
**原因**: npm install 未完成时 TypeScript 无法解析依赖
**解法**: 等待 npm install 完成后自动解决

## 3. archive 目录被 TypeScript 编译
**问题**: 移到 archive 的旧文件仍被 tsconfig include 匹配
**解法**: 在 tsconfig.json 的 exclude 中添加 "archive"

## 4. site.ts 导出缺失导致构建失败
**问题**: 移除 SPONSORSHIP_URL, UTM_PARAMS 等导出后，旧组件报错
**解法**: 在 site.ts 中保留这些导出但设为空值

## 5. ChanhDaiMark 重命名导致引用断裂
**问题**: 将 ChanhDaiMark 改为 NightLabMark 后，多个旧组件报错
**解法**: 在 chanhdai-mark.tsx 中添加 `export const ChanhDaiMark = NightLabMark` 别名

## 6. 旧页面/特性引用已移除的 doc/sponsor/blog 模块
**问题**: 保留的组件 (command-menu, mdx, blog.tsx 等) 引用已 archive 的特性
**解法**: 将这些组件也移入 archive 目录

## 7. 定位调整：科研作品集 → AI 应用岗作品集
**问题**: 首页突出论文研究成果，不适合 AI 应用岗求职
**解法**:
- 项目数据增加 systemFlow (端到端链路) 和 sections (结构化详情)
- 详情页统一为：应用场景 / 解决的问题 / 系统链路 / 核心模块 / 技术栈 / 关键结果 / 我的职责 / 相关成果
- Paper/Patent 降权至详情页底部
- 语言风格从全英文改为中文主表达 + 英文技术标签

## 8. Project 类型扩展
**问题**: 原 Project 类型不支持 systemFlow 和结构化 sections
**解法**: 扩展类型定义，新增 ProjectSection 和 RelatedOutput 子类型

## 9. husky pre-commit hook 因 pnpm 安装超时失败
**问题**: `.husky/pre-commit` 使用 `pnpm lint-staged`，但依赖是用 npm 安装的。pnpm 运行时检测到 node_modules 状态不一致，尝试重新下载全部包，因网络超时失败。
**解法**: 将 `.husky/pre-commit` 中的 `pnpm lint-staged` 改为 `npx lint-staged`，使用 npm 安装的 lint-staged。

## 10. ESLint 报错：内部路由使用 `<a>` 而非 `<Link />`
**问题**: `src/features/portfolio/components/hero/index.tsx` 中 `/projects` 链接使用 `<a>` 标签，ESLint 规则 `@next/next/no-html-link-for-pages` 报错。
**解法**: 导入 `next/link`，将 `<a href="/projects">` 改为 `<Link href="/projects">`。

## Git 备份记录 (2026-05-25)
- **项目路径**: `C:\Users\admin\portfolio-templates\01-chanhdai`
- **是否首次初始化 Git**: 否，已有 .git（原模板仓库）
- **build 命令**: `npm run build` (Next.js Turbopack)
- **遇到的问题**:
  1. remote 指向原模板仓库 ncdai/chanhdai.com → 改为用户仓库
  2. husky pre-commit 用 pnpm 但依赖是 npm 安装的 → 改 hook 为 npx
  3. ESLint 报错 hero 组件用 `<a>` 而非 `<Link />` → 修复
- **解决办法**: 见上方第 9、10 条
- **GitHub 仓库地址**: https://github.com/hxd0504/ai-systems-lab
- **当前版本 tag**: v0.1-night-lab
- **commit hash**: f31d5e24
- **分支**: main
- **build 是否通过**: 是（13 页全部生成）
- **是否发现敏感文件**: 否（仅 .env.example，全为占位值）
- **是否还有未提交文件**: 否（工作区干净）
