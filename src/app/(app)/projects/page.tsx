import type { Metadata } from "next"

import { ProjectsGrid } from "@/features/portfolio/components/projects/projects-grid"

export const metadata: Metadata = {
  title: "项目经历",
  description: "可运行的 AI 应用系统：RAG、知识图谱、数据智能",
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          项目经历
        </h1>
        <p className="mt-3 text-muted-foreground">
          可运行的 AI 应用系统：RAG、知识图谱、数据智能
        </p>
      </div>
      <ProjectsGrid />
    </div>
  )
}
