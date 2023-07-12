"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

export default function NotFound({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold uppercase">AI Unavailable</h1>
          <Player
            autoplay
            loop
            src="/error404.json"
            style={{ height: "500px", width: "500px" }}
            className="m-8"
          ></Player>

          <button className="btn-error btn uppercase text-base-content">
            <Link href="/">HOME</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
