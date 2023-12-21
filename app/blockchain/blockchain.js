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
              Blockchain domains + DApps built on proprietary layer-2
              Ethereum-based networks.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto p-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/our-mission.jpg" alt="Our Mission" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Mission</h2>
              <p>Build blockchain eCommerce DApps.</p>
              <p>Efficient & sustainable blockchain technologies.</p>
              <p>Future of eCommerce powered by Defi & crypto.</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/our-technologies.jpg" alt="Our Technologies" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Technologies</h2>
              <p>
                Building and integrating Ethereum-compatible blockchain networks
              </p>
              <p>
                IPFS (Interplantary File System) powering the Distributed Web.
              </p>
              <p>DeFi payments apps, protocols and solutions</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/our-approach.jpg" alt="Our Approach" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Approach</h2>
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
              IPFS + Hyperledger
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              IPFS (Interplantary File System) powers the Distributed Web
            </p>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              Peer-to-peer IPFS retrieves pieces from multiple nodes at once,
              enabling substantial bandwidth savings. With up to 60% savings for
              video, IPFS makes it possible to efficiently distribute high
              volumes of data without duplication
            </p>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              A peer-to-peer hypermedia protocol designed to preserve and grow
              humanity's knowledge by making the web upgradeable, resilient, and
              more open.
            </p>
            <h3 className="text-3xl font-semibold text-primary mb-2">
              Challenges & Opportunities
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Blockchain adoption is a challenge & opportunity to address
              infrastructure requirements/issues and take onwership of security,
              compliance & the protection of data & privacy.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Learn more about our services.
            </p>
            <button className="glass btn btn-primary hover:text-accent uppercase font-bold">
              <Link href="/services">Services</Link>
            </button>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-base-300">
            <div className="grow card card-compact w-full bg-base-200 text-primary-content shadow-lg max-h-[400px]">
              <figure>
                <img src="/ipfs.jpg" alt="IPFS" />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title font-bold uppercase">
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
