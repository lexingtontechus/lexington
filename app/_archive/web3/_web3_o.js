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

      <section className="container mx-auto px-8">
        <div className="flex flex-wrap items-center bg-accent">
          <div className="lg:7/12 mt-4 px-8 w-full md:w-6/12 pb-4">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
              WEB 2.0 To WEB3
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              Business fundamentals do not change in the pursuit of WEB3. The
              new business points of emphasis on content, communities &
              inclusion reinforces -
            </p>
            <ul className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content list-inside">
              <li className="mr-4 list-disc">
                Technology assessment & adoption.
              </li>
              <li className="mr-4 list-disc">Project management.</li>
              <li className="mr-4 list-disc">Importance of community.</li>
            </ul>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              WEB3 is a challenge & opportunity to take ownership of security,
              compliance & the protection of data & privacy. Innovations like
              AI/ML, GPT platforms and Digital ID create new business markets
              and products.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Learn more about our services.
            </p>
            <button className="btn btn-neutral hover:text-accent uppercase">
              <Link href="/services">Services</Link>
            </button>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
            <div className="grow card card-compact w-full bg-neutral text-primary-content shadow-lg">
              <div className="card-body p-4">
                <h2 className="card-title font-bold uppercase">
                  Substack Newsletter
                </h2>
                <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
                  Learn more about business evolution through technology
                  innovation. Subscribe to our Substack newsletter or follow us
                  on Medium.
                </p>
                <iframe
                  src="https://lexingtontech.substack.com/embed"
                  className="border-2 border-secondary bg-neutral mx-auto w-full"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
                <div className="card-actions justify-end">
                  <div className="join px-4">
                    <button className="btn btn-accent join-item">
                      <Link
                        href="https://lexingtontech.substack.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-center font-bold"
                      >
                        Substack
                      </Link>
                    </button>
                    <button className="btn btn-accent join-item">
                      <Link
                        href="https://medium.com/@lexingtontech"
                        target="_blank"
                        rel="noreferrer"
                        className="text-center font-bold"
                      >
                        Medium
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
