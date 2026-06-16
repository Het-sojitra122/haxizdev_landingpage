"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Check, Mail } from "lucide-react"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.01-.02-1.98-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function Contact() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative scroll-mt-20 px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-14">
        {/* glow backdrop */}
        <div
          aria-hidden="true"
          className="animate-pulse-glow pointer-events-none absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
        />

        <div className="relative">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              great together
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Drop your email and I&apos;ll get back to you about your project.
          </p>

          <form
            onSubmit={handleSubmit}
            className="group mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="relative flex-1">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-primary/50 via-chart-2/50 to-chart-5/50 opacity-0 blur-sm transition-opacity duration-300 group-focus-within:opacity-100"
              />
              <div className="relative flex items-center rounded-full border border-border bg-background/80 backdrop-blur">
                <Mail className="ml-4 size-4 shrink-0 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="w-full bg-transparent px-3 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-8px_var(--glow)] transition-all hover:shadow-[0_0_40px_-4px_var(--glow)] hover:brightness-110"
            >
              {submitted ? (
                <>
                  <Check className="size-4" />
                  Sent
                </>
              ) : (
                <>
                  Send
                  <ArrowRight className="size-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 flex items-center justify-center gap-3">
            {[
              { icon: GithubIcon, label: "GitHub", href: "#" },
              { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Het. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </section>
  )
}
