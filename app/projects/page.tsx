import ProjectsJourney from "@/components/projects/ProjectsJourney";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/project";
import { Calendar, Code, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const firstProject = projects.find((project) => project.id === 1) ?? projects[0];

  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto flex max-w-6xl flex-col px-4 py-8 md:pl-[92px] lg:py-10">
        <h1 className="z-10 mb-6 text-center text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
          Overview
        </h1>

        <Card className="mb-8 overflow-hidden border-border/70 bg-card/90 shadow-lg">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            {firstProject.image && (
              <div className="relative min-h-56 bg-muted lg:min-h-full">
                <Image
                  src={firstProject.image}
                  alt={firstProject.title}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            )}
            <CardContent className="p-5 sm:p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                  {firstProject.type}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {firstProject.period}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                {firstProject.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                {firstProject.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {firstProject.tech.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 rounded-md border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    <Code className="h-3 w-3" />
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {firstProject.team}
                </span>
                {firstProject.liveUrl && (
                  <Link
                    href={firstProject.liveUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 font-medium text-primary"
                  >
                    Visit project
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </CardContent>
          </div>
        </Card>

        <ProjectsJourney featuredProjectId={firstProject.id} />
      </div>
    </div>
  );
}
