import React from "react";
import Link from "next/link";
//import { useState, useEffect } from "react";
import Head from "next/head";
//import Image from "next/image";
//import ReactPlayer from "react-player";
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function nonprofit() {
  //const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>Lexington | Non-Profit</title>
        <meta
          property="og:title"
          content="Lexington Tech - Non-Profit"
          key="title"
        />
      </Head>
      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-50">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/ai_background.webp')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="pt-24 w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                <div className="p-2">
                  <h1 className="text-white font-semibold text-5xl text-center pb-4 uppercase">
                    Strategic Alliance for Veteran Integration (SAVI)
                  </h1>

                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-slate-400 text-center">
                      “Getting Veterans The Benefits They Deserve”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-slate-400 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-slate-400 -mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fab fa-empire"></i>
                    </div>
                    <h6 className="text-xl font-semibold">The Mission</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Clarify VA benefits and provide custom transition
                      solutions to Veterans and the organizations that support
                      them.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Create technology solutions for SAVI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-power-off"></i>
                    </div>
                    <h6 className="text-xl font-semibold">The Program</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      10000 strong - outreach to the Veteran community.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Expand SAVI's transition incubator.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Education. Employment. Entrepreneurship. Retirement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <h6 className="text-xl font-semibold">The Growth</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Accelerate innovation to launch new services.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Technology powering employment opportunities.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Collaborations with our enterprise partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-16">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal uppercase">
                  SAVI
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  SAVI is a national (US) nonprofit organization dedicated to
                  providing knowledge and resources to military Veterans
                  transitioning into civilian life and to the organizations that
                  support them.
                </p>

                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  Founded in 2017 by a passionate military Veteran who has been
                  through it all, SAVI believes in taking a whole-person
                  approach to this transition.
                </p>

                <button
                  className="bg-indigo-900 hover:bg-indigo-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <a
                    href="/https://www.savivets.org/"
                    target="_blank"
                    rel="noreferrer"
                    title="SAVI"
                  >
                    Learn More
                  </a>
                </button>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="SAVI"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                    src="/nonprofit_savi.png"
                  />
                  <blockquote className="relative p-8 mb-4">
                    {/*<svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="fill-slate-700 fill-current"
                      ></polygon>
                   </svg>*/}
                    <h4 className="text-xl font-bold text-white">
                      SAVI Transition Incubator
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      SAVI focuses on the unique needs of the transitioning
                      service-member. With a 360-degree understanding of these
                      needs, we strive to make true for each Veteran the words
                      in our tagline: Your whole life transition starts here.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-slate-400 text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="SAVI Premier Partner"
                    src="/nonprofit_savipremierpartner.png"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    {/*<svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-slate-700 fill-slate-700  fill-current"
                      ></polygon>
                    </svg>*/}
                    <h4 className="text-xl font-bold text-white">
                      SAVI Premier Partner
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Each SAVI Partner will be recognized with a digital badge
                      to share with their audience and proudly display across
                      their digital channels.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold uppercase">
                    Partner with SAVI
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    Becoming a SAVI Partner, you stand out from your peers and
                    display your commitment to exceptional service for Veterans
                    on your website, social media pages, and other marketing
                    materials.
                  </p>
                  <p className="mt-4 mb-4  text-lg leading-relaxed text-slate-500">
                    You have the opportunity to establish a feedback process
                    that acknowledges you provide the best experience to
                    Veterans, based on real comments.
                  </p>
                  <button
                    className="bg-indigo-900 hover:bg-indigo-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a
                      href="/https://www.savivets.org/our-partners"
                      target="_blank"
                      rel="noreferrer"
                      title="SAVI"
                    >
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
