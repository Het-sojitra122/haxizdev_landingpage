import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center px-6 pt-16">
      {/* Glowing neon background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.97_0.01_250/4%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.97_0.01_250/4%)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
        {/* primary glow */}
        <div className="animate-pulse-glow absolute left-1/2 top-1/3 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[140px]" />
        {/* teal accent glow */}
        <div className="animate-pulse-glow absolute left-[20%] top-[60%] size-[26rem] rounded-full bg-chart-2/20 blur-[120px]" />
        {/* indigo accent glow */}
        <div className="animate-pulse-glow absolute right-[12%] top-[28%] size-[24rem] rounded-full bg-chart-5/20 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-chart-4 shadow-[0_0_8px_2px_var(--chart-4)]" />
          Available for new projects
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Hi, I&apos;m Het.{" "}
          <span className="bg-gradient-to-br from-primary via-chart-2 to-chart-5 bg-clip-text text-transparent">
            I Build Modern Web &amp; Python Apps
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Crafting fast, premium digital products — from full-stack web platforms to Python tools that make real
          workflows effortless.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-6px_var(--glow)] transition-all hover:shadow-[0_0_40px_-2px_var(--glow)] hover:brightness-110"
          >
            View My Work
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-7 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
