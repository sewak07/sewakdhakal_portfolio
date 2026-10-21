import { NavLink } from "react-router-dom";
import projects from "../utils/ProjectInfo.js";
import ProjectCardComponents from "../components/ProjectCardComponents";

export default function FeaturedProjects() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Portfolio
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Featured <span className="text-orange-500">Projects.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
            A selection of projects that showcase my skills in building modern,
            practical web applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            (project) =>
              project.isFeatured && (
                <ProjectCardComponents key={project.title} project={project} />
              ),
          )}
        </div>

        {/* View All Projects */}
        <div className="mt-12 text-center">
          <NavLink
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-orange-600 transition-colors duration-300 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            View All Projects
            <span className="transition-transform duration-300 hover:translate-x-1">
              →
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
