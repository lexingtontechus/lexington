import React from "react";
//import Link from "next/link";
//import { useState, useEffect } from "react";
import Head from "next/head";
//import Image from "next/image";
//import ReactPlayer from "react-player";
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function SmartFX() {
  //const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>Lexington | SmartFX</title>
        <meta
          property="og:title"
          content="Lexington Tech - SmartFX Quant Algorithms."
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
                    SmartFX
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
                    <p className="mt-2 mb-4 text-slate-500">
                      Develop & curate quant algorithms.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Building next-gen quant trading technologies.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Democratize social trading & signal copy subscriptions.
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
                    <p className="mt-2 mb-4 text-slate-500">
                      Partnered with an SEC approved crypto hedge fund.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Sustained high yield trading accounts are powered by our
                      own algorithms.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
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
                    <p className="mt-2 mb-4 text-slate-500">
                      Deep learning across continously growing datasets.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Technology enabled decision making & prediction.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Leveraging AI & ML for risk management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-20">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal uppercase">
                  Quant Algorithm Trading
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  Algorithmic Trading, also known as Quant Trading is a trading
                  style which utilizes market prediction algorithms in order to
                  find potential trades.
                </p>

                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  There are various sub categories of quantitative trading to
                  include High Frequency Trading (HFT), Statistical Arbitrage
                  and Market Prediction Analysis.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="Quant Algorithmic Trading"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                    src="/quant_trading.jpg"
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
                        className="text-slate-700 fill-current"
                      ></polygon>
                    </svg>*/}
                    <h4 className="text-xl font-bold text-white">
                      Quant Algorithms
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Quantitative trading strategies leveraging,
                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                                <i className="fab fa-hive"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-slate-300">
                                Alternative Data
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                                <i className="fas fa-compress-arrows-alt"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-slate-300">
                                Obscure and Small Markets
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                                <i className="fas fa-comments-dollar"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-slate-300">
                                High-Frequency Trading
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-900 bg-indigo-200 mr-3">
                                <i className="fas fa-laptop-code"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-slate-300">
                                Machine Learning
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
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
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="5 Steps of Quant"
                    src="/5steps_quant.jpg"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    {/* <svg
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
                      Quant Investing
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Getting the right data quickly and combining it with the
                      knowledge and intuition that only people have still offers
                      very unique advantages to developing and executing the
                      right investment strategies.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold uppercase">
                    AI Powered Investments
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    Lexington’s risk based trading strategies with a statistical
                    hedge allows for a positive equity curve with very low
                    draw-downs. While we offer many algorithmic strategies, with
                    different risk parameters, our core strategies are non
                    directional and trades based on real time market data and
                    not any lagging statistical driven indicators.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
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
