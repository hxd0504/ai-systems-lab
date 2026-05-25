import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProjectDetail } from "@/features/portfolio/components/projects/project-detail"
import { PROJECTS } from "@/features/portfolio/data/projects"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.id === slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.description?.split("\n")[0] || project.title,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.id === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
