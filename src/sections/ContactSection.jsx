import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          {/* Subtle decorative accent */}
          {/* Top-right accent */}
          <div className="absolute top-0 right-0 h-1 w-32 bg-orange-500 sm:w-48" />

          {/* Bottom-left accent */}
          <div className="absolute bottom-0 left-0 h-1 w-32 bg-orange-500 sm:w-48" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            {/* Banner Content */}
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
                Have an idea or a challenge to solve? Let's discuss how we can
                turn it into something meaningful.
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <NavLink
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
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
  );
}
