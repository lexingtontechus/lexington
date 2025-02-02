"use client";
import Link from "next/link";

const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};
const Home = () => {
  return (
    <main className="mb-8">
      <div className="hero min-h-screen svg-home">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-primary uppercase">
              Lexington Tech
            </h1>
            <h2 className="text-3xl font-bold uppercase my-8 text-primary opacity-70">
              Business & Technology Management Consulting
            </h2>
          </div>
        </div>
      </div>
      <section className="mx-auto w-full my-8 px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl py-2 italic font-bold">
            WEB3 shopping experience.
          </h2>
          <p className="text-xl py-2">
            Modern <span className="lowercase">e</span>Commerce marketplace
            built with composable components, WEB3 identity management &
            messaging protocols, AI product & search management and optimized
            provisioning.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-4/12 bg-base-300">
            <figure>
              <img
                src="/b2xecommerce.jpg"
                className="w-full"
                alt="B2X Marketplace"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">
                B2X Marketplace
              </h2>
              <ul className="list rounded-box shadow-md">
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>WEB3 Onboarding</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>Wholesale + Retail + Government.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>Multi-vendor + multi-channel distribution.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">04</div>
                  <div>Personalized buying experience.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">05</div>
                  <div>Powered by augmented reality.</div>
                </li>
              </ul>
              <div className="card-actions justify-end">
                <button className="hover:bg-accent btn btn-secondary uppercase font-bold">
                  <Link href="/ecommerce">More</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="grow card card-compact w-full md:w-4/12 bg-base-300">
            <figure>
              <img src="/web3.jpg" className="w-full" alt="WEB3" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">WEB3</h2>
              <ul className="list rounded-box shadow-md">
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>Security & data privacy</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>Encrypted messaging</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>
                    IPFS (Interplantary File System) powering the distributed
                    web.
                  </div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">04</div>
                  <div>Digital ID for privacy & data protection.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">05</div>
                  <div>Defi payments.</div>
                </li>
              </ul>
              <div className="card-actions justify-end">
                <button className="hover:bg-accent btn btn-secondary uppercase font-bold">
                  <Link href="/web3">More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
