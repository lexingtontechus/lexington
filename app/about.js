import Link from "next/link";
import LogoLXT from "./components/logo";

export default function About() {
  return (
    <main className="text-wrap text-primary">
      <section className="container mx-auto p-8">
        <div className="mx-auto text-center max-w-md">
          <LogoLXT size={48} padding={2} />
        </div>
        <div className="text-center pt-8">
          <h3 className="text-3xl font-semibold leading-normal mb-2 uppercase">
            Lexington Tech LLC
          </h3>
          <div className="text-sm leading-normal mt-0 mb-2 font-bold">
            <i className="fas fa-map-marker-alt mr-2 text-lg"></i>
            Los Angeles, California
          </div>
        </div>
      </section>
      <section className="container text-center mx-auto p-4">
        <ul className="max-w-lg mx-auto text-center menu menu-horizontal bg-base-300 rounded-box">
          <li>
            <Link
              href="https://ud.me/lexingtontechus.nft"
              target="_blank"
              className="tooltip tooltip-top"
              data-tip="Unstoppable Domains Verification"
            >
              <img
                src="data:image/png;base64,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"
                alt="unstoppable domains"
                height="40px"
                width="40px"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://btabcorp.com/portfolio/lexington-tech/"
              className="tooltip tooltip-top"
              data-tip="BTAB Group"
              target="_blank"
            >
              <span className="text-3xl text-lime-600 font-black h-[40px] w-[40px] px-2">
                B
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/company/lexingtontech"
              className="tooltip tooltip-top"
              data-tip="LinkedIn"
              target="_blank"
            >
              <LinkedIn />
            </Link>
          </li>
          <li>
            <Link
              href="https://app.push.org/chat/lexingtontechus.nft"
              className="tooltip tooltip-top"
              data-tip="WEB3 Push Chat"
              target="_blank"
              alt="Push Chat lexingtontech.nft"
            >
              <figure className="image-full">
                <PushBell />
              </figure>
            </Link>
          </li>
        </ul>
      </section>
      <section className="container mx-auto text-center p-4">
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
              className="hover:text-accent text-secondary"
            >
              BTAB GROUP, INC.
            </Link>
          </span>
        </div>
        <div className="text-xl font-bold my-4">
          <Link
            href="https://www.otcmarkets.com/stock/BBTT/overview"
            target="_blank"
            className="italic hover:text-accent text-secondary"
          >
            Btab Ecommerce Group, Inc. (OTC:BBTT)
          </Link>
        </div>
        <div className="mt-2 mb-2 text-md">
          Powering a new social <span className="lowercase">e</span>Commerce
          business.
          <p className="mt-2 ">
            Empowering social influence & eCommerce through Btab's marketplace
            platform.
          </p>
          <p className="italic mt-2 ">
            "The next generation <span className="lowercase">e</span>Commerce
            company for every family in the world".
          </p>
        </div>

        <div className="my-8 border-t border-accent text-center"></div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold leading-normal mb-2">
            Building WEB3 Marketplaces.
          </h3>
          <ul className="mb-4 text-md leading-relaxed">
            <li>
              Composable <span className="lowercase">e</span>Commerce
            </li>
            <li>WEB3 Identity & Data Privacy</li>
            <li>AI Product Catalog Management</li>
            <li>AI Product Search & Recommendations</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function Polygon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 125 125"
      className="size-8"
    >
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
      className="h-[40px] w-[40px]"
      viewBox="0 0 448 512"
      fill="#1d4ed8"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}

function Medium() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[40px] w-[40px] text-primary"
      viewBox="0 0 640 512"
    >
      <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
    </svg>
  );
}
function Substack() {
  return (
    <svg
      role="img"
      className="h-[40px] w-[40px]"
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

function PushBell() {
  return (
    <svg
      className="h-[40px] w-[40px]"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2634 2.83632C25.7729 2.98433 26.8975 4.03422 26.7572 5.4654C26.6688 6.36622 26.6344 7.04146 27.1836 7.26913C31.8548 9.1947 34.6075 12.9045 34.1737 17.3292L33.4445 24.766C33.1104 28.1731 34.4367 28.9995 36.0631 30.4748C38.4187 32.6081 37.4541 36.4749 34.5392 36.1864L7.70649 33.5554C4.79109 33.2722 4.59588 29.2918 7.32105 27.6566C9.20091 26.5251 10.6645 25.9723 10.9986 22.5651L11.7278 15.1283C12.1617 10.7036 15.5825 7.59917 20.5388 6.6176C21.1202 6.50078 21.2191 5.83187 21.3075 4.93105C21.4483 3.49992 22.756 2.68852 24.2634 2.83632Z"
        className="fill-[#dd44b9]"
      />
      <path
        d="M26.3799 38.2337C26.1859 40.2123 24.9825 41.6232 23.1723 42.4451C21.3627 43.2665 19.2524 43.0595 17.64 41.9026C16.0234 40.7448 15.1175 39.127 15.3115 37.1484"
        className="fill-[#dd44b9]"
      />
    </svg>
  );
}

function PushChain() {
  return (
    <svg
      width="80"
      height="31"
      viewBox="0 0 80 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.344849 8.5456C0.344849 4.12732 3.92657 0.545593 8.34485 0.545593H71.2028C75.6211 0.545593 79.2028 4.12732 79.2028 8.54559V22.4544C79.2028 26.8726 75.6211 30.4544 71.2028 30.4544H8.34485C3.92658 30.4544 0.344849 26.8726 0.344849 22.4544V8.5456Z"
        fill="white"
      />
      <path
        d="M59.4006 23.6184V7.38162H65.385L69.5601 23.1545V7.38162H72.5755V23.6184H66.452L62.416 7.96151V23.6184H59.4006Z"
        fill="black"
      />
      <path
        d="M53.5977 23.6184V20.719L53.5977 10.281V7.38162H56.7291V10.281L56.7291 20.719V23.6184H53.5977Z"
        fill="black"
      />
      <path
        d="M48.3934 23.6183L47.396 19.8839H40.9941L39.9967 23.6183H36.8189L41.1796 7.38159H47.2568L51.5712 23.6183H48.3934ZM41.8059 16.8685H46.5842L44.195 7.96148L41.8059 16.8685Z"
        fill="black"
      />
      <path
        d="M32.0666 23.6184V16.7989H25.4559V23.6184H22.3245V7.38162H25.4559V13.7835H32.0666V7.38162H35.198V23.6184H32.0666Z"
        fill="black"
      />
      <path
        d="M13.8379 23.8271C9.75555 23.8271 6.97211 21.322 6.97211 16.8917V14.1083C6.97211 9.67795 9.75555 7.17285 13.8379 7.17285C17.8507 7.17285 20.5878 9.446 20.7038 13.3892H17.5724C17.4796 11.3248 16.2039 10.1882 13.8379 10.1882C11.4024 10.1882 10.1035 11.5336 10.1035 14.1083V16.8917C10.1035 19.4664 11.4024 20.9277 13.8379 20.9277C16.1343 20.9277 17.4332 19.7679 17.5724 17.7963H20.7038C20.5182 21.6468 17.7811 23.8271 13.8379 23.8271Z"
        fill="black"
      />
    </svg>
  );
}
