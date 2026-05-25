"use client"

import { motion } from "motion/react"

import type { HighlightMetric } from "@/features/portfolio/types/projects"

interface Props {
  metrics: HighlightMetric[]
}

export function MetricsGrid({ metrics }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-md"
        >
          {/* Glow corner */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-20 w-20 rounded-full bg-cyan-glow/10 blur-[30px]" />

          <p className="text-xs text-muted-foreground">{metric.label}</p>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              {metric.value}
            </span>
            {metric.suffix && (
              <span className="text-sm font-medium text-cyan-glow">
                {metric.suffix}
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
