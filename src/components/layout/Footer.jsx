import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import links from "../../utils/Links.js";

export default function Footer() {
  const socialLinks = [
    {
      name: "Github",
      href: "https://github.com/sewak07",
      Icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sewak07/",
      Icon: FaLinkedin,
    },
    {
      name: "X",
      href: "https://x.com/sewak07",
      Icon: FaXTwitter,
    },
    {
      name: "Email",
      href: "mailto:sew007al@gmail.com",
      Icon: FaEnvelope,
    },
  ];
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:gap-16">
        <div className="space-y-3">
          <a
            href="/"
            className="inline-block text-2xl font-bold tracking-tight text-neutral-900 transition-colors hover:text-orange-500"
          >
            Sewak<span className="text-orange-500">.</span>
          </a>

          <p className="max-w-sm text-sm leading-6 text-neutral-600">
            Web Developer & Content Creator
          </p>
          <p className="max-w-sm text-sm leading-6 text-neutral-500">
            Building useful digital experiences, one project at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-900">
            Quick Links
          </h3>

          <div className="flex flex-col items-start gap-3">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium capitalize transition-colors duration-200 ${
                    isActive
                      ? "text-orange-500"
                      : "text-neutral-600 hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="md:justify-self-end">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-900">
            Get in touch
          </h3>

          <div>
            <a
              href="tel:9807902217"
              className="flex items-center gap-3 text-sm text-neutral-600 transition-colors hover:text-orange-500"
            >
              <FaPhone className="shrink-0 text-orange-500" />
              <span>9807902217</span>
            </a>

            <p className="flex items-center gap-3 text-sm text-neutral-600">
              <FaLocationArrow className="shrink-0 text-orange-500" />
              <span>Arjundhara, Jhapa, Nepal</span>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target={name === "Email" ? undefined : "_blank"}
                rel={name === "Email" ? undefined : "noopener noreferrer"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/*Copyright*/}
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:px-8 md:flex-row md:text-left">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Sewak. All rights reserved.
          </p>

          <p className="text-xs text-neutral-500">
            Designed & built with{" "}
            <span className="font-medium text-orange-500">care</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
