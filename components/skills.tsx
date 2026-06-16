const SKILLS = [
  { name: "Python", level: "Backend & Automation" },
  { name: "Next.js", level: "Full-stack React" },
  { name: "React", level: "UI Engineering" },
  { name: "Tailwind CSS", level: "Design Systems" },
  { name: "JavaScript", level: "Core Language" },
  { name: "GitHub", level: "Version Control" },
]

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium text-primary">Toolbox</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Skills &amp; technologies
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 size-20 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <p className="text-lg font-semibold tracking-tight">{skill.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
