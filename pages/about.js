import React from "react";
//import Link from "next/link";
import Head from "next/head";
//import Image from "next/image";

//import Navbar from "components/Navbars/AuthNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
//Images
//import ImgLogo from "../public/logo_lxtgroup_circle.svg";

export default function About() {
  return (
    <>
      <Head>
        <title>Lexington | About</title>
        <meta property="description=" content="BTAB Group" key="description" />
      </Head>
      <IndexNavbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="Lexington"
                        layout="responsive"
                        src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/logo_lxt.svg"
                        width="150"
                        height="150"
                        className="rounded-half h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px hover:outline-indigo-700"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-16 sm:mt-0">
                      <button
                        className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <a href="/contact">Contact</a>
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          3
                        </span>
                        <span className="text-sm text-blueGray-400">Funds</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          6
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Investments
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          4
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Startups
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Lexington Tech LLC
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-600"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    Subsidiary of the Btab Group.
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    Powering a new social commerce business. Empowering social
                    influence & commerce through the unique Btab marketplace
                    platform.
                  </div>
                  <button
                    className="align-middle bg-white text-white w-4 h-4 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <img
                      src="/polygon.svg"
                      alt="Polygon"
                      height="25"
                      width="25"
                    />
                  </button>
                  <a
                    className="mb-2 text-blueGray-600 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    href="https://polygonscan.com/tx/0x120cd9cc6b3c8b143a56dc51f10d39624df4d1880ff5fe00ddc66c9234a57e03"
                    alt="Polygon"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Verify On Polygon
                  </a>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Our focus is sustainable projects.
                      </h3>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        <ul>
                          <li>Cell and Plant-Based</li>
                          <li>From Bench to Production</li>
                          <li>Crypto-Hedge Fund</li>
                          <li>SmartFX</li>
                          <li>Web 3.0</li>
                        </ul>
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Part of the publicly accessible Ethereum blockchain.
                        <br />
                        Providing an impressive level of openness, transparency
                        and enhanced security.
                      </p>
                    </div>
                  </div>
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
