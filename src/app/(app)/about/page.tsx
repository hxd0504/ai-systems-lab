import type { Metadata } from "next"

import { AboutContent } from "@/features/portfolio/components/about-content"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  title: "关于我",
  description: `${USER.displayName} - ${USER.jobTitle}`,
}

export default function AboutPage() {
  return <AboutContent />
}
