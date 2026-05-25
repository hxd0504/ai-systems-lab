"use client"

import { motion } from "motion/react"

import { USER } from "@/features/portfolio/data/user"

export function AboutContent() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          关于我
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            我是{USER.displayName}，一名{USER.jobTitle}。
          </p>

          <p>
            我关注大模型应用、RAG
            系统、知识图谱工程与数据智能应用，擅长把非结构化数据、图谱关系和模型能力整合为可运行、可验证的
            AI 应用系统。
          </p>

          <p>
            我的工作覆盖从数据处理、知识抽取、图谱构建到检索增强、接口封装、质量评测的完整链路，注重端到端可运行而非仅停留在实验阶段。
          </p>
        </div>

        {/* Core capabilities */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            核心能力
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "RAG 系统",
                desc: "端到端检索增强生成系统，支持向量检索、图谱遍历、混合检索策略",
              },
              {
                title: "知识图谱工程",
                desc: "知识抽取、图谱构建、持续更新、质量控制与安全防护",
              },
              {
                title: "大模型应用",
                desc: "LLM 接口封装、Prompt 工程、多轮对话、知识注入",
              },
              {
                title: "数据智能应用",
                desc: "多源数据融合、图学习预测、质量评测与诊断",
              },
              {
                title: "系统工程化",
                desc: "FastAPI 接口、数据库设计、评估闭环、交付文档",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-md"
              >
                <h3 className="text-sm font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            技术栈
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Python",
              "FastAPI",
              "Neo4j",
              "LangChain",
              "Sentence Transformers",
              "PyTorch Geometric",
              "Chroma",
              "GraphRAG",
              "OpenAI API",
              "scikit-learn",
              "rasterio",
              "Next.js",
              "React",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
