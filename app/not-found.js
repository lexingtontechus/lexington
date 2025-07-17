"use client"; // Error components must be Client Components

import Link from "next/link";
import LogoLXT from "./components/logo";
export default function NotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <LogoLXT size="64" padding="2" className="mx-auto" />
          <h1 className="m-4 text-5xl font-bold uppercase">
            WEB3 NODE STATION
          </h1>

          <button className="btn btn-error uppercase font-bold">
            <Link href="/">HOME</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
