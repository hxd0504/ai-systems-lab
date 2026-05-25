# Changelog

## [1.0.0] - 2026-05-23

### Added
- Night Lab: AI Systems Portfolio - dark navy/cyan/violet theme
- Hero section with canvas-based particle animation and graph node connections
- 4 AI project cards with glassmorphism + glow border effects
- `/projects` listing page with animated card grid
- `/projects/[slug]` detail pages with sticky sidebar navigation
  - `/projects/kg-defense` - Knowledge Graph Defense System
  - `/projects/graph-fusion` - Multi-source Graph Fusion for AGB Prediction
  - `/projects/graphrag-quality` - KG Quality Impact on GraphRAG
  - `/projects/legal-rag` - Legal RAG Engineering System
- `/about` page with research directions showcase
- `/contact` page with GitHub, Email, Resume entries
- Unified project data in `data/projects.ts`
- Framer Motion scroll-triggered animations (fade-up, blur-in)
- Mobile-responsive design

### Changed
- Rewrote global CSS with dark navy (#0a0e1a) / cyan / violet color scheme
- Updated site config for "Night Lab" branding
- Simplified SiteHeader with glassmorphism backdrop blur
- Updated root layout to force dark mode
- Simplified SiteFooter and SiteBottomNav

### Archived
- Original template pages (blog, blocks, components, sponsors, testimonials, docs)
- Original template features (blog, doc, sponsor)
- Command menu, MDX components, brand context menu

### Technical
- Next.js 16.2.6 + React 19 + Tailwind CSS v4
- Framer Motion for animations
- Canvas API for particle system (no Three.js dependency)
- Static site generation for all pages

## [1.1.0] - 2026-05-25

### Changed
- 定位从"科研作品集"调整为"AI 应用岗作品集"
- 首页 Hero 文案改为中文主表达 + 英文技术标签
- Featured Projects 重新排序：
  1. 端到端知识图谱 RAG 问答系统 (KG-RAG-System)
  2. 知识图谱持续更新风控系统 (KG Immune System)
  3. 多源生态数据智能预测系统 (multi-source-graph-fusion)
  4. GraphRAG 质量评测与诊断工具 (KG-quality-study)
- 项目卡片增加 systemFlow 字段展示端到端链路
- 项目详情页统一结构：应用场景 / 解决的问题 / 系统链路 / 核心模块 / 技术栈 / 关键结果 / 我的职责 / 相关成果
- Paper/Patent 降权至详情页底部 "相关成果" 区域
- About 页面改为"核心能力 + 技术栈"展示
- 语言风格从全英文改为中文主表达

### Added
- Project 类型增加 systemFlow, sections, relatedOutputs 字段
- 项目详情页 sticky sidebar 导航
- 相关成果区域（论文/专利/会议）

## [1.2.0] - 2026-05-25

### Added
- 5 个视觉证据组件，用于增强项目详情页的视觉展示：
  - `ProjectHeroVisual` — 根据 visualType 渲染不同技术架构图 (SVG)
  - `ArchitectureDiagram` — 水平步骤流程图，带箭头连接器
  - `MetricsGrid` — 三列指标卡片网格，带发光角效果
  - `EvidenceGrid` — 项目证据网格 (GitHub/Demo/论文/专利等)，可点击链接
  - `ScreenshotGallery` — 截图画廊，带占位视觉和类型图标
- Project 类型新增字段：visualType, architectureSteps, evidenceItems, screenshots, highlightMetrics, githubUrl, demoUrl, readmeUrl, paperUrl, patentUrl, apiExamples
- VisualType 枚举：kg-rag-pipeline, kg-defense-flow, graph-fusion, graphrag-eval
- 4 个项目均配置完整的视觉数据（架构步骤、核心指标、证据项、截图）

### Changed
- 项目详情页重写：Title → Hero Visual → MetricsGrid → ArchitectureDiagram → Content Sections → EvidenceGrid → ScreenshotGallery → Related Outputs
- 侧边栏导航动态构建，自动包含所有存在的区块
