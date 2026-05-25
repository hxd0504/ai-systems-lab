"use client"

import { motion } from "motion/react"

import { PROJECTS } from "@/features/portfolio/data/projects"

import { ProjectCard } from "./project-card"

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            项目经历
          </h2>
          <p className="mt-3 text-muted-foreground">
            可运行的 AI 应用系统：RAG、知识图谱、数据智能
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
