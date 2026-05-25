"use client"

import { motion } from "motion/react"

import type { ArchitectureStep } from "@/features/portfolio/types/projects"

interface Props {
  steps: ArchitectureStep[]
  title?: string
}

export function ArchitectureDiagram({ steps, title = "系统链路" }: Props) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2"
          >
            <div className="rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-2 transition-colors hover:border-cyan-glow/30 hover:bg-white/[0.08]">
              <p className="text-xs font-semibold text-foreground">
                {step.label}
              </p>
            </div>
            {i < steps.length - 1 && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="shrink-0 text-cyan-glow/30"
              >
                <path
                  d="M7 5L13 10L7 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
