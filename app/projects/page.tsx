import ProjectsJourney from "@/components/projects/ProjectsJourney";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto flex flex-col px-4 py-16 max-w-6xl">
        <h1 className="z-10 whitespace-pre-wrap text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-8">
          Overview
        </h1>
        <ProjectsJourney />
      </div>
    </div>
  );
}
