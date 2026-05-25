import type { Metadata } from "next"

import { ContactContent } from "@/features/portfolio/components/contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Huang Xiaodong",
}

export default function ContactPage() {
  return <ContactContent />
}
