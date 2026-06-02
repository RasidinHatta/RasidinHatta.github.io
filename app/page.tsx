"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import { HeroShowcase } from "@/components/landing/hero-showcase";
import CardFlip from "@/components/kokonutui/card-flip";
import { LiquidGlassCard } from "@/components/kokonutui/liquid-glass-card";
import SpotlightCards, { SpotlightItem } from "@/components/kokonutui/spotlight-cards";
import { projects } from "@/data/project";

const focusAreas: SpotlightItem[] = [
  {
    title: "Operational Web Apps",
    description:
      "Secure dashboards, workflow systems, authentication, role access, and database-backed application screens.",
    icon: Code2,
    color: "#10b981",
  },
  {
    title: "SQL and Report Automation",
    description:
      "Stored procedures, leave balance recalculation, scheduled reports, PDFs, and custom email delivery.",
    icon: Database,
    color: "#38bdf8",
  },
  {
    title: "Desktop Support Tools",
    description:
      "Flutter Windows utilities, installers, update scripts, and support-friendly database maintenance actions.",
    icon: TerminalSquare,
    color: "#f59e0b",
  },
  {
    title: "Security Mindset",
    description:
      "Network and security foundation applied to authentication, data access, deployment, and system hardening.",
    icon: ShieldCheck,
    color: "#a78bfa",
  },
];

const featuredProjects = projects
  .filter((project) => project.status === "active" || project.type === "professional")
  .slice(0, 4);

const interfaceHighlights = [
  {
    label: "Design",
    title: "Focused layout",
    copy: "Readable sections, consistent spacing, and clear action paths.",
  },
  {
    label: "Build",
    title: "Practical systems",
    copy: "Interfaces connected to real data, workflows, and deployment needs.",
  },
  {
    label: "Support",
    title: "Maintainable flow",
    copy: "Tools shaped for daily use, updates, and troubleshooting.",
  },
];

const capabilityGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Responsive UI", "Component Systems"],
  },
  {
    title: "Backend",
    items: ["SQL Server", "Stored Procedures", "Prisma", "Auth", "API Workflows"],
  },
  {
    title: "Automation",
    items: ["Python", "Reports", "Email Delivery", "Task Scheduler", "Installers"],
  },
  {
    title: "Delivery",
    items: ["Windows Apps", "Deployment Scripts", "Database Setup", "Support Tools"],
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <HeroShowcase />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:pl-[92px] lg:px-8 lg:pl-[92px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Interface Direction
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              A sharper portfolio built around clarity and useful systems.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              The page now uses a quieter static pattern, stronger cards, and
              focused sections that guide visitors from the hero into work,
              capabilities, and contact without feeling empty.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {interfaceHighlights.map((item) => (
              <CardFlip
                key={item.title}
                className="h-48 max-w-none"
                frontClassName="rounded-lg border-0 bg-transparent shadow-none"
                backClassName="rounded-lg border-0 bg-transparent shadow-none"
                front={
                  <LiquidGlassCard glassSize="sm" className="h-full rounded-lg border-border/70 bg-card/90 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.copy}
                    </p>
                  </LiquidGlassCard>
                }
                back={
                  <LiquidGlassCard glassSize="sm" className="flex h-full flex-col justify-between rounded-lg border-border/70 bg-card/90 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {item.label}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Refined spacing, clear hierarchy, and a calmer component system for faster scanning.
                    </p>
                  </LiquidGlassCard>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/45">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:pl-[92px] lg:px-8 lg:pl-[92px]">
          <SpotlightCards
            items={focusAreas}
            eyebrow="Core Work"
            heading="Useful interfaces with responsive, polished motion."
            className="border border-border/70 bg-card/80 shadow-sm"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:pl-[92px] lg:px-8 lg:pl-[92px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Systems with hands-on delivery.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <LiquidGlassCard
              key={project.id}
              glassSize="default"
              className="rounded-lg border-border/70 bg-card/85 p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-primary">
                  {project.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.period}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Live preview
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
                {project.downloadUrl && (
                  <Link
                    href={project.downloadUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Download package
                    <Download className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/45">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 md:pl-[92px] lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:pl-[92px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Capability Stack
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              A practical stack for interfaces, data, and delivery.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              The technology section is grouped by how each part supports a
              finished product: what users see, where data moves, what runs
              automatically, and how the system ships.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilityGroups.map((skill) => {
              return (
                <LiquidGlassCard
                  key={skill.title}
                  glassSize="sm"
                  className="rounded-lg border-border/70 bg-background/80 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">
                      {skill.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </LiquidGlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:pl-[92px] lg:px-8 lg:pl-[92px]">
        <LiquidGlassCard className="rounded-lg border-border/70 bg-card/85 p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Ready For The Next Build
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Interested in software that supports daily operations?
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                Reach me for full-stack development, SQL Server workflows,
                report automation, or support-focused internal tools.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Contact me
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                Browse work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </LiquidGlassCard>
      </section>
    </div>
  );
}
