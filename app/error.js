"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Player
            autoplay
            loop
            src="https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lottie/error404.json"
            style={{ height: "400px", width: "400px" }}
            className="m-8"
          ></Player>
          <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
            AI Computation Error
          </h1>
          <div className="join">
            <button className="btn-info btn mr-3 uppercase text-base-content">
              <Link href="/"> Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
