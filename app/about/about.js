import Link from "next/link";
export default function About() {
  return (
    <main>
      <div className="hero min-h-screen svg-about">
        {/*<div className="hero-overlay"></div>*/}
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase text-accent">
              Lexington Tech
            </h1>
            <p className="my-8 text-2xl font-semibold">
              Management & Technology Consulting
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-8">
        <div className="justify-center pt-8 pb-4">
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
                  href="https://linkedin.com/company/lexingtontech"
                  target="_blank"
                >
                  <LinkedIn />
                </Link>
              </li>
              <li>
                <Link
                  href="https://btabcorp.com/portfolio/lexington-tech/"
                  target="_blank"
                  className="font-black text-xl text-lime-500"
                >
                  B
                </Link>
              </li>
              <li>
                <Link href="https://ud.me/lexingtontechus.nft" target="_blank">
                  <Polygon />
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/@lexingtontech" target="_blank">
                  <Medium />
                </Link>
              </li>
              <li>
                <Link
                  href="https://lexingtontech.substack.com/"
                  target="_blank"
                >
                  <Substack />
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-2 mb-2 leading-relaxed ">
            Part of the publicly accessible Ethereum blockchain.
          </div>
          <div className="text-xl leading-normal font-bold my-4">
            Subsidiary of{" "}
            <span>
              <Link
                href="https://www.btabcorp.com"
                target="_blank"
                className="hover:text-accent"
              >
                Btab Group Inc.
              </Link>
            </span>
          </div>
          <div className="text-xl leading-normal font-bold my-4">
            <Link
              href="https://www.otcmarkets.com/stock/BBTT/overview"
              target="_blank"
              className="italic hover:text-accent"
            >
              (OTC:BBTT)
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

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="max-h-[200px] max-w-[200px] mx-auto"
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
