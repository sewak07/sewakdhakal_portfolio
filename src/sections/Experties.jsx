import { NavLink } from "react-router-dom";
import categories from "../utils/SkillsInfo";

export default function Experties() {
  const dailyTech = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GitHub",
    "VS Code",
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Skills & Technologies.
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
            My development toolkit, built through hands-on projects and
            continuous learning.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 sm:p-7"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((techItem) => (
                    <span
                      key={techItem.name}
                      className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-600 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700"
                    >
                      {techItem.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Daily Technologies */}
        <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">
              Technologies I Work With Daily
            </h3>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              The tools and technologies I regularly use to build and improve
              web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {dailyTech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-all duration-200 hover:border-orange-300 hover:text-orange-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* View All Skills */}
        <div className="mt-8">
          <NavLink
            to="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition-colors duration-300 hover:text-orange-700"
          >
            View All Skills
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
