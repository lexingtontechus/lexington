import Link from "next/link";

const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};
export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: "Lexington Tech LLC",
  description:
    "Management & Technology Consulting | AI, Smart FX, Blockchain, Hyper-Local Microservices. Web 3.0 Blockchain Domain IPFS.",
  keywords: [
    "Lexington",
    "Lexington Tech",
    "Unstoppable Domains",
    "Web 3",
    "WEB3",
    "Blockchain",
    "IPFS",
    "Interplantary File System",
    "Fleek",
    "Storj",
    "Quantum Management",
    "Management Consulting",
    "FoodTech",
    "BioTech",
    "Hyperlocal Microservices",
    "Forex",
    "SmartFX",
    "Pharmatech",
    "BTAB Group",
    "BTAB Corp",
  ],
};
export const openGraphImage = {
  images: [
    "https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/ai_background.webp",
  ],
};
const Home = () => {
  return (
    <main className="mb-8">
      <div className="hero min-h-screen svg-home">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-accent uppercase">
              Lexington Tech
            </h1>
            <h2 className="text-3xl font-bold uppercase my-8">
              Business & Technology Management Consulting
            </h2>
            <div className="join">
              <button
                className="btn btn-accent uppercase rounded-md join-item hover:text-secondary tooltip"
                data-tip="Lexington WEB3 & NextGen Demo"
              >
                <Link href="https://lexington-demo.vercel.app/" target="_blank">
                  Demo
                </Link>
              </button>
              <button
                className="btn btn-accent uppercase rounded-md join-item hover:text-secondary tooltip"
                data-tip="Artifical Intelligence Showcase"
              >
                <Link
                  href="https://lexington-aimockinterviews.vercel.app/"
                  target="_blank"
                >
                  AI Showcase
                </Link>
              </button>
              <button className="btn btn-accent uppercase rounded-md join-item hover:text-secondary">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/b2xecommerce.jpg" alt="B2X Marketplace" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold">B2X Marketplace</h2>
              <p>Wholesale + Retail + Government.</p>
              <p>Multi-vendor + multi-channel distribution.</p>
              <p>Personalized buying experience.</p>
              <p>eCommerce powered by virtual & augmented reality.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent hover:text-secondary">
                  <Link href="/marketplace">More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/aistack.jpg" alt="AI Stack" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold">AI Stack</h2>
              <p>Horizontal Applications.</p>
              <p>Vertical Applications.</p>
              <p>AI Infrastructure.</p>
              <p>Foundational Models.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent hover:text-secondary">
                  <Link href="/ai">More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-secondary text-primary-content">
            <figure>
              <img src="/web3.jpg" alt="WEB3" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold">WEB3</h2>
              <p>Integrating Ethereum-compatible blockchain networks.</p>
              <p>
                IPFS (Interplantary File System) powering the Distributed Web.
              </p>
              <p>Digital ID for privacy & data protection.</p>
              <p>Defi payments.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent hover:text-secondary">
                  <Link href="/web3">More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8 px-8 container mx-auto">
        <div className="flex flex-wrap items-center rounded-none bg-accent">
          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
            <div
              className="grow card card-compact w-full bg-neutral text-primary-content
 break-words shadow-lg"
            >
              <figure>
                <img src="/aiautomation.jpg" alt="AI Automation" />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">
                  Generative PreTrained Transformer (GPT)
                </h2>
                <p>
                  ChatGPT Models - AI agent chatbot leveraging Large Language
                  Models (LLM).
                </p>
                <p>
                  AutoGPT Models - Built on GPT-4 or GPT-3.5 APIs. Autonomous AI
                  agent breaking it into sub-tasks and using the internet or
                  custom data tools in an automatic loop.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:7/12 ml-auto mr-auto w-full px-8 md:w-6/12">
            <h3 className="text-3xl font-semibold text-primary mb-2 uppercase">
              AI Automation
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Discover AI usecases for your industry.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Discover the right GPT plugin for your business.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Leverage LLM to customize a GPT model using your business data,
              documents & knowledge-base.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content"></p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
