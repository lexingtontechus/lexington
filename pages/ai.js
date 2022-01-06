import React from "react";
//import Link from "next/link";
//import { useState, useEffect } from "react";
import Head from "next/head";
//import Image from "next/image";
//import ReactPlayer from "react-player";
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function AI() {
  //const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>Lexington | AI</title>
        <meta
          property="og:title"
          content="Lexington Tech - AI Innovations in startups"
          key="title"
        />
      </Head>
      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-50">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/ai_background.webp')"
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
                    AI Innovations
                  </h1>

                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-slate-400 text-center">
                      AI technologies today represent the driving force in the
                      economy across all activities & industries.
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
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fab fa-empire"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Mission</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Rapid AI SaaS solutions deployment.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Scaling AI technologies for industry applications.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      AI models focused on service delivery & manufacturing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                      <i className="fas fa-power-off"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Technologies</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Leverage industry leading solutions for your business.
                    </p>
                    <ul className="list-none">
                      <li className="py-1">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-slate-100 mr-3">
                              <i className="fas fa-industry"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500 text-left">
                              Computer vision
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-slate-100 mr-3">
                              <i className="fas fa-chalkboard-teacher"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500 text-left">
                              Machine learning
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-slate-100 mr-3">
                              <i className="fas fa-chart-bar"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500 text-left">
                              Predictive analytics
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-slate-100 mr-3">
                              <i className="fas fa-object-group"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500 text-left">
                              Classification tools
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Approach</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Accelerate adoption of AI innovation.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Automation to power sustainable transformation.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Embrace technology & leverage AI and Machine Learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-8">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal uppercase">
                  eCommerce & Marketing
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  AdTech & Marketing solutions solving business problems in
                  demand management, supply chain optimization, predictive
                  maintenance, and sales activation, among others. Personalized
                  recommendation search engines serving AI driven results.
                </p>
                <h3 className="text-3xl mb-2 font-semibold leading-normal uppercase">
                  Industry Experience
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  Use predictive analytics, ML and computer vision technologies
                  to gain actionable insights into consumer purchasing
                  behaviors, product placement/assortment, and store-level
                  performance.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="Artificial Intelligence"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                    src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/artificial_intelligence.jpg"
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
                        className="fill-islate-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Artificial Intelligence
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Enabling AI to identify patterns and behavior from
                      operational data through machine learning, computer vision
                      & deep learning.
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
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="AI Solutions"
                    src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/ai_solutions.png"
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
                        className="text-slate-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      AI Solutions
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Partner with industry leading startups or develop custom
                      AI tools for your use case.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold uppercase">
                    AI Powered Solutions
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    Transformative opportunity to respond to business challenges
                    and drive profitablity and growth.
                  </p>
                  <p className="mt-4 mb-4 text-lg leading-relaxed text-slate-500">
                    Applied AI technologies: Machine Learning, Natural Language
                    Processing, Computer Vision, Deep Learning, Autonomy
                    Solutions, RPA, Intelligent IoT, and Virtual Agents.
                  </p>
                  <h3 className="text-3xl font-semibold uppercase">
                    Rapid Adoption
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    Rapid AI & ML adoption through an accelerated program
                    integrating matching technology to your business & industry.
                  </p>
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
