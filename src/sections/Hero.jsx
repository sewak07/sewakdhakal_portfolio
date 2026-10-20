import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const links = [
    { name: "View my work", path: "/projects" },
    { name: "Get in touch", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sewak07",
      Icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sewak-dhakal-7a0b4b1b3/",
      Icon: FaLinkedin,
    },
    {
      name: "X",
      href: "https://twitter.com/aizewak",
      Icon: FaXTwitter,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:gap-16 lg:py-24">
        {/* Left: Introduction */}
        <div className="order-2 md:order-1">
          {/* Availability badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-orange-50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="text-xs font-medium text-orange-700 sm:text-sm">
              Available for Opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-orange-500">Sewak Dhakal.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            A software developer building thoughtful web experiences, practical
            applications, and digital products that solve real problems.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {links.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={
                  index === 0
                    ? "inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    : "inline-flex items-center justify-center rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                }
              >
                {link.name}
                {index === 0 && (
                  <span className="ml-2" aria-hidden="true"></span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Find me online
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${name} profile`}
                  title={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Orange accent */}
            <div className="absolute -right-2 -top-2 h-full w-full rounded-2xl border-2 border-orange-500 sm:-right-3 sm:-top-3" />

            {/* Profile photo */}
            <img
              src="/sewak.jpeg"
              alt="Portrait of Sewak Dhakal"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
