import projects from "../utils/ProjectInfo.js";
import ProjectCardComponents from "../components/ProjectCardComponents";

export default function Projects() {
  return (
    <section className="min-h-screen bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            My Work
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            My Projects
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Explore projects that showcase my experience in building
            full-stack, responsive, and scalable web applications.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        {/* Responsive Project Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCardComponents
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}