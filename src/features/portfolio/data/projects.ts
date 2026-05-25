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
      "从长文本到图谱问答的完整可运行系统，包含双模式知识抽取、图谱存储、混合检索与 FastAPI 问答接口。",
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
      { type: "demo", label: "问答 Demo" },
      { type: "readme", label: "README 文档" },
      { type: "api-docs", label: "API 接口文档" },
      { type: "architecture", label: "架构设计文档" },
    ],
    screenshots: [
      {
        title: "FastAPI 接口文档",
        description: "自动生成的 Swagger UI 问答接口文档",
        type: "api-docs",
      },
      {
        title: "Neo4j 图谱可视化",
        description: "知识图谱节点与关系在 Neo4j Browser 中的展示",
        type: "graph",
      },
      {
        title: "问答 Demo 运行",
        description: "基于图谱检索的多跳问答交互截图",
        type: "demo",
      },
      {
        title: "系统运行日志",
        description: "终端中 FastAPI 服务启动与请求处理日志",
        type: "terminal",
      },
    ],
    sections: [
      {
        title: "应用场景",
        titleEn: "Scenario",
        content:
          "面向需要从大量非结构化文本中构建知识图谱并进行智能问答的场景：企业知识库问答、领域专家系统、技术文档检索等。系统可直接部署为 FastAPI 服务，接收自然语言问题，返回基于图谱推理的答案。",
      },
      {
        title: "解决的问题",
        titleEn: "Problem",
        content:
          "传统 RAG 仅依赖向量相似度检索，无法利用实体间关系进行多跳推理。本系统将知识图谱构建与 RAG 问答整合为一条端到端链路，支持从原始文本到可部署问答服务的完整交付。",
      },
      {
        title: "核心模块",
        titleEn: "Modules",
        content:
          "- 双模式知识抽取器：规则引擎（高精度）+ LLM 抽取（高召回）\n- Neo4j 图谱存储与 Cypher 查询\n- 混合检索：向量召回 + 图谱遍历\n- FastAPI 问答接口（REST，可直接调用）\n- LangChain 编排与链路管理",
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
          "- 可运行系统：从文本输入到问答输出的完整链路已跑通\n- 双模式抽取：规则模式精确、LLM 模式灵活，可按场景切换\n- 混合检索：向量 + 图谱遍历，支持多跳关系问答\n- 已封装为 FastAPI 服务，提供 Swagger 文档",
      },
      {
        title: "我的职责",
        titleEn: "My Role",
        content:
          "独立完成系统架构设计、知识抽取模块开发、Neo4j 图谱存储方案、混合检索策略实现与 FastAPI 接口封装。",
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
      "知识图谱写入前的风险分流机制，结合规则过滤与局部子图一致性检查，实现数据准入控制与错误拦截。",
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
      { type: "evaluation", label: "消融实验数据" },
    ],
    screenshots: [
      {
        title: "风险决策流程",
        description: "PASS / FLAG / REJECT 三路分流的决策界面",
        type: "flow",
      },
      {
        title: "局部子图一致性检查",
        description: "候选知识与现有图谱的局部子图对比分析",
        type: "graph",
      },
      {
        title: "消融实验结果",
        description: "规则过滤器与一致性检查各自的贡献量化",
        type: "result",
      },
      {
        title: "审查队列面板",
        description: "FLAG 状态的人工复核队列与审核界面",
        type: "terminal",
      },
    ],
    sections: [
      {
        title: "应用场景",
        titleEn: "Scenario",
        content:
          "面向持续更新的知识图谱系统。在生产环境中，新知识不断涌入，需要在写入前进行质量把关，防止错误数据污染图谱，影响下游问答和推理系统。",
      },
      {
        title: "解决的问题",
        titleEn: "Problem",
        content:
          "知识图谱一旦写入错误知识，会导致下游 RAG 问答产生错误答案且难以追溯。传统方法缺乏写入前的风险分流机制，只能事后排查，成本高、响应慢。",
      },
      {
        title: "核心模块",
        titleEn: "Modules",
        content:
          "- 显式规则过滤器：拦截明显不合法的候选知识\n- 局部子图一致性检查器：基于统计检验判断新知识是否与现有图谱矛盾\n- 风险分流决策器：PASS（写入主图谱）/ FLAG（人工复核）/ REJECT（直接拦截）\n- 隔离审查队列：FLAG 条目进入人工复核流程\n- mem0 记忆集成：记录历史决策，辅助后续判断",
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
          "- 错误知识准入率：40% → 8%（降低 80%）\n- 异常拦截率：80%（高召回）\n- 审查队列覆盖率：34.5%（需人工复核的比例）\n- 消融实验证明规则过滤器和一致性检查各自独立贡献",
      },
      {
        title: "我的职责",
        titleEn: "My Role",
        content:
          "独立完成风控框架设计、规则引擎开发、局部子图一致性检查算法、三路分流决策逻辑与消融实验验证。",
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
      "遥感数据处理",
      "scikit-learn",
      "rasterio",
    ],
    description:
      "将多源遥感数据组织为图结构，通过双图融合 GNN 实现森林地上生物量预测，核心是数据工程 + 图建模 + 模型部署。",
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
        title: "双图融合架构",
        description: "TKG 拓扑图 + EKG 生态图的融合架构示意",
        type: "architecture",
      },
      {
        title: "AGB 预测结果",
        description: "预测值与实测值的散点对比图",
        type: "result",
      },
      {
        title: "遥感数据处理",
        description: "多源遥感数据的特征提取与预处理流水线",
        type: "flow",
      },
      {
        title: "图结构可视化",
        description: "4000 节点的拓扑图与生态图结构展示",
        type: "graph",
      },
    ],
    sections: [
      {
        title: "应用场景",
        titleEn: "Scenario",
        content:
          "面向遥感生态监测场景：利用多源遥感影像和生态领域知识，预测森林地上生物量 (AGB)。核心价值在于数据工程能力——将散落的遥感数据、拓扑关系、生态知识整合为可计算的图结构。",
      },
      {
        title: "解决的问题",
        titleEn: "Problem",
        content:
          "传统遥感反演仅利用光谱特征，缺乏生态领域知识的融合。本系统将拓扑关系和生态知识组织为图结构，与遥感特征联合建模，显著提升预测精度。",
      },
      {
        title: "核心模块",
        titleEn: "Modules",
        content:
          "- 多源遥感数据处理流水线（rasterio + 特征工程）\n- 拓扑知识图谱 (TKG)：空间邻接关系建模\n- 生态知识图谱 (EKG)：领域知识关系建模\n- 双图融合模块：GAT + GCN 联合学习\n- 分段建模策略：按区域特征差异化建模\n- Strict Spatial OOD 评估：验证泛化能力",
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
          "- 融合 R²: ~0.25 → ~0.72（提升近 3 倍）\n- 4,000 图节点，12 维特征空间\n- Strict Spatial OOD 验证：模型在未见区域仍保持预测能力\n- 双图融合显著优于单图基线",
      },
      {
        title: "我的职责",
        titleEn: "My Role",
        content:
          "独立完成数据处理流水线、双图融合架构设计、TKG/EKG 构建、GNN 模型开发、分段建模策略与 OOD 评估实验。",
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
      "GraphRAG 系统上线前的质量评测工具，覆盖事实冲突、结构噪声、时间错位三类退化场景，提供过程级诊断。",
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
        title: "退化等级注入",
        description: "三类退化在不同等级下的注入效果对比",
        type: "flow",
      },
      {
        title: "QA 评测曲线",
        description: "898 道 QA 题在不同退化等级下的准确率变化",
        type: "result",
      },
      {
        title: "过程级诊断",
        description: "Evidence Usage 证据使用的分布统计",
        type: "result",
      },
      {
        title: "质量退化报告",
        description: "自动生成的质量退化分析报告截图",
        type: "architecture",
      },
    ],
    sections: [
      {
        title: "应用场景",
        titleEn: "Scenario",
        content:
          "面向 GraphRAG 系统上线前的质量评测。在生产部署前，帮助开发者回答：当前图谱质量是否足够支撑问答准确率要求？哪类退化对结果影响最大？需要优先修复什么？",
      },
      {
        title: "解决的问题",
        titleEn: "Problem",
        content:
          "GraphRAG 的问答质量高度依赖底层知识图谱质量，但缺乏系统性评测工具。开发者无法量化回答「图谱质量差了多少 → 问答准确率降了多少」，也无法定位具体是哪类质量问题导致了退化。",
      },
      {
        title: "核心模块",
        titleEn: "Modules",
        content:
          "- 三类退化注入器：事实冲突、结构噪声、时间错位，每类支持多等级注入\n- 898 题 QA Benchmark：覆盖单跳、多跳、聚合三类问法\n- 过程级诊断框架：追踪检索、证据使用、推理各环节的退化传导\n- 质量退化可视化：自动生成评测报告",
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
          "- 898 道 QA 测试题，覆盖 3 类问法\n- 3 类退化类型的系统性影响量化\n- 过程级可解释性诊断：定位退化传导路径\n- 发现质量退化的非线性崩溃规律（轻微退化影响小，临界点后急剧恶化）",
      },
      {
        title: "我的职责",
        titleEn: "My Role",
        content:
          "独立完成评测框架设计、三类退化注入器开发、898 题 QA Benchmark 构建、过程级诊断算法实现与实验分析。",
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
