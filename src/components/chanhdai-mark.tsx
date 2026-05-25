export function NightLabMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 180 36"
      aria-hidden
      {...props}
    >
      <text
        x="0"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        Night Lab
      </text>
    </svg>
  )
}

export const ChanhDaiMark = NightLabMark

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 180 36"><text x="0" y="28" font-family="system-ui,-apple-system,sans-serif" font-size="22" font-weight="700" fill="currentColor" letter-spacing="-0.02em">Night Lab</text></svg>`
}
