export default function OrvixaLandingPage() {
const currentYear = new Date().getFullYear();

return ( <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900"> <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur"> <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"> <a href="#" className="flex items-center"> <img
           src="/Logo-A13.png"
           alt="Orvixa"
           className="h-5 w-auto"
         /> </a>

```
      <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
        <a href="#about" className="hover:text-slate-900">About</a>
        <a href="#services" className="hover:text-slate-900">Services</a>
        <a href="#contact" className="hover:text-slate-900">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-36">
      <p className="text-sm font-semibold tracking-[0.25em] text-slate-500 uppercase">
        Orvixa LLC · United States
      </p>

      <h1 className="mt-8 max-w-5xl text-6xl font-bold tracking-[-0.05em] text-slate-950 md:text-8xl">
        Product Sourcing.
        <br />
        Brand Development.
        <br />
        Online Distribution.
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
        Orvixa develops consumer brands through strategic sourcing,
        supplier coordination, and marketplace-focused distribution.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#about"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
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

    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold text-slate-900">
            Product Sourcing
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">
            Brand Development
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">
            Online Distribution
          </div>
        </div>
      </div>
    </section>

    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Company Overview
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          Building scalable consumer brands.
        </h2>

        <p className="mt-8 text-xl leading-9 text-slate-600">
          Orvixa LLC is a privately owned U.S.-based e-commerce company
          focused on product sourcing, supplier coordination, brand
          development, and online distribution.
        </p>

        <p className="mt-6 text-xl leading-9 text-slate-600">
          The company operates with a long-term focus on building
          scalable consumer brands designed for digital marketplaces
          and modern retail channels.
        </p>
      </div>
    </section>

    <section
      id="services"
      className="mx-auto max-w-6xl px-6 py-12"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          What We Do
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Focused, flexible, and marketplace-ready.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold">
            Product Sourcing
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Identifying consumer opportunities and coordinating with
            qualified suppliers for marketplace-ready products.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold">
            Brand Development
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Creating positioning, presentation, and branding systems
            designed for long-term growth.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold">
            Online Distribution
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Preparing products for distribution through established
            e-commerce channels and digital marketplaces.
          </p>
        </div>
      </div>
    </section>

    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="rounded-[2rem] bg-slate-950 p-10 text-white md:p-14">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Company Information
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-semibold">Company</p>
            <p className="mt-2 text-white/70">Orvixa LLC</p>
          </div>

          <div>
            <p className="font-semibold">Email</p>
            <p className="mt-2 text-white/70">
              info@orvixa.co
            </p>
          </div>

          <div>
            <p className="font-semibold">Country</p>
            <p className="mt-2 text-white/70">
              United States
            </p>
          </div>

          <div>
            <p className="font-semibold">Registered Address</p>
            <p className="mt-2 text-white/70 leading-7">
              30 N Gould St, Ste R
              <br />
              Sheridan, WY 82801
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
          className="h-5 w-auto"
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
