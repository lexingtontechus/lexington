import Link from "next/link";

export default function Web3() {
  return (
    <main>
      <div className="hero min-h-screen svg-web3">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-zinc-50 uppercase">
              WEB3
            </h1>
            <p className="my-8 text-2xl font-semibold">
              The Next Generation of Web Technologies.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/our-mission.jpg" alt="Our Mission" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Mission</h2>
              <p>Readiness assessment.</p>
              <p>Web 2.0 {">>"} WEB3</p>
              <p>Launch WEB3 services.</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/our-technologies.jpg" alt="Our Technologies" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Technologies</h2>
              <p>Tech stack + Privacy + Security.</p>
              <p>Workflow & automation integration.</p>
              <p>Payments solutions (on-ramp/off-ramp).</p>
              <p>Business scaling.</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/our-approach.jpg" alt="Our Approach" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Approach</h2>
              <p>Resolve business & technology issues.</p>
              <p>Transition to secure infrastructure & privacy.</p>
              <p>Build adoption of WEB3.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-8 px-8">
        <h1 className="mb-5 text-5xl font-bold text-zinc-50 uppercase text-center text-pretty">
          Explore our WEB3 demo projects & use cases.
        </h1>
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-base-200 text-primary-content px-4">
            <figure>
              <Link href="https://unstoppabledomains.com/" target="_blank">
                <img
                  className="py-2 px-8 h-[100px]"
                  src="/logo_ud.png"
                  alt="Unstoppable Domains"
                />
              </Link>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Unstoppable Domains</h2>
              <ul className="list-disc list-inside">
                <li>Identity & data ownership + privacy.</li>
                <li>Decentralized domain-to-domain E2E encrypted messaging.</li>
                <li>WEB3 community segment.</li>
                <li>Branded digital asset collections.</li>
              </ul>
              <div className="card-actions justify-end">
                <button className="glass btn btn-primary hover:text-accent uppercase">
                  <Link
                    href="https://unstoppable.lexingtontech.us"
                    target="_blank"
                  >
                    View Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-200 text-primary-content px-4">
            <figure>
              <Link href="https://walletconnect.com/" target="_blank">
                <img
                  className="py-2 px-8 h-[100px]"
                  src="/logo_wc.svg"
                  alt="Wallet Connect"
                />
              </Link>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Web3Modal</h2>
              <ul className="list-disc list-inside">
                <li>Secure user onboarding.</li>
                <li>Web3Wallet enables secure web3 exploration.</li>
                <li>Web3Inbox communications with users and community.</li>
                <li>Multiple chains support.</li>
              </ul>
              <div className="card-actions justify-end">
                <button className="glass btn btn-primary hover:text-accent uppercase">
                  <Link
                    href="https://web3modal.lexingtontech.us"
                    target="_blank"
                  >
                    View Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-200 text-primary-content px-4">
            <figure>
              <Link href="https://www.blocknative.com/" target="_blank">
                <img
                  className="py-2 px-8 h-[100px]"
                  src="/logo_blocknative.svg"
                  alt="BlockNative WEB3 Onboard"
                />
              </Link>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">WEB3 Onboard</h2>
              <ul className="list-disc list-inside">
                <li>Multi-wallet and multi-chain support.</li>
                <li>35 unique hardware and software wallets.</li>
                <li>
                  Preview transactions to see net-balance changes and gas spent.
                </li>
                <li>Real-time transaction notifications.</li>
              </ul>
              <div className="card-actions justify-end">
                <button className="glass btn btn-primary hover:text-accent uppercase">
                  <Link
                    href="https://web3onboard.lexingtontech.us"
                    target="_blank"
                  >
                    View Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
