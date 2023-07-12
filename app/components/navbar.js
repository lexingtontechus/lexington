"use client";

import Image from "next/image";
import Link from "next/link";

const logoImage = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="flex flex-1 items-start justify-start cursor-pointer">
        <Link href="/" className="inline-flex h-content w-auto stroke-2">
          <Logo />
        </Link>
        <Link
          href="/"
          id="Home"
          alt="Home"
          className="hover:text-accent text-base font-bold leading-relaxed inline-block ml-2 my-1 whitespace-nowrap uppercase"
        >
          Lexington Tech LLC
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn ">
            <Menu />
          </label>
          <ul
            tabIndex={0}
            className="mt-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/ai" className="px-4 py-2 text-sm">
                AI
              </Link>
            </li>
            <li>
              <Link href="/blockchain" className="px-4 py-2 text-sm">
                Blockchain
              </Link>
            </li>
            <li>
              <Link
                href="/ecommerce"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                eCommerce
              </Link>
            </li>
            <li>
              <Link
                href="/web3"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                WEB3
              </Link>
            </li>
            <li>
              <Link
                href="/nonprofit"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                NonProfit
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2em"
      viewBox="0 0 448 448"
      className="fill-stone-200"
    >
      <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </svg>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 312.5 312.5"
      preserveAspectRatio="xMidYMid meet"
      id="hfghagba"
    >
      <defs id="SvgjsDefs4797" />
      <g
        id="SvgjsG4798"
        featurekey="rootContainer"
        transform="matrix(6.25,0,0,6.25,0.31249597668647766,0)"
        fill="#e2e8f0" //slate200
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M24.95 0a25 25 0 1 0 25 25 25 25 0 0 0-25-25zm0 46.91a22 22 0 1 1 22-22 22 22 0 0 1-22 21.99z"
          fill="#e2e8f0"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M24.95 3.65a21.3 21.3 0 1 0 21.3 21.3 21.33 21.33 0 0 0-21.3-21.3z"
          fill="#e2e8f0"
        />
      </g>
      <g
        id="SvgjsG4799"
        featurekey="nameFeature-0"
        transform="matrix(2.6150626467234352,0,0,2.6150626467234352,51.397489143226416,88.24686516991014)"
        fill="#1e293b" //slate800
      >
        <path
          d="M21.6 40 l-19.84 0 l0 -28.24 l8.92 0 l0 21.12 l10.92 0 l0 7.12 z M55 40 l-10.52 0 l-6.16 -10.16 l-6.24 10.16 l-10.48 0 l10.92 -15.16 l-9.16 -13.08 l10.48 0 l4.48 7.76 l4.56 -7.76 l10.2 0 l-8.92 13.04 z M78.24 18.72 l-7.16 0 l0 21.28 l-8.92 0 l0 -21.28 l-7.2 0 l0 -6.96 l23.28 0 l0 6.96 z"
          fill="#1e293b"
        />
      </g>
    </svg>
  );
}
