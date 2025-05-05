import Link from "next/link";

export default function Web3() {
  return (
    <main>
      <div className="hero min-h-screen svg-web3">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
              WEB3
            </h1>
            <p className="my-8 text-2xl font-semibold text-accent-content opacity-70">
              Digital Ownership, Identity Management, Privacy & Data Protection.
            </p>
          </div>
        </div>
      </div>

      <section className="mx-auto w-full my-4">
        <div className="flex flex-wrap gap-4 content-center justify-center px-4">
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/our-mission.jpg" alt="Our Mission" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">Our Mission</h2>
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Shoppertainment Connecting Every Family.
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>Web 2.0 {">>"} WEB3 transition.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>WEB3 domain names integration.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>TLD ownership.</div>
                </li>
              </ul>
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
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Shoppertainment Connecting Every Family.
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>Digital wallets {">>"} privacy + security.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>DeFi payments solutions (on-ramp/off-ramp).</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>DAO community & governance.</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/our-approach.jpg" alt="Our Approach" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title ont-bold text-primary">Our Approach</h2>
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Business readiness & technology assessment.
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>Transition to secure infrastructure & privacy.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>Build adoption of WEB3.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>Community building.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full my-4 bg-base-300 my-2">
        <h1 className="py-4 text-5xl font-bold uppercase text-center text-pretty">
          Explore our WEB3 demo projects & use cases
        </h1>
        <p className="text-2xl font-semibold text-center py-4">
          Accelerating WEB3 onboarding solutions.
        </p>
        <div className="flex flex-wrap gap-4 content-center justify-center p-8">
          <div className="grow card card-compact w-full md:w-3/12 bg-base-200">
            <figure className="image-full min-h-48">
              <Link href="https://unstoppabledomains.com/" target="_blank">
                <img
                  className="p-8"
                  src="/logo_ud.png"
                  alt="Unstoppable Domains"
                />
              </Link>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary uppercase">
                Unstoppable Domains
              </h2>
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  ICANN-Accredited Registrar for onchain domains.
                </li>
                <li className="list-row">
                  <div>Identity & data ownership + privacy.</div>
                </li>
                <li className="list-row">
                  <div>Domain-to-domain E2E encrypted messaging.</div>
                </li>
                <li className="list-row">
                  <div>WEB3 community segmentation.</div>
                </li>
                <li className="list-row">
                  <div>Branded digital assets.</div>
                </li>
              </ul>
              <div className="card-actions justify-end">
                <button className="hover:bg-accent btn btn-secondary uppercase font-bold">
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
          <div className="grow card card-compact w-full md:w-3/12 bg-base-200">
            <Link href="https://reown.com/" target="_blank">
              <figure className="image-full min-h-48">
                <Reown />
              </figure>
            </Link>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary uppercase">
                Formerly WalletConnect
              </h2>
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Appkit for onchain onboarding.
                </li>
                <li className="list-row">
                  <div>Secure user onboarding.</div>
                </li>
                <li className="list-row">
                  <div>Web3Wallet enables secure web3 exploration.</div>
                </li>
                <li className="list-row">
                  <div>Web3Inbox for users and community.</div>
                </li>
                <li className="list-row">
                  <div>Multiple chains support.</div>
                </li>
              </ul>
              <div className="card-actions justify-end">
                <button className="hover:bg-accent btn btn-secondary uppercase font-bold">
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
          <div className="grow card card-compact w-full md:w-3/12 bg-base-200">
            <Link
              href="https://app.push.org/chat/lexingtontechus.nft"
              target="_blank"
              alt="Push Chat lexingtontech.nft"
            >
              <figure className="image-full min-h-48 bg-base-600 inline-block px-4">
                <PushBell />
                <PushChain />
              </figure>
            </Link>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary uppercase py-2">
                Push Chain
              </h2>
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Layer 1 web3 communications.
                </li>
                <li className="list-row">
                  <div>Onchain notifications and chats.</div>
                </li>
                <li className="list-row">
                  <div>
                    Create shared app experiences without chain boundaries.
                  </div>
                </li>
                <li className="list-row">
                  <div>
                    Shared-state blockchain allows all chains to unify messaging
                    across apps.
                  </div>
                </li>
              </ul>
              <div className="card-actions justify-end">
                <button className="hover:bg-accent btn btn-secondary uppercase font-bold">
                  <Link
                    href="https://app.push.org/chat/lexingtontechus.nft"
                    target="_blank"
                  >
                    CHAT
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

function PushBell() {
  return (
    <svg
      width="45"
      height="46"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2634 2.83632C25.7729 2.98433 26.8975 4.03422 26.7572 5.4654C26.6688 6.36622 26.6344 7.04146 27.1836 7.26913C31.8548 9.1947 34.6075 12.9045 34.1737 17.3292L33.4445 24.766C33.1104 28.1731 34.4367 28.9995 36.0631 30.4748C38.4187 32.6081 37.4541 36.4749 34.5392 36.1864L7.70649 33.5554C4.79109 33.2722 4.59588 29.2918 7.32105 27.6566C9.20091 26.5251 10.6645 25.9723 10.9986 22.5651L11.7278 15.1283C12.1617 10.7036 15.5825 7.59917 20.5388 6.6176C21.1202 6.50078 21.2191 5.83187 21.3075 4.93105C21.4483 3.49992 22.756 2.68852 24.2634 2.83632Z"
        className="fill-[#dd44b9]"
      />
      <path
        d="M26.3799 38.2337C26.1859 40.2123 24.9825 41.6232 23.1723 42.4451C21.3627 43.2665 19.2524 43.0595 17.64 41.9026C16.0234 40.7448 15.1175 39.127 15.3115 37.1484"
        className="fill-[#dd44b9]"
      />
    </svg>
  );
}

function PushChain() {
  return (
    <svg
      width="80"
      height="31"
      viewBox="0 0 80 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.344849 8.5456C0.344849 4.12732 3.92657 0.545593 8.34485 0.545593H71.2028C75.6211 0.545593 79.2028 4.12732 79.2028 8.54559V22.4544C79.2028 26.8726 75.6211 30.4544 71.2028 30.4544H8.34485C3.92658 30.4544 0.344849 26.8726 0.344849 22.4544V8.5456Z"
        fill="white"
      />
      <path
        d="M59.4006 23.6184V7.38162H65.385L69.5601 23.1545V7.38162H72.5755V23.6184H66.452L62.416 7.96151V23.6184H59.4006Z"
        fill="black"
      />
      <path
        d="M53.5977 23.6184V20.719L53.5977 10.281V7.38162H56.7291V10.281L56.7291 20.719V23.6184H53.5977Z"
        fill="black"
      />
      <path
        d="M48.3934 23.6183L47.396 19.8839H40.9941L39.9967 23.6183H36.8189L41.1796 7.38159H47.2568L51.5712 23.6183H48.3934ZM41.8059 16.8685H46.5842L44.195 7.96148L41.8059 16.8685Z"
        fill="black"
      />
      <path
        d="M32.0666 23.6184V16.7989H25.4559V23.6184H22.3245V7.38162H25.4559V13.7835H32.0666V7.38162H35.198V23.6184H32.0666Z"
        fill="black"
      />
      <path
        d="M13.8379 23.8271C9.75555 23.8271 6.97211 21.322 6.97211 16.8917V14.1083C6.97211 9.67795 9.75555 7.17285 13.8379 7.17285C17.8507 7.17285 20.5878 9.446 20.7038 13.3892H17.5724C17.4796 11.3248 16.2039 10.1882 13.8379 10.1882C11.4024 10.1882 10.1035 11.5336 10.1035 14.1083V16.8917C10.1035 19.4664 11.4024 20.9277 13.8379 20.9277C16.1343 20.9277 17.4332 19.7679 17.5724 17.7963H20.7038C20.5182 21.6468 17.7811 23.8271 13.8379 23.8271Z"
        fill="black"
      />
    </svg>
  );
}
