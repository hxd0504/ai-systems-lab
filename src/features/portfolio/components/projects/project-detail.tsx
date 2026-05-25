"use client"

import { motion } from "motion/react"
import Link from "next/link"

import type { Project } from "@/features/portfolio/types/projects"

import { ArchitectureDiagram } from "./visuals/architecture-diagram"
import { EvidenceGrid } from "./visuals/evidence-grid"
import { MetricsGrid } from "./visuals/metrics-grid"
import { ProjectHeroVisual } from "./visuals/project-hero-visual"
import { ScreenshotGallery } from "./visuals/screenshot-gallery"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const sections = project.sections || []

  const navItems = [
    ...(project.visualType ? [{ id: "visual", label: "系统概览" }] : []),
    ...(project.highlightMetrics?.length
      ? [{ id: "metrics", label: "核心指标" }]
      : []),
    ...(project.architectureSteps?.length
      ? [{ id: "architecture", label: "系统链路" }]
      : []),
    ...sections.map((s) => ({
      id: s.titleEn.toLowerCase().replace(/\s+/g, "-"),
      label: s.title,
    })),
    ...(project.evidenceItems?.length
      ? [{ id: "evidence", label: "项目证据" }]
      : []),
    ...(project.screenshots?.length
      ? [{ id: "screenshots", label: "截图" }]
      : []),
    ...(project.relatedOutputs?.length
      ? [{ id: "related-outputs", label: "相关成果" }]
      : []),
  ]

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M7.5 3L4.5 6L7.5 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          返回项目列表
        </Link>
      </motion.div>

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        {project.subtitle && (
          <p className="mt-2 text-sm font-medium text-cyan-glow">
            {project.subtitle}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_260px]">
        {/* Main content */}
        <div className="space-y-12">
          {/* Hero Visual */}
          {project.visualType && (
            <section id="visual">
              <ProjectHeroVisual visualType={project.visualType} />
            </section>
          )}

          {/* Metrics */}
          {project.highlightMetrics && project.highlightMetrics.length > 0 && (
            <section id="metrics">
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
                核心指标
              </h2>
              <MetricsGrid metrics={project.highlightMetrics} />
            </section>
          )}

          {/* Architecture */}
          {project.architectureSteps &&
            project.architectureSteps.length > 0 && (
              <section id="architecture">
                <ArchitectureDiagram steps={project.architectureSteps} />
              </section>
            )}

          {/* Content sections */}
          {sections.map((section, index) => (
            <motion.section
              key={section.titleEn}
              id={section.titleEn.toLowerCase().replace(/\s+/g, "-")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {section.title}
                <span className="ml-2 text-sm font-normal text-muted-foreground/60">
                  {section.titleEn}
                </span>
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                {section.content}
              </div>
            </motion.section>
          ))}

          {/* Evidence */}
          {project.evidenceItems && project.evidenceItems.length > 0 && (
            <section id="evidence">
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
                项目证据
                <span className="ml-2 text-sm font-normal text-muted-foreground/60">
                  Evidence
                </span>
              </h2>
              <EvidenceGrid items={project.evidenceItems} />
            </section>
          )}

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section id="screenshots">
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
                截图
                <span className="ml-2 text-sm font-normal text-muted-foreground/60">
                  Screenshots
                </span>
              </h2>
              <ScreenshotGallery screenshots={project.screenshots} />
            </section>
          )}

          {/* Related Outputs */}
          {project.relatedOutputs && project.relatedOutputs.length > 0 && (
            <motion.section
              id="related-outputs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                相关成果
                <span className="ml-2 text-sm font-normal text-muted-foreground/60">
                  Related Outputs
                </span>
              </h2>
              <div className="mt-4 space-y-3">
                {project.relatedOutputs.map((output, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-md bg-cyan-glow/10 px-2 py-0.5 text-xs font-medium text-cyan-glow">
                        {output.type === "paper"
                          ? "论文"
                          : output.type === "patent"
                            ? "专利"
                            : "会议"}
                      </span>
                      {output.status && (
                        <span className="text-xs text-muted-foreground">
                          {output.status}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-foreground">
                      {output.title}
                    </p>
                    {output.venue && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {output.venue}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-md">
              <h3 className="text-sm font-semibold text-foreground">
                页面导航
              </h3>
              <nav className="mt-3 space-y-1.5">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {project.systemFlow && (
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-md">
                <h3 className="text-sm font-semibold text-foreground">
                  系统链路
                </h3>
                <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                  {project.systemFlow}
                </p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
