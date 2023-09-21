"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="inline-flex h-content w-auto stroke-2 my-2">
          <Logo />
        </Link>
        <Link
          href="/about"
          id="About"
          alt="About"
          className="btn btn-ghost hover:text-secondary text-base font-bold ml-2 whitespace-nowrap uppercase"
        >
          Lexington Tech LLC
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost mask mask-squircle avatar"
          >
            <Menu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52"
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
          </ul>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 hover:text-accent"
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

function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 448 512"
      className="fill-current hover:text-secondary"
    >
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}
