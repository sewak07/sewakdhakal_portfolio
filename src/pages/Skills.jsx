
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaCode,
  FaServer,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";
import categories from "../utils/SkillsInfo";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(
    "Frontend Development"
  );

  const categoryOptions = [
    { label: "Frontend", value: "Frontend Development" },
    { label: "Backend", value: "Backend Development" },
    { label: "Tools & Platforms", value: "Tools & Platforms" },
  ];

  const filteredCategories = categories.filter(
    (category) => category.title === activeCategory
  );

  const categoryIcons = {
    "Frontend Development": FaCode,
    "Backend Development": FaServer,
    "Tools & Platforms": FaTools,
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero Banner */}
      <section className="px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative isolate overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-neutral-50">
            {/* Background Decorations */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/4 -z-10 h-64 w-64 rounded-full bg-orange-100/70 blur-3xl"
            />

            <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
              {/* Hero Content */}
              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-700 sm:text-sm">
                  My Expertise
                </span>

                <h1 className="mt-3 max-w-xl text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                  My Technical
                  <span className="mt-1 block text-orange-500">
                    Skills &amp; Tools.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                  Explore the technologies I use to build responsive
                  interfaces, develop backend systems, and turn ideas
                  into practical web applications.
                </p>

                {/* Technology Highlights */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Frontend", "Backend", "Development Tools"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-neutral-200 bg-white/90 px-3.5 py-2 text-xs font-medium text-neutral-700 shadow-sm sm:text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>

                {/* Hero Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#technical-skills"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 sm:px-6"
                  >
                    Explore My Skills
                  </a>

                  <NavLink
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white/80 px-5 py-3.5 text-sm font-semibold text-neutral-800 transition-all duration-300 hover:border-orange-300 hover:bg-white hover:text-orange-600 sm:px-6"
                  >
                    Get in Touch
                  </NavLink>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
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

                {/* Floating Technology Card */}
                <div className="relative mx-3 -mt-5 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-lg shadow-neutral-900/5 backdrop-blur sm:absolute sm:-bottom-5 sm:-left-7 sm:mx-0 sm:mt-0 sm:max-w-[245px] sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <FaCode size={21} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-neutral-900">
                        Full-Stack Development
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">
                        Frontend + Backend
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

      {/* Technical Skills */}
      <section
        id="technical-skills"
        className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Technical Toolkit
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Technologies I Work With
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              Explore my frontend, backend, and development tools.
              Each technology includes a description of how it is used.
            </p>
          </div>

          {/* Category Filters */}
          <div
            className="mb-10 flex flex-wrap gap-3"
            role="group"
            aria-label="Filter skills by category"
          >
            {categoryOptions.map(({ label, value }) => (
              <button
                key={value}
                type="button"
                onClick={() => setActiveCategory(value)}
                aria-pressed={activeCategory === value}
                className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${activeCategory === value
                  ? "border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/15"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Selected Skill Category */}
          <div className="space-y-12">
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category.title] || FaCode;

              return (
                <section key={category.title}>
                  {/* Category Information */}
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-600">
                      <Icon size={22} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-orange-600">
                        {category.subtitle}
                      </p>

                      <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Technology Cards */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {category.technologies.map((tech) => (
                      <article
                        key={tech.name}
                        className="group rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 sm:p-6"
                      >
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <h4 className="text-lg font-bold text-neutral-900 transition-colors group-hover:text-orange-600">
                            {tech.name}
                          </h4>

                          <span className="shrink-0 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700">
                            {tech.level}
                          </span>
                        </div>

                        <p className="text-sm leading-6 text-neutral-600">
                          {tech.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="border-y border-neutral-200 bg-neutral-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Continuous Growth
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Always Learning, Always Building.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            Technology keeps evolving, and so do I. I continue to
            strengthen my development fundamentals, explore better
            solutions, and improve through hands-on projects.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative isolate overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-neutral-50 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            {/* Decorative Accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-1 w-28 rounded-bl-full bg-orange-500 sm:w-44"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-1 w-28 rounded-tr-full bg-orange-500 sm:w-44"
            />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Let's Work Together
                </p>

                <h2 className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                  Have a project in mind?
                  <span className="mt-1 block text-orange-500">
                    Let's make it happen.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
                  Have an idea or a challenge to solve? Let's discuss
                  how we can turn it into something meaningful.
                </p>
              </div>

              <div className="shrink-0">
                <NavLink
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                >
                  Get in Touch

                  <FaArrowRight
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
