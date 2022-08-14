import React from "react";
import Link from "next/link";
import AnnounceKit from "announcekit-react";
//import Script from "next/script";

//components
//import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        async
        src="https://cdn.announcekit.app/widget-v2.js"
        onLoad={() => {
          window.announcekit = window.announcekit || {
            queue: [],
            on: function (n, x) {
              window.announcekit.queue.push([n, x]);
            },
            push: function (x) {
              window.announcekit.queue.push(x);
            }
          };

          window.announcekit.push({
            widget: "https://announcekit.app/widgets/v2/30f3IA",
            selector: ".announcekit-widget",
            lang: "en"
          });
        }}
      />*/}

      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-900 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              alt="Lexington Tech"
              height="40"
              width="40"
              className="max-w-full rounded-lg shadow-xl inline-block"
              src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/logo_lxt.svg"
            />{" "}
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#lxt"
              >
                Lexington
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="bg-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-indigo-900 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link href="/ai">
                  <a
                    href="#lxt"
                    className="hover:text-slate-800 text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    AI
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/blockchain">
                  <a
                    href="#lxt"
                    className="hover:text-slate-800 text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    Blockchain
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/smartfx">
                  <a
                    href="#lxt"
                    className="hover:text-slate-800 text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    SmartX
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/web3">
                  <a
                    href="#lxt"
                    className="hover:text-slate-800 text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    WEB3
                  </a>
                </Link>
              </li>

              {/*<li className="flex items-center">
                <span className="hover:text-slate-800 text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  News{" "}
                  <AnnounceKit widget="https://announcekit.app/widgets/v2/30f3IA" />
                </span>
          </li>*/}
            </ul>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center hover:text-slate-800 text-slate-300 ">
                <Link href="/about">
                  <a
                    href="#lxt"
                    className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    title="About"
                  >
                    <i className="fas fa-info-circle text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">About</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center hover:text-slate-800 text-slate-300 ">
                <Link href="/contact">
                  <a
                    href="#lxt"
                    className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    title="Contact"
                  >
                    <i className="fas fa-at text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Contact</span>
                  </a>
                </Link>
              </li>

              <li className="flex items-center hover:text-slate-800 text-slate-300 ">
                <Link href="https://lexingtontech.substack.com/">
                  <a
                    href="https://lexingtontech.substack.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    title="Substack"
                  >
                    <img
                      src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/substack.png"
                      alt="Substack"
                      height="18"
                      width="28"
                    />
                    <span className="lg:hidden inline-block ml-2">
                      Substack
                    </span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center hover:text-slate-800 text-slate-300 ">
                <Link href="https://medium.com/@lexingtontech">
                  <a
                    href="https://medium.com/@lexingtontech"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    title="Medium"
                  >
                    <i className="fa-brands fa-medium text-lg leading-lg" />
                    <span className="lg:hidden inline-block ml-2">Medium</span>
                  </a>
                </Link>
              </li>

              <li className="flex items-center hover:text-slate-800 text-slate-300 ">
                <span
                  className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  title="News"
                >
                  <AnnounceKit widget="https://announcekit.app/widgets/v2/30f3IA">
                    <i className="hover:text-slate-800 text-slate-300 fas fa-rss text-lg leading-lg mr-2" />
                    <span className="lg:hidden inline-block">News</span>
                  </AnnounceKit>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
