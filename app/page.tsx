export default function OrvixaLandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center">
            <img
              src="/Logo-A13.png"
              alt="Orvixa"
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="text-sm font-medium text-slate-500">
            ORVIXA LLC · UNITED STATES
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Product Sourcing,
            <br />
            Brand Development,
            <br />
            and Online Distribution.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Orvixa is a U.S.-based e-commerce company focused on identifying
            product opportunities, developing consumer brands, and distributing
            products through global online marketplaces.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white"
            >
              About Orvixa
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-b border-slate-200 bg-slate-50 py-20"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Company Overview
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Building scalable consumer brands.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Orvixa LLC is a privately owned U.S. e-commerce company focused
                on product sourcing, supplier coordination, brand development,
                and online distribution.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The company is currently building infrastructure and preparing
                product launches designed for long-term growth across digital
                marketplaces and retail channels.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Focused, flexible, and marketplace-ready.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 p-8">
                <h3 className="text-xl font-semibold">
                  Product Sourcing
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  Researching consumer opportunities and coordinating with
                  suppliers to develop products suitable for online retail.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-8">
                <h3 className="text-xl font-semibold">
                  Brand Development
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  Creating brand assets, positioning, packaging direction,
                  and marketplace presentation standards.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-8">
                <h3 className="text-xl font-semibold">
                  Online Distribution
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  Preparing products for distribution through established
                  e-commerce marketplaces and digital sales channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-slate-200 py-20"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Company Information
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-semibold">Company</p>
                <p className="mt-2 text-slate-600">Orvixa LLC</p>
              </div>

              <div>
                <p className="font-semibold">Email</p>
                <p className="mt-2 text-slate-600">
                  info@orvixa.co
                </p>
              </div>

              <div>
                <p className="font-semibold">Country</p>
                <p className="mt-2 text-slate-600">
                  United States
                </p>
              </div>

              <div>
                <p className="font-semibold">Registered Address</p>
                <p className="mt-2 text-slate-600 leading-7">
                  30 N Gould St, Ste R,
                  <br />
                  Sheridan, WY 82801,
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/Logo-A13.png"
              alt="Orvixa"
              className="h-6 w-auto"
            />
            <span className="text-sm text-slate-500">
              © {currentYear} Orvixa LLC
            </span>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
