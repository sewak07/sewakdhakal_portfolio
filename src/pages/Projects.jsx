import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCode, FaFolderOpen } from "react-icons/fa";
import projects from "../utils/ProjectInfo.js";
import ProjectCardComponents from "../components/ProjectCardComponents";

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Modern Projects Banner */}
      <section className="px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative isolate overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-neutral-50">
            {/* Decorative Background Elements */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/4 -z-10 h-64 w-64 rounded-full bg-orange-100/70 blur-3xl"
            />

            <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
              {/* Banner Content */}
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-700 sm:text-sm">
                  My Work
                </p>

                <h1 className="mt-3 max-w-xl text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                  Projects Built
                  <span className="mt-1 block text-orange-500">
                    With Purpose.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                  Explore projects that showcase my experience in building
                  responsive interfaces, full-stack applications, and practical
                  solutions that turn ideas into working products.
                </p>

                {/* Project Highlights */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Full-Stack Development",
                    "Responsive Design",
                    "Real-World Projects",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200 bg-white/90 px-3.5 py-2 text-xs font-medium text-neutral-700 shadow-sm sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#project-list"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 sm:px-6"
                  >
                    Explore Projects
                  </a>

                  <NavLink
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white/80 px-5 py-3.5 text-sm font-semibold text-neutral-800 transition-all duration-300 hover:border-orange-300 hover:bg-white hover:text-orange-600 sm:px-6"
                  >
                    Get in Touch
                  </NavLink>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
                {/* Image Accent */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-orange-200/70 via-orange-100/30 to-transparent blur-xl"
                />

                <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl shadow-neutral-900/10 sm:rounded-3xl sm:p-3">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
                      alt="Laptop and workspace for web development"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                      fetchPriority="high"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-transparent to-transparent"
                    />
                  </div>
                </div>

                {/* Floating Project Card */}
                <div className="relative mx-3 -mt-5 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-lg shadow-neutral-900/5 backdrop-blur sm:absolute sm:-bottom-5 sm:-left-7 sm:mx-0 sm:mt-0 sm:max-w-[245px] sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <FaCode size={21} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-neutral-900">
                        My Works
                      </p>

                      <p className="mt-1 text-xs text-neutral-500">
                        Ideas into applications
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-1.5">
                    <span className="h-1.5 flex-1 rounded-full bg-orange-500" />
                    <span className="h-1.5 flex-1 rounded-full bg-orange-300" />
                    <span className="h-1.5 flex-1 rounded-full bg-orange-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="project-list"
        className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                Portfolio
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                Projects I've Worked On
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                A selection of applications and development projects
                demonstrating my skills, creativity, and problem-solving.
              </p>
            </div>
          </div>

          {/* Project Cards */}
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCardComponents
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-16 text-center">
              <FaFolderOpen
                size={32}
                className="mx-auto text-orange-400"
                aria-hidden="true"
              />

              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                Projects coming soon
              </h3>

              <p className="mt-2 text-sm text-neutral-600">
                New projects will be added here soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}