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

export default function Blockchain() {
  //const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>Lexington | Blockchain</title>
        <meta
          property="og:title"
          content="Lexington Tech -  Blockchain-Powered dApps"
          key="title"
        />
      </Head>
      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-50">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559445368-b8a993676d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80')"
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
                    Blockchain-Powered DA
                    <span className="normal-case">pps</span>
                  </h1>

                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-slate-400 text-center">
                      Launch Web 3.0 blockchain domains or your own layer-2
                      Ethereum-based in-app currency. Blockchain technology is
                      live and ready to use today.
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
                      Build blockchain eCommerce dApps.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Efficient & sustainable blockchain technologies.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Future of eCommerce powered by Defi & crypto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                      <i className="fab fa-bitcoin"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Technologies</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Polygon - building and connecting Ethereum-compatible
                      blockchain networks
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
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-seedling"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Approach</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Implement wallet & token technologies.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Transition businesses to decentralized technologies.
                    </p>
                    <p className="mt-2 mb-4 text-slate-500">
                      Build DApps to power eCommmerce.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-16">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  IPFS + Hyperledger
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  IPFS (Interplantary File System) powers the Distributed Web
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-600">
                  A peer-to-peer hypermedia protocol designed to preserve and
                  grow humanity's knowledge by making the web upgradeable,
                  resilient, and more open.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-600">
                  Peer-to-peer IPFS retrieves pieces from multiple nodes at
                  once, enabling substantial bandwidth savings. With up to 60%
                  savings for video, IPFS makes it possible to efficiently
                  distribute high volumes of data without duplication.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="IPFS"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                    src="/ipfs5.svg"
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
                    <h4 className="text-xl font-bold text-white">Web 3.0</h4>
                    <p className="text-md font-light mt-2 text-white">
                      IPFS makes it simple to set up resilient networks for
                      mirroring data, and thanks to content addressing, files
                      stored using IPFS are automatically versioned. IPFS powers
                      the creation of diversely resilient networks that enable
                      persistent availability — with or without internet
                      backbone connectivity.
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
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="IPFS"
                    src="/ipfs6.svg"
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
                    <h4 className="text-xl font-bold text-white">Defi</h4>
                    <p className="text-md font-light mt-2 text-white">
                      Decentralized Finance (DeFi) is the movement that
                      leverages decentralized networks to transform old
                      financial products into trustless and transparent
                      protocols that run without intermediaries.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">Wallets & dApps</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    Gateway to the Ethereum Blockchain. Easy-to-use, open-source
                    platform allows you to generate wallets, token swaps & smart
                    contracts.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-indigo-100 mr-3">
                            <i className="fas fa-money-bill"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Lending & Borrowing
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-indigo-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">KYC & Identity</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-indigo-100 mr-3">
                            <i className="fas fa-tools"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Asset management tools
                          </h4>
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
