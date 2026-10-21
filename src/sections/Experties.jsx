import { NavLink } from "react-router-dom";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

export default function Experties() {
  const experties = [
    {
      name: "Frontend Development",
      icon: FaCode,
      tech: [
        "React",
        "Tailwind CSS",
        "Material UI",
        "React Router",
        "React Hook Form",
        "HTML",
        "CSS",
        "JavaScript",
        "Vite",
      ],
    },
    {
      name: "Backend Development",
      icon: FaServer,
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST APIs",
        "JWT",
        "Bcrypt",
        "Postman",
        "MySQL",
      ],
    },
    {
      name: "Tools & Platforms",
      icon: FaTools,
      tech: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Canva",
        "Antigravity",
      ],
    },
  ];

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
            Skills & <span className="text-orange-500">Technologies.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
            My development toolkit, built through hands-on projects and
            continuous learning.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experties.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 sm:p-7"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900">
                    {item.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-600 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700"
                    >
                      {techItem}
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

        <div className="mt-8">
          <NavLink
            to="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition-colors duration-300 hover:text-orange-700"
          >
            View in details
            <span className="transition-transform duration-300 hover:translate-x-1">
              →
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
