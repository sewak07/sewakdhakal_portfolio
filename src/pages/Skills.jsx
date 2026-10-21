import {
  FaCode,
  FaServer,
  FaTools,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    number: "01",
    title: "Frontend Development",
    subtitle: "Building intuitive user interfaces",
    description:
      "I build responsive, accessible, and user-friendly web interfaces with a focus on clean layouts, reusable components, and consistent user experiences across devices.",
    icon: FaCode,
    technologies: [
      {
        name: "HTML5",
        level: "Core",
        description:
          "Structure web pages with semantic HTML, accessible elements, forms, and meaningful document layouts.",
      },
      {
        name: "CSS3",
        level: "Core",
        description:
          "Style interfaces with responsive layouts, Flexbox, Grid, transitions, animations, and maintainable CSS.",
      },
      {
        name: "JavaScript",
        level: "Core",
        description:
          "Build interactive features using modern JavaScript, ES modules, array methods, asynchronous operations, and DOM fundamentals.",
      },
      {
        name: "React",
        level: "Core",
        description:
          "Create component-based interfaces using props, state, hooks, reusable components, and conditional rendering.",
      },
      {
        name: "Tailwind CSS",
        level: "UI Styling",
        description:
          "Develop responsive designs efficiently using utility classes, consistent spacing, design tokens, and reusable styling patterns.",
      },
      {
        name: "Material UI",
        level: "UI Library",
        description:
          "Build polished interfaces with ready-made React components, theming, layouts, and accessible UI patterns.",
      },
      {
        name: "React Router",
        level: "Routing",
        description:
          "Create multi-page React experiences with route configuration, navigation, dynamic routes, and nested layouts.",
      },
      {
        name: "React Hook Form",
        level: "Forms",
        description:
          "Manage form state and validation efficiently while keeping form components maintainable and performant.",
      },
      {
        name: "Vite",
        level: "Build Tool",
        description:
          "Set up and run modern frontend projects with a fast development server, efficient builds, and environment configuration.",
      },
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    subtitle: "Building application logic and APIs",
    description:
      "I develop server-side functionality, REST APIs, database integrations, and authentication flows to connect frontend applications with reliable backend services.",
    icon: FaServer,
    technologies: [
      {
        name: "Node.js",
        level: "Runtime",
        description:
          "Run JavaScript on the server and implement asynchronous application logic, API services, and backend integrations.",
      },
      {
        name: "Express.js",
        level: "Framework",
        description:
          "Build REST APIs with routes, middleware, controllers, error handling, and organized server-side architecture.",
      },
      {
        name: "MongoDB",
        level: "Database",
        description:
          "Store and retrieve application data using document-based collections, queries, filters, and appropriate data structures.",
      },
      {
        name: "Mongoose",
        level: "ODM",
        description:
          "Define schemas and models, validate data, manage relationships, and interact with MongoDB through a structured application layer.",
      },
      {
        name: "REST APIs",
        level: "API Design",
        description:
          "Design HTTP endpoints with appropriate methods, status codes, request validation, and consistent response structures.",
      },
      {
        name: "JWT",
        level: "Authentication",
        description:
          "Implement token-based authentication flows and understand token verification, expiry, and protected routes.",
      },
      {
        name: "Bcrypt",
        level: "Security",
        description:
          "Hash passwords securely and verify submitted credentials without storing passwords in plain text.",
      },
      {
        name: "MySQL",
        level: "SQL Database",
        description:
          "Work with relational data, tables, SQL queries, filtering, joins, and structured database relationships.",
      },
    ],
  },
  {
    number: "03",
    title: "Tools & Platforms",
    subtitle: "Developing, testing, and shipping projects",
    description:
      "I use development tools and platforms to write code, manage source control, test APIs, prepare visual assets, and deploy projects for real-world use.",
    icon: FaTools,
    technologies: [
      {
        name: "Git",
        level: "Version Control",
        description:
          "Track code changes, create branches, manage commits, and maintain a clear development history.",
      },
      {
        name: "GitHub",
        level: "Collaboration",
        description:
          "Host repositories, manage project versions, collaborate through pull requests, and maintain project documentation.",
      },
      {
        name: "VS Code",
        level: "Editor",
        description:
          "Write and debug code using extensions, integrated terminals, source control tools, and a customized development environment.",
      },
      {
        name: "Postman",
        level: "API Testing",
        description:
          "Send HTTP requests, inspect API responses, test endpoints, and troubleshoot backend integrations.",
      },
      {
        name: "Vercel",
        level: "Deployment",
        description:
          "Deploy frontend projects, configure environment variables, and manage production builds and deployment previews.",
      },
      {
        name: "Canva",
        level: "Design",
        description:
          "Prepare visual assets, presentation materials, and simple graphics for projects and digital content.",
      },
      {
        name: "Antigravity",
        level: "AI Development",
        description:
          "Use AI-assisted development workflows to explore solutions, implement features, and support debugging and code review.",
      },
    ],
  },
];

