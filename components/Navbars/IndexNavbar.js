import React from "react";
import Link from "next/link";
import AnnounceKit from "announcekit-react";

//components
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
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
                href="#pablo"
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
              "lg:flex flex-grow items-center bg-indigo-500 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/ai"
                >
                  AI
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/blockchain"
                >
                  Blockchain
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/smartfx"
                >
                  SmartX
                </a>
              </li>
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              {/*<li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/about"
                >
                  About
                </a>
          </li>*/}
              {/*<li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/contact"
                >
                  Contact
                </a>
        </li>*/}

              <li className="flex items-center">
                <span className="hover:text-blueGray-300 text-blueGray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  News{" "}
                  <AnnounceKit widget="https://announcekit.app/widgets/v2/30f3IA" />
                </span>
              </li>
            </ul>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/*<li className="flex items-center">
                <IndexDropdown />
          </li>*/}
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/about"
                  rel="noreferrer"
                  title="About"
                >
                  <i className="text-blueGray-300 fas fa-info-circle text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">About</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/contact"
                  rel="noreferrer"
                  title="Contact"
                >
                  <i className="text-blueGray-300 fas fa-at text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Contact</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/company/lxtgroup"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <i className="text-blueGray-300 fab fa-linkedin text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">LinkedIn</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://angel.co/company/lxt-group/"
                  target="_blank"
                  rel="noreferrer"
                  title="Angel"
                >
                  <i className="text-blueGray-300 fab fa-angellist text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">AngelCo</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://discord.gg/8nZndQn6m6"
                  target="_blank"
                  rel="noreferrer"
                  title="Discord"
                >
                  <i className="text-blueGray-300 fab fa-discord text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Discord</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
