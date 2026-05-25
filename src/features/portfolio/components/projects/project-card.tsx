"use client"

import { motion } from "motion/react"
import Link from "next/link"

import type { Project } from "@/features/portfolio/types/projects"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={project.link}
        className="group relative block h-full overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-glow/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_-8px_oklch(0.75_0.15_200_/_0.25),0_0_60px_-16px_oklch(0.65_0.2_300_/_0.15)]"
      >
        {/* Glow effect on hover */}
        <div className="pointer-events-none absolute -top-px -right-px h-24 w-24 rounded-tr-xl bg-gradient-to-bl from-cyan-glow/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="mt-1 text-xs font-medium text-cyan-glow/80">
            {project.subtitle}
          </p>
        )}

        {/* System Flow */}
        {project.systemFlow && (
          <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
            <p className="font-mono text-xs leading-relaxed text-muted-foreground/90">
              {project.systemFlow}
            </p>
          </div>
        )}

        {/* Skills tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 4 && (
            <span className="inline-flex items-center text-xs text-muted-foreground/60">
              +{project.skills.length - 4}
            </span>
          )}
        </div>

        {/* Description */}
        {project.description && (
          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        )}

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary/60 transition-colors group-hover:text-primary">
          <span>查看详情</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path
              d="M4.5 3L7.5 6L4.5 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}
