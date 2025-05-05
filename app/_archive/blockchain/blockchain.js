import Link from "next/link";
export default function Blockchain() {
  return (
    <main>
      <div className="hero min-h-screen svg-blockchain">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase text-zinc-50">
              Blockchain Powered DA<span className="normal-case">pps</span>
            </h1>
            <p className="my-8 text-2xl font-semibold">
              Blockchain domains + Decentralized Apps
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto p-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/our-mission.jpg" alt="Our Mission" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">Our Mission</h2>
              <p>Build blockchain eCommerce DApps.</p>
              <p>Efficient & sustainable blockchain technologies.</p>
              <p>Future of eCommerce powered by Defi & crypto.</p>
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
              <p>
                Building and integrating Ethereum-compatible blockchain networks
              </p>
              <p>
                IPFS (Interplantary File System) powering the Distributed Web.
              </p>
              <p>DeFi payments apps, protocols and solutions</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/our-approach.jpg" alt="Our Approach" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">
                Our Approach
              </h2>
              <p>Implement wallet & token technologies.</p>
              <p>Transition to decentralized technologies.</p>
              <p>Build DApps to power eCommmerce.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-8">
        <div className="flex flex-wrap items-center bg-base-300">
          <div className="lg:7/12 mt-4 px-8 pb-4 md:w-6/12">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
              Digital Identity & Privacy
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed">
              WEB3 TLDs offer personal ownership of data & replaces wallet
              addresses with user-friendly/readable names. This utility enables
              a user to manage their authorization, identity and data across the
              entire internet.
            </p>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed">
              Digital wallets support encrypted messaging.
            </p>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed"></p>
            <h3 className="text-3xl font-semibold text-primary mb-2">
              Challenges & Opportunities
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              The core Web 2.0 issues are usage and security of email & phone
              numbers that are easily hijacked/stolen.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Learn more about our services.
            </p>
            <button className="hover:glass btn btn-accent uppercase font-bold">
              <Link href="/services">Services</Link>
            </button>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-base-300">
            <div className="grow card card-compact w-full bg-base-200 shadow-lg ">
              <figure className="max-h-[600px] image-full">
                <img src="/ipfs.jpg" alt="IPFS" />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title font-bold uppercase text-primary">
                  Blockchain Technologies
                </h2>
                <p>
                  IPFS makes it simple to set up resilient networks for
                  mirroring data, and thanks to content addressing, files stored
                  using IPFS are automatically versioned. IPFS powers the
                  creation of diversely resilient networks that enable
                  persistent availability — with or without internet backbone
                  connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
