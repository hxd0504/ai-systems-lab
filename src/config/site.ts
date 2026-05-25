import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: "Night Lab",
  url: process.env.APP_URL || "https://nightlab.dev",
  ogImage: USER.ogImage,
  description:
    "AI Systems Portfolio — Knowledge Graph, GraphRAG, Remote Sensing AI, Reliable AI Systems",
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#0a0e1a",
  dark: "#0a0e1a",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = ""
export const GITHUB_USERNAME = ""
export const SOURCE_CODE_GITHUB_REPO = ""
export const SOURCE_CODE_GITHUB_URL = ""
export const SPONSORSHIP_URL = ""
export const UTM_PARAMS: Record<string, string> = {}
