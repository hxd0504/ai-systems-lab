"use client"

import { motion } from "motion/react"

import type { VisualType } from "@/features/portfolio/types/projects"

interface Props {
  visualType: VisualType
}

export function ProjectHeroVisual({ visualType }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-glow/10 blur-[60px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-violet-glow/10 blur-[60px]" />

      <div className="relative z-10">
        {visualType === "kg-rag-pipeline" && <KgRagPipeline />}
        {visualType === "kg-defense-flow" && <KgDefenseFlow />}
        {visualType === "graph-fusion" && <GraphFusion />}
        {visualType === "graphrag-eval" && <GraphragEval />}
      </div>
    </motion.div>
  )
}

function KgRagPipeline() {
  const steps = [
    { label: "Text", sub: "原始文档", color: "from-blue-500/20 to-blue-600/5" },
    {
      label: "Chunk",
      sub: "文本切分",
      color: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      label: "KG Extraction",
      sub: "知识抽取",
      color: "from-violet-500/20 to-violet-600/5",
    },
    {
      label: "Neo4j",
      sub: "图谱存储",
      color: "from-green-500/20 to-green-600/5",
    },
    {
      label: "Retrieval",
      sub: "混合检索",
      color: "from-amber-500/20 to-amber-600/5",
    },
    { label: "LLM", sub: "答案生成", color: "from-rose-500/20 to-rose-600/5" },
    {
      label: "FastAPI",
      sub: "接口输出",
      color: "from-emerald-500/20 to-emerald-600/5",
    },
  ]

  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-foreground">
        端到端 RAG Pipeline
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2"
          >
            <div
              className={`rounded-lg border border-white/[0.1] bg-gradient-to-br ${step.color} px-3 py-2`}
            >
              <p className="text-xs font-semibold text-foreground">
                {step.label}
              </p>
              <p className="text-[10px] text-muted-foreground">{step.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="shrink-0 text-cyan-glow/40"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function KgDefenseFlow() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-foreground">
        风控分流决策
      </h3>
      <div className="grid gap-3 sm:grid-cols-3">
        {/* Input */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          className="rounded-lg border border-white/[0.1] bg-blue-500/10 p-3"
        >
          <p className="text-xs font-semibold text-blue-400">候选数据</p>
          <p className="mt-1 text-[10px] text-muted-foreground">
            Candidate Data
          </p>
        </motion.div>

        {/* Check */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg border border-white/[0.1] bg-violet-500/10 p-3"
        >
          <p className="text-xs font-semibold text-violet-400">
            规则 + 一致性检查
          </p>
          <p className="mt-1 text-[10px] text-muted-foreground">
            Rule + Local Consistency
          </p>
        </motion.div>

        {/* Decision */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          {[
            {
              label: "PASS",
              sub: "写入主图谱",
              color: "bg-green-500/15 border-green-500/30 text-green-400",
            },
            {
              label: "FLAG",
              sub: "标记审查",
              color: "bg-amber-500/15 border-amber-500/30 text-amber-400",
            },
            {
              label: "REJECT",
              sub: "拒绝写入",
              color: "bg-red-500/15 border-red-500/30 text-red-400",
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-lg border p-2 ${item.color}`}
            >
              <p className="text-xs font-semibold">{item.label}</p>
              <p className="text-[10px] opacity-70">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function GraphFusion() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-foreground">
        双图融合架构
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* TKG */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <p className="text-xs font-semibold text-cyan-400">
              TKG — 拓扑知识图谱
            </p>
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground">
            Topological Knowledge Graph
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {["空间邻接", "高程关系", "坡度连接"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-cyan-500/10 px-1.5 py-0.5 text-[10px] text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* EKG */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg border border-green-500/20 bg-green-500/5 p-4"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <p className="text-xs font-semibold text-green-400">
              EKG — 生态知识图谱
            </p>
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground">
            Ecological Knowledge Graph
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {["物种关联", "土壤类型", "气候特征"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-green-500/10 px-1.5 py-0.5 text-[10px] text-green-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fusion arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 flex items-center justify-center gap-2"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <span className="text-xs font-medium text-violet-400">
          GAT + GCN 融合
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </motion.div>
    </div>
  )
}

function GraphragEval() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-foreground">
        评测与诊断流程
      </h3>
      <div className="space-y-3">
        {[
          {
            label: "退化注入",
            sub: "事实冲突 / 结构噪声 / 时间错位",
            color: "border-red-500/20 bg-red-500/5",
            dot: "bg-red-400",
          },
          {
            label: "GraphRAG Pipeline",
            sub: "知识图谱 → 检索 → 生成",
            color: "border-violet-500/20 bg-violet-500/5",
            dot: "bg-violet-400",
          },
          {
            label: "QA Benchmark",
            sub: "898 道测试题",
            color: "border-amber-500/20 bg-amber-500/5",
            dot: "bg-amber-400",
          },
          {
            label: "过程级诊断",
            sub: "Evidence → Reasoning → Answer",
            color: "border-cyan-500/20 bg-cyan-500/5",
            dot: "bg-cyan-400",
          },
        ].map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-center gap-3 rounded-lg border p-3 ${step.color}`}
          >
            <div className={`h-2 w-2 rounded-full ${step.dot}`} />
            <div>
              <p className="text-xs font-semibold text-foreground">
                {step.label}
              </p>
              <p className="text-[10px] text-muted-foreground">{step.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
