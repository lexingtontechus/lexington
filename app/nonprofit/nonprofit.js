"use client";
import Link from "next/link";
import Image from "next/image";
const imageLoader = ({ src, width, quality }) => {
  return `https://rawcdn.githack.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function nonprofit() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/savi_header.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <div className="max-w-2xl text-pretty">
            <h1 className="mb-5 text-6xl font-bold uppercase text-accent">
              SAVI
            </h1>
            <h2 className="mb-5 text-3xl font-bold uppercase text-accent-content opacity-70">
              STRATEGIC ALLIANCE FOR VETERAN INTEGRATION
            </h2>
            <p className="my-8 text-2xl font-semibold text-primary-content">
              “Getting Veterans The Benefits They Deserve”
            </p>
            <h3 className="mb-5 text-2xl font-bold text-neutral-content">
              Lexington Tech is a proud partner of SAVI.
            </h3>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-4">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="shrink card w-full md:w-5/12 shadow-md p-4">
            <figure>
              <img src="/logo_savi.png" className="h-48" />
            </figure>
            <h2 className="font-bold text-primary uppercase">SAVI</h2>
            <p className="text-lg font-light leading-relaxed">
              SAVI is a national (US) nonprofit organization dedicated to
              providing knowledge and resources to military Veterans
              transitioning into civilian life and to the organizations that
              support them.
            </p>

            <h2 className="mt-4 font-bold text-primary uppercase">
              SAVI Transition Incubator
            </h2>
            <p className="mb-4 text-lg font-light leading-relaxed">
              SAVI focuses on the unique needs of the transitioning
              service-member. With a 360-degree understanding of these needs, we
              strive to make true for each Veteran the words in our tagline:
              Your whole life transition starts here.
            </p>
            <div className="card-actions justify-end">
              <button className="hover:bg-accent btn btn-secondary uppercase font-bold">
                <Link href="https://www.savivets.org/" target="_blank">
                  Learn More
                </Link>
              </button>
            </div>
          </div>

          <div className="shrink card w-full md:w-5/12 shadow-md p-4">
            <figure>
              <img
                src="/savi_premierpartner.webp"
                className="size-48"
                alt="SAVI Premier Partner"
              />
            </figure>
            <h2 className="font-bold text-primary uppercase">
              PARTNER WITH SAVI
            </h2>
            <p className="mb-2 mt-0 text-lg font-light leading-relaxed">
              Becoming a SAVI Partner, you stand out from your peers and display
              your commitment to exceptional service for Veterans on your
              website, social media pages, and other marketing materials.
            </p>
            <p className="mb-2 mt-0 text-lg font-light leading-relaxed">
              You have the opportunity to establish a feedback process that
              acknowledges you provide the best experience to Veterans, based on
              real comments.
            </p>
            <p className="mb-2 mt-0 text-lg font-light leading-relaxed">
              Each SAVI Partner will be recognized with a digital badge to share
              with their audience and proudly display across their digital
              channels.
            </p>
            <div className="card-actions justify-end">
              <button className="hover:bg-accent btn btn-secondary uppercase font-bold">
                <Link
                  href="https://www.savivets.org/our-partners"
                  target="_blank"
                >
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-4">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="shrink card w-full md:w-5/12 bg-base-300">
            <figure>
              <img
                src="savi_education.jpg"
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
          <div className="shrink card w-full md:w-5/12 bg-base-300">
            <figure>
              <img
                src="/savi_employment.jpg"
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
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="shrink card w-full md:w-5/12 bg-base-300">
            <figure>
              <img
                src="/savi_entrepreneurship.jpg"
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
          <div className="shrink card w-full md:w-5/12 bg-base-300">
            <figure>
              <img
                src="/savi_retirement.jpg"
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
    </main>
  );
}
