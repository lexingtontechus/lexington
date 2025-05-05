"use client";
import Link from "next/link";

export default function eCommerce() {
  return (
    <main>
      <div className="hero min-h-screen svg-ecommerce">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase text-accent">
              B2X eCommerce
            </h1>
            <p className="mb-5 text-2xl font-semibold italic text-accent-content opacity-70">
              "The nextgen <span className="lowercase">e</span>Commerce
              marketplace for every family in the world"
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-4">
        <div className="flex flex-wrap gap-4 content-center justify-center px-4">
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/b2xecommerce.jpg" alt="Social Marketplace" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">
                Social Marketplace
              </h2>
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Shoppertainment Connecting Every Family.
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>Integrated social + eCommerce platform.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>B2B/B2C/B2X models.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>Online/offline network integration</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">04</div>
                  <div>AI & VR driven technologies</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/our-technologies.jpg" alt="Marketing Platform" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">
                Marketing Platform
              </h2>
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Generative AI Marketing Platforms.
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>Syndicated advertising network.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>Social media marketing.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>Cross-selling colaborations.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">04</div>
                  <div>Predictive market analytics.</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/our-approach.jpg" alt="Business Hub" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">
                Business Hub
              </h2>
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Global Distribution Networks.
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>Multi-channel business support.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>Business starter kits.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>Manufacturing & supplier network access.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">04</div>
                  <div>Fulfilment management.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full my-2">
        <div className="flex flex-wrap items-center bg-base-300 px-8">
          <div className="lg:7/12 mt-4 p-8 w-full md:w-6/12">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary uppercase">
              Social <span className="lowercase">e</span>Commerce
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed">
              Influential, interactive and inclusive shopping experiences.
            </p>
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary uppercase">
              Frictionless Shopping
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Social proof, user-generated content & direct consumer incentives
              accelerate sales and repeat purchases.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Future of eCommerce powered by{" "}
              <Link href="https://www.btabcorp.com" className="font-bold">
                BTAB
              </Link>{" "}
              eCommerce.
            </p>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-base-300">
            <div className="grow card card-compact w-full bg-base-200 break-words shadow-lg">
              <figure>
                <img
                  src="/ecommerce.jpg"
                  alt="B2X Marketplace"
                  className="w-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title fontbold text-primary uppercase">
                  B2X Marketplace
                </h2>
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
