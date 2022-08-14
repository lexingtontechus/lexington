/* eslint-disable react/jsx-no-target-blank */
import React from "react";
//import { useState, useEffect } from "react";
//import Link from "next/link";
import Head from "next/head";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <Head>
        <title>Lexington | Home</title>
        <meta property="og:title" content="Lexington Tech LLC" key="title" />
      </Head>
      <IndexNavbar fixed />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-50">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/ai_background.webp')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="pt-24 w-full lg:w-10/12 px-4 ml-auto mr-auto text-center justify-center">
                <div className="p-2">
                  <h1 className="text-slate-100 font-semibold text-3xl text-center uppercase pb-4">
                    Business{" "}
                    <span>
                      <i className="fab fa-mixer"></i>
                    </span>{" "}
                    Technologies
                  </h1>

                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-slate-400 text-center">
                      AI-Driven strategy integrating new technologies seamlessly
                      across retail, healthcare,
                      <br />
                      pharmaceuticals, supply & logistics, manufacturing &
                      warehousing, <br />
                      eCommerce & customer management.
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
                      <i className="fa-solid fa-shop-lock"></i>
                    </div>
                    <h6 className="text-xl font-semibold">B2X Marketplace </h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Wholesale + Retail + Government.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Multi-vendor + multi-channel distribution..
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Personalized buying experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-slate-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                      <i className="fa-solid fa-robot"></i>
                    </div>
                    <h6 className="text-xl font-semibold">AI Technologies</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Building and connecting Ethereum-compatible blockchain
                      networks
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      IPFS (Interplantary File System) powering the Distributed
                      Web.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      DeFi payments apps, protocols and solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-slate-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fa-solid fa-3"></i>
                    </div>
                    <h6 className="text-xl font-semibold">WEB3</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Digital ID for privacy & data protection.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      IPFS for accessibiliy & continuity.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Diversified payment methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-16">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  WEB3
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-100">
                  The next generation of digital technology presents businesses
                  with more complex B2X challenges. Engagement and content
                  models are shifting towards users and multi-channel delivery
                  modes.
                </p>
                <div className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-600">
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fa-solid fa-industry"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-100">
                            Evaluate Web 2.0 and identify business issues.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fa-solid fa-person-rays"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-100">
                            {" "}
                            Redesign tech stack & workflow processes.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fa-solid fa-arrow-up-right-dots"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-100">
                            Focus on integration & automation.
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-600"></p>
                <div className="sm:block flex flex-col mt-10">
                  <a
                    href="/web3"
                    target="_parent"
                    className="text-center text-slate-100 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-indigo-900 active:bg-indigo-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-800">
                  <img
                    alt="WEB3"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                    src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/meta_banner2.png"
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
                    <h4 className="text-xl font-bold text-slate-100">WEB3</h4>
                    <p className="text-md font-light mt-2 text-slate-100">
                      WEB3 accelerates the sharing of content and interaction
                      through decentralized networks and new communities.
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-800">
                  <iframe
                    className="w-full align-middle rounded-t-lg"
                    width="100%"
                    height="400"
                    allow="fullscreen"
                    src="https://cloud.anylogic.com/assets/embed?modelId=4b6944d0-1426-4db4-a246-6f61ccc3c4a5"
                    title="Wholesale Warehouse"
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
                      Wholesale Warehouse
                    </h4>
                    <p className="text-md font-light mt-2 text-slate-100">
                      This is a model of a wholesale warehouse built using
                      network markup shapes.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">AI Automation</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    The warehouse is divided into several zones and has several
                    staff types. The zone utilization is measured and displayed
                    as a bar chart near each zone. Resource capacities can be
                    changed dynamically using text input. A separate screen
                    displays the resource utilization over time.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fa-solid fa-industry"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Flexible Manufacturing
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fa-solid fa-person-rays"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500"> User Satisfaction</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                            <i className="fa-solid fa-arrow-up-right-dots"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Resource optimization & utilization
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sm:block flex flex-col mt-10">
                  <a
                    href="/ai"
                    target="_parent"
                    className="text-center text-slate-100 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-indigo-900 active:bg-indigo-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Learn More
                  </a>
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
