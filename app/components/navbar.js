"use client";
import Link from "next/link";
import LogoLXT from "./logo";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          href="/"
          className="inline-flex h-content w-auto stroke-2 my-2 tooltip tooltip-bottom"
          data-tip="Home"
        >
          <LogoLXT size={12} height={12} width={12} />
        </Link>
        <Link
          href="/about"
          id="About"
          alt="About"
          className="hover:text-accent text-2xl font-bold ml-2 p-2 whitespace-nowrap uppercase tooltip tooltip-bottom"
          data-tip="About"
        >
          Lexington
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost hover:glass hover:fill-accent mask mask-squircle avatar tooltip-bottom"
            data-tip="Menu"
          >
            <Menu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href="/services"
                className="hover:text-secondary-focus block px-4 py-2 text-sm uppercase"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/web3"
                className="hover:text-secondary-focus block px-4 py-2 text-sm uppercase"
              >
                WEB3
              </Link>
            </li>
            <div className="divider divider-accent"></div>
            <li>
              <Link href="/ai" className="px-4 py-2 text-sm uppercase">
                AI
              </Link>
            </li>
            <li>
              <Link
                href="/ecommerce"
                className="hover:text-secondary-focus block px-4 py-2 text-sm uppercase"
              >
                eCommerce
              </Link>
            </li>
            <li>
              <Link
                href="/nonprofit"
                className="hover:text-secondary-focus block px-4 py-2 text-sm uppercase"
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
      viewBox="0 0 312.5 211.83246657671296"
      className="bg-slate-300 size-12 mask mask-squircle p-1 stroke-2 mx-auto"
    >
      <g
        transform="matrix(4.288688776400825,0,0,4.288688776400825,47.42262244719835,-5.580061746098252)"
        fill="#0F172A"
      >
        <path
          d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M26.187 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M26.187 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M33.856 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M42.002 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z"
          fill="#0F172A"
        />
      </g>
    </svg>
  );
}
function Logo1() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 340.15116964277064"
      className="size-12 btn glass mask mask-hexagon p-1"
    >
      <g
        transform="matrix(6.048385422138436,0,0,6.048385422138436,0.00004450431117322022,0.02524321256231135)"
        className="fill-primary"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M23.11 55.78L1.69 43.41A3.39 3.39 0 0 1 0 40.48V15.75a3.39 3.39 0 0 1 1.69-2.94L23.11.45a3.39 3.39 0 0 1 3.39 0l21.41 12.37a3.39 3.39 0 0 1 1.69 2.94v24.72a3.39 3.39 0 0 1-1.69 2.94L26.5 55.78a3.39 3.39 0 0 1-3.39 0z"
          className="fill-primary"
        />
      </g>
      <g
        transform="matrix(4.288688776400825,0,0,4.288688776400825,41.42262244719835,58.41993825390175)"
        className="fill-slate-800"
      >
        <path
          d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M26.187 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M26.187 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M33.856 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M42.002 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z"
          className="fill-slate-800"
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
      className="fill-current hover:fill-accent"
    >
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}
