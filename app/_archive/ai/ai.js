import Link from "next/link";

export default function AI() {
  return (
    <main className="pb-4">
      <div className="hero min-h-screen svg-ai">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase text-accent">
              AI Innovations
            </h1>
            <p className="mb-5 text-2xl font-semibold text-accent-content opacity-70">
              The driving force in the economy across innovation & industry
              growth
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
                  Identify Business Usecases & Applications.
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>SaaS Proof of Concept.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>Scale for enterprise.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>Service delivery & customer adoption.</div>
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
                  Leverage industry leading solutions.
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>Computer vision</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>GenAI GPT & Custom LLM</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>Predictive modelling.</div>
                </li>
              </ul>
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
              <ul className="list rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Rapid Deployment & Growth.
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">01</div>
                  <div>Accelerate innovation.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">02</div>
                  <div>Automation & transformation.</div>
                </li>
                <li className="list-row">
                  <div className="font-thin opacity-70 tabular-nums">03</div>
                  <div>Technology scaling.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full my-2">
        <div className="flex flex-wrap items-center rounded-lg bg-base-300 px-4">
          <div className="lg:7/12 w-full md:w-6/12 p-8">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
              ECOMMERCE & MARKETING
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed">
              AdTech & Marketing solutions solving business problems in demand
              management, supply chain optimization, predictive maintenance, and
              sales activation. Personalized recommendation search engines
              serving AI driven results.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Use predictive analytics, ML and computer vision technologies to
              gain actionable insights into consumer purchasing behaviors,
              product placement/assortment, and store-level performance.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Future of eCommerce powered by virtual & augmented reality.
            </p>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12">
            <div className="grow card card-compact w-full bg-base-200 break-words shadow-lg">
              <figure>
                <img
                  src="/b2xecommerce.jpg"
                  alt="B2X Marketplace"
                  className="w-full"
                />
              </figure>
              <div className="card-body p-4 bg-base-200">
                <h2 className="card-title font-bold text-primary uppercase">
                  Artificial Intelligence
                </h2>
                <p>
                  Enabling AI to identify patterns and behavior from operational
                  data through machine learning, computer vision & deep
                  learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="x-auto w-full my-4">
        <div className="flex flex-wrap items-center rounded-none bg-base-200">
          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 max-h-full">
            <div className="grow card card-compact w-full bg-base-300 break-words shadow-lg">
              <figure>
                <img
                  src="/ai_solutions.png"
                  className="w-full"
                  alt="AI Powered Solutions"
                />
              </figure>
              <div className="card-body p-4 bg-base-300">
                <h2 className="card-title font-bold text-primary uppercase">
                  AI Solutions
                </h2>
                <p>
                  Partner with industry leading startups or develop custom AI
                  tools for your use case.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:7/12 w-full p-8 md:w-6/12">
            <h3 className="text-3xl font-semibold text-primary mb-2">
              AI POWERED SOLUTIONS
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Transformative opportunity to respond to business challenges and
              drive profitablity and growth.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Applied AI technologies: Machine Learning, Natural Language
              Processing, Computer Vision, Deep Learning, Autonomy Solutions,
              RPA, Intelligent IoT, and Virtual Agents.
            </p>
            <h3 className="text-3xl font-semibold text-primary mb-2">
              RAPID ADOPTION
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Rapid AI & ML adoption through an accelerated program integrating
              matching technology to your business & industry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
