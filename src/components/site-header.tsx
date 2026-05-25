import Link from "next/link"

import { NavDesktop } from "@/components/nav-desktop"
import { SiteHeaderMark } from "@/components/site-header-mark"
import { MAIN_NAV } from "@/config/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background/80 px-2 pt-2 backdrop-blur-md">
      <div className="mx-auto flex h-12 items-center justify-between gap-2 border-x border-line px-2 sm:gap-4 md:max-w-3xl">
        <Link
          className="transition-[scale] ease-out active:scale-[0.98] [&_svg]:h-8 [&_svg]:shrink-0"
          href="/"
          aria-label="Home"
        >
          <SiteHeaderMark />
        </Link>

        <div className="flex-1" />

        <NavDesktop items={MAIN_NAV} />
      </div>
    </header>
  )
}
