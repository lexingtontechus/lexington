import Link from "next/link";

export default function AI() {
  return (
    <main className="pb-4">
      <div className="hero min-h-screen svg-ai">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase text-zinc-50">
              AI Innovations
            </h1>
            <p className="mb-5 text-2xl font-semibold">
              AI technologies are the driving force in the economy across
              innovations & industries growth.
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
              <p>Rapid AI SaaS solutions deployment.</p>
              <p>Scaling AI technologies for industry applications.</p>
              <p>AI models focused on service delivery & manufacturing.</p>
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
              <p>Leverage industry leading solutions for your business.</p>
              <p>Computer vision</p>
              <p>GPT & Custom LLM</p>
              <p>Predictive analytics</p>
              <p>Platform Starter Kits</p>
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
              <p>Accelerate adoption of AI innovation.</p>
              <p>Automation to power sustainable transformation.</p>
              <p>Embracing technology, leveraging AI and Machine Learning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-8">
        <div className="flex flex-wrap items-center rounded-lg bg-base-300">
          <div className="lg:7/12 mt-4 px-8 w-full md:w-6/12">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
              ECOMMERCE & MARKETING
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed">
              AdTech & Marketing solutions solving business problems in demand
              management, supply chain optimization, predictive maintenance, and
              sales activation, among others. Personalized recommendation search
              engines serving AI driven results.
            </p>
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
              INDUSTRY EXPERIENCE
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Use predictive analytics, ML and computer vision technologies to
              gain actionable insights into consumer purchasing behaviors,
              product placement/assortment, and store-level performance.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Future of eCommerce powered by virtual & augmented reality.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Learn more about our services.
            </p>
            <button className="hover:glass btn btn-accent uppercase font-bold">
              <Link href="/services">Services</Link>
            </button>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-base-300">
            <div className="grow card card-compact w-full bg-base-200 break-words shadow-lg">
              <figure>
                <img
                  src="/b2xecommerce.jpg"
                  alt="B2X Marketplace"
                  className="w-full"
                />
              </figure>
              <div className="card-body p-4">
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

      <section className="container mx-auto p-8">
        <div className="flex flex-wrap items-center rounded-none bg-base-300">
          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-base-300">
            <div className="grow card card-compact w-full bg-base-200 break-words shadow-lg">
              <figure>
                <img src="/ai_solutions.png" alt="AI Powered Solutions" />
              </figure>
              <div className="card-body p-4">
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
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Learn more about our services.
            </p>
            <button className="hover:glass btn btn-accent uppercase font-bold">
              <Link href="/services">Services</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
