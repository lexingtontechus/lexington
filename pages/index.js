/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useState, useEffect } from "react";
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
              <div className="pt-24 w-full lg:w-10/12 px-4 ml-auto mr-auto text-center justify-center">
                <div className="p-2">
                  <h1 className="text-white font-semibold text-3xl text-center uppercase pb-4">
                    Transforming Business With AI Technologies
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

        <section className="mt-0 md:mt-0 pb-20 relative bg-slate-400">
          {/* Wholesale Warehouse */}
          <div className="container mx-auto px-4 pb-16 pt-16">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold uppercase">
                    Wholesale Warehouse
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300">
                    This is a model of a wholesale warehouse built using network
                    markup shapes. The warehouse is divided into several zones
                    and has several staff types. The zone utilization is
                    measured and displayed as a bar chart near each zone.
                    Resource capacities can be changed dynamically using text
                    input. A separate screen displays the resource utilization
                    over time.
                  </p>
                </div>
              </div>

              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto mt-16">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <iframe
                    className="w-full align-middle rounded-t-lg"
                    width="100%"
                    height="400"
                    allow="fullscreen"
                    src="https://cloud.anylogic.com/assets/embed?modelId=4b6944d0-1426-4db4-a246-6f61ccc3c4a5"
                    title="Wholesale Warehouse"
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
                        className="fill-slate-700 fill-current"
                      ></polygon>
                    </svg>*/}
                    <h4 className="text-xl font-bold text-white uppercase">
                      Wholesale Warehouse
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      This simulation demonstrates the use case of applied AI
                      optimizing resource utilization in a warehouse.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Flexible Manufacturing */}
          <div className="container mx-auto px-4 pb-16 pt-16">
            <div className="items-center flex flex-wrap">
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto mt-16">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <iframe
                    className="w-full align-middle rounded-t-lg"
                    width="100%"
                    height="400"
                    allow="fullscreen"
                    src="https://cloud.anylogic.com/assets/embed?modelId=aca0a876-e208-4f1d-ac1c-a03d97399bb6"
                    title="Flexible Manufacturing"
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
                        className="fill-slate-700 fill-current"
                      ></polygon>
                   </svg>*/}
                    <h4 className="text-xl font-bold text-white uppercase">
                      Flexible Manufacturing
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Thi simulation demonstrates supply chain efficiency of
                      supply/demand availability through AI demand forecasting.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold uppercase">
                    Flexible Manufacturing
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300">
                    This is a concept model of a supply chain where each
                    producer makes some finished product from raw material
                    supplied by another producer. The production stops when the
                    amount of finished product at the producer’s warehouse
                    reaches a certain threshold, and similarly, raw material is
                    ordered when its present amount (+ on order amount) falls
                    lower than ordering threshold.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*HYPERLOCAL */}
          <div className="container mx-auto  px-4 pb-16 pt-16">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <h3 className="text-3xl font-semibold uppercase">
                    User Satisfaction
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300">
                    This model is based on an actual model built for a client.
                    The client offered a service that was subject to
                    interruption, downtime, and similar issues (e.g., an
                    Internet provider). When the service is interrupted, the
                    users of this service submit requests for the service to be
                    restored. These requests are processed and the service
                    restored on an individual level. The users have a varying
                    level of satisfaction for the service based on the service’s
                    performance.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300">
                    The users are modeled as agents. Each user has individual
                    behavior and attitude towards the service. The users
                    interact and share their experiences. The process of
                    handling the service restoration requests is modeled in a
                    discrete event way (as a process flowchart built with the
                    Process Modeling Library) at the global level. The model
                    shows the impact of the capacity of request processors on
                    the overall user market.
                  </p>
                </div>
              </div>
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto mt-16">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                  <iframe
                    className="w-full align-middle rounded-t-lg"
                    width="100%"
                    height="400"
                    allow="fullscreen"
                    src="https://cloud.anylogic.com/assets/embed?modelId=91968493-afdd-412a-81aa-31b4b5f8d387"
                    title="User Satisfaction"
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
                        className="fill-slate-700 fill-current"
                      ></polygon>
                   </svg>*/}
                    <h4 className="text-xl font-bold text-white uppercase">
                      User Satisfaction
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      This simulation demonstrates service delivery optimization
                      through AI processing of service requests.
                    </p>
                  </blockquote>
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
