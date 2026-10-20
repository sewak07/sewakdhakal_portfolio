import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "skills", path: "/skills" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-neutral-900"
        >
          Sewak <span className="text-orange-500">.</span>
        </NavLink>

        <div className="flex items-center gap-5 sm:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium capitalize tranition-colors duration-200 sm:text-base ${
                  isActive
                    ? "text -orange-500"
                    : "text-neutral-600 hover:text-orange-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
