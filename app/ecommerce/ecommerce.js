"use client";
import Link from "next/link";

export default function eCommerce() {
  return (
    <main>
      <div className="hero min-h-screen svg-ecommerce">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase text-zinc-50">
              B2X eCommerce
            </h1>
            <p className="mb-5 text-2xl font-semibold italic">
              "The nextgen eCommerce marketplace for every family in the world"
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/b2xecommerce.jpg" alt="Social Marketplace" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold">Social Marketplace</h2>
              <p>Integrated social + eCommerce platform.</p>
              <p>B2B/B2C/B2X models.</p>
              <p>Online/offline network integration</p>
              <p>AI & VR driven technologies</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/our-technologies.jpg" alt="Marketing Platform" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold">Marketing Platform</h2>
              <p>Syndicated advertising network.</p>
              <p>Social media marketing.</p>
              <p>Cross-selling colaborations.</p>
              <p>Predictive market analytics.</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/our-approach.jpg" alt="Business Hub" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold">Business Hub</h2>
              <p>Multi-channel business support.</p>
              <p>Business starter kits.</p>
              <p>Manufacturing & supplier network access.</p>
              <p>Fulfilment management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <div className="flex flex-wrap items-center bg-base-300">
          <div className="lg:7/12 mt-4 px-8 w-full md:w-6/12">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary uppercase">
              Social <span className="lowercase">e</span>Commerce & Marketing
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              Influential, interactive and inclusive shopping experience.
            </p>
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary uppercase">
              Frictionless Shopping
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Social proof, user-generated content & direct consumer incentives
              accelerate sales and repeat purchases.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Future of eCommerce powered by{" "}
              <Link href="https://www.btabcorp.com" className="font-bold">
                Btab
              </Link>{" "}
              eCommerce.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Learn more about our services.
            </p>
            <button className="glass btn btn-primary hover:text-accent uppercase font-bold">
              <Link href="/services">Services</Link>
            </button>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-base-300">
            <div className="grow card card-compact w-full bg-base-200 text-primary-content break-words shadow-lg">
              <figure>
                <img
                  src="/ecommerce.jpg"
                  alt="B2X Marketplace"
                  className="w-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">B2X Marketplace</h2>
                <p className="italic">
                  "A completely new way of doing business, allowing every family
                  in the world to harness their ideas and turn them into
                  reality"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
