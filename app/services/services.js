import Script from "next/script";
import Link from "next/link";

export default function LemonSqueezy() {
  return (
    <main>
      <div className="hero min-h-screen svg-blockchain">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl text-pretty">
            <h1 className="mb-5 text-5xl font-bold uppercase text-zinc-50">
              Lexington Business Management Services
            </h1>
            <h3 className="text-xl py-4">
              Lexington Management Consulting elevates your organization from a
              StartUp to a thriving organization.
            </h3>
            <ul className="justify-center timeline timeline-vertical lg:timeline-horizontal mt-4">
              <li>
                <div className="timeline-start timeline-box">
                  Free Consulting Session
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-gradient-to-r from-slate-50 to-lime-500" />
              </li>
              <li>
                <hr className="bg-gradient-to-r from-lime-500 to-lime-700" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">
                  StartUp Accelerator Program
                </div>
                <hr className="bg-gradient-to-r from-lime-700 to-blue-500" />
              </li>
              <li>
                <hr className="bg-gradient-to-r from-blue-500 to-blue-700" />
                <div className="timeline-start timeline-box">
                  Management Consulting
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-gradient-to-r from-blue-700 to-violet-500" />
              </li>
              <li>
                <hr className="bg-gradient-to-r from-violet-500 to-violet-700" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">
                  Project Management
                </div>
                <hr className="bg-gradient-to-r from-violet-700 to-amber-500" />
              </li>
              <li>
                <hr className="bg-gradient-to-r from-amber-500 to-amber-700" />
                <div className="timeline-start timeline-box">
                  Business & Technology Elevation
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-gradient-to-r from-amber-700 to-fuchsia-500" />
              </li>
              <li>
                <hr className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-700" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">WEB3 & AI</div>
                <hr className="bg-gradient-to-r from-fuchsia-700 to-zinc-900" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap flex-grow gap-8 content-center justify-center mx-auto">
          <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure>
              <img
                src="/FreeConsultingSession.png"
                alt="Free Consulting"
                className="image-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Free Consulting</h2>
              <p>
                Introduction to Lexington Tech. Getting to know your business &
                products. 30min session. Book now!
              </p>
              <Script src="https://assets.lemonsqueezy.com/lemon.js" />
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase">
                  <Link
                    href="https://lexington.lemonsqueezy.com/checkout/buy/fdaab53a-135b-4ecb-8db1-1810c2ae000e?embed=1"
                    className="lemonsqueezy-button"
                  >
                    Book Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure>
              <img
                src="/StartUpAccelerator.png"
                alt="StartUp Accelerator Program"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">StartUp Accelerator Program</h2>
              <p>
                Accelerator Program To Launch Your Company or Next Big Product!
              </p>
              <Script src="https://assets.lemonsqueezy.com/lemon.js" />
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase">
                  <Link
                    href="https://lexington.lemonsqueezy.com/checkout/buy/30fe2f0d-5262-4c0e-ae15-baac7de9b0ec?embed=1"
                    className="lemonsqueezy-button"
                  >
                    Start Trial
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure>
              <img
                src="/ConsultingManagement.png"
                alt="Consulting Management"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Consulting Management</h2>
              <p>Consulting strategy & product management services.</p>
              <Script src="https://assets.lemonsqueezy.com/lemon.js" />
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase">
                  <Link
                    href="https://lexington.lemonsqueezy.com/checkout/buy/b9282da0-44db-42d8-98e4-1ce0b0934dd2?embed=1"
                    className="lemonsqueezy-button"
                  >
                    Start Trial
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure>
              <img src="/ProjectManagement.png" alt="Project Management" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project Management</h2>
              <p>
                Project development & support of custom platforms for your
                business. Integration with business critical systems like
                Accounting, HR, Inventory etc
              </p>
              <Script src="https://assets.lemonsqueezy.com/lemon.js" />
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase">
                  <Link
                    href="https://lexington.lemonsqueezy.com/checkout/buy/9e599f2a-4a56-4154-b267-d6e04a48e07a?embed=1"
                    className="lemonsqueezy-button"
                  >
                    Start Trial
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure>
              <img src="/BusinessElevation.png" alt="Business Elevation" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Business Elevation</h2>
              <p>
                Grow your business through our social eCommerce network
                opportunities. Discover & establish new markets to elevate!
              </p>
              <Script src="https://assets.lemonsqueezy.com/lemon.js" />
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase">
                  <Link
                    href="https://lexington.lemonsqueezy.com/checkout/buy/53cae681-adf9-4165-af48-4bc219bf4653?embed=1"
                    className="lemonsqueezy-button"
                  >
                    Start Trial
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure>
              <img src="/WEB3StarterKit.png" alt="WEB3 Starter Kit" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">WEB3 Starter Kit</h2>
              <p>Upgrade your web technologies & presence to WEB3 standards.</p>
              <Script src="https://assets.lemonsqueezy.com/lemon.js" />
              <div className="card-actions justify-end">
                <button className="hover:glass btn btn-accent uppercase">
                  <Link
                    href="https://lexington.lemonsqueezy.com/checkout/buy/71e5a43d-2da4-4aba-b74b-9ecadf9dd9e8?embed=1"
                    className="lemonsqueezy-button"
                  >
                    Start Trial
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
