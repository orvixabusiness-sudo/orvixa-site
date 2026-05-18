export default function OrvixaLandingPage() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#151515] antialiased">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fbfaf7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center" aria-label="Orvixa home">
            <img src="/Logo-A13.png" alt="Orvixa" className="h-7 w-auto object-contain md:h-8" />
          </a>
          <nav className="hidden items-center gap-8 text-sm tracking-wide text-black/70 md:flex">
            <a href="#about" className="transition hover:text-black">About</a>
            <a href="#business" className="transition hover:text-black">Business</a>
            <a href="#values" className="transition hover:text-black">Focus</a>
            <a href="#contact" className="transition hover:text-black">Contact</a>
          </nav>
        </div>
      </header>
      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-black/50">Orvixa LLC · United States</p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[#111] md:text-7xl">Modern commerce for thoughtful consumer products.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">Orvixa is a U.S.-based e-commerce company focused on product sourcing, brand development, and online distribution through global digital marketplaces.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#business" className="rounded-full bg-[#111] px-7 py-3 text-center text-sm font-medium text-white transition hover:bg-black">Learn About Orvixa</a>
              <a href="#contact" className="rounded-full border border-black/20 px-7 py-3 text-center text-sm font-medium text-black transition hover:border-black">Contact Us</a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85" alt="Premium modern home interior" className="h-[560px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/85 p-5 shadow-sm backdrop-blur">
              <p className="text-sm font-medium text-black">Product sourcing · Branding · Online distribution</p>
              <p className="mt-1 text-sm text-black/55">Building a flexible consumer brand for modern living.</p>
            </div>
          </div>
        </section>
        <section id="about" className="border-y border-black/10 bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.75fr_1.25fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">Company Overview</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">A brand platform built for long-term e-commerce growth.</h2></div>
            <div className="space-y-6 text-lg leading-8 text-black/60"><p>Orvixa LLC is a privately owned U.S. e-commerce company focused on identifying consumer product opportunities, sourcing from qualified suppliers, and developing branded product offerings for online retail channels.</p><p>The company is currently in the infrastructure and product launch phase, with operations centered around private label development, marketplace distribution, supplier coordination, and scalable brand execution.</p></div>
          </div>
        </section>
        <section id="business" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">Business Activity</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Focused, flexible, and marketplace-ready.</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Product Sourcing", "Researching market opportunities and coordinating with suppliers to develop consumer products suited for online retail."],
              ["Brand Development", "Building product presentation, packaging direction, and brand assets that support a professional marketplace presence."],
              ["Online Distribution", "Preparing to distribute branded products through digital sales channels and marketplaces such as Amazon."]
            ].map(([title, body]) => <div key={title} className="rounded-[1.5rem] border border-black/10 bg-white p-7 shadow-sm"><div className="mb-8 h-px w-16 bg-black" /><h3 className="text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-black/60">{body}</p></div>)}
          </div>
        </section>
        <section id="values" className="bg-[#111] py-20 text-white"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">Our Focus</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Thoughtful products for practical modern living.</h2></div><div className="grid gap-4 sm:grid-cols-2">{['Reliable product selection','Clean brand presentation','Supplier coordination','Marketplace-ready execution'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/75">{item}</div>)}</div></div></div></section>
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20"><div className="grid gap-10 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-12"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">Contact</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Company Information</h2></div><div className="grid gap-6 text-sm text-black/65 sm:grid-cols-2"><div><p className="font-semibold text-black">Company</p><p className="mt-2">Orvixa LLC</p></div><div><p className="font-semibold text-black">Email</p><p className="mt-2">info@orvixa.co</p></div><div><p className="font-semibold text-black">Country of Operation</p><p className="mt-2">United States</p></div><div><p className="font-semibold text-black">Registered Address</p><p className="mt-2 leading-6">30 N Gould St, Ste R, Sheridan, WY 82801, United States</p></div></div></div></section>
        <section className="border-t border-black/10 bg-white py-16"><div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2"><div><h3 className="text-lg font-semibold">Privacy Policy</h3><p className="mt-4 text-sm leading-7 text-black/60">Orvixa respects user privacy and is committed to protecting information shared with the company. We do not collect personal data without consent. Any communication with Orvixa is handled with care and used only for relevant business purposes.</p></div><div><h3 className="text-lg font-semibold">Terms & Conditions</h3><p className="mt-4 text-sm leading-7 text-black/60">This website is provided for informational purposes. Orvixa LLC operates as an e-commerce company and may update its business information, services, website content, and policies at any time.</p></div></div></section>
      </main>
      <footer className="border-t border-black/10 bg-[#fbfaf7] py-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-4"><img src="/Logo-A13.png" alt="Orvixa" className="h-6 w-auto" /><span className="text-sm text-black/45">© {currentYear} Orvixa LLC</span></div><div className="flex gap-6 text-sm text-black/50"><a href="#contact" className="hover:text-black">Contact</a><span>Privacy Policy</span><span>Terms</span></div></div></footer>
    </div>
  );
}
