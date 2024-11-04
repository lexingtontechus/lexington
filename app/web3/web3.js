import Link from "next/link";

export default function Web3() {
  return (
    <main>
      <div className="hero min-h-screen svg-web3">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-zinc-50 uppercase">
              WEB3
            </h1>
            <p className="my-8 text-2xl font-semibold">
              Digital Identity & Privacy
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/our-mission.jpg" alt="Our Mission" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">Our Mission</h2>
              <p>Web 2.0 {">>"} WEB3 transition.</p>
              <p>WEB3 domain names integration.</p>
              <p>TLD ownership.</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/our-technologies.jpg" alt="Our Technologies" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">
                Our Technologies
              </h2>
              <p>Digital wallets {">>"} privacy + security.</p>
              <p>DeFi payments solutions (on-ramp/off-ramp).</p>
              <p>DAO community & governance.</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/our-approach.jpg" alt="Our Approach" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title ont-bold text-primary">Our Approach</h2>
              <p>Business readiness & technology assessment.</p>
              <p>Transition to secure infrastructure & privacy.</p>
              <p>Build adoption of WEB3.</p>
              <p>Community building.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-8 px-8">
        <h1 className="py-4 text-5xl font-bold text-zinc-50 uppercase text-center text-pretty">
          Explore our WEB3 demo projects & use cases
        </h1>
        <p className="text-2xl font-semibold text-center py-4">
          Accelerating WEB3 onboarding solutions.
        </p>
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-base-200 px-4">
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
              <h2 className="card-title font-bold text-primary uppercase">
                Unstoppable Domains
              </h2>
              <p>Identity & data ownership + privacy.</p>
              <p>Decentralized domain-to-domain E2E encrypted messaging.</p>
              <p>WEB3 community segment.</p>
              <p>Branded digital asset collections.</p>
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase font-bold">
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
          <div className="grow card card-compact w-full md:w-3/12 bg-base-200 px-4">
            <Link href="https://reown.com/" target="_blank" className="py-4">
              <figure>
                <Reown />
              </figure>
            </Link>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary uppercase">
                Formerly WalletConnect
              </h2>
              <p>Secure user onboarding.</p>
              <p>Web3Wallet enables secure web3 exploration.</p>
              <p>Web3Inbox communications with users and community.</p>
              <p>Multiple chains support.</p>
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase font-bold">
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
          <div className="grow card card-compact w-full md:w-3/12 bg-base-200 px-4">
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
              <h2 className="card-title font-bold text-primary uppercase">
                WEB3 Onboard
              </h2>
              <p>Multi-wallet and multi-chain support.</p>
              <p>35 unique hardware and software wallets.</p>
              <p>
                Preview transactions to see net-balance changes and gas spent.
              </p>
              <p>Real-time transaction notifications.</p>
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase font-bold">
                  <Link
                    href="https://blocknative.lexingtontech.us"
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

function Reown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="40 0 180 48" fill="none">
      <path
        fill="#202020"
        d="M78 24c0-13.255 10.055-24 22.459-24h57.082C169.945 0 180 10.745 180 24s-10.055 24-22.459 24h-57.082C88.055 48 78 37.255 78 24Z"
      ></path>
      <path
        fill="#fff"
        d="M148.106 29.874V18.786h1.958v1.672c.704-1.232 2.134-1.958 3.718-1.958 2.398 0 4.07 1.518 4.07 4.466v6.908h-1.936v-6.798c0-1.936-1.1-2.948-2.706-2.948-1.738 0-3.146 1.386-3.146 3.344v6.402h-1.958ZM135.761 29.874l-2.046-11.088h1.848l1.452 9.152 1.914-6.028h1.826l1.892 5.962 1.474-9.086h1.848l-2.046 11.088h-2.2l-1.87-5.764-1.892 5.764h-2.2ZM127.113 30.16c-3.366 0-5.346-2.508-5.346-5.83 0-3.3 1.98-5.83 5.346-5.83s5.346 2.53 5.346 5.83c0 3.322-1.98 5.83-5.346 5.83Zm0-1.628c2.42 0 3.344-2.068 3.344-4.224 0-2.134-.924-4.18-3.344-4.18s-3.344 2.046-3.344 4.18c0 2.156.924 4.224 3.344 4.224ZM114.842 30.16c-3.256 0-5.302-2.486-5.302-5.83 0-3.322 2.046-5.83 5.302-5.83 2.75 0 5.17 1.562 4.906 6.336h-8.206c.154 2.046 1.1 3.718 3.3 3.718 1.474 0 2.442-.902 2.772-1.936h1.936c-.308 1.848-2.046 3.542-4.708 3.542Zm-3.256-6.798h6.27c-.154-2.222-1.188-3.256-3.014-3.256-2.002 0-2.992 1.452-3.256 3.256ZM100.148 29.874V18.786h2.002v1.87c.704-1.232 1.914-1.87 3.168-1.87h2.662v1.87h-2.816c-1.76 0-3.014 1.144-3.014 3.366v5.852h-2.002Z"
      ></path>
    </svg>
  );
}
