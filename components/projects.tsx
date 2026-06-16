import { ArrowUpRight, Database, ShoppingBag, GraduationCap } from "lucide-react"

const PROJECTS = [
  {
    title: "MilkPapsi Business Management Web App",
    description:
      "A custom-built application to manage family business operations — inventory, billing, daily ledgers and reporting, all in one streamlined dashboard.",
    tags: ["Next.js", "PostgreSQL", "Dashboard"],
    icon: Database,
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    title: "E-Commerce Shopping Website",
    description: "A feature-rich mock-up of an online store with cart, product browsing and checkout flow.",
    tags: ["React", "Tailwind"],
    icon: ShoppingBag,
    span: "lg:col-span-1",
    featured: false,
  },
  {
    title: "School Quiz Platform",
    description: "Python and web-based quiz application built for school computer labs and live assessments.",
    tags: ["Python", "Flask"],
    icon: GraduationCap,
    span: "lg:col-span-1",
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium text-primary">Selected Work</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Projects I&apos;ve crafted with care
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          A blend of full-stack web apps and Python tooling — each built to solve a real problem.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-2">
        {PROJECTS.map((project) => {
          const Icon = project.icon
          return (
            <article
              key={project.title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 sm:p-8 ${project.span}`}
            >
              {/* border-glow effect */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--x,50%) var(--y,0%), oklch(0.72 0.16 230 / 14%), transparent 70%)",
                }}
              />
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute right-0 top-0 size-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 ${
                  project.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <div className="relative">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3
                  className={`text-balance font-semibold tracking-tight ${
                    project.featured ? "text-2xl sm:text-3xl" : "text-xl"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mt-3 text-pretty leading-relaxed text-muted-foreground ${
                    project.featured ? "max-w-md text-base" : "text-sm"
                  }`}
                >
                  {project.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
