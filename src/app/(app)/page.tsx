import type { Metadata } from "next"

import { Hero } from "@/features/portfolio/components/hero"
import { ProjectsGrid } from "@/features/portfolio/components/projects/projects-grid"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
    </>
  )
}
