import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function ContactSection() {
  return (
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
  );
}
