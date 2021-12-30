import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-indigo-900 pt-8 pb-6">
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
              className="fill-indigo-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-slate-200">
                Find out more!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-slate-300">
                We are on these platforms, and we respond in 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a
                  className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/company/lexingtontech"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <button
                    className="bg-indigo-200 text-slate-900 hover:text-slate-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-linkedin"></i>
                  </button>
                </a>
                <a
                  className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                  href="https://angel.co/company/lexingtontech/"
                  target="_blank"
                  rel="noreferrer"
                  title="Angel"
                >
                  <button
                    className="bg-indigo-200 text-slate-900 hover:text-slate-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-angellist"></i>
                  </button>
                </a>
                <a
                  className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                  href="https://discord.gg/RcEeXkdGcQ"
                  target="_blank"
                  rel="noreferrer"
                  title="Discord"
                >
                  <button
                    className="bg-indigo-200 text-slate-900 hover:text-slate-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-discord"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-slate-900 text-sm font-semibold mb-2">
                    Lexington Tech LLC
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about">
                        <a
                          href="#lxt"
                          className="text-slate-300 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        >
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a
                          href="#lxt"
                          className="text-slate-300 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        >
                          Contact Us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/nonprofit">
                        <a
                          href="#lxt"
                          className="text-slate-300 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        >
                          Non-Profit
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-slate-900 text-sm font-semibold mb-2">
                    Legal
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/terms">
                        <a
                          href="#lxt"
                          className="text-slate-300 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        >
                          Terms of Service
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy">
                        <a
                          href="#lxt"
                          className="text-slate-300 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        >
                          Privacy Policy
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-text-slate-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://lexingtontech.us"
                  className="text-slate-500 hover:text-slate-300"
                >
                  Lexington Tech LLC
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
