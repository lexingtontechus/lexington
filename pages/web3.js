import React from "react";
//import Link from "next/link";
import Head from "next/head";
//import Image from "next/image";
//import { useState, useEffect } from "react";
//import ReactPlayer from "react-player";
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
//Images

export default function Web3() {
  //const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>Lexington | WEB3</title>
        <meta property="og:title" content="Lexington Tech - WEB3" key="title" />
      </Head>
      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-50">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/meta_banner2.png')"
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
                  <h1 className="text-slate-100 font-semibold text-5xl text-center pb-4 uppercase">
                    <i className="fa-solid fa-w"></i>
                    {"  "}
                    <i className="fa-solid fa-e"></i>
                    {"  "}
                    <i className="fa-solid fa-b"></i>
                    {"  "}
                    <i className="fa-solid fa-3"></i>
                  </h1>

                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-slate-400 text-center">
                      Get ready for WEB3.
                    </p>{" "}
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
                className="text-slate-400 fill-current"
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
                    <div className="text-slate-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fab fa-empire"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Mission</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Readiness assessment.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Web 2.0 <i className="fa-solid fa-angles-right"></i> WEB3
                    </p>

                    <p className="mt-2 mb-4 text-slate-500">
                      Launch WEB3 services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-slate-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                      <i className="fab fa-bitcoin"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Methodology</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Tech stack <i className="fa-solid fa-plus"></i> privacy{" "}
                      <i className="fa-solid fa-plus"></i>
                      security.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Workflow & automation integration.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Payments solutions (on-ramp/off-ramp).
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Business scaling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-slate-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-seedling"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Approach</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Resolve business & technology issues.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Transition to secure technology.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Build towards WEB3.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Section */}
            <div className="flex flex-wrap items-center mt-16">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  WEB 2.0 To WEB3
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-0 text-slate-100">
                  Business fundamentals do not change in the pursuit of WEB3.
                  The new business points of emphasis on content, communities &
                  inclusion reinforces -
                </p>
                <ul className="list-none mt-4">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                          <i className="fa-brands fa-searchengin"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-100">
                          Technology assessment & adoption.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                          <i className="fa-solid fa-diagram-project"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-100">Project management.</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                          <i className="fa-solid fa-icons"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-100">
                          Importance of community.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <p className="text-lg font-light leading-relaxed mt-2 mb-4 text-slate-100">
                  Learn more about business evolution through technology
                  innovation.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-100">
                  Subscribe to our{" "}
                  <span className="text-orange-500 font-bold">Substack</span>{" "}
                  newsletter or <br />
                  follow us on{" "}
                  <span className="text-white font-bold">Medium</span>.
                </p>
                <div className="sm:block flex flex-col mt-10">
                  <a
                    href="https://lexingtontech.substack.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center text-slate-100 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-indigo-900 active:bg-indigo-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Substack
                  </a>

                  <a
                    href="https://medium.com/@lexingtontech"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center text-slate-100 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-indigo-900 active:bg-indigo-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Medium
                  </a>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-800">
                  {/*<img
                    alt=""
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                    src=""
                  />*/}
                  <blockquote className="relative p-8 mb-4">
                    {/*<svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-slate-800 fill-current"
                      ></polygon>
                    </svg>*/}
                    {/*<h4 className="text-xl font-bold text-slate-100">
                      Web 3.0
                  </h4>*/}

                    <iframe
                      className="text-md font-light mt-2 text-slate-100"
                      title="Substack"
                      src="https://lexingtontech.substack.com/embed"
                      width="100%"
                      height="400"
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-800">
                  <img
                    alt="IPFS"
                    src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/ipfs6.svg"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-slate-800 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-slate-100">
                      WEB3 <i className="fa-solid fa-circle-question"></i>
                    </h4>
                    <p className="text-md font-light mt-2 text-slate-100">
                      Innovations like AI/ML, Metaverse platforms and Digital ID create new business markets and products.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    Challenges & Opportunities
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    WEB3 is a challenge & opportunity to address infrastructure
                    requirements/issues and take onwership of security,
                    compliance & the protection of data & privacy.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fa-solid fa-user-shield"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">Security</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fas fa-money-bill"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Payments - Onramp & Offramp Transactions
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Digital ID - KYC & Privacy
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fas fa-tools"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">Data Protection</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
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
