import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "kg-rag-system",
    title: "端到端知识图谱 RAG 问答系统",
    subtitle: "End-to-end KG-RAG Application System",
    period: { start: "2025.03" },
    link: "/projects/kg-rag-system",
    skills: [
      "LangChain",
      "Neo4j",
      "FastAPI",
      "Sentence Transformers",
      "GraphRAG",
      "OpenAI 兼容接口",
    ],
    description:
      "支持从长文本到图谱问答的完整应用链路，包含双模式知识抽取（规则 / LLM）、图谱存储、向量检索与问答生成。",
    systemFlow:
      "Text → Chunk → KG Extraction → Neo4j → Retrieval → LLM Answer → FastAPI",
    repoStatus: "public",
    visualType: "kg-rag-pipeline",
    architectureSteps: [
      { label: "Text", icon: "file-text" },
      { label: "Chunk", icon: "scissors" },
      { label: "KG Extraction", icon: "git-branch" },
      { label: "Neo4j", icon: "database" },
      { label: "Retrieval", icon: "search" },
      { label: "LLM Answer", icon: "cpu" },
      { label: "FastAPI", icon: "server" },
    ],
    highlightMetrics: [
      { label: "知识抽取模式", value: "双模式", suffix: "规则 + LLM" },
      { label: "检索策略", value: "混合", suffix: "向量 + 图谱" },
      { label: "接口类型", value: "REST", suffix: "FastAPI" },
    ],
    evidenceItems: [
      { type: "github", label: "GitHub 仓库" },
      { type: "readme", label: "README 文档" },
      { type: "api-docs", label: "API 接口文档" },
      { type: "architecture", label: "架构设计文档" },
    ],
    screenshots: [
      {
        title: "FastAPI 接口文档",
        description: "自动生成的 REST API 文档界面",
        type: "api-docs",
      },
      {
        title: "Neo4j 图谱可视化",
        description: "知识图谱在 Neo4j 中的节点与关系展示",
        type: "graph",
      },
      {
        title: "问答 Demo",
        description: "基于图谱的问答交互界面",
        type: "demo",
      },
      {
        title: "系统运行截图",
        description: "终端中的系统运行状态",
        type: "terminal",
      },
    ],
    sections: [
      {
        title: "应用场景",
        titleEn: "Scenario",
        content:
          "面向需要从大量非结构化文本中构建知识图谱并进行智能问答的场景，如企业知识库、领域专家系统、技术文档问答等。",
      },
      {
        title: "解决的问题",
        titleEn: "Problem",
        content:
          "传统 RAG 系统仅依赖向量检索，无法利用实体间关系进行多跳推理。本系统将知识图谱构建与 RAG 问答整合为端到端链路，支持基于图谱关系的深度问答。",
      },
      {
        title: "核心模块",
        titleEn: "Modules",
        content:
          "- 双模式知识抽取器（规则引擎 + LLM 抽取）\n- Neo4j 图谱存储与查询\n- 向量检索 + 图谱遍历的混合检索\n- FastAPI 问答接口\n- LangChain 编排",
      },
      {
        title: "技术栈",
        titleEn: "Tech Stack",
        content:
          "LangChain, Sentence Transformers, Neo4j, FastAPI, OpenAI 兼容接口, Python",
      },
      {
        title: "关键结果",
        titleEn: "Results",
        content:
          "- 支持从长文本自动构建知识图谱\n- 提供 FastAPI 问答接口，可直接调用\n- 双模式抽取适应不同精度需求\n- 完整交付文档与运行指南",
      },
      {
        title: "我的职责",
        titleEn: "My Role",
        content:
          "独立完成系统设计、知识抽取模块开发、图谱存储方案、检索策略与 FastAPI 接口封装。",
      },
    ],
    relatedOutputs: [],
  },
  {
    id: "kg-immune-system",
    title: "知识图谱持续更新风控系统",
    subtitle: "Controlled KG Update System",
    period: { start: "2025.01" },
    link: "/projects/kg-immune-system",
    skills: ["Neo4j", "规则引擎", "统计检验", "Python", "mem0 记忆集成"],
    description:
      "提供候选知识写入前的风险分流机制，结合规则过滤与局部子图一致性检查，实现知识图谱更新的安全控制。",
    systemFlow:
      "Candidate Data → Rule Check → Local Consistency Check → PASS / FLAG / REJECT → Main KG / Review Queue",
    repoStatus: "public",
    visualType: "kg-defense-flow",
    architectureSteps: [
      { label: "Candidate Data", icon: "inbox" },
      { label: "Rule Check", icon: "shield-check" },
      { label: "Local Consistency", icon: "network" },
      { label: "PASS / FLAG / REJECT", icon: "filter" },
      { label: "Main KG / Review Queue", icon: "database" },
    ],
    highlightMetrics: [
      { label: "错误知识准入率", value: "40%", suffix: "→ 8%" },
      { label: "异常拦截率", value: "80%", suffix: "" },
      { label: "审查队列覆盖率", value: "34.5%", suffix: "" },
    ],
    evidenceItems: [
      { type: "github", label: "GitHub 仓库" },
      { type: "readme", label: "README 文档" },
      { type: "patent", label: "专利文档" },
      { type: "evaluation", label: "消融实验" },
    ],
    screenshots: [
      {
        title: "风险决策流程",
        description: "PASS / FLAG / REJECT 三路分流可视化",
        type: "flow",
      },
      {
        title: "局部子图检查",
        description: "一致性检查的局部子图分析界面",
        type: "graph",
      },
      {
        title: "指标对比",
        description: "规则过滤器与一致性检查的消融实验结果",
        type: "result",
      },
    ],
    sections: [
      {
        title: "应用场景",
        titleEn: "Scenario",
        content:
          "面向持续更新的知识图谱系统，需要在数据写入前进行质量把关和风险控制，防止错误知识污染图谱。",
      },
      {
        title: "解决的问题",
        titleEn: "Problem",
        content:
          "知识图谱在持续更新过程中，错误知识一旦写入会导致下游推理和问答系统产生错误结果。传统方法缺乏写入前的风险分流机制。",
      },
      {
        title: "核心模块",
        titleEn: "Modules",
        content:
          "- 显式规则过滤器\n- 局部子图一致性检查器\n- 风险分流决策器（PASS / FLAG / REJECT）\n- 隔离审查队列\n- mem0 记忆集成",
      },
      {
        title: "技术栈",
        titleEn: "Tech Stack",
        content: "Neo4j, Python, mem0, 规则引擎, 统计检验",
      },
      {
        title: "关键结果",
        titleEn: "Results",
        content:
          "- 错误知识准入率：40% → 8%\n- 异常拦截率：80%\n- 审查队列覆盖率：34.5%\n- 消融实验证明各模块贡献",
      },
      {
        title: "我的职责",
        titleEn: "My Role",
        content:
          "独立完成风控框架设计、规则引擎开发、一致性检查算法、决策分流逻辑与实验验证。",
      },
    ],
    relatedOutputs: [
      {
        type: "patent",
        title: "一种基于免疫机制的知识图谱安全更新评估方法",
        status: "申请中",
      },
    ],
  },
  {
    id: "ecological-prediction",
    title: "多源生态数据智能预测系统",
    subtitle: "Multi-source Ecological Prediction System",
    period: { start: "2024.10" },
    link: "/projects/ecological-prediction",
    skills: [
      "PyTorch Geometric",
      "GAT",
      "GCN",
      "遥感数据",
      "scikit-learn",
      "rasterio",
    ],
    description:
      "将多源生态数据组织为图结构并完成预测，融合拓扑知识图谱与生态知识图谱进行遥感生物量预测。",
    systemFlow:
      "Remote Sensing Data → Feature Extraction → TKG + EKG → Dual-Graph Fusion → GNN Prediction → AGB Output",
    repoStatus: "public",
    visualType: "graph-fusion",
    architectureSteps: [
      { label: "Remote Sensing", icon: "satellite" },
      { label: "Feature Extraction", icon: "layers" },
      { label: "TKG", icon: "git-branch" },
      { label: "EKG", icon: "leaf" },
      { label: "Dual-Graph Fusion", icon: "merge" },
      { label: "GNN Prediction", icon: "cpu" },
      { label: "Evaluation", icon: "bar-chart" },
    ],
    highlightMetrics: [
      { label: "融合 R²", value: "~0.25", suffix: "→ ~0.72" },
      { label: "图节点数", value: "4,000", suffix: "" },
      { label: "特征维度", value: "12", suffix: "维" },
    ],
    evidenceItems: [
      { type: "github", label: "GitHub 仓库" },
      { type: "readme", label: "README 文档" },
      { type: "paper", label: "EAAI 论文" },
      { type: "evaluation", label: "OOD 评估实验" },
    ],
    screenshots: [
      {
        title: "双图架构",
        description: "TKG 拓扑图 + EKG 生态图的融合架构示意",
        type: "architecture",
      },
      {
        title: "预测结果",
        description: "AGB 预测值与实测值对比",
        type: "result",
      },
      {
        title: "Strict OOD 分割",
        description: "空间 OOD 数据分割策略可视化",
        type: "flow",
      },
    ],
    sections: [
      {
        title: "应用场景",
        titleEn: "Scenario",
        content:
          "面向遥感生态监测场景，利用多源遥感数据和生态知识进行森林地上生物量 (AGB) 预测。",
      },
      {
        title: "解决的问题",
        titleEn: "Problem",
        content:
          "传统遥感反演方法仅利用光谱特征，缺乏生态领域知识的融合。本系统将拓扑关系和生态知识组织为图结构，与遥感特征联合建模。",
      },
      {
        title: "核心模块",
        titleEn: "Modules",
        content:
          "- 拓扑知识图谱 (TKG) 构建\n- 生态知识图谱 (EKG) 构建\n- 双图融合模块 (GAT + GCN)\n- 分段建模策略\n- Strict OOD 评估",
      },
      {
        title: "技术栈",
        titleEn: "Tech Stack",
        content:
          "PyTorch Geometric (GAT + GCN), scikit-learn, rasterio, matplotlib, Python",
      },
      {
        title: "关键结果",
        titleEn: "Results",
        content:
          "- 融合 R²: ~0.25 → ~0.72\n- 4,000 图节点\n- 12 维特征空间\n- Strict Spatial OOD 验证泛化能力",
      },
      {
        title: "我的职责",
        titleEn: "My Role",
        content:
          "独立完成双图融合架构设计、TKG/EKG 构建、GNN 模型开发、分段建模策略与 OOD 评估实验。",
      },
    ],
    relatedOutputs: [
      {
        type: "paper",
        title:
          "Multi-source Graph Fusion for Remote Sensing Regression under Strict Spatial OOD",
        venue: "Engineering Applications of Artificial Intelligence (EAAI)",
        status: "投稿中",
      },
    ],
  },
  {
    id: "graphrag-evaluation",
    title: "GraphRAG 质量评测与诊断工具",
    subtitle: "GraphRAG Quality Evaluation Toolkit",
    period: { start: "2024.07" },
    link: "/projects/graphrag-evaluation",
    skills: ["GraphRAG", "Neo4j", "QA Benchmark", "Python", "过程级诊断"],
    description:
      "为 GraphRAG 系统提供质量评测与诊断能力，覆盖事实冲突、结构噪声、时间错位三类退化场景。",
    systemFlow:
      "KG with Degradation → GraphRAG Pipeline → QA Benchmark → Answer Evaluation → Process Diagnostics → Report",
    repoStatus: "public",
    visualType: "graphrag-eval",
    architectureSteps: [
      { label: "KG with Degradation", icon: "alert-triangle" },
      { label: "GraphRAG Pipeline", icon: "workflow" },
      { label: "QA Benchmark", icon: "help-circle" },
      { label: "Answer Evaluation", icon: "check-circle" },
      { label: "Process Diagnostics", icon: "activity" },
    ],
    highlightMetrics: [
      { label: "QA 测试题数", value: "898", suffix: "道" },
      { label: "退化类型", value: "3", suffix: "类" },
      { label: "诊断粒度", value: "过程级", suffix: "" },
    ],
    evidenceItems: [
      { type: "github", label: "GitHub 仓库" },
      { type: "readme", label: "README 文档" },
      { type: "paper", label: "EI 会议论文" },
      { type: "evaluation", label: "评测报告" },
    ],
    screenshots: [
      {
        title: "退化等级",
        description: "三类退化在不同等级下的注入效果",
        type: "flow",
      },
      {
        title: "QA 评测",
        description: "898 道 QA 题的准确率变化曲线",
        type: "result",
      },
      {
        title: "Evidence Usage",
        description: "过程级诊断中证据使用的分布统计",
        type: "result",
      },
    ],
    sections: [
      {
        title: "应用场景",
        titleEn: "Scenario",
        content:
          "面向 GraphRAG 系统上线前的质量评测，帮助开发者识别知识图谱中的质量问题对问答准确率的影响。",
      },
      {
        title: "解决的问题",
        titleEn: "Problem",
        content:
          "GraphRAG 系统的问答质量高度依赖底层知识图谱质量，但缺乏系统性的评测工具来量化不同类型退化对最终结果的影响。",
      },
      {
        title: "核心模块",
        titleEn: "Modules",
        content:
          "- 三类退化注入器（事实冲突 / 结构噪声 / 时间错位）\n- 898 题 QA Benchmark\n- 过程级诊断框架\n- 质量退化可视化",
      },
      {
        title: "技术栈",
        titleEn: "Tech Stack",
        content: "Neo4j, GraphRAG, Python, QA Benchmark, 可视化",
      },
      {
        title: "关键结果",
        titleEn: "Results",
        content:
          "- 898 道 QA 测试题\n- 3 类退化类型系统分析\n- 过程级可解释性诊断\n- 发现质量退化的非线性崩溃规律",
      },
      {
        title: "我的职责",
        titleEn: "My Role",
        content:
          "独立完成评测框架设计、退化注入器开发、QA Benchmark 构建、过程级诊断算法与实验分析。",
      },
    ],
    relatedOutputs: [
      {
        type: "conference",
        title: "知识图谱质量退化对 GraphRAG 性能影响的实证研究",
        venue: "EI 会议",
        status: "已投",
      },
      {
        type: "paper",
        title:
          "Process-level Diagnostics of KG Quality Degradation on GraphRAG",
        status: "准备中",
      },
    ],
  },
]
