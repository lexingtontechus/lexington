import Link from "next/link";
import Image from "next/image";
export default function SpeedDial() {
  return (
    <div className="fixed z-40 right-5 bottom-10">
      <div className="fab fab-flower">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-lg btn-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Open Menu"
            fill="currentColor"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
          </svg>
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <div className="fab-close">
          <span className="btn btn-circle btn-lg btn-secondary">✕</span>
        </div>
        {/* buttons that show up when FAB is open */}
        <button className="btn btn-circle btn-lg bg-[#676767]">
          <Link
            aria-label="BTAB Group"
            href="https://btabcorp.com/portfolio/lexington-tech/"
            className="tooltip tooltip-top"
            data-tip="BTAB Group"
            target="_blank"
          >
            <span className="text-3xl text-lime-600 font-black h-[40px] w-[40px] px-2">
              B
            </span>
          </Link>
        </button>
        <button className="btn btn-circle btn-lg bg-[#0a66c2]">
          <Link
            href="https://linkedin.com/company/lexingtontech"
            className="tooltip tooltip-top"
            data-tip="LinkedIn"
            target="_blank"
          >
            <LinkedIn />
          </Link>
        </button>
        <button className="btn btn-circle btn-lg bg-white">
          <Link
            aria-label="WEB3 Chat"
            href="https://app.push.org/chat/lexingtontechus.nft"
            className="tooltip tooltip-top"
            data-tip="WEB3 Chat"
            target="_blank"
            alt="Push Chat lexingtontech.nft"
          >
            <Push />
          </Link>
        </button>
      </div>
    </div>
  );
}

function LinkedIn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[36px] w-[36px]"
      viewBox="0 0 64 64"
      fill="#1d4ed8"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#0a66c2]"
        d="M55.92,4H8.08A4.08,4.08,0,0,0,4,8.08V55.92A4.08,4.08,0,0,0,8.08,60H55.92A4.08,4.08,0,0,0,60,55.92V8.08A4.08,4.08,0,0,0,55.92,4ZM20,52H12V25h8ZM16,20.7a4.7,4.7,0,0,1,0-9.4h0a4.7,4.7,0,0,1,0,9.4ZM52,52H44V37.81c0-4.31-2.73-6.11-5-6.11a5.82,5.82,0,0,0-6,6.21V52H25V25h7.53v3.79h.11c.8-1.64,4.44-4.37,9.13-4.37S52,27.59,52,35.76Z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white"
        d="M52,35.76V52H44V37.81c0-4.31-2.73-6.11-5-6.11a5.82,5.82,0,0,0-6,6.21V52H25V25h7.53v3.79h.11c.8-1.64,4.44-4.37,9.13-4.37S52,27.59,52,35.76ZM16,11.3A4.7,4.7,0,1,0,20.7,16,4.69,4.69,0,0,0,16,11.3ZM12,52h8V25H12Z"
      />
    </svg>
  );
}

function Push() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[36px] w-[36px] fill-[#d548ec]"
      viewBox="0 0 512 512"
    >
      <path
        class="st1"
        d="M138.4,413.1c-8.4,0-15.3-6.9-15.3-15.3v-200.3c0-8.4,6.9-15.3,15.3-15.3h43.8c13.4,0,24.2-10.8,24.2-24.2v-43.8c0-8.4,6.9-15.3,15.3-15.3h152c8.4,0,15.3,6.9,15.3,15.3v127.8c0,8.4-6.9,15.3-15.3,15.3h-43.8c-13.4,0-24.2,10.8-24.2,24.2v43.7c0,8.4-6.9,15.3-15.3,15.3h-59.9c-13.4,0-24.2,10.8-24.2,24.2v33.1c0,8.4-6.9,15.3-15.3,15.3h-52.6ZM230.5,182.1c-13.4,0-24.2,10.8-24.2,24.2v26.9c0,13.4,10.8,24.2,24.2,24.2h51c13.4,0,24.2-10.8,24.2-24.2v-26.9c0-13.4-10.8-24.2-24.2-24.2h-51Z"
      />
    </svg>
  );
}
