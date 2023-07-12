import Link from "next/link";

export default function Services() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/ai_background.webp')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase">
             Services
            </h1>
            <p className="my-8 text-2xl">
              AI technologies today represent the driving force in the economy across all activities & industries.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img
                src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/card_mission.jpg"
                alt="Our Mission"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Mission</h2>
              <p>
                Develop nextgen eCommerce marketplace for Btab Group.
              </p>
              <p>Deploy Deep Learning & Neuro-networks to scale.</p>
              <p> Train new models focused on service delivery & manufacturing.</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img
                src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/card_investment.jpg"
                alt="Our Investments"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Technologies</h2>
              <p>Leverage industry leading solutions for your business.</p>
              <p>Deploy Platform Kits</p>
              <ul>
                <li>AI & ML Solutions</li>
                <li>GPT & Custom LLC</li>
                <li>Marketplaces</li>
              </ul>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img
                src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/card_growth.jpg"
                alt="Our Growth"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Approach</h2>
              <p>Accelerating innovation and action for sustainable growth.</p>
              <p>Embracing technology to power sustainable</p>
              <p>Develop. Preview. Ship.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <div className="flex flex-wrap items-center rounded-lg bg-accent">
          <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
              SAVI
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              SAVI is a national (US) nonprofit organization dedicated to
              providing knowledge and resources to military Veterans
              transitioning into civilian life and to the organizations that
              support them.
            </p>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              Founded in 2017 by a passionate military Veteran who has been
              through it all, SAVI believes in taking a whole-person approach to
              this transition.
            </p>
            <button className="btn btn-accent">
              <Link href="https://www.savivets.org/" target="_blank">
                Learn More
              </Link>
            </button>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
            <div className="grow card card-compact w-full bg-neutral text-primary-content shadow-lg">
              <figure>
                <img
                  src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/ipfs5.svg"
                  alt="IPFS"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title font-bold uppercase">
                  SAVI Transition Incubator
                </h2>
                <p>
                  SAVI focuses on the unique needs of the transitioning
                  service-member. With a 360-degree understanding of these
                  needs, we strive to make true for each Veteran the words in
                  our tagline: Your whole life transition starts here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8 px-8 container mx-auto">
        <div className="flex flex-wrap items-center rounded-lg bg-accent">
          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
            <div
              className="grow card card-compact w-full bg-neutral text-primary-content
 break-words shadow-lg"
            >
              <figure>
                <img
                  src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/nonprofit_savipremierpartner.png"
                  alt="Blockchain & WEB3"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">SAVI Premier Partner</h2>
                <p>
                  Each SAVI Partner will be recognized with a digital badge to
                  share with their audience and proudly display across their
                  digital channels.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
            <h3 className="text-3xl font-semibold text-primary mb-2">
              PARTNER WITH SAVI
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Becoming a SAVI Partner, you stand out from your peers and display
              your commitment to exceptional service for Veterans on your
              website, social media pages, and other marketing materials.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              You have the opportunity to establish a feedback process that
              acknowledges you provide the best experience to Veterans, based on
              real comments.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content"></p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content"></p>
            <button className="btn btn-accent">
              <Link
                href="https://www.savivets.org/our-partners"
                target="_blank"
              >
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
