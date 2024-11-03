"use client";
import Link from "next/link";

const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};
const Home = () => {
  return (
    <main className="mb-8">
      <div className="hero min-h-screen svg-home">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-zinc-50 uppercase">
              Lexington Tech
            </h1>
            <h2 className="text-3xl font-bold uppercase my-8">
              Business & Technology Management Consulting
            </h2>
            <div className="join">
              <button
                className="btn btn-accent uppercase rounded-md join-item tooltip"
                data-tip="Lexington WEB3 & NextGen Demo"
              >
                <Link href="https://demo.lexington.us/" target="_blank">
                  Demo
                </Link>
              </button>
              <button
                className="btn btn-accent uppercase rounded-md join-item tooltip"
                data-tip="Artifical Intelligence Showcase"
              >
                <Link
                  href="https://aimockinterviews.lexington.us/"
                  target="_blank"
                >
                  AI Showcase
                </Link>
              </button>
              <button
                className="btn btn-accent uppercase rounded-md join-item tooltip"
                data-tip="Lexington WEB3 Onboarding"
              >
                <Link href="/web3">WEB3</Link>
              </button>
              <button className="btn btn-accent uppercase rounded-md join-item">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/b2xecommerce.jpg" alt="B2X Marketplace" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">
                B2X Marketplace
              </h2>
              <p>WEB3 Onboarding</p>
              <p>Wholesale + Retail + Government.</p>
              <p>Multi-vendor + multi-channel distribution.</p>
              <p>Personalized buying experience.</p>
              <p>Powered by augmented reality.</p>
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase font-bold">
                  <Link href="/marketplace">More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/aiautomation.jpg" alt="AI Automation" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">
                Generative PreTrained Transformer (GPT)
              </h2>
              <p>Computer Vision</p>
              <p>Machine Learning</p>
              <p>Natural Language Processing</p>
              <p>Speech Recognition</p>
              <p>Robotics & Optimization</p>
              <p>Planning & Scheduling</p>
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase font-bold">
                  <Link href="/ai">More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-base-300">
            <figure>
              <img src="/web3.jpg" alt="WEB3" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">WEB3</h2>
              <p>Security & Data Privacy</p>
              <p>Integrating Ethereum-compatible blockchain networks.</p>
              <p>
                IPFS (Interplantary File System) powering the Distributed Web.
              </p>
              <p>Digital ID for privacy & data protection.</p>
              <p>Defi payments.</p>
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase font-bold">
                  <Link href="/web3">More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
