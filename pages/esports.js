import React from "react";
//import Link from "next/link";
//import { useState, useEffect } from "react";
import Head from "next/head";
//import Image from "next/image";
//import ReactPlayer from "react-player";
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function esports() {
  //const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>Lexington | eSports</title>
        <meta
          property="og:title"
          content="Lexington Tech - eSports Technology."
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
                    eSports Technology
                  </h1>

                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-slate-400 text-center">
                      AI Powered Algorithmic Trading
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
                    <p className="mt-2 mb-4 text-slate-300">
                      Investing in the sustainable future of food & medical
                      advances.
                    </p>
                    <p className="mt-2 mb-4 text-slate-300">
                      Sustainable & high yield foodtech products & water
                      sources.
                    </p>
                    <p className="mt-2 mb-4 text-slate-300">
                      Future of eCommerce powered by virtual & augmented
                      reality.
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
                    <h6 className="text-xl font-semibold">Our Investments</h6>
                    <p className="mt-2 mb-4 text-slate-300">
                      We invest in plant-based & cell-based innovations. If you
                      are a start-ups that fits our missionInvesting in the
                      sustainable future of food & medical advances.
                    </p>
                    <p className="mt-2 mb-4 text-slate-300">
                      Sustainable & high yield foodtech products & water
                      sources.
                    </p>
                    <p className="mt-2 mb-4 text-slate-300">
                      Future of eCommerce powered by virtual & augmented
                      reality.
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
                    <h6 className="text-xl font-semibold">Our Growth</h6>
                    <p className="mt-2 mb-4 text-slate-300">
                      Accelerating innovation and action for sustainable growth.
                    </p>
                    <p className="mt-2 mb-4 text-slate-300">
                      Embracing technology to power sustainable food systems
                      transformation.
                    </p>
                    <p className="mt-2 mb-4 text-slate-300">
                      Embracing technology & leveraging AI and Machine Learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-16">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal uppercase">
                  Quant Algorithm Trading
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  eSports Management
                </p>
                <ul className="list-none mr-auto">
                  <li className="flex items-center">
                    Fan engagement & loyalty
                  </li>
                  <li className="flex items-center">Digital revenue streams</li>
                  <li className="flex items-center">Digital live streaming</li>
                  <li className="flex items-center">
                    eCommerce & merchandising
                  </li>
                  <li className="flex items-center">Mobile app development</li>
                  <li className="flex items-center">
                    Equipment & inventory management
                  </li>
                  <li className="flex items-center">League management</li>
                  <li className="flex items-center">Stadium operations</li>
                </ul>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  There are various sub categories of quantitative trading to
                  include High Frequency Trading (HFT), Statistical Arbitrage
                  and Market Prediction Analysis.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="Food Loves Tech"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                    src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxtgroup-images/foodlovestech.png"
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
                        className="fill-slate-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Quant Algorithms
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      FoodTech is an ecosystem made of all the agrifood
                      entrepreneurs and startups (from production to
                      distribution) innovating on the products, distribution,
                      marketing or business model.
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
                className="text-slate-400 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="BioTech"
                    src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxtgroup-images/biotech.png"
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
                    <h4 className="text-xl font-bold text-white">BioTech</h4>
                    <p className="text-md font-light mt-2 text-white">
                      BioTech is the use of living organisms & synthetic
                      alternatives to produce sustainable & affordable bio &
                      pharma applications.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold uppercase">
                    AI Powered Solutions
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300">
                    Lexington’s risk based trading strategies with a statistical
                    hedge allows for a positive equity curve with very low
                    draw-downs. While we offer many algorithmic strategies, with
                    different risk parameters, our core strategies are non
                    directional and trades based on real time market data and
                    not any lagging statistical driven indicators.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300">
                    Applied AI technologies: Machine Learning, Natural Language
                    Processing, Sentiment Analysis & Deep Learning.
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