const dailyTechnologies = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];

export default function Skills() {
  const totalTechnologies = categories.reduce(
    (total, category) => total + category.technologies.length,
    0
  );

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              <span className="h-px w-8 bg-orange-500" />
              Skills & Technologies
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              The tools behind
              <span className="block text-neutral-400">
                the things I build.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              My technical toolkit covers frontend interfaces, backend
              development, databases, and deployment tools. I focus on using
              the right technologies to build practical, responsive, and
              maintainable web applications.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#technical-skills"
                className="inline-flex items-center gap-3 rounded-xl bg-neutral-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Explore my skills
                <FaArrowRight aria-hidden="true" />
              </a>

              <a
                href="#daily-toolkit"
                className="inline-flex items-center rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-sm font-semibold text-neutral-700 transition hover:border-orange-300 hover:text-orange-700"
              >
                My daily toolkit
              </a>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-5">
            {[
              {
                value: String(categories.length).padStart(2, "0"),
                label: "Skill categories",
              },
              {
                value: String(totalTechnologies).padStart(2, "0"),
                label: "Technologies & tools",
              },
              {
                value: "MERN",
                label: "Full-stack ecosystem",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-200 bg-white/80 p-5 sm:p-6"
              >
                <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Skill Categories */}
      <section
        id="technical-skills"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
            Technical expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What I work with
          </h2>

          <p className="mt-4 leading-7 text-neutral-500">
            Explore the technologies I use, what each one helps me accomplish,
            and how they fit into my development workflow.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.number}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-neutral-900/[0.04]"
              >
                {/* Category Header */}
                <div className="grid gap-6 border-b border-neutral-200 bg-neutral-50/70 p-6 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm shadow-orange-500/20">
                        <Icon size={21} aria-hidden="true" />
                      </div>

                      <span className="font-mono text-sm text-neutral-400">
                        / {category.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {category.title}
                    </h3>

                    <p className="mt-2 font-medium text-orange-600">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="self-center">
                    <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                      {category.description}
                    </p>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                      {category.technologies.length} technologies and tools
                    </p>
                  </div>
                </div>

                {/* Technology Details */}
                <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
                  {category.technologies.map((technology, index) => (
                    <div
                      key={technology.name}
                      className={`group p-5 transition-colors duration-200 hover:bg-orange-50/60 sm:p-6 ${
                        index % 2 === 0
                          ? "border-neutral-100 sm:border-r lg:border-r-0"
                          : ""
                      } border-b border-neutral-100 last:border-b-0`}
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <h4 className="font-semibold text-neutral-900 transition-colors group-hover:text-orange-700">
                          {technology.name}
                        </h4>

                        <span className="shrink-0 rounded-md bg-neutral-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-500 transition-colors group-hover:bg-orange-100 group-hover:text-orange-700">
                          {technology.level}
                        </span>
                      </div>

                      <p className="text-sm leading-6 text-neutral-500">
                        {technology.description}
                      </p>

                      <div className="mt-5 h-px w-8 bg-orange-400 transition-all duration-300 group-hover:w-14" />
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Daily Toolkit */}
      <section
        id="daily-toolkit"
        className="border-y border-neutral-200 bg-neutral-50"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
              My workflow
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tools I reach for regularly.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-500 sm:text-base">
              These are the technologies that form the core of my everyday
              development workflow, from building interfaces to managing
              application data and source code.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {dailyTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-6 rounded-2xl bg-neutral-950 p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-400">
              Always improving
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Good development starts with continuous learning.
            </h2>

            <p className="mt-3 text-sm leading-7 text-neutral-400 sm:text-base">
              I keep strengthening my fundamentals, exploring better
              development practices, and applying what I learn through
              practical projects.
            </p>
          </div>

          <a
            href="/#projects"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            View my projects
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}