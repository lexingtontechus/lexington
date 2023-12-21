import Link from "next/link";
export default function About() {
  return (
    <main>
      <div className="hero min-h-screen svg-about">
        {/*<div className="hero-overlay"></div>*/}
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-zinc-50 uppercase">
              Lexington Tech
            </h1>
            <p className="my-8 text-2xl font-semibold">
              Business & Technology Management Consulting
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-8">
        <div className="p-8">
          <Logo />
        </div>
        <div className="text-center pt-8">
          <h3 className="text-3xl font-semibold leading-normal mb-2 uppercase">
            Lexington Tech LLC
          </h3>
          <div className="text-sm leading-normal mt-0 mb-2 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-lg"></i>
            Los Angeles, California
          </div>
          <div className="align-center my-4">
            <ul className="menu menu-horizontal bg-base-200 rounded-box">
              <li>
                <Link
                  href="https://ud.me/lexingtontechus.nft"
                  target="_blank"
                  className="tooltip hover:bg-accent"
                  data-tip="Verify on Unstoppable Domains"
                >
                  <img
                    src="data:image/png;base64,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"
                    alt="unstoppable domains"
                    height="25px"
                    width="25px"
                    className="py-0.5"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://btabcorp.com/portfolio/lexington-tech/"
                  target="_blank"
                  className="font-black text-xl text-lime-500 tooltip hover:bg-accent"
                  data-tip="BTAB ECOMMERCE GROUP INC."
                >
                  <span className="h-4 w-8">B</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/company/lexingtontech"
                  target="_blank"
                  className="tooltip hover:bg-accent"
                  data-tip="LinkedIn"
                >
                  <LinkedIn />
                </Link>
              </li>
              <li>
                <Link
                  href="https://medium.com/@lexingtontech"
                  target="_blank"
                  className="tooltip hover:bg-accent"
                  data-tip="Medium"
                >
                  <Medium />
                </Link>
              </li>
              <li>
                <Link
                  href="https://lexingtontech.substack.com/"
                  target="_blank"
                  className="tooltip hover:bg-accent"
                  data-tip="Substack"
                >
                  <Substack />
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-2 mb-2 leading-relaxed ">
            Part of the publicly accessible IPFS network on the Ethereum
            blockchain.
          </div>
          <div className="text-xl leading-normal font-bold my-4">
            Subsidiary of{" "}
            <span>
              <Link
                href="https://www.btabcorp.com"
                target="_blank"
                className="hover:text-accent"
              >
                BTAB GROUP, INC.
              </Link>
            </span>
          </div>
          <div className="text-xl leading-normal font-bold my-4">
            <Link
              href="https://www.otcmarkets.com/stock/BBTT/overview"
              target="_blank"
              className="italic hover:text-accent"
            >
              Btab Ecommerce Group, Inc. (OTC:BBTT)
            </Link>
          </div>
          <div className="mt-2 mb-2">
            Powering a new social eCommerce business.
            <p className="mt-2 ">
              Empowering social influence & eCommerce through the unique Btab
              marketplace platform.
            </p>
            <p className="italic mt-2 ">
              "The next generation eCommerce company for every family in the
              world".
            </p>
          </div>
        </div>
        <div className="my-8 border-t border-accent text-center"></div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold leading-normal mb-2">
            Building Btab's infrastructure projects.
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            <ul>
              <li>MACH eCommerce</li>
              <li>WEB3</li>
              <li>Defi Fintech payments</li>
              <li>Supply chain logistics</li>
              <li>AI applications</li>
            </ul>
          </p>
        </div>
      </section>
    </main>
  );
}

function LogoFuturistic() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 312.5 312.5"
      className="size-64 mx-auto"
    >
      <g transform="matrix(6.25,0,0,6.25,0.31249597668647766,0)" fill="#e2e8f0">
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
        transform="matrix(3.8212932024467334,0,0,3.8212932024467334,48.357413595106536,57.041305021540545)"
        fill="#0f172a"
      >
        <path
          d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M29.039 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M29.039 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M39.56 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M47.706 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z"
          fill="#0f172a"
        />
      </g>
    </svg>
  );
}
function LogoCorporate() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="max-h-[200px] max-w-[200px] mx-auto"
      viewBox="0 0 312.5 312.5"
    >
      <g
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

function Polygon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125" height="2em">
      <defs>
        <clipPath>
          <rect
            id="Rectangle_32"
            data-name="Rectangle 32"
            width="125"
            height="125"
            transform="translate(385 345)"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g id="favicon" transform="translate(-385 -345)">
        <g id="Mask_Group_3" data-name="Mask Group 3">
          <path
            id="Path_151"
            data-name="Path 151"
            d="M91.487,31.85a7.794,7.794,0,0,0-7.605,0L66.434,41.97l-11.855,6.6L37.132,58.69a7.8,7.8,0,0,1-7.605,0L15.658,50.77a7.566,7.566,0,0,1-3.8-6.38V28.77a7.114,7.114,0,0,1,3.8-6.38l13.645-7.7a7.8,7.8,0,0,1,7.605,0l13.645,7.7a7.566,7.566,0,0,1,3.8,6.38V38.89l11.855-6.82V21.95a7.114,7.114,0,0,0-3.8-6.38L37.132,1.051a7.8,7.8,0,0,0-7.605,0L3.8,15.571A7.114,7.114,0,0,0,0,21.95V51.21a7.114,7.114,0,0,0,3.8,6.38l25.724,14.52a7.8,7.8,0,0,0,7.605,0l17.447-9.9,11.855-6.82,17.448-9.9a7.794,7.794,0,0,1,7.605,0l13.645,7.7a7.567,7.567,0,0,1,3.8,6.38v15.62a7.114,7.114,0,0,1-3.8,6.38l-13.645,7.92a7.8,7.8,0,0,1-7.605,0l-13.645-7.7a7.567,7.567,0,0,1-3.8-6.38V65.289l-11.855,6.82v10.12a7.114,7.114,0,0,0,3.8,6.38l25.724,14.52a7.8,7.8,0,0,0,7.605,0l25.724-14.52a7.567,7.567,0,0,0,3.8-6.38V52.97a7.114,7.114,0,0,0-3.8-6.38Z"
            transform="translate(387 354.939)"
            fill="#8247e5"
          />
        </g>
      </g>
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2em"
      viewBox="0 0 448 512"
      fill="#e2e8f0"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}

function Medium() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2em"
      viewBox="0 0 640 512"
      fill="#e2e8f0"
    >
      <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
    </svg>
  );
}
function Substack() {
  return (
    <svg
      role="img"
      width="16"
      height="2em"
      viewBox="0 0 16 18"
      fill="#ff6719"
      strokeWidth="1.8"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M16 4H0V6H16V4Z"></path>
        <path d="M0 8V18L7.9993 13.534L16 18V8H0Z"></path>
        <path d="M16 0H0V2H16V0Z"></path>
      </g>
    </svg>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 340.15116964277064"
      width="300"
      height="340.15116964277064"
      className="mx-auto"
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
