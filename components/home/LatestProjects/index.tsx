import Container from "@/components/layout/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function LatestProjects() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            New Launches
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Latest Projects
          </h2>

          <p className="mt-4 text-slate-500">
            Explore premium residential and commercial projects.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}