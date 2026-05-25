"use client"

import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import { TooltipProvider as RadixTooltipProvider } from "@/components/ui/tooltip"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        storageKey="theme"
        defaultTheme="dark"
        attribute="class"
      >
        <RadixTooltipProvider>{children}</RadixTooltipProvider>
      </ThemeProvider>
    </JotaiProvider>
  )
}
