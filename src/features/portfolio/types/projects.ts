export type VisualType =
  | "kg-rag-pipeline"
  | "kg-defense-flow"
  | "graph-fusion"
  | "graphrag-eval"

export type RepoStatus = "public" | "private" | "pending"

export interface ArchitectureStep {
  label: string
  icon?: string
}

export interface EvidenceItem {
  type:
    | "github"
    | "demo"
    | "readme"
    | "api-docs"
    | "paper"
    | "patent"
    | "architecture"
    | "evaluation"
  label: string
  url?: string
}

export interface ScreenshotItem {
  title: string
  description: string
  image?: string
  type:
    | "api-docs"
    | "graph"
    | "demo"
    | "terminal"
    | "flow"
    | "result"
    | "architecture"
}

export interface HighlightMetric {
  label: string
  value: string
  suffix?: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  period: {
    start: string
    end?: string
  }
  link: string
  skills: string[]
  description?: string
  logo?: string
  isExpanded?: boolean
  systemFlow?: string
  sections?: ProjectSection[]
  relatedOutputs?: RelatedOutput[]
  // New fields
  githubUrl?: string
  demoUrl?: string
  readmeUrl?: string
  paperUrl?: string
  patentUrl?: string
  repoStatus?: RepoStatus
  visualType?: VisualType
  architectureSteps?: ArchitectureStep[]
  evidenceItems?: EvidenceItem[]
  screenshots?: ScreenshotItem[]
  apiExamples?: string[]
  highlightMetrics?: HighlightMetric[]
}

export type ProjectSection = {
  title: string
  titleEn: string
  content: string
}

export type RelatedOutput = {
  type: "paper" | "patent" | "conference"
  title: string
  venue?: string
  status?: string
}
