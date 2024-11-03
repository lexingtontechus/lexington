"use client";
import Link from "next/link";
import Image from "next/image";
const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function nonprofit() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/savi-header.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl text-pretty">
            <h1 className="mb-5 text-6xl font-bold uppercase text-zinc-50">
              SAVI
            </h1>
            <h2 className="mb-5 text-3xl font-bold uppercase text-zinc-50">
              STRATEGIC ALLIANCE FOR VETERAN INTEGRATION
            </h2>
            <p className="my-8 text-2xl font-semibold capitalize">
              “Getting Veterans The Benefits They Deserve”
            </p>
            <h3 className="mb-5 text-2xl font-bold capitalize">
              Lexington Tech is a proud partner of SAVI.
            </h3>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="shrink card card-compact w-full md:w-2/12 bg-base-300">
            <figure>
              <img
                src="https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/savi-education.jpg"
                alt="Education"
                className="w-full"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">Education</h2>
              <p>
                SAVI Student Transition Incubator℠, Student Track Transition
                Program℠
              </p>
              <p>Student Benefit Assessment Service℠</p>
              <p>Personalized career path determination assistance.</p>
            </div>
          </div>
          <div className="shrink card card-compact w-full md:w-2/12 bg-base-300">
            <figure>
              <img
                src="https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/savi-employment.jpg"
                alt="Employment"
                className="w-full"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">Employment</h2>
              <p>
                Start-to-finish support to help Veterans navigate a new career.
              </p>
              <p>
                Skills assessments to professional networking strategies, SAVI
                offers custom-built tools.
              </p>
              <p>Job retention & mentoring services.</p>
            </div>
          </div>
          <div className="shrink card card-compact w-full md:w-2/12 bg-base-300">
            <figure>
              <img
                src="https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/savi-entrepreneurship.jpg"
                alt="Entrepreneurship"
                className="w-full"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">
                Entrepreneurship
              </h2>
              <p>SAVI Entrepreneur Transition Incubator℠.</p>
              <p>Entrepreneur Benefit Assessment Service℠.</p>
              <p>Comprehensive tools for personal business success.</p>
            </div>
          </div>
          <div className="shrink card card-compact w-full md:w-2/12 bg-base-300">
            <figure>
              <img
                src="https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/savi-retirement.jpg"
                alt="Retirement"
                className="w-full"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title font-bold text-primary">Retirement</h2>
              <p>Comprehensive tools for a successful retirement.</p>
              <p>One-on-one ongoing assistance and assessment services.</p>
              <p>Financial & healthcare support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <div className="flex flex-wrap items-center bg-base-300">
          <div className="lg:7/12 ml-auto mr-auto w-full px-8 md:w-6/12">
            <h3 className="mt-4 mb-2 text-3xl font-semibold leading-normal text-primary">
              SAVI
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed">
              SAVI is a national (US) nonprofit organization dedicated to
              providing knowledge and resources to military Veterans
              transitioning into civilian life and to the organizations that
              support them.
            </p>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed">
              Founded in 2017 by a passionate military Veteran who has been
              through it all, SAVI believes in taking a whole-person approach to
              this transition.
            </p>
            <button className="hover:glass btn btn-accent uppercase font-bold">
              <Link href="https://www.savivets.org/" target="_blank">
                Learn More
              </Link>
            </button>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-base-300">
            <div className="grow card card-compact w-full bg-base-200 shadow-lg">
              <figure>
                <img
                  src="https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/logo-savi-horizontal.png"
                  alt="SAVI"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title font-bold text-primary uppercase">
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
        <div className="flex flex-wrap items-center bg-base-300">
          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-base-300">
            <div
              className="grow card card-compact w-full bg-base-200
 break-words shadow-lg"
            >
              <figure>
                <img
                  src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/nonprofit_savipremierpartner.png"
                  alt="Blockchain & WEB3"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title font-bold text-primary uppercase">
                  SAVI Premier Partner
                </h2>
                <p>
                  Each SAVI Partner will be recognized with a digital badge to
                  share with their audience and proudly display across their
                  digital channels.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:7/12 w-full px-8 md:w-6/12 mb-4">
            <h3 className="text-3xl font-semibold text-primary mb-2">
              PARTNER WITH SAVI
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              Becoming a SAVI Partner, you stand out from your peers and display
              your commitment to exceptional service for Veterans on your
              website, social media pages, and other marketing materials.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed">
              You have the opportunity to establish a feedback process that
              acknowledges you provide the best experience to Veterans, based on
              real comments.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed"></p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed"></p>
            <button className="hover:glass btn btn-accent uppercase font-bold">
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
